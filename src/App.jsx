import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/hoc/Layout";
import MainPage from "./pages/MainPage/MainPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import OrderPage from "./pages/OrderPage/OrderPage";
import CookiePage from "./pages/CookiePage/CookiePage";
import ConditionsPage from "./pages/ConditionsPage/ConditionsPage";
import PrivacyPage from "./pages/PrivacyPage/PrivacyPage";
import NotFound from "./pages/NotFound/NotFound";
import FreelancerPage from "./pages/FreelancerPage/FreelancerPage";
import ConsultationPage from "./pages/ConsultationPage/ConsultationPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toTakeDataUpdates } from "./store/reducers/mainPageSlice";
import { toTakeDataReviews, toTakeFAQ } from "./store/reducers/aboutPageSlice";
import {
  toTakeAllDataServices,
  toTakeAllLang,
  toTakeIndustriesData,
} from "./store/reducers/servicesPageSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(toTakeDataUpdates({ url: "latest_updates/list", lang: "ru" }));
    dispatch(toTakeDataUpdates({ url: "our_offers/list", lang: "ru" }));
    dispatch(toTakeAllLang());
    dispatch(toTakeIndustriesData());
    dispatch(toTakeDataReviews());
    dispatch(toTakeFAQ());
    dispatch(toTakeAllDataServices());
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/freelancer" element={<FreelancerPage />} />
          <Route path="/cookie" element={<CookiePage />} />
          <Route path="/conditions" element={<ConditionsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/consultation" element={<ConsultationPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
