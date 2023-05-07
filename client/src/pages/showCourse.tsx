import { useRouter } from "next/router";

export default function ShowCourse() {
  const router = useRouter();
  const { id } = router.query;

  // Aquí puedes hacer la llamada a la API con el ID del curso
  // y mostrar

  return (
    <div>
      <h1>Mostrar curso {id}</h1>
      {/* Aquí mostrar el curso */}
    </div>
  );
}
