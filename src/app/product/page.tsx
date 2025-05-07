'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Tab } from '@headlessui/react';
import { 
  BoltIcon, 
  ChartBarIcon, 
  ClockIcon, 
  ChatBubbleBottomCenterTextIcon,
  DevicePhoneMobileIcon, 
  QuestionMarkCircleIcon,
  CheckCircleIcon,
  ArrowDownTrayIcon
} from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';

export default function Product() {
  const [selectedTab, setSelectedTab] = useState(0);
  
  const features = [
    {
      title: 'Quản lý thời gian thông minh',
      description: 'DO⁺ sử dụng AI để phân tích thói quen làm việc của bạn và đề xuất lịch trình tối ưu, giúp bạn hoàn thành công việc hiệu quả hơn.',
      icon: <ClockIcon className="w-6 h-6" />,
      image: '/features/time-management.png',
      benefits: [
        'Tự động sắp xếp công việc theo độ ưu tiên',
        'Nhắc nhở thông minh dựa trên thói quen của bạn',
        'Phân tích thời gian làm việc hiệu quả nhất',
        'Gợi ý khoảng thời gian nghỉ ngơi hợp lý'
      ]
    },
    {
      title: 'Trợ lý ảo AI',
      description: 'Trợ lý DO⁺ không chỉ nhắc nhở bạn về công việc mà còn đưa ra các gợi ý để cải thiện năng suất làm việc dựa trên dữ liệu cá nhân.',
      icon: <ChatBubbleBottomCenterTextIcon className="w-6 h-6" />,
      image: '/features/ai-assistant.png',
      benefits: [
        'Trả lời tự động các câu hỏi về lịch trình',
        'Tự động tóm tắt các cuộc họp và ghi chú',
        'Đề xuất các cách cải thiện hiệu suất',
        'Hỗ trợ đa ngôn ngữ, bao gồm tiếng Việt'
      ]
    },
    {
      title: 'Báo cáo phân tích',
      description: 'Hiểu rõ cách bạn sử dụng thời gian với các báo cáo phân tích chi tiết, giúp bạn nhận ra điểm mạnh và cải thiện những điểm yếu.',
      icon: <ChartBarIcon className="w-6 h-6" />,
      image: '/features/analytics.png',
      benefits: [
        'Biểu đồ thời gian làm việc theo ngày/tuần/tháng',
        'So sánh năng suất giữa các khoảng thời gian',
        'Phân tích mức độ tập trung và hiệu suất',
        'Xuất báo cáo dưới nhiều định dạng'
      ]
    },
    {
      title: 'Tích hợp đa nền tảng',
      description: 'DO⁺ kết nối liền mạch với các ứng dụng phổ biến như Google Calendar, Gmail, Slack, Notion và nhiều ứng dụng khác.',
      icon: <BoltIcon className="w-6 h-6" />,
      image: '/features/integrations.png',
      benefits: [
        'Đồng bộ hóa lịch từ nhiều nguồn khác nhau',
        'Nhập công việc từ email và tin nhắn tự động',
        'Chia sẻ trạng thái công việc qua các nền tảng',
        'Tích hợp với các công cụ làm việc nhóm'
      ]
    }
  ];
  
  const pricingPlans = [
    {
      name: 'Cơ bản',
      price: 'Miễn phí',
      description: 'Dành cho người mới bắt đầu quản lý thời gian',
      features: [
        'Quản lý công việc cơ bản',
        'Lịch trình cá nhân',
        'Nhắc nhở đơn giản',
        'Đồng bộ dữ liệu trên 1 thiết bị'
      ],
      cta: 'Đăng ký ngay',
      popular: false
    },
    {
      name: 'Premium',
      price: '99.000đ/tháng',
      description: 'Dành cho cá nhân cần tối ưu năng suất',
      features: [
        'Tất cả tính năng cơ bản',
        'Trợ lý AI cá nhân',
        'Báo cáo phân tích chi tiết',
        'Đồng bộ dữ liệu trên 5 thiết bị',
        'Tích hợp với các ứng dụng phổ biến'
      ],
      cta: 'Dùng thử 14 ngày',
      popular: true
    },
    {
      name: 'Business',
      price: '299.000đ/tháng',
      description: 'Dành cho đội nhóm và doanh nghiệp',
      features: [
        'Tất cả tính năng Premium',
        'Quản lý dự án cho nhóm',
        'Phân quyền thành viên',
        'Báo cáo cho quản lý',
        'API tích hợp riêng',
        'Đồng bộ không giới hạn thiết bị'
      ],
      cta: 'Liên hệ tư vấn',
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'DO⁺ có hỗ trợ cả iOS và Android không?',
      answer: 'Có, DO⁺ hỗ trợ đầy đủ cả hai nền tảng iOS và Android. Ngoài ra, bạn cũng có thể truy cập DO⁺ thông qua phiên bản web trên trình duyệt.'
    },
    {
      question: 'Dữ liệu của tôi có được bảo mật không?',
      answer: 'Chúng tôi cam kết bảo vệ dữ liệu của người dùng. DO⁺ sử dụng mã hóa đầu cuối và tuân thủ các tiêu chuẩn bảo mật cao nhất trong ngành. Bạn cũng có thể yêu cầu xóa dữ liệu của mình bất cứ lúc nào.'
    },
    {
      question: 'Tôi có thể đồng bộ DO⁺ với Google Calendar không?',
      answer: 'Có, DO⁺ có tích hợp liền mạch với Google Calendar, Microsoft Outlook, Apple Calendar và nhiều ứng dụng lịch phổ biến khác. Bạn có thể dễ dàng đồng bộ và quản lý tất cả lịch trình từ một nơi duy nhất.'
    },
    {
      question: 'DO⁺ có hoạt động khi không có kết nối internet không?',
      answer: 'Có, DO⁺ có chế độ ngoại tuyến cho phép bạn tiếp tục sử dụng các tính năng cơ bản như xem lịch, thêm công việc và ghi chú khi không có kết nối internet. Dữ liệu sẽ được đồng bộ tự động khi bạn kết nối lại.'
    },
    {
      question: 'Làm thế nào để tôi có thể hủy đăng ký gói Premium?',
      answer: 'Bạn có thể hủy đăng ký gói Premium bất cứ lúc nào trong phần Cài đặt > Tài khoản > Quản lý đăng ký. Việc hủy đăng ký sẽ có hiệu lực vào cuối chu kỳ thanh toán hiện tại của bạn.'
    },
    {
      question: 'DO⁺ có hỗ trợ tiếng Việt không?',
      answer: 'Có, DO⁺ hỗ trợ đầy đủ tiếng Việt và nhiều ngôn ngữ khác. Bạn có thể dễ dàng thay đổi ngôn ngữ trong phần Cài đặt > Ngôn ngữ của ứng dụng.'
    }
  ];

  const screenshotTabs = ['Quản lý thời gian', 'Trợ lý AI', 'Báo cáo', 'Ghi chú', 'Tích hợp'];

  return (
    <div className="pt-24">
      {/* Hero section */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        {/* Purple gradient background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute -top-[30%] -right-[15%] w-[60%] h-[60%] rounded-full bg-purple-100 dark:bg-purple-900/20 blur-[80px] opacity-60"></div>
          <div className="absolute bottom-[5%] -left-[15%] w-[50%] h-[50%] rounded-full bg-purple-100 dark:bg-purple-900/20 blur-[80px] opacity-60"></div>
        </div>

        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left"
            >
              <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300 mb-4">
                Giới thiệu ứng dụng
              </span>
              <h1 className="heading-xl mb-6">
                <span className="text-purple-600 dark:text-purple-400">DO⁺</span> - Trợ lý quản lý thời gian thông minh
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0">
                Ứng dụng DO⁺ kết hợp công nghệ AI tiên tiến và giao diện thân thiện, giúp bạn quản lý thời gian và nâng cao hiệu suất công việc.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a href="#download" className="btn-primary flex items-center gap-2">
                  <ArrowDownTrayIcon className="h-5 w-5" />
                  <span>Tải xuống</span>
                </a>
                <a href="#features" className="btn-secondary">
                  Tìm hiểu thêm
                </a>
              </div>

              <div className="mt-8 flex items-center justify-center lg:justify-start">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
                <span className="ml-2 text-gray-600 dark:text-gray-300">4.8/5 từ 2,500+ đánh giá</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative mx-auto max-w-md"
            >
              <div className="relative z-10">
                {/* Main phone mockup */}
                <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden border-8 border-gray-100 dark:border-gray-800">
                  <div className="aspect-[9/18] w-full bg-gradient-to-br from-purple-600 to-violet-500 relative">
                    {/* App UI Mockup */}
                    <div className="absolute inset-0 p-4 flex flex-col">
                      {/* Status bar */}
                      <div className="flex justify-between items-center mb-4">
                        <div className="text-white text-sm">9:41</div>
                        <div className="flex space-x-2">
                          <div className="w-4 h-4 rounded-full bg-white/20"></div>
                          <div className="w-4 h-4 rounded-full bg-white/20"></div>
                          <div className="w-4 h-4 rounded-full bg-white/20"></div>
                        </div>
                      </div>
                      
                      {/* App content */}
                      <div className="bg-white/10 rounded-lg p-3 mb-3">
                        <div className="flex items-center mb-2">
                          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-2">
                            <span className="text-xs font-bold text-white">D+</span>
                          </div>
                          <div>
                            <div className="text-white text-sm font-medium">DO⁺ Trợ lý</div>
                            <div className="text-white/70 text-xs">Hôm nay</div>
                          </div>
                        </div>
                        <div className="text-white/90 text-sm">
                          Xin chào! Hôm nay bạn có 3 công việc ưu tiên cần hoàn thành và 1 cuộc họp lúc 15:00.
                        </div>
                      </div>
                      
                      {/* Task list */}
                      <div className="bg-white/10 rounded-lg p-3 mb-auto">
                        <div className="text-white text-sm font-medium mb-2">Công việc hôm nay</div>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <div className="w-5 h-5 rounded-full border border-white/50 mr-2"></div>
                            <div className="text-white/90 text-sm">Hoàn thành báo cáo</div>
                          </div>
                          <div className="flex items-center">
                            <div className="w-5 h-5 rounded-full border border-white/50 flex items-center justify-center mr-2">
                              <div className="w-3 h-3 rounded-full bg-white"></div>
                            </div>
                            <div className="text-white/60 line-through text-sm">Gửi email xác nhận</div>
                          </div>
                          <div className="flex items-center">
                            <div className="w-5 h-5 rounded-full border border-white/50 mr-2"></div>
                            <div className="text-white/90 text-sm">Chuẩn bị tài liệu họp</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Bottom navigation */}
                      <div className="bg-white/10 rounded-lg p-2 flex justify-around">
                        <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center"></div>
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"></div>
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"></div>
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating card */}
                <div className="absolute -bottom-6 -right-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 w-32">
                  <div className="flex items-center mb-2">
                    <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mr-2">
                      <CheckCircleIcon className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="text-sm font-medium">Báo cáo</div>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Đã hoàn thành 85% công việc tuần này
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] aspect-square rounded-full bg-gradient-to-tr from-purple-200 to-violet-200 dark:from-purple-900/30 dark:to-violet-900/30 blur-2xl opacity-50"></div>
              <div className="absolute bottom-10 -left-20 -z-10 w-32 h-32 bg-gradient-to-br from-purple-300 to-pink-300 dark:from-purple-800/30 dark:to-pink-800/30 rounded-full blur-xl opacity-70"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem solution section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50" id="overview">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300 mb-4"
            >
              Vấn đề và giải pháp
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="heading-lg mb-6"
            >
              Thời gian là tài nguyên <span className="text-purple-600 dark:text-purple-400">quý giá nhất</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 dark:text-gray-300"
            >
              Thế hệ GenZ đang phải đối mặt với nhiều áp lực và mất cân bằng giữa công việc, học tập và cuộc sống cá nhân. DO⁺ được tạo ra để giải quyết thách thức này.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4">Vấn đề</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <span className="text-red-500 mr-3">✖</span>
                  <span className="text-gray-600 dark:text-gray-300">Quá tải thông tin và đa nhiệm</span>
                </li>
                <li className="flex">
                  <span className="text-red-500 mr-3">✖</span>
                  <span className="text-gray-600 dark:text-gray-300">Khó khăn trong việc sắp xếp thứ tự ưu tiên</span>
                </li>
                <li className="flex">
                  <span className="text-red-500 mr-3">✖</span>
                  <span className="text-gray-600 dark:text-gray-300">Mất tập trung bởi thông báo và mạng xã hội</span>
                </li>
                <li className="flex">
                  <span className="text-red-500 mr-3">✖</span>
                  <span className="text-gray-600 dark:text-gray-300">Thường xuyên cảm thấy bị trễ deadline</span>
                </li>
                <li className="flex">
                  <span className="text-red-500 mr-3">✖</span>
                  <span className="text-gray-600 dark:text-gray-300">Khó cân bằng giữa công việc và cuộc sống</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl p-8 shadow-sm text-white"
            >
              <h3 className="text-xl font-semibold mb-4">Giải pháp DO⁺</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-white/90">AI phân tích và sắp xếp công việc theo thứ tự ưu tiên</span>
                </li>
                <li className="flex">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-white/90">Trợ lý thông minh tự động nhắc nhở và đưa ra gợi ý</span>
                </li>
                <li className="flex">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-white/90">Chế độ tập trung chặn thông báo gây mất tập trung</span>
                </li>
                <li className="flex">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-white/90">Báo cáo phân tích giúp hiểu rõ cách sử dụng thời gian</span>
                </li>
                <li className="flex">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-white/90">Đề xuất thời gian nghỉ ngơi và cân bằng cuộc sống</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features detail section */}
      <section className="py-16 md:py-24" id="features">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300 mb-4"
            >
              Tính năng nổi bật
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="heading-lg mb-6"
            >
              Khám phá sức mạnh của <span className="text-purple-600 dark:text-purple-400">DO⁺</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 dark:text-gray-300"
            >
              DO⁺ kết hợp các tính năng tiên tiến đượhiểu trên nền tảng công nghệ AI hiện đại,tạo ra trải nghiệm quản lý thời gian vượt trội.
            </motion.p>
          </div>

          {/* Feature tabs */}
          <Tab.Group onChange={setSelectedTab}>
            <Tab.List className="flex flex-wrap justify-center gap-2 mb-12">
              {features.map((feature, idx) => (
                <Tab
                  key={idx}
                  className={({ selected }) =>
                    `py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                      selected
                        ? 'bg-purple-600 text-white shadow-md'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`
                  }
                >
                  <div className="flex items-center">
                    <div className="mr-2">{feature.icon}</div>
                    <span>{feature.title}</span>
                  </div>
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels>
              {features.map((feature, idx) => (
                <Tab.Panel key={idx}>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                  >
                    {idx % 2 === 0 ? (
                      <>
                        <div>
                          <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-6">{feature.description}</p>
                          <ul className="space-y-3">
                            {feature.benefits.map((benefit, benefitIdx) => (
                              <li key={benefitIdx} className="flex items-start">
                                <CheckCircleIcon className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-3 flex-shrink-0" />
                                <span className="text-gray-600 dark:text-gray-300">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-lg overflow-hidden flex items-center justify-center p-8 aspect-square">
                          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 text-center">
                            {feature.title}
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-lg overflow-hidden flex items-center justify-center p-8 aspect-square order-2 lg:order-1">
                          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 text-center">
                            {feature.title}
                          </div>
                        </div>
                        <div className="order-1 lg:order-2">
                          <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-6">{feature.description}</p>
                          <ul className="space-y-3">
                            {feature.benefits.map((benefit, benefitIdx) => (
                              <li key={benefitIdx} className="flex items-start">
                                <CheckCircleIcon className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-3 flex-shrink-0" />
                                <span className="text-gray-600 dark:text-gray-300">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    )}
                  </motion.div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>

      {/* App screenshots */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300 mb-4">
              Giao diện trực quan
            </span>
            <h2 className="heading-lg mb-6">
              Thiết kế tinh tế, <span className="text-purple-600 dark:text-purple-400">sử dụng dễ dàng</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              DO⁺ được thiết kế tập trung vào trải nghiệm người dùng, với giao diện thân thiện và dễ sử dụng cho mọi đối tượng.
            </p>
          </motion.div>

          <Tab.Group>
            <Tab.List className="flex overflow-x-auto scrollbar-hide mb-8 justify-center space-x-2">
              {screenshotTabs.map((tab) => (
                <Tab
                  key={tab}
                  className={({ selected }) =>
                    `py-2 px-4 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                      selected
                        ? 'bg-purple-600 text-white shadow-md'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`
                  }
                >
                  {tab}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels>
              {screenshotTabs.map((tab, idx) => (
                <Tab.Panel key={idx}>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center"
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg max-w-3xl">
                      <div className="bg-gradient-to-br from-purple-400/20 to-indigo-400/20 aspect-[16/9] rounded-lg flex items-center justify-center">
                        <div className="text-xl font-medium text-purple-600 dark:text-purple-400">{tab}</div>
                      </div>
                    </div>
                  </motion.div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>

      {/* Pricing section */}
      <section className="py-16 md:py-24" id="pricing">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300 mb-4">
              Gói dịch vụ
            </span>
            <h2 className="heading-lg mb-6">
              Chọn gói phù hợp với <span className="text-purple-600 dark:text-purple-400">nhu cầu của bạn</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Chúng tôi cung cấp nhiều gói dịch vụ linh hoạt, đảm bảo bạn chỉ trả tiền cho những tính năng mà bạn cần.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border ${
                  plan.popular 
                    ? 'border-purple-400 dark:border-purple-500 shadow-lg shadow-purple-100 dark:shadow-none relative' 
                    : 'border-gray-200 dark:border-gray-700'
                }`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-purple-600 to-violet-600 text-white text-xs font-bold uppercase py-1 px-3 text-center">
                    Phổ biến nhất
                  </div>
                )}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {plan.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    className={`w-full rounded-lg font-medium py-3 px-4 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white hover:from-purple-700 hover:to-violet-700' 
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
                    } transition-colors`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300 mb-4">
              Câu hỏi thường gặp
            </span>
            <h2 className="heading-lg mb-6">
              Giải đáp thắc mắc thường gặp về <span className="text-purple-600 dark:text-purple-400">DO⁺</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Dưới đây là những câu hỏi chúng tôi thường nhận được từ người dùng. Nếu không tìm thấy câu trả lời bạn cần, hãy liên hệ với đội ngũ hỗ trợ của chúng tôi.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6"
                >
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <QuestionMarkCircleIcon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-10"
            >
              <p className="mb-4">Vẫn còn thắc mắc? Hãy liên hệ với chúng tôi</p>
              <Link 
                href="/contact"
                className="inline-flex items-center font-medium text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300"
              >
                Liên hệ hỗ trợ <span className="ml-1">→</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Download section */}
      <section className="py-16 md:py-24 relative overflow-hidden" id="download">
        {/* Purple gradient background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute -top-[30%] -right-[15%] w-[60%] h-[60%] rounded-full bg-purple-100 dark:bg-purple-900/20 blur-[80px] opacity-60"></div>
          <div className="absolute bottom-[5%] -left-[15%] w-[50%] h-[50%] rounded-full bg-purple-100 dark:bg-purple-900/20 blur-[80px] opacity-60"></div>
        </div>
        
        <div className="container-custom">
          <div className="bg-gradient-to-r from-purple-600 to-violet-600 rounded-3xl overflow-hidden shadow-xl">
            <div className="px-6 py-12 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center md:text-left"
                >
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                    Tải ứng dụng DO⁺ ngay hôm nay
                  </h2>
                  <p className="text-white/90 text-lg mb-8">
                    Bắt đầu hành trình quản lý thời gian hiệu quả và nâng cao năng suất với DO⁺. Ứng dụng hiện có sẵn trên iOS và Android.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <button className="bg-black text-white rounded-lg px-6 py-3 flex items-center">
                      <div className="mr-3">
                        <DevicePhoneMobileIcon className="w-6 h-6" />
                      </div>
                      <div className="text-left">
                        <div className="text-xs">Tải về từ</div>
                        <div className="font-semibold">App Store</div>
                      </div>
                    </button>
                    <button className="bg-black text-white rounded-lg px-6 py-3 flex items-center">
                      <div className="mr-3">
                        <DevicePhoneMobileIcon className="w-6 h-6" />
                      </div>
                      <div className="text-left">
                        <div className="text-xs">Tải về từ</div>
                        <div className="font-semibold">Google Play</div>
                      </div>
                    </button>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative z-10 hidden md:block"
                >
                  <div className="relative">
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                      <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>
                    <div className="aspect-[3/2] bg-gradient-to-br from-purple-400/20 to-indigo-400/20 rounded-lg flex items-center justify-center">
                      <div className="text-white text-3xl font-bold">DO⁺</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}