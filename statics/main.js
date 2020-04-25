function fetcher() {
    return axios.get('./statics/saying.txt').then(response => {
        return response.data.split(',,').slice(0, -1)
    })
}

fetcher().then(data => {
    var random_string = Math.floor(Math.random() * data.length);
    var vm = new Vue({
        el: "#exhibition",
        data: {
            name: data[random_string].split(',')[0],
            id: '@' + data[random_string].split(',')[1],
            message: data[random_string].split(',')[2],
        }
    });
    var vm_icon = new Vue({
        el: "#icon",
        data: {
            icon: "./statics/" + data[random_string].split(',')[1] + '.jpeg'
        }
    })
})