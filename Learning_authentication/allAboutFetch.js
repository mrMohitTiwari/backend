///ways to use fetch function 
//Way1 Creating a A function and using promises to handle end data
// function FetchData(){
//     fetch("https://fakerapi.it/api/v1/persons")
//     .then((res)=>res.json())
//     .then((finalData)=>console.log(finalData))
// }
// now the second and the cleaner way to write this is using async-await function
async function FetchData(){
    try{
             const response = await fetch("https://akerapi.it/api/v1/persons");
    const finalData = await response.json();
    console.log(finalData)
    }
   catch(err){
    console.error(err)
   }
  
}
FetchData();