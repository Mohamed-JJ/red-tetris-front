"use client"

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';
import { api, checkToken, removeToken } from '@/utils';
import LoadingSpinner from '@/components/LoadingSpinner';

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const publicRoutes = ['/', '/auth'];
  const isPublicRoute = publicRoutes.includes(pathname);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        if (!checkToken()) {
          if (!isPublicRoute) {
            router.push('/auth');
          }
          setIsLoading(false);
          return;
        }
        const res = await api.get('/passport-auth/canAccess');
        setIsAuthenticated(true);
        setIsLoading(false);
      } catch (error) {
        if (checkToken()) {
          removeToken();
        }
        if (!isPublicRoute) {
          router.push('/');
        }
        setIsLoading(false);
      }
    };
  
    checkAuth();
  }, [pathname, isPublicRoute, router]);

  if (isLoading) {
    return <LoadingSpinner text='Authenticating...' />;
  }

  return (isAuthenticated || isPublicRoute) ? <>{children}</> : null;
};

export default AuthProvider;
