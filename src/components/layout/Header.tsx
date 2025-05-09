'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navItems = [
    { name: 'Trang chủ', href: '/' },
    { name: 'Giới thiệu', href: '/about' },
    { name: 'Sản phẩm DO⁺', href: '/product' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Liên hệ', href: '/contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            {/* Logo Container */}
            <div className="relative h-12 w-auto flex items-center justify-center">
              <Image
                src="/images/logo.png" // Đường dẫn đến logo
                alt="CreLaTech Logo"
                width={120 * 0.5} // Chiều rộng logo
                height={40 * 0.5} // Chiều cao logo
                className="object-contain" // Đảm bảo logo hiển thị đúng tỷ lệ
              />
            </div>

            {/* Logo Text */}
            <span className="text-2xl font-extrabold bg-gradient-to-r from-purple-600 to-violet-400 text-transparent bg-clip-text tracking-wide">
              CreLaTech
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative transition-colors group font-medium ${pathname === item.href
                  ? 'text-purple-600 dark:text-purple-400 font-bold' // Màu tím và in đậm nếu là trang hiện tại
                  : 'text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400'
                  }`}
              >
                {item.name}
                {pathname !== item.href && ( // Chỉ hiển thị gạch chân nếu không phải trang hiện tại
                  <span
                    className="absolute bottom-0 left-0 h-0.5 bg-purple-600 w-0 group-hover:w-full transition-all duration-300"
                  ></span>
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-md p-2 text-gray-700 dark:text-gray-200 hover:bg-purple-100 dark:hover:bg-gray-800"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-purple-100 dark:hover:bg-gray-800 hover:text-purple-600 dark:hover:text-purple-400"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;