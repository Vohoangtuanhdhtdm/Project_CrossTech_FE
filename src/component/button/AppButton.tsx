import { Spin } from "antd";

interface PropsButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  loading?: boolean;
  status?: boolean;
  type?: "button" | "submit" | "reset";
}

export const AppButton = ({
  className,
  loading,
  status,
  children,
  type = "button",
}: PropsButton) => {
  return (
    <div>
      <button
        className={`${className} ${
          status ? "bg-[#CA5C3B] text-[#FFFFFF]" : "bg-[#EEC5C7] text-black"
        } w-[76px] h-[30px] rounded-2xl`}
        type={type}
      >
        {children} {loading && <Spin />}
      </button>
    </div>
  );
};
// fast create use rafc

// **=== form ===** //

// rafc - React Arrow Function Component

/* 
import React from 'react';

interface Props {
  
}

const ComponentName: React.FC<Props> = (props) => {
  return (
    <div>
      
    </div>
  );
}

export default ComponentName;
*/
