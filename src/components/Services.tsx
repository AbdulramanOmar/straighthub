import { motion } from "framer-motion";
import Title from "./Title";
export const serviceContent = [
  {
    name: "تحقيق التحول الرقمي",
    des: "سنعمل معا على تقديم حلول مخصصة تدعم المشاريع الكبرى في التحول الرقمي، من خلال تزويدها بالابتكارات، وبراءات الاختراع",
    icon: "/service (5).png",
  },
  {
    name: " مواجهة التحديات الرقمية",
    des: "بالاعتماد على مجتمع متخصص، نسعى معًا لنصبح الجهة الرائدة في معالجة التحديات المتعلقة بالتحول الرقمي",
    icon: "/service (4).png",
  },
  {
    name: " بناء شراكات استراتيجية",
    des: "تطوير علاقات استراتيجية قوية تتيح للمنضمين داخل المجتمع استغلال الحلول التقنية الخاصة بهم والخدمات المبتكرة المقدمة من قبلهم",
    icon: "/service (3).png",
  },
  {
    name: "بنية تحتية رقمية",
    des: "بناء بنية تحتية رقمية متكاملة تشمل أنظمة وتقنيات وكوادر وتخصصات مختلفة تتيح استخدامها لتمكينكم من تنفيذ طروحاتكم الرقمية بكفاءة عالية.",
    icon: "/service (2).png",
  },
  {
    name: " تعزيز المشاركة المجتمعية",
    des: "بالتعاون معا، سنستخدم التكنولوجيا لتعزيز المشاركة في اتخاذ القرارات عبر أدوات تفاعلية ومنصات إلكترونية تعزز من تأثيركم المجتمعي لزيادة ثقة العملاء فيكم ",
    icon: "/service (1).png",
  },
  {
    name: " ابتكار عروض قيمة",
    des: "سنعمل على إعادة ابتكار العروض القيمة للجهات والمشاريع الكبرى، مما يمكن من دخول الاقتصاد الرقمي بفعالية، وتقديم ميزات تنافسية جديدة.",
    icon: "/service (6).png",
  },
];

const Services = () => {
  return (
    <section className="py-10 " id="services">
      <Title
        title="الخدمات"
        subtitle="عندك حل أو ابتكار مجموعة تعزز من أداء الجهات الكبرى والمشاريع الواعدة وتساعدها على التوسع بذكاء."
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
          className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-7 "
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
                <div className="bg-straighthub relative p-3  w-[90px] rounded-[50%]">
                  <img
                    src={service.icon}
                    alt={service.name}
                    className="w-full"
                  />
                </div>
                <h2 className="font-bold text-2xl"> {service.name}</h2>
                <p className="text-xl leading-8  text-[#777] my-3">
                  {" "}
                  {service.des}{" "}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
