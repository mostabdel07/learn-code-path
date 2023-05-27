import React, { useState, useEffect } from "react";
import DefaultLayout from "@/layouts/DefaultLayout";
import Table from "@/components/Table";
import withAuth from "@/components/withAuth";
import { useAuth } from "@/contexts/AuthContext";

const UsersPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // API fetch params
  const { session } = useAuth();
  const token = session?.token;
  const apiURL = process.env.API_ENDPOINT;

  /**
   * Fetches user data from the API endpoint and updates the state accordingly.
   * If a token is available, the request is made with authorization using the token.
   * @param {string | null} token - The user authentication token.
   */
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
          console.log("data", JSON.stringify(actualData, null, 2));
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
  }, [apiURL, token]);

  return (
    <DefaultLayout title="Users management">
      <div className="px-6 py-8 md:px-10 md:py-14">
        <Table data={data} loading={loading} error={error} />
      </div>
    </DefaultLayout>
  );
};

export default withAuth(UsersPage);
