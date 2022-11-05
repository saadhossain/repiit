import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Login = () => {
    const {userSignIn} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'
    const handleUserLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        userSignIn(email, password)
        .then((result)=> {
            const user = result.user;
            console.log(user);
            toast.success('Login Successfully')
            navigate(from, {replace:true})
        })
        .catch(err => console.error(err))
    }
    return (
        <div className='flex justify-center my-5'>
            <div className="flex flex-col max-w-md p-6 rounded-md dark:bg-gray-900 dark:text-gray-100">
                <div className="mb-4 text-center">
                    <h1 className="my-2 text-3xl font-bold">Login your Account</h1>
                </div>
                <form onSubmit={handleUserLogin} className="space-y-5 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm">Enter Password</label>
                            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">Login</button>
                        </div>
                        <p className="px-6 text-sm text-center dark:text-gray-400">Don't Have an Account?
                            <Link to='/register' className="hover:underline dark:text-violet-400">Register</Link>.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;