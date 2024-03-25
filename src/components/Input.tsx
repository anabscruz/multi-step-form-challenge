interface InputProps {
  id: string;
  label: string;
  placeholder?: string;
}

export const Input = ({ id, label, placeholder }: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="block text-left text-denim" htmlFor={id}>
        {label}
      </label>
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        className="block border rounded-lg py-3 px-4 border-border-color"
      />
    </div>
  );
};
