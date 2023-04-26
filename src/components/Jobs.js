import React, { useEffect } from "react";
import Job from "./Job";

const Jobs = ({ job, setJob, fetchItems }) => {
  useEffect(() => {
    fetchItems();
  }, []);

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

  return (
    <div className=" w-full px-6 py-4 mt-6 flex xs:flex-col flex-wrap gap-2 lg:gap-6 justify-center">
      {Object.entries(job).map((t) => (
        <Job key={t[0]} onDelete={handleDelete} data={t} />
      ))}
    </div>
  );
};

export default Jobs;
