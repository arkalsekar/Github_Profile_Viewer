
let query = window.location.search.split('?query=')

if (query[1] < 2) {
    alert("Enter a Valid username")
}

const url = String("https://api.github.com/users/" + query[1]);
console.log(url)

fetch(url)
    .then(response => {
        // indicates whether the response is successful (status code 200-299) or not
        if (!response.ok) {
            throw new Error(`Request failed with status ${reponse.status}`)
            alert("User not Found")
        }
        return response.json()
    })

    .then(data => {
        if (data.message == "Not Found") {
            alert("Enter a Valid Username")
        }
        else {
            let inserdata = document.getElementById('insertData');

            let ele = `

        <h3>${data.name}</h3>
        <h1>
        <a href="${data.html_url}" target="__blank"> <img src="${data.avatar_url}" height="250px" , width="250px" , class="rounded-circle"><br> </a> 
        </h1>
        <br>
        <p> Location : ${data.location} </p>
        <p> ${data.bio} </p>
        <a href="https://github.com/${data.login}?tab=followers" target="__blank" class="btn btn-success my-2 mx-2"> ${data.followers} Followers </a>
        <a href="https://github.com/${data.login}?tab=following" target="__blank" class="btn btn-danger my-2 mx-2"> ${data.following} Following </a>
        <a href="https://github.com/${data.login}?tab=repositories" target="__blank" class="btn btn-primary my-2 mx-2"> ${data.public_repos} Public Repos </a>
        <a href="${data.blog}" target="__blank" class="btn btn-secondary my-2 mx-2">  Blog </a>

        <div id="repos"> </div>

        `

            inserdata.innerHTML = ele
            console.log(data.avatar_url)
            // console.log(data)

            const repo_url = `https://api.github.com/users/${data.login}/repos`

            fetch(repo_url)
                .then(response => {
                    // indicates whether the response is successful (status code 200-299) or not
                    if (!response.ok) {
                        throw new Error(`Request failed with status ${reponse.status}`)
                    }
                    return response.json()
                })

                .then(data => {
                    if (data.message == "Not Found") {
                        alert("Enter a Valid Username")
                    }
                    else {
                        // console.log(data)
                        let show_repos = document.getElementById('repos')
                        let new_arr = data.slice(0, 10)
                        console.log(new_arr[0].name)

                        let ele =
                            `
                            <div class="card m-3">
                            <div class="card-header">
                                Featured
                            </div>
                            <div class="card-body">
                                <h5 class="card-title"> ${new_arr[0].full_name}</h5>
                                <p class="card-text"> ${new_arr[0].description} </p>
                                <a href="${new_arr[0].svn_url}" class="btn btn-success">View Repo</a>
                            </div>
                            </div>

                            <div class="card m-3">
                            <div class="card-header">
                                Featured
                            </div>
                            <div class="card-body">
                                <h5 class="card-title"> ${new_arr[1].full_name}</h5>
                                <p class="card-text"> ${new_arr[1].description} </p>
                                <a href="${new_arr[1].svn_url}" class="btn btn-success">View Repo</a>
                            </div>
                            </div>

                            <div class="card m-3">
                            <div class="card-header">
                                Featured
                            </div>
                            <div class="card-body">
                                <h5 class="card-title"> ${new_arr[2].full_name}</h5>
                                <p class="card-text"> ${new_arr[2].description} </p>
                                <a href="${new_arr[2].svn_url}" class="btn btn-success">View Repo</a>
                            </div>
                            </div>

                            <div class="card m-3">
                            <div class="card-header">
                                Featured
                            </div>
                            <div class="card-body">
                                <h5 class="card-title"> ${new_arr[3].full_name}</h5>
                                <p class="card-text"> ${new_arr[3].description} </p>
                                <a href="${new_arr[3].svn_url}" class="btn btn-success">View Repo</a>
                            </div>
                            </div>


                            <div class="card m-3">
                            <div class="card-header">
                                Featured
                            </div>
                            <div class="card-body">
                                <h5 class="card-title"> ${new_arr[4].full_name}</h5>
                                <p class="card-text"> ${new_arr[4].description} </p>
                                <a href="${new_arr[4].svn_url}" class="btn btn-success">View Repo</a>
                            </div>
                            </div>
                
                            <div class="card m-3">
                            <div class="card-header">
                                Featured
                            </div>
                            <div class="card-body">
                                <h5 class="card-title"> ${new_arr[5].full_name}</h5>
                                <p class="card-text"> ${new_arr[5].description} </p>
                                <a href="${new_arr[5].svn_url}" class="btn btn-success">View Repo</a>
                            </div>
                            </div>
                
                `


                        show_repos.innerHTML = ele

                    }
                })
        }

    })
    .catch(error => alert(error)
    )