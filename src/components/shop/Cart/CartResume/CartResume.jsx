export const CartResume = ({prod}) => {
    
    console.log(prod);    


    return (
        <>
        <div className="text-center">
            <h4>$ {prod.price * prod.quantity}</h4>
            <hr />
        </div>
        
        </>
    )
}
