import { useState, useEffect } from "react";
import {
  API_URL,
  getData,
  postData,
  resolveResponseError,
} from "../utils/helpers";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState<string | null>(
    localStorage.getItem("accessToken") || null
  );
  const [refreshToken, setRefreshToken] = useState<string | null>(
    localStorage.getItem("refreshToken") || null
  );

  useEffect(() => {
    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);
    } else {
      localStorage.removeItem("accessToken");
    }
  }, [accessToken]);

  useEffect(() => {
    if (refreshToken) {
      localStorage.setItem("refreshToken", refreshToken);
    } else {
      localStorage.removeItem("refreshToken");
    }
  }, [refreshToken]);

  const login = async (username: string, password: string) => {
    const credentials = {
      username,
      password,
    };
    try {
      const response = await postData({
        url: `${API_URL}auth/login`,
        data: credentials,
      });

      const { access_token, refresh_token } = response;
      setAccessToken(access_token);
      setRefreshToken(refresh_token);
      navigate(0);
    } catch (e: any) {
      console.log(e);
      resolveResponseError(e);
    }
  };

  const refreshTokenFunc = async () => {
    try {
      const response = await getData(`${API_URL}auth/refresh-token`);

      const { access_token, refresh_token } = response;
      setAccessToken(access_token);
      setRefreshToken(refresh_token);
      navigate(0);
    } catch (e: any) {
      // resolveResponseError(e);
    }
  };

  const register = async (
    username: string,
    password: string,
    email: string,
    alias: string
  ) => {
    const userInfo = {
      username,
      password,
      email,
      alias,
    };
    try {
      const response = await postData({
        url: `${API_URL}auth/register`,
        data: userInfo,
      });

      const { access_token, refresh_token } = response;
      setAccessToken(access_token);
      setRefreshToken(refresh_token);
      navigate(0);
    } catch (e: any) {
      resolveResponseError(e);
    }
  };

  const logout = () => {
    setAccessToken(null);
    setRefreshToken(null);
  };

  return {
    login,
    logout,
    refreshTokenFunc,
    register,
  };
};
