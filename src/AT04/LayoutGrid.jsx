import "./layoutGrid.css";
import Header from "./components/Header.jsx";
import GlobalMenu from "./components/GlobalMenu.jsx";
import ContextualMenu from "./components/ContextualMenu.jsx";
import MainContent from "./components/MainContent.jsx";
import Ads from "./components/Ads.jsx";
import Footer from "./components/Footer.jsx";

export default function LayoutGrid() {
  return (
    <div className="container-grid">
      <Header />
      <GlobalMenu />
      <ContextualMenu />
      <MainContent />
      <Ads />
      <Footer />
    </div>
  );
}
