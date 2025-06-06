import { motion } from "framer-motion";
const stats = [
  {
    label: "الشركات",
    count: 16,
  },
  {
    label: " مبتكرين",
    count: 19,
  },
  {
    label: "براءات اختراع",
    count: 9,
  },
];

const AboutUs = () => {
  return (
    <div>
      <section className="py-10 " id="about">
        <div className="container mx-auto px-4">
          <div className=" flex flex-col lg:flex-row items-center gap-10">
            {/* النص */}
            <div className="lg:w-1/2 text-center lg:text-right">
              <h2 className="text-[27px] sm:text-[44px] font-extrabold ">
                <span className="relative z-10">
                  منصة وحدة تجمعك بالتحدي..
                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.4, ease: "easeInOut" }}
                    className="absolute h-1/3 rounded-full bg-straighthub right-0 bottom-1 -z-10"
                  ></motion.span>
                </span>
              </h2>
              <div className="flex items-center gap-5 justify-center lg:justify-start ">
                <span className=" inline-block text-straighthub text-[27px] sm:text-[44px] font-extrabold  relative z-10">
                  وتوصلك للحل
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="977"
                    height="88"
                    viewBox="0 0 977 88"
                    className="absolute -bottom-3 right-3 w-[90%]  h-auto"
                    fill="none"
                  >
                    <path
                      d="M50.8204 20.0555C13.3545 46.3605 5.61884 50.4506 0.017324 59.7959C0.0173169 63.5154 -0.373476 64.1027 2.55748 67.8223C26.6872 51.3301 57.8547 28.0818 70.3601 33.9548C82.8654 39.8278 89.1181 90.4659 116.474 86.8116C135.427 84.2797 130.347 68.0181 170.208 37.2828C181.736 68.8011 202.057 71.713 214.563 59.2086C218.478 55.2933 228.215 47.4968 236.056 39.0447C240.399 62.7355 258.527 70.7588 269.078 62.7324C278.668 55.4378 287.25 45.3092 300.537 37.2828C335.318 81.3301 327.893 54.9018 377.328 32.3887C409.959 96.5998 434.579 49.4203 472.682 33.3675C509.612 98.3617 531.301 56.2721 568.817 33.3675C588.943 84.4624 607.114 50.0076 643.263 28.2776C687.813 75.6529 696.02 41.3939 735.294 26.7115C767.144 86.8116 781.408 28.0819 823.614 29.8438C840.222 60.9705 859.846 55.0328 893.761 30.6268C893.761 30.6268 900.662 41.399 909.784 42.9601C923.461 45.301 923.461 39.4363 947.495 28.0819C956.483 23.8355 962.409 20.3062 977 19.0766V5.37296C964.472 7.37539 953.748 6.58772 944.173 12.0291C920.228 25.6378 913.233 20.7002 908.611 13.3994C906.905 10.703 907.382 8.01302 905.876 5.37296C895.715 -12.4414 869.532 19.2723 845.889 24.9495C832.016 -8.33064 794.109 1.65353 759.914 25.9284C759.914 25.9284 750.535 5.55299 739.202 1.65355C719.858 -5.0024 702.077 11.4418 679.216 25.9284C668.85 32.4968 652.642 2.43656 641.504 2.43656C624.7 2.43656 590.506 31.8014 590.506 31.8014C590.506 31.8014 589.972 14.7138 579.173 8.30952C557.484 -4.55325 526.611 34.5421 509.612 41.5897C492.05 48.8703 498.865 19.6412 481.474 8.70105C464.084 -2.23906 418.361 39.0447 406.833 39.8278C399.989 40.2927 396.086 11.4418 382.213 8.30952C359.007 3.07022 323.008 34.5421 323.008 34.5421C323.008 34.5421 314.997 15.1613 300.537 11.4418C283.328 7.01475 258.527 36.4998 258.527 36.4998C258.527 36.4998 261.067 11.4418 244.263 6.54763C234.124 3.59469 193.851 40.8066 193.851 40.8066C193.851 40.8066 186.374 20.1962 173.334 13.2037C157.507 4.71681 124.68 50.2034 110.807 63.7112C102.622 71.6807 88.2863 -6.24959 50.8204 20.0555Z"
                      fill="#CA7A3D"
                    />
                  </svg>
                </span>
              </div>
              <p className="text-[#777] text-right font-medium text-lg my-5 leading-loose ">
                في "ستريت هب"، نفتح لك التحديات الواقعية من مشاريع وطنية، ونعطيك
                المجال لتشارك بحلك.
              </p>
              <div className="grid grid-cols-3 gap-5 text-center ">
                {stats.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center space-y-2"
                  >
                    <p className="text-5xl stroke-current font-bold text-straighthub ">
                      {item.count}+
                    </p>
                    <p className="text-lg font-bold text-gray-800">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* الصورة */}
            <div className="lg:w-[500px] mr-auto">
              <img src="/about.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
