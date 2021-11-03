
const url = "http://localhost:3002/api/";

export const ApiService = {

    get(endPoint){
        return fetch(`${url}${endPoint}`).then(reponse => reponse.json());
    },

    post(endPoint, data)
    {
        return fetch(url+endPoint,
        {
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        }).then(reponse => reponse.json()) 
        .then(console.log);
    },

    delete(endPoint)
    {
        return fetch(`${url}${endPoint}`,
        {
            method: 'DELETE'
        }).then(reponse => reponse.json()); 
    }


}           