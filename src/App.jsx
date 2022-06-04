import "./App.css";
import Searchbar from "./components/Searchbar";
import CryptoList from "./components/CryptoList";
import Header from "./components/Header";
import PageChanger from "./components/PageChanger";
import Footer from "./components/Footer";
import { CryptoProvider } from "./contexts/CryptoContext";
function App() {
  const container = (
    <CryptoProvider>
      <Header />
      <Searchbar />
      <CryptoList />
      <PageChanger />
      <Footer />
    </CryptoProvider>
  );
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ width: "100%" }}
    >
      {container}
    </div>
  );
}

export default App;
