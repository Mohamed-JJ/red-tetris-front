import { configureStore  } from "@reduxjs/toolkit";
import userReducer from "@/app/state/user/userSlice" 
import gameReducer from '@/store/gameSlice';

export  const store = configureStore({reducer: {user:  userReducer, game: gameReducer}});

export type RootState = ReturnType<typeof store.getState>
export type appDispatch = typeof store.dispatch