// components/form/FormikFileInput.tsx
"use client";

import { useField, useFormikContext } from "formik";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";
import { ReactNode, useRef } from "react";
import clsx from "clsx";

interface Props {
  name: string;
  label: string;
  required?: boolean;
  accept?: string; // Ej: "image/*"
}

export default function FormikFileInput({
  name,
  label,
  required = false,
  accept = "image/*",
}: Props) {
  const [field, meta, helpers] = useField(name);
  const { setFieldValue } = useFormikContext();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFieldValue(name, file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-2">
      <Label htmlFor={name}>
        {label} {required && <span className="text-red-500">*</span>}
      </Label>

      <div
        onClick={handleClick}
        className={clsx(
          "flex items-center justify-center gap-2 border-2 border-dashed rounded-xl p-4 cursor-pointer transition hover:bg-muted",
          meta.touched && meta.error
            ? "border-red-500"
            : "border-gray-300 dark:border-gray-600"
        )}
      >
        <Upload className="h-5 w-5 text-gray-400" />
        <span className="text-sm text-gray-500">
          {field.value instanceof File
            ? field.value.name
            : "Haz clic o arrastra un archivo aquí"}
        </span>
      </div>

      <input
        id={name}
        name={name}
        type="file"
        accept={accept}
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />

      {meta.touched && meta.error && (
        <div className="text-sm text-red-500">{meta.error}</div>
      )}
    </div>
  );
}
