'use client';

import { checkToken, removeToken } from '@/utils';
import axios from 'axios';
import { usePathname, useRouter } from 'next/navigation';
import React, { ReactNode, useEffect, useState } from 'react';
import '@/utils'

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter()
  const url = usePathname()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = checkToken(); // Ensure this function is synchronous or awaited if asynchronous
        if (!token) {
          if (url === "/")
            router.push("/auth")
          else if (url === '/auth') {}
          else
            router.push('/'); // Redirect to login if no token
        }
        const res = await axios.get('/passport-auth/canAccess');
        setIsAuthenticated(true)
      } catch (error: unknown) {
        if (checkToken())
          removeToken()
        router.push('/'); // Redirect to the landing page
      }
    };
  
    checkAuth(); // Call the async function
  }, [url]);

  return isAuthenticated && <>{children}</>;
};

export default AuthProvider;
