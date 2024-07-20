export type SingleFormLayoutProps = {
  children: React.ReactNode;
};

export const SingleFormLayout: React.FC<SingleFormLayoutProps> = ({
  children,
}) => {
  return <div className="py-8">{children}</div>;
};
