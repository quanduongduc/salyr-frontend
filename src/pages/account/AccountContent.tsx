"use client";

import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

import { useUser } from "@/hooks/useUser";
import Button from "@/components/Button";
import { postData } from "@/utils/helpers";

const AccountContent = () => {
  // const router = useRouter();
  const { isLoading, user } = useUser();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isLoading && !user) {
      // router.replace('/');
    }
  }, [
    isLoading,
    user,
    // router
  ]);

  const redirectToCustomerPortal = async () => {
    setLoading(true);
    try {
      const { url, error } = await postData({
        url: "/api/create-portal-link",
      });
      window.location.assign(url);
    } catch (error) {
      if (error) return alert((error as Error).message);
    }
    setLoading(false);
  };

  return (
    <div className="mb-7 px-6">
      <div className="flex flex-col gap-y-4">
        <p>No active plan.</p>
        <Button className="w-[300px]">Subscribe</Button>
      </div>
    </div>
  );
};

export default AccountContent;
