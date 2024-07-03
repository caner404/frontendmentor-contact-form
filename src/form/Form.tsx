import { PropsWithChildren } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { FormValues } from '../App';

export interface FormProps {
  onSubmit: SubmitHandler<FormValues>;
}
export default function Form({ children, onSubmit }: PropsWithChildren<FormProps>) {
  const methods = useForm<FormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      queryType: true,
      message: '',
      consent: false,
    },
  });
  const { handleSubmit, reset } = methods;

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset();
        })}
        noValidate
        className=' bg-white rounded-2xl flex flex-col gap-10 p-6 md:p-10'
      >
        {children}
      </form>
    </FormProvider>
  );
}
