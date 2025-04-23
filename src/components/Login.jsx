import { signInWithPopup } from 'firebase/auth'
import React from 'react' 
import GoogleButton from 'react-google-button'
import { useDispatch } from 'react-redux'
import { auth, provider } from '../firebase'
import { setUser } from '../redux/appSlice'


const Login = () => {

    const dispatch = useDispatch();
    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth,provider);
            console.log(result);
            dispatch(setUser({
                displayName:result.user.displayName,
                email:result.user.email,
                photoURL: result.user.photoURL
            }))
        }catch (error) {
            console.log(error);
        }
    }
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-slate-500'>
        <div className = 'p-8 bg-teal-100 flex flex-col gap-3 rounded-2xl'>
            <h1 className = 'text-center text-2xl font-medium mb-5'>LOGIN</h1>
            <GoogleButton onClick = {signInWithGoogle}/>

        </div>


    </div>
  )
}

export default Login