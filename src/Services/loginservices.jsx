async function loginService(username, password){
    let data={
        'username':username,
        'password':password
    }
    console.log(data)
    let url="http://localhost:3001/auth/v1";
    const response = await fetch(url,{
        method:'POST',
        mode:'cors',
        cache:'no-cache',
        credentials:'same-origin',
        headers:{
            'content-Type':'application/json'
        },
        body: JSON.stringify(data)
    })
    
    return await response.json();
}
export default loginService


// async function fetchFunction(apiurl,cardlist) {
//     let loginData = await fetch(apiurl)
//         .then((response) => response.json())
//         .then(data => {
//             cardlist.push(data.articles)
//             return data;
//         });

//     // this.setState({
//     //     cardlist
//     // })
//     return {
//         payload: loginData.articles
//     }


// }

// // default export loginService;
// module.exports =loginService;