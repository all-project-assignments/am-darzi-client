import axios from "axios";
const baseUrl = 'http://localhost:5000/categories';

export const getAllCategories = async () => {
  try{
    const res = await axios.get(baseUrl)
    return {categories: res.categories}
  } catch(err) {
    console.log("getAllCategories Error", err)
    return {categories: null}
  }
}

