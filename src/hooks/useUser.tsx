/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, createContext, useContext } from "react";
// import {
//   useUser as useSupaUser,
//   useSessionContext,
//   User
// } from '@supabase/auth-helpers-react';

import { User } from "@/types";
import { API_URL, getData } from "../utils/helpers";
import { useAuth } from "./useAuth";
import toast from "react-hot-toast";

type UserContextType = {
  user: User | null;
  isLoading: boolean;
  authenticated: boolean;
};

export interface Props {
  [propName: string]: any;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const MyUserContextProvider = (props: Props) => {
  const [isLoadingData, setIsloadingData] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const auth = useAuth();

  const getUserDetails = async () => {
    try {
      const response = await getData(`${API_URL}users/me`);
      return response;
    } catch (error: any) {
      if (error.response && error.response.status === 403) {
        localStorage.removeItem("accessToken");
        await auth.refreshTokenFunc();
      } else {
      }
    }
  };

  const [userDetails, setUserDetails] = useState<User | null>(null);
  useEffect(() => {
    if (!isLoadingData && !userDetails) {
      setIsloadingData(true);
      Promise.resolve(getUserDetails())
        .then((results) => {
          setAuthenticated(true);
          setUserDetails(results as User);
          setIsloadingData(false);
        })
        .catch((error) => {
          console.error(error); // Handle any errors from the async function
          setAuthenticated(false);
          setUserDetails(null);
          setIsloadingData(false);
        });
    } else if (!isLoadingData) {
      setUserDetails(null);
    }
  }, []);

  const value = {
    user: userDetails,
    isLoading: null || isLoadingData,
    authenticated: authenticated,
  };

  return <UserContext.Provider value={value} {...props} />;
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error(`useUser must be used within a MyUserContextProvider.`);
  }
  return context;
};
