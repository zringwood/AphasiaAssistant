import PromptDisplay from './PromptDisplay';

import { useState } from 'react';
export default function PromptController() {
    const [promptValues, setPromptValues] = useState([0,1,2,3,4,5,6,7,8,9,10,11])

    return (
        <div style={{ display: "flex", flexGrow: 1, flexDirection: "row", flexWrap: "wrap", width: "100%", rowGap: "8px", justifyContent: "space-evenly" }}>
            {
                promptValues.forEach(e => {
                    <PromptDisplay text="Hello World" />
                })
            }
        </div>
    )
}