"use client";

import { Coche } from "@/types/coche";

interface CarCardListProps {
  coches: Coche[];
}

interface CarCardProps {
  coche: Coche;
}

function CarCard({ coche }: CarCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700">
      {/* Imagen del coche */}
      <div className="relative h-48 w-full bg-gray-100 dark:bg-gray-700">
        {coche.imagen_url ? (
          <img
            src={coche.imagen_url || "/placeholder.svg"}
            alt={`${coche.marca} ${coche.modelo}`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
            <svg
              className="w-16 h-16 text-gray-400 dark:text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
            <span className="absolute bottom-2 text-xs text-gray-500 dark:text-gray-400">
              Sin imagen
            </span>
          </div>
        )}
      </div>

      {/* Información del coche */}
      <div className="p-4">
        {/* Información siempre visible */}
        <div className="mb-3">
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">
            {coche.marca} {coche.modelo}
          </h3>
          <p className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded-md inline-block">
            {coche.matricula}
          </p>
        </div>

        {/* Información adicional - Solo visible en pantallas medianas y grandes */}
        <div className="hidden md:block space-y-2">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600 dark:text-gray-400">Odómetro:</span>
            <span className="font-medium text-gray-900 dark:text-gray-100">
              {coche.odometro.toLocaleString()} km
            </span>
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600 dark:text-gray-400">
              Combustible:
            </span>
            <span className="font-medium text-gray-900 dark:text-gray-100">
              ID: {coche.combustible_id}
            </span>
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600 dark:text-gray-400">
              Año compra:
            </span>
            <span className="font-medium text-gray-900 dark:text-gray-100">
              {coche.anio_compra}
            </span>
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600 dark:text-gray-400">Color:</span>
            <div className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded-full border border-gray-300 dark:border-gray-600"
                style={{ backgroundColor: coche.color.toLowerCase() }}
              ></div>
              <span className="font-medium text-gray-900 dark:text-gray-100 capitalize">
                {coche.color}
              </span>
            </div>
          </div>
        </div>

        {/* Información básica adicional para móvil */}
        <div className="md:hidden mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600 dark:text-gray-400">Año:</span>
            <span className="font-medium text-gray-900 dark:text-gray-100">
              {coche.anio_compra}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CarCardList({ coches }: CarCardListProps) {
  if (!coches || coches.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <svg
          className="w-16 h-16 text-gray-400 dark:text-gray-500 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
          No hay coches disponibles
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Agrega algunos coches para verlos aquí.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
        {coches.map((coche) => (
          <CarCard key={coche.id} coche={coche} />
        ))}
      </div>
    </div>
  );
}
