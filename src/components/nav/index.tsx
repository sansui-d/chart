import React from 'react'
import './index.css'
interface Ipros{
    list?:string[]
}

const Nav:React.FC<Ipros> = (props)=>{
    const {list} = props
    return(
        <div className='nav'>
            <ul>
                {list&&list.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Nav