"use client";

import  {Button}  from "@/components/ui/button";

interface StepNavigationProps {
  onNext: () => void;
  onPrev: () => void;
  disableNext: boolean;
  disablePrev: boolean;
}

export function StepNavigation({ onNext, onPrev, disableNext, disablePrev }: StepNavigationProps) {
  return (
    <div className="flex justify-between mt-4">
      <Button onClick={onPrev} disabled={disablePrev}>Geri</Button>
      <Button onClick={onNext} disabled={disableNext}>İleri</Button>
    </div>
  );
}
