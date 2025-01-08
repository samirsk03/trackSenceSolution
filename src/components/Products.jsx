import React from 'react';
import Dextend from "../assets/product/3DExtend.jpg"
import Dmini from "../assets/product/3DMini.jpg"
import Dpro2 from "../assets/product/3DPro2_Variant.jpg"
import centroid from "../assets/product/Centroid.jpg"
import centroidOutdoor from "../assets/product/CentroidOutdoor.jpg"
import picture5DPro from "../assets/product/Profile-picture-5D-Pro_lg.png"
import proWave from "../assets/product/ProWave.jpg"
import { Waves } from 'lucide-react';

// const products = [
//   {
//     name: "FootfallCam People Counter",
//     description: "Advanced people counting solution for retail analytics",
//     points: [
//       "99% accuracy",
//       "Real-time data",
//       "Cloud-based dashboard"
//     ],
//     price: 29999,
//     image: "/images/products/footfallcam-counter.webp"
//   },
//   {
//     name: "HD CCTV Camera",
//     description: "High-definition surveillance for crystal clear footage",
//     points: [
//       "1080p resolution",
//       "Night vision",
//       "Weather-resistant"
//     ],
//     price: 4999,
//     image: "/images/products/hd-cctv-camera.webp"
//   },
//   {
//     name: "4K DVR System",
//     description: "Advanced digital video recording with 4K resolution",
//     points: [
//       "8-channel recording",
//       "1TB storage",
//       "Remote access"
//     ],
//     price: 12999,
//     image: "/images/products/4k-dvr-system.webp"
//   },
//   {
//     name: "Wireless IP Camera",
//     description: "Wi-Fi enabled camera with remote viewing capabilities",
//     points: [
//       "Easy setup",
//       "Two-way audio",
//       "Motion detection"
//     ],
//     price: 6999,
//     image: "/images/products/wireless-ip-camera.webp"
//   },
//   {
//     name: "PTZ Camera",
//     description: "Pan-Tilt-Zoom camera for flexible surveillance",
//     points: [
//       "360° rotation",
//       "20x optical zoom",
//       "Auto-tracking"
//     ],
//     price: 8999,
//     image: "/images/products/ptz-camera.webp"
//   },
//   {
//     name: "Thermal Camera",
//     description: "Detect heat signatures for enhanced security",
//     points: [
//       "Temperature detection",
//       "Long-range visibility",
//       "Fire detection"
//     ],
//     price: 29999,
//     image: "/images/products/thermal-camera.webp"
//   },
//   {
//     name: "License Plate Recognition Camera",
//     description: "Automatically capture and log vehicle license plates",
//     points: [
//       "High-speed capture",
//       "AI-powered recognition",
//       "Database integration"
//     ],
//     price: 15999,
//     image: "/images/products/lpr-camera.webp"
//   },
//   {
//     name: "Covert Camera",
//     description: "Discreet surveillance for sensitive areas",
//     points: [
//       "Pinhole lens",
//       "HD resolution",
//       "Wide viewing angle"
//     ],
//     price: 7999,
//     image: "/images/products/covert-camera.webp"
//   }
// ];
const products = [
  {
    title: "5D Pro",
    desc: "5-dimensional people counter with advanced vision and AI technology.",
    keyPoints: [
      "5-Dimensional Vision: 3D Stereo Vision, Time-of-Flight, and A.I.",
      "Accuracy of 99.5% in all environments",
      "Ceiling height: 2.1m-4.5m",
      "Suitable for Retail and Shopping Malls"
    ],
    img: picture5DPro
  },
  {
    title: "3D Mini",
    desc: "Compact and cost-effective people counter with Time-of-Flight technology.",
    keyPoints: [
      "Time-of-Flight (ToF) Sensor",
      "Cost Effective",
      "Ceiling height: 1.9m-3m",
      "Total Privacy - No camera",
      "Suitable for Meeting Rooms and Washrooms"
    ],
    img: Dmini
  },
  {
    title: "3D Extend",
    desc: "High-ceiling people counter with 3D Stereo Vision and AI.",
    keyPoints: [
      "3D Stereo Vision and A.I.",
      "Ceiling height: 4.5m-20m",
      "Suitable for high ceiling in Airports and Shopping Malls"
    ],
    img: Dextend
  },
  {
    title: "3D Pro2",
    desc: "Wide coverage and high-accuracy people counter.",
    keyPoints: [
      "3D Stereo Vision and A.I. Analytics",
      "Best selling people counter in 2020",
      "Wide coverage area up to 8m",
      "Ceiling height: 2.5m-4.5m",
      "Suitable for Retail and Shopping Malls"
    ],
    img: Dpro2
  },
  {
    title: "3D ProWave",
    desc: "Millimeter wave sensor people counter with total privacy.",
    keyPoints: [
      "Millimeter Wave Sensor",
      "120° super wide coverage",
      "Can count people in sitting position",
      "Total Privacy - No camera",
      "Suitable for office collaboration areas"
    ],
    img: proWave
  },
  {
    title: "Centroid",
    desc: "Embedded AI solution with skeleton tracking and facial recognition.",
    keyPoints: [
      "Embedded A.I.- Skeleton Tracking and Facial Recognition",
      "Supports 8x CCTV cameras",
      "Compatible with any IP CCTV camera",
      "Suitable for Retail and Shopping Malls"
    ],
    img: centroid
  },
  {
    title: "Centroid Outdoor",
    desc: "Embedded AI solution with skeleton tracking and facial recognition.",
    keyPoints: [
      "Embedded A.I.- Skeleton Tracking and Facial Recognition",
      "Supports 8x CCTV cameras",
      "Compatible with any IP CCTV camera",
      "Suitable for Retail and Shopping Malls"
    ],
    img: centroidOutdoor
  }
];



export default function Products() {
  return (
    <section id="products" className="py-24 sm:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">Our Products</h2>
          <p className="text-secondary text-xl sm:text-2xl max-w-4xl mx-auto">
            Explore our range of high-quality people counting and IT solutions 
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-72 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl text-blue-600 font-bold mb-4">{product.title}</h3>
                <p className="text-secondary mb-6 text-lg">{product.desc}</p>
                <ul className="mb-6 text-lg">
                  {product.keyPoints.map((point, i) => (
                    <li key={i} className="flex items-center mb-3">
                      <svg className="w-6 h-6 mr-3 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}





