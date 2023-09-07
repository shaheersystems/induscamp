import { useState, useEffect } from "react";
function Streak() {
  const [currentDay, setCurrentDay] = useState("");
  const days = ["S", "M", "T", "W", "T", "F", "S"];

  useEffect(() => {
    function getCurrentDay() {
      const currentDate = new Date();
      setCurrentDay(currentDate.getDay());
    }
    getCurrentDay();
  }, []);

  return (
    <div className="flex items-center justify-between border-b">
      <div className="flex items-center justify-between py-6">
        <div>
          <span className="text-sm font-semibold text-gray-600">
            Current Streak
          </span>
          <h2 className="text-2xl font-semibold font-brand-blue">
            <span className="font-mono">12</span> days
          </h2>
        </div>
      </div>
      <div className="flex gap-2">
        {days.map((day, idx) => (
          <div
            key={idx}
            className={`flex items-center justify-center w-8 h-8 text-xs font-semibold border rounded-full ${
              currentDay === idx ? "bg-brand-blue text-white" : "text-gray-600"
            }`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Streak;
