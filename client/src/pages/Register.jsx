const Register = () => {
  return (
    <div className="global-container text-xl ">
      <h1 className="text-center font-semibold m-12">
        Register to get started
      </h1>

      <div className="flex justify-center items-center">
        <div className=" flex border-2 rounded-lg  ">
          {/* left */}

          <img
            src="https://source.unsplash.com/kUqqaRjJuw0"
            className="object-cover h-100 w-96 rounded-xl flex-1 "
          />

          {/* right */}
          <div className="flex-1 p-7 flex flex-col gap-4">
            {/* Name */}
            <div>
              <label for="name" className="text-lg ">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Please enter your name"
                className=" placeholder-style input-style  "
              />
            </div>

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

            {/* Confirm Password */}
            <div>
              <label for="confirmPassword" className="text-lg ">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
                className="placeholder-style input-style "
              />
            </div>
            <div>
              <button className="btn-submit mt-2">Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;

{
  /* <img
            src="https://source.unsplash.com/kUqqaRjJuw0"
            className="object-cover"
          /> */
}
