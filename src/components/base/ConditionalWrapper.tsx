type ConditionalWrapperProps = {
  condition: boolean;
  wrapper: (children: React.ReactNode) => React.ReactNode;
  children: React.ReactNode;
};

const ConditionalWrapper = ({
  condition,
  wrapper,
  children,
}: ConditionalWrapperProps) => {
  return condition ? wrapper(children) : <>{children}</>;
};

export default ConditionalWrapper;
