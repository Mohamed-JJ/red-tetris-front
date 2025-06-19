'use client';
import LoadingSpinner from '@/components/LoadingSpinner';
import { setToken } from '@/utils';
import {
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import { useEffect, useState } from 'react';

const Verify = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const path = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const handleAuthentication = async () => {
      try {
        // Get parameters from URL
        const token = searchParams.get('accessToken');
        const user_id = searchParams.get('uid');
        const user_name = searchParams.get('uname');

        // Validate required parameters
        if (!token || !user_id || !user_name) {
          throw new Error('Missing required authentication parameters');
        }

        // Set token and user info in storage
        setToken(token);
        localStorage.setItem('uid', user_id);
        localStorage.setItem('userName', user_name);

        // Add a small delay to show loading state (optional)
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Authentication successful, redirect to dashboard
        router.push('/dashboard');
        
      } catch (error: unknown) {
        console.error('Authentication error:', error);
        setError(error instanceof Error ? error.message : 'Authentication failed');
        setIsLoading(false);
        
        // Redirect to login page after 2 seconds
        setTimeout(() => {
          router.push('/login?error=auth_failed');
        }, 2000);
      }
    };

    handleAuthentication();
  }, [searchParams, router]);

  // Show error state
  if (error) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="text-red-500 text-center">
          <h2 className="text-xl font-semibold mb-2">Authentication Failed</h2>
          <p className="mb-4">{error}</p>
          <p className="text-sm text-gray-500">Redirecting to login...</p>
        </div>
      </div>
    );
  }

  // Show loading state
  if (isLoading) {
    return <LoadingSpinner text="Authenticating..." />;
  }

  // This should rarely be reached as we redirect on success
  return null;
};

export default Verify;