import { motion } from "framer-motion";
import Title from "./Title";
export const serviceContent = [
  {
    name: "التحول الرقمي المتقدم",

    icon: "/service (5).png",
  },
  {
    name: "حلول الذكاء الاصطناعي",

    icon: "/service (4).png",
  },
  {
    
    name: "تطوير الأنظمة الذكية",
    icon: "/service (3).png",
  },
  {
    name: "استشارات استراتيجية تقنية",
    
    icon: "/service (1).png",
  },
  {
    
    name: "بنية تحتية سحابية",
    icon: "/service (2).png",
  },
  {
    name: " ابتكار عروض قيمة",
    icon: "/service (6).png",
  },
];

const Services = () => {
  return (
    <section className="py-10 " id="services">
      <Title
        title="حلول الابتكار"
        subtitle="عندك حل أو ابتكار مجموعة تعزز من أداء الجهات الكبرى والمشاريع الواعدة وتساعدها على التوسع بذكاء؟"
      />
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.4, // تأخير بسيط بين كل بطاقة والأخرى
              },
            },
          }}
          className=" grid grid-cols-2 lg:grid-cols-3 gap-5  sm:gap-7 "
        >
          {serviceContent.map((service, i) => {
            return (
              <motion.div
                key={i}
                className=" relative flex justify-between flex-col bg-[#f5f5f5] px-5 py-7 rounded-3xl"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-straighthub relative p-3  w-[70px] rounded-[50%]">
                  <img
                    src={service.icon}
                    alt={service.name}
                    className="w-full"
                  />
                </div>
                <h2 className="font-bold mt-5 text-base sm:text-2xl">
                  {" "}
                  {service.name}
                </h2>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
       <button className="px-8 py-3 block my-5 mx-auto font-bold bg-straighthub text-white rounded-lg hover:scale-105 transition transform">
          ابدا معنا
          </button>
    </section>
  );
};

export default Services;
