"use client";

import React from "react";
import { motion } from "framer-motion";

const PlansPricing: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
        Plans & Pricing
      </h1>
      <div className="grid md:grid-cols-2 gap-6">
        <PricingCard
          title="eBACC"
          tuitionFee="9999$"
          digitalResources="499$"
          features={["Abozada 1", "Abozada 2", "Abozada 3", "Abozada 4"]}
        />
        <PricingCard
          title="eBACC+"
          tuitionFee="$19999"
          digitalResources="999$"
          features={[
            "Abozada 1",
            "Abozada 2",
            "Abozada 3",
            "Abozada 4",
            "Abozada 5",
            "Abozada 6",
          ]}
        />
      </div>
    </div>
  );
};

interface PricingCardProps {
  title: string;
  tuitionFee: string;
  digitalResources: string;
  features: string[];
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  tuitionFee,
  digitalResources,
  features,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white p-8 shadow-xl rounded-lg hover:shadow-2xl transition flex flex-col"
  >
    <h2 className="font-bold text-xl mb-4">{title}</h2>
    {/* <div className="flex flex-col mb-6">
      <div className="text-2xl font-semibold text-gray-800 mb-2">
        Tuition Fees: {tuitionFee}
      </div>
      <div className="text-2xl font-semibold text-gray-800">
        Digital Resources: {digitalResources}
      </div>
    </div> */}
    <ul className="mb-6">
      {features.map((feature, index) => (
        <li key={index} className="text-gray-600 mb-2 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 mr-2 text-green-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          {feature}
        </li>
      ))}
    </ul>
    <div className="flex flex-col gap">
      <div className="text-2xl font-semibold text-gray-800 mb-2">
        Tuition Fees: {tuitionFee}
      </div>
      <div className="text-2xl font-semibold text-gray-800">
        Digital Resources: {digitalResources}
      </div>
    </div>
  </motion.div>
);

export default PlansPricing;
