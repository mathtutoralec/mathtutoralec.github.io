import 'notyf/notyf.min.css';
import { Notyf } from 'notyf';

const DEFAULT_NOTIFICATION_MESSAGES = {
  error: "Error",
  success: "Success",
  warning: "Warning",
  info: "Complete",
};

const Notify = new Notyf({
  duration: 5000,
  position: { y: 'top', x: 'right' },
  dismissible: true,
  types: [
    { type: 'success', background: 'green' },
    { type: 'warning', background: 'orange' },
    { type: 'error', background: 'indianred' },
    { type: 'info', background: 'blue' },
  ]
});

export const showNotification = (props) => {
  let { 
    type="error", 
    duration=5000, 
    x="right",
    y="top",
    message="",
    dismissible=true
  } = props;
  if (!message) message = DEFAULT_NOTIFICATION_MESSAGES[type];
  Notify.open({ type, duration, position: { x, y }, message, dismissible });
};

export const handleError = (error, { y, x, duration, dismissable }={}) => {
  console.error(error);
  const message = (typeof error === "string") 
    ? error : 
    error?.response?.data?.error || error?.message || error.data.error || "Unknown Error";
    showNotification({ type: "error", message, y, x, duration, dismissable });
  return Error(message);
};

export const handleSuccess = (message, { y, x, duration, dismissable }={}) => {
  if (!message) message = "Updated successfully!";
  showNotification({ type: "success", message, y, x, duration, dismissable });
  return message;
};