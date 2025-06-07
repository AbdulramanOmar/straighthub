import React from "react";

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { TiLocation } from "react-icons/ti";
import { serviceContent } from "./Services";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6"> STRAIGHT HUP</h3>
            <p className="mb-6 text-white/80">
              "ستريت هب"، نفتح لك التحديات الواقعية من مشاريع وطنية، ونعطيك
              المجال لتشارك بحلك. كل شيء يبدأ من فكرة
            </p>
            <div className="flex gap-3">
              <SocialIcon icon={<FaFacebook className="w-5 h-5" />} />
              <SocialIcon icon={<FaTwitter className="w-5 h-5" />} />
              <SocialIcon icon={<FaInstagram className="w-5 h-5" />} />
              <SocialIcon icon={<FaLinkedin className="w-5 h-5" />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">روابط سريعة</h3>
            <ul className="space-y-3">
              <li>
                <FooterLink href="#about">من نحن</FooterLink>
              </li>
              <li>
                <FooterLink href="#services">خدماتنا</FooterLink>
              </li>
              <li>
                <FooterLink href="#sector"> المجالات</FooterLink>
              </li>
              <li>
                <FooterLink href="#training"> البرنامج التدربي</FooterLink>
              </li>

              <li>
                <FooterLink href="#contact">اتصل بنا</FooterLink>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">خدماتنا</h3>
            <ul className="space-y-3">
              {serviceContent.map((service, index) => (
                <li key={index}>
                  <FooterLink href="#services">{service.name}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">معلومات التواصل</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FaPhone className="w-5 h-5 ml-3" />
                <span>
                  {" "}
                  <a
                    href="tel:+966561264385"
                    className="hover:underline "
                  >
                    +966561264385
                  </a>{" "}
                </span>
              </li>
              <li className="flex items-center">
                <IoMdMail className="w-5 h-5 ml-3" />
                <span>
                  {" "}
                  <a
                    href="mailto:Info@straighthup.com"
                    className="hover:underline "
                  >
                    Info@straighthup.com
                  </a>
                </span>
              </li>
              <li className="flex items-start">
                <TiLocation className="w-5 h-5 ml-3 mt-1" />
                <span>المملكة العربية السعودية.. مكة المكرمة </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 mb-4 md:mb-0">
            © {new Date().getFullYear()} STRAIGHT HUP . جميع الحقوق محفوظة
          </p>
          <div className="flex gap-4">
            <FooterSmallLink href="#">سياسة الخصوصية</FooterSmallLink>
            <FooterSmallLink href="#">الشروط والأحكام</FooterSmallLink>
            <FooterSmallLink href="#">سياسة ملفات الارتباط</FooterSmallLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <a
    href={href}
    className="text-white/80 hover:text-white transition-colors duration-300 block"
  >
    {children}
  </a>
);

const FooterSmallLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <a
    href={href}
    className="text-white/70 hover:text-white text-sm transition-colors duration-300"
  >
    {children}
  </a>
);

interface SocialIconProps {
  icon: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon }) => (
  <a
    href="#"
    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
  >
    {icon}
  </a>
);

export default Footer;
