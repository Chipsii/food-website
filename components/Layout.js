import Featured from "./Featured";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ Children }) => {
  return (
    <>
      <Navbar />
      <Featured />
      {Children}
      <Footer />
    </>
  );
};

export default Layout;
