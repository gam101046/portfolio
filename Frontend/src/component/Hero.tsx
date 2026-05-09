import Profile from '../assets/ดีไซน์ที่ยังไม่ได้ตั้งชื่อ.png'
import { motion, type Variants } from 'framer-motion';

const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row gap-12 items-center">
        
        {/* Left (Text) */}
        <motion.div 
            className="flex-1 order-2 md:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="block text-slate-900 dark:text-slate-100">สวัสดีครับ! ผม</span>
            <span className="bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500 dark:from-indigo-400 dark:via-cyan-400 dark:to-emerald-400 bg-clip-text text-transparent">
                Natthawut Samruamjit
            </span>
            </motion.h2>
            
            <motion.div variants={itemVariants} className="bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-6 mb-8 backdrop-blur-sm shadow-sm dark:shadow-none transition-colors duration-500">
                <h3 className="text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed space-y-2">
                    <p className="flex items-center gap-2"><span className="text-indigo-400 font-semibold">🎓</span> นักศึกษามหาวิทยาลัยเทคโนโลยีสุรนารี</p>
                    <p className="flex items-center gap-2"><span className="text-cyan-400 font-semibold">💻</span> สำนักวิชาวิศวกรรมศาสตร์ สาขาวิศวกรรมคอมพิวเตอร์ ปี 4</p>
                    <p className="flex items-center gap-2"><span className="text-emerald-400 font-semibold">📊</span> เกรดเฉลี่ยสะสม 3.38</p>
                    <p className="flex items-center gap-2"><span className="text-blue-400 font-semibold">✉️</span> <a href="mailto:natthawut.samruamjit01@gmail.com" className="hover:text-white transition-colors underline decoration-blue-500/50 underline-offset-4">natthawut.samruamjit01@gmail.com</a></p>
                    <p className="flex items-center gap-2"><span className="text-purple-400 font-semibold">📱</span> 091-016-4350</p>
                </h3>
            </motion.div>

            <motion.p variants={itemVariants} className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            กำลังมองหาโอกาสฝึกงานเพื่อพัฒนาทักษะและเรียนรู้จากผู้เชี่ยวชาญในวงการ
            มีประสบการณ์ในการพัฒนาโปรเจกต์ด้วยเทคโนโลยีที่ทันสมัย ทั้งด้านเว็บแอปพลิเคชันและงานระบบหลังบ้าน
            สนใจด้าน <strong className="text-indigo-600 dark:text-indigo-300 font-medium">AI</strong>, <strong className="text-cyan-600 dark:text-cyan-300 font-medium">IoT</strong> และ <strong className="text-emerald-600 dark:text-emerald-300 font-medium">Web Development</strong> เป็นพิเศษ
            พร้อมเรียนรู้และพัฒนาตนเองอย่างต่อเนื่องเพื่อนำความรู้ไปประยุกต์ใช้แก้ปัญหาในสถานการณ์จริง
            </motion.p>
        </motion.div>

        {/* Right (Image) */}
        <motion.div 
            className="order-1 md:order-2 flex justify-center md:justify-end w-full md:w-auto"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl blur opacity-20 dark:opacity-25 group-hover:opacity-40 dark:group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
                <img
                src={Profile}
                alt="Profile"
                className="relative w-48 sm:w-56 md:w-64 lg:w-80 h-auto object-cover rounded-2xl shadow-xl dark:shadow-2xl border border-white dark:border-white/10"
                loading="lazy"
                />
            </div>
        </motion.div>

        </div>
    </section>
  );
};

export default Hero;
