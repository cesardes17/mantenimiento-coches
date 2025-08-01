"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";

interface SearchHeaderProps {
  title: string;
  searchTerm: string;
  onSearchChange: (value: string) => void;
  placeholder?: string;
  buttonText: string;
  onButtonClick: () => void;
}

export default function SearchHeader({
  title,
  searchTerm,
  onSearchChange,
  placeholder = "Buscar...",
  buttonText,
  onButtonClick,
}: SearchHeaderProps) {
  return (
    <Card className="bg-gray-50 dark:bg-gray-900 mb-5">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Search Input */}
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder={placeholder}
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-9"
            />
          </div>

          {/* Action Button */}
          <Button onClick={onButtonClick} className="w-full sm:w-auto">
            <Plus className="mr-2 h-4 w-4" />
            {buttonText}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
