import ContentLayout from "@/components/layout/ContentLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Loading from "@/components/shared/Loading";
import useObtenerCombustible from "../hooks/useObtenerRol";
import { Combustible } from "@/types/combustible";
import useActualizarCombustible from "../hooks/useActualizarCombustible";
import CombustibleForm from "../components/CombustibleForm";

interface Props {
  id: string;
}

export default function EditarCombustibleScreen({ id }: Props) {
  const { combustible, loadingCombustible } = useObtenerCombustible({
    id: Number(id),
  });
  const { actualizarCombustible, loadingActualizar } =
    useActualizarCombustible();

  const handleSubmit = (values: Combustible) => {
    actualizarCombustible(values);
  };

  if (loadingCombustible || !combustible)
    return <Loading loading={loadingCombustible || loadingActualizar} />;

  return (
    <ContentLayout centerVertically>
      <Card className="w-full max-w-md bg-gray-50 dark:bg-gray-900 border shadow-lg">
        <CardHeader>
          <CardTitle className="text-center">Editar Combustible</CardTitle>
        </CardHeader>
        <CardContent>
          <CombustibleForm
            initialValues={combustible}
            onSubmit={handleSubmit}
          />
        </CardContent>
      </Card>
    </ContentLayout>
  );
}
