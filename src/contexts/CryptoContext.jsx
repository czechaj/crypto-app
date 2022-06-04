import {
  useState,
  useEffect,
  createContext,
  useContext,
  useCallback,
} from "react";
import axios from "axios";

const CryptoContext = createContext();

const CryptoProvider = ({ children }) => {
  const [coinName, setCoinName] = useState("");
  const [cryptoList, setCryptoList] = useState([]);
  const [page, setPage] = useState(1);

  const getAllCoins = useCallback(async () => {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=${page}`
    );
    return setCryptoList(response.data);
  }, [page]);

  useEffect(() => {
    getAllCoins();
  }, [getAllCoins]);

  const filterInCoins = useCallback(
    (coinName) => {
      if (coinName.trim() === "") {
        getAllCoins();
      } else {
        const newList = cryptoList.filter((coin) => {
          return coin.name.toLowerCase().indexOf(coinName.toLowerCase()) !== -1;
        });
        return setCryptoList(newList);
      }
    },
    [cryptoList, getAllCoins]
  );
  useEffect(() => {
    filterInCoins(coinName);
  }, [filterInCoins, coinName]);

  const values = {
    cryptoList,
    coinName,
    setCoinName,
    getAllCoins,
    filterInCoins,
    page,
    setPage,
  };

  return (
    <CryptoContext.Provider value={values}>{children}</CryptoContext.Provider>
  );
};

const useCrypto = () => useContext(CryptoContext);

export { useCrypto, CryptoProvider };
