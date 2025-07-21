import MainLayout from "@/components/layout/MainLayout";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <MainLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Dashboard
          </h1>
          <ThemeToggle />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Mis Coches
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Gestiona tus vehículos y su mantenimiento
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Próximos Servicios
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Revisa los mantenimientos programados
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Historial
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Consulta el historial de mantenimientos
            </p>
          </div>
        </div>

        <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Contenido Principal
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Este es el área de contenido principal. El sidebar es fijo en
            pantallas grandes y se puede alternar en dispositivos móviles usando
            el menú hamburguesa.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            El layout es completamente responsivo y soporta tanto modo claro
            como oscuro usando las variantes `dark:` de Tailwind CSS.
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
