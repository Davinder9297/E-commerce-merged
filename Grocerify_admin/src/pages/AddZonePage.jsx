import React, { useState } from "react";

const AddZonePage = ({ onClose, onAddZone }) => {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newZone = {
      OwnerName: formData.name,
      OwnerEmail: formData.city,
      OwnerMobile: formData.status,
    };
    onAddZone(newZone);
    setFormData({ name: "", city: "", status: "" });
    onClose();
  };

  return (
    <>
      {onClose && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-600 dark:bg-gray-900 rounded-lg shadow-lg p-8 max-w-md w-full relative">
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div class="flex justify-center">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-4">
                Add Operating Zone
              </h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-lg font-bold font-medium-bold text-gray-900 dark:text-black "
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input-field w-full h-[40px] rounded-lg bg-slate-300 p-3 placeholder-gray-800 text-[18px] font-bold"
                  placeholder="Type Your Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="city"
                  className="block mb-2 text-lg font-medium font-bold text-gray-900 dark:text-white"
                >
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Add City"
                  className="input-field w-full h-[40px] rounded-lg  bg-slate-300 p-3 placeholder-gray-800 text-[18px] font-bold"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="status"
                  className="block mb-2 text-lg font-medium text-gray-900 dark:text-white font-bold"
                >
                  Status
                </label>
                <select
                  name="status"
                  id="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="input-field w-full h-[40px] rounded-lg  bg-slate-300 pl-3 placeholder-gray-800 text-[18px] font-bold"
                  required
                >
                  <option value="">Select Status</option>
                  <option value="approved">Approved</option>
                  <option value="notApproved">Not Approved</option>
                </select>
              </div>
              <div className="">
                <button
                  type="submit"
                  className="bg-orange-600 hover:bg-orange-800 inline-block rounded-lg  bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                >
                  Add Operating Zone
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddZonePage;
