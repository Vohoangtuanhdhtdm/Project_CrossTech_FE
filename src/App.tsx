import { Menu } from "./component/Header/Menu";

function App() {
  return (
    <>
      <div className="flex items-center justify-evenly">
        <div className="mr-[300px]">IMG</div>
        <Menu />
        <div className="ml-[300px]">AppButton</div>
      </div>
    </>
  );
}

export default App;
