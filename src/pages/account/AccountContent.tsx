"use client";

import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

import { useUser } from "@/hooks/useUser";
import Button from "@/components/Button";
import { postData } from "@/utils/helpers";
import { useNavigate } from "react-router-dom";

const AccountContent = () => {
  const navigate = useNavigate();
  const { isLoading, user } = useUser();

  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isLoading && !user) {
      navigate("/");
    }
  }, [isLoading, user, navigate]);

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
