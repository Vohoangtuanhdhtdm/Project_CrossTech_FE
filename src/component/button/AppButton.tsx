interface PropsButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  status?: boolean;
  type?: "button" | "submit" | "reset";
}

export const AppButton = ({
  className,
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
        {children}
      </button>
    </div>
  );
};
