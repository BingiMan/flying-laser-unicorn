import React from 'react'
import Introduction from './Introduction'

export default function Home(){
    return(
        <section>
            <div className={home}>
                <h1>HOME COMPONENT! YAY!</h1>
                <Introduction/>
            </div>
        </section>
    )
}