type LayoutHeaderProps = { children: React.ReactNode };

export const LayoutHeader: React.FC<LayoutHeaderProps> = ({ children }) => {
  return <div className="flex items-center justify-evenly">{children}</div>;
};
