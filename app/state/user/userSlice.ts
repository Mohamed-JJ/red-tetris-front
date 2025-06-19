import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ShortUser } from "@/lib/types";

const getFromLocalStorage = (key: string): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(key);
  }
  return null;
};

const uid : number =getFromLocalStorage('uid') ? Number(getFromLocalStorage('uid')) : -1
const uname = getFromLocalStorage('userName') || undefined
const signIn = uid && uname ? true : false

const initialUserState: ShortUser = {id: uid, userName: uname, signIn: signIn}

const userSlice = createSlice({
    name: "User",
    initialState: initialUserState,
    reducers: {
      setUser: (state, action: PayloadAction<ShortUser>) => {
        state.id = action.payload.id;
        state.userName = action.payload.userName;
        state.signIn = action.payload.signIn
      },
      unSetUser: () => {
        return initialUserState; // Resetting to initial state
      },
    },
  });
  
  export const { setUser, unSetUser } = userSlice.actions; // Export actions

export default userSlice.reducer 