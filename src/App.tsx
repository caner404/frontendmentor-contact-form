import { SubmitHandler } from 'react-hook-form';
import './App.css';
import { Checkbox } from './form/Checkbox';
import Form from './form/Form';

import { Input } from './form/Input';
import { Label } from './form/Label';
import { RadioGroup } from './form/RadioGroup';
import Textarea from './form/Textarea';

import { Bounce, ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { ToastMessage } from './ToastMessage';

export type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  queryType: boolean;
  message: string;
  consent: boolean;
};

function App() {
  const displayToast = () => {
    toast(<ToastMessage />, {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      closeButton: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: 'light',
      transition: Bounce,
      bodyClassName: 'bg-custom-grey-900',
      className: 'bg-custom-grey-900',
    });
  };

  const onSubmit: SubmitHandler<FormValues> = () => {
    displayToast();
  };

  return (
    <>
      <main className='max-w-full max-h-[100vh] md:w-[736px]'>
        <Form onSubmit={onSubmit}>
          <section className='flex flex-col gap-8'>
            <h1 className='font-bold text-[32px] -tracking-[1px] text-left text-custom-grey-900'>Contact Us</h1>

            <div className='flex flex-col gap-6'>
              <div className='flex flex-col md:flex-row md:*:flex-1 gap-4 '>
                <div className='flex flex-col gap-2 '>
                  <Label
                    htmlFor='firstName'
                    required
                  >
                    First Name
                  </Label>
                  <Input
                    type='text'
                    id='firstName'
                    name='firstName'
                    required
                    options={{ required: 'This field is required' }}
                  />
                </div>

                <div className='flex flex-col gap-2 '>
                  <Label
                    htmlFor='lastName'
                    required
                  >
                    Last Name
                  </Label>
                  <Input
                    type='text'
                    id='lastName'
                    name='lastName'
                    required
                    options={{ required: 'This field is required' }}
                  />
                </div>
              </div>

              <div className='flex flex-col gap-2'>
                <Label
                  htmlFor='email'
                  required
                >
                  Email Address
                </Label>
                <Input
                  type='email'
                  id='email'
                  name='email'
                  required
                  options={{
                    required: 'email is required',
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: 'Please enter a valid email address',
                    },
                  }}
                />
              </div>
              <RadioGroup name='queryType' />
              <div className='flex flex-col gap-2'>
                <Label
                  htmlFor='message'
                  required
                >
                  Message
                </Label>
                <Textarea
                  id='message'
                  name='message'
                  required
                  options={{ required: 'This field is required' }}
                />
              </div>
            </div>
          </section>

          <Checkbox
            id='checkbox'
            name='consent'
            label='I consent to being contacted by the team'
            options={{ required: 'To submit this form, please consent to being contacted' }}
            required
          />

          <Input
            type='submit'
            value='Submit'
            name='submit-button'
            id='submit'
          />
        </Form>
      </main>
      <ToastContainer />
    </>
  );
}

export default App;
