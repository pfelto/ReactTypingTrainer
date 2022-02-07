import { useState, useEffect } from "react";

export function useCountdown(status) {
  const [countdown, setCountdown] = useState(6);

  //to use timeout i would have to change status check with the countdown
  useEffect(() => {
    if (status === "active") {
      const countdownTimer = setInterval(() => {
        setCountdown((c) => c - 1);
      }, 1000);
      return () => {
        clearInterval(countdownTimer);
      };
    }
  }, [status]);

  const retObj = { countdown, setCountdown };

  return retObj;
}
