import { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

const InputField = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    return (
        <input {...props} ref={ref} className="p-2 outline-1 outline rounded" title="Input field" />
    );
});

export default InputField;
