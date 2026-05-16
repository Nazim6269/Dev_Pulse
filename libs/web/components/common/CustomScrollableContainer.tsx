import React from 'react'

const CustomScrollableContainer = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={`custom-scrollbar overflow-y-auto overflow-x-auto ${className}`}>{children}</div>
    )
}

export default CustomScrollableContainer
