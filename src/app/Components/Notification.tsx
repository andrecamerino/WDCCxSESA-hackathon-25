import React from "react";
import { LuClipboard } from "react-icons/lu";
import { CgShoppingCart } from "react-icons/cg";
import { FaDollarSign } from "react-icons/fa";

interface NotificationProps {
  type: string;
  person?: string;
  item?: string;
}

const Notification: React.FC<NotificationProps> = ({ type, person, item }) => {

    let message;
    let icon;

    if (type === "task") {
        message = `${person} just added a task!`;
        icon = <LuClipboard className="text-3xl" />;
    } else if (type === "shop") {
        message = `${person} just added to the shop!`;
        icon = <CgShoppingCart className="text-3xl" />;
    } else if (type === "save") {
        icon = <FaDollarSign className="text-3xl" />;
        message = `You just saved enough to buy ${item}`;
    }

  return (
    <div className="w-auto bg-white h-[80px] rounded-4xl grid grid-cols-[50px_1fr] items-center mx-2 px-4 text-xl shadow-[6px_6px_0px_rgba(0,0,0,0.2)]">
      <div className="w-[50px] h-full flex items-center justify-center">
        {icon}
      </div>
      <p className="font-medium text-sm max-w-full overflow-hidden text-ellipsis whitespace-normal line-clamp-4">
        {message}
      </p>
    </div>
  );
};

export default Notification;