import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "@/contexts/auth";
import Cookies from "js-cookie";

const withAuth = <P extends object>(Component: React.ComponentType<P>) => {
  const WrappedComponent = (props: P) => {
    const router = useRouter();
    const { isAuthenticated } = useAuth();

    // useEffect(() => {
    //   if (!isAuthenticated) {
    //     console.log(isAuthenticated);
    //     router.push("/login");
    //   }
    // }, [isAuthenticated, router]);

    // if (!isAuthenticated) {
    //   return null;
    // }

    useEffect(() => {
      // Check if the user has a valid JWT token
      const token = Cookies.get("authToken");
      if (!token) {
        router.push("/login");
      }
    }, []);

    return <Component {...props} />;
  };

  // Display a helpful name for the debugger
  WrappedComponent.displayName = `withAuth(${
    Component.displayName ?? Component.name ?? "Component"
  })`;

  return WrappedComponent;
};

export default withAuth;
