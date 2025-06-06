
import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { TiLocation } from "react-icons/ti";
import { LuSend } from "react-icons/lu";
const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-gradient-to-t from-royal/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-gradient-to-b from-emerald/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">
            تواصل معنا
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            نحن هنا للإجابة على استفساراتك وتقديم الدعم والمساعدة في أي وقت
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-xl p-8 card-glow">
            <h3 className="text-2xl font-bold mb-6 text-straighthub">
              معلومات التواصل
            </h3>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="p-3 bg-straighthub/10 rounded-full ml-4">
                  <FaPhone className="w-6 h-6 text-straighthub" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">اتصل بنا</h4>
                  <p className="text-gray-600 mb-1">+966 123 456 7890</p>
                  <p className="text-gray-600">+966 123 456 7891</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-straighthub/10 rounded-full ml-4">
                  <IoMdMail className="w-6 h-6 text-straighthub" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">البريد الإلكتروني</h4>
                  <p className="text-gray-600 mb-1">
                    info@straighthub.com
                  </p>
                  <p className="text-gray-600">support@straighthub.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-straighthub/10 rounded-full ml-4">
                  <TiLocation className="w-6 h-6 text-straighthub" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">المقر الرئيسي</h4>
                  <p className="text-gray-600">
                    طريق الملك فهد، برج الأعمال، الطابق 25
                  </p>
                  <p className="text-gray-600">
                    الرياض، المملكة العربية السعودية
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t">
              <h4 className="font-bold mb-4">ساعات العمل</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-medium">أيام الأسبوع:</p>
                  <p className="text-gray-600">8:00 صباحاً - 6:00 مساءً</p>
                </div>
                <div>
                  <p className="font-medium">السبت:</p>
                  <p className="text-gray-600">9:00 صباحاً - 3:00 مساءً</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 card-glow">
            <h3 className="text-2xl font-bold mb-6 text-straighthub">
              أرسل رسالة
            </h3>

            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    الاسم
                  </label>
                  <input
                    id="name"
                    placeholder="الاسم الكامل"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-straighthub"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    البريد الإلكتروني
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-straighthub"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  الموضوع
                </label>
                
                <input id="subject" placeholder="موضوع الرسالة" required 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-straighthub"
                
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  الرسالة
                </label>
                <textarea
                  id="message"
                  placeholder="اكتب رسالتك هنا..."
                  rows={5}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-straighthub"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-straighthub   items-center gap-5 flex justify-center text-white font-bold rounded-lg shadow-lg hover:bg-straighthub/90 transition-colors duration-300 group"
              >
                إرسال الرسالة
                <LuSend className="mr-2 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
