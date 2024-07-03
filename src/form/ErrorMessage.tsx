import { useFormContext } from 'react-hook-form';

export function ErrorMessage({ id, name }: { id: string; name: string }) {
  const {
    formState: { errors },
  } = useFormContext();
  return (
    <p
      role='alert'
      id={id}
      className='text-custom-red md:h-4'
    >
      {errors[name]?.message?.toString()}
    </p>
  );
}
