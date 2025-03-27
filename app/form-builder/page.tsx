"use client";

import React, { useState } from "react";
import PersonalInfo from "./personal-info";
import Education from "./education";
import Experience from "./experience";
import UploadDocs from "./upload-doc";
import { Button } from "@/components/ui/button";

const steps = ["personal-info", "education", "experience", "upload-docs"];

export default function StepsPage() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [formData, setFormData] = useState({
    personalInfo: null,
    education: null,
    experience: null,
    uploadDocs: null
  });

  const isLastStep = currentStepIndex === steps.length - 1;
  const isFirstStep = currentStepIndex === 0;

  const handleStepSubmit = (stepData: any) => {
    const currentStep = steps[currentStepIndex];
    setFormData(prev => ({
      ...prev,
      [currentStep]: stepData
    }));

    if (isLastStep) {
      
      console.log('Final form data:', {
        ...formData,
        [currentStep]: stepData
      });
      // API gondermece olar burda 
      return;
    }

    setCurrentStepIndex(prev => prev + 1);
  };

  const handleBack = () => {
    if (!isFirstStep) {
      setCurrentStepIndex(prev => prev - 1);
    }
  };

  const renderStep = () => {
    const commonProps = {
      onStepSubmit: handleStepSubmit,
      onBack: handleBack,
      isFirstStep,
      isLastStep
    };

    switch (steps[currentStepIndex]) {
      case "personal-info":
        return <PersonalInfo {...commonProps} />;
      case "education":
        return <Education {...commonProps} />;
      case "experience":
        return <Experience {...commonProps} />;
      case "upload-docs":
        return <UploadDocs {...commonProps} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-lg mx-auto p-10 bg-white shadow-lg rounded-md">
      <div className="text-center mb-4">
        <h2 className="text-xl font-semibold">Step {currentStepIndex + 1} / {steps.length}</h2>
      </div>
      
      <div className="mb-4">{renderStep()}</div>

      <div className="flex justify-between gap-4 mt-6">
        <Button
          type="button"
          variant="outline"
          onClick={handleBack}
          disabled={isFirstStep}
          className="w-full"
        >
         Back
        </Button>
      </div>
    </div>
  );
}
