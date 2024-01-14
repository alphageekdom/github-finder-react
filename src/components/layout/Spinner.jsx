import loadingSpinner from './assets/spinner.gif';

const Spinner = () => {
  return (
    <div className='mt-20'>
      <img
        src={loadingSpinner}
        alt='Loading...'
        width={180}
        className='text-center mx-auto'
      />
    </div>
  );
};

export default Spinner;
