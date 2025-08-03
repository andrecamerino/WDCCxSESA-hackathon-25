import React, { useState, useRef } from "react";
import Notification from "./Notification";

const NotificationContainer = () => {
  const [notifications, setNotifications] = useState([
    { id: "1", type: "quest", person: "Mum" },
    { id: "2", type: "quest", person: "Mum" },
    { id: "3", type: "quest", person: "Dad" },
    { id: "4", type: "shop", person: "Mum" },
    { id: "5", type: "shop", person: "Uncle" },
    { id: "6", type: "save", item: "a skateboard" },
    { id: "7", type: "save", item: "Minecraft" },
    { id: "8", type: "save", item: "a new bike" },
  ]);

  const [scrollY, setScrollY] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleDeleteNotification = (id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollY(e.currentTarget.scrollTop);
  };

  return (
    <div className="flex flex-col items-center rounded-3xl gap-4 p-4">
      <p className="text-sm text-gray-500 text-center">Swipe right to delete →</p>
      <div
        ref={scrollContainerRef}
        className="w-full max-w-md max-h-96 overflow-y-auto space-y-2 pb-20"
        onScroll={handleScroll}
      >

        {notifications.map((notification, index) => (
          <Notification
            key={notification.id}
            id={notification.id}
            type={notification.type}
            person={notification.person}
            item={notification.item}
            onDelete={handleDeleteNotification}
            scrollY={scrollY}
            index={index}
          />
        ))}
        {notifications.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No notifications to show
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationContainer;