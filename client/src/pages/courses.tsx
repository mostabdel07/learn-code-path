import React, { useEffect, useState } from "react";
import Panel from "@/components/Panel";
import DefaultLayout from "@/layouts/DefaultLayout";
import withAuth from "@/components/withAuth";
import useOnlineCourses from "@/hooks/useOnlineCourses";

const CoursesPage = () => {
  const { data, loading, error } = useOnlineCourses();
  return (
    <DefaultLayout title="Cursos online">
      <Panel data={data} loading={loading} error={error} />
    </DefaultLayout>
  );
};

export default withAuth(CoursesPage);
