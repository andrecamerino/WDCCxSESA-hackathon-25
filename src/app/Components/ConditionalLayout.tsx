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
  
  // Define kids pages
  const kidsPages = ['/Home', '/KidsShop', '/QuestPage', '/ProfilePage'];
  const isKidsPage = kidsPages.includes(pathname);
  
  // Determine the title to show
  const headerTitle = isKidsPage ? 'PiggyQuest Kids' : 'PiggyQuest';

  return (
    <>
      {!isLoginPage && <Header title={headerTitle} />}
      {children}
      {!isLoginPage && <Navbar />}
    </>
  );
} 