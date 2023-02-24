import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  const onChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(formData);
  return (
    <div className="global-container text-xl ">
      <h1 className="text-center font-semibold m-12">Please Login</h1>

      <div className="flex justify-center items-center">
        <div className=" flex border-2 rounded-lg  ">
          {/* right */}
          <form className="flex-1 p-7 flex flex-col gap-4">
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
