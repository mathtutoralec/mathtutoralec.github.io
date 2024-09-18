import CustomAlert from "./CustomAlert";

const ComingSoonAlert = props => {
  return (
    <CustomAlert
      title="Coming Soon"
      message="We're working this. Check back again soon :)"
      severity="info"
      {...props}
    />
  );
};

export default ComingSoonAlert;
