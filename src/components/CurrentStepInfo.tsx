import { Step } from "./Step";
import { formSteps } from "../helpers";

export const CurrentStepInfo = ({ currentStep }: { currentStep: number }) => {
  return (
    <div className="container grid grid-cols-1 place-content-start gap-8 h-full bg-purple rounded-xl px-8 py-10 bg-bg-sidebar bg-no-repeat bg-bottom bg-contain">
      {formSteps.map((step, i) => (
        <Step
          stepNumber={step.step}
          description={step.shortDescription}
          current={i === currentStep - 1}
        />
      ))}
    </div>
  );
};
