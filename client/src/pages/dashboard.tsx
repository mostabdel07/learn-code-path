import React, { useEffect, useState } from "react";
import SliderScroll from "@/components/SliderScroll";
import DefaultLayout from "@/layouts/DefaultLayout";
import withAuth from "@/components/withAuth";
import useOnlineCourses from "@/hooks/useOnlineCourses";

const stats = [
  { id: 1, name: "Cursos dispobibles", value: "+ 1.000" },
  { id: 2, name: "Usuarios registrados", value: "3.400" },
  { id: 3, name: "Usuarios activos", value: "1.275" },
];

const DashboardPage = () => {
  const { data, loading, error } = useOnlineCourses();

  return (
    <DefaultLayout title="Mi panel">
      <div className="h-full ">
        <div className="mx-auto pb-16 max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col gap-y-4"
              >
                <dt className="text-base leading-7 text-gray-600">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <SliderScroll data={data} loading={loading} error={error} />
      </div>
    </DefaultLayout>
  );
};

export default withAuth(DashboardPage);
