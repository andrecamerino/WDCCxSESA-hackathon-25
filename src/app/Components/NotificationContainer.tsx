import React, { useEffect, useRef } from "react";
import Notification from "./Notification";

type Props = {
  onScrollDirectionChange: (dir: 'up' | 'down') => void;
};

const NotificationContainer: React.FC<Props> = ({ onScrollDirectionChange }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const current = el.scrollTop;
      if (current > lastScrollTop.current) {
        onScrollDirectionChange('down');
      } else if (current < lastScrollTop.current) {
        onScrollDirectionChange('up');
      }
      lastScrollTop.current = current;
    };

    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, [onScrollDirectionChange]);

  return (
    <div className="flex flex-col items-center rounded-3xl gap-4">
      <h1 className="text-3xl">Notifications</h1>
      <h3 className="text-xl">From the last 24 hours</h3>

      <div
        ref={scrollRef}
        className="w-full max-w-md max-h-150 pb-100 overflow-y-auto space-y-2"
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