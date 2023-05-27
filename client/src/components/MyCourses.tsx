import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "@/contexts/AuthContext";
import SliderScroll from "./SliderScroll";

interface Course {
  id: number;
  title: string;
  headline: string;
  instructor: string;
  price: string;
  img: string;
  created_at: string;
  updated_at: string;
}

interface MyCoursesProps {
  data: Course[] | null;
}

const MyCourses = () => {
  // API fetch params
  const { session } = useAuth();
  const token = session?.token;
  const userId = session?.user.id;
  const apiURL = process.env.API_ENDPOINT;

  const [myCourses, setMyCourses] = useState<MyCoursesProps>({ data: null }); // define the state variable with the MyCoursesProps interface

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${apiURL}/user/${userId}/courses`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data: MyCoursesProps = res.data;

        if (res.status === 404) {
          return {
            notFound: true,
          }; // set the state to null if the request returns a 404
        } else {
          setMyCourses({ data: res.data }); // update the state with the fetched data
        }
      } catch (error) {}
    };
    fetchData();
  }, [apiURL, token, userId]);

  return (
    <div className="my-4">
      {myCourses.data && myCourses.data.length > 0 ? (
        <SliderScroll data={myCourses.data} />
      ) : (
        <p>No tienes cursos comprados.</p>
      )}
    </div>
  );
};

export default MyCourses;
