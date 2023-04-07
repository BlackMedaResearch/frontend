import { useState, useEffect } from "react";
import PageWrapper from "../../Components/UI/helpers/PageWrapper";
import Banner from "../../Components/Finance News Feed/Banner";
import HolderTopics from "../../Components/Finance News Feed/HolderTopics";
import Header from "../../Components/UI/header/header";
import ResultsSearch from "../../Components/Finance News Feed/ResultsSearch";
import styles from "./LiveFeed.module.css";
import ModalNews from "../../Components/UI/Modal/ModalNews";
import { useSelector, useDispatch } from "react-redux";
import { searchActions } from "../../store";

const LiveFeed = () => {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.search.showNewsModal);
  const ModalCloseHandler = () => {
    dispatch(searchActions.updateShowNewsModal(false));
  };
  return (
    <PageWrapper>
      <Header />
      <Banner />
      <HolderTopics />
      <ResultsSearch />
      {showModal && <ModalNews onClose={ModalCloseHandler} />}
    </PageWrapper>
  );
};
export default LiveFeed;
