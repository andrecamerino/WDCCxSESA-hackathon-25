import React from "react";
import Notification from "./Notification";

const NotificationContainer = () => {
  return (
    <div className="flex flex-col items-center rounded-3xl gap-4">
      <div className="w-full max-w-md max-h-150 pb-100 overflow-y-auto space-y-2">
        <Notification type="quest" person="Mum" />
        <Notification type="quest" person="Mum" />
        <Notification type="quest" person="Dad" />
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
