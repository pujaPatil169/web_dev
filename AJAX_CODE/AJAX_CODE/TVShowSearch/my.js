const form = document.querySelector('#searchForm');
form.addEventListener('submit',async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`);
    
    // console.log(res.data);
    for (i = 0; i < res.data.length;i++) {
        const img = document.createElement('img');
        img.src = res.data[i].show.image.medium;
        document.body.append(img);
    }

})

//params --query parameters