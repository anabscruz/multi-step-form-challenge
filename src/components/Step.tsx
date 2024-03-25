export const Step = ({
  stepNumber,
  description,
  current,
}: {
  stepNumber: number;
  description: string;
  current?: void;
}) => {
  return (
    <div className="flex items-center gap-x-4 gap-y-8">
      <div className="flex-none">
        <p className="rounded-full border-white border text-white text-sm font-bold size-8 align-middle leading-7">
          {stepNumber}
        </p>
      </div>
      <div className="flex-auto text-left">
        <p className="text-light-blue text-xs">STEP {stepNumber}</p>
        <p className="text-sm text-white font-bold">
          {description.toUpperCase()}
        </p>
      </div>
    </div>
  );
};
