import React from "react";
import Job from "./Job";

const Jobs = () => {
  return (
    <div className="container w-full px-6 py-4 mt-6 flex flex-wrap gap-5 justify-between">
      <Job />
      <Job />
      <Job />
      <Job />
    </div>
  );
};

export default Jobs;
