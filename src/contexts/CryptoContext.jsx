import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";

const CryptoContext = createContext();

const CryptoProvider = ({ children }) => {
  // const [cryptoName, setCryptoName] = useState("");
  const [cryptoList, setCryptoList] = useState([]);
  useEffect(() => {
    getAllCoins();
  }, []);

  const searchByName = async (crypto) => {
    const searchedCoin = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${crypto}`
    );
    return searchedCoin.data;
  };
  const getAllCoins = async () => {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`
    );
    return setCryptoList(response.data);
  };

  const values = { cryptoList, searchByName };

  return (
    <CryptoContext.Provider value={values}>{children}</CryptoContext.Provider>
  );
};

const useCrypto = () => useContext(CryptoContext);

export { useCrypto, CryptoProvider };
