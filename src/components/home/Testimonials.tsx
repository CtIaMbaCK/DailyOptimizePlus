'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const testimonials = [
    {
      name: "Tôn Văn Linh",
      role: "Nhân viên văn phòng",
      image: "/users/user1.jpg",
      rating: 5,
      text: "Ý tưởng về ứng dụng rất hay, nếu có thể mong DO+ phát triển thêm các gói premium để làm việc nhóm thì càng thích hơn."
    },
    {
      name: "Hoàng Duyên",
      role: "Digital Marketer",
      image: "/users/user2.jpg",
      rating: 5,
      text: "Giao diện demo app rất dễ thương, màu sắc tươi sáng, nhưng mình nghĩ DO+ nên có thêm phần tối giản hơn, để phù hợp với người mới hơn 1 tí"
    },
    {
      name: "Diệu Hoa",
      role: "Sinh viên Công Nghệ",
      image: "/users/user3.jpg",
      rating: 5,
      text: "Mình rất trông chờ vào tính năng lập kế hoạch với AI của ứng dụng, vì công việc nhiều, không đủ thời gian để ngồi sắp xếp, tính năng này thật sự rất hữu ích đối với mình."
    },
    {
      name: "Bá Vũ",
      role: "Sinh viên PR",
      image: "/users/user4.jpg",
      rating: 5,
      text: "Khi điều hành một startup, mỗi phút đều quý giá. DO⁺ giúp tôi tối ưu lịch trình và theo dõi KPIs, đảm bảo cả team luôn đi đúng hướng và đạt mục tiêu đề ra."
    },
    {
      name: "Quang Vinh",
      role: "Sinh viên Lịch Sử học",
      image: "/users/user5.jpg",
      rating: 5,
      text: "Khi điều hành một startup, mỗi phút đều quý giá. DO⁺ giúp tôi tối ưu lịch trình và theo dõi KPIs, đảm bảo cả team luôn đi đúng hướng và đạt mục tiêu đề ra."
    },
  ];

  const nextSlide = () => {
    setDirection(1);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    resetAutoPlayTimer();  // Reset timer khi người dùng thao tác
  };

  const prevSlide = () => {
    setDirection(-1);
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    resetAutoPlayTimer();  // Reset timer khi người dùng thao tác
  };

  const goToSlide = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    resetAutoPlayTimer();  // Reset timer khi người dùng thao tác
  };

  // Hàm reset timer
  const resetAutoPlayTimer = () => {
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
    }

    autoPlayTimerRef.current = setInterval(() => {
      nextSlide();
    }, 8000);
  };

  // Khởi tạo auto-play khi component mount
  useEffect(() => {
    resetAutoPlayTimer();

    // Cleanup khi component unmount
    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, []);

  // Hiệu ứng cho slide
  const slideVariants = {
    initial: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 }
      }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    })
  };

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-[#6263FF]/20 text-[#0600AB] mb-4"
          >
            Sự mong đợi của mọi người
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="heading-xl uppercase mb-6 text-[#0600AB]"
          >
            Mọi người nói gì về <span className="text-[#0600AB]">DO⁺</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-[#0600AB]/80"
          >
            Hàng ngàn người dùng đã cải thiện hiệu suất làm việc và quản lý thời gian hiệu quả hơn với ứng dụng DO⁺.
          </motion.p>
        </div>

        {/* Testimonials carousel */}
        <div className="relative">
          {/* Purple decorative elements */}
          <div className="absolute top-10 right-10 w-20 h-20 bg-[#6263FF]/20 rounded-full blur-xl opacity-70 -z-10"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-[#6263FF]/20 rounded-full blur-xl opacity-60 -z-10"></div>

          {/* Main testimonial */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 relative">
              {/* Quote mark */}
              <div className="absolute top-8 left-8 text-6xl text-[#6263FF]/20 font-serif leading-none">
                "
              </div>

              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="flex flex-col md:flex-row gap-8 items-center"
                >
                  <div className="md:w-1/3 flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden relative border-2 border-[#6263FF]/20 shadow-md">
                      <Image
                        src={testimonials[activeIndex].image}
                        alt={`${testimonials[activeIndex].name}'s avatar`}
                        fill
                        sizes="96px"
                        className="object-cover"
                        onError={(e) => {
                          e.currentTarget.src = `https://ui-avatars.com/api/?name=${testimonials[activeIndex].name}&background=6263FF&color=fff`;
                        }}
                      />
                    </div>
                    <h3 className="font-bold text-xl text-[#0600AB] mt-3">{testimonials[activeIndex].name}</h3>
                    <p className="text-[#0600AB]/70">{testimonials[activeIndex].role}</p>
                    <div className="flex mt-2">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`w-5 h-5 ${i < testimonials[activeIndex].rating
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                            }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="md:w-2/3">
                    <blockquote className="italic text-lg md:text-xl text-[#0600AB]/90 relative pl-6 md:pl-0">
                      <p>"{testimonials[activeIndex].text}"</p>
                    </blockquote>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}  // Sử dụng hàm goToSlide thay vì setActiveIndex trực tiếp
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-[#0600AB]' : 'bg-gray-300'
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between -mx-5 md:-mx-10 px-4">
              <button
                onClick={prevSlide}
                className="bg-white shadow-md rounded-full p-2 hover:bg-gray-100 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeftIcon className="w-5 h-5 text-[#0600AB]" />
              </button>
              <button
                onClick={nextSlide}
                className="bg-white shadow-md rounded-full p-2 hover:bg-gray-100 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRightIcon className="w-5 h-5 text-[#0600AB]" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;