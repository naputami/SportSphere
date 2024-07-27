"use client";

import { CreateEventAction } from "@/app/community/[communityId]/create/action";
import toast from "react-hot-toast";
import { useEffect, useActionState } from "react";
import { Button } from "@/components/button";
import Link from "next/link";

export const FormEvent = ({ communityId }) => {
  const [state, formAction, pending] = useActionState(CreateEventAction, null);
  useEffect(() => {
    if (state?.status === "success") {
      toast.success(state?.message);
    } else if (state?.status === "error") {
      toast.error(state?.message);
    }
  }, [state]);

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen p-4 ">
      <form
        action={formAction}
        className="bg-white px-5 py-5 rounded-lg shadow-md w-full max-w-2xl m-4"
      >
        <Link href={`/community/${communityId}`} className="m-auto">
          <button
            type="button"
            className="flex items-center text-gray-950 hover:text-gray-700 focus:outline-none"
          >
            <span className="text-gray-500 mr-2">&larr;</span>
            <span className="text-xs">Back</span>
          </button>
        </Link>
        <h2 className="text-3xl font-bold text-center mb-6">
          Create Your Event
        </h2>
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
              name="eventName"
            />
          </label>

          <label>
            <div className="label">
              <span className="label-text">Start Date</span>
              <span className="text-red-500 ml-1">*</span>
            </div>
            <input
              type="datetime-local"
              className="w-full px-3 py-2 border rounded-lg"
              name="startDate"
            />
          </label>

          <label>
            <div className="label">
              <span className="label-text">End Date</span>
              <span className="text-red-500 ml-1">*</span>
            </div>
            <input
              type="datetime-local"
              className="w-full px-3 py-2 border rounded-lg"
              name="endDate"
            />
          </label>

          <label>
            <div className="label">
              <span className="label-text">Registration Deadline</span>
              <span className="text-red-500 ml-1">*</span>
            </div>
            <input
              type="datetime-local"
              className="w-full px-3 py-2 border rounded-lg"
              name="registrationDeadline"
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Location</span>
              <span className="text-red-500 ml-1">*</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-md w-full"
              name="location"
            />
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
              name="url"
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Upload image</span>
              <span className="text-red-500 ml-1">*</span>
            </div>
            <input
              type="file"
              className="file-input file-input-bordered w-full"
              name="file"
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
              name="quota"
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Fee</span>
              <span className="text-red-500 ml-1">*</span>
            </div>
            <input
              type="number"
              placeholder="Enter fee amount (numbers only"
              className="input input-bordered input-md w-full"
              name="fee"
            />
          </label>

          <h3 className="text-lg font-medium py-4">Additional Note</h3>
          <textarea
            type="text"
            placeholder="Describe what's special about your event & other important details"
            className="px-4 py-3 border rounded-lg w-full"
            rows={6}
            name="note"
          />
        </div>
        <input type="hidden" value={communityId} name="communityId" />
        <div className="flex justify-end mt-4">
          {/* {!state?.success && (
            <p className="text-red-600 bg-rose-200 p-2 rounded-md text-center">
              {state?.message}
            </p>
          )}
          {state?.success && <p>{state?.message}</p>} */}
          <div className="flex justify-end">
            <Button variant="secondary" disabled={pending}>
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
