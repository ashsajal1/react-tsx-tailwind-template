import { PropsWithChildren, HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    variant?: "solid" | "ghost" | "outline";
}

export default function Button({ children, variant = "solid", ...props }: PropsWithChildren<ButtonProps>) {

    const { className } = props;

    // Define styles based on the variant
    let buttonStyles = "flex items-center justify-center gap-2 cursor-pointer select-none p-2 rounded transition duration-0 text-white transform active:scale-105";

    if (variant === "ghost") {
        buttonStyles += " bg-transparent border border-primary text-primary hover:bg-primary hover:text-white";
    } else if (variant === "outline") {
        buttonStyles += " border border-primary text-primary hover:bg-primary hover:text-white";
    } else {
        buttonStyles += " bg-primary hover:bg-primary-high";
    }

    return (
        <button
            {...props}
            className={cn(buttonStyles, className)}
        >
            {children}
        </button>
    );
}
