import React from "react";
import Job from "./Job";

const Jobs = () => {
  return (
    <div className=" w-full px-6 py-4 mt-6 flex xs:flex-col flex-wrap gap-2 lg:gap-6 justify-center">
      <Job />
      <Job />
      <Job />
      <Job />
    </div>
  );
};

export default Jobs;
