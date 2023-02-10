import React from 'react'

export default function About(props) {
// const [mystyle, Setmystyle] = useState ({
//     color : 'black',
//     backgroundColor : 'white'
// })

// const [Btntxt, SetBtntxt] = useState ("Enable Dark Mode")

// const togglestyle= ()=>{
//     if (mystyle.color === 'Black') {
//         Setmystyle ({
//             color: 'white',
//             backgroundColor: 'black',
//             border: '2px solid white'
//         })
//         SetBtntxt ("Enable Light Mode")    
//     }
//     else {
//         Setmystyle ({
//             color: 'Black',
//             backgroundColor: 'white'
//         })
//         SetBtntxt ("Enable Dark Mode");
//     }

    let myStyle= {
        color: props.Mode==='warning'?'#042743':'white',
        backgroundColor: props.Mode==='warning'?'white':'#042743'
    }

    return (
            <>
                <div className="container" style={myStyle}>
                    <h2>About Us</h2>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" style={{color: props.Mode === 'warning'?'black':'white',backgroundColor: props.Mode === 'warning'?'white':'rgb(19 77 123)'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                What is TextAlter
                            </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle}     aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>TextAlter</strong> is a simple yet powerful text editor that let you browse and edit any kind of text on your device like convert a text into uppercase , lowercase , etc.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" style={{color: props.Mode === 'warning'?'black':'white',backgroundColor: props.Mode === 'warning'?'white':'rgb(19 77 123)'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Free to Use
                            </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    TextAlter is a <strong>free character counter tool</strong> that provides instant character count &word count statisticsfor a given text. TextAlter reports the number of words and charaters. Thus it is suitable for writing text with word/character limit.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" style={{color: props.Mode === 'warning'?'black':'white',backgroundColor: props.Mode === 'warning'?'white':'rgb(19 77 123)'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Browser Compatible
                            </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" style={myStyle}  aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    This word counter software works in any web browsers such as <strong>Chrome, Firefox, Internet Explorer, Safari, Opera</strong>. It suits to count Characters in Facebook, blog, books, excel document, pdf document, essays ,etc.
                                </div>
                            </div>
                        </div>
                        {/* <button className='btn btn-primary my-2'onClick={togglestyle}>{Btntxt}</button> */}
                    </div>
                </div>
            </>
        )
    }
    