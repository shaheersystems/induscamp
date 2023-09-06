import Logo from "./Logo";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="fixed top-0 flex items-center justify-between w-full px-4 py-3 border-b">
      <div>
        <Logo />
      </div>
      <div className="space-x-2">
        <Link
          to="/courses"
          className="px-4 py-2 font-sans text-sm rounded cursor-pointer hover:bg-gray-100"
        >
          Courses
        </Link>
        <Link
          to="/courses"
          className="px-4 py-2 font-sans text-sm rounded cursor-pointer hover:bg-gray-100"
        >
          Pricing
        </Link>
        <Link
          to="/courses"
          className="px-4 py-2 font-sans text-sm rounded cursor-pointer hover:bg-gray-100"
        >
          Business
        </Link>
      </div>
      <div className="flex gap-4">
        <Link
          to="/login"
          className="px-4 py-1.5 hover:border-brand-green text-sm border-2 rounded border-brand-blue"
        >
          Sign in
        </Link>
        <Link
          to="/signup"
          className="px-4 py-1.5 hover:bg-brand-green hover:border-brand-green text-sm text-white border rounded border-brand-blue bg-brand-blue"
        >
          Get started
        </Link>
      </div>
    </div>
  );
}

export default Header;
