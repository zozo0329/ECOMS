import React from "react";
import ErrorPage from "../../../../UI/ErrorPage/ErrorPage";
import { Helmet } from "react-helmet";
const NotificationMain = () => {
  return (
    <>
      <Helmet>
        <title>STOREX | Notification</title>
      </Helmet>
      <ErrorPage />
    </>
  );
};

export default NotificationMain;
