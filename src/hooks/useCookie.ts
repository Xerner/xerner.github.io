import { useCookies } from "react-cookie";
import { useEffect, useMemo, useState } from "react";

interface CookieSetOptions {
  path?: string;
  expires?: Date;
  maxAge?: number;
  domain?: string;
  secure?: boolean;
  httpOnly?: boolean;
  sameSite?: boolean | 'none' | 'lax' | 'strict';
  encode?: (value: string) => string;
}

/**
 * A React hook to manage 1 cookie with typing. Uses {@link https://www.npmjs.com/package/react-cookie/v/4.0.3 react-cookie's} useCookies hook for functionality.
 * @param name the name, or key, of the cookie
 * @param initialValue the initial value of the cookie. if the cookie is already available for the document, this value is ignored and the available value is used
 * @returns the cookie and a cookie setter
 */
export function useCookie(name: string, initialValue: any, options?: CookieSetOptions) {
  const [cookies, setVanillaCookie] = useCookies([name]);
  const [cookie, setInternalCookie] = useState(initialValue);
  const [internalOptions, setInternalOptions] = useState(options);
  
  const setCookie = (newCookie: any) => {
    setVanillaCookie(name, newCookie, internalOptions);
    setInternalCookie(newCookie);
  };

  const setOptions = (newOptions: CookieSetOptions) => {
    setVanillaCookie(name, cookie, newOptions);
    setInternalOptions(newOptions);
  }

  // keep the cookies consistent
  // useEffect(() => { 
  //   setVanillaCookie(name, cookie, internalOptions);
  // }, [name, cookie, internalOptions, setVanillaCookie]);

  useEffect(() => {
    console.log('loop?')
    // console.log(name,CookieAlreadySet(cookies, name))
    if (CookieAlreadySet(cookies, name)) {
      var typedCookie;
      if (typeof initialValue === 'boolean') {
        typedCookie = !(cookies[name] === 'false') // everything is true except for when cookie === 'false'
      } else if (typeof initialValue === 'number') {
        typedCookie = parseInt(cookies[name])
      } else {
        typedCookie = cookies[name];
      }
      // check if internal cookie needs to match vanilla cookie
      if (typedCookie !== cookie) {
        setCookie(typedCookie); // was cause of an infinite loop before
      }
    } else {
      setVanillaCookie(name, initialValue, options);
    }
  })

  return [cookie, setCookie, setOptions] as const;
}

// helper
const CookieAlreadySet = (cookies: { [name: string]: any }, name: string): boolean => cookies[name] !== undefined
