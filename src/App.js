import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header, CreateContainer, MainContainer } from "./components";
import { AnimatePresence } from "framer-motion";
import { useStateValue } from "./context/StateProvider";
import { getAllplantItems } from "./utils/firebaseFunctions";
import { useEffect } from "react";
import { actionType } from "./context/reducer";
import SellerLogin from "./components/SellerLogin";
import ScmDapp from "./components/ScmDapp";

const App = () => {
  const [{ plantItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllplantItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        plantItems: data,
      });
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-primary  ">
        <Header />
        <main className="mt-24 p-8 w-full px-4 py-4 md:mt-20 md:px-16">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
            <Route path="/loginseller" element={<SellerLogin />} />
            <Route path="/scmDapp" element={<ScmDapp />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default App;
