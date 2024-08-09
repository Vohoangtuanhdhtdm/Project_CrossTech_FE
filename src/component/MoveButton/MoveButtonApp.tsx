import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
export const MoveButtonApp = () => {
  return (
    <div className="w-[1008px] h-[40px] flex items-center justify-end">
      <div className="w-[120px] h-[40px] flex items-center space-x-[8px]">
        <button className="border border-[#EEC5C7] text-[#EEC5C7] text-2xl flex items-center justify-center w-[56px] h-[40px] rounded-3xl">
          <BiChevronLeft />
        </button>
        <button className="border border-[#EEC5C7] text-[#EEC5C7] text-2xl flex items-center justify-center w-[56px] h-[40px] rounded-3xl">
          <BiChevronRight />
        </button>
      </div>
    </div>
  );
};
