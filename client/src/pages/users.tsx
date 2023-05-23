import React, { useState, useEffect } from "react";
import DefaultLayout from "@/layouts/DefaultLayout";
import Table from "@/components/Table";
import withAuth from "@/components/withAuth";
import { useAuth } from "@/contexts/auth";

const UsersPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { token } = useAuth();
  const apiURL = process.env.API_ENDPOINT;

  useEffect(() => {
    if (token) {
      fetch(`${apiURL}/users`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `This is an HTTP error: The status is ${response.status}`
            );
          }
          return response.json();
        })
        .then((actualData) => {
          setData(actualData);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setData(null);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [token]);

  return (
    <DefaultLayout title="Usuarios">
      <div className="px-6 py-8 md:px-10 md:py-14">
        <Table data={data} loading={loading} error={error} />
      </div>
    </DefaultLayout>
  );
};

export default withAuth(UsersPage);
