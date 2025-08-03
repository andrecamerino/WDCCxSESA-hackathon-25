import React, { useEffect, useState, useRef } from "react";
import { LuClipboard } from "react-icons/lu";
import { CgShoppingCart } from "react-icons/cg";
import { FaDollarSign } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

interface NotificationProps {
  id: string;
  type: string;
  person?: string;
  item?: string;
  onDelete: (id: string) => void;
  scrollY: number;
  index: number;
}

const Notification: React.FC<NotificationProps> = ({ id, type, person, item, onDelete, scrollY, index }) => {
  const [message, setMessage] = useState("");
  const [translateX, setTranslateX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);

  function getRandomMessage(messages: string[]): string {
    return messages[Math.floor(Math.random() * messages.length)];
  }

  const questMessages = [
    `${person} has a fun quest just for you!`,
    `${person} wants you to go on an adventure!`,
    `${person} gave you a cool quest!`,
    `A new quest from ${person}! Let’s go!`,
    `${person} says: Time for a quest!`,
  ];

  const shopMessages = [
    `${person} added something awesome to the shop!`,
    `New goodies in the shop from ${person}!`,
    `${person} put a surprise in the shop!`,
    `Check out the shop — ${person} added something cool!`,
    `Yay! ${person} stocked the shop!`,
  ];

  const saveMessages = [
    `Woohoo! You saved up for ${item}!`,
    `Awesome! You can now get ${item}!`,
    `Yippee! ${item} is yours to grab!`,
    `You did it! ${item} is unlocked!`,
    `Hooray! Time to get ${item}!`,
  ];

  let icon;
  let bgColor = "";

  if (type === "quest") {
    icon = <LuClipboard className="text-2xl" />;
    bgColor = "bg-yellow-300";
  } else if (type === "shop") {
    icon = <CgShoppingCart className="text-2xl" />;
    bgColor = "bg-purple-300";
  } else if (type === "save") {
    icon = <FaDollarSign className="text-2xl" />;
    bgColor = "bg-green-300";
  }

  useEffect(() => {
    if (type === "quest") {
      setMessage(getRandomMessage(questMessages));
    } else if (type === "shop") {
      setMessage(getRandomMessage(shopMessages));
    } else if (type === "save") {
      setMessage(getRandomMessage(saveMessages));
    }
  }, [type, item, person]);


  // Calculate scroll-based animation values
  const calculateScrollAnimation = () => {
    // Only apply scaling if there's actual scroll
    if (scrollY === 0) {
      return { scale: 1, opacity: 1 };
    }
    // Each notification is about 88px tall (80px + 8px gap)
    const notificationHeight = 88;
    const notificationTop = index * notificationHeight;

    // Start scaling down when notification reaches top 100px of scroll container
    const fadeStart = Math.max(0, scrollY - 50);
    const fadeEnd = scrollY + 100;

    // Calculate how far this notification is from the fade zone
    const distanceFromFade = notificationTop - fadeStart;

    if (distanceFromFade < 0) {
      // Notification is above the visible area - make it very small
      return { scale: 0.3, opacity: 0.2 };
    } else if (distanceFromFade < 100) {
      // Notification is in the fade zone - scale based on position
      const progress = distanceFromFade / 100;
      const scale = 0.3 + (progress * 0.7); // Scale from 0.3 to 1.0
      const opacity = 0.2 + (progress * 0.8); // Opacity from 0.2 to 1.0
      return { scale, opacity };
    } else {
      // Notification is fully visible
      return { scale: 1, opacity: 1 };
    }
  };

  const { scale, opacity } = calculateScrollAnimation();

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;

    const currentX = e.touches[0].clientX;
    const diffX = currentX - startX;

    // Only allow right swipe (positive values)
    if (diffX > 0) {
      setTranslateX(diffX);
    }
  };

  const handleNavigation = () => {
    if (isDragging || isDeleting || translateX !== 0) return;

    if (type === "quest") {
      window.location.href = "/Kids/QuestPage";
    } else if (type === "shop") {
      window.location.href = "/KidsShop";
    } else if (type === "save") {
      window.location.href = "/KidsShop";
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    handleNavigation();
  };

  const handleTouchEnd = () => {
    setIsDragging(false);

    // If swiped more than 100px to the right, delete the notification
    if (translateX > 100) {
      setIsDeleting(true);
      setTranslateX(400);
      setTimeout(() => {
        onDelete(id);
      }, 200);
    } else {
      // Snap back to original position
      setTranslateX(0);
      // ADD THIS: Navigate if it was just a tap (not a swipe)
      if (translateX < 10) {
        setTimeout(handleNavigation, 100);
      }
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const diffX = e.clientX - startX;

    // Only allow right swipe (positive values)
    if (diffX > 0) {
      setTranslateX(diffX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);

    // If swiped more than 100px to the right, delete the notification
    if (translateX > 100) {
      setIsDeleting(true);
      setTranslateX(400);
      setTimeout(() => {
        onDelete(id);
      }, 200);
    } else {
      // Snap back to original position
      setTranslateX(0);
      if (translateX < 10) {
        setTimeout(handleNavigation, 100);
      }
    }
  };

  const href = type === "quest" ? "/QuestPage" : "/KidsShop";

  return (
    <div
      className="relative overflow-hidden mx-2 transition-all duration-300 ease-out cursor-pointer"
      style={{
        transform: `scale(${scale})`,
        opacity: opacity,
        transformOrigin: 'center top'
      }}
      onClick={handleClick} // ADD THIS LINE
    >
      {/* Delete background */}
      <div className="absolute inset-0 bg-red-400 rounded-4xl border-6 border-black flex items-center justify-end pr-6">
        <RxCross2 className="text-white text-3xl" />
      </div>

      {/* Notification */}
      <div
        ref={notificationRef}
        className={`w-auto bg-white h-[80px] rounded-4xl grid grid-cols-[70px_1fr] items-center px-4 text-xl shadow-[6px_6px_0px_rgba(0,0,0,0.2)] border-6 border-black transition-transform ${isDeleting ? 'duration-200' : 'duration-100'} ${isDragging ? '' : 'ease-out'}`}
        style={{
          transform: `translateX(${translateX}px)`,
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >

        <div className="w-[70px] h-full flex items-center justify-center">
          <div
            className={`${bgColor} rounded-full w-12 h-12 flex items-center justify-center border-4 border-black`}
          >
            {icon}
          </div>
        </div>
        <p className="font-medium text-md max-w-full overflow-hidden text-ellipsis whitespace-normal line-clamp-4">
          {message}
        </p>
      </div>
    </div>
  );
};

export default Notification;
