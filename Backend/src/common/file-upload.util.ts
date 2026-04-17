import { existsSync, mkdirSync } from 'fs';
import { diskStorage, StorageEngine } from 'multer';
import { extname, join } from 'path';
import { Request } from 'express';

const UPLOADS_ROOT = join(process.cwd(), 'uploads');

// Allowed MIME types for different file categories
export const ALLOWED_FILE_TYPES = {
  documents: {
    mimeTypes: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'text/plain'],
    extensions: ['.pdf', '.doc', '.docx', '.xls', '.xlsx', '.txt'],
    maxSize: 50 * 1024 * 1024, // 50MB
  },
  videos: {
    mimeTypes: ['video/mp4', 'video/mpeg', 'video/webm', 'video/quicktime', 'video/x-msvideo', 'application/x-mpegURL'],
    extensions: ['.mp4', '.mpeg', '.webm', '.mov', '.avi', '.m3u8'],
    maxSize: 500 * 1024 * 1024, // 500MB
  },
  images: {
    mimeTypes: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
    extensions: ['.jpg', '.jpeg', '.png', '.gif', '.webp'],
    maxSize: 10 * 1024 * 1024, // 10MB
  },
};

function ensureUploadDir(folder: string): string {
  const uploadPath = join(UPLOADS_ROOT, folder);
  if (!existsSync(uploadPath)) {
    mkdirSync(uploadPath, { recursive: true });
  }
  return uploadPath;
}

function createFilename(originalName: string): string {
  const extension = extname(originalName);
  const name = originalName
    .replace(/\n/g, '')
    .replace(/\r/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^a-zA-Z0-9\-_.]/g, '')
    .toLowerCase();
  return `${Date.now()}-${name}${extension}`;
}

export function fileFilterFactory(allowedTypes: keyof typeof ALLOWED_FILE_TYPES) {
  return (req: any, file: Express.Multer.File, callback: (error: Error | null, accepted?: boolean) => void) => {
    const config = ALLOWED_FILE_TYPES[allowedTypes];
    const extension = extname(file.originalname).toLowerCase();
    
    if (!config.extensions.includes(extension) && !config.mimeTypes.includes(file.mimetype)) {
      callback(new Error(`File type not allowed. Allowed: ${config.extensions.join(', ')}`));
      return;
    }
    
    callback(null, true);
  };
}

export function fileStorageOptions(folder: string, fileType?: keyof typeof ALLOWED_FILE_TYPES): { storage: StorageEngine; fileFilter?: any; limits?: any } {
  const options: any = {
    storage: diskStorage({
      destination(req, file, callback) {
        callback(null, ensureUploadDir(folder));
      },
      filename(req, file, callback) {
        callback(null, createFilename(file.originalname));
      },
    }),
  };

  if (fileType && ALLOWED_FILE_TYPES[fileType]) {
    options.fileFilter = fileFilterFactory(fileType);
    options.limits = { fileSize: ALLOWED_FILE_TYPES[fileType].maxSize };
  }

  return options;
}

export function buildFileUrl(req: Request, folder: string, filename: string): string {
  const host = req.get('host');
  const protocol = req.protocol;
  return `${protocol}://${host}/uploads/${folder}/${filename}`;
}
