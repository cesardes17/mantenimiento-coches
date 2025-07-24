import { useField } from "formik";
import { Textarea } from "../ui/textarea";

interface Props {
  name: string;
  label: string;
  placeholder?: string;
}

export default function FormikTextarea({ name, label, placeholder }: Props) {
  const [field, meta] = useField(name);

  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        {label} <span className="text-red-500">*</span>
      </label>
      <Textarea
        {...field}
        id={name}
        placeholder={placeholder}
        className="w-full min-h-[100px]"
        rows={4}
      />
      {meta.touched && meta.error && (
        <div className="text-sm text-red-500">{meta.error}</div>
      )}
    </div>
  );
}
