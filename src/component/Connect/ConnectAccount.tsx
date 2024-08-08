import { IoChevronForwardOutline } from "react-icons/io5";

export const ConnectAccount = () => {
  return (
    <div className="w-[1008px] h-[196px] border border-orange-700 rounded-xl ">
      <div className="flex flex-col justify-start space-y-[24px] m-[24px]">
        <p className="text-xl font-bold">Connect Your X account</p>
        <div>
          <p className="text-sm text-gray-500">
            You need connect your X account to join Social Task
          </p>
          <a href="#" className="flex items-center text-sm text-blue-500">
            <span>Learn more</span> <IoChevronForwardOutline />
          </a>
        </div>
        <button className="w-[235px] h-[40px] bg-[#CA5C3B] text-white rounded-3xl">
          Connect your X account
        </button>
      </div>
    </div>
  );
};
