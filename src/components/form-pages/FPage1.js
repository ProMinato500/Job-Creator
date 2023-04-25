import React, { useState } from "react";

const FormPage1 = ({ onNext, formData }) => {
  const [title, setTitle] = useState(formData.title || "");
  const [company, setCompany] = useState(formData.company || "");
  const [industry, setIndustry] = useState(formData.industry || "");
  const [location, setLocation] = useState(formData.location || "");
  const [remote, setRemote] = useState(formData.remote || "");

  const handleNext = () => {
    onNext({ title, company, industry, location, remote });
  };

  return (
    <div className="flex flex-col gap-5 py-9 px-9 rounded-lg bg-white border-[1px]">
      <div className="flex justify-between">
        <h1 className="text-xl">Create a job</h1>
        <p className="text-xl">Step 1</p>
      </div>
      <form className="flex flex-col gap-10">
        <div className="flex flex-col">
          <label className="text-sm mb-2 font-medium" htmlFor="title">
            Job title<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="title"
            value={title}
            className="rounded-md p-2 text-[#7A7A7A] border-[1px]"
            required
            placeholder="ex. UX UI Designer"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm mb-2 font-medium" htmlFor="company">
            Company name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="company"
            value={company}
            required
            className="rounded p-2 text-[#7A7A7A] border-[1px]"
            placeholder="ex. Google"
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm mb-2 font-medium" htmlFor="industry">
            Industry<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="industry"
            value={industry}
            required
            className="rounded p-2 text-[#7A7A7A] border-[1px]"
            placeholder="ex. Information Technology"
            onChange={(e) => setIndustry(e.target.value)}
          />
        </div>

        <div className="container w-full md:columns-2 flex justify-between gap-2">
          <div className="flex flex-col">
            <label className="text-sm mb-2 font-medium" htmlFor="location">
              Location
            </label>
            <input
              type="text"
              id="location"
              value={location}
              className="rounded p-2 text-[#7A7A7A] border-[1px]"
              placeholder="ex. Chennai"
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm mb-2 font-medium" htmlFor="remote">
              Remote type
            </label>
            <input
              type="text"
              id="remote"
              value={remote}
              className="rounded p-2 text-[#7A7A7A] border-[1px]"
              placeholder="ex. In-office"
              onChange={(e) => setRemote(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full mt-16 flex justify-end">
          <button
            className="bg-[#1597E4] py-3 px-5 text-white font-medium rounded-md"
            type="button"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormPage1;
