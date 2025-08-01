import { ClipLoader } from "react-spinners";

interface Props { loading: boolean , message?: string}

export default function Loading({ loading, message = 'Cargando Datos...' }: Props) {
  return (
    <div className="flex justify-center items-center h-40">
      <ClipLoader
        color="#3b82f6" // Tailwind blue-500
        loading={loading}
        size={35}
      />
      {message}
    </div>
  );
}
