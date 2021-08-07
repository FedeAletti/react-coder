
import products from '../productos.json'

const task = new Promise((resp)=>{
    resp(products)
},2000)

export const getItem=()=>{
    return(task)
}