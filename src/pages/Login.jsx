import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import loginImage from '../assets/image/login.svg';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, loginUser } from '../redux/features/users/usersSlice';
import toast, { Toaster } from 'react-hot-toast';
import auth from '../utils/firebase.config';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import Loading from '../components/layouts/Loading';
const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const {isError,error}=useSelector((state)=>state.userSlice)
  const [loading,setLoading]=useState(false)
  const onSubmit = ({ email, password }) => {
    dispatch(loginUser({
      email,password
    }))

    
  };

   
   useEffect(()=>{
    setLoading(true)
    onAuthStateChanged(auth,(user)=>{
    if(user){
      setLoading(false)
      navigate('/')
    }
    setLoading(false)
    
    })
   },[])
 
  if(loading){
    return <Loading/>
  }
  const handleGoogleLogin = () => {
    
    dispatch(createUser({isGoogleSignIn:true }))

  };
  if(error && isError){
    toast.error(error)
  }


// console.log(auth,"auth data")
  return (
    <div className="flex max-w-7xl h-screen items-center mx-auto">
      <Toaster/>
      <div className="w-1/2">
        <img src={loginImage} className="h-full w-full" alt="" />
      </div>
      <div className="w-1/2 grid place-items-center">
        <div className="bg-primary/5 w-full max-w-sm rounded-lg grid place-items-center p-10">
          <h1 className="mb-10 font-medium text-2xl">Login</h1>
          <form className="space-y-3 w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col items-start">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full rounded-md"
                {...register('email')}
              />
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="w-full rounded-md"
                {...register('password')}
              />
            </div>
            <div className="relative !mt-8">
              <button type="submit" className="btn btn-primary w-full">
                Login
              </button>
            </div>
            <div>
              <p>
                Don&apos;t have an account?{' '}
                <span
                  className="text-primary hover:underline cursor-pointer"
                  onClick={() => navigate('/signup')}
                >
                  Sign up
                </span>
              </p>
            </div>
            <button
              type="button"
              className="btn btn-primary w-full"
              onClick={handleGoogleLogin}
            >
              Login with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;