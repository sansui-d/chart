import React from 'react'
import Nav from '../../components/nav'
interface type {
    [index:number]:string
}

const Home: React.FC = () => {
    const list = ['首页','三角形','梯形']
    return (
        <div>
            <Nav list={list}></Nav>
        </div>
    )
}

export default Home