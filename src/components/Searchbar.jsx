import { Form, InputGroup } from "react-bootstrap";
import { useCrypto } from "../contexts/CryptoContext";
function Searchbar() {
  const {
    coinName,
    setCoinName,

    filterInCoins,
  } = useCrypto();

  const handleNameChange = (e) => {
    setCoinName(e.target.value);
    filterInCoins(coinName);
  };

  return (
    <div className="w-25 d-flex">
      <InputGroup size="md" className="mb-3">
        <Form.Control
          value={coinName}
          onChange={handleNameChange}
          placeholder="Search coin by name"
        />
      </InputGroup>
    </div>
  );
}

export default Searchbar;
