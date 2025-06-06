import Title from "./Title"
import training from "../assets/traing.png"
import { LuCircleCheckBig } from "react-icons/lu";
import { motion } from "framer-motion";

const Training = () => {
  const features = [
    "تدريب شامل على أحدث تقنيات اللوجستيات",
    "تأهيل للمنافسة العالمية",
    "أدوات عملية متقدمة",
    "فرص للتواصل مع قادة الصناعة"
  ];

  return (
    <section className="relative py-20  overflow-hidden" id="training">
      {/* خلفية خطوط متوهجة أو مؤثرات */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('/path/to/particles.svg')] bg-cover" />

      <div className="container mx-auto px-4 relative z-10">
        <Title
          title="البرنامج التدريبي"
          subtitle="نقدم برامج تدريبية متخصصة لتطوير مهاراتك في مجالات اللوجستيات والتقنية"
        />

        <div className="grid md:grid-cols-2 gap-10 items-center mt-10">
          {/* المحتوى النصي */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-snug text-straighthub">
              برنامج تدريبي بمستوى عالمي بالشراكة مع <span className="text-black">لوموفاي</span>
            </h2>
            <p className="text-lg text-[#777] font-medium mb-6">
              نؤمن بأن التغيير يبدأ من الإنسان. صممنا هذا البرنامج لبناء قادة التحول الرقمي.
            </p>

            <ul className="space-y-4 mb-8">
              {features.map((item, i) => (
                <motion.li 
                  key={i} 
                  className="flex items-start gap-3 text-lg font-medium"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                >
                  <LuCircleCheckBig className="text-emerald-400 text-2xl flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#register"
              className="inline-block px-8 py-4 text-lg font-bold rounded-xl bg-straighthub text-white shadow-lg transition-colors duration-300"
            >
              سجل الآن 
            </motion.a>
          </motion.div>

          {/* الصورة */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img src={training} alt="صورة التدريب" className="rounded-2xl shadow-2xl shadow-emerald-400/20" />
       
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Training;
