import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Import certificate images
import cert1 from "../../assets/threats_and_vulnerabilities.png";
import cert2 from "../../assets/Coursera ZVMK8QAJ4XSR.png";
import cert3 from "../../assets/detection an response.png";
import cert4 from "../../assets/foundations of cybersecurity.png";
import cert5 from "../../assets/networks and network.png";
import cert6 from "../../assets/put it to work.png";
import cert7 from "../../assets/tools and trade linux and Sql.png";
import cert8 from "../../assets/manage securirt risk.png";
import cert9 from "../../assets/Coursera ZVMK8QAJ4XSR_page-0001.jpg";

// Store all certificates in an array
const certificates = [
  { src: cert1, title: "Threats and Vulnerabilities" },
  { src: cert2, title: "Coursera Certificate" },
  { src: cert3, title: "Detection and Response" },
  { src: cert4, title: "Foundations of Cybersecurity" },
  { src: cert5, title: "Networks and Networking" },
  { src: cert6, title: "Put It to Work" },
  { src: cert7, title: "Tools and Trade: Linux & SQL" },
  { src: cert8, title: "Managing Security Risks" },
  { src: cert9, title: "Coursera Certificate Page 1" },
];

export const Certificates = () => {
  const [viewAll, setViewAll] = useState(false);

  return (
    <section id="certificates" className="min-h-screen flex flex-col items-center justify-center py-20 bg-gray-900">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            My Certificates
          </h2>

          {/* Toggle between Swiper Carousel and Grid View */}
          {!viewAll ? (
            <>
              {/* Swiper Carousel */}
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="w-full"
              >
                {certificates.map((cert, index) => (
                  <SwiperSlide key={index} className="flex justify-center">
                    <div className="w-80 p-4 bg-gray-800 rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:shadow-xl">
                      <img
                        src={cert.src}
                        alt={cert.title}
                        className="w-full h-56 object-cover rounded-md"
                        loading="lazy"
                      />
                      <h3 className="text-lg font-semibold mt-3 text-white text-center">{cert.title}</h3>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="flex justify-center mt-6">
             <button
               onClick={() => setViewAll(true)}
               className="px-6 py-3 font-semibold rounded-lg transition duration-300 border border-cyan-400 
               bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text 
               hover:bg-blue-500 hover:text-white"
                  >
                   View All
                </button>
                 </div>
            </>
          ) : (
            <>
              {/* Grid Layout for View All */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 animate-fadeIn">
                {certificates.map((cert, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-800 rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:shadow-xl"
                  >
                    <img
                      src={cert.src}
                      alt={cert.title}
                      className="w-full h-56 object-cover rounded-md"
                      loading="lazy"
                    />
                    <h3 className="text-lg font-semibold mt-3 text-white text-center">{cert.title}</h3>
                  </div>
                ))}
              </div>

              {/* Back to Carousel Button */}
              <div className="flex justify-center mt-6">
  <button
    onClick={() => setViewAll(false)}
    className="px-6 py-3 font-semibold rounded-lg transition duration-300 border border-cyan-400 
               bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text 
               hover:bg-blue-500 hover:text-white"
  >
    Back to Slider
  </button>
</div>
            </>
          )}
        </div>
      </RevealOnScroll>
    </section>
  );
};
