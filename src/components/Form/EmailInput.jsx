import { useRef, useEffect } from "react";

export default function EmailInput({ id = "email", name = "email" }) {
  const emailRef = useRef(null);

  useEffect(() => {
    // this will only run once after component is mounted
    console.log(emailRef);
    emailRef.current.focus();
  }, []);

  return (
    <div>
      <label
        htmlFor="email"
        className="block font-medium text-gray-900 text-sm/6"
      >
        Email address
      </label>
      <div className="mt-2">
        <input
          id={id}
          name={name}
          type="email"
          ref={emailRef}
          required
          autoComplete="email"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
        />
      </div>
    </div>
  );
}
