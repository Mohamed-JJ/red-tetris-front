import React, { ReactNode, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { useRouter } from 'next/navigation';
import { checkToken } from '@/utils';
import axios from 'axios';

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const user = useSelector((state: RootState) => state.user);
  const router = useRouter();

  if (!user.signIn) {
    router.push('/auth');
  }

  const testAhtorization = () => {
    const token = checkToken();
    if (!token) {
      return false;
    }
    try {
      const res = await axios.post('/passport-auth/login');
    } catch (error) {}
  };

  return <div>{children}</div>;
};

export default AuthProvider;
