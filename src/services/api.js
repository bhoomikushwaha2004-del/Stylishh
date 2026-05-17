// get Method
export  const getData= async()=> {
        try{
        const url = 'https://69a7bb832cd1d055269167fa.mockapi.io/api/v1/cart';
        let result = await fetch(url)

        const response = await result.json();
        return response;
        }
        catch(err){
                console.log(err, 'error in api fetch method');
        }
        
        
}