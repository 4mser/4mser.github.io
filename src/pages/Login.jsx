import React from "react";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const { signInWithGoogle } = UserAuth();
  return (
    <div>
      <button onClick={signInWithGoogle}>Iniciar sesión con google</button>
    </div>
  );
};

export default Login;
