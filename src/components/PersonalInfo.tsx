import { Input } from "./Input";

export const PersonalInfoStep = () => {
  return (
    <>
      <h1 className="text-3xl text-denim font-bold text-left">Personal info</h1>
      <p className="text-base text-gray text-left">
        Please provide your name, email address, and phone number.
      </p>

      <div className="flex flex-col gap-6 mt-9">
        <Input id="name" label="Name" placeholder="e.g. Stephen King" />
        <Input
          id="email"
          label="E-mail"
          placeholder="e.g. stephenking@lorem.com"
        />
        <Input id="phone" label="Name" placeholder="e.g. +1 234 567 890" />
      </div>

      <div className="flex justify-end">
        <button className="bg-denim text-white font-medium rounded-lg py-4 px-6 text-right mt-20 mb-4">
          Next Step
        </button>
      </div>
    </>
  );
};
