/* eslint-disable no-unused-vars */
import React from "react";
import { useStateValue } from "../StateProvider";

function Email() {
  
  const [{ basket, user }, dispatch] = useStateValue();

  const str = user?.email;
  const index = str?.indexOf("@");
  const email = str?.slice(0, index);
  return email;
}

export default Email;
