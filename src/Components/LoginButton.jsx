import React from "react";
import PersonIcon from "@mui/icons-material/Person";

const LoginButton = () => {
  return (
    <button className="bg-secondary hover:bg-headerred text-white font-bold py-3 mr-3 px-4 rounded">
      <PersonIcon />
    </button>
  );
};

export default LoginButton;
