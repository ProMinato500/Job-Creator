import React from "react";

const Job = ({ onDelete, data }) => {
  return (
    <div className="bg-white border-1 border-solid border-[#DADEDF] rounded-[10px] w-full md:max-w-[40%] px-4 py-3 flex justify-between">
      <div className="flex gap-3">
        <div className="w-9">
          <img className="rounded-md" src="/images/job-logo.png" alt="" />
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <h1 className="">{data[1].title}</h1>
            <p className="text-sm">
              {data[1].company} - {data[1].industry}
            </p>
            <p className="text-[#646464] text-sm">
              {data[1].location} ({data[1].remote})
            </p>
          </div>
          <div className="leading-6 text-sm mt-4">
            <p className="">Part-Time (9.00 am - 5.00 pm IST)</p>
            <p>
              Experience ({data[1].expMin} - {data[1].expMax} years)
            </p>
            <p className="">
              INR (₹) {data[1].salMin} - {data[1].salMax} / Month
            </p>
            <p className="">{data[1].totalEmp} employees</p>
          </div>
          <div className="flex mt-2">
            {data[1].apply === true && (
              <button className="bg-[#1597E4] text-sm px-3 py-2.5 rounded-lg text-white">
                Apply Now
              </button>
            )}
            {data[1].apply === false && (
              <button className="border-[#1597E4] border-2 text-sm px-2 py-2 rounded-lg text-[#1597E4]">
                External Apply
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="">
        <button
          onClick={() => onDelete(data[0])}
          className="border-2 rounded-md cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Job;
