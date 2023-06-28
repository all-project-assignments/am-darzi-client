import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const backendUrl = 'http://localhost:5000/auth'



export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ firstName,lastname, email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      await axios.post(
        // `${backendUrl}/api/user/register`,
        `${backendUrl}/register`,
        { firstName,lastname, email, password },
        config
      )
    } catch (error) {
    // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)