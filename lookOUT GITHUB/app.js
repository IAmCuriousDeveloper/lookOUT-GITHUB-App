//instantiate github 
const github = new Github;

const ui = new UI;




//Search input 
const searchUser = document.getElementById('searchUser');

//searchinput eventlistners

searchUser.addEventListener('keyup',(e) =>{
    //get input text
    const userText = e.target.value;

    if(userText !== ''){
        //make http call
        github.getUser(userText)
        .then(data=>{
            if(data.profile.message ==='Not Found'){
                //show alert
                ui.showAlert('user not found','alert alert-danger');
        }else{
                //show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
        }
      
    })
    }else{
//clear profile
ui.clearProfile();

    }


});


