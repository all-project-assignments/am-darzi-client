import axios from "axios"


const baseUrl = '/auth'

export const login = async (credentials) => {
  try{
    const res = await axios.post(`${baseUrl}/login`, credentials, {
      withCredentials: true
    })
    console.log(res)
    if(res.data.status === 'Failed'){
      return {ok: false, user: null, message: res.data.message}
    } else if (res.data.status === 'Success') {
      return {ok: true, user: res.data.user, token: res.data.token, message: res.data.message}
    }
    
  } catch(err) {
    console.log("login error", err)
    return {ok: false}
  }
}

export const signup = async (credentials) => {
  try{
    const res = await axios.post(`${baseUrl}/login`, credentials, {
      withCredentials: true
    })
    console.log(res)
    if(res.data.status === 'Failed'){
      return {ok: false, user: null, message: res.data.message}
    } else if (res.data.status === 'Success') {
      return {ok: true, user: res.data.user, token: res.data.token, message: res.data.message}
    }
    
  } catch(err) {
    console.log("login error", err)
    return {ok: false}
  }
}