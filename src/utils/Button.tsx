import { CSSProperties } from "react"

export default function Button(props: buttonProps){
    return(
        <button disabled={props.disabled} type={props.type} 
        className={props.className} onClick={props.onClick} style={props.style}>
            {props.children}
        </button>
    )
}

interface buttonProps{
    children: React.ReactNode,
    onClick?(): void,
    type: 'button' | 'submit',
    disabled?: boolean,
    className: string,
    style:CSSProperties
}

Button.defaultProps = {
    type: 'button',
    disable: false,
    className: 'btn btn-primary',
    style:null
}