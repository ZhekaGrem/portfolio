import { useEffect } from "react";

const useBodyOverflow = (isOpen) => {
  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      body.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "auto";
    }

    return () => {
      body.style.overflowY = "auto";
    };
  }, [isOpen]);
};

export default useBodyOverflow;
