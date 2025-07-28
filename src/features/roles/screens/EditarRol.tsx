import { Rol } from "@/types/rol";
import useObtenerRol from "../hooks/useObtenerRol";
import useActualizarRol from "../hooks/useActualizarRol";
import RolForm from "../components/RolForm";
import ContentLayout from "@/components/layout/ContentLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Loading from "@/components/shared/Loading";

interface Props {
  id: string;
}

export default function EditarRolScreen({ id }: Props) {
  const { rol, loading } = useObtenerRol({ id: Number(id) });
  const { actualizarRol, loading: updating } = useActualizarRol();

  const handleSubmit = (values: Rol) => {
    actualizarRol(values);
  };

  if (loading || !rol) return <Loading loading={loading || updating} />;

  return (
    <ContentLayout centerVertically>
      <Card className="w-full max-w-md bg-gray-50 dark:bg-gray-900 border shadow-lg">
        <CardHeader>
          <CardTitle className="text-center">Editar Rol</CardTitle>
        </CardHeader>
        <CardContent>
          <RolForm initialValues={rol} onSubmit={handleSubmit} />
        </CardContent>
      </Card>
    </ContentLayout>
  );
}
