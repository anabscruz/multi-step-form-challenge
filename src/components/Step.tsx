export const Step = ({
  stepNumber,
  description,
  current,
}: {
  stepNumber: number;
  description: string;
  current?: boolean;
}) => {
  return (
    <div className="flex items-center gap-x-4 gap-y-8">
      <div className="flex-none">
        <p
          className={`rounded-full text-sm font-bold size-8 flex items-center justify-center ${
            current
              ? "bg-sky-blue text-denim"
              : "text-white border border-white"
          }`}
        >
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
