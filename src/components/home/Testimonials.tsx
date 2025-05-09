'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Minh Anh",
      role: "Sinh viên Công nghệ",
      image: "/avatars/user1.jpg",
      rating: 5,
      text: "DO⁺ đã thay đổi hoàn toàn cách mình quản lý thời gian. Giao diện trực quan, AI trợ giúp thông minh và tính năng tùy biến giúp mình cân bằng giữa học tập và đam mê."
    },
    {
      name: "Hoàng Nam",
      role: "Digital Marketer",
      image: "/avatars/user2.jpg",
      rating: 5,
      text: "Làm việc trong ngành digital marketing đòi hỏi sự nhanh nhạy và tổ chức cao. DO⁺ giúp tôi theo dõi và ưu tiên nhiều dự án cùng lúc mà không bị quá tải."
    },
    {
      name: "Thu Trang",
      role: "Freelancer",
      image: "/avatars/user3.jpg",
      rating: 4,
      text: "Là một freelancer với nhiều dự án và khách hàng khác nhau, DO⁺ là trợ lý số một giúp tôi không bỏ lỡ deadline và duy trì sự chuyên nghiệp trong công việc."
    },
    {
      name: "Quang Huy",
      role: "Doanh nhân khởi nghiệp",
      image: "/avatars/user4.jpg",
      rating: 5,
      text: "Khi điều hành một startup, mỗi phút đều quý giá. DO⁺ giúp tôi tối ưu lịch trình và theo dõi KPIs, đảm bảo cả team luôn đi đúng hướng và đạt mục tiêu đề ra."
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50 overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300 mb-4"
          >
            Sự mong đợi của mọi người
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="heading-lg mb-6"
          >
            Mọi người nói gì về <span className="text-purple-600 dark:text-purple-400">DO⁺</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 dark:text-gray-300"
          >
            Hàng ngàn người dùng đã cải thiện hiệu suất làm việc và quản lý thời gian hiệu quả hơn với ứng dụng DO⁺.
          </motion.p>
        </div>

        {/* Testimonials carousel */}
        <div className="relative">
          {/* Purple decorative elements */}
          <div className="absolute top-10 right-10 w-20 h-20 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-xl opacity-70 -z-10"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-xl opacity-60 -z-10"></div>
          
          {/* Main testimonial */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12 relative">
              {/* Quote mark */}
              <div className="absolute top-8 left-8 text-6xl text-purple-200 dark:text-purple-900 font-serif leading-none">
                "
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3 flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-purple-600 dark:text-purple-300">
                      {testimonials[activeIndex].name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-bold text-xl">{testimonials[activeIndex].name}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{testimonials[activeIndex].role}</p>
                  <div className="flex mt-2">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon 
                        key={i} 
                        className={`w-5 h-5 ${
                          i < testimonials[activeIndex].rating 
                            ? 'text-yellow-400' 
                            : 'text-gray-300 dark:text-gray-600'
                        }`} 
                      />
                    ))}
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <blockquote className="italic text-lg md:text-xl text-gray-700 dark:text-gray-300 relative pl-6 md:pl-0">
                    <p>"{testimonials[activeIndex].text}"</p>
                  </blockquote>
                </div>
              </div>
            </div>
            
            {/* Navigation dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'bg-purple-600 dark:bg-purple-400 w-6'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Navigation arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between -mx-5 md:-mx-10 px-4">
              <button
                onClick={prevSlide}
                className="bg-white dark:bg-gray-700 shadow-md rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeftIcon className="w-5 h-5 text-gray-700 dark:text-gray-200" />
              </button>
              <button
                onClick={nextSlide}
                className="bg-white dark:bg-gray-700 shadow-md rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRightIcon className="w-5 h-5 text-gray-700 dark:text-gray-200" />
              </button>
            </div>
          </motion.div>

          {/* Trust indicators */}
          <div className="mt-16">
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center text-lg font-medium mb-8"
            >
              Tin dùng bởi các tổ chức
            </motion.h3>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8"
            >
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-10 flex items-center">
                  <div className="bg-gray-200 dark:bg-gray-700 w-24 h-3 rounded-md"></div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;