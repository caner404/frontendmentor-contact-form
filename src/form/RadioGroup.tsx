import { ErrorMessage } from './ErrorMessage';
import { Label } from './Label';
import { RadioItem } from './RadioItem';

export function RadioGroup({ name }: { name: string }) {
  return (
    <div
      className='flex flex-col gap-4'
      role='group'
      aria-labelledby='query-type'
    >
      <Label
        id='query-type'
        required
      >
        Query Type
      </Label>

      <div className='flex flex-col md:flex-row gap-4 *:flex-1 '>
        <RadioItem
          id='general'
          name={name}
          value='General Enquiry'
          required
          options={{ required: 'Please select a query type' }}
        />
        <RadioItem
          id='support'
          name={name}
          value='Support Request'
          required
          options={{ required: 'Please select a query type' }}
        />
      </div>
      <ErrorMessage name={name} />
    </div>
  );
}
