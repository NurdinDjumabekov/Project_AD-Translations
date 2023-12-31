import React, { useEffect } from "react";
import styles from "./CookiePage.module.css";
import arrow from "../../assets/images/cookie/arrow.svg";
import { NavLink } from "react-router-dom";
import { cookiedata } from "../../localData/data";
import { useTranslation } from "react-i18next";

const CookiePage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.cookPage}>
      <div className="container">
        <div className="addBlockNav">
          <NavLink to={"/"} className="prevPage">
            {t("Home")}
          </NavLink>
          <img className="arrowPage" src={arrow} alt="" />
          <NavLink className="nextPage">{t("Cookie")}</NavLink>
        </div>
        <h2>{t("Cookie")}</h2>
        {cookiedata?.map((item) => (
          <div key={item.id}>
            <h3>{t(item.title)}</h3>
            <p>{t(item.text)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CookiePage;
