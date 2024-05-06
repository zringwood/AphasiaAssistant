import PromptDisplay from './PromptDisplay';


export default function PromptController({children}){
    return (
        <div style={{display:"flex", flexGrow:1,flexDirection:"row",flexWrap:"wrap", width:"100%", rowGap:"8px", justifyContent:"space-evenly"}}>
             <PromptDisplay text="Hello World"/>
      <PromptDisplay text="Hello"/>
      <PromptDisplay text="World"/>
      <PromptDisplay text="Hello World"/>
      <PromptDisplay text="Hello"/>
      <PromptDisplay text="World"/>
      <PromptDisplay text="Hello World"/>
      <PromptDisplay text="Hello"/>
      <PromptDisplay text="World"/>
      <PromptDisplay text="Hello World"/>
      <PromptDisplay text="Hello"/>
      <PromptDisplay text="World"/>
        </div>
    )
}