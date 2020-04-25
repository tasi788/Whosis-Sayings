function fetcher() {
    return axios.get('./statics/hiraku.txt').then(response => {
        return response.data.split(',').slice(0, -1)
    })
}

fetcher().then(data => {
    var random_string = Math.floor(Math.random() * data.length);
    var vm = new Vue({
        el: "#exhibition",
        data: {
            message: data[random_string]
        }
    });
}).then(function () {
    document.getElementById('message').style.opacity = 1;
})