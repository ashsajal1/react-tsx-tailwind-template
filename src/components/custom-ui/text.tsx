import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface TextProps extends HTMLAttributes<HTMLDivElement> {
    className?: string,
    label: string,
}

export default function Text({ className, label, ...props }: TextProps) {
    return (
        <div {...props} className={cn("text-transparent bg-gradient-to-br from-primary to-primary/80 hover:to-primary/60 bg-clip-text transition-colors duration-300", className)}>{label}</div>
    )
}
