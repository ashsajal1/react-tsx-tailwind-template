import { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

interface TextProps extends HTMLAttributes<HTMLDivElement> {
    className: string,
    label: string,
}

export default function Text({ className, label, ...props }: TextProps) {
    return (
        <div {...props} className={cn("text-transparent bg-gradient-to-br from-primary to-primary-high hover:to-primary-extra-high bg-clip-text", className)}>{label}</div>
    )
}
