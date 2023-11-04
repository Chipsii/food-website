import Featured from "./Featured";
import Footer from "./Footer";
import Navbar from "./Navbar";
import PizzaList from "./PizzaList";

const Layout = ({ Children }) => {
  return (
    <>
      <Navbar />
      <Featured />
      <PizzaList/>
      {Children}
      <Footer />
    </>
  );
};

export default Layout;
