"use client";
//layout.js
import Rightbar from '../components/Rightbar';
import classNames from 'classnames';
import React, { useState } from 'react';
import Navbar from '../components/Navbar2';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const metadata = {
  title: 'JatBlog',
  description: 'News and Articles',
};

export default function RootLayout({ children }) {
  const [collapsed, setSidebarCollapsed] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <html lang='en'>
      <div
        className={classNames(
          'grid bg-zinc-100 min-h-screen',
          {
            'grid-cols-sidebar': !collapsed,
            'grid-cols-sidebar-collapsed': collapsed,
            'transition-grid-template-columns duration-300 ease-in-out': true,
          }
        )}
      >
        <div className='flex'>
          <Sidebar collapsed={collapsed} setCollapsed={setSidebarCollapsed} shown={showSidebar} />
          <div className='flex flex-col w-full'>
            <Navbar onMenuButtonClick={() => setShowSidebar(!showSidebar) }/>
            <div className='flex-1 flex'>
              <main className='flex-1'>{children}</main>
              <aside className='hidden lg:block'>
                <Rightbar />
              </aside>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </html>
  );
}
