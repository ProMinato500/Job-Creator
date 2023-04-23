import React from "react";

const Navbar = () => {
  return (
    <div className="container px-2 py-2 bg-slate-100 shadow-md">
      <div className="w-[100vw]">
        <button className="text-[20px] bg-red-500 px-5 py-2 flex items-center gap-2 rounded-md">
          <svg
            className="flex w-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Create Job
        </button>
      </div>
    </div>
  );
};

export default Navbar;
