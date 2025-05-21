import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { toast, ToastContainer } from "react-toastify";



const Register = () => {
const {createUser,setUser}=useContext(AuthContext);
const navigate= useNavigate();


  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    // const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // const confirmPassword = form.confirmPassword.value;
    createUser(email,password)
    .then(result =>{
      const user =result.user
      setUser(user)
      console.log(user);
      toast.success("User Created Successfully");
      navigate('/login')
      
    })
    .catch(error => {
      console.error(error.message);
    
  })
    // if (password !== confirmPassword) {
    //   alert("Passwords do not match!");
    //   return;
    // }
  
    
  };
  return (
    <div>
      <div className="mx-auto w-full max-w-3xl px-5 py-16 md:px-10 md:py-20">
        {/* Component */}
        <div className=" relative mx-auto max-w-xl bg-gray-100 px-8 py-12 text-center">
          {/* Close Button */}
          {/* <svg className="absolute top-3 right-3 sm:top-7 sm:right-7" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.25 5.25L18.75 18.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M5.25 18.75L18.75 5.25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg> */}

          {/* Buttons */}
          <div className="max-w-60 mx-auto justify-between mb-8">
            <button className="text-2xl font-bold md:text-2xl px-2 border-black pb-4">
              Register
            </button>
            <hr className="w-60 text-2xl mr-4" />
          </div>
          <div className="mx-auto w-full max-w-md">
            {/* Form */}
            <div className="mx-auto mb-4 max-w-md pb-4">
              <form
                onSubmit={handleSignUp}
                name="wf-form-password"
                method="get"
              >
                <div className="relative flex flex-col">
                  <div className="relative mb-4">
                    <div className="font-bold mb-1 text-left">Name</div>
                    <input
                      type="text"
                      name="name"
                      className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-black placeholder:text-black"
                      placeholder="Enter Your Name"
                      required
                    />
                  </div>

                  <div className="font-bold mb-1 text-left">Email</div>
                  <input
                    type="email"
                    name="email"
                    className="mb-6 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-black placeholder:text-black"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div className="relative mb-4">
                  <div className="font-bold mb-1 text-left">Password</div>
                  <input
                    type="password"
                    name="password" 
                    className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-black placeholder:text-black"
                    placeholder="Password "
                    required
                  />
                </div>
                <div className="relative mb-4">
                  <div className="font-bold mb-1 text-left">
                    Confirm Password
                  </div>
                  <input
                    type="password"
                    name="confirmPassword"
                    className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-black placeholder:text-black"
                    placeholder="Confirm Password "
                    required
                  />
                </div>

                <p>
                  Allready Have an account?{" "}
                  <NavLink
                    to="/login"
                    className="text-blue-500 hover:underline"
                  >
                    Login
                  </NavLink>
                </p>

                <button
                  type="submit"
                  className=" inline-block w-full cursor-pointer items-center rounded-md bg-black px-6 py-3 text-center font-semibold text-white"
                >
                  SignUp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Register;
