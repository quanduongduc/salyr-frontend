import Header from "@/components/Header";

import AccountContent from "./AccountContent";

const Account = () => {
  return (
    <>
      <Header className="from-bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-white text-3xl font-semibold">
            Account Settings
          </h1>
        </div>
      </Header>
      <AccountContent />
    </>
  );
};

export default Account;
