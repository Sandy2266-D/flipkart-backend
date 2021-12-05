import Products from './model/productSchema.js';
import { products } from './constants/products.js';

const DefaultData = async () => {
  try{
    await Products.deleteMany({});//delete duplicate
    await Products.insertMany(products); //collection and data
    console.log("Data imported")

  }catch(error){

      console.log("error:", error.message)
  }
}

export default DefaultData;


