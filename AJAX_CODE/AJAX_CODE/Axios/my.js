//<script src="https://cdn.jsdelivr.net/npm/axios@1.6.7/dist/axios.min.js"></script> adding this in a html file where you have youre my.js so after adding you will then have an access to axios in your my.js file
//axios have couple of methods on it

axios.get("https://swapi.dev/api/people/1/")  //it will return  a promise
    .then(res => {
        console.log("response", res);
    }).catch(e => {
    console.log("error",e)
})
//this res--response object -it already has data fully filled in for us ,it parsed the json
//and it filles in this data(key in response object) field with that parsed result ,so we did'nt have to do that extra step that we usse to do while working with fetch
//so the above code block parses the json and adds it on to whaterver this response object includes we don't have to do that extra wwe use to while using fetch

// const getStarWarsPerson = async (id) => {
//     try {
//         const res = await axios.get(`https://swapi.dev/api/people/${id}/`);//using await keyword is important
//         console.log("Response", res);
//         console.log("data", res.data);
//     } catch (e) {
//         console.log("error", e);
//     }
// }

// getStarWarsPerson(5)