import { handleSuccess } from "utils/notifications";
export const useCopyToClipboard = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    handleSuccess("Copied to clipboard")
  }
  return copyToClipboard;
};

export default useCopyToClipboard;