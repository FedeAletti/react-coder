import prods from '../productos.json'

const task = new Promise((resp)=>{
    resp(prods)
},2000)


export const getItem=()=>{
    return(
        task
    )
}