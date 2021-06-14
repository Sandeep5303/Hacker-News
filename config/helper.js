import toast from 'react-hot-toast';
import moment from 'moment';

// format date
export const formatDate = date => {
  return moment(date).startOf('day').fromNow();
};

// Custom Toast Message
export const customToast = (type, text) => {
  const customStyle = {
    style: {
      border: '1px solid #4cf45d',
      padding: '16px',
      background: '#1a1b1c',
      color: '#e9ecf0',
    },
    iconTheme: {
      primary: '#4cf45d',
      secondary: '#e9ecf0',
    },
  };
  if (type === 'success') {
    toast.success(text, customStyle);
  } else {
    toast.error(text, customStyle);
  }
};
