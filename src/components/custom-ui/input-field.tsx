import { cn } from "@/lib/utils";
import { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

const InputField = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const { className, ...rest } = props;
    const { type } = rest;
    const btnClass = 'flex items-center justify-center gap-2 cursor-pointer select-none p-2 rounded transition duration-0 bg-primary hover:bg-primary-high text-white bg-gradient-to-br from-primary to-primary-high hover:to-primary-extra-high  active:scale-[102%] border-none'

    return (
        <input {...rest} ref={ref} className={cn("p-2 border  outline-none rounded dark:text-white bg-white dark:bg-black dark:border-gray-800 focus:border-primary", className, { [btnClass]: (type === 'submit') })} title="Input field" />
    );
});

export default InputField;
