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

    function getRandomMessage(messages: string[]): string {
      return messages[Math.floor(Math.random() * messages.length)];
    }

    const questMessages = [
      `${person} has a fun quest just for you!`,
      `${person} wants you to go on an adventure!`,
      `${person} gave you a cool quest!`,
      `A new quest from ${person}! Let’s go!`,
      `${person} says: Time for a quest!`
    ];

    const shopMessages = [
      `${person} added something awesome to the shop!`,
      `New goodies in the shop from ${person}!`,
      `${person} put a surprise in the shop!`,
      `Check out the shop — ${person} added something cool!`,
      `Yay! ${person} stocked the shop!`
    ];

    const saveMessages = [
      `Woohoo! You saved up for ${item}!`,
      `Awesome! You can now get ${item}!`,
      `Yippee! ${item} is yours to grab!`,
      `You did it! ${item} is unlocked!`,
      `Hooray! Time to get ${item}!`
    ];

    let message;
    let icon;
    let bgColor = "";

    if (type === "quest") {
      message = getRandomMessage(questMessages);
      icon = <LuClipboard className="text-2xl" />;
      bgColor = "bg-yellow-300";
    } else if (type === "shop") {
      message = getRandomMessage(shopMessages);
      icon = <CgShoppingCart className="text-2xl" />;
      bgColor = "bg-purple-300";
    } else if (type === "save") {
      message = getRandomMessage(saveMessages);
      icon = <FaDollarSign className="text-2xl" />;
      bgColor = "bg-green-300";
    }

  const href = type === "quest" ? "/QuestPage" : "/KidsShop";

  return (
    <a href={href} className="w-auto bg-white h-[80px] rounded-4xl grid grid-cols-[70px_1fr] items-center mx-2 px-4 text-xl shadow-[6px_6px_0px_rgba(0,0,0,0.2)] border-6 border-black">
      <div className="w-[70px] h-full flex items-center justify-center">
        <div className={`${bgColor} rounded-full w-12 h-12 flex items-center justify-center border-4 border-black`}>
          {icon}
        </div>
      </div>
      <p className="font-medium text-md max-w-full overflow-hidden text-ellipsis whitespace-normal line-clamp-4">
        {message}
      </p>
    </a>
  );
};

export default Notification;