type LayoutConnectProps = { children: React.ReactNode };

export const LayoutConnect: React.FC<LayoutConnectProps> = ({ children }) => {
  return (
    <div className="w-[1008px] h-[649px] mx-auto my-[80px] space-y-[20px]">
      {children}
    </div>
  );
};
