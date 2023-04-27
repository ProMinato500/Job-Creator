import React from "react";

const FormPage1 = ({ onNext, formData, setFormData }) => {
  const handleNext = () => {
    if (
      formData.title.trim() === "" ||
      formData.company.trim() === "" ||
      formData.industry.trim() === ""
    ) {
      alert("Please fill in all required fields.");
    } else {
      onNext();
    }
  };

  return (
    <div className="w-full flex flex-col gap-5 py-9 px-9 rounded-lg bg-white border-[1px]">
      <div className="flex justify-between">
        <h1 className="text-xl">
          {formData.hasOwnProperty("id") ? "Update" : "Create a job"}
        </h1>
        <p className="text-xl">Step 1</p>
      </div>
      <form className="container flex flex-col gap-10">
        <div className="flex flex-col">
          <label className="text-sm mb-2 font-medium" htmlFor="title">
            Job title<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="title"
            value={formData.title}
            className="rounded-md p-2 text-[#7A7A7A] border-[1px]"
            required
            placeholder="ex. UX UI Designer"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm mb-2 font-medium" htmlFor="company">
            Company name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="company"
            value={formData.company}
            required
            className="rounded p-2 text-[#7A7A7A] border-[1px]"
            placeholder="ex. Google"
            onChange={(e) =>
              setFormData({ ...formData, company: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm mb-2 font-medium" htmlFor="industry">
            Industry<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="industry"
            value={formData.industry}
            required
            className="rounded p-2 text-[#7A7A7A] border-[1px]"
            placeholder="ex. Information Technology"
            onChange={(e) =>
              setFormData({ ...formData, industry: e.target.value })
            }
          />
        </div>

        <div className="md:columns-2 flex justify-between lg:flex-row lg:gap-1 gap-10 flex-col">
          <div className="flex flex-col lg:w-[12vw] xl:w-[13.5vw]">
            <label className="text-sm mb-2 font-medium" htmlFor="location">
              Location
            </label>
            <input
              type="text"
              id="location"
              value={formData.location}
              className="rounded p-2 text-[#7A7A7A] border-[1px]"
              placeholder="ex. Chennai"
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col lg:w-[12vw] xl:w-[13.5vw]">
            <label className="text-sm mb-2 font-medium" htmlFor="remote">
              Remote type
            </label>
            <input
              type="text"
              id="remote"
              value={formData.remote}
              className="rounded p-2 text-[#7A7A7A] border-[1px]"
              placeholder="ex. In-office"
              onChange={(e) =>
                setFormData({ ...formData, remote: e.target.value })
              }
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
