export const CartResume = ({prod}) => {
    
    
    return (
        <>
        <div className="text-end">
            <h4>$ {prod.price * prod.quantity}</h4>
            <hr />
        </div>
        
        </>
    )
}
