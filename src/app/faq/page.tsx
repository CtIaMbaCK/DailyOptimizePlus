'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ChevronUpIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  // Mock data for FAQ categories
  const categories = [
    { id: 'all', name: 'Tất cả' },
    { id: 'general', name: 'Thông tin chung' },
    { id: 'account', name: 'Tài khoản' },
    { id: 'features', name: 'Tính năng' },
    { id: 'billing', name: 'Thanh toán' },
    { id: 'technical', name: 'Kỹ thuật' },
    { id: 'privacy', name: 'Bảo mật' }
  ];

  // Mock data for FAQs
  const faqs: FAQ[] = [
    {
      id: 'faq-crelatech-1',
      question: 'CreLaTech là gì?',
      answer: 'CreLaTech là một nhóm dự án sáng tạo ứng dụng công nghệ do sinh viên năm 3 trường Đại học Văn Lang sáng lập vào năm 2025, với mục tiêu tạo ra các giải pháp số phục vụ học tập, làm việc và phát triển bản thân cho người trẻ.',
      category: 'general'
    },
    {
      id: 'faq-crelatech-2',
      question: 'Sản phẩm đầu tiên của CreLaTech là gì?',
      answer: 'Sản phẩm đầu tiên của chúng tôi là DO+ – trợ lý học tập và làm việc sử dụng AI, hỗ trợ lập kế hoạch, nhắc nhở thông minh, quản lý thời gian, phân bổ chi tiêu và cá nhân hóa trải nghiệm người dùng.',
      category: 'general'
    },
    {
      id: 'faq-crelatech-3',
      question: 'CreLaTech có phải là công ty công nghệ không?',
      answer: 'Hiện tại, CreLaTech hoạt động như một nhóm dự án khởi nghiệp sáng tạo từ sinh viên, định hướng trở thành một startup công nghệ trong tương lai gần.',
      category: 'general'
    },
    {
      id: 'faq-crelatech-4',
      question: 'CreLaTech có mở cộng tác viên không?',
      answer: 'Có! Chúng tôi luôn tìm kiếm các bạn trẻ đam mê công nghệ, thiết kế, marketing và phát triển sản phẩm để cùng tham gia hành trình sáng tạo. Hãy theo dõi fanpage để không bỏ lỡ các đợt tuyển CTV nhé!',
      category: 'general'
    },
    {
      id: 'faq-crelatech-5',
      question: 'Tôi có thể góp ý hoặc đề xuất tính năng mới cho DO+ không?',
      answer: 'Chúng tôi rất hoan nghênh! Bạn có thể gửi phản hồi qua fanpage hoặc form góp ý trong ứng dụng. Mỗi ý kiến của bạn là một viên gạch xây dựng sản phẩm ngày một tốt hơn.',
      category: 'general'
    },
    {
      id: 'faq-1',
      question: 'DO⁺ là gì và giúp giải quyết vấn đề gì?',
      answer: 'DO⁺ là ứng dụng quản lý thời gian và công việc thông minh, tích hợp công nghệ AI. Ứng dụng giúp người dùng sắp xếp lịch trình hiệu quả, theo dõi công việc, đặt mục tiêu và nâng cao năng suất làm việc. Nhờ trí tuệ nhân tạo, DO⁺ có thể đưa ra gợi ý phù hợp với thói quen và sở thích của từng người dùng.',
      category: 'general'
    },
    {
      id: 'faq-2',
      question: 'DO⁺ có hỗ trợ cả iOS và Android không?',
      answer: 'Có, DO⁺ hỗ trợ đầy đủ cả hai nền tảng iOS và Android. Ngoài ra, bạn cũng có thể truy cập DO⁺ thông qua phiên bản web trên trình duyệt, giúp đồng bộ dữ liệu liền mạch giữa các thiết bị của bạn.',
      category: 'technical'
    },
    {
      id: 'faq-3',
      question: 'Làm thế nào để tạo tài khoản DO⁺?',
      answer: 'Để tạo tài khoản DO⁺, bạn cần tải ứng dụng từ App Store hoặc Google Play, sau đó mở ứng dụng và chọn "Đăng ký". Bạn có thể đăng ký bằng email, số điện thoại hoặc liên kết với tài khoản Google, Apple hoặc Facebook. Sau khi xác nhận email hoặc số điện thoại, bạn có thể bắt đầu sử dụng DO⁺.',
      category: 'account'
    },
    {
      id: 'faq-4',
      question: 'DO⁺ có miễn phí không?',
      answer: 'DO⁺ cung cấp phiên bản miễn phí với các tính năng cơ bản và giới hạn về số lượng công việc và dự án. Để mở khóa tất cả tính năng cao cấp như trợ lý AI, báo cáo phân tích chi tiết và đồng bộ không giới hạn, bạn cần nâng cấp lên gói Premium hoặc Business.',
      category: 'billing'
    },
    {
      id: 'faq-5',
      question: 'DO⁺ khác biệt gì so với các ứng dụng quản lý công việc khác?',
      answer: 'DO⁺ nổi bật nhờ tích hợp AI thông minh, giúp học hỏi thói quen làm việc của bạn và đưa ra gợi ý phù hợp. Thiết kế giao diện hiện đại, dễ sử dụng đặc biệt phù hợp với Gen Z. Ngoài ra, DO⁺ còn cung cấp các báo cáo phân tích chi tiết, trợ lý ảo và tính năng tập trung cao độ, giúp cải thiện hiệu suất làm việc.',
      category: 'general'
    },
    {
      id: 'faq-6',
      question: 'DO⁺ có tích hợp với Google Calendar và các ứng dụng khác không?',
      answer: 'Có, DO⁺ tích hợp liền mạch với nhiều ứng dụng và dịch vụ phổ biến như Google Calendar, Microsoft Outlook, Apple Calendar, Trello, Slack, Notion và nhiều ứng dụng khác. Điều này giúp bạn dễ dàng đồng bộ và quản lý tất cả lịch trình, công việc và dự án từ một nơi duy nhất.',
      category: 'features'
    },
    {
      id: 'faq-7',
      question: 'Làm thế nào để hủy đăng ký gói Premium?',
      answer: 'Để hủy đăng ký gói Premium của DO⁺, bạn cần vào phần "Cài đặt" > "Tài khoản" > "Quản lý đăng ký" trong ứng dụng. Tại đây, bạn có thể chọn "Hủy đăng ký". Lưu ý rằng việc hủy đăng ký sẽ có hiệu lực vào cuối chu kỳ thanh toán hiện tại của bạn.',
      category: 'billing'
    },
    {
      id: 'faq-8',
      question: 'Dữ liệu của tôi có được bảo mật khi sử dụng DO⁺ không?',
      answer: 'Chúng tôi cam kết bảo vệ dữ liệu của người dùng. DO⁺ sử dụng mã hóa đầu cuối, tuân thủ các tiêu chuẩn bảo mật cao nhất trong ngành và không bao giờ bán dữ liệu của bạn cho bên thứ ba. Bạn có thể xem chi tiết về chính sách bảo mật của chúng tôi trong phần "Cài đặt" > "Bảo mật" của ứng dụng.',
      category: 'privacy'
    },
    {
      id: 'faq-9',
      question: 'DO⁺ có hoạt động khi không có kết nối internet không?',
      answer: 'Có, DO⁺ có chế độ ngoại tuyến cho phép bạn tiếp tục sử dụng các tính năng cơ bản như xem lịch, thêm công việc và ghi chú khi không có kết nối internet. Dữ liệu sẽ được đồng bộ tự động khi bạn kết nối lại internet.',
      category: 'technical'
    },
    {
      id: 'faq-10',
      question: 'DO⁺ có hỗ trợ nhiều ngôn ngữ không?',
      answer: 'Có, DO⁺ hỗ trợ đầy đủ nhiều ngôn ngữ, bao gồm tiếng Việt, tiếng Anh, tiếng Trung, tiếng Nhật, tiếng Hàn và nhiều ngôn ngữ châu Âu phổ biến. Bạn có thể dễ dàng thay đổi ngôn ngữ trong phần "Cài đặt" > "Ngôn ngữ" của ứng dụng.',
      category: 'features'
    },
    {
      id: 'faq-11',
      question: 'Làm thế nào để khôi phục mật khẩu DO⁺ nếu tôi quên?',
      answer: 'Nếu bạn quên mật khẩu, bạn có thể chọn "Quên mật khẩu" trên màn hình đăng nhập. Nhập email hoặc số điện thoại bạn đã đăng ký, và chúng tôi sẽ gửi cho bạn liên kết để đặt lại mật khẩu. Nếu bạn đăng nhập bằng tài khoản Google, Apple hoặc Facebook, bạn có thể tiếp tục sử dụng các phương thức đăng nhập này.',
      category: 'account'
    },
    {
      id: 'faq-12',
      question: 'Làm thế nào để nhận hỗ trợ kỹ thuật nếu tôi gặp vấn đề?',
      answer: 'Nếu bạn gặp vấn đề khi sử dụng DO⁺, bạn có thể liên hệ với đội ngũ hỗ trợ của chúng tôi qua email support@doplus.app hoặc sử dụng tính năng "Trợ giúp" trong ứng dụng. Chúng tôi cũng có trung tâm hỗ trợ trực tuyến với các hướng dẫn chi tiết và câu trả lời cho các câu hỏi thường gặp.',
      category: 'technical'
    }
  ];

  // Filter FAQs based on search query and active category
  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

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
      <section className="py-12 md:py-16 bg-gray-50 relative">
        {/* Purple gradient background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute -top-20 -right-20 w-[40%] h-[40%] rounded-full bg-purple-100 blur-[80px] opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-[40%] h-[40%] rounded-full bg-purple-100 blur-[80px] opacity-60"></div>
        </div>

        <div className="container-custom">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-[#6263FF]/20 text-[#6263FF] mb-4">
              FAQ
            </span>
            <h1 className="heading-xl uppercase mb-6">
              Câu hỏi thường gặp về <span className="text-[#0600AB]">DO⁺</span>
            </h1>
            <p className="text-lg md:text-xl text-[#0600AB] mb-8">
              Tìm câu trả lời nhanh chóng cho những thắc mắc của bạn về ứng dụng DO⁺
            </p>

            {/* Search bar */}
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="Tìm kiếm câu hỏi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-3 pr-12 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                <MagnifyingGlassIcon className="w-5 h-5" />
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container-custom">
          {/* Categories filter */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-[#6263FF] text-white'
                    : 'bg-[#6263FF]/10 text-[#0600AB] hover:bg-[#6263FF]/20'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* FAQs accordions */}
          <div className="max-w-3xl mx-auto">
            {filteredFaqs.length > 0 ? (
              <div className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <motion.div
                    key={faq.id}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white rounded-lg shadow-sm overflow-hidden"
                  >
                    <button 
                      className="flex items-center justify-between w-full px-6 py-4 text-left"
                      onClick={() => toggleFaq(faq.id)}
                      aria-expanded={openFaqId === faq.id}
                    >
                      <div className="flex items-start">
                        <QuestionMarkCircleIcon className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0" />
                        <span className="font-medium text-[#0600AB]">{faq.question}</span>
                      </div>
                      {openFaqId === faq.id ? 
                        <ChevronUpIcon className="w-5 h-5 text-gray-500" /> : 
                        <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                      }
                    </button>
                    {openFaqId === faq.id && (
                      <div className="px-6 pb-4 text-[#0600AB]/80 border-t border-gray-100">
                        <p className="pt-4">{faq.answer}</p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <QuestionMarkCircleIcon className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#0600AB]">Không tìm thấy câu hỏi</h3>
                <p className="text-[#0600AB]/80 mb-6">
                  Không tìm thấy kết quả phù hợp với từ khóa "{searchQuery}". Vui lòng thử lại với từ khóa khác.
                </p>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="text-[#6263FF] font-medium hover:underline"
                  >
                    Xóa tìm kiếm
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Still have questions */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mt-16 text-center max-w-2xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-4 text-[#0600AB]">Vẫn chưa tìm thấy câu trả lời?</h2>
            <p className="text-[#0600AB]/80 mb-8">
              Đừng lo lắng, đội ngũ hỗ trợ của chúng tôi luôn sẵn sàng giúp đỡ bạn. Hãy liên hệ với chúng tôi qua các kênh sau:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-purple-200 transition-all">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mx-auto mb-4">
                  <ChatBubbleLeftRightIcon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Liên hệ hỗ trợ</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Đội ngũ hỗ trợ của chúng tôi sẵn sàng giải đáp mọi thắc mắc của bạn.
                </p>
                <Link 
                  href="/contact" 
                  className="text-purple-600 font-medium hover:underline"
                >
                  Liên hệ ngay →
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-purple-200 transition-all">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Xem hướng dẫn sử dụng</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Tìm hiểu chi tiết về cách sử dụng và tính năng của DO⁺ trong hướng dẫn của chúng tôi.
                </p>
                <a 
                  href="#" 
                  className="text-purple-600 font-medium hover:underline"
                >
                  Xem hướng dẫn →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
