import { PersonalInfoStep } from "./components/PersonalInfo";

export const formSteps = [
  {
    step: 1,
    shortDescription: "Your info",
    FormComponent: <PersonalInfoStep />,
  },
  {
    step: 2,
    shortDescription: "Select plan",
    FormComponent: <PersonalInfoStep />,
  },
  {
    step: 3,
    shortDescription: "Add-ons",
    FormComponent: <PersonalInfoStep />,
  },
  {
    step: 4,
    shortDescription: "Summary",
    FormComponent: <PersonalInfoStep />,
  },
];
