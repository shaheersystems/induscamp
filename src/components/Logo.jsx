import { Link } from "react-router-dom";
function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M12.946 18.151v-5.239L21.209 8.2L19.2 7.048l-6.254 3.567V5.36c0-.356-.192-.689-.5-.866L4.922.177a1.434 1.434 0 0 0-1.455.044a1.438 1.438 0 0 0-.676 1.224v14.777A1.44 1.44 0 0 0 4.92 17.49l6.032-3.44v4.683a1 1 0 0 0 .504.867l7.73 4.4l2.01-1.152l-8.25-4.697zM10.953 5.938v5.814L4.785 15.27V2.4l6.168 3.539v-.001z"
        />
      </svg>
    </Link>
  );
}

export default Logo;
