import { useState, useEffect } from "react";
import PageWrapper from "../../Components/UI/helpers/PageWrapper";
import Banner from "../../Components/Finance News Feed/Banner";
import Header from "../../Components/UI/header/header";
import styles from "./LiveFeed.module.css"


const LiveFeed = () => {
  return (
    <PageWrapper>
      <div className={styles.Header}>
        <Header />
      </div>
      <Banner/>
    </PageWrapper>
  );
};
export default LiveFeed;
