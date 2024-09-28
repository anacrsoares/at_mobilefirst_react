import "./layoutResponsivo.css";
import Header from "./components/Header.jsx";
import GlobalMenu from "./components/GlobalMenu.jsx";
import ContextualMenu from "./components/ContextualMenu.jsx";
import MainContent from "./components/MainContent.jsx";
import Ads from "./components/Ads.jsx";
import Footer from "./components/Footer.jsx";

export default function LayoutResponsivo() {
  return (
    <div className="container-responsivo">
      <Header />
      <GlobalMenu />
      <ContextualMenu />
      <MainContent />
      <Ads />
      <Footer />
    </div>
  );
}
