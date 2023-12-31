import React, { useEffect, useState } from "react";
import styles from "./FreelancerLang.module.css";
import { useDispatch, useSelector } from "react-redux";
import { arrLevels } from "../../../helpers/arrLevels";
import {
  changeSelectsLangFrom,
  changeSelectsLangTo,
} from "../../../store/reducers/stateSendDataSlice";
import backet from "../../../assets/images/servicesPage/basket.svg";
import LangSelectFrom from "../LangSelectFrom/LangSelectFrom";
import LangSelectTo from "../LangSelectTo/LangSelectTo";
import { updateForSelects } from "../../../helpers/updateForSelects";
import { useTranslation } from "react-i18next";

const FreelancerLang = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [langLevel, setLangLevel] = useState(arrLevels());
  const { allLang } = useSelector((state) => state.servicesPageSlice);
  const { selectsLangFrom, selectsLangTo } = useSelector(
    (state) => state.stateSendDataSlice
  );

  useEffect(() => {
    const selectsData = {
      id: 1,
      lang: updateForSelects(allLang, "allLang"),
      level: langLevel,
    };
    dispatch(changeSelectsLangFrom([selectsData]));
    dispatch(changeSelectsLangTo([selectsData]));
  }, [allLang]);

  const addSelects = (type) => {
    let sel, dispatchFN;
    if (type === "from") {
      sel = selectsLangFrom;
      dispatchFN = changeSelectsLangFrom;
    } else {
      sel = selectsLangTo;
      dispatchFN = changeSelectsLangTo;
    }
    if (sel[sel.length - 1].id === 3) {
      return sel;
    } else {
      dispatch(
        dispatchFN([
          ...sel,
          {
            id: sel[sel.length - 1].id + 1,
            lang: updateForSelects(allLang, "allLang"),
            level: langLevel,
          },
        ])
      );
    }
  };

  const deleteSelectFrom = () => {
    if (selectsLangFrom.length > 1) {
      dispatch(
        changeSelectsLangFrom(
          selectsLangFrom.filter((item) => {
            if (selectsLangFrom[selectsLangFrom.length - 1].id !== item.id) {
              return item;
            }
          })
        )
      );
    }
  };

  const deleteSelectTo = () => {
    if (selectsLangTo.length > 1) {
      dispatch(
        changeSelectsLangTo(
          selectsLangTo.filter((item) => {
            if (selectsLangTo[selectsLangTo.length - 1].id !== item.id) {
              return item;
            }
          })
        )
      );
    }
  };

  return (
    <div className={styles.freelancerLang}>
      <div className={styles.freelancerLang__from}>
        <p>{t("Language (Translate From)")}</p>
        {selectsLangFrom?.map((item, index) => (
          <div className={styles.freelancerLang__inner} key={item.id}>
            <LangSelectFrom
              props={{
                data: item?.lang,
                initialText: allLang?.[index]?.name,
                path:`lang${item?.id}`,
                pathInner:"lang"
              }}
            />
            <LangSelectFrom
              props={{
                data: item?.level,
                initialText: "A1",
                path:`lang${item?.id}`,
                pathInner:"levelLang"
              }}
            />
            <button onClick={deleteSelectFrom} className={styles.deleteBtn}>
              <img src={backet} alt="x" />
            </button>
          </div>
        ))}
        <button
          className={styles.btnAddselect}
          onClick={() => addSelects("from")}
        >
          {t("Add one more")}
        </button>
      </div>
      <div className={styles.freelancerLang__to}>
        <p>{t("Language (Translate To)")}</p>
        {selectsLangTo?.map((item, index) => (
          <div className={styles.freelancerLang__inner} key={item.id}>
            <LangSelectTo
              props={{
                data: item.lang,
                initialText: allLang?.[index]?.name,
                path:`lang${item?.id}`,
                pathInner:"lang"
              }}
            />
            <LangSelectTo
              props={{
                data: item.level,
                initialText: "A1",
                path:`lang${item?.id}`,
                pathInner:"levelLang"
              }}
            />
            <button onClick={deleteSelectTo} className={styles.deleteBtn}>
              <img src={backet} alt="x" />
            </button>
          </div>
        ))}
        <button
          className={styles.btnAddselect}
          onClick={() => addSelects("to")}
        >
          {t("Add one more")}
        </button>
      </div>
    </div>
  );
};

export default FreelancerLang;
