interface ButtonProps {
    children: any
    onClick?: () => void
}

export default function Button(props: ButtonProps) {
    
      
    return (
        <button onClick={props.onClick} className={`
            bg-gradient-to-r from-blue-400 to-blue-700
            text-white
            px-4
            py-2
            rounded-md    
            mt-2     
        `}>
            {props.children}
        </button>
    )
}