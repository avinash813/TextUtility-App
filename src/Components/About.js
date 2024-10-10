import React from 'react'

export default function About(props) {
    return (
        <div style={{display:'flex',justifyContent:'center',alignItems: 'center',height: 'calc(100vh - 320px)'}}>
        <div style = {{color:props.mode==="light"?"black":"white",textAlign: 'justify'}}>
        <h2>Text Utility app offers various features to simplify text manipulation and analysis. It can convert text to different cases (uppercase, lowercase), Removes extra spaces. Additionally, it provides word and character counts. These functions streamline tasks such as formatting, editing, and analyzing text, making it easier to handle and process textual data efficiently.</h2>
        </div>
        </div>
    )
}
