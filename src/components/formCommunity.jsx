"use client";

import { useActionState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/button";
import Link from "next/link";

export const FormCommunity = ({}) => {
  const [state, pending] = useActionState(null);

  const handleSubmit = (community) => {
    community.preventDefault();
  };

  const handleFileChange = (community) => {};

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen p-4 ">
      <form className="bg-white px-5 py-5 rounded-lg shadow-md w-full max-w-2xl m-4">
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
              placeholder="Type here"
              className="input input-bordered input-md w-full"
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Sport Type</span>
              <span className="text-red-500 ml-1">*</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-md w-full"
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">City</span>
              <span className="text-red-500 ml-1">*</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-md w-full"
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Upload image</span>
              <span className="text-red-500 ml-1">*</span>
            </div>
            <input
              type="file"
              accept="png"
              className="file-input file-input-bordered w-full"
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
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="setPrivate"
                  value="no"
                  className="radio radio-md"
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
            <input
              type="text"
              placeholder="Describe what's special about your community and other important details"
              className="input input-bordered input-md w-full"
            />
          </label>
        </div>
        
        <div className="flex justify-end mt-4">
          <Button variant="secondary" disabled={pending}>
            Submit
          </Button>
          {!state?.success && <p>{state?.message}</p>}
          {state?.success && <p>{state?.message}</p>}
        </div>
        <div className="mt-8"></div>
      </form>
    </div>
  );
};
