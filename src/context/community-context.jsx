"use client";
import { createContext, useState, useContext } from "react";

const CommunityContext = createContext();

export const CommunityContextProvider = ({ children }) => {
  const [copiedCommunityId, setCopiedCommunityId] = useState("");

  return (
    <CommunityContext.Provider
      value={{ copiedCommunityId, setCopiedCommunityId }}
    >
      {children}
    </CommunityContext.Provider>
  );
};

export const useCommunityContext = () => useContext(CommunityContext);
