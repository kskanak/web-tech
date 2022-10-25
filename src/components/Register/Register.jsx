import React, { useContext } from "react";
import { AuthContext } from "../../router/AuthProvider";

const Register = () => {
  const user = useContext(AuthContext);
  console.log(user);
  return <div>register</div>;
};

export default Register;
