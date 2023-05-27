import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";

interface User {
  id: number;
  username: string;
  email: string;
  role_name: string;
}

const useUsers = () => {
  const [data, setData] = useState<User[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // API fetch params
  const { session } = useAuth();
  const token = session?.token;
  const apiURL = process.env.API_ENDPOINT;

  useEffect(() => {
    const fetchData = async () => {
      if (token) {
        try {
          const response = await fetch(`${apiURL}/users`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (!response.ok) {
            throw new Error(
              `This is an HTTP error: The status is ${response.status}`
            );
          }

          const responseData = await response.json();

          setData(responseData);
          setError(null);
        } catch (error: any) {
          // Todo any
          setError(error.message);
          setData(null);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [apiURL, token]);

  return {
    data,
    loading,
    error,
  };
};

export default useUsers;
