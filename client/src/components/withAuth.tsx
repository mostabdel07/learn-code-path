import React, { useEffect } from "react";
import { useRouter } from "next/router";
import jwtDecode from "jwt-decode";
import { AES, enc } from "crypto-js";

interface DecodedToken {
  exp: number;
}

function isTokenValid(token: string): boolean {
  try {
    const decoded: DecodedToken = jwtDecode(token);
    if (!decoded || !decoded.exp) {
      return false;
    }

    const currentTime = Math.floor(Date.now() / 1000); // Convert to seconds
    return currentTime < decoded.exp;
  } catch (error) {
    return false;
  }
}

const secretKey = "YourSecretKey";

/**
 * Higher-order component that adds authentication logic to a wrapped component.
 * @param Component The component to wrap with authentication logic
 * @returns The wrapped component with authentication checks
 */
const withAuth = <P extends object>(Component: React.ComponentType<P>) => {
  const WrappedComponent = (props: P) => {
    const router = useRouter();

    useEffect(() => {
      const encryptedData = localStorage.getItem("session");

      // Check if the token is in localStorages
      if (encryptedData) {
        const decryptedData = AES.decrypt(encryptedData, secretKey).toString(
          enc.Utf8
        );

        // Check if the user has a valid JWT token
        const session = JSON.parse(decryptedData);

        const isValid = isTokenValid(session.token);

        if (!isValid) {
          router.push("/login");
        }
      } else {
        router.push("/login");
      }
    }, [router]);

    return <Component {...props} />;
  };

  // Display a helpful name for the debugger
  WrappedComponent.displayName = `withAuth(${
    Component.displayName ?? Component.name ?? "Component"
  })`;

  return WrappedComponent;
};

export default withAuth;
