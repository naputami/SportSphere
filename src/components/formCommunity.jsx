"use client";

import { CreateCommunity } from "@/app/community/create/action";
import { useEffect, useState } from "react";
import { useActionState } from "react";
import toast from "react-hot-toast";
import { Button } from "@/components/button";
import Link from "next/link";
import { sportTypes } from "@/libs/getDisplayedSportType";

export const FormCommunity = ({ userId }) => {
  const [state, formAction, pending] = useActionState(CreateCommunity, null);
  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [cities, setCities] = useState([]);

  useEffect(() => {
    if (state?.status === "success") {
      toast.success(state?.message);
    } else if (state?.status === "error") {
      toast.error(state?.message);
    }
  }, [state]);

  useEffect(() => {
    // Fetch provinces
    fetch("https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json")
      .then((response) => response.json())
      .then((data) => setProvinces(data))
      .catch((error) => console.error("Error fetching provinces:", error));
  }, []);

  useEffect(() => {
    if (selectedProvince) {
      fetch(
        `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${selectedProvince}.json`
      )
        .then((response) => response.json())
        .then((data) => setCities(data))
        .catch((error) => console.error("Error fetching cities:", error));
    }
  }, [selectedProvince]);

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen p-4">
      <form
        action={formAction}
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
              placeholder="Type community name here"
              className="input input-bordered input-md w-full"
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Sport Type</span>
              <span className="text-red-500 ml-1">*</span>
            </div>
            <select className="select select-bordered w-full" name="sportType">
              <option disabled selected>
                Select Sport Type
              </option>
              {sportTypes.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>

          {/* <label className="form-control w-full">
            <div className="label">
              <span className="label-text">City</span>
              <span className="text-red-500 ml-1">*</span>
            </div>
            <input
              type="text"
              name="city"
              placeholder="Type here"
              className="input input-bordered input-md w-full"
            />
          </label> */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Province</span>
              <span className="text-red-500 ml-1">*</span>
            </div>
            <select
              className="select select-bordered w-full"
              onChange={(e) => setSelectedProvince(e.target.value)}
            >
              <option disabled selected>
                Select Province
              </option>
              {provinces.map((province) => (
                <option key={province.id} value={province.id}>
                  {province.name}
                </option>
              ))}
            </select>
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">City</span>
              <span className="text-red-500 ml-1">*</span>
            </div>
            <select
              className="select select-bordered w-full"
              disabled={!selectedProvince}
              name="city"
            >
              <option disabled selected>
                Select City
              </option>
              {cities.map((item) => (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
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
            <textarea
              type="text"
              name="communityDescription"
              placeholder="Describe what's special about your community and other important details"
              className="textarea textarea-bordered textarea-md w-full"
            />
          </label>
        </div>
        <input type="hidden" name="userId" value={userId} />`
        <div className="flex justify-end mt-4">
          <Button variant="secondary" type="submit" disabled={pending}>
            {pending && <span className="loading loading-spinner"></span> }
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};
