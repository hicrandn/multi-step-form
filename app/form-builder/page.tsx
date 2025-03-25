"use client";

import { usePathname, useRouter } from "next/navigation";
import { StepNavigation } from "@/components/StepNavigation";

const steps = ["personal-info", "education", "experience", "upload-docs"];

export default function StepsPage({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const currentStepIndex = steps.findIndex((step) => pathname.includes(step));

  const nextStep = () => {
    if (currentStepIndex < steps.length - 1) {
      router.push(`/form/steps/${steps[currentStepIndex + 1]}`);
    }
  };

  const prevStep = () => {
    if (currentStepIndex > 0) {
      router.push(`/form/steps/${steps[currentStepIndex - 1]}`);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-md">
      {children}
      <StepNavigation onNext={nextStep} onPrev={prevStep} disablePrev={currentStepIndex === 0} disableNext={currentStepIndex === steps.length - 1} />
    </div>
  );
}
