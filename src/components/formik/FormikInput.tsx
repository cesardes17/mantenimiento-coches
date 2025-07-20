// components/form/FormikInput.tsx
"use client";

import { useField } from "formik";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { ReactNode, useState } from "react";
import clsx from "clsx";

interface Props {
  name: string;
  label: string;
  type?: string;
  icon?: ReactNode;
  toggleVisibility?: boolean;
  placeholder?: string;
}

export default function FormikInput({
  name,
  label,
  type = "text",
  icon,
  toggleVisibility = false,
  placeholder,
}: Props) {
  const [field, meta] = useField(name);
  const [show, setShow] = useState(false);

  const inputType = toggleVisibility ? (show ? "text" : "password") : type;

  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}</Label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {icon && <span className="text-gray-400">{icon}</span>}
        </div>
        <Input
          {...field}
          id={name}
          type={inputType}
          placeholder={placeholder}
          className={clsx(
            "h-10",
            icon ? "pl-10" : "pl-3",
            toggleVisibility ? "pr-10" : "pr-3"
          )}
        />
        {toggleVisibility && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
            onClick={() => setShow((prev) => !prev)}
          >
            {show ? (
              <EyeOff className="h-4 w-4 text-gray-400" />
            ) : (
              <Eye className="h-4 w-4 text-gray-400" />
            )}
          </Button>
        )}
      </div>

      {meta.touched && meta.error && (
        <div className="text-sm text-red-500">{meta.error}</div>
      )}
    </div>
  );
}
