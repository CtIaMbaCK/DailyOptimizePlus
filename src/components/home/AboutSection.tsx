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
    <section className="py-15 md:py-15 bg-white-900/50">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto mb-10">
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="inline-block py-1 px-3 rounded-full text-bold font-medium bg-[#6263FF]/20 text-[#6263FF]/100 mb-4"
          >
            Giới thiệu về chúng tôi
          </motion.span>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="heading-xl mb-2 uppercase"
          >
            <span className="text-[#0600AB] ">Về CreLa Tech</span>
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-lg text-[#16006D]"
          >
            Chúng tôi là đội ngũ đam mê công nghệ và đổi mới, với sứ mệnh tạo ra những giải pháp thông minh giúp mọi người quản lý thời gian và công việc hiệu quả hơn.
          </motion.p>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Value 1 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-[#FF80A9]/30 p-8 rounded-xl shadow-sm border border-gray-200 hover:border-purple-200 transition-all"
          >
            <div className="w-12 h-12 bg-white/90 rounded-lg flex items-center justify-center text-[#16006D] mb-6">
              <LightBulbIcon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-[#0600AB] mb-3">Đổi mới</h3>
            <p className="text-[#0600AB]">
              Chúng tôi luôn tìm kiếm những cách tiếp cận mới để giải quyết các thách thức quen thuộc, đẩy giới hạn của công nghệ và thiết kế.
            </p>
          </motion.div>

          {/* Value 2 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-[#FF80A9]/30 p-8 rounded-xl shadow-sm border border-gray-200 hover:border-purple-200 transition-all"
            transition={{ delay: 0.2 }}
          >
            <div className="w-12 h-12 bg-white/90 rounded-lg flex items-center justify-center text-[#16006D] mb-6">
              <UsersIcon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-[#0600AB] mb-3">Hợp tác</h3>
            <p className="text-[#0600AB]">
              Chúng tôi tin vào sức mạnh của sự đa dạng và hợp tác, đưa những ý tưởng tốt nhất từ nhiều góc nhìn khác nhau.
            </p>
          </motion.div>

          {/* Value 3 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-[#FF80A9]/30 p-8 rounded-xl shadow-sm border border-gray-200 hover:border-purple-200 transition-all"
            transition={{ delay: 0.4 }}
          >
            <div className="w-12 h-12 bg-white/90 rounded-lg flex items-center justify-center text-[#16006D] mb-6">
              <RocketLaunchIcon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-[#0600AB] mb-3">Năng động</h3>
            <p className="text-[#0600AB]">
              Chúng tôi nhanh chóng thích nghi với thay đổi, liên tục học hỏi và phát triển để đáp ứng nhu cầu ngày càng cao của người dùng GenZ.
            </p>
          </motion.div>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center p-6"
          >
            <p className="text-3xl md:text-4xl font-bold text-[#0600AB] mb-1">2025</p>
            <p className="text-gray-600">Năm thành lập</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center p-6"
            transition={{ delay: 0.1 }}
          >
            <p className="text-3xl md:text-4xl font-bold text-[#0600AB] mb-1">5</p>
            <p className="text-gray-600">Nhân viên tài năng</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center p-6"
            transition={{ delay: 0.2 }}
          >
            <p className="text-3xl md:text-4xl font-bold text-[#0600AB]">50K+</p>
            <p className="text-gray-600">Người dùng hàng tháng</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center p-6"
            transition={{ delay: 0.3 }}
          >
            <p className="text-3xl md:text-4xl font-bold text-[#0600AB] mb-1">4.8</p>
            <p className="text-gray-600">Đánh giá trung bình</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;