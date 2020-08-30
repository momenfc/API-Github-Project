// instantiate Githup
const githup = new Github;
// inst UI
const ui = new UI;

// search input
const searchUser = document.getElementById('searchUser');

// add search inputevent
searchUser.addEventListener('keyup', (e) => {
    const input = e.target.value;
    if(input !== ''){
        githup.getUser(input)
        .then(data => {
            if(data.profile.message === 'Not Found'){
                // show alert
                ui.showAlert('User Not Found', 'alert-danger')
            } else {
                // show profile
                ui.showProfile(data.profile);
                // show repos
                ui.showRepos(data.repos);
            }
        });
        
    } else {
        // clear profile
        ui.clearProfile();
    }
});
