import React from "react";

const FormPage1 = ({ onSave, formData, setFormData }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    onSave();
  };

  return (
    <div className="w-full flex flex-col gap-5 py-9 px-9 rounded-lg bg-white border-[1px]">
      <div className="flex justify-between">
        <h1 className="text-xl">
          {formData.hasOwnProperty("id") ? "Update" : "Create a job"}
        </h1>
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
              value={formData.expMin}
              placeholder="Minimum"
              className="rounded-md p-2 text-[#7A7A7A] border-[1px] lg:w-[12vw] xl:w-[13.5vw]"
              onChange={(e) =>
                setFormData({ ...formData, expMin: e.target.value })
              }
            />
            <input
              type="text"
              id="expMax"
              value={formData.expMax}
              placeholder="Maximum"
              className="rounded-md p-2 text-[#7A7A7A] border-[1px] lg:w-[12vw] xl:w-[13.5vw]"
              onChange={(e) =>
                setFormData({ ...formData, expMax: e.target.value })
              }
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
              value={formData.salMin}
              placeholder="Minimum"
              className="rounded-md p-2 text-[#7A7A7A] border-[1px] lg:w-[12vw] xl:w-[13.5vw]"
              onChange={(e) =>
                setFormData({ ...formData, salMin: e.target.value })
              }
            />
            <input
              type="text"
              id="salMax"
              value={formData.salMax}
              placeholder="Maximum"
              className="rounded-md p-2 text-[#7A7A7A] border-[1px] lg:w-[12vw] xl:w-[13.5vw]"
              onChange={(e) =>
                setFormData({ ...formData, salMax: e.target.value })
              }
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
            value={formData.totalEmp}
            placeholder="ex. 100"
            className="rounded-md p-2 text-[#7A7A7A] border-[1px]"
            onChange={(e) =>
              setFormData({ ...formData, totalEmp: e.target.value })
            }
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
                  value={true}
                  defaultChecked={formData.apply === true}
                  className="mr-[2px] h-[16px] w-[16px]"
                  onChange={(e) => setFormData({ ...formData, apply: true })}
                />
                Quick Apply
              </label>
            </div>
            <div>
              <label className="text-sm flex items-center mb-2 font-medium">
                <input
                  type="radio"
                  name="apply"
                  value={false}
                  defaultChecked={formData.apply === false}
                  className="mr-[2px] h-[16px] w-[16px]"
                  onChange={(e) => setFormData({ ...formData, apply: false })}
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
