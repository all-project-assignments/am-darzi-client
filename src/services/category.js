import axios from "axios";
const baseUrl = '/categories';

export const getAllCategories = async () => {
  try{
    const res = await axios.get(baseUrl)
    // console.log(res)
    return {categories: res.data.categories}
  } catch(err) {
    console.log("getAllCategories Error", err)
    return {categories: null}
  }
}

