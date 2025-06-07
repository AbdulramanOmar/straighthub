import { motion } from "framer-motion";
import Title from "./Title";

const sectors = [
  " التصنيع الرقمي",
"الابتكار في تجربة العملاء",
  "التقنيات المتقدمة",
  "ابتكار حلول المنتجات والخدمات",
  "ريادة الأعمال ",
];

const radius = 180; // نصف قطر توزيع القطاعات

const Sectors = () => {
  return (
    <section id="sector" className="py-20 bg-gradient-to-tr from-[#f8fafc] to-white overflow-hidden">
      <Title
        title="القطاعات التي نخدمها"
        subtitle="نحن نبتكر ونطور حلولًا رقمية مخصصة لمجموعة واسعة من الصناعات:"
      />

      <div className="relative flex items-center justify-center h-[500px] md:h-[600px]">
        {/* SVG لربط الخطوط */}
        <svg className="absolute w-full h-full pointer-events-none" viewBox="0 0 600 600">
          {sectors.map((_, index) => {
            const angle = (index / sectors.length) * 2 * Math.PI;
            const x = 300 + radius * Math.cos(angle); // 300 هو مركز الدائرة (نصف 600)
            const y = 300 + radius * Math.sin(angle);
            return (
              <line
                key={index}
                x1="300"
                y1="300"
                x2={x}
                y2={y}
                stroke="#CBD5E1"
                strokeWidth="2"
                strokeDasharray="4"
              />
            );
          })}
        </svg>

        {/* الدائرة المركزية */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-28 h-28 bg-primary text-white flex items-center justify-center rounded-full shadow-2xl font-bold text-center text-base z-10"
        >
          المجالات
        </motion.div>

        {/* القطاعات */}
        {sectors.map((sector, index) => {
          const angle = (index / sectors.length) * 2 * Math.PI;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="absolute w-48 text-center text-sm bg-white p-4 rounded-xl shadow-xl hover:scale-105 transition-transform cursor-pointer z-10"
              style={{
                top: `calc(50% + ${y}px - 40px)`,
                left: `calc(50% + ${x}px - 96px)`,
              }}
            >
              {sector}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Sectors;
