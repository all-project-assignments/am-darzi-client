import { createSlice } from '@reduxjs/toolkit'
// import { registerUser } from '../actions/authActions'

const initialState = {
  loading:  window.localStorage.getItem('loading') || false,
  userInfo: JSON.parse(localStorage.getItem('userInfo')) || {}, // for user object
  userToken: window.localStorage.getItem('userToken') || null, // for storing the JWT
  error: null,
  success: false
}

export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, {payload, type}) => {
      console.log("setUser action working")
      console.log(payload)
      window.localStorage.setItem('success', true)
      state.success = true
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.userInfo = payload
      window.localStorage.setItem('userInfo', JSON.stringify(payload))
    },
    setToken: (state, {payload, type}) => {
      state.userToken = payload;
      window.localStorage.setItem('userToken', payload)
    },
    toogleLoading: (state, ) => {
      state.loading = !state.loading
    },
    logOut : (state) => {
      state.userToken = null;
      state.userInfo = null;
      window.localStorage.removeItem('userToken')
      window.localStorage.removeItem('userInfo')
    }
  },
})

// Action creators are generated for each case reducer function
export const { setToken, setUser, logOut, toogleLoading } = authSlice.actions

export default authSlice.reducer