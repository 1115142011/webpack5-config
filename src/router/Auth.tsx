import React from "react";
import { Redirect } from "react-router-dom";
import { RouterConfigItem } from ".";

const Auth = (Route: RouterConfigItem, props: any) => {
  const token = localStorage.getItem("currentToken");
  document.title = "标题-" + Route.title;

  const RouteComponent = Route.component as React.ComponentType;

  if (Route.ignoreLogin) {
    return <RouteComponent {...props} />;
  } else {
    if (token) {
      return <RouteComponent {...props} />;
    } else {
      return <Redirect from="/" {...props} to="/login" />;
    }
  }
};

export default Auth;
