import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Register = () => {
    const { userRegistration, userVerification, updateUser } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleUserRegistration = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const profile = form.profile.value;
        const password = form.password.value;
        userRegistration(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                userVerification()
                    .then(() => {
                        toast.success('Verification link sent to your Email');
                    })
                    .catch(err => console.error(err))
                updateUser(name, profile)
                    .then(() => {
                        toast.success('Your Information Updated')
                    })
                    .catch(err => console.error(err))
            })
            .catch(error => console.error(error))
        form.reset()
        navigate('/login')
    }
    return (
        <div className='flex justify-center my-5'>
            <div className="flex flex-col max-w-md p-6 rounded-md dark:bg-gray-900 dark:text-gray-100">
                <div className="mb-4 text-center">
                    <h1 className="my-2 text-3xl font-bold">Create New Account</h1>
                </div>
                <form onSubmit={handleUserRegistration} className="space-y-5 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm">Enter Name</label>
                            <input type="text" name="name" id="name" placeholder="Enter Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                        </div>
                        <div>
                            <label htmlFor="profile" className="block mb-2 text-sm">Enter Photo URL</label>
                            <input type="text" name="profile" id="profile" placeholder="Enter Photo URL" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm">Your Password</label>
                            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">Register</button>
                        </div>
                        <p className="px-6 text-sm text-center dark:text-gray-400">Already Have an Account?
                            <Link to='/login' className="hover:underline dark:text-violet-400">Login</Link>.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;