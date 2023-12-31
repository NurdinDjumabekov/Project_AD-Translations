import React, { useEffect, useState } from "react";
import styles from "./Services.module.css";
import Search from "../Search/Search";
import { useDispatch, useSelector } from "react-redux";
import { toTakeDataServices } from "../../../store/reducers/servicesPageSlice";
import { addDataID } from "../../../helpers/addDataID";
import SelectServices from "../SelectServices/SelectServices";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const [count, setCount] = useState(1);

  const { dataServices, dataForSearch, search } = useSelector(
    (state) => state.servicesPageSlice
  );

  useEffect(() => {
    const newData = dataForSearch.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    dispatch(toTakeDataServices(addDataID(newData)));
  }, [search]);

  return (
    <div className={styles.services}>
      <h4 className="standartTitle">{t("TranslationServices")}</h4>
      <p>{t("TailoredNeeds")}</p>
      <div className="container">
        <div className={styles.services__inner}>
          <div className={styles.services__allContent}>
            <Search setCount={setCount} />
            {dataServices?.length === 0 ? (
              <p className={styles.empty}>{t("none")}</p>
            ) : (
              dataServices?.map((card) => (
                <div
                  key={card.id}
                  className={
                    count === card.id ? styles.activeServicesBlock : ""
                  }
                  onClick={() => setCount(card.id)}
                >
                  <div className={styles.services__content}>
                    <h5>{card.title}</h5>
                    <p>{card.text}</p>
                  </div>
                  <img src={card.img} alt="картинка" />
                </div>
              ))
            )}
          </div>
          {/* // для адаптивки */}
          <SelectServices setCount={setCount} />
          <div className={styles.services__everyContent}>
            {dataServices?.length === 0 ? (
              <p className={styles.empty__content}>{t("none")}</p>
            ) : (
              dataServices?.map((item) => {
                if (item.id === count) {
                  return (
                    <div key={item.id}>
                      <h4>{item.title}</h4>
                      <p
                        style={
                          item?.text?.length < 1330
                            ? { marginLeft: "-20px" }
                            : {}
                        }
                      >
                        {item.text}
                      </p>
                    </div>
                  );
                }
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
