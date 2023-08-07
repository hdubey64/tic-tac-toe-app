import { FaPen, FaRegCircle, FaTimes } from "react-icons/fa";

import React from "react";

const Icon = ({ name }) => {
   if (name == "circle") {
      return <FaRegCircle />;
   } else if (name == "cross") {
      return <FaTimes />;
   } else {
      return <FaPen />;
   }
};

export default Icon;
