import { Outlet } from "react-router-dom";
import Footer from "../Components/UI/footer/Footer";

const Root = () => {
  return (
    <div>
        
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default Root;
