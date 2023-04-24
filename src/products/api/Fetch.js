
export const Fetch = async (category, id) => {

    try {

        const request = await fetch(`https://dummyjson.com/products/category/${category}`, {
            method: 'get',
            mode: 'cors',
            cache: 'force-cache'
        });

        if(request){

            const response = await request.json();

            return response;

        };

    }catch (error) {

            console.log(error);
    
            throw new Error('Error al cargar');

    }

}
    export const FetchSearch = async (data)=> {

    try{
        const search = await fetch (`https://dummyjson.com/products/search?q=${data.search}` , {
            method: 'get',
            mode: 'cors',
            cache: 'force-cache'
        })

        if(search){

            const response = await search.json();

            return response;

        };

        
    } catch (error) {

        console.log(error);

        throw new Error('Error al cargar');
        
    };
}

 export const fetchDataCategory = async (title) => {

    try {

        const request = await fetch(`https://dummyjson.com/products/category/${title}`, {
            method: 'get',
            mode: 'cors',
            cache: 'force-cache'
        });

        if(request){

            const response = await request.json();

            return response;

        };

    }catch (error) {

            console.log(error);
    
            throw new Error('Error al cargar');

    }
    
    };


