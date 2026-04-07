import { Search } from 'lucide-react'
import React from 'react'

interface CustomSearchProps {
    placeholder: string;
    inputClass?: string;
    containerClass?: string;
    iconSize?: number;
    iconClass?: string;
}

const CustomSearch = ({ placeholder, inputClass, containerClass, iconSize, iconClass }: CustomSearchProps) => {
    return (
        <div className={`hidden xl:flex items-center gap-2 bg-white/5 border border-white/7 rounded-xl px-3 py-1.5 w-56 group focus-within:border-violet-500/50 transition-colors ${containerClass}`}>
            <Search size={iconSize} className={`text-white/30 shrink-0 ${iconClass}`} />
            <input
                placeholder={placeholder}
                className={`bg-transparent cursor-pointer text-white/70 placeholder:text-white/25 outline-none w-full ${inputClass}`}

            />
        </div>
    )
}

export default CustomSearch