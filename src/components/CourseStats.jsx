function CourseStats() {
  return (
    <div className="flex items-center justify-between py-6">
      <div className="p-2 text-center">
        <h2 className="font-mono text-2xl font-semibold">6</h2>
        <span className="text-sm font-semibold text-gray-600">
          Courses completed
        </span>
      </div>
      <div className="h-12 my-4 border-l"></div>
      <div className="p-2 text-center">
        <h2 className="font-mono text-2xl font-semibold">1</h2>
        <span className="text-sm font-semibold text-gray-600">
          Tracks completed
        </span>
      </div>
      <div className="h-12 my-4 border-l"></div>
      <div className="p-2 text-center">
        <h2 className="font-mono text-2xl font-semibold">8</h2>
        <span className="text-sm font-semibold text-gray-600">
          Projects completed
        </span>
      </div>
    </div>
  );
}

export default CourseStats;
