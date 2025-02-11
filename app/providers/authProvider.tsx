'use client';

import React, { ReactNode, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { useRouter } from 'next/navigation';
import { checkToken } from '@/utils';
import axios from 'axios';

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const user = useSelector((state: RootState) => state.user);
  const router = useRouter();

  const testAhtorization = async () => {
    const token = checkToken();
    if (!token) {
      return false;
    }
    try {
      const res = await axios.get('/auth/me');
      console.log(res);
      return true;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error.message);
      return false;
    }
  };
  useEffect(() => {
    console.log('there at the auth wrapper');
    if (!user.signIn || !testAhtorization()) {
      router.push('/auth');
    }
  }, [user]);

  return <>{children}</>;
};

export default AuthProvider;
