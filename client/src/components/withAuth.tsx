import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";

/**
 * Higher-order component that adds authentication logic to a wrapped component.
 * @param Component The component to wrap with authentication logic
 * @returns The wrapped component with authentication checks
 */
const withAuth = <P extends object>(Component: React.ComponentType<P>) => {
  const WrappedComponent = (props: P) => {
    const router = useRouter();
    const { isAuthenticated } = useAuth();

    useEffect(() => {
      // Check if the user has a valid JWT token

      if (!isAuthenticated) {
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
