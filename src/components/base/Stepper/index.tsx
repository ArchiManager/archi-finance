import React from "react";

interface Step {
  icon?: React.ReactNode;
  text?: string;
}

interface StepperProps {
  steps: Step[];
  activeStep: number;
  onNext: () => void;
  onPrevious: () => void;
}

const Stepper: React.FC<StepperProps> = ({
  steps,
  activeStep,
  onNext,
  onPrevious,
}) => {
  return (
    <div className="flex items-center">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <div className="w-12 h-1 bg-gray-300 my-2"></div> // Border line between steps
          )}
          <div
            className={`ripple cursor-pointer hover:text-white flex items-center ${
              index === activeStep
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-600"
            } rounded-full w-10 h-10 justify-center`}
          >
            {step.icon ? step.icon : <p>{step.text}</p>}
          </div>
        </React.Fragment>
      ))}
      {/* <div className="flex ml-4">
        <button
          onClick={onPrevious}
          disabled={activeStep === 0}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
        >
          Previous
        </button>
        <button
          onClick={onNext}
          disabled={activeStep === steps.length - 1}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Next
        </button>
      </div> */}
    </div>
  );
};

export default Stepper;
