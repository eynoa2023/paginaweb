



const getAllData =async()=>{
    const response = await fetch("http://10.0.0.8:3000/api/blog/blog")
    const Data = await response.json();

    console.log(Data);
}


getAllData();