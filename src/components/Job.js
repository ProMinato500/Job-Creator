import React from "react";

const Job = () => {
  return (
    <div className="bg-white border-1 border-solid border-[#DADEDF] rounded-[10px] w-[49%] px-4 py-2 flex gap-2">
      <div className="w-9">
        <img src="/images/job-logo.png" alt="" />
      </div>
      <div className="flex flex-col gap-3">
        <div>
          <h1 className="">UX UI Designer</h1>
          <p className="text-sm">Great Vibes - Information Technology</p>
          <p className="text-[#646464] text-sm">
            Chennai, Tamilnadu, India (In-office)
          </p>
        </div>
        <div className="leading-6 text-sm">
          <p className="">Part-Time (9.00 am - 5.00 pm IST)</p>
          <p>Experience (1 - 2 years)</p>
          <p className="">INR (₹) 30,000 - 50,000 / Month</p>
          <p className="">51-200 employees</p>
        </div>
        <div className="flex gap-5">
          <button className="bg-[#1597E4] text-sm px-3 py-2 rounded-lg text-white">
            Apply Now
          </button>
          <button className="border-[#1597E4] border-2 text-sm px-2 py-1.8 rounded-lg text-[#1597E4]">
            External Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Job;
