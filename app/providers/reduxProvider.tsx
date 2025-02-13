'use client';

import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/app/state/store';

const ReduxProvider = ({ children }: { children: ReactNode }) => {
  // const user = useSelector((state: RootState)=> )
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
