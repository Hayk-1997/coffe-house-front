import { createSlice } from '@reduxjs/toolkit';

// Slice

const initialUser = {
  user: ''
};

const slice = createSlice({
  name: 'Coffee_House_User_Login',
  initialState: {
    user: initialUser
  },
  reducers: {
    UserLoginRequest (state, action) {
      console.log('action', action);
      state.user = action.payload;
    },
    UserLoginSuccess: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    UserLoginError: (state, action) => {
      // state.user = null;
      // localStorage.removeItem('user');
    }
  }
});
export const { UserLoginError, UserLoginSuccess, UserLoginRequest } = slice.actions;
export default slice.reducer;
