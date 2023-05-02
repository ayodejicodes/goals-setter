import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // console.log(formData);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/dashboard");
    }
    dispatch(reset());
  }, [user, isLoading, isSuccess, isError, message, navigate, dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="global-container text-xl ">
      <h1 className="text-center font-semibold m-12">Please Login</h1>

      <div className="flex justify-center items-center">
        <div className=" flex border-2 rounded-lg  ">
          <form
            onSubmit={onSubmit}
            className="flex-1 p-7 flex flex-col gap-4 w-[64vw] lg:w-[45vw]"
          >
            <p className="text-sm">
              Login as guest using email: guest@g.co, password: guest
            </p>

            {/* Email */}
            <div>
              <label htmlFor="email" className="text-lg ">
                Email
              </label>
              <input
                type="email"
                placeholder="Please enter your email"
                id="email"
                className="placeholder-style input-style "
                name="email"
                value={email}
                onChange={onChange}
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="text-lg ">
                Password
              </label>
              <input
                type="password"
                placeholder="Please enter a passowrd"
                id="password"
                className="placeholder-style input-style "
                name="password"
                value={password}
                onChange={onChange}
                autoComplete="on"
              />
            </div>

            <div>
              <button type="submit" className="btn-submit mt-2">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
