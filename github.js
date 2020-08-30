class Github {
    constructor () {
        this.client_id = 'aeb9da58781da79312ed';
        this.client_secret = 'd4ed344e8ee86fbf8e5e83cd723fda993cdacea3';
        this.repos_cont = 5;
        this.repos_sort = 'created: asc'
    }

    async getUser(user){
        const profileRes = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoRes = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_cont}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const profile = await profileRes.json();
        const repos = await repoRes.json();
        return {
            profile,
            repos
        }
    }
}