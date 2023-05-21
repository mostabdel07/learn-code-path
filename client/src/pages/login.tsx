import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useAuth } from "@/contexts/auth";
import Link from "next/link";
import TopBar from "@/components/navigation/TopBar";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export default function LoginPage() {
  type FormValues = {
    email: string;
    password: string;
  };

  const [error, setError] = useState("");
  const { login } = useAuth();
  const apiURL = process.env.API_ENDPOINT;
  const router = useRouter();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Correo electrónico inválido")
      .required("El correo electrónico es obligatorio"),
    password: yup.string().required("La contraseña es obligatoria"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  async function fetchToken(data: FormValues) {
    const { email, password } = data;
    console.log("fetcht");
    const response = await fetch(`${apiURL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const responseData = await response.json();

    console.log(responseData);

    return responseData;
  }

  const onSubmit = async (data: FormValues) => {
    try {
      const fetchedToken = await fetchToken(data);
      const token = fetchedToken.authorisation.token;
      const userID = fetchedToken.user.id;
      const userRole = fetchedToken.role;
      localStorage.setItem("userRole", userRole);
      login(token, userID);

      // Redirect to the '/dashboard' page
      router.push("/dashboard");
    } catch (error) {
      setError(
        "Error al iniciar sesión. Por favor, verifica tus credenciales."
      );
    }
  };

  return (
    <>
      <TopBar title="Login" path="/" />
      <section className="bg-ctm-light dark:bg-ctm-black">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-ctm-dark dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Tu email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                      errors.email ? "border-red-500" : ""
                    }`}
                    {...register("email")}
                  />
                  {errors.email && (
                    <span className="text-red-600">{errors.email.message}</span>
                  )}
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    id="password"
                    className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                      errors.password ? "border-red-500" : ""
                    }`}
                    {...register("password")}
                  />
                  {errors.password && (
                    <span className="text-red-600">
                      {errors.password.message}
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-gray-900 dark:text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  disabled={!isValid}
                >
                  Log in
                </button>
                {error && <p className="text-red-600">{error}</p>}
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Si no tienes una cuenta registrate?{" "}
                  <Link href="/register">
                    <span className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                      Regístrate
                    </span>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
