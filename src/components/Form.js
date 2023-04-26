import React, { useState } from "react";
import FPage1 from "./form-pages/FPage1";
import FPage2 from "./form-pages/FPage2";

const Form = ({ showModal, fetchItems }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNextPage = (data) => {
    setFormData({ ...formData, ...data });
    setCurrentPage(currentPage + 1);
  };

  const handleSubmit = (data) => {
    setFormData({ ...formData, ...data });

    fetch("https://644416f090738aa7c07ed4b0.mockapi.io/jobs", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((task) => {
        console.log("Form data:", formData);
      })
      .catch((error) => {
        return error;
      });
    showModal(false);
    fetchItems();
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="lg:w-[32vw] sm:w-1/2 w-full ">
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
