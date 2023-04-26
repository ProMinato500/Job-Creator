import React, { useState } from "react";

const FormPage1 = ({ onSave, formData }) => {
  const [expMin, setExpMin] = useState(formData.expMin || "");
  const [expMax, setExpMax] = useState(formData.expMax || "");
  const [salMin, setSalMin] = useState(formData.salMin || "");
  const [salMax, setSalMax] = useState(formData.salMax || "");
  const [totalEmp, setTotalEmp] = useState(formData.totalEmp || "");
  const [apply, setApply] = useState(formData.apply || true);

  const onSubmit = (e) => {
    e.preventDefault();
    onSave({ expMin, expMax, salMin, salMax, totalEmp, apply });
  };

  return (
    <div className="w-full flex flex-col gap-5 py-9 px-9 rounded-lg bg-white border-[1px]">
      <div className="flex justify-between">
        <h1 className="text-xl">Create a job</h1>
        <p className="text-xl">Step 2</p>
      </div>
      <form className="flex flex-col gap-10">
        <div className="flex flex-col">
          <label className="text-sm mb-2 font-medium" htmlFor="expMin">
            Experience
          </label>
          <div className="flex justify-between lg:flex-row lg:gap-1 gap-10 flex-col">
            <input
              type="text"
              id="expMin"
              value={expMin}
              placeholder="Minimum"
              className="rounded-md p-2 text-[#7A7A7A] border-[1px] lg:w-[12vw] xl:w-[13.5vw]"
              onChange={(e) => setExpMin(e.target.value)}
            />
            <input
              type="text"
              id="expMax"
              value={expMax}
              placeholder="Maximum"
              className="rounded-md p-2 text-[#7A7A7A] border-[1px] lg:w-[12vw] xl:w-[13.5vw]"
              onChange={(e) => setExpMax(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-sm mb-2 font-medium" htmlFor="salMin">
            Salary
          </label>
          <div className="flex justify-between lg:flex-row lg:gap-1 gap-10 flex-col">
            <input
              type="text"
              id="salMin"
              value={salMin}
              placeholder="Minimum"
              className="rounded-md p-2 text-[#7A7A7A] border-[1px] lg:w-[12vw] xl:w-[13.5vw]"
              onChange={(e) => setSalMin(e.target.value)}
            />
            <input
              type="text"
              id="salMax"
              value={salMax}
              placeholder="Maximum"
              className="rounded-md p-2 text-[#7A7A7A] border-[1px] lg:w-[12vw] xl:w-[13.5vw]"
              onChange={(e) => setSalMax(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-sm mb-2 font-medium" htmlFor="remote">
            Total employee
          </label>
          <input
            type="text"
            id="totalEmp"
            value={totalEmp}
            placeholder="ex. 100"
            className="rounded-md p-2 text-[#7A7A7A] border-[1px]"
            onChange={(e) => setTotalEmp(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm mb-2 font-medium" htmlFor="apply">
            Apply type
          </label>
          <div className="flex gap-3 text-[#7A7A7A]">
            <div className="flex items-center">
              <label className="text-sm flex items-center mb-2 font-medium">
                <input
                  type="radio"
                  name="apply"
                  value="0"
                  className="mr-[2px] h-[16px] w-[16px]"
                  checked={apply === true}
                  onChange={(e) => setApply(e.target.value)}
                />
                Quick Apply
              </label>
            </div>
            <div>
              <label className="text-sm flex items-center mb-2 font-medium">
                <input
                  type="radio"
                  name="apply"
                  value="1"
                  className="mr-[2px] h-[16px] w-[16px]"
                  checked={apply === false}
                  onChange={(e) => setApply(e.target.value)}
                />
                External Apply
              </label>
            </div>
          </div>
        </div>
        <div className="w-full mt-16 flex justify-end">
          <button
            className="bg-[#1597E4] py-3 px-5 text-white font-medium rounded-md"
            type="button"
            onClick={onSubmit}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormPage1;
