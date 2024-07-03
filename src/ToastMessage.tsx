import successCheckMark from './assets/icon-success-check.svg';
export function ToastMessage() {
  return (
    <div className='flex flex-col gap-2 p-6 bg-custom-grey-900'>
      <div className='flex items-center gap-2'>
        <img
          src={successCheckMark}
          alt='icon success checkmark'
          className='w-6 h-6 inline-block'
        />
        <h4 className='text-white font-bold text-[18px]'>Message sent!</h4>
      </div>
      <p className='text-custom-green-200'>Thanks for completing the form. We'll be in touch soon!</p>
    </div>
  );
}
