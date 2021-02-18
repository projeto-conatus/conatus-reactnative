// AINDA NÃO FUNCIONA


// const BASE_API = '';

// export default {
//     checkToken: async (token) => {
//         const req = await fetch('${BASE_API}/auth/refresh', {
//             method: 'POST',
//             header: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json'

//             },
//             body: JSON.stringify({token})
//         })
//         const json = await req.json();
//         return json;

//     },

//     SignIn: async (email, password) => {
//         const req = await fetch('${BASE_API}/auth/login', {
//             method: 'POST',
//             header: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json'

//             },
//             body: JSON.stringify({email, password})
//         })
//         const json = await req.json();
//         return json;
//     },

//     signUp: async (email, password) => {
//         const req = await fetch('${BASE_API}/', {
//             method: 'POST',
//             header: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json'

//             },
//             body: JSON.stringify({email, password })
//         })
//         const json = await req.json();
//         return json;

//     },
// }