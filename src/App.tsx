import { useState } from "react";
import "./App.css";
import { AppButton } from "./component/button";

function App() {
  const [active, setActive] = useState<boolean>(false);
  const handleActive = () => {
    setActive(!active);
  };
  return (
    <>
      <div className="w-[150px] h-[34px] bg-[#EEC5C7] flex items-center rounded-2xl">
        <AppButton status={active}>
          <button onClick={handleActive}>Mainnet</button>
        </AppButton>
        <AppButton status={!active} onClick={handleActive}>
          <button onClick={handleActive}>Testnet</button>
        </AppButton>
      </div>
    </>
  );
}

export default App;
