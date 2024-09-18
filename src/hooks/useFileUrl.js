import { useSelector } from 'react-redux';
import { selectBucket } from 'store/env/selectors';

export const useFileUrl = (file) => {
  const bucket = useSelector(selectBucket);

  if (!file) return { url: null };
  if (file.externalUrl) return { url: file.externalUrl };
  if (!file.exists) return { url: null };
  return { url: `${bucket}${file.key}` };
};

export default useFileUrl;