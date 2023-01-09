import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const RouteGuard = (ComposedComponent) => {
  const AuthenticationCheck = (props) => {
    const [isAuth, setIsAuth] = useState(false);
    const users = useSelector((state) =>
      state.Login_Register_Info.user_verification
        ? state.Login_Register_Info.user_verification.auth
        : false
    );
    useEffect(() => {
      if (users) {
        setIsAuth(true);
      } else {
        props.history.push("/");
      }
    }, [props, users]);

    if (!isAuth) {
      return <div>loading</div>;
    } else {
      return <ComposedComponent />;
    }
  };
  return AuthenticationCheck;
};
export default RouteGuard;
