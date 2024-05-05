import { PropsWithChildren } from "react";

export default function Button({ children }: PropsWithChildren) {
    return (
        <div className="flex items-center justify-center gap-2 cursor-pointer select-none p-2 rounded active:ring-[3px] active:ring-primary-low transition duration-0 bg-primary hover:bg-primary-high text-white">{children}</div>
    )
}
