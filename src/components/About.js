import react, { useState } from 'react'

export default function About() {
    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white',
        border:'.5px solid black',
        padding:'20px',
        borderRadius:'10px'
    })

    const [btnText, setBtnText] = useState("Enable light mode")

    const toggleStyle = ()=>{
        if (myStyle.color === 'black') {
            setMyStyle({
                color: 'white',
                backgroundColor: '#202320',
                border:'.5px solid red',
                padding:'20px',
                borderRadius:'10px'
            })
            setBtnText("Enable light mode")
        }
        else{
            setMyStyle({
                color: 'black',
                backgroundColor: 'white',
                border:'.5px solid black',
                padding:'20px',
                borderRadius:'10px'
            })
            setBtnText("Enable dark mode");
        }
    }

    return (
        <>
            <h3>This is about page</h3>
            <div className="container" style={myStyle}>
                <div>
                    <h2>This is Sample text</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus odit ducimus eius accusamus aspernatur deleniti vel asperiores ex obcaecati adipisci? Hic molestias necessitatibus harum voluptates perferendis aliquam reprehenderit culpa expedita!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non cum ut magnam. Unde vel adipisci asperiores, sunt voluptates magni labore! Laborum, deleniti! Voluptas accusamus porro itaque beatae impedit iusto id!
                    </p>
                </div>
                <button className="btn btn-primary" onClick={toggleStyle}>{btnText}</button>
            </div>
        </>
    )
}
