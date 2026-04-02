import React, { useEffect } from "react";

import "./errormessgae.css";

type Props = {
  errorText: string;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
};

const ErrorMessage = ({ errorText, setError }: Props) => {
  useEffect(() => {
    if (errorText) {
      const timer = setTimeout(() => {
        setError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [errorText]);

  return <div className="message">{errorText}</div>;
};

export default ErrorMessage;
