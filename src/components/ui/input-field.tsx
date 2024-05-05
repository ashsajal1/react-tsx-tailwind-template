import { forwardRef, InputHTMLAttributes } from "react";
import { cn } from "../../lib/cn";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const InputField = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const { className, ...rest } = props; // Destructure className from props
    return (
        <input {...rest} ref={ref} className={cn("p-2 border focus:ring-2 outline-none focus:ring-primary rounded", className)} title="Input field" />
    );
});

export default InputField;
