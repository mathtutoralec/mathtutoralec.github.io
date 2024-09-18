import Loading from "./Loading";

const LoadingWrapper = ({ loading, message, children, ...props }) => {
  if (loading) return <Loading message={message} {...props} />;
  return <>{children}</>;
};

export default LoadingWrapper;
