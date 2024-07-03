import { FieldValues, RegisterOptions, useFormContext } from 'react-hook-form';
import { ErrorMessage } from './ErrorMessage';

export default function Textarea({
  id,
  name,
  required,
  options,
}: {
  id: string;
  name: string;
  required?: boolean;
  options?: RegisterOptions<FieldValues, string>;
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <textarea
        id={id}
        {...register(name, options)}
        aria-required={required ? 'true' : 'false'}
        aria-invalid={errors[name] ? 'true' : 'false'}
        className={`${
          errors[name]
            ? 'focus:outline-none border-custom-red    focus-visible:border-custom-red focus-within:border-custom-red'
            : 'border-custom-grey-500'
        } px-6 py-4 border focus:outline-none  text-custom-grey-900 text-lg font-medium tracking-[150%] rounded-lg h-[275px] md:h-[125px] `}
      ></textarea>

      <ErrorMessage
        name={name}
        id={`${id}_error`}
      />
    </>
  );
}
