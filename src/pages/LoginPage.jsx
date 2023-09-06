import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex items-center justify-center py-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12.946 18.151v-5.239L21.209 8.2L19.2 7.048l-6.254 3.567V5.36c0-.356-.192-.689-.5-.866L4.922.177a1.434 1.434 0 0 0-1.455.044a1.438 1.438 0 0 0-.676 1.224v14.777A1.44 1.44 0 0 0 4.92 17.49l6.032-3.44v4.683a1 1 0 0 0 .504.867l7.73 4.4l2.01-1.152l-8.25-4.697zM10.953 5.938v5.814L4.785 15.27V2.4l6.168 3.539v-.001z"
            />
          </svg>
        </div>
        <div className="w-[40%] px-6 py-4 rounded bg-gray-50">
          <div>
            <h1 className="text-2xl text-center">Welcome Back!</h1>
          </div>
          <div className="py-4">
            <form className="space-y-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="email">E-mail address</label>
                <input
                  className="px-4 py-2 border-2 border-gray-200 rounded outline-none"
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email">Password</label>
                <input
                  className="px-4 py-2 border-2 border-gray-200 rounded outline-none"
                  type="password"
                />
              </div>
              <div>
                <button className="w-full px-4 py-2 rounded hover:bg-brand-green-hover bg-brand-green">
                  Sign in
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <input type="checkbox" />
                  <label className="ml-2">Remember me</label>
                </div>
                <div>
                  <a href="/" className="font-bold text-brand-purple">
                    Need help?
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="w-[40%] px-6 py-6 mt-4 text-center rounded bg-gray-50">
          Or{" "}
          <Link to="/signup" className="font-bold text-brand-purple">
            click here
          </Link>{" "}
          to create your freen account.
        </div>
      </div>
    </>
  );
}

export default LoginPage;
