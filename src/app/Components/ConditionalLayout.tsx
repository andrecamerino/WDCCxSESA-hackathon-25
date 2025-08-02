'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import Navbar from './Navbar';

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/Login';

  return (
    <>
      {!isLoginPage && <Header />}
      {children}
      {!isLoginPage && <Navbar />}
    </>
  );
} 