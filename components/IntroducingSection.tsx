// *********************
// Role of the component: IntroducingSection with the text "Introducing LUMESBD"
// Name of the component: IntroducingSection.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <IntroducingSection />
// Input parameters: no input parameters
// Output: Section with the text "Introducing LUMESBD" and button
// *********************

import Link from "next/link";
import React from "react";

const IntroducingSection = () => {
  return (
    <div className="py-20 pt-24 bg-gradient-to-l from-white to-blue-600">
      <div className="text-center flex flex-col gap-y-5 items-center">
        <h2 className="text-white text-8xl font-extrabold text-center mb-2 max-md:text-6xl max-[480px]:text-4xl">
          INTRODUCING <span className="text-black">LUMESBD</span><span className="text-blue-600"></span>
        </h2>
        <p className="text-white text-center text-xl font-semibold max-md:text-lg max-[480px]:text-base">লুমেস</p>
        <div>
          <p className="text-white text-center text-2xl font-semibold max-md:text-xl max-[480px]:text-base">
            Premium Jerseys & Modern Fashion Wear for Men & Women ⚽👕✨
          </p>
          <p className="text-white text-center text-2xl font-semibold max-md:text-xl max-[480px]:text-base">
            Light Up Your Style
          </p>
          <p className="text-white text-center text-lg font-semibold max-md:text-base max-[480px]:text-sm">
            Quality | Comfort | Trend · Delivery All Over Bangladesh
          </p>
          <Link href="/shop" className="block text-blue-600 bg-white font-bold px-12 py-3 text-xl hover:bg-gray-100 w-96 mt-2  max-md:text-lg max-md:w-72 max-[480px]:w-60 mx-auto">
            SHOP NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IntroducingSection;
