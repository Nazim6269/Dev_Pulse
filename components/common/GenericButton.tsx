import React from 'react'
import { Button } from '../ui/button'
interface GenericButtonProps {
    title: string;
    className?: string;
    size?: "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg" | null | undefined;
    variant?: "default" | "link" | "outline" | "secondary" | "ghost" | "destructive" | "no-style" | null | undefined;
}

const GenericButton = ({ title, className, size, variant }: GenericButtonProps) => {
    return (
        <Button
            size={size}
            variant={variant}
            className={`text-textColor rounded-lg hover:bg-violetColor/20 hover:text-violetColor cursor-pointer ${className}`}
        >
            {title}
        </Button>
    )
}

export default GenericButton