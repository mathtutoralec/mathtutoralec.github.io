import { useState } from 'react';

export const useDialog = (initOpen=false) => {
  const [open, setOpen] = useState(initOpen);
  
  const toggle = () => setOpen(state => !state);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return { open, toggle, onOpen, onClose };
}

export default useDialog;