import { useState } from "react"


interface EntryProps {
    type?: 'text' | 'number'
    text: string
    value: any
    update?: (value: any) => void
}

export default function Entry (props: EntryProps) {

    


    return (
        <div className="flex flex-col">
            <label>{props.text}</label>
            <input className="rounded-md text-black"
             type={props.type} 
             value={props.value}
             onChange={e => props.update?.(e.target.value)}
             />
        </div>
    )
}