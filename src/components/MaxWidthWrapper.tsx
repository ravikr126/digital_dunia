import { ReactNode } from "react"
import {cn} from '@/lib/utils'
const MaxWidthWrapper =({
    className,
    children
}:{
    className?: string
    children?: ReactNode
})=>{
return(
    <div className={cn("max-auto w-full max-w-screen-lg px-2.5 ms:px-20", className)}>
        {children}
    </div>
)
}

export default MaxWidthWrapper