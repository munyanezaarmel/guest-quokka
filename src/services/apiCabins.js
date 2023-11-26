import supabase from "./supaBase"

 export async function  getCabins(){
    let { data, error } = await supabase
    .from('cabins')
    .select('*')
    if(error){
        console.error(error)
        throw new Error("cabins could not be loaded")
    }
    return data
  
}

