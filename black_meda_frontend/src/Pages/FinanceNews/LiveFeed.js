import { useState, useEffect } from "react";
import PageWrapper from "../../Components/UI/helpers/PageWrapper";
import Banner from "../../Components/Finance News Feed/Banner";
import HolderTopics from "../../Components/Finance News Feed/HolderTopics";
import Header from "../../Components/UI/header/header";
import styles from "./LiveFeed.module.css";

const LiveFeed = () => {
  return (
    <PageWrapper>
      <Header />
      <Banner />
      <HolderTopics/>
    </PageWrapper>
  );
};
export default LiveFeed;
