import { ItemList } from './ItemList/ItemList'
import './itemscontainer.css'

export const ItemListContainer = (props) => {
    
    const {greetings} = props
    

    return (
        <>
            <div className="banner bg-principal pb-2 pt-2">
                <div className="container banner-1">
                    <h2>{greetings}</h2>   
                </div>
            </div>
            
            <div className="container mt-2">
                <ItemList />
            </div>

        </>
    )
}
