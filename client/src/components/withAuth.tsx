import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "@/contexts/auth";

const withAuth = <P extends object>(Component: React.ComponentType<P>) => {
  const WrappedComponent = (props: P) => {
    const router = useRouter();
    const { isAuthenticated } = useAuth();

    useEffect(() => {
      if (!isAuthenticated) {
        console.log(isAuthenticated);
        router.push("/login");
      }
    }, [isAuthenticated, router]);

    if (!isAuthenticated) {
      return null;
    }

    console.log(isAuthenticated);

    return <Component {...props} />;
  };

  // Display a helpful name for the debugger
  WrappedComponent.displayName = `withAuth(${
    Component.displayName ?? Component.name ?? "Component"
  })`;

  return WrappedComponent;
};

export default withAuth;
