'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { LightBulbIcon, RocketLaunchIcon, UsersIcon } from '@heroicons/react/24/outline';

const AboutSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300 mb-4"
          >
            Giới thiệu về chúng tôi
          </motion.span>
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="heading-lg mb-6"
          >
            Tại <span className="text-purple-600 dark:text-purple-400">CreLaTech</span>, chúng tôi có một sứ mệnh
          </motion.h2>
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-lg text-gray-600 dark:text-gray-300"
          >
            Nâng cao hiệu suất làm việc và chất lượng cuộc sống thông qua công nghệ. Chúng tôi tạo ra các giải pháp thông minh, thân thiện với người dùng và được thiết kế đặc biệt cho thế hệ GenZ.
          </motion.p>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Value 1 */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-800 transition-all"
          >
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-300 mb-6">
              <LightBulbIcon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Đổi mới</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Chúng tôi luôn tìm kiếm những cách tiếp cận mới để giải quyết các thách thức quen thuộc, đẩy giới hạn của công nghệ và thiết kế.
            </p>
          </motion.div>

          {/* Value 2 */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-800 transition-all"
            transition={{ delay: 0.2 }}
          >
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-300 mb-6">
              <UsersIcon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Hợp tác</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Chúng tôi tin vào sức mạnh của sự đa dạng và hợp tác, đưa những ý tưởng tốt nhất từ nhiều góc nhìn khác nhau.
            </p>
          </motion.div>

          {/* Value 3 */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-800 transition-all"
            transition={{ delay: 0.4 }}
          >
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-300 mb-6">
              <RocketLaunchIcon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Năng động</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Chúng tôi nhanh chóng thích nghi với thay đổi, liên tục học hỏi và phát triển để đáp ứng nhu cầu ngày càng cao của người dùng GenZ.
            </p>
          </motion.div>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center p-6"
          >
            <p className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-1">2020</p>
            <p className="text-gray-600 dark:text-gray-400">Năm thành lập</p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center p-6"
            transition={{ delay: 0.1 }}
          >
            <p className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-1">25+</p>
            <p className="text-gray-600 dark:text-gray-400">Nhân viên tài năng</p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center p-6"
            transition={{ delay: 0.2 }}
          >
            <p className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-1">50K+</p>
            <p className="text-gray-600 dark:text-gray-400">Người dùng hàng tháng</p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center p-6"
            transition={{ delay: 0.3 }}
          >
            <p className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-1">4.8</p>
            <p className="text-gray-600 dark:text-gray-400">Đánh giá trung bình</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;