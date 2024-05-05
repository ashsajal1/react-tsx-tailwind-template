import { PropsWithChildren, HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

export default function Button({ children, ...props }: PropsWithChildren<ButtonProps>) {

    const { className } = props
    return (
        <button
            {...props}
            className={cn("flex items-center justify-center gap-2 cursor-pointer select-none p-2 rounded active:ring-[3px] active:ring-primary-low transition duration-0 bg-primary hover:bg-primary-high text-white", className)}
        >
            {children}
        </button>
    );
}
