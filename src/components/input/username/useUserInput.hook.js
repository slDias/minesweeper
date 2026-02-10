import { useState } from "react";

const useUsernameHook = () => {
  const [value, setValue] = useState("");

  const onUsernameChange = (newVal) => {
    console.log("changed");
    console.log(newVal);
    setValue(newVal);
  };

  return {
    value,
    onUsernameChange,
  };
};

export { useUsernameHook };
