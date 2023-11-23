'use client'
import React ,{useState}from "react";

const DateDay = () => {
  const [active, setActive] = useState("WED");

  const menu=[
    {
      day:"MON",
      date:"23",
    },
    {
      day:"TUE",
      date:"24",
    },
    {
      day:"WED",
      date:"25",
    },
    {
      day:"THU",
      date:"26",
    },
    {
      day:"FRI",
      date:"27",
    },
    {
      day:"SAT",
      date:"28",
    },
  
  ]
  
  function renderActive(day){
    if(day === active){
      return "bg-[#197060] text-white"
    }
    return "bg-white  text-[#197060]"
  
  }

  return (
    <div
      className="bg-white rounded-md w-full
    flex flex-col  justify-center items-center
    p-4 mt-4
    "
    >
      <p className="text-sm font-bold w-full ps-3 mb-2">AUG</p>
      <div className="flex gap-2">
        {menu.map((item, index) => (
          <div
            className={`w-[50px] h-[50px] rounded-sm flex flex-col items-center justify-center ${renderActive(
              item.day
            )}`}
            style={{
              border: "1px solid #197060",
              borderRadius: "8px",
            }}
            key={index}
            onClick={() => setActive(item.day)}
          >
            <p className="text-xs font-bold">{item.day}</p>
            <p className="text-sm font-bold">{item.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DateDay;
