import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface TextProps extends HTMLAttributes<HTMLDivElement> {
    className?: string,
    label: string,
}

export default function Text({ className, label, ...props }: TextProps) {
    return (
        <div {...props} className={cn("text-transparent bg-gradient-to-br from-primary to-secondary hover:to-base bg-clip-text", className)}>{label}</div>
    )
}
