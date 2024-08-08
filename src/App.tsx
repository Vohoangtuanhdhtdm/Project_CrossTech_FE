import { Menu } from "./component/Header/Menu";
import { useState } from "react";
import logo from "./assets/logo.svg";
import { AppButton } from "./component/button";
import { ConnectAccount } from "./component/Connect/ConnectAccount";
import { CartItem } from "./component/Cart/CartItem";
import imageLogo from "./assets/Group 5.svg";
import imageIcon1 from "./assets/Vector (1).svg";
import imageIcon2 from "./assets/Vector (2).svg";
import imgaeHeart from "./assets/Heart.svg";
import imageIconHand from "./assets/HandBeer.svg";
function App() {
  const [on, setOn] = useState<boolean>(false);
  return (
    <>
      <div className="flex items-center justify-evenly">
        <div className="mr-[300px]">
          <img src={logo} alt="logo" />
        </div>
        <Menu />
        <div className="ml-[300px] w-[150px] h-[34px] flex items-center bg-[#EEC5C7] rounded-2xl">
          <AppButton status={on}>
            <button
              onClick={() => {
                setOn((on) => !on);
              }}
            >
              Maintes
            </button>
          </AppButton>
          <AppButton status={!on}>
            <button
              onClick={() => {
                setOn((on) => !on);
              }}
            >
              Testness
            </button>
          </AppButton>
        </div>
      </div>
      <div className="w-[1008px] h-[649px] border border-red-200 mx-auto my-[80px] space-y-[20px]">
        <div className="flex flex-col items-center space-y-[4px]">
          <h1 className="text-3xl font-bold">Social Task</h1>
          <p className="text-sm text-gray-500">
            Complete the Social Tasks to earn extra $Heart token
          </p>
        </div>
        <ConnectAccount />
        <div className="w-[1008px] h-[332px] border border-blue-700 flex items-center space-x-[24px] ">
          <CartItem
            imageLogo={imageLogo}
            imageIcon1={imageIcon1}
            imageIcon2={imageIcon2}
            imageIconHand={imageIconHand}
            imgaeHeart={imgaeHeart}
            content={{
              title: "Follow Tapos X",
              description: "Follow Tapos X to earn Points",
            }}
          ></CartItem>
          <CartItem
            imageLogo={imageLogo}
            imageIcon1={imageIcon1}
            imageIcon2={imageIcon2}
            imageIconHand={imageIconHand}
            imgaeHeart={imgaeHeart}
            content={{
              title: "Follow Tapos X",
              description: "Follow Tapos X to earn Points",
            }}
          ></CartItem>
          <CartItem
            imageLogo={imageLogo}
            imageIcon1={imageIcon1}
            imageIcon2={imageIcon2}
            imageIconHand={imageIconHand}
            imgaeHeart={imgaeHeart}
            content={{
              title: "Follow Tapos X",
              description: "Follow Tapos X to earn Points",
            }}
          ></CartItem>
        </div>
      </div>
    </>
  );
}

export default App;
