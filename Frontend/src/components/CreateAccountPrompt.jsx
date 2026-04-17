import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lock, UserPlus } from 'lucide-react';

export default function CreateAccountPrompt() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <Card className="w-full max-w-md bg-white text-slate-900 shadow-xl">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
            <Lock className="h-6 w-6 text-blue-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-slate-900">
            Access Restricted
          </CardTitle>
          <CardDescription className="text-slate-600">
            Create an account to allow full access to quizzes and other features.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-slate-500 text-center">
            Join Learn Malawi to unlock personalized quizzes, track your progress, and access all educational resources.
          </p>
          <div className="flex flex-col space-y-2">
            <Button
              onClick={() => navigate('/register')}
              className="w-full"
              size="lg"
            >
              <UserPlus className="mr-2 h-4 w-4" />
              Create Account
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate('/login')}
              className="w-full"
              size="lg"
            >
              Already have an account? Sign In
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}