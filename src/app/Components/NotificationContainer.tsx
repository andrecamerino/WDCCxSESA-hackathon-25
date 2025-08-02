import React from "react";
import Notification from "./Notification";

const NotificationContainer = () => {
  return (
    <div className="flex flex-col items-center px-4 py-6">
      <div className="w-full max-w-md max-h-96 overflow-y-auto space-y-2">
        <Notification type="task" person="Mum" />
        <Notification type="task" person="Mum" />
        <Notification type="task" person="Dad" />
        <Notification type="shop" person="Mum" />
        <Notification type="shop" person="Uncle" />
        <Notification type="save" item="a skateboard" />
        <Notification type="save" item="Minecraft" />
        <Notification type="save" item="a new bike" />
      </div>
    </div>
  );
};

export default NotificationContainer;
