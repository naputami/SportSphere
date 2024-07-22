"use client";

import { useActionState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/button";
import Link from "next/link";

export const FormEvent = ({ communityId }) => {
  const [state, pending] = useActionState(null);
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleFileChange = (event) => {};

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen p-4 ">
      <form className="bg-white px-5 py-5 rounded-lg shadow-md w-full max-w-2xl m-4">
        <Link href={`/community/${communityId}`} className="m-auto">
          <button
            type="button"
            className="flex items-center text-gray-950 hover:text-gray-700 focus:outline-none"
          >
            <span className="text-gray-500 mr-2">&larr;</span>
            <span className="text-xs">Back</span>
          </button>
        </Link>
        <h2 className="text-3xl font-bold text-center mb-6">Create event</h2>
        <div className="m-auto max-w-xl space-y-2">
          <h3 className="text-lg font-medium">Event Details</h3>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Event name</span>
              <span className="text-red-500 ml-1">*</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-md w-full"
            />
          </label>

          <label>
            <div className="label">
              <span className="label-text">Date</span>
              <span className="text-red-500 ml-1">*</span>
            </div>
            <input type="date" className="w-full px-3 py-2 border rounded-lg" />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">City</span>
              <span className="text-red-500 ml-1">*</span>
            </div>
            <select className="select select-bordered select-md w-full">
              <option disabled selected></option>
              <option>Bandung</option>
              <option>Jakarta</option>
              <option>Malang</option>
              <option>Salatiga</option>
              <option>Semarang</option>
              <option>Solo</option>
              <option>Surabaya</option>
              <option>Tangerang</option>
              <option>Tangerang Selatan</option>
              <option>Yogyakarta</option>
            </select>
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Detail location</span>
              <span className="text-red-500 ml-1">*</span>
            </div>
            <input
              type="text"
              placeholder="Put url or detail location"
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
              <span className="label-text">Quota</span>
              <span className="text-red-500 ml-1">*</span>
            </div>
            <input
              type="text"
              placeholder="Enter quota"
              className="input input-bordered input-md w-full"
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Fee</span>
              <span className="text-red-500 ml-1">*</span>
            </div>
            <input
              type="text"
              placeholder="Enter fee amount"
              className="input input-bordered input-md w-full"
            />
          </label>

          <h3 className="text-lg font-medium py-4">Additional Note</h3>
          <textarea
            type="text"
            placeholder="Describe what's special about your event & other important details"
            className="px-4 py-3 border rounded-lg w-full"
            rows={6}
          />
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
