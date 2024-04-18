export default function Header({children}){
    return (
        <header style={{display:"flex", justifyContent:"center",padding:"32px 8px 32px 8px"}}>
            {children}
        </header>
    )   
}