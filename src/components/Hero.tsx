import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { LuBrainCircuit } from "react-icons/lu";
import { TbCloudComputing } from "react-icons/tb";
import { RiLightbulbLine } from "react-icons/ri";
const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas to full width and height
    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Particles system
    const particles: Particle[] = [];
    const particleCount = Math.floor(canvas.width / 10); // Responsive particle count

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 2 + 0.8;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.color = `rgba(202, 122 ,61 ,  ${Math.random() * 0.5 + 0.1})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off edges
        if (this.x > canvas!.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y > canvas!.height || this.y < 0) {
          this.speedY = -this.speedY;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Connect particles with lines if they're close
    function connectParticles() {
      if (!ctx) return;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            // Line opacity based on distance
            const opacity = 1 - distance / 100;
            ctx.strokeStyle = `rgba(202, 122 ,61, ${opacity * 0.3})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    // Animation loop
    const animate = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      connectParticles();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);
  return (
    <section className="relative h-screen flex items-center justify-center  overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />

      <div className="container  relative z-10 text-center ">
        <motion.h1
          className="text-4xl md:text-6xl font-black mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-straighthub">فكرتك.. </span> ممكن تبني مستقبل
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl mb-8 text-[#777]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          حيث تلتقي التقنيات الحديثة بالحلول الذكية، وتُصنع الفرص العظيمة.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row gap-4 justify-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <button className="px-8 py-3 font-bold bg-straighthub text-white rounded-lg hover:scale-105 transition transform">
            شاركنا الان
          </button>
          <button className="px-8 py-3 font-bold border border-straighthub text-straighthub rounded-lg transition">
            تواصل معنا
          </button>
        </motion.div>

        <motion.div
          className="flex items-center  lg:flex-nowrap flex-wrap justify-center  gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="flex items-center gap-2">
            <div className="p-3 bg-straighthub/10 rounded-full">
              <LuBrainCircuit className="text-straighthub text-3xl " />
            </div>
            <div>
              <h3 className="font-bold text-lg text-right">
                {" "}
                حلول الذكاء الاصطناعي
              </h3>
              <p className="text-sm text-gray-400  text-right">
                نحو مستقبل رقمي أكثر ذكاءً
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="p-3 bg-straighthub/10 rounded-full">
              <TbCloudComputing className="text-straighthub text-3xl " />
            </div>
            <div>
              <h3 className="font-bold text-lg text-right">
                {" "}
                بنية تحتية سحابية
              </h3>
              <p className="text-sm text-gray-400  text-right">خدمات سحابية مرنة وآمنة</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="p-3 bg-straighthub/10 rounded-full">
              <RiLightbulbLine className="text-straighthub text-3xl " />
            </div>
            <div>
              <h3 className="font-bold text-lg text-right">
                {" "}
                استشارات استراتيجية تقنية
              </h3>
              <p className="text-sm text-gray-400  text-right">
                نوجهك نحو اتخاذ قرارات تقنية ناجحة
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
