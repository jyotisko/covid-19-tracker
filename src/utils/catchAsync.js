import toast from 'react-hot-toast';

const catchAsync = fn => {
  fn().catch(err => {
    if (err.message?.includes('timeout')) return toast.error('Request timed out. Please check your internet connection.', { id: 'timeout' })
    if (err.message?.includes('failed with status code 404') && JSON.stringify(err).includes('at createError')) return toast.error('Country historical data not available!', { id: 'data-not-available' });
    console.error(err);
    return toast.error(`Something went wrong. ${err.message}`, { id: 'err' });
  });
};

export default catchAsync;