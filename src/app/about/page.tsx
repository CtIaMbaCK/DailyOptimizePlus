'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  SparklesIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  PresentationChartLineIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

export default function About() {
  const [activeTeamMember, setActiveTeamMember] = useState(0);

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

  const teamMembers = [
    {
      name: 'Kim Đặng Tùng Uy',
      role: 'CEO (Chief Executive Officer)',
      image: '/team/uy.jpg',
      bio: 'Với hơn 10 năm kinh nghiệm trong lĩnh vực phát triển phần mềm và AI, Tùng Uy đã dẫn dắt CreLaTech từ ý tưởng đến thực tế. Anh là người xây dựng tầm nhìn và định hướng phát triển dài hạn cho công ty.',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com'
      }
    },
    {
      name: 'Huỳnh Minh Thư',
      role: 'Đồng sáng lập & CTO',
      image: '/team/thu.jpg',
      bio: 'Minh Thư là chuyên gia về AI và machine learning, với sứ mệnh đưa những công nghệ tiên tiến nhất vào các sản phẩm của CreLaTech. Cô điều hành toàn bộ hoạt động nghiên cứu và phát triển công nghệ của công ty.',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com'
      }
    },
    {
      name: 'Thái Thị Mỹ Huệ',
      role: 'CFO & Co-Founder',
      image: '/team/hue.jpg',
      bio: 'Với bề dày kinh nghiệm trong ngành digital marketing, Mỹ Huệ chịu trách nhiệm định vị thương hiệu CreLaTech trên thị trường và quản lý mọi hoạt động tài chính, đảm bảo sự phát triển bền vững của công ty.',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com'
      }
    },
    {
      name: 'Hà Thiên Đạt',
      role: 'Trưởng phòng thiết kế UX/UI',
      image: '/team/dat.jpg',
      bio: 'Thiên Đạt là người đứng sau những trải nghiệm người dùng tuyệt vời của DO⁺, với triết lý thiết kế "đơn giản nhưng hiệu quả". Anh và đội ngũ của mình không ngừng nỗ lực để mang đến giao diện trực quan và dễ sử dụng nhất.',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com'
      }
    },
    {
      name: 'Đặng Cao Trí',
      role: 'Giám đốc Marketing',
      image: '/team/tri.jpg',
      bio: 'Cao Trí là người xây dựng chiến lược tiếp thị và truyền thông của CreLaTech. Với kinh nghiệm dày dạn trong ngành marketing kỹ thuật số, anh giúp DO⁺ tiếp cận đúng đối tượng khách hàng mục tiêu một cách hiệu quả.',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com'
      }
    },
  ];

  const values = [
    {
      icon: <SparklesIcon className="w-6 h-6" />,
      title: 'Sáng tạo thực tiễn',
      description: 'Chúng tôi khuyến khích tư duy đổi mới và tìm kiếm giải pháp sáng tạo cho mọi thách thức.'
    },
    {
      icon: <RocketLaunchIcon className="w-6 h-6" />,
      title: 'Kết nối & Cộng hưởng',
      description: 'Đề cao tinh thần làm việc nhóm, học hỏi lẫn nhau và cộng tác liên ngành.'
    },
    {
      icon: <LightBulbIcon className="w-6 h-6" />,
      title: 'Linh hoạt & Thích ứng',
      description: 'Luôn cập nhật công nghệ, xu hướng mới và thích ứng với sự thay đổi.'
    },
    {
      icon: <PresentationChartLineIcon className="w-6 h-6" />,
      title: 'Lãnh đạo bản thân',
      description: 'Khuyến khích mỗi cá nhân trong đội ngũ chủ động, tự học, tự lập và chịu trách nhiệm với hành động của mình.'
    }
  ];

  const nextMember = () => {
    setActiveTeamMember((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  const prevMember = () => {
    setActiveTeamMember((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextMember();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-20 relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute -top-20 -right-20 w-[40%] h-[40%] rounded-full bg-[#FF80A9]/20 blur-[80px] opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-[40%] h-[40%] rounded-full bg-[#FF80A9]/20 blur-[80px] opacity-60"></div>
        </div>

        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="heading-xl uppercase mb-6"
            >
              Về <span className="text-[#0600AB]">CreLaTech</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-[#0600AB] mb-8"
            >
              Chúng tôi là đội ngũ đam mê công nghệ và đổi mới, với sứ mệnh tạo ra những giải pháp thông minh giúp mọi người quản lý thời gian và công việc hiệu quả hơn.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-[#6263FF]/20 text-[#6263FF]/100 mb-4">
                Lịch sử hình thành
              </span>
              <h2 className="heading-lg mb-6 text-[#0600AB]">Hành trình của chúng tôi</h2>
              <div className="space-y-6 text-[#0600AB]">
                <p>
                  <span className="font-bold">CreLaTech</span> được thành lập vào năm 2025 bởi một nhóm sinh viên năm 3 năng động đến từ Trường Đại học Văn Lang, với niềm tin rằng sự sáng tạo (Creative), công nghệ (Tech) là hai yếu tố không thể tách rời trong thời đại mới.
                </p>
                <p>
                  Bắt đầu từ một dự án nhỏ, nhóm bạn trẻ dần phát triển CreLaTech thành một cộng đồng sáng tạo - nơi công nghệ được ứng dụng để giải quyết các vấn đề thực tiễn trong học tập, công việc và đời sống. Với tinh thần dấn thân, học hỏi và kết nối, CreLaTech không chỉ là một ý tưởng khởi nguồn, mà là một hành trình đang tiếp diễn.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-[#FF80A9]/20 to-[#6263FF]/20 rounded-lg overflow-hidden flex items-center justify-center">
                <img
                  src="/images/Crelatech.png"
                  alt="CreLaTech Logo"
                  className="object-contain "
                />
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="order-2 md:order-1"
            >
              <div className="aspect-[4/3] bg-gradient-to-tr from-[#FF80A9] to-[#6263FF] rounded-lg overflow-hidden flex flex-col items-center justify-center text-white text-center p-8">
                <div className="mb-4">
                  <SparklesIcon className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Tầm nhìn của chúng tôi</h3>
                <p className="text-white/90">
                  Trở thành một nền tảng khởi nguồn sáng tạo uy tín dành cho sinh viên và người trẻ Việt Nam, nơi ý tưởng nhỏ có thể tạo nên thay đổi lớn, và nơi công nghệ không chỉ phục vụ cuộc sống mà còn truyền cảm hứng cho tương lai.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="order-1 md:order-2"
            >
              <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-[#6263FF]/20 text-[#6263FF]/100 mb-4">
                Sứ mệnh & Tầm nhìn
              </span>
              <h2 className="heading-lg uppercase mb-6 text-[#0600AB]">Định hướng của chúng tôi</h2>
              <div className="space-y-6 text-[#0600AB]">
                <p>
                  <strong className="text-[#6263FF]">Sứ mệnh:</strong> CreLaTech ra đời với sứ mệnh kết nối sự sáng tạo của người trẻ với công nghệ hiện đại, tạo ra những giải pháp mang tính ứng dụng cao, hỗ trợ học tập, làm việc và phát triển cá nhân một cách hiệu quả, thực tế và bền vững.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <motion.span
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-[#6263FF]/20 text-[#6263FF]/100 mb-4"
              >
                Giá trị cốt lõi
              </motion.span>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="heading-lg uppercase mb-6 text-[#0600AB]"
              >
                Những nguyên tắc định hướng của chúng tôi
              </motion.h2>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="text-lg text-[#0600AB]"
              >
                Mọi quyết định và hành động của chúng tôi đều dựa trên những giá trị cốt lõi này.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-[#6263FF]/20 transition-all"
                >
                  <div className="w-12 h-12 bg-[#6263FF]/20 rounded-lg flex items-center justify-center text-[#6263FF] mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-[#0600AB]">{value.title}</h3>
                  <p className="text-[#0600AB]/80">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <section className="py-16">
            <div className="container-custom">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <motion.span
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-[#6263FF]/20 text-[#6263FF]/100 mb-4"
                >
                  Đội ngũ sáng lập
                </motion.span>
                <motion.h2
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  className="heading-lg uppercase mb-6 text-[#0600AB]"
                >
                  Gặp gỡ những người đứng sau <span className="text-[#6263FF]">CreLaTech</span>
                </motion.h2>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  className="text-lg text-[#0600AB]"
                >
                  Đội ngũ tài năng và đam mê của chúng tôi là động lực chính đằng sau mọi thành công.
                </motion.p>
              </div>

              <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTeamMember}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="h-full flex flex-col justify-center"
                      >
                        <div className="mb-2 inline-block py-1 px-3 rounded-full text-xs font-medium bg-[#6263FF]/20 text-[#6263FF] mb-4">
                          #{activeTeamMember + 1} / {teamMembers.length}
                        </div>
                        <h3 className="text-3xl font-bold mb-2 text-[#0600AB]">{teamMembers[activeTeamMember].name}</h3>
                        <p className="text-[#6263FF] font-medium mb-6">{teamMembers[activeTeamMember].role}</p>
                        <p className="text-[#0600AB]/80 mb-8 text-lg">
                          {teamMembers[activeTeamMember].bio}
                        </p>
                        <div className="flex space-x-4 mt-auto">
                          <a
                            href={teamMembers[activeTeamMember].social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-100 hover:bg-[#6263FF]/20 p-2 rounded-full text-[#0600AB]/70 hover:text-[#6263FF] transition-colors"
                          >
                            <span className="sr-only">LinkedIn</span>
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M20.25 0H3.75C1.677 0 0 1.677 0 3.75v16.5C0 22.323 1.677 24 3.75 24h16.5c2.073 0 3.75-1.677 3.75-3.75V3.75C24 1.677 22.323 0 20.25 0zM8.25 18.75H5.25v-9h3v9zm-1.5-10.5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm12 10.5h-3v-4.969c0-1.122-.04-2.531-1.5-2.531-1.5 0-1.5 1.219-1.5 2.531v4.969h-3v-9h3v1.031c.597-.656 1.5-1.031 2.25-1.031 2.625 0 3.75 1.734 3.75 4.5v4.5z" />
                            </svg>
                          </a>
                          <a
                            href={teamMembers[activeTeamMember].social.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-100 hover:bg-[#6263FF]/20 p-2 rounded-full text-[#0600AB]/70 hover:text-[#6263FF] transition-colors"
                          >
                            <span className="sr-only">Twitter</span>
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                            </svg>
                          </a>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <div className="w-full md:w-1/2 relative bg-gradient-to-br from-[#FF80A9] to-[#6263FF] min-h-[400px] md:min-h-[500px]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTeamMember}
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="relative w-full h-full md:w-full md:h-full overflow-hidden">
                          <Image
                            src={teamMembers[activeTeamMember].image}
                            alt={teamMembers[activeTeamMember].name}
                            fill
                            sizes="(max-width: 768px) 12rem, 16rem"
                            className="object-cover"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              const parent = e.currentTarget.parentElement;
                              if (parent) {
                                parent.classList.add('bg-white');
                                parent.innerHTML = `<div class="absolute inset-0 bg-gradient-to-br from-[#FF80A9]/20 to-[#6263FF]/20 flex items-center justify-center">
                                  <span class="text-7xl font-bold text-[#0600AB]">
                                    ${teamMembers[activeTeamMember].name.charAt(0)}
                                  </span>
                                </div>`;
                              }
                            }}
                          />
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    <div className="absolute top-6 right-6 flex flex-col space-y-4">
                      {teamMembers.map((member, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveTeamMember(index)}
                          className={`w-12 h-12 rounded-full overflow-hidden border-2 transition-all relative ${index === activeTeamMember
                              ? 'border-white scale-110'
                              : 'border-white/50 opacity-70 hover:opacity-100'
                            }`}
                        >
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            priority
                            sizes="3rem"
                            className="object-cover"
                            onError={(e) => {
                              // Fallback nếu hình không tải được
                              e.currentTarget.style.display = 'none';
                              const parent = e.currentTarget.parentElement;
                              if (parent) {
                                parent.innerHTML = `<div class="absolute inset-0 bg-gradient-to-br from-[#FF80A9]/20 to-[#6263FF]/20 flex items-center justify-center">
      <span class="font-bold text-[#0600AB]">
        ${member.name.charAt(0)}
      </span>
    </div>`;
                              }
                            }}
                          />
                        </button>
                      ))}
                    </div>

                    <div className="absolute bottom-6 right-6 flex space-x-3">
                      <button
                        onClick={prevMember}
                        className="bg-white/20 hover:bg-white/30 p-2 rounded-full text-white transition-colors"
                      >
                        <ChevronLeftIcon className="h-5 w-5" />
                      </button>
                      <button
                        onClick={nextMember}
                        className="bg-white/20 hover:bg-white/30 p-2 rounded-full text-white transition-colors"
                      >
                        <ChevronRightIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-4 left-0 right-0">
                  <div className="flex justify-center space-x-2">
                    {teamMembers.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveTeamMember(index)}
                        className={`w-2 h-2 rounded-full transition-all ${index === activeTeamMember
                          ? 'bg-[#6263FF] w-6'
                          : 'bg-gray-300 hover:bg-[#6263FF]/50'
                          }`}
                        aria-label={`Go to team member ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}