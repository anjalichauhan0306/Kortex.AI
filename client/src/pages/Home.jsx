import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth, googleProvider } from '../utils/firebase.js'
import api from '../utils/axios';
import { FaGoogle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../redux/userSlice.js';

const Home = () => {
    const { userData } = useSelector(state => state.user);
    const dispatch = useDispatch()

    const handleLogin = async (token) => {
        try {

            const
                { data } = await api.post("/auth/login", { token });
            console.log("Backend response data:",
                data);
            dispatch(setUserData(data));
            return data;
        } catch (error) {
            console.error("Backend auth error:", error);
        }
    };


    const googleLogin = async () => {
        const data = await signInWithPopup(auth, googleProvider);

        const token = await data.user.getIdToken()
        console.log(token);
        await handleLogin(token)
        console.log(data);
    }

    return (
        <div className='h-screen flex bg-[#0d0f14] text-white overflow-hidden '>
            {!userData} && {
                <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur'>
                    <div className='w-[340px] bg-[#13151c] border border-white/[0.08] rounded-2xl p-7 flex flex-col gap-5'>
                        <div className='flex flex-col gap-1'>
                            <h2 className='text-[17px] font-semibold text-slate-100 tracking-tight '>Welcome to kortecxt AI</h2>
                            <p className='text-[13px] text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptatibus pariatur ipsum dolore cumque fugit magni consequatur vero, exercitationem labore nam sequi deleniti provident. Suscipit sit pariatur id hic fugit?</p>
                        </div>

                        <button onClick={googleLogin} className="flex w-full items-center justify-center gap-3 py-3 px-4 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-violet-700 hover:from-indigo-500 hover:to-violet-600 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer active:scale-[0.98]">
                            <FaGoogle size={16} />
                            <span>Continue with Google</span>
                        </button>
                    </div>
                </div>
            }
        </div>
    );
}

export default Home;