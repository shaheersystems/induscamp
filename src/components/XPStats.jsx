function XPStats() {
  return (
    <div className="flex items-center py-6 border-b">
      <div className="flex-1 p-2">
        <span className="text-sm font-semibold text-gray-600">Daily XP</span>
        <h2 className="font-mono text-2xl font-semibold">100/250</h2>
      </div>
      <div className="h-12 mx-4 my-8 border-l"></div>
      <div className="flex-1 p-2">
        <span className="text-sm font-semibold text-gray-600">
          Total XP earned
        </span>
        <h2 className="font-mono text-2xl font-semibold">1250</h2>
      </div>
    </div>
  );
}

export default XPStats;
