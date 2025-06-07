import { motion } from "framer-motion";


type TitleProps = {
  title: string;
  subtitle: string;
};

const Title = ({ title, subtitle }: TitleProps) => {
  const subtitleLetters = subtitle.split("");

  return (
    <div className="text-center mb-10">
      <h3 className="lg:text-4xl text-3xl font-bold mb-5">
        <span className="relative z-10 inline-block">
        -  {title} -

          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute h-1/3 rounded-full bg-straighthub right-0 bottom-0 -z-10"
          ></motion.span>
        </span>
      </h3>

      {/* Subtitle with letter-by-letter animation */}
      <h4 className="lg:text-lg text-sm font-medium relative z-20">
      ”
        {subtitleLetters.map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.05,
              delay: index * 0.04,
            }}
            viewport={{ once: true }}
          >
            {char}
          </motion.span>
        ))}
        
        “
      </h4>
    </div>
  );
};

export default Title;
