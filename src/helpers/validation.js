import { toSendOrderData } from "../store/reducers/onServerSlice";
import {
  changeOrderData,
  sendDataOrder,
} from "../store/reducers/orderPageSlice";
import { changeErrorSend } from "../store/reducers/stateSendDataSlice";

export const checkDate = (
  orderData,
  doc,
  typeDoc,
  dispatch,
  errorSend,
  idEverySelect,
  choiceLang
) => {
  const regDate = /^\d{4}\-(0[1-9]|1[0-2])\-(0[1-9]|[12][0-9]|3[01])$/;

  if (regDate.test(orderData.date) || orderData.date === "auto") {
    checkEmail(
      orderData,
      doc,
      typeDoc,
      dispatch,
      errorSend,
      idEverySelect,
      choiceLang
    );
  } else {
    dispatch(
      changeErrorSend({
        ...errorSend,
        date: true,
      })
    );
    setTimeout(() => {
      dispatch(
        changeErrorSend({
          ...errorSend,
          date: false,
        })
      );
    }, 1500);
  }
};

export const checkEmail = (
  orderData,
  doc,
  typeDoc,
  dispatch,
  errorSend,
  idEverySelect,
  choiceLang
) => {
  const regEmail = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

  if (regEmail.test(orderData.email)) {
    checkNum(
      orderData,
      doc,
      typeDoc,
      dispatch,
      errorSend,
      idEverySelect,
      choiceLang
    );
  } else {
    dispatch(
      changeErrorSend({
        ...errorSend,
        email: true,
      })
    );
    setTimeout(() => {
      dispatch(
        changeErrorSend({
          ...errorSend,
          email: false,
        })
      );
    }, 1500);
  }
};

export const checkNum = (
  orderData,
  doc,
  typeDoc,
  dispatch,
  errorSend,
  idEverySelect,
  choiceLang
) => {
  const regNumPhone = /[0-9]{7,15}/;
  if (regNumPhone.test(orderData.phoneNum)) {
    dispatch(sendDataOrder({ orderData, doc, typeDoc, choiceLang })); // для бота
    dispatch(
      toSendOrderData({ orderData, doc, typeDoc, idEverySelect, choiceLang })
    ); // для сервера
    // очищаю все input
    dispatch(
      changeOrderData({
        date: "",
        email: "",
        phoneNum: "",
      })
    );
  } else {
    dispatch(
      changeErrorSend({
        ...errorSend,
        phoneNum: true,
      })
    );
    setTimeout(() => {
      dispatch(
        changeErrorSend({
          ...errorSend,
          phoneNum: false,
        })
      );
    }, 1500);
  }
};
