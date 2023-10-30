import React from "react";
import PersonIcon from "@mui/icons-material/Person";

const LoginButton = () => {
  return (
    <button className="bg-secondary hover:bg-hover active:bg-active text-white font-bold py-3 mr-3 px-4 rounded border border-border shadow-lg">
      <PersonIcon />
    </button>
  );
};

export default LoginButton;
