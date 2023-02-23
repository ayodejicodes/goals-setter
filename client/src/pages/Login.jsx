const Login = () => {
  return (
    <div className="global-container text-xl ">
      <h1 className="text-center font-semibold m-12">Please Login</h1>

      <div className="flex justify-center items-center">
        <div className="  border-2 rounded-lg  ">
          <div className="p-7 flex flex-col gap-4">
            {/* Email */}
            <div>
              <label for="email" className="text-lg ">
                Email
              </label>
              <input
                type="email"
                placeholder="Please enter your email"
                id="name"
                className="placeholder-style input-style "
              />
            </div>

            {/* Password */}
            <div>
              <label for="password" className="text-lg ">
                Password
              </label>
              <input
                type="password"
                placeholder="Please enter a passowrd"
                id="password"
                className="placeholder-style input-style "
              />
            </div>

            <button className="btn-submit mt-2">Login</button>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
