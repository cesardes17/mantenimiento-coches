"use client";

import ContentLayout from "@/components/layout/ContentLayout";
import useCoches from "../hooks/useCoches";
import SearchHeader from "@/components/shared/SearchHeader";
import { useMemo, useState } from "react";
import CarCardList from "../components/CarCardList";
import { useRouter } from "next/navigation";

export default function MisCochesScreen() {
  const { coches, error, loadingCoches } = useCoches();
  const [searchTerm, setSearchTerm] = useState("");

  const router = useRouter();
  // Filter coches based on search term
  const filteredCoches = useMemo(() => {
    if (!searchTerm) return coches;

    return coches.filter(
      (coche) =>
        coche.matricula.toLowerCase().includes(searchTerm.toLowerCase()) ||
        coche.modelo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        coche.marca.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [coches, searchTerm]);

  const handleNewCoche = () => {
    console.log("Crear nuevo coche");
    router.push("/misCoches/nuevo");
  };

  return (
    <ContentLayout>
      <div className="w-full">
        {/* Header Section */}
        <SearchHeader
          title="Mis Coches"
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          placeholder="Buscar coche..."
          buttonText="Nuevo coche"
          onButtonClick={handleNewCoche}
        />
        {/*Coches Section*/}
        <CarCardList coches={filteredCoches} />
      </div>
    </ContentLayout>
  );
}
