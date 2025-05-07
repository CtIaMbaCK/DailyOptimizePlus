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

        {/* App Feature Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          {/* Left: App mockup visual */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-sm">
              {/* Phone frame */}
              <div className="relative z-10 bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden border-[10px] border-gray-100 dark:border-gray-800">
                {/* App screen content */}
                <div className="aspect-[9/19] w-full bg-gradient-to-br from-purple-600 to-violet-500 relative p-4">
                  {/* App header */}
                  <div className="bg-white/10 rounded-lg p-3 mb-4 flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <span className="text-xs font-bold text-white">D+</span>
                      </div>
                      <span className="ml-2 text-white text-sm font-medium">DO⁺</span>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-4 h-4 rounded-full bg-white/20"></div>
                      <div className="w-4 h-4 rounded-full bg-white/20"></div>
                    </div>
                  </div>
                  
                  {/* App content */}
                  <div className="bg-white/10 rounded-lg p-3 mb-4">
                    <div className="h-1.5 w-1/2 bg-white/30 rounded-full mb-3"></div>
                    <div className="h-1 w-3/4 bg-white/20 rounded-full mb-4"></div>
                    
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <div className="aspect-square rounded-lg bg-white/20 p-2 flex flex-col justify-between">
                        <div className="w-5 h-5 rounded-md bg-white/30"></div>
                        <div className="h-1 w-2/3 bg-white/30 rounded-full"></div>
                      </div>
                      <div className="aspect-square rounded-lg bg-white/20 p-2 flex flex-col justify-between">
                        <div className="w-5 h-5 rounded-md bg-white/30"></div>
                        <div className="h-1 w-2/3 bg-white/30 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="bg-white/30 h-20 rounded-lg w-full mb-3 p-2">
                      <div className="h-1 w-1/2 bg-white/40 rounded-full mb-2"></div>
                      <div className="h-1 w-3/4 bg-white/30 rounded-full mb-2"></div>
                      <div className="h-1 w-2/3 bg-white/30 rounded-full"></div>
                      <div className="mt-2 flex justify-end">
                        <div className="h-3 w-8 rounded-md bg-white/40"></div>
                      </div>
                    </div>
                    
                    <div className="h-1 w-3/4 bg-white/20 rounded-full"></div>
                  </div>
                  
                  {/* App navigation */}
                  <div className="absolute bottom-4 inset-x-4 bg-white/10 rounded-xl p-2 flex justify-around">
                    <div className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center"></div>
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center"></div>
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center"></div>
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center"></div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-10 -right-10 -z-10 w-36 h-36 bg-gradient-to-tl from-violet-400 to-pink-300 dark:from-violet-800/30 dark:to-pink-800/30 rounded-full blur-xl opacity-70"></div>
              <div className="absolute top-1/2 -translate-y-1/2 -left-16 -z-10 w-32 h-32 bg-gradient-to-br from-purple-300 to-indigo-300 dark:from-purple-800/30 dark:to-indigo-800/30 rounded-full blur-xl opacity-70"></div>
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