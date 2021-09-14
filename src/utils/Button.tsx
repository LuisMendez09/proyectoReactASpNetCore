export default function Button(props: buttonProps){
    return(
        <button disabled={props.disabled} type={props.type} 
        className={props.className} onClick={props.onClick}>
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
}

Button.defaultProps = {
    type: 'button',
    disable: false,
    className: 'btn btn-primary',
}