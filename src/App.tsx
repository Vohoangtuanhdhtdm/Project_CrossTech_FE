import { Menu } from "./component/Header/Menu";

import logo from "./assets/logo.svg";

function App() {
  return (
    <>
      <div className="flex items-center justify-evenly">
        <div className="mr-[300px]">
          <img src={logo} alt="logo" />
        </div>
        <Menu />
        <div className="ml-[300px]">AppButton</div>
      </div>
    </>
  );
}

export default App;
