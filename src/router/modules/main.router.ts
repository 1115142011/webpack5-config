import React from "react";
import { RouterConfigItem } from "..";

const configList: RouterConfigItem[] = [
  {
    title: "首页",
    ignoreLogin:true,
    path: "/home",
    component: React.lazy(() => import("../../pages/home")),
  },
  {
    title: "产品页",
    ignoreLogin:true,
    path: "/product",
    component: React.lazy(() => import("../../pages/product")),
  },
];

export default configList;
