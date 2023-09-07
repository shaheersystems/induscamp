import CourseStats from "./CourseStats";

function Profile() {
  return (
    <div className="max-w-4xl px-4 m-auto my-12 border rounded">
      <div className="flex items-center justify-between p-6 border-b">
        <div className="flex items-center gap-4">
          <div>
            <img
              className="w-16 h-16 rounded-full"
              src="https://api.dicebear.com/7.x/lorelei/svg"
              alt="avatar"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <h2 className="text-xl font-semibold text-brand-blue">
              Hey, Muhammad!
            </h2>
            <div className="flex items-center gap-4">
              <div className="bg-gray-200 rounded w-28">
                <div className="h-full py-1 rounded-full w-[30%] bg-brand-green"></div>
              </div>
              <span className="text-xs text-gray-600">
                Portfolio 30% complete
              </span>
            </div>
          </div>
        </div>
        <div>
          <button
            title="See Portfolio details"
            className="p-2 rounded-full text-brand-blue hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <CourseStats />
    </div>
  );
}

export default Profile;
