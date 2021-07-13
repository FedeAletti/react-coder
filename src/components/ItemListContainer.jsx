import React from 'react'

export const ItemListContainer = (props) => {
    
    const {greeting, user} = props
    
    return (
        <div className="banner">
            <h1 className="greeting">{greeting}</h1>
            <h2 className="user">{user}</h2>
        </div>
    )
}
