import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const { userLogin, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate("/");
        toast.success("Login Successful");
      })
      .catch((error) => {
        alert(`Please Provide Corrent Info : ${error.code}`);
      });
  };

  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-3xl px-5 py-16 md:px-10 md:py-20">
        {/* Component */}
        <div className=" relative mx-auto max-w-xl bg-gray-100 px-8 py-12 text-center">
          {/* Buttons */}
          <div className="max-w-60 mx-auto justify-between mb-8">
            <button className="text-2xl font-bold md:text-2xl px-2 border-black pb-4">
              Login
            </button>
            <hr className="w-60 text-2xl mr-4" />
          </div>
          <div className="mx-auto w-full max-w-md">
            {/* Form */}
            <div className="mx-auto mb-4 max-w-md pb-4">
              <form
                onSubmit={handleSubmit}
                name="wf-form-password"
                method="get"
              >
                <div className="relative flex flex-col">
                  <div className="font-bold mb-1 text-left">Email</div>
                  <input
                    type="email"
                    name="email"
                    className="mb-6 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-black placeholder:text-black"
                    placeholder="Email Address"
                    required=""
                  />
                </div>
                <div className="relative mb-4">
                  <div className="font-bold mb-1 text-left">Password</div>
                  <input
                    type="password"
                    name="password"
                    className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-black placeholder:text-black"
                    placeholder="Password "
                    required=""
                  />
                </div>
                <p>
                  Don't Have an Account?{" "}
                  <NavLink
                    to="/register"
                    className="text-blue-500 hover:underline"
                  >
                    Register
                  </NavLink>
                </p>

                <input
                  type="submit"
                  value="Join Now"
                  className=" inline-block w-full cursor-pointer items-center rounded-md bg-black px-6 py-3 text-center font-semibold text-white"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Login;
