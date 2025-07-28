import { ClipLoader } from "react-spinners";

export default function Loading({ loading }: { loading: boolean }) {
  return (
    <div className="flex justify-center items-center h-40">
      <ClipLoader
        color="#3b82f6" // Tailwind blue-500
        loading={loading}
        size={35}
      />
    </div>
  );
}
