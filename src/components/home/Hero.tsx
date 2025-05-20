'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-23 md:pb-23 overflow-hidden bg-gradient-to-r from-[#FF80A9]/55 via-[#977DFF]/46 to-[#6263FF]/70">      {/* Purple gradient background */}
      {/* Purple gradient background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-[30%] -right-[15%] w-[60%] h-[60%] rounded-full bg-purple-100 blur-[80px] opacity-60"></div>
        <div className="absolute top-[20%] -left-[15%] w-[50%] h-[50%] rounded-full bg-purple-100 blur-[80px] opacity-60"></div>
      </div>

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full text-bold font-medium bg-[#6263FF]/20 text-[#6263FF] mb-4">
              Ứng dụng quản lý thời gian thế hệ mới
            </span>
            <h1 className="heading-xl mb-6 bg-gradient-to-r uppercase font-bold from-gray-900 to-gray-700 text-[#0600AB] bg-clip-text">
              Khát Vọng Tương Lai, <br /> <span className="text-white">Công Nghệ Dẫn Lối</span>
            </h1>
            <p className="text-lg md:text-xl max-w-lg text-[#0600AB] mb-8">
              Tối ưu hoá thời gian và nâng cao hiệu suất với DO⁺, ứng dụng quản lý công việc thông minh tích hợp AI dành cho thế hệ Gen Z năng động.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/product" className="btn-primary">
                Khám phá DO⁺
              </Link>
              <Link href="/contact" className="btn-secondary">
                Liên hệ với chúng tôi
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-12">
              <p className="text-15 text-[#0600AB] mb-4">Được tin tưởng bởi:</p>
              <div className="flex flex-wrap items-center gap-8">
                <div className="flex items-center gap-1 text-[#0600AB]">
                  <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                  <span className="font-small">TechVN</span>
                </div>
                <div className="flex items-center gap-1 text-[#0600AB]">
                  <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                  <span className="font-small">StartupHub</span>
                </div>
                <div className="flex items-center gap-1 text-[#0600AB]">
                  <div className="w-8 h-8 bg-gray-200  rounded-full"></div>
                  <span className="font-small">FutureWork</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column - App mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md md:max-w-lg">
              {/* App mockup - replaced with image */}
              <div className="relative z-10 rounded-3xl  overflow-hidden">
                <Image
                  src="/images/banner.png"
                  alt="DO⁺ App Mockup"
                  width={400}
                  height={800}
                  className="w-full h-auto"
                  priority
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] aspect-square rounded-full bg-gradient-to-tr from-purple-200 to-violet-200 blur-2xl opacity-50"></div>
              <div className="absolute bottom-0 right-0 -z-10 w-40 h-40 bg-gradient-to-tl from-purple-300 to-pink-300 rounded-full blur-xl opacity-70"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;