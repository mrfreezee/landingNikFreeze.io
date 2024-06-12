import './regInput.css'

type Props = {
    type: string
    placeholder: string
    value: string
    setValue: () => void
}


export const Inp = ({type, placeholder, value, setValue}: Props) =>{
    return(
        <></>
        // <input onChange={(event) => setValue(event.target.value)} value={value} className="regInp" type={type} placeholder={placeholder}/>
    )
}