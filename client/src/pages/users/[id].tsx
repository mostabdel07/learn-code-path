import DefaultLayout from "@/layouts/DefaultLayout";
import Image from "next/image";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import Modal from "@/components/SlideOver";
import { useState } from "react";

interface User {
  id: number;
  username: string;
  email: string;
  role_name: string;
}

interface UserPageProps {
  user: User;
}

export const getServerSideProps: GetServerSideProps<UserPageProps> = async (
  context
) => {
  const { id } = context.params ?? {};
  const token = context.req.headers.cookie?.replace(
    /(?:(?:^|.*;\s*)authToken\s*\=\s*([^;]*).*$)|^.*$/,
    "$1"
  );

  if (!id) {
    return {
      notFound: true,
    };
  }

  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`, {
      method: "GET",
    });

    if (!res.ok) {
      return {
        notFound: true,
      };
    }

    if (res.status === 404) {
      return {
        notFound: true,
      };
    }

    const user = await res.json();

    return {
      props: {
        user,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default function UserPage({ user }: UserPageProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  if (!user || router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <DefaultLayout title="Mi panel">
      <section className="text-gray-600 body-font">
        <div className="flex flex-col text-center w-full mt-6 mb-12">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">
            User Info
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            havent heard of them.
          </p>
        </div>
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              src="https://dummyimage.com/720x600"
              alt="course"
              width="720"
              height="600"
              className="object-cover object-center rounded"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {user.username}
            </h2>

            <h3 className="text-gray-500 mb-3">UI Developer</h3>
            <p className="mb-4">{user.email}</p>

            <div className="flex justify-center">
              <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Guardar
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Cancelar
              </button>
              <button
                onClick={() => setOpen(true)}
                className="ml-4 inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
