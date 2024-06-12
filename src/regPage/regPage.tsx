import { useState } from 'react'
import { Inp } from './regInput/regInput'
import './regPage.css' 

export const RegPage = () =>{

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    return(
        <div className='regPageWrap'>
            <form className='regForm'>
                {/* <Inp value={email} setValue={setEmail} type='text' placeholder='Email'/> */}
                {/* <Inp type='text' placeholder='Name'/> */}
                {/* <Inp value={password} setValue={setPassword} type='password' placeholder='Password'/> */}
                {/* <Inp type='password' placeholder='Reapit password'/> */}
            </form>
        </div>
    )
}