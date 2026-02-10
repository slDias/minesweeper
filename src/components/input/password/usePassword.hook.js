import { useState } from "react";

const usePasswordHook = () => {
  const [value, setValue] = useState("");

  return {
    value,
    onPasswordChange: setValue,
  };
};

export { usePasswordHook };
