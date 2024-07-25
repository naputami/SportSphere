"use client";

import { CreateCommunity } from "@/app/community/create/action"
import { useEffect, useState } from "react";
import { useActionState } from "react";
import toast from "react-hot-toast";
import { Button } from "@/components/button";
import Link from "next/link";

export const FormCommunity = () => {
  const [state, formAction, pending] = useActionState(CreateCommunity, null);
  const [formData, setFormData] = useState({
    communityName: "",
    sportType: "",
    city: "",
    file: null,
    setPrivate: "",
    communityDescription: "",
  });

  useEffect(() => {
    if (state?.status === "success") {
      toast.success(state?.message);
    } else if (state?.status === "error") {
      toast.error(state?.message);
    }
  }, [state]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formAction(formData);
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white px-5 py-5 rounded-lg shadow-md w-full max-w-2xl m-4"
      >
        <Link href={`/`} className="m-auto">
          <button
            type="button"
            className="flex items-center text-gray-950 hover:text-gray-700 focus:outline-none"
          >
            <span className="text-gray-500 mr-2">&larr;</span>
            <span className="text-xs">Back</span>
          </button>
        </Link>
        <h2 className="text-3xl font-bold text-center mb-6">
          Create Community
        </h2>
        <div className="m-auto max-w-xl space-y-2">
          <h3 className="text-lg font-medium">Community Details</h3>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Community name</span>
              <span className="text-red-500 ml-1">*</span>
            </div>
            <input
              type="text"
              name="communityName"
              placeholder="Type here"
              className="input input-bordered input-md w-full"
              value={formData.communityName}
              onChange={handleChange}
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Sport Type</span>
              <span className="text-red-500 ml-1">*</span>
            </div>
            <input
              type="text"
              name="sportType"
              placeholder="Type here"
              className="input input-bordered input-md w-full"
              value={formData.sportType}
              onChange={handleChange}
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">City</span>
              <span className="text-red-500 ml-1">*</span>
            </div>
            <input
              type="text"
              name="city"
              placeholder="Type here"
              className="input input-bordered input-md w-full"
              value={formData.city}
              onChange={handleChange}
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Upload image</span>
              <span className="text-red-500 ml-1">*</span>
            </div>
            <input
              type="file"
              name="file"
              accept=".jpg,.jpeg,.png"
              className="file-input file-input-bordered w-full"
              onChange={handleChange}
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Set as Private</span>
              <span className="text-red-500 ml-1">*</span>
            </div>
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="setPrivate"
                  value="yes"
                  className="radio radio-md"
                  onChange={handleChange}
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="setPrivate"
                  value="no"
                  className="radio radio-md"
                  onChange={handleChange}
                />
                <span>No</span>
              </label>
            </div>
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Community Description</span>
              <span className="text-red-500 ml-1">*</span>
            </div>
            <textarea
              type="text"
              name="communityDescription"
              placeholder="Describe what's special about your community and other important details"
              className="input input-bordered input-md w-full"
              value={formData.communityDescription}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="flex justify-end mt-4">
          <Button variant="secondary" type="submit" disabled={pending}>
            Submit
          </Button>
          {state && (
            <p className={state.status === "success" ? "text-green-500" : "text-red-500"}>
              {state.message}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};
