import React from 'react'
import { Button } from '../ui/button'

interface GenericButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    className?: string;
    size?: "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg" | null | undefined;
    variant?: "default" | "link" | "outline" | "secondary" | "ghost" | "destructive" | "no-style" | "primary" | null | undefined;
}

const GenericButton = ({ title, className, size, variant, ...props }: GenericButtonProps) => {
    return (
        <Button
            size={size as any}
            variant={variant as any}
            className={`text-textColor rounded-lg hover:bg-violetColor/20 hover:text-violetColor cursor-pointer ${className}`}
            {...props}
        >
            {title}
        </Button>
    )
}

export default GenericButton

