// let rates = [
//     {
//         "name": "30 years fixed",
//         "rate": "13",
//         "years": "30"
//     },
//     {
//         "name": "25 years fixed",
//         "rate": "3.8",
//         "years": "25"
//     },
//     {
//         "name": "20 years fixed",
//         "rate": "2.8",
//         "years": "20"
//     },
//     {
//         "name": "15 years fixed",
//         "rate": "2.3",
//         "years": "15"
//     }
//  ];

//  export let findAll = () => new Promise((resolve, reject) => {
//     if (rates) {
//         resolve(rates);
//     } else {
//         reject("No rates");
//     }
// });

import axios from "axios";

const api_url = 'http://localhost:4500/api/rates';

// export const findAll = () => axios.get(api_url)
// export const findAll = async () => {
//     const res = await axios.get(api_url);
//     return res.data;
// };

export const findAll = async () => {
    try {
        const res = await axios.get(api_url);
        return res.data;
    } catch (error) {
        if (error.response) {
            // Request made but the server responded with an error
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            // Request made but no response is received from the server.
            console.log(error.request);
        } else {
            // Error occured while setting up the request
            console.log('Error', error.message);
        }
    }
};