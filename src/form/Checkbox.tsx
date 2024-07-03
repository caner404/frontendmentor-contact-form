import { FieldValues, RegisterOptions, useFormContext } from 'react-hook-form';
import { Label } from './Label';
import { ErrorMessage } from './ErrorMessage';

interface CheckboxProps {
  id: string;
  name: string;
  label?: string;
  required?: boolean;
  options?: RegisterOptions<FieldValues, string>;
}

export function Checkbox(props: CheckboxProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex gap-4'>
        <input
          type='checkbox'
          id={props.id}
          aria-required={props.required ? 'true' : 'false'}
          {...register(props.name, props.options)}
          aria-invalid={errors.name ? 'true' : 'false'}
          className='w-6 h-6 accent-custom-green-600 hover:cursor-pointer'
        />
        {props.label && (
          <Label
            required={props.required}
            htmlFor={props.id}
          >
            {props.label}
          </Label>
        )}
      </div>

      <ErrorMessage name={props.name} />
    </div>
  );
}
