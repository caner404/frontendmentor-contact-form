import { FieldValues, RegisterOptions, useFormContext } from 'react-hook-form';
import { Label } from './Label';

interface RadioItemProps {
  id: string;
  name: string;
  value: string;
  required?: boolean;
  options?: RegisterOptions<FieldValues, string>;
}

export function RadioItem(props: RadioItemProps) {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const selectedValue = watch(props.name);

  return (
    <Label
      htmlFor={props.id}
      className={` ${selectedValue === props.value ? 'bg-custom-green-200' : ''}
      flex gap-3 px-6 py-4 border text-custom-grey-500 border-custom-grey-900 focus:outline-none active:border-custom-green-600  rounded-lg hover:cursor-pointer hover:border-custom-green-600`}
    >
      <input
        type='radio'
        id={props.id}
        value={props.value}
        {...register(props.name, props.options)}
        aria-required={props.required ? 'true' : 'false'}
        aria-invalid={errors.name ? 'true' : 'false'}
        className="before:content[''] relative h-6 w-6 cursor-pointer appearance-none rounded-full border  before:absolute before:top-2/4 before:left-2/4 before:block before:h-3 before:w-3 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full checked:border-custom-green-600 checked:before:bg-custom-green-600"
      />
      {props.value}
    </Label>
  );
}
