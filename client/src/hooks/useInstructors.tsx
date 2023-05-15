import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/auth";

interface Instructor {
  id: number;
  name: string;
  job_title: string;
  created_at: string;
  updated_at: string;
}

const useInstructors = () => {
  const [data, setData] = useState<Instructor[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const { token } = useAuth();
  const apiURL = process.env.API_ENDPOINT;

  useEffect(() => {
    const fetchData = async () => {
      if (token) {
        try {
          const response = await fetch(`${apiURL}/instructors`, {
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

          console.log(responseData);
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
  }, [token]);

  return {
    data,
    loading,
    error,
  };
};

export default useInstructors;
