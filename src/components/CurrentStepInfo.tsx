import { Step } from "./Step";

export const CurrentStepInfo = () => {
  return (
    <div className="container grid grid-cols-1 place-content-start gap-8 h-full bg-purple rounded-xl px-8 py-10 bg-bg-sidebar bg-no-repeat bg-bottom bg-contain">
      <Step stepNumber={1} description="Your info" />

      <Step stepNumber={2} description="Your info" />

      <Step stepNumber={3} description="Your info" />
    </div>
  );
};
