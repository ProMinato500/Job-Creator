/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Job from "./Job";

const Jobs = ({ job, fetchItems, handleOpenModal, setFormData }) => {
  useEffect(() => {
    fetchItems();
  }, []);

  const onUpdate = (id) => {
    setFormData({});
    fetch(`https://644416f090738aa7c07ed4b0.mockapi.io/jobs/${id}`, {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((j) => {
        setFormData(j);
        handleOpenModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (componentId) => {
    fetch(
      `https://644416f090738aa7c07ed4b0.mockapi.io/jobs/${parseInt(
        componentId
      )}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((job) => {
        fetchItems();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const handleUpdate = () => {

  // };

  return (
    <div className=" w-full px-6 py-4 mt-6 flex xs:flex-col flex-wrap gap-2 lg:gap-6 justify-center">
      {Object.entries(job).map((t) => (
        <Job
          key={t[0]}
          setFormData={setFormData}
          handleOpenModal={handleOpenModal}
          onUpdate={onUpdate}
          onDelete={handleDelete}
          data={t}
        />
      ))}
    </div>
  );
};

export default Jobs;
