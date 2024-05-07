import { PropsWithChildren, HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    variant?: "solid" | "ghost" | "outline" | "danger" | "danger-outline";
}

export default function Button({ children, variant = "solid", ...props }: PropsWithChildren<ButtonProps>) {

    const { className } = props;

    let buttonStyles = "flex items-center justify-center gap-2 cursor-pointer select-none p-2 rounded transition duration-0 text-white transform active:scale-105 min-w-[60px]";

    const danger = 'bg-red-600 hover:bg-red-700';
    const dangerOutline = 'border bg-white dark:bg-black border-red-600 text-red-600 hover:bg-red-200 hover:text-red';
    if (variant === "ghost") {
        buttonStyles += " bg-transparent border border-primary text-primary hover:bg-primary dark:border-gray-800 hover:text-white";
    } else if (variant === "outline") {
        buttonStyles += " border border-primary dark:border-gray-800 text-primary hover:bg-primary hover:text-white";
    }

    return (
        <button
            {...props}
            className={cn(buttonStyles, className, { [danger]: variant === 'danger', [dangerOutline]: variant === 'danger-outline', ['bg-transparent bg-gradient-to-br from-primary to-primary-high hover:to-primary-extra-high']:variant==='solid'})}
        >
            {children}
        </button>
    );
}
