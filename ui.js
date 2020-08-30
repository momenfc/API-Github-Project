class UI {
    constructor(){
        this.profile = document.getElementById('profile');
    }

    showProfile(user){
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid" src="${user.avatar_url}">
                    <a class="btn-block btn btn-primary mt-1" target="_blank" href="${user.html_url}">View Profile</a>
                </div>
                <div class="col-md-9 mt-3">
                    <span class="badge badge-primary mb-1">Repos: ${user.public_repos}</span>
                    <span class="badge badge-warning mb-1">Gists: ${user.public_gists}</span>
                    <span class="badge badge-success mb-1">Followers: ${user.followers}</span>
                    <span class="badge badge-danger mb-1">Following: ${user.following}</span>
                    <ul class="list-group mt-2">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member since: ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
        `;
    }

    showRepos(repos) {
        let output = '';
        repos.forEach((repo) => {            
            output +=  `
                <div class="card card-body mb-1">
                    <div class="row">
                        <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-primary mb-1">Stars: ${repo.stargazers_count}</span>
                            <span class="badge badge-warning mb-1">Watchers: ${repo.watchers}</span>
                            <span class="badge badge-success mb-1">Forks: ${repo.forks}</span>
                            <span class="badge badge-danger mb-1">Lang: ${repo.language}</span>
                        </div>
                    </div>
                </div>
            `;
        });
        const reposBox = document.getElementById('repos');
        reposBox.innerHTML = output;
    }

    showAlert(message, className){
        // remove current alert
        this.clearAlert();
        // create alert body
        const div = document.createElement('div');
        // add class name
        div.className = `alert text-center ${className}`;
        // add text node
        div.appendChild(document.createTextNode(message));
        // get pernt
        const container = document.querySelector('.searchContainer');
        // get search input
        const searchInput = document.querySelector('.search');
        // append alert
        container.insertBefore(div, searchInput);
        setTimeout(() => {
            this.clearAlert()
        }, 2500)
    }

    clearAlert(){
        const alert = document.querySelector('.alert');
        if(alert){
            alert.remove();
        }
    }

    clearProfile(){
        this.profile.innerHTML = '';
    }
}