import { useState } from "react"

export default function PromptDisplay({text}){
    
    const [prompt] = useState(text)
    return (
        <div style={{display:'flex',height:"30%",justifyContent:"center", alignItems:"center", border:"1px solid black", borderRadius:"4px", flex: '0 0 22%'}}>
            <span>
                {prompt}        
            </span>
        </div>
        )
}