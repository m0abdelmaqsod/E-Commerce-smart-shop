import React, { useEffect } from "react";
import styles from "./styles/Home.module.css";
import Slider from "../../components/Home/slider/slider";
import Features from "../../components/Home/features/Features";
import Paner from "../../components/Home/paner/Paner";
import LatestPro from "../../components/Home/latestPro/LatestPro";
import Time from "../../components/Home/times/Time";
import FilterSLider from "../../components/Home/categorie_filter/FilterSLider";
import Brands from "../../components/Home/brands/Brands";
import PanerEnd from "../../components/Home/panerEnd/PanerEnd";

const Home = () => {
  // === start title page === //
  document.title = "الرئيسية";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <section className={styles.homePage}>
        <Slider />
        <Features />
        <Paner />
        <LatestPro />
        <Time />
        <FilterSLider />
        <Brands />
        <PanerEnd />
      </section>
    </>
  );
};

export default Home;
