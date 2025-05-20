'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'Tất cả' },
    { id: 'tips', name: 'Mẹo sử dụng' },
    { id: 'productivity', name: 'Năng suất' },
    { id: 'ai', name: 'Công nghệ AI' },
    { id: 'gen-z', name: 'Gen Z' }
  ];
  
  const articles = [
    {
      id: 1,
      title: '5 cách để tối ưu hóa lịch trình hàng ngày với DO⁺',
      slug: '5-cach-toi-uu-hoa-lich-trinh',
      excerpt: 'Khám phá các phương pháp hiệu quả giúp bạn tổ chức và quản lý lịch trình hàng ngày một cách tối ưu nhờ các tính năng thông minh của DO⁺.',
      category: 'tips',
      author: 'Nguyễn Minh Tuấn',
      date: '15/06/2023',
      readTime: '5 phút',
      image: '/blog/placeholder.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'AI và tương lai của công cụ quản lý công việc',
      slug: 'ai-va-tuong-lai-cong-cu-quan-ly',
      excerpt: 'Trí tuệ nhân tạo đang định hình lại cách chúng ta làm việc và quản lý thời gian. Cùng tìm hiểu xu hướng AI mới nhất trong lĩnh vực productivity.',
      category: 'ai',
      author: 'Trần Hà Vi',
      date: '02/06/2023',
      readTime: '8 phút',
      image: '/blog/placeholder.jpg',
      featured: false
    },
    {
      id: 3,
      title: 'Thói quen sử dụng công nghệ của Gen Z và thách thức',
      slug: 'thoi-quen-su-dung-cong-nghe-gen-z',
      excerpt: 'Gen Z có những đặc điểm riêng trong cách tiếp cận và sử dụng công nghệ. Bài viết phân tích các thói quen này và cách DO⁺ đáp ứng nhu cầu của họ.',
      category: 'gen-z',
      author: 'Lê Thanh Hương',
      date: '20/05/2023',
      readTime: '6 phút',
      image: '/blog/placeholder.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'Phương pháp Pomodoro và cách tích hợp với DO⁺',
      slug: 'phuong-phap-pomodoro-va-do-plus',
      excerpt: 'Khám phá cách áp dụng phương pháp Pomodoro hiệu quả kết hợp với các tính năng của ứng dụng DO⁺ để tăng năng suất làm việc.',
      category: 'productivity',
      author: 'Vũ Quốc Duy',
      date: '12/05/2023',
      readTime: '7 phút',
      image: '/blog/placeholder.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'Cách thiết lập mục tiêu SMART với trợ lý DO⁺',
      slug: 'cach-thiet-lap-muc-tieu-smart',
      excerpt: 'Mục tiêu SMART giúp bạn xác định rõ ràng những gì muốn đạt được. Tìm hiểu cách DO⁺ có thể giúp bạn thiết lập và theo dõi các mục tiêu này.',
      category: 'tips',
      author: 'Nguyễn Minh Tuấn',
      date: '05/05/2023',
      readTime: '5 phút',
      image: '/blog/placeholder.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'Xu hướng công nghệ AI năm 2023 dành cho Gen Z',
      slug: 'xu-huong-cong-nghe-ai-2023',
      excerpt: 'Những xu hướng AI mới nhất đang định hình tương lai công nghệ và tác động đến cách Gen Z học tập, làm việc và giải trí.',
      category: 'ai',
      author: 'Trần Hà Vi',
      date: '28/04/2023',
      readTime: '9 phút',
      image: '/blog/placeholder.jpg',
      featured: false
    }
  ];

  // Filter articles by search and category
  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || article.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Separate featured articles
  const featuredArticles = filteredArticles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

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
            <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-purple-100 text-purple-600 mb-4">
              Blog
            </span>
            <h1 className="heading-xl uppercase mb-6">
              Khám phá kiến thức và <span className="text-[#6263FF]"><br />mẹo hay</span>
            </h1>
            <p className="text-lg md:text-xl text-[#0600AB] mb-8">
              Chia sẻ về công nghệ, kỹ năng quản lý thời gian và cách tối ưu hóa hiệu suất làm việc với DO⁺
            </p>

            {/* Search bar */}
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="Tìm kiếm bài viết..."
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

      {/* Blog content */}
      <section className="py-12">
        <div className="container-custom">
          {/* Categories filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-[#0600AB] hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Featured article */}
          {featuredArticles.length > 0 && (
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="mb-12"
            >
              <Link href={`/blog/${featuredArticles[0].slug}`} className="block">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-[16/9] bg-gradient-to-br from-purple-100 to-indigo-100 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-[#6263FF]">DO⁺</span>
                    </div>
                  </div>
                  <div className="p-6 md:p-8 flex flex-col">
                    <div className="flex items-center space-x-2 text-sm text-[#0600AB]/80 mb-3">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        {categories.find(c => c.id === featuredArticles[0].category)?.name}
                      </span>
                      <span>•</span>
                      <span>{featuredArticles[0].date}</span>
                      <span>•</span>
                      <span>{featuredArticles[0].readTime}</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-3 hover:text-[#6263FF] transition-colors">
                      {featuredArticles[0].title}
                    </h2>
                    <p className="text-[#0600AB]/80 mb-4 flex-grow">
                      {featuredArticles[0].excerpt}
                    </p>
                    <div className="flex items-center mt-auto">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-[#6263FF] font-bold">
                        {featuredArticles[0].author.charAt(0)}
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-[#0600AB]">{featuredArticles[0].author}</p>
                        <p className="text-xs text-[#6263FF]">Đồng sáng lập</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Regular articles grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article, index) => (
              <motion.div 
                key={article.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/blog/${article.slug}`} className="block h-full">
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                    <div className="aspect-[16/9] bg-gradient-to-br from-purple-100 to-indigo-100 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xl font-medium text-[#6263FF]">DO⁺</span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center space-x-2 text-sm text-[#0600AB]/80 mb-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                          {categories.find(c => c.id === article.category)?.name}
                        </span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>
                      <h2 className="text-xl font-bold mb-3 hover:text-[#6263FF] transition-colors line-clamp-2 text-[#0600AB]">
                        {article.title}
                      </h2>
                      <p className="text-[#0600AB]/80 mb-4 line-clamp-3 flex-grow">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-[#6263FF] font-bold text-sm">
                            {article.author.charAt(0)}
                          </div>
                          <span className="ml-2 text-sm text-[#0600AB]/80">{article.author}</span>
                        </div>
                        <span className="text-sm text-[#6263FF]">{article.date}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* No results message */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[#0600AB] text-lg">
                Không tìm thấy bài viết phù hợp. Vui lòng thử lại với từ khóa khác.
              </p>
            </div>
          )}

          {/* Newsletter signup */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mt-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl p-8 md:p-12 text-white text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Đừng bỏ lỡ bài viết mới
            </h3>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Đăng ký nhận thông báo về các bài viết mới nhất về quản lý thời gian, năng suất và các mẹo sử dụng DO⁺ hiệu quả.
            </p>
            <div className="max-w-md mx-auto flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Email của bạn"
                className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors whitespace-nowrap">
                Đăng ký
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
