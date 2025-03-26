"use client";

import React, { useState } from "react";
import PersonalInfo from "./personal-info";
import Education from "./education";
import Experience from "./experience";




const steps = ["personal-info", "education", "experience", "upload-docs"];

export default function StepsPage() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const nextStep = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  const renderStep = () => {
    switch (steps[currentStepIndex]) {
      case "personal-info":
        return <PersonalInfo onNext={function (): void {
         
        } } />;
      case "education":
        return <Education />;
      case "experience":
        return <Experience />;
      
      default:
        return null;
    }
  };

  return (
    <div className="max-w-lg mx-auto p-10 bg-white shadow-lg rounded-md">
      <div className="text-center mb-4">
        <h2 className="text-xl font-semibold">Adım {currentStepIndex + 1} / {steps.length}</h2>
      </div>
      
      <div className="mb-4">{renderStep()}</div>
      
      <div className="flex justify-between">
        <button 
          onClick={prevStep} 
          disabled={currentStepIndex === 0} 
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Geri
        </button>
        <button 
          onClick={nextStep} 
          disabled={currentStepIndex === steps.length - 1} 
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          İleri
        </button>
      </div>
    </div>
  );
}
