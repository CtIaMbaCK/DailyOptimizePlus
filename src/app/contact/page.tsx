'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset the form
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <PhoneIcon className="h-6 w-6" />,
      title: 'Điện thoại',
      content: '+84 123 456 789',
      link: 'tel:+84123456789'
    },
    {
      icon: <EnvelopeIcon className="h-6 w-6" />,
      title: 'Email',
      content: 'contact@crelatech.com',
      link: 'mailto:contact@crelatech.com'
    },
    {
      icon: <MapPinIcon className="h-6 w-6" />,
      title: 'Địa chỉ',
      content: '123 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh',
      link: 'https://maps.google.com'
    }
  ];

  const socialLinks = [
    { icon: <FaFacebook className="h-5 w-5" />, name: 'Facebook', link: '#' },
    { icon: <FaTwitter className="h-5 w-5" />, name: 'Twitter', link: '#' },
    { icon: <FaInstagram className="h-5 w-5" />, name: 'Instagram', link: '#' },
    { icon: <FaLinkedin className="h-5 w-5" />, name: 'LinkedIn', link: '#' }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero section */}
      <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900/50 relative">
        {/* Purple gradient background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute -top-20 -right-20 w-[40%] h-[40%] rounded-full bg-purple-100 dark:bg-purple-900/20 blur-[80px] opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-[40%] h-[40%] rounded-full bg-purple-100 dark:bg-purple-900/20 blur-[80px] opacity-60"></div>
        </div>

        <div className="container-custom">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300 mb-4">
              Liên hệ
            </span>
            <h1 className="heading-xl mb-6">
              Kết nối với <span className="text-purple-600 dark:text-purple-400">CreLaTech</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
              Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Hãy liên hệ với chúng tôi nếu bạn có bất kỳ câu hỏi nào.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Gửi tin nhắn cho chúng tôi</h2>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Họ và tên
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Chủ đề
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    >
                      <option value="">Chọn chủ đề</option>
                      <option value="general">Thông tin chung</option>
                      <option value="support">Hỗ trợ kỹ thuật</option>
                      <option value="business">Hợp tác kinh doanh</option>
                      <option value="feedback">Góp ý sản phẩm</option>
                      <option value="other">Khác</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Tin nhắn
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                    ></textarea>
                  </div>
                  
                  {error && (
                    <div className="text-red-500 text-sm">{error}</div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-4 rounded-lg font-medium text-white bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Đang gửi...' : 'Gửi tin nhắn'}
                  </button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircleIcon className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Gửi tin nhắn thành công!</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Cảm ơn bạn đã liên hệ với chúng tôi. Chúng tôi sẽ phản hồi trong thời gian sớm nhất.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="py-2 px-4 rounded-lg font-medium text-purple-600 dark:text-purple-400 border border-purple-600 dark:border-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                  >
                    Gửi tin nhắn khác
                  </button>
                </div>
              )}
            </motion.div>

            {/* Contact info */}
            <div className="space-y-8">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-2xl font-bold mb-6">Thông tin liên hệ</h2>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4 flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">{item.title}</h3>
                        <a 
                          href={item.link}
                          target={item.title === 'Địa chỉ' ? '_blank' : undefined} 
                          rel="noopener noreferrer"
                          className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                        >
                          {item.content}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="border-t border-gray-200 dark:border-gray-700 pt-8"
              >
                <h2 className="text-2xl font-bold mb-6">Theo dõi chúng tôi</h2>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((item, index) => (
                    <a 
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-purple-400 dark:hover:border-purple-500 transition-colors group"
                    >
                      <span className="text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors mr-2">
                        {item.icon}
                      </span>
                      <span className="font-medium">{item.name}</span>
                    </a>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-gradient-to-r from-purple-100 to-violet-100 dark:from-purple-900/20 dark:to-violet-900/20 rounded-xl p-6"
              >
                <h3 className="font-bold mb-2">Giờ làm việc</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Thứ Hai - Thứ Sáu: 9:00 - 18:00<br />
                  Thứ Bảy: 9:00 - 12:00<br />
                  Chủ Nhật: Nghỉ
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  * Đội ngũ hỗ trợ kỹ thuật làm việc 24/7
                </p>
              </motion.div>
            </div>
          </div>

          {/* Map */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold mb-6">Vị trí của chúng tôi</h2>
            <div className="aspect-[21/9] bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                <span className="text-xl font-medium text-gray-600 dark:text-gray-400">Bản đồ</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="container-custom">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-gradient-to-r from-purple-500 to-violet-600 rounded-3xl overflow-hidden text-white text-center py-12 px-6 md:p-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Bạn muốn trải nghiệm DO⁺ ngay?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Tải ứng dụng DO⁺ ngay hôm nay và cảm nhận sự khác biệt trong cách bạn quản lý thời gian và công việc.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-purple-600 hover:bg-white/90 px-6 py-3 rounded-lg font-medium transition-all">
                Tải ứng dụng
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-all">
                Tìm hiểu thêm
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
