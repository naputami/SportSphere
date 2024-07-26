"use client";
import { useCommunityContext } from "@/context/community-context";
import { useState } from "react";

export const ShareLinkModal = () => {
  const [copied, setCopied] = useState(false);
  const { copiedCommunityId } = useCommunityContext();
  const link = `${window.location.origin}/community/${copiedCommunityId}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(link).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
      (err) => {
        console.error("Failed to copy text: ", err);
      }
    );
  };
  return (
    <dialog id="share-link" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Share the community!</h3>
        <p className="py-4">
          Share this community link below to your families and friends!
        </p>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={link}
            readOnly
            className="border px-2 py-1 rounded lg:w-5/6"

          />
          <button
            onClick={copyToClipboard}
            className="bg-yellow-theme btn btn-sm hover:bg-yellow-theme"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};
