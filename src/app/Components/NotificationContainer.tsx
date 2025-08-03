import React, { useEffect, useRef } from "react";
import Notification from "./Notification";

type Props = {
  onScrollDirectionChange: (dir: "up" | "down") => void;
};

const NotificationContainer: React.FC<Props> = ({ onScrollDirectionChange }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const lastScrollTop = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const current = el.scrollTop;
          if (current !== lastScrollTop.current) {
            const direction = current > lastScrollTop.current ? "down" : "up";
            // onScrollDirectionChange(direction);
            lastScrollTop.current = current <= 0 ? 0 : current;
          }
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, [onScrollDirectionChange]);

  return (
    <div className="flex flex-col items-center rounded-3xl gap-4">

      <div
        ref={scrollRef}
        className="w-full max-w-md h-[400px] pb-[200px] overflow-y-auto space-y-2 pt-4"
      >
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