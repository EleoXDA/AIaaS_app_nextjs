"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('fd24b613-6ca5-436f-bb83-cc78134e3f51');
  }, []);

  return null;
};