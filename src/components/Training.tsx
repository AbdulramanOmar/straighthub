import Title from "./Title";
import training from "../assets/traing.png";
import { LuCircleCheckBig } from "react-icons/lu";
import { motion } from "framer-motion";
import { FaCrown } from "react-icons/fa";

const Training = () => {
  const features = [
  "تنمية المهارات الرقمية",
    "تطوير المبدعين",
    "تأهيل للمنافسة العالمية",
    "أدوات عملية متقدمة",
  ];

  return (
    <section
      id="training"
      className="relative py-24 bg-gradient-to-br from-white via-white to-[#f0fdfa] overflow-hidden"
    >
      {/* خلفية مؤثرات */}
      <div className="absolute inset-0 bg-[url('/path/to/particles.svg')] opacity-5 bg-cover bg-center pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <Title
          title="البرنامج التدريبي"
          subtitle="نقدم برامج تدريبية متخصصة لتطوير مهاراتك في مجالات اللوجستيات والتقنية"
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-16">
          {/* ✅ النصوص + المميزات */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-right"
          >
            <div className="inline-flex items-center gap-3 bg-yellow-100/40 px-5 py-2 rounded-full w-fit shadow-sm">
              <FaCrown className="text-yellow-500 text-xl" />
              <span className="uppercase  font-bold text-sm text-yellow-800">
                برنامج تدريبي استثنائي
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-snug text-straighthub mb-6">
              برنامج تدريبي بمستوى عالمي بالشراكة مع{" "}
              <span className="text-black underline decoration-emerald-400/50">
                لوموفاي
              </span>
            </h2>

            <p className="text-[#555] text-lg sm:text-xl font-medium mb-8 leading-relaxed">
              نؤمن بأن التغيير يبدأ من الإنسان. صممنا هذا البرنامج لبناء قادة
              التحول الرقمي.
            </p>

            <ul className="space-y-5 mb-10">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3 text-base sm:text-lg font-medium"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <LuCircleCheckBig className="text-emerald-500 text-2xl mt-1 flex-shrink-0" />
                  <span className="text-gray-800">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <motion.a
              href="#register"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-4 text-lg sm:text-xl font-semibold bg-straighthub text-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              سجل الآن
            </motion.a>
          </motion.div>

          {/* ✅ الصورة */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <img
              src={training}
              alt="صورة التدريب"
              className="w-full h-auto rounded-3xl shadow-2xl shadow-emerald-200/30 ring-1 ring-emerald-100"
            />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-emerald-200 blur-3xl rounded-full opacity-50 animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Training;
