import { FieldValues, RegisterOptions, useFormContext } from 'react-hook-form';
import { ErrorMessage } from './ErrorMessage';

interface InputProps {
  type: string;
  id: string;
  name: string;
  value?: string;
  required?: boolean;
  options?: RegisterOptions<FieldValues, string>;
}
export function Input({ ...props }: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  if (props.type === 'submit') {
    return (
      <button
        id={props.id}
        className='relative w-full bg-custom-green-600 hover:cursor-pointer px-10 py-4 rounded-lg font-bold text-lg leading-[150%] overflow-hidden'
      >
        <span className='relative z-10 text-white'>{props.value}</span>
        <span className='absolute inset-0 bg-custom-green-600 rounded-lg hover:brightness-50'></span>
      </button>
    );
  }

  return (
    <>
      <input
        type={props.type}
        id={props.id}
        {...register(props.name, props.options)}
        aria-required={props.required ? 'true' : 'false'}
        aria-invalid={errors[props.name] ? 'true' : 'false'}
        aria-describedby={`${props.id}_error`}
        className={`${
          errors[props.name]
            ? 'border-custom-red active:border-custom-red focus:border-custom-red hover:border-custom-red'
            : 'border-custom-grey-900 active:border-custom-green-600 hover:border-custom-green-600 focus:border-custom-green-600'
        } px-6 py-4 border text-custom-grey-500 focus:outline-none  rounded-lg hover:cursor-pointer `}
      />

      <ErrorMessage
        id={`${props.id}_error`}
        name={props.name}
      />
    </>
  );
}
