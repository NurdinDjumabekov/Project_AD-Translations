import React, { useState } from "react";
import styles from "./SliderReviews.module.css";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const SliderReviews = () => {
  const { dataReviews } = useSelector((state) => state.aboutPageSlice);

  const { t } = useTranslation();

  const settings = {
    infinite: true,
    slidesToShow: 1,
    speed: 300,
    slidesToScroll: 1,
    arrows: true,
    dots: true, // Включаем индикаторы
    centerMode: false,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className={styles.sliderReviews}>
      <h2 className="standartTitle">{t("Reviews")}</h2>
      <div className="container">
        <div className={styles.sliderReviews__inner}>
          <Slider {...settings}>
            {dataReviews?.slice(0, 5).map((slide) => (
              <div key={slide.id}>
                <div className={styles.sliderIndustries__mainImgs}>
                  <div className={styles.sliderIndustries__logo}>
                    <img src={slide.logo} alt="logo" />
                  </div>
                  <div className={styles.sliderIndustries__mainImg}>
                    <img src={slide.img} alt="user" />
                  </div>
                  <h5>{slide.title} </h5>
                </div>
                <p>{slide.text}</p>
                <span>{slide.date}</span>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SliderReviews;
