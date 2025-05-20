'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  // State cho form
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

    // Giả lập gửi form
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  // Thông tin liên hệ
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
      content: 'CreLaTech@gmail.com',
      link: 'mailto:CreLaTech@gmail.com'
    },
    {
      icon: <MapPinIcon className="h-6 w-6" />,
      title: 'Địa chỉ',
      content: '123 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh',
      link: 'https://maps.google.com'
    }
  ];

  // Mạng xã hội
  const socialLinks = [
    { icon: <FaFacebook className="h-5 w-5" />, name: 'Facebook', link: 'https://www.facebook.com/DailyOptimizePlus/' },
  ];

  // Animation
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-12 md:py-16 bg-[#FF80A9]/20">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="inline-block py-1 px-3 rounded-full text-bold font-medium bg-[#6263FF]/20 text-[#6263FF]/100 mb-4"
          >
            Liên hệ với chúng tôi
          </motion.span>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="heading-xl uppercase mb-4"
          >
            <span className="text-[#0600AB]">Kết nối cùng CreLa Tech </span>
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-lg text-[#0600AB]"
          >
            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Hãy liên hệ với chúng tôi nếu bạn có bất kỳ câu hỏi nào.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-white rounded-xl shadow-sm p-8"
          >
            <h2 className="text-2xl text-[#0600AB] font-bold mb-6">Gửi tin nhắn cho chúng tôi</h2>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#0600AB] mb-1">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-[#0600AB]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#0600AB] mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-[#0600AB]"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#0600AB] mb-1">
                    Chủ đề
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-[#0600AB]"
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
                  <label htmlFor="message" className="block text-sm font-medium text-[#0600AB] mb-1">
                    Tin nhắn
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-[#0600AB] resize-none"
                  ></textarea>
                </div>

                {error && (
                  <div className="text-red-500 text-sm">{error}</div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-4 rounded-lg font-medium text-white bg-gradient-to-r from-[#FF80A9] to-[#6263FF] hover:from-[#FF80A9]/90 hover:to-[#6263FF]/90 transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Đang gửi...' : 'Gửi tin nhắn'}
                </button>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircleIcon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl text-[#0600AB] font-bold mb-2">Gửi tin nhắn thành công!</h3>
                <p className="text-[#0600AB] mb-6">
                  Cảm ơn bạn đã liên hệ với chúng tôi. Chúng tôi sẽ phản hồi trong thời gian sớm nhất.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="py-2 px-4 rounded-lg font-medium text-purple-600 border border-purple-600 hover:bg-purple-50 transition-colors"
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
              <h2 className="text-2xl font-bold text-[#0600AB] mb-6">Thông tin liên hệ</h2>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-[#6263FF]/20 rounded-lg flex items-center justify-center text-[#6263FF] mr-4 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-[#0600AB] mb-1">{item.title}</h3>
                      <a
                        href={item.link}
                        target={item.title === 'Địa chỉ' ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="text-[#6263FF]/70 hover:text-[#6263FF] transition-colors"
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
              className="border-t border-gray-200 pt-8"
            >
              <h2 className="text-2xl font-bold text-[#0600AB] mb-6">Theo dõi chúng tôi</h2>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg hover:border-[#6263FF] transition-colors group"
                  >
                    <span className="text-blue-600 transition-colors mr-2">
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
              className="bg-gradient-to-r from-[#FF80A9]/20 to-[#6263FF]/20 rounded-xl p-6"
            >
              <h3 className="font-bold text-[#0600AB] mb-2">Giờ làm việc</h3>
              <p className="text-[#0600AB] mb-4">
                Thứ Hai - Thứ Sáu: 9:00 - 18:00<br />
                Thứ Bảy: 9:00 - 12:00<br />
                Chủ Nhật: Nghỉ
              </p>
              <p className="text-sm font-bold text-[#0600AB]">
                * Đội ngũ hỗ trợ kỹ thuật làm việc 24/7
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;