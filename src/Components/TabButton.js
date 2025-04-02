

function TabButton({children, onSelect, isSelected}){

    // add event listener with declarative code in react
    // in react to add an event listener , we do it with a special attribute such as Onclick

    

    return(
        
    
        <li><button className={isSelected? "active" : ""} onClick={onSelect}>{children}</button></li>
        
    )
}

export default TabButton