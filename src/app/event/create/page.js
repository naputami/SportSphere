"use client";

import React, { useActionState } from "react";
import { DateInput } from "@/components/dateInput";
import { Upload } from "@/components/uploadImage";
import { Button } from "@/components/button";
import { Footer } from "@/components/footer";

export default function Page() {
  const [state, formAction, pending] = useActionState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleFileChange = (event) => {};

  return (
    <div>
      <div className="m-auto max-w-xl pt-10 space-y-4 border">
        <section>
          <h2 className="font-medium text-2xl mb-4">Event Details</h2>
          <form action={formAction} className="space-y-2 px-8 py-4">
            <div>
              <label htmlFor="eventName" className="text-right">
                Event Name
              </label>
              <input 
                type="text"
                id="eventName"
                name="eventName"
                placeholder="Enter the name of your event"
              />
            </div>
            <DateInput name="date" />
            <div className="flex-1 space-y-2">
              <label htmlFor="city">City</label>
              <select name="city" id="city">
                <option>Jakarta</option>
                <option>Tangerang</option>
                <option>Tangerang Selatan</option>
                <option>Bandung</option>
                <option>Semarang</option>
                <option>Salatiga</option>
                <option>Solo</option>
                <option>Yogyakarta</option>
                <option>Malang</option>
                <option>Surabaya</option>
              </select>
            </div>
            <div>
              <label htmlFor="url">URL</label>
              <input type="text" id="url" name="url" placeholder="Put URL" />
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="file">Upload File</label>
                <input type="file" id="file" onChange={handleFileChange} />
              </div>
            </form>
            <div>
              <label htmlFor="kuota">Kuota</label>
              <input name="kuota" id="kuota" placeholder="Kuota" />
            </div>
            <div>
              <label htmlFor="fee">Fee</label>
              <input name="fee" id="fee" placeholder="Fee" />
            </div>
            <h2 className="font-medium text-2xl text-center">
              Additional Note
            </h2>
            <textarea
              name="event note"
              id="event note"
              placeholder="Describe what's special about your event & other important details"
              rows={6}
            />
          </form>
        </section>
        <div style={{ textAlign: "right" }}>
          <Button disabled={pending} className="btn btn-neutral text-white">
            Submit
          </Button>
        </div>
        <Footer />
      </div>
    </div>
  );
}

const Form = (label) => {
  return;
  <div>classname="text-right"</div>;
};
