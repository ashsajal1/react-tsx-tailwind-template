import { forwardRef, InputHTMLAttributes } from "react";
import { cn } from "../../lib/cn";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

const InputField = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const { className, ...rest } = props;
    const { type } = rest;
    const btnClass = 'flex items-center justify-center gap-2 cursor-pointer select-none p-2 rounded transition duration-0 bg-primary hover:bg-primary-high text-white'


    return (
        <input {...rest} ref={ref} className={cn("p-2 border  dark:border-none focus:ring-2 outline-none focus:ring-primary rounded dark:text-white", className, { [btnClass]: (type === 'submit') })} title="Input field" />
    );
});

export default InputField;
