'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-24 overflow-hidden">
      {/* Purple gradient background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-[30%] -right-[15%] w-[60%] h-[60%] rounded-full bg-purple-100 dark:bg-purple-900/20 blur-[80px] opacity-60"></div>
        <div className="absolute top-[20%] -left-[15%] w-[50%] h-[50%] rounded-full bg-purple-100 dark:bg-purple-900/20 blur-[80px] opacity-60"></div>
      </div>
      
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300 mb-4">
              Ứng dụng quản lý thời gian thế hệ mới
            </span>
            <h1 className="heading-xl mb-6 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 text-transparent bg-clip-text">
              Khát Vọng Tương Lai, <br /> <span className="text-purple-600 dark:text-purple-400">Công Nghệ Dẫn Lối</span>
            </h1>
            <p className="text-lg md:text-xl max-w-lg text-gray-600 dark:text-gray-300 mb-8">
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
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Được tin tưởng bởi:</p>
              <div className="flex flex-wrap items-center gap-8">
                <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                  <div className="w-8 h-8 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
                  <span className="font-medium">TechVN</span>
                </div>
                <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                  <div className="w-8 h-8 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
                  <span className="font-medium">StartupHub</span>
                </div>
                <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                  <div className="w-8 h-8 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
                  <span className="font-medium">FutureWork</span>
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
              {/* App mockup */}
              <div className="relative z-10 bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden border-8 border-gray-100 dark:border-gray-800">
                <div className="aspect-[9/16] w-full bg-gradient-to-br from-purple-600 to-violet-500 relative">
                  {/* Here you would place your actual app mockup image */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mb-4">
                      <span className="text-xl font-bold">D+</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">DO⁺ App</h3>
                    <p className="text-sm text-white/80">
                      Giao diện trực quan. Công nghệ tiên tiến. Trải nghiệm mượt mà.
                    </p>
                    <div className="mt-auto grid grid-cols-3 gap-2 w-full">
                      {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div key={item} className="bg-white/20 rounded-lg p-2 aspect-square"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] aspect-square rounded-full bg-gradient-to-tr from-purple-200 to-violet-200 dark:from-purple-900/30 dark:to-violet-900/30 blur-2xl opacity-50"></div>
              <div className="absolute bottom-0 right-0 -z-10 w-40 h-40 bg-gradient-to-tl from-purple-300 to-pink-300 dark:from-purple-800/30 dark:to-pink-800/30 rounded-full blur-xl opacity-70"></div>
              <div className="absolute top-20 -left-10 -z-10 w-24 h-24 bg-gradient-to-br from-violet-400 to-indigo-400 dark:from-violet-800/30 dark:to-indigo-800/30 rounded-full blur-xl opacity-70"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;