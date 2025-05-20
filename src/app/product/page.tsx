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
      image: '/images/lenkehoach.png',
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
      image: '/images/ai.png',
      benefits: [
        'Trả lời tự động các câu hỏi về lịch trình',
        'Tự động tóm tắt các cuộc họp và ghi chú',
        'Đề xuất các cách cải thiện hiệu suất',
        'Hỗ trợ đa ngôn ngữ, bao gồm tiếng Việt'
      ]
    },
    {
      title: 'Gợi ý chi tiêu',
      description: 'Hiểu rõ cách bạn sử dụng thời gian và cách chi tiêu hợp lý, giúp bạn nhận ra điểm mạnh và cải thiện những điểm yếu.',
      icon: <ChartBarIcon className="w-6 h-6" />,
      image: '/images/chitieu.png',
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
      image: '/images/app.png',
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
      name: 'Premium Student Mini',
      price: '59.000đ/tháng',
      description: 'Dành cho sinh viên cần tối ưu năng suất',
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
      name: 'Premium Working Plan Mini',
      price: '129.000đ/tháng',
      description: 'Dành cho người đi làm ở mức thu nhập trung bình',
      features: [
        'Tất cả tính năng Premium',
        'Quản lý dự án cho nhóm',
        'Phân quyền thành viên',
        'Báo cáo cho quản lý',
        'API tích hợp riêng',
        'Đồng bộ không giới hạn thiết bị'
      ],
      cta: 'Dùng thử 14 ngày',
      popular: true
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
          <div className="absolute -top-[30%] -right-[15%] w-[60%] h-[60%] rounded-full bg-purple-100 blur-[80px] opacity-60"></div>
          <div className="absolute bottom-[5%] -left-[15%] w-[50%] h-[50%] rounded-full bg-purple-100 blur-[80px] opacity-60"></div>
        </div>

        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left"
            >
              <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-purple-100 text-purple-600 mb-4">
                Giới thiệu ứng dụng
              </span>
              <h1 className="heading-xl uppercase mb-6 text-[#0600AB]">
                <span className="text-[#0600AB]">DO⁺</span> - Trợ lý quản lý thời gian thông minh
              </h1>
              <p className="text-lg md:text-xl text-[#0600AB] mb-8 max-w-lg mx-auto lg:mx-0">
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
                <span className="ml-2 text-[#0600AB]/80">4.8/5 từ 100+ đánh giá</span>
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
                <img
                  src="/images/app.png"
                  alt="DO⁺ App"
                  className="w-[120%] h-[120%] max-w-none rounded-3xl"
                  style={{ objectFit: 'contain' }}
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] aspect-square rounded-full bg-gradient-to-tr from-purple-200 to-violet-200 blur-2xl opacity-50"></div>
              <div className="absolute bottom-10 -left-20 -z-10 w-32 h-32 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full blur-xl opacity-70"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem solution section */}
      <section className="py-16 bg-gray-50" id="overview">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-purple-100 text-purple-600 mb-4"
            >
              Vấn đề và giải pháp
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="heading-lg uppercase mb-6 text-[#0600AB]"
            >
              Thời gian là tài nguyên <span className="text-[#0600AB]">quý giá nhất</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-[#0600AB]"
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
              className="bg-white rounded-xl p-8 shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4 text-[#0600AB]">Vấn đề</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <span className="text-red-500 mr-3">✖</span>
                  <span className="text-[#0600AB]/80">Quá tải thông tin và đa nhiệm</span>
                </li>
                <li className="flex">
                  <span className="text-red-500 mr-3">✖</span>
                  <span className="text-[#0600AB]/80">Khó khăn trong việc sắp xếp thứ tự ưu tiên</span>
                </li>
                <li className="flex">
                  <span className="text-red-500 mr-3">✖</span>
                  <span className="text-[#0600AB]/80">Mất tập trung bởi thông báo và mạng xã hội</span>
                </li>
                <li className="flex">
                  <span className="text-red-500 mr-3">✖</span>
                  <span className="text-[#0600AB]/80">Thường xuyên cảm thấy bị trễ deadline</span>
                </li>
                <li className="flex">
                  <span className="text-red-500 mr-3">✖</span>
                  <span className="text-[#0600AB]/80">Khó cân bằng giữa công việc và cuộc sống</span>
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
              className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-purple-100 text-purple-600 mb-4"
            >
              Tính năng nổi bật
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="heading-lg uppercase mb-6 text-[#0600AB]"
            >
              Khám phá sức mạnh của <span className="text-[#0600AB]">DO⁺</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-[#0600AB]"
            >
              DO⁺ kết hợp các tính năng tiên tiến trên nền tảng công nghệ AI hiện đại, tạo ra trải nghiệm quản lý thời gian vượt trội.
            </motion.p>
          </div>

          {/* Feature tabs */}
          <Tab.Group onChange={setSelectedTab}>
            <Tab.List className="flex flex-wrap justify-center gap-2 mb-12">
              {features.map((feature, idx) => (
                <Tab
                  key={idx}
                  className={({ selected }) =>
                    `py-2 px-4 rounded-lg text-sm font-medium transition-all ${selected
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
                          <h3 className="text-2xl font-bold mb-4 text-[#0600AB]">{feature.title}</h3>
                          <p className="text-[#0600AB]/90 mb-6">{feature.description}</p>
                          <ul className="space-y-3">
                            {feature.benefits.map((benefit, benefitIdx) => (
                              <li key={benefitIdx} className="flex items-start">
                                <CheckCircleIcon className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0" />
                                <span className="text-[#0600AB]/80">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="rounded-lg overflow-hidden flex items-center justify-center p-8 aspect-square">
                          <img
                            src={feature.image}
                            alt={feature.title}
                            className="object-contain w-full h-full"
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-lg overflow-hidden flex items-center justify-center p-8 aspect-square order-2 lg:order-1">
                          <img
                            src={feature.image}
                            alt={feature.title}
                            className="object-contain w-full h-full"
                          />
                        </div>
                        <div className="order-1 lg:order-2">
                          <h3 className="text-2xl font-bold mb-4 text-[#0600AB]">{feature.title}</h3>
                          <p className="text-[#0600AB]/90 mb-6">{feature.description}</p>
                          <ul className="space-y-3">
                            {feature.benefits.map((benefit, benefitIdx) => (
                              <li key={benefitIdx} className="flex items-start">
                                <CheckCircleIcon className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0" />
                                <span className="text-[#0600AB]/80">{benefit}</span>
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
            <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-purple-100 text-purple-600 mb-4">
              Gói dịch vụ
            </span>
            <h2 className="heading-lg uppercase mb-6 text-[#0600AB]">
              Chọn gói phù hợp với <span className="text-[#0600AB]">nhu cầu</span>
            </h2>
            <p className="text-lg text-[#0600AB]">
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
                className={`bg-white rounded-xl overflow-hidden shadow-sm border flex flex-col h-full ${plan.popular
                    ? 'border-purple-400 shadow-lg shadow-purple-100'
                    : 'border-gray-200'
                  }`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-purple-600 to-violet-600 text-white text-xs font-bold uppercase py-1 px-3 text-center">
                    Phổ biến nhất
                  </div>
                )}
                <div className="p-6 md:p-8 flex flex-col h-full">
                  <h3 className="text-xl font-bold mb-2 text-[#0600AB]">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-[#0600AB]">{plan.price}</span>
                  </div>
                  <p className="text-[#0600AB]/80 mb-6">
                    {plan.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0" />
                        <span className="text-[#0600AB]/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full rounded-lg font-medium py-3 px-4 mt-auto ${plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white hover:from-purple-700 hover:to-violet-700'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-purple-100 text-purple-600 mb-4">
              Câu hỏi thường gặp
            </span>
            <h2 className="heading-lg uppercase mb-6 text-[#0600AB]">
              Giải đáp thắc mắc thường gặp về <span className="text-[#0600AB]">DO⁺</span>
            </h2>
            <p className="text-lg text-[#0600AB]">
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
                  className="bg-white rounded-lg shadow-sm p-6"
                >
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <QuestionMarkCircleIcon className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-[#0600AB]">{faq.question}</h3>
                      <p className="text-[#0600AB]/80">{faq.answer}</p>
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
              <p className="mb-4 text-[#0600AB]">Vẫn còn thắc mắc? Hãy liên hệ với chúng tôi</p>
              <Link
                href="/contact"
                className="inline-flex items-center font-medium text-[#6263FF] hover:text-[#0600AB]"
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
          <div className="absolute -top-[30%] -right-[15%] w-[60%] h-[60%] rounded-full bg-purple-100 blur-[80px] opacity-60"></div>
          <div className="absolute bottom-[5%] -left-[15%] w-[50%] h-[50%] rounded-full bg-purple-100 blur-[80px] opacity-60"></div>
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
                    <div className="aspect-[3/2] rounded-lg flex items-center justify-center">
                      <img
                        src="/images/banner.png"
                        alt="DO⁺ App"
                        className="object-contain w-3/4 h-3/4"
                      />
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