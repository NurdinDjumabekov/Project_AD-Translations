import React, { useEffect, useState } from "react";
import styles from "./OrderPage.module.css";
import ChoiceSelect from "../../components/OrderPage/ChoiceSelect/ChoiceSelect";
import TypesDocuments from "../../components/OrderPage/TypesDocuments/TypesDocuments";
import { useDispatch, useSelector } from "react-redux";
import {
  toTakeIndustries,
  toTakeLanguage,
  toTakeServices,
} from "../../store/reducers/dataSelectSlice";

import GoodSendData from "../../components/GoodSendData/GoodSendData";
import Preloader from "../../components/Preloader/Preloader";
import ActionBtns from "../../components/OrderPage/ActionBtns/ActionBtns";

const OrderPage = () => {
  const dispatch = useDispatch();
  const [doc, setDoc] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(toTakeServices());
    dispatch(toTakeIndustries());
    dispatch(toTakeLanguage());
  }, []);

  const { preloader } = useSelector((state) => state.mainPageSlice);

  const { typeServices, typeIndustries, typeLanguage } = useSelector(
    (state) => state.dataSelectSlice
  );

  const { goodSendData } = useSelector((state) => state.orderPageSlice);

  // console.log(orderData);
  // console.log(doc);
  return (
    <>
      {goodSendData ? (
        <div className={styles.order}>
          <div className="container">
            <h5>Translation</h5>
            <i>Fill in the features</i>
            <div className={styles.order__inner}>
              <div className={styles.order__services}>
                <ChoiceSelect
                  props={{
                    data: typeServices,
                    textAbove: "Services",
                    initialText: "Editing",
                  }}
                />
                <ChoiceSelect
                  props={{
                    data: typeIndustries,
                    textAbove: "Industries",
                    initialText: "General",
                  }}
                />
              </div>
              <TypesDocuments doc={doc} setDoc={setDoc} data={typeLanguage} />
            </div>
            <ActionBtns doc={doc} setDoc={setDoc} />
          </div>
        </div>
      ) : (
        <GoodSendData />
      )}
      {preloader && <Preloader />}
    </>
  );
};

export default OrderPage;