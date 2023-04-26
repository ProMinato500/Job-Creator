import React, { useEffect, useState } from "react";
import Job from "./Job";

const Jobs = () => {
  const [job, setJob] = useState({});

  useEffect(() => {
    fetch("https://644416f090738aa7c07ed4b0.mockapi.io/jobs", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jobs) => {
        console.log("Successfully fetched");
        setJob(jobs);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (componentId) => {
    fetch(
      `https://644416f090738aa7c07ed4b0.mockapi.io/jobs/${componentId + 1}`,
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
        console.log("Successfully deleted");
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
