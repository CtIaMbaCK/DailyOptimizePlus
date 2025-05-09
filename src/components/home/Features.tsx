'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ClockIcon,
  ChatBubbleBottomCenterTextIcon,
  ChartBarIcon,
  DocumentTextIcon,
  BoltIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const Features = () => {
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

  const features = [
    {
      icon: <ClockIcon className="w-6 h-6" />,
      title: "Quản lý thời gian thông minh",
      description: "AI tự động phân tích và đề xuất cách sắp xếp lịch trình hiệu quả nhất dựa trên thói quen và ưu tiên của bạn."
    },
    {
      icon: <ChatBubbleBottomCenterTextIcon className="w-6 h-6" />,
      title: "Trợ lý ảo DO⁺",
      description: "Trợ lý AI 24/7 hỗ trợ bạn quản lý công việc, nhắc nhở deadline và đưa ra các lời khuyên để nâng cao hiệu suất."
    },
    {
      icon: <ChartBarIcon className="w-6 h-6" />,
      title: "Báo cáo phân tích",
      description: "Theo dõi tiến độ và hiệu suất làm việc với các biểu đồ trực quan, giúp tối ưu hóa thời gian và nâng cao năng suất."
    },
    {
      icon: <DocumentTextIcon className="w-6 h-6" />,
      title: "Ghi chú thông minh",
      description: "Tạo và tổ chức ghi chú với khả năng nhận dạng giọng nói, chuyển văn bản thành danh sách công việc một cách tự động."
    },
    {
      icon: <BoltIcon className="w-6 h-6" />,
      title: "Tích hợp liền mạch",
      description: "Kết nối dễ dàng với Google Calendar, Notion, Trello và các ứng dụng phổ biến khác trong một nền tảng thống nhất."
    },
    {
      icon: <SparklesIcon className="w-6 h-6" />,
      title: "Giao diện thời thượng",
      description: "Thiết kế hiện đại, tùy biến cao với nhiều theme màu và chế độ tối, phù hợp với phong cách cá nhân của Gen Z."
    }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Purple gradient background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute bottom-0 left-0 w-[60%] h-[60%] rounded-full bg-purple-100/50 dark:bg-purple-900/10 blur-[100px] opacity-60"></div>
      </div>

      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300 mb-4">
            Tính năng nổi bật
          </span>
          <h2 className="heading-lg mb-6">
            Khám phá các tính năng <span className="text-purple-600 dark:text-purple-400">thông minh</span> của DO⁺
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Ứng dụng DO⁺ được thiết kế để đáp ứng nhu cầu của thế hệ GenZ năng động, kết hợp AI tiên tiến và giao diện trực quan.
          </p>
        </motion.div>

        {/* App img */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">          <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="lg:col-span-5 relative"
        >
          <div className="aspect-[9/16] w-full h-[800px] relative">
            <Image
              src="/images/DOPHome.png" // Đường dẫn đến hình ảnh trong thư mục public
              alt="DO⁺ App Mockup"
              fill
              style={{ objectFit: 'contain' }}
              className="rounded-3xl"
            />
          </div>
        </motion.div>

          {/* Right: Features grid */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-800 transition-all"
              >
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-300 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl overflow-hidden relative"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="relative p-8 md:p-12 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Sẵn sàng nâng cao hiệu suất công việc của bạn?
            </h3>
            <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl mx-auto">
              Khám phá ngay hôm nay cách DO⁺ có thể giúp bạn quản lý thời gian hiệu quả và đạt được mục tiêu nhanh hơn.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-purple-600 hover:bg-white/90 px-6 py-3 rounded-lg font-medium transition-all">
                Tải ứng dụng
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-all">
                Tìm hiểu thêm
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;