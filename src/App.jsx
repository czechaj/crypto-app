import "./App.css";
import Searchbar from "./components/Searchbar";
import CryptoList from "./components/CryptoList";
import { CryptoProvider } from "./contexts/CryptoContext";
function App() {
  const container = (
    <CryptoProvider>
      <Searchbar />
      <CryptoList />
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
