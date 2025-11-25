// import React, { useRef, useEffect, useState } from 'react';
// import { Bot, Utensils, Car, Lightbulb } from 'lucide-react';

// export default function ServicesSection() {
//   const trackRef = useRef(null);
//   const [isHovered, setIsHovered] = useState(false);

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

//   // Duplicate list multiple times for seamless looping
//   const loopList = [...productList, ...productList, ...productList, ...productList];

//   useEffect(() => {
//     const track = trackRef.current;
//     if (!track) return;

//     let pos = 0;
//     let baseSpeed = 0.25; // Normal scroll speed
//     let speed = baseSpeed;
//     let animationFrame;

//     const animate = () => {
//       pos -= speed;
//       if (Math.abs(pos) >= track.scrollWidth / 2) pos = 0;
//       track.style.transform = `translateX(${pos}px)`;
//       animationFrame = requestAnimationFrame(animate);
//     };

//     const handleHover = (hovered) => {
//       if (hovered) {
//         // Smoothly slow down on hover
//         const slowDown = () => {
//           if (speed > 0.05) {
//             speed -= 0.01;
//             requestAnimationFrame(slowDown);
//           }
//         };
//         slowDown();
//       } else {
//         // Smoothly restore speed when not hovered
//         const speedUp = () => {
//           if (speed < baseSpeed) {
//             speed += 0.01;
//             requestAnimationFrame(speedUp);
//           }
//         };
//         speedUp();
//       }
//     };

//     animate();

//     track.addEventListener('mouseenter', () => handleHover(true));
//     track.addEventListener('mouseleave', () => handleHover(false));

//     return () => {
//       cancelAnimationFrame(animationFrame);
//       track.removeEventListener('mouseenter', () => handleHover(true));
//       track.removeEventListener('mouseleave', () => handleHover(false));
//     };
//   }, []);

//   return (
//     <section className="services section-divider" id="apps" data-aos="fade-up">
//       <h2 style={{ textAlign: 'center' }}>Upcoming AI Products</h2>
//       <p className="section-subtitle" style={{ textAlign: 'center' }}>
//         Our proprietary apps are in development. Join the waitlist or inquire about pilot programs.
//       </p>

//       <div 
//         className="carousel-wrapper"
//       >
//         <div 
//           className="carousel-track" 
//           ref={trackRef}
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           {loopList.map((product, i) => (
//             <div className="product-card" key={i}>
//               {product.title !== 'Traffic AI' && (
//                 <span className="product-badge">
//                   {product.title === 'Future AI Solutions' ? 'In Research' : 'Coming Soon'}
//                 </span>
//               )}
//               {product.title === 'Traffic AI' && (
//                 <span className="product-badge pilot-badge">Pilot Program Available</span>
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
import { Bot, Utensils, Car, Lightbulb, Camera, Globe, Sparkles } from 'lucide-react';

export default function ServicesSection() {
  const trackRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // REVISED productList with general technology descriptions
  const productList = [
    { 
      title: 'Generative AI Solutions', 
      icon: Sparkles, // Using Sparkles for GenAI
      desc: 'Developing cutting-edge applications using Large Language Models and Diffusion Models for content creation, intelligent automation, and personalized experiences. Launching Q4 2025.'
    },
    { 
      title: 'Image Recognition & CV', 
      icon: Camera, // Using Camera for Computer Vision/Image Recognition
      desc: 'Advanced computer vision systems for real-time object detection, facial recognition, and comprehensive image and video content analysis for various industries. Available for Pilot Programs now.'
    },
    { 
      title: 'AR/VR App Development', 
      icon: Globe, // Using Globe for AR/VR/Spatial computing
      desc: 'Building immersive augmented and virtual reality applications for training, visualization, and interactive consumer experiences across multiple platforms. Launching Q1 2026.'
    },
    { 
      title: 'Future AI & Research', 
      icon: Lightbulb, 
      desc: 'Our innovation pipeline focuses on next-generation AI technologies, including quantum machine learning and neuro-symbolic AI. Get early access to new research programs.' 
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
      // The track width needs to be calculated dynamically, but using scrollWidth / 2 is correct for looping 2 copies
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

    // Use the refs and state for hover events which is more React idiomatic
    // Note: The original code attached listeners directly inside useEffect, which is also valid, 
    // but using the onMouseEnter/onMouseLeave props on the div is generally cleaner in React.
    // However, since the animation logic relies on the speed variable within the closure, 
    // we'll stick to the original event listener approach and ensure the cleanup is correct.

    // Let's modify to use the state change from the return block for cleaner logic
    const handleMouseEnter = () => handleHover(true);
    const handleMouseLeave = () => handleHover(false);

    track.addEventListener('mouseenter', handleMouseEnter);
    track.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrame);
      // Ensure the *exact* same functions are removed
      track.removeEventListener('mouseenter', handleMouseEnter);
      track.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <section className="services section-divider" id="apps" data-aos="fade-up">
      <h2 style={{ textAlign: 'center' }}>Core AI Technology Focus</h2>
      <p className="section-subtitle" style={{ textAlign: 'center' }}>
        We specialize in developing full-stack solutions built on these key technological pillars.
      </p>

      <div 
        className="carousel-wrapper"
      >
        <div 
          className="carousel-track" 
          ref={trackRef}
          // The onMouseEnter/onMouseLeave props on the div are kept for state tracking if needed elsewhere, 
          // but the animation speed control is handled by the useEffect event listeners for smoother integration.
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)}
        >
          {loopList.map((product, i) => (
            <div className="product-card" key={i}>
              {/* Conditional badge logic updated based on new product titles */}
              {product.title !== 'Image Recognition & CV' && (
                <span className="product-badge">
                  {product.title === 'Future AI & Research' ? 'In Research' : 'Focus Area'}
                </span>
              )}
              {product.title === 'Image Recognition & CV' && (
                <span className="product-badge pilot-badge">Industry Solutions Available</span>
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