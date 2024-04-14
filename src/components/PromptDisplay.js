import { useState } from "react"

export default function PromptDisplay(text){
    const [prompt, setPrompt] = useState(text)
    return (
        <div style={{display:'flex',justifyContent:"center", alignItems:"center", border:"1px solid black", borderRadius:"4px"}}>
            <span>
                prompt
            </span>
        </div>
        )
}