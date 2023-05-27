import DefaultLayout from "@/layouts/DefaultLayout";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import SlideOver from "@/components/utilities/SlideOver";
import Modal from "@/components/utilities/Modal";
import { useAuth } from "@/contexts/AuthContext";
import withAuth from "@/components/withAuth";
import EditCourseForm from "@/components/forms/EditCourseForm";
import { useShoppingCart } from "@/contexts/ShoppingCartContext";
import Loader from "@/components/utilities/Loader";

interface Course {
  id: number;
  title: string;
  headline: string;
  rating: number;
  instructor_id: number;
  instructor_name: string;
  price: number;
  img: any;
  created_at: string;
  updated_at: string;
}

const CoursePage = () => {
  const router = useRouter();
  const id = router.query.id;
  const { addToCart } = useShoppingCart();

  // API fetch params
  const { session } = useAuth();
  const token = session?.token;
  const apiURL = process.env.API_ENDPOINT;

  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [errorList, setErrorList] = useState<any>([]);

  const [openSlideOver, setOpenSlideOver] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (token) {
        try {
          const res = await axios.get(`${apiURL}/courses/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (res.status === 404) {
            return {
              notFound: true,
            };
          }

          const course = res.data;
          setCourse(course);
        } catch (error: any) {
          // Todo any
          setError(error.message);
          setCourse(null);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchData();
  }, [apiURL, id, token]);

  const [editCourse, setEditCourse] = useState<Partial<Course>>(
    course
      ? {
          id: course.id,
          title: course.title,
          headline: course.headline,
          rating: course.rating,
          instructor_id: course.instructor_id,
          instructor_name: course.instructor_name,
          price: course.price,
          // img: course.img,
          created_at: course.created_at,
          updated_at: course.updated_at,
        }
      : {}
  );

  function handleOpenSlideOver() {
    setOpenSlideOver(true);
  }

  function handleCloseSlideOver() {
    setOpenSlideOver(false);
  }

  function handleCloseModalEdit() {
    setOpenModalEdit(false);
  }

  function handleCloseModalDelete() {
    setOpenModalDelete(false);
  }

  /**
   * Handles the input change event and updates the `editUser` state based on the input's name and value.
   * @param event The input change event
   */
  function handleInputChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;

    setEditCourse((prevCourse) => ({ ...prevCourse, [name]: value }));
  }

  /**
   * Updates a course with the changed properties.
   * @param id The ID of the course to update
   */
  async function handleSave(id: number) {
    // Identify the changed properties
    let changedProperties: Partial<Course> = {};
    if (editCourse.title !== course?.title) {
      changedProperties.title = editCourse.title;
    }
    if (editCourse.headline !== course?.headline) {
      changedProperties.headline = editCourse.headline;
    }
    if (editCourse.instructor_id !== course?.instructor_id) {
      changedProperties.instructor_id = editCourse.instructor_id;
    }
    if (editCourse.price !== course?.price) {
      changedProperties.price = editCourse.price;
    }

    try {
      const response = await axios.put(
        `${apiURL}/courses/${id}`,
        changedProperties,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // formData.append("img", changedProperties.img);

      if (response.status === 204) {
        setOpenSlideOver(false);
        router.reload();
      }
    } catch (error: any) {
      if (error.response.status === 422) {
        const errors = error.response.data.errors;

        setErrorList(Object.values(errors).flat());
      }
    }
  }

  async function handleDelete(id: number) {
    try {
      const response = await axios.delete(`${apiURL}/courses/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 204) router.push("/courses");
    } catch (error) {}
  }

  if (loading || !course) {
    return <Loader />;
  }

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < course.rating; i++) {
      stars.push(
        <svg
          key={i}
          aria-hidden="true"
          className="w-5 h-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <DefaultLayout title="Gestionar curso">
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image
              src={course.img}
              alt="course"
              width="0"
              height="0"
              sizes="100vw"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {course.title}
              </h1>
              <div className="flex mb-4">{renderStars()}</div>
              <p className="leading-relaxed font-bold italic">
                {course.instructor_name}
              </p>
              <p className="leading-relaxed">{course.headline}</p>
              <p className="title-font font-medium text-2xl text-gray-900">
                {course.price == 0.0 ? "Gratuito" : course.price + "€"}
              </p>
              <div className="flex justify-center mt-4">
                {session?.user.role === "admin" && (
                  <>
                    <button
                      className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
                      onClick={handleOpenSlideOver}
                    >
                      Editar
                    </button>
                    <button
                      className="ml-4 inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
                      onClick={() => setOpenModalDelete(true)}
                    >
                      Eliminar
                    </button>
                  </>
                )}
                <button
                  className="ml-4 inline-flex text-white bg-ctm-action border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  onClick={() => addToCart(course.id)}
                >
                  Añadir
                </button>
                <SlideOver
                  title="Editar curso"
                  openSlideOver={openSlideOver}
                  onClose={handleCloseSlideOver}
                >
                  <EditCourseForm
                    editCourse={editCourse}
                    handleInputChange={handleInputChange}
                    handleSave={handleSave}
                    errorList={errorList}
                  />
                </SlideOver>
                {/* Modal aviso guardar */}
                <Modal
                  title="Aviso"
                  openModal={openModalEdit}
                  onClose={handleCloseModalEdit}
                >
                  <div className="bg-white px-4 pb-4 sm:p-6 sm:pb-8 sm:mt-0">
                    <p className="text-center sm:text-left">
                      ¡Se han guardado los cambios correctamente!
                    </p>
                  </div>
                </Modal>
                {/* Modal aviso eliminar */}
                <Modal
                  title="Eliminar curso"
                  openModal={openModalDelete}
                  onClose={handleCloseModalDelete}
                >
                  <div className="bg-white px-4 pb-4 sm:p-6 sm:pb-4 sm:mt-0">
                    <p className="text-center sm:text-left">
                      Estas seguro de eliminar el curso &quot;
                      <span className="font-bold italic">{course.title}</span>
                      &quot; definitivamente?
                    </p>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                      onClick={() => handleDelete(course.id)}
                    >
                      Aceptar
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={handleCloseModalDelete}
                    >
                      Cancelar
                    </button>
                  </div>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default withAuth(CoursePage);
