import React, { useEffect, useState } from "react";
import Panel from "@/components/Panel";
import DefaultLayout from "@/layouts/DefaultLayout";
import withAuth from "@/components/withAuth";
import useOnlineCourses from "@/hooks/useOnlineCourses";
import { ArrowSmallUpIcon, ArrowUpCircleIcon } from "@heroicons/react/24/solid";

const CoursesPage = () => {
  const { data, loading, error } = useOnlineCourses();
  return (
    <DefaultLayout title="Online courses">
      <div className="px-6 py-8 md:px-10 md:py-14">
        <Panel data={data} loading={loading} error={error} />
        <div className="fixed bottom-10 right-8 animate-bounce  brightness-100 rounded-full  md flex items-center justify-center hover:brightness-90">
          <a href="#">
            <ArrowUpCircleIcon className="h-8 w-8 md:h-14 md:w-14 text-ctm-accent" />
          </a>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default withAuth(CoursesPage);
