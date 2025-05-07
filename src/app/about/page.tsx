'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  SparklesIcon, 
  RocketLaunchIcon, 
  LightBulbIcon, 
  PresentationChartLineIcon 
} from '@heroicons/react/24/outline';

export default function About() {
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
      name: 'Nguyễn Minh Tuấn',
      role: 'Đồng sáng lập & CEO',
      image: '/team/placeholder.jpg',
      bio: 'Với hơn 10 năm kinh nghiệm trong lĩnh vực phát triển phần mềm và AI, Minh Tuấn đã dẫn dắt CreLaTech từ ý tưởng đến thực tế.',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com'
      }
    },
    {
      name: 'Trần Hà Vi',
      role: 'Đồng sáng lập & CTO',
      image: '/team/placeholder.jpg',
      bio: 'Hà Vi là chuyên gia về AI và machine learning, với sứ mệnh đưa những công nghệ tiên tiến nhất vào các sản phẩm của CreLaTech.',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com'
      }
    },
    {
      name: 'Lê Thanh Hương',
      role: 'Giám đốc Marketing',
      image: '/team/placeholder.jpg',
      bio: 'Với bề dày kinh nghiệm trong ngành digital marketing, Thanh Hương chịu trách nhiệm định vị thương hiệu CreLaTech trên thị trường.',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com'
      }
    },
    {
      name: 'Vũ Quốc Duy',
      role: 'Trưởng phòng thiết kế UX/UI',
      image: '/team/placeholder.jpg',
      bio: 'Quốc Duy là người đứng sau những trải nghiệm người dùng tuyệt vời của DO⁺, với triết lý thiết kế "đơn giản nhưng hiệu quả".',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com'
      }
    }
  ];

  const values = [
    {
      icon: <SparklesIcon className="w-6 h-6" />,
      title: 'Sáng tạo không giới hạn',
      description: 'Chúng tôi khuyến khích tư duy đổi mới và tìm kiếm giải pháp sáng tạo cho mọi thách thức.'
    },
    {
      icon: <RocketLaunchIcon className="w-6 h-6" />,
      title: 'Không ngừng phát triển',
      description: 'Chúng tôi luôn tìm cách cải thiện và phát triển, không bao giờ hài lòng với hiện tại.'
    },
    {
      icon: <LightBulbIcon className="w-6 h-6" />,
      title: 'Lấy người dùng làm trung tâm',
      description: 'Mọi quyết định của chúng tôi đều hướng tới việc nâng cao trải nghiệm và giá trị cho người dùng.'
    },
    {
      icon: <PresentationChartLineIcon className="w-6 h-6" />,
      title: 'Cam kết chất lượng',
      description: 'Chúng tôi theo đuổi sự xuất sắc trong mọi chi tiết, từ code cho đến trải nghiệm người dùng.'
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-20 relative">
        {/* Purple gradient background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute -top-20 -right-20 w-[40%] h-[40%] rounded-full bg-purple-100 dark:bg-purple-900/20 blur-[80px] opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-[40%] h-[40%] rounded-full bg-purple-100 dark:bg-purple-900/20 blur-[80px] opacity-60"></div>
        </div>

        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="heading-xl mb-6"
            >
              Về <span className="text-purple-600 dark:text-purple-400">CreLaTech</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
            >
              Chúng tôi là đội ngũ đam mê công nghệ và đổi mới, với sứ mệnh tạo ra những giải pháp thông minh giúp mọi người quản lý thời gian và công việc hiệu quả hơn.
            </motion.p>
          </div>

          {/* Company History */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300 mb-4">
                Lịch sử hình thành
              </span>
              <h2 className="heading-lg mb-6">Hành trình của chúng tôi</h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <p>
                  CreLaTech được thành lập vào năm 2020 bởi hai người bạn đại học Nguyễn Minh Tuấn và Trần Hà Vi, với tầm nhìn tạo ra các giải pháp công nghệ giúp tối ưu hóa thời gian và năng suất làm việc.
                </p>
                <p>
                  Khởi đầu với đội ngũ chỉ 5 thành viên, chúng tôi đã phát triển thành một công ty có hơn 25 nhân sự tài năng, đa dạng về chuyên môn và văn hóa, cùng chung niềm đam mê tạo ra sản phẩm có tác động tích cực đến cuộc sống của người dùng.
                </p>
                <p>
                  Sau nhiều tháng nghiên cứu và phát triển, vào tháng 6/2021, chúng tôi đã cho ra mắt ứng dụng DO⁺ phiên bản beta và nhận được phản hồi tích cực từ cộng đồng. Hiện tại, DO⁺ đã trở thành trợ lý quản lý thời gian cho hơn 50.000 người dùng mỗi tháng.
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
              <div className="aspect-[4/3] bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-lg overflow-hidden flex items-center justify-center">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">CreLaTech</div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-1/2 aspect-square bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col justify-center">
                <p className="text-4xl font-bold text-purple-600 dark:text-purple-400">2020</p>
                <p className="text-gray-600 dark:text-gray-300">Năm thành lập</p>
              </div>
            </motion.div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="order-2 md:order-1"
            >
              <div className="aspect-[4/3] bg-gradient-to-tr from-purple-500 to-violet-600 rounded-lg overflow-hidden flex flex-col items-center justify-center text-white text-center p-8">
                <div className="mb-4">
                  <SparklesIcon className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Tầm nhìn của chúng tôi</h3>
                <p className="text-white/90">
                  Trở thành doanh nghiệp công nghệ hàng đầu Việt Nam trong lĩnh vực phát triển các giải pháp quản lý thời gian và năng suất, mang đến những trải nghiệm số hóa đột phá cho người dùng trên toàn thế giới.
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
              <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300 mb-4">
                Sứ mệnh & Tầm nhìn
              </span>
              <h2 className="heading-lg mb-6">Định hướng của chúng tôi</h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <p>
                  <strong className="text-purple-600 dark:text-purple-400">Sứ mệnh:</strong> Chúng tôi cam kết phát triển các giải pháp công nghệ thông minh, trực quan và dễ sử dụng, giúp người dùng tối ưu hóa thời gian, nâng cao năng suất và cân bằng cuộc sống.
                </p>
                <p>
                  CreLaTech tin rằng công nghệ phải là người bạn đồng hành, hỗ trợ chứ không phải là một trở ngại trong cuộc sống năng động ngày nay. Qua đó, chúng tôi mong muốn tạo ra tác động tích cực đến xã hội thông qua việc giúp mọi người làm việc hiệu quả hơn và dành nhiều thời gian hơn cho những điều quan trọng trong cuộc sống.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Core Values */}
          <div className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <motion.span 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300 mb-4"
              >
                Giá trị cốt lõi
              </motion.span>
              <motion.h2 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="heading-lg mb-6"
              >
                Những nguyên tắc định hướng chúng tôi
              </motion.h2>
              <motion.p 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="text-lg text-gray-600 dark:text-gray-300"
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
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-800 transition-all"
                >
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-300 mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Team Members */}
          <div>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <motion.span 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300 mb-4"
              >
                Đội ngũ sáng lập
              </motion.span>
              <motion.h2 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="heading-lg mb-6"
              >
                Gặp gỡ những người đứng sau <span className="text-purple-600 dark:text-purple-400">CreLaTech</span>
              </motion.h2>
              <motion.p 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="text-lg text-gray-600 dark:text-gray-300"
              >
                Đội ngũ tài năng và đam mê của chúng tôi là động lực chính đằng sau mọi thành công.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div 
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden"
                >
                  <div className="bg-gradient-to-br from-purple-500 to-violet-600 h-40 flex items-center justify-center">
                    <span className="font-bold text-4xl text-white">{member.name.charAt(0)}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-purple-600 dark:text-purple-400 mb-4">{member.role}</p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                      {member.bio}
                    </p>
                    <div className="flex space-x-3">
                      <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-purple-600 dark:hover:text-purple-400">
                        <span className="sr-only">LinkedIn</span>
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M20.25 0H3.75C1.677 0 0 1.677 0 3.75v16.5C0 22.323 1.677 24 3.75 24h16.5c2.073 0 3.75-1.677 3.75-3.75V3.75C24 1.677 22.323 0 20.25 0zM8.25 18.75H5.25v-9h3v9zm-1.5-10.5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm12 10.5h-3v-4.969c0-1.122-.04-2.531-1.5-2.531-1.5 0-1.5 1.219-1.5 2.531v4.969h-3v-9h3v1.031c.597-.656 1.5-1.031 2.25-1.031 2.625 0 3.75 1.734 3.75 4.5v4.5z" />
                        </svg>
                      </a>
                      <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-purple-600 dark:hover:text-purple-400">
                        <span className="sr-only">Twitter</span>
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}