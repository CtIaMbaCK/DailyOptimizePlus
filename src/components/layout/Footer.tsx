'use client';

import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Công ty',
      links: [
        { name: 'Giới thiệu', href: '/about' },
        { name: 'Đội ngũ', href: '/about#team' },
        { name: 'Tuyển dụng', href: '/careers' },
        { name: 'Liên hệ', href: '/contact' },
      ],
    },
    {
      title: 'Sản phẩm',
      links: [
        { name: 'DO⁺ App', href: '/product' },
        { name: 'Tính năng', href: '/product#features' },
        { name: 'Tải xuống', href: '/product#download' },
        { name: 'FAQ', href: '/faq' },
      ],
    },
    {
      title: 'Tài nguyên',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Hỗ trợ', href: '/support' },
        { name: 'Điều khoản', href: '/terms' },
        { name: 'Bảo mật', href: '/privacy' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: <FaFacebook className="h-6 w-6" />, href: '#' },
    { name: 'Twitter', icon: <FaTwitter className="h-6 w-6" />, href: '#' },
    { name: 'Instagram', icon: <FaInstagram className="h-6 w-6" />, href: '#' },
    { name: 'LinkedIn', icon: <FaLinkedin className="h-6 w-6" />, href: '#' },
    { name: 'YouTube', icon: <FaYoutube className="h-6 w-6" />, href: '#' },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 pt-16 pb-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container-custom">
        {/* Top section with links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-8">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center">
              <div className="relative h-10 w-10">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-500 rounded-lg"></div>
                <div className="absolute inset-0.5 bg-white dark:bg-gray-900 rounded-lg flex items-center justify-center font-bold text-xl text-purple-600">
                  C
                </div>
              </div>
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-600 to-violet-400 inline-block text-transparent bg-clip-text">
                CreLaTech
              </span>
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-md">
              Khát vọng tương lai, công nghệ dẫn lối. Chúng tôi phát triển các giải pháp công nghệ giúp tối ưu hóa thời gian và nâng cao hiệu suất làm việc.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section with copyright */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-left">
              © {currentYear} CreLaTech. Đã đăng ký bản quyền.
            </p>
            <div className="mt-4 md:mt-0 flex flex-wrap justify-center space-x-4 text-sm">
              <Link href="/terms" className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400">
                Điều khoản sử dụng
              </Link>
              <Link href="/privacy" className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400">
                Chính sách bảo mật
              </Link>
              <Link href="/cookies" className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;