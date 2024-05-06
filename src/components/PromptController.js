export default function PromptController({children}){
    return (
        <div style={{display:"flex", flexGrow:1,flexDirection:"row",flexWrap:"wrap", width:"100%", rowGap:"8px", justifyContent:"space-evenly"}}>
            {children}
        </div>
    )
}