// import getSongs from "@/actions/getSongs";
import Header from "@/components/Header";
import ListItem from "@/components/ListItem";

import PageContent from "./PageContent";
import { Link, useOutletContext } from "react-router-dom";
import { GlobalData } from "../layout/Layout";

const Home = () => {
  const globalData = useOutletContext<GlobalData>();
  return (
    <>
      <Header>
        <div className="mb-2">
          <h1
            className="
            text-white 
              text-3xl 
              font-semibold
            "
          >
            Welcome back
          </h1>
          <div
            className="
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              xl:grid-cols-3 
              2xl:grid-cols-4 
              gap-3 
              mt-4
            "
          >
            <Link to={"/liked"}>
              <ListItem
                name="Liked Songs"
                image="/images/liked.png"
                href="liked"
              />
            </Link>
          </div>
        </div>
      </Header>
      <div className="grid gap-8 mt-2 mb-7 px-6">
        <PageContent
          songs={globalData.songs}
          albums={globalData.albums}
          artists={globalData.artists}
        />
      </div>
    </>
  );
};

export default Home;
