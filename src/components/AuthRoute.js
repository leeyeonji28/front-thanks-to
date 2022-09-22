import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthRoute = ({ access, component: Component }) => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  if (access !== null) {
    setIsLogin(true);
  } else {
    alert("로그인 후 이용해주세요.");
    navigate("/login");
  }
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [error, setError] = useState("");

  //   if (error) {
  //     return <div>{error.message}</div>;
  //   }
  if (isLogin === false) {
    return <div>Loading...</div>;
  }

  return access ? Component : "";
};

export default AuthRoute;
