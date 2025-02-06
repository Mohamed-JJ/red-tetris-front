import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ShortUser } from "@/lib/types";


const initialUserState: ShortUser = {id: -1, userName: undefined, signIn: false}

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