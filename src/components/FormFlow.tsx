import { PersonalInfoStep } from "./PersonalInfo";

interface formProps {
  render: Function;
  goNext: Function;
}

export const Form = ({ render, goNext }: formProps) => {
  return render();
};
