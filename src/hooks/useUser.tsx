import { useEffect, useState, createContext, useContext } from "react";
import { User } from "@/types";
import { getData } from "@/utils/helpers";
import { useAuth } from "./useAuth";
import { USER_ENDPOINT } from "@/utils/constants";
import usePlayer from "./usePlayer";

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
  const player = usePlayer();

  const getUserDetails = async () => {
    try {
      const response = await getData(`${USER_ENDPOINT}/me`);
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
          const user = results as User;
          setAuthenticated(true);
          setUserDetails(user);
          setIsloadingData(false);
          if (user.last_play) {
            player.setActiveSong(user.last_play);
            player.active();
          }
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = {
    user: userDetails,
    isLoading: isLoadingData,
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
