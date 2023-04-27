import React, { useState } from "react";
import FPage1 from "./form-pages/FPage1";
import FPage2 from "./form-pages/FPage2";

const Form = ({ formData, setFormData, handleSubmit }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = (data) => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="h-screen w-screen fixed flex justify-center items-center bg-gray-500 bg-opacity-50">
      <div className="lg:w-[32vw] sm:w-1/2 w-full ">
        {currentPage === 1 && (
          <FPage1
            onNext={handleNextPage}
            formData={formData}
            setFormData={setFormData}
          />
        )}
        {currentPage === 2 && (
          <FPage2
            onSave={handleSubmit}
            formData={formData}
            setFormData={setFormData}
          />
        )}
      </div>
    </div>
  );
};

export default Form;
