import React, { createContext, useContext, useEffect, useState } from "react";
import { Amplify } from "aws-amplify";
import AwsAuthConfig from "@/config";
import {
  fetchUserAttributes,
  FetchUserAttributesOutput,
  getCurrentUser,
} from "aws-amplify/auth";
import { Hub } from "aws-amplify/utils";
import { HubPayload } from "@aws-amplify/core";

Amplify.configure({
  Auth: {
    Cognito: AwsAuthConfig,
  },
});

type AuthContextType = {
  isAuthenticated: boolean;
  currentUserAttributes: FetchUserAttributesOutput | undefined;
  checkAuthState: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentUserAttributes, setCurrentUserAttributes] =
    useState<FetchUserAttributesOutput>();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuthState();
    const onAuthEvent = (data: HubPayload) => {
      switch (data.event) {
        case "signedIn":
          checkAuthState();
          break;
        case "signedOut":
          setIsAuthenticated(false);
          setCurrentUserAttributes({});
          break;
        default:
          checkAuthState();
          break;
      }
    };

    Hub.listen("auth", (data) => {
      onAuthEvent(data.payload);
    });
  }, []);

  const checkAuthState = async () => {
    try {
      const currentUser = await getCurrentUser();
      const currentUserAttributes = await fetchUserAttributes();

      if (currentUser) {
        setCurrentUserAttributes(currentUserAttributes);
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.log(error);
      setIsAuthenticated(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, currentUserAttributes, checkAuthState }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
