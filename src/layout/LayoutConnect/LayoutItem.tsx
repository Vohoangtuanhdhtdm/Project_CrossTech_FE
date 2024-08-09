type LayoutItemProps = { children: React.ReactNode };

export const LayoutItem: React.FC<LayoutItemProps> = ({ children }) => {
  return (
    <div className="w-[1008px] h-[332px] flex items-center space-x-[24px]">
      {children}
    </div>
  );
};
