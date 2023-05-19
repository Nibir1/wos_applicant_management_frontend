import { useActionData as useRouterActionData } from 'react-router-dom';

/**
 * Takes a Request object from a route action parameters and returns the formData
 * conformed to your given generic type.
 * 
 * @param request Incoming action request
 * @returns Promise resolving to an object matching type T
 */
export async function getFormData<T extends Record<string, unknown> = Record<string, unknown>>(request:Request):Promise<T> {
  return Object.fromEntries(await request.formData()) as unknown as T;
}

/**
 * Wraps the `react-router-dom` version of `useActionData()` to provide type
 * casting.
 * 
 * @returns Object of given type T, or null if no action data
 */
export function useActionData<T extends Record<string, unknown> = Record<string, unknown>>():(T|null) {
  const data = useRouterActionData();

  if(typeof data !== 'undefined')
    return data as T;
  return null;
}

/**
 * Reduces the need for ternaries in properties for inputs by returning the
 * given message if the key exists in the errors object.
 * 
 * @param errors Given errors object
 * @param key String key to search for
 * @param message Message if it matches
 */
export function checkError(key:string, message:string, errors:(Record<string, unknown>|null|undefined)):(string|undefined) {
  if(errors && errors[key])
    return message;
  return undefined;
}