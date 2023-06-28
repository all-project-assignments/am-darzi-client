import {AllProducts} from '../data/demoData'

export const getProduct = async (id) => {
const prod = AllProducts.find(prod =>  prod.id === id)
console.log(prod)
 return  prod
}