'use client';

import { checkToken, removeToken } from '@/utils';
import axios from 'axios';
import { usePathname, useRouter } from 'next/navigation';
import React, { ReactNode, useEffect, useState } from 'react';
import '@/utils'
// import { useSelector } from 'react-redux';
// import { RootState } from '../state/store';
// import { useRouter } from 'next/navigation';
// import { checkToken } from '@/utils';
// import axios from 'axios';

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter()
  const url = usePathname()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  useEffect(() => {
    console.log("the url: ",url)
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
        console.log("the result of the auth check is ", res.data);
        setIsAuthenticated(true)
      } catch (error: unknown) {
        console.log("failed the auth check", error);
        if (checkToken())
          removeToken()
        // if (url === "/")
        //   router.push("/auth")
        router.push('/'); // Redirect to the landing page
      }
    };
  
    checkAuth(); // Call the async function
    console.log('invoked the dashboard path');
  }, [url]);

  return isAuthenticated && <>{children}</>;
};

export default AuthProvider;
