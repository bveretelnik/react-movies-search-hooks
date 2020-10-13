import React from 'react'
import './Header.css'

export default function Header({text}) {
    return (
        <header className='App-header'>
            <h2>{text}</h2>
        </header>
    )
}
