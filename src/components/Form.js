import React, { useState } from "react";
import FPage1 from "./form-pages/FPage1";
import FPage2 from "./form-pages/FPage2";

const Form = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNextPage = (data) => {
    setFormData({ ...formData, ...data });
    setCurrentPage(currentPage + 1);
  };

  const handleSubmit = () => {
    console.log("Form data:", formData);
  };

  return (
    <div className="object-center h-screen w-screen flex justify-center items-center">
      <div className="lg:w-[32vw]">
        {currentPage === 1 && (
          <FPage1 onNext={handleNextPage} formData={formData} />
        )}
        {currentPage === 2 && (
          <FPage2 onSave={handleSubmit} formData={formData} />
        )}
      </div>
    </div>
  );
};

export default Form;
