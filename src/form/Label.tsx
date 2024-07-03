import { PropsWithChildren } from 'react';

export function Label(
  props: PropsWithChildren<{ htmlFor?: string; required?: boolean; className?: string; id?: string }>
) {
  return (
    <label
      id={props.id}
      htmlFor={props.htmlFor}
      className={`${props.className} text-left font-medium text-custom-grey-900 text-[1rem] leading-[150%] hover:cursor-pointer`}
    >
      {props.children}
      {props.required && <span className='text-custom-green-600 inline-block pl-2'>*</span>}
    </label>
  );
}
