import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import authService from '../appwrite/auth';
import {  useDispatch } from 'react-redux'
import { setAdmin } from '../store/adminSlice';
import {updateName,updateEmail,setstatus} from '../store/userSlice'


// env-vars
import conf from '../conf/conf'
const adminName = conf.adminName
const adminEmail = conf.adminEmail

function Register() {

  // console.log(conf.adminEmail)

  const [loggedInUser, setLoggedInUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const navigate = useNavigate()
  const dispatch = useDispatch()

 

  

  

  

  return (
    <>
      <div className="w-full font-serif max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">

        {/*logo */}
        {/* <div className="flex justify-center mx-auto">
          <img
            className="w-auto h-7 sm:h-8"
            src="https://merakiui.com/images/logo.svg"
            alt=""
          />
        </div> */}
        <p className='dark:text-gray-200'>
         {loggedInUser ? `Logged in as ${loggedInUser}` : 'Not logged in'}
        </p>


        <form className="mt-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm text-gray-800 dark:text-gray-200"
            >
              Username
            </label>
            <input 
              placeholder="Name" value={name} onChange={e => setName(e.target.value)}
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm text-gray-800 dark:text-gray-200"
            >
              Email
            </label>
            <input 
              placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm text-gray-800 dark:text-gray-200"
              >
                Password
              </label>
              
            </div>

            <input
              type="password"
              placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-6">
            <button type="button" onClick={async () => {
              const session = authService.createAccount({
                email: email,
                password: password,
                name: name
            })
          //     if (session) {
          //       setLoggedInUser(name)
                
          //       dispatch(updateEmail(email))
          //       dispatch(updateName(name))
          //       dispatch(setstatus())
          //      setTimeout(() => {
          //        navigate('/home')
          //      }, 3000);
          //  }
          if (session) {
            const userData = authService.getCurrentUser();
            userData.then(result => {
              dispatch(updateName(result.name))
              dispatch(updateEmail(result.email))
              dispatch(setstatus())

              if(result.name == adminName && result.email == adminEmail) {
                dispatch(setAdmin())
              }
              console.log(result.name);
              console.log(result.email);
              console.log(adminEmail);
              console.log(adminName);
              setLoggedInUser(result.name)

             
          }).catch(error => {
              alert("Some error occured a user with the same id, email, or phone already exists Please try again")
              throw error
          });
          setTimeout(() => {
            navigate("/home");
          }, 5000);

            
          }
           }}
             className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Register