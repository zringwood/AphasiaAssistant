export default function PromptDisplayLayout({children}){
    return (
        <div style={{display:"flex", flexDirection:"row",flexWrap:"wrap", width:"100%", rowGap:"8px", justifyContent:"space-evenly"}}>
            {children}
        </div>
    )
}