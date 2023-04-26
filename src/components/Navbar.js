import React, { useState } from "react";
import Form from "./Form";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };
  return (
    <div className=" px-2 py-2 bg-slate-100 shadow-md">
      <div className="">
        <button
          onClick={handleOpenModal}
          className="text-[20px] bg-red-500 px-5 py-2 flex items-center gap-2 rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 flex w-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Create Job
        </button>
      </div>
      {showModal && <Form />}
    </div>
  );
};

export default Navbar;
