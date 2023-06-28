import React, {useEffect} from 'react';
import img from '../../images/hero2.jpeg';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import { login } from '../../services/auth';
import { useDispatch } from 'react-redux';
import { setToken, setUser } from '../../store/slices/authSlice';
import { showErrorToast, showSuccessToast } from '../../utils/toasts';
import { useNavigate } from 'react-router-dom';
const Login2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {control, register, reset, setFocus, handleSubmit} = useForm();

  const onSubmit = async (values) => {
    console.log(values);
    const data = await login(values);
    if(data.ok){
      dispatch(setUser(data.user))
      dispatch(setToken(data.token))
      showSuccessToast(data.message)
      navigate('/')
    } else {
      showErrorToast(data.message)
    }
    // console.log(data)
    // console.log('submit clicked');
  };

  useEffect(() => {
    setFocus('email');
  }, []);

  return (
    <div className="flex  min-h-screen box-border bg-gray-300 backdrop-blur-[18px]">
      <div className="w-4/6 hidden sm:block">
        <img className="min-h-full rounded object-cover" src={img} alt="" />
      </div>
      <div className="min-h-full sm:w-2/6 rounded bg-slate-300 shadow-lg p-8  pt-16">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-3xl font-bold pb-8">Welcome to AM-DARZI</h2>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-xl" htmlFor="email">
                Email
              </label>
              <input
                {...register('email', {required: true, maxLength: 20})}
                className=" text-lg border-2 border-slate-500 rounded px-4 py-2"
                type="email"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label className="text-xl" htmlFor="password">
                Password
              </label>
              <input
                {...register('password', {required: true, maxLength: 20})}
                className=" text-xl border-2 border-slate-500 rounded px-4 py-2"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="flex w-full gap-4">
              <button
                className="w-1/2 px-8 py-2 border-1 bg-slate-950 text-white rounded-md"
                type="submit"
              >
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
              to="/register"
            >
              <div className="text-blue-700">Not a member?Sign Up</div>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login2;
