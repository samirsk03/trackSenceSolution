import React from "react";
import Dextend from "../assets/product/3DExtend.jpg";
import Dmini from "../assets/product/3DMini.jpg";
import Dpro2 from "../assets/product/3DPro2_Variant.jpg";
import centroid from "../assets/product/Centroid.jpg";
import centroidOutdoor from "../assets/product/CentroidOutdoor.jpg";
import picture5DPro from "../assets/product/Profile-picture-5D-Pro_lg.png";
import proWave from "../assets/product/ProWave.jpg";
import { Waves } from "lucide-react";

const products = [
  {
    title: "5D Pro",
    desc: "A high-accuracy people counter using 5-dimensional vision, including 3D Stereo Vision, Time-of-Flight, and AI.",
    keypoints: [
      "Accuracy: 99.5% in all environments.",
      "Ceiling Height: 2.1m-4.5m.",
      "Suitable for Retail and Shopping Malls.",
    ],
    img: picture5DPro,
  },
  {
    title: "3D Mini",
    desc: "A cost-effective people counter using Time-of-Flight (ToF) sensors.",
    keypoints: [
      "Ceiling Height: 1.9m-3m.",
      "Total Privacy - No camera.",
      "Suitable for Meeting Rooms and Washrooms.",
    ],
    img: Dmini,
  },
  {
    title: "3D Extend",
    desc: "People counter with 3D Stereo Vision and AI for high-ceiling areas.",
    keypoints: [
      "Ceiling Height: 4.5m-20m.",
      "Suitable for high ceilings in Airports and Shopping Malls.",
    ],
    img: Dextend,
  },
  {
    title: "3D Pro2",
    desc: "Best-selling 3D Stereo Vision people counter with wide coverage.",
    keypoints: [
      "Wide Coverage Area: Up to 8m.",
      "Ceiling Height: 2.5m-4.5m.",
      "Suitable for Retail and Shopping Malls.",
    ],
    img: Dpro2,
  },
  {
    title: "3D ProWave",
    desc: "Millimeter wave sensor for advanced people counting.",
    keypoints: [
      "120° super wide coverage.",
      "Can count people in a sitting position.",
      "Total Privacy - No camera.",
      "Suitable for office collaboration areas.",
    ],
    img: proWave,
  },
];

const products1 = [
  {
    title: "Centroid",
    desc: "Embedded AI for skeleton tracking and facial recognition.",
    keypoints: [
      "Supports 8x CCTV cameras.",
      "Compatible with any IP CCTV camera.",
      "Suitable for Retail and Shopping Malls.",
    ],
    img: centroid,
  },
  {
    title: "Centroid Outdoor",
    desc: "Outdoor AI-based skeleton tracking with weatherproof design.",
    keypoints: [
      "Optional 4G or LoRa connectivity.",
      "Compatible with any IP CCTV camera.",
      "Suitable for Street Counting.",
    ],
    img: centroidOutdoor,
  },
  {
    title: "Smart Bus Controller",
    desc: "GPS-enabled controller for bus occupancy tracking.",
    keypoints: [
      "Real-time processing data.",
      "Multiple connectivity options.",
      "Suitable for Bus Occupancy.",
    ],
    img: Dmini,
  },
];

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/FootfallCam-Product-Catalogue.pdf"; // Path to the PDF in the public folder
  link.download = "FootfallCam-Product-Catalogue.pdf"; // Name for the downloaded file
  link.click();
};

export default function Products() {
  return (
    <section id="products" className="py-24 sm:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
            Our Products
          </h2>
          <p className="text-secondary text-xl sm:text-2xl max-w-4xl mx-auto">
            Explore our range of high-quality people counting and IT solutions
          </p>
        </div>

        <h3 className="p-8 text-2xl text-blue-600 font-bold mb-4">
          People Counter
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-72 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl text-blue-600 font-bold mb-4">
                  {product.title}
                </h3>
                <p className="text-secondary mb-6 text-lg">{product.desc}</p>
                <ul className="mb-6 text-lg">
                  {product.keypoints.map((point, i) => (
                    <li key={i} className="flex items-center mb-3">
                      <svg
                        className="w-6 h-6 mr-3 text-green-500"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
                <button
                onClick={handleDownload}
                className="bg-blue-600 text-white absolute inset-x-8 bottom-3  px-4 py-2 rounded-md hover:bg-blue-900 transition-colors duration-200 text-sm">
                    Download Catalogue
                  </button>
              </div>
            </div>
          ))}
        </div>
        <br />
        <br />
        <br />
        <h3 className="text-2xl p-8 text-blue-600 font-bold mb-4">
          AI Analytics
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {products1.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-72 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl text-blue-600 font-bold mb-4">
                  {product.title}
                </h3>
                <p className="text-secondary mb-6 text-lg">{product.desc}</p>
                <ul className="mb-6 text-lg">
                  {product.keypoints.map((point, i) => (
                    <li key={i} className="flex items-center mb-3">
                      <svg
                        className="w-6 h-6 mr-3 text-green-500"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
                <button
                onClick={handleDownload}
                className="bg-blue-600 text-white absolute inset-x-8 bottom-3  px-4 py-2 rounded-md hover:bg-blue-900 transition-colors duration-200 text-sm">
                    Download Catalogue
                  </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
