// import React from 'react';
// import { Bot, Utensils, Car, Lightbulb } from 'lucide-react';

// export default function ServicesSection() {
//   const productList = [
//     { 
//       title: 'Food Scout', 
//       icon: Utensils, 
//       desc: 'AI-driven health check and comparison for food products. Scan, analyze, and choose healthier options instantly. Launching Q4 2025.'
//     },
//     { 
//       title: 'Photographer Buddy', 
//       icon: Bot, 
//       desc: 'Advanced image recognition to segregate photos by faces, detect venues, and assist in comprehensive photo management. Launching Q1 2026.'
//     },
//     { 
//       title: 'Traffic AI', 
//       icon: Car, 
//       desc: 'Indian vehicle object detection system for real-time monitoring of traffic flow and automated violation detection. Available for Pilot Programs now.'
//     },
//     { 
//       title: 'Future AI Solutions', 
//       icon: Lightbulb, 
//       desc: 'Our innovation pipeline is constantly running. Get early access to new, cutting-edge AI apps designed to solve complex real-world problems.' 
//     }
//   ];

//   // Duplicate items to create a seamless loop
//   const loopList = [...productList, ...productList, ...productList];

//   return (
//     <section className="services section-divider" id="apps" data-aos="fade-up">
//       <h2 style={{ textAlign: 'center' }}>Upcoming AI Products</h2>
//       <p className="section-subtitle" style={{ textAlign: 'center' }}>
//         Our proprietary apps are in development. Join the waitlist or inquire about pilot programs.
//       </p>

//       <div className="carousel-wrapper">
//         <div className="carousel-track">
//           {loopList.map((product, i) => (
//             <div className="product-card" key={i} data-aos="zoom-in">
//               {product.title !== 'Traffic AI' && (
//                 <span className="product-badge">
//                   {product.title === 'Future AI Solutions' ? 'In Research' : 'Coming Soon'}
//                 </span>
//               )}
//               {product.title === 'Traffic AI' && (
//                 <span className="product-badge pilot-badge">
//                   Pilot Program Available
//                 </span>
//               )}
//               <div className="icon-placeholder">
//                 <product.icon size={48} />
//               </div>
//               <h3>{product.title}</h3>
//               <p>{product.desc}</p>
//               <a className="btn-outline" href="#contact">Inquire Now</a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useRef, useEffect, useState } from 'react';
import { Bot, Utensils, Car, Lightbulb } from 'lucide-react';

export default function ServicesSection() {
  const trackRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const productList = [
    { 
      title: 'Food Scout', 
      icon: Utensils, 
      desc: 'AI-driven health check and comparison for food products. Scan, analyze, and choose healthier options instantly. Launching Q4 2025.'
    },
    { 
      title: 'Photographer Buddy', 
      icon: Bot, 
      desc: 'Advanced image recognition to segregate photos by faces, detect venues, and assist in comprehensive photo management. Launching Q1 2026.'
    },
    { 
      title: 'Traffic AI', 
      icon: Car, 
      desc: 'Indian vehicle object detection system for real-time monitoring of traffic flow and automated violation detection. Available for Pilot Programs now.'
    },
    { 
      title: 'Future AI Solutions', 
      icon: Lightbulb, 
      desc: 'Our innovation pipeline is constantly running. Get early access to new, cutting-edge AI apps designed to solve complex real-world problems.' 
    }
  ];

  // Duplicate list multiple times for seamless looping
  const loopList = [...productList, ...productList, ...productList, ...productList];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let pos = 0;
    let baseSpeed = 0.25; // Normal scroll speed
    let speed = baseSpeed;
    let animationFrame;

    const animate = () => {
      pos -= speed;
      if (Math.abs(pos) >= track.scrollWidth / 2) pos = 0;
      track.style.transform = `translateX(${pos}px)`;
      animationFrame = requestAnimationFrame(animate);
    };

    const handleHover = (hovered) => {
      if (hovered) {
        // Smoothly slow down on hover
        const slowDown = () => {
          if (speed > 0.05) {
            speed -= 0.01;
            requestAnimationFrame(slowDown);
          }
        };
        slowDown();
      } else {
        // Smoothly restore speed when not hovered
        const speedUp = () => {
          if (speed < baseSpeed) {
            speed += 0.01;
            requestAnimationFrame(speedUp);
          }
        };
        speedUp();
      }
    };

    animate();

    track.addEventListener('mouseenter', () => handleHover(true));
    track.addEventListener('mouseleave', () => handleHover(false));

    return () => {
      cancelAnimationFrame(animationFrame);
      track.removeEventListener('mouseenter', () => handleHover(true));
      track.removeEventListener('mouseleave', () => handleHover(false));
    };
  }, []);

  return (
    <section className="services section-divider" id="apps" data-aos="fade-up">
      <h2 style={{ textAlign: 'center' }}>Upcoming AI Products</h2>
      <p className="section-subtitle" style={{ textAlign: 'center' }}>
        Our proprietary apps are in development. Join the waitlist or inquire about pilot programs.
      </p>

      <div 
        className="carousel-wrapper"
      >
        <div 
          className="carousel-track" 
          ref={trackRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {loopList.map((product, i) => (
            <div className="product-card" key={i}>
              {product.title !== 'Traffic AI' && (
                <span className="product-badge">
                  {product.title === 'Future AI Solutions' ? 'In Research' : 'Coming Soon'}
                </span>
              )}
              {product.title === 'Traffic AI' && (
                <span className="product-badge pilot-badge">Pilot Program Available</span>
              )}
              <div className="icon-placeholder">
                <product.icon size={48} />
              </div>
              <h3>{product.title}</h3>
              <p>{product.desc}</p>
              <a className="btn-outline" href="#contact">Inquire Now</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
