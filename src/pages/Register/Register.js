import React, { useEffect } from 'react';
import img from '../../images/hero2.jpeg';
import {Link, useNavigate} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { signup } from '../../services/auth';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { setUser, toogleLoading, setToken } from '../../store/slices/authSlice';


import { showSuccessToast } from '../../utils/toasts';

const Register = () => {

  const {handleSubmit, register, reset, setFocus, setError} = useForm();

  const { loading, userInfo, error, success } = useSelector(
    (state) => state.user
  )
  console.log(userInfo, error, success, loading)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log(userInfo, success)
  //   // redirect user to login page if registration was successful
  //   if (success) navigate('/')
  //   // redirect authenticated user to profile screen
  //   // if (userInfo) navigate('/user-profile')
  // }, [success, userInfo])


  useEffect(() => {
    setFocus('first-name')
  }, [])

  const onSubmit = async (values) => {
    console.log(values)
    const data = await signup(values)
    // console.log(data)
    if(data.ok){
      dispatch(setUser(data.user))
      dispatch(setToken(data.token))
      showSuccessToast(data.message)
      navigate('/')
    }
    // dispatch(toogleLoading())
    // dispatch(toogleLoading())
    // console.log('submit clicked');
  };

  return (
    <div className="flex  min-h-screen box-border bg-gray-300 backdrop-blur-[18px]">
      <div className="w-4/6 hidden sm:block">
        <img className="min-h-full rounded object-cover" src={img} alt="" />
      </div>
      <div className="min-h-full sm:w-2/6 rounded bg-slate-300 shadow-lg p-8  pt-16">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-3xl font-bold pb-8">Welcome to AM-DARZI</h2>
          <div className="flex flex-col gap-8">
            <div className="flex max-w-full gap-2">
              <div className="flex flex-col gap-2">
                <label className="text-xl" htmlFor="first-name">
                  First Name
                </label>
                <input
                  {...register("firstname", {required: true})}
                  className="w-full text-lg border-2 border-slate-500 rounded px-4 py-2 box-border"
                  type="text"
                  id="first-name"
                  placeholder="First Name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xl" htmlFor="last-name">
                  Last Name
                </label>
                <input
                  {...register("lastname", {required: true})}
                  className="w-full text-lg border-2 border-slate-500 rounded px-4 py-2"
                  type="text"
                  id="last-name"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xl" htmlFor="email">
                Email
              </label>
              <input
                {...register("email", {required: true})}
                className=" text-lg border-2 border-slate-500 rounded px-4 py-2"
                type="text"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label className="text-xl" htmlFor="password">
                Password
              </label>
              <input
                {...register("password", {required: true})}
                className=" text-xl border-2 border-slate-500 rounded px-4 py-2"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="flex w-full gap-4">
              <button
                className="w-1/2 px-8 py-2 border-1 bg-slate-950 text-white rounded-md flex justify-center"
                type="submit"
              >
                {/* <svg
                  class=" animate-spin h-5 w-5 mr-3 bg-white"
                  viewBox="0 0 24 24"
                ></svg> */}
                Submit
              </button>
              <button
                className="w-1/2 px-8 py-2 border-1 bg-slate-950 text-white rounded-md"
                type="reset"
              >
                Reset
              </button>
            </div>
            <Link
              className="self-end underline-offset-2 decoration-blue-700 underline"
              to="/login"
            >
              <div className="text-blue-700">Already a member?Sign In</div>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
