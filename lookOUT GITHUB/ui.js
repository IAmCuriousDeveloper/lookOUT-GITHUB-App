class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }

    showProfile(user){
        this.profile.innerHTML = `
        <div class = "card card-body mb-3">
        <div class = "row">
        
        <div class="col-md-3">
        <img class="img-fluid mb-2" src="${user.avatar_url}">
        <a href="${user.html_url}" target="_blank" class="btn btn-dark btn-block">View Profile</a>
        </div>
        <div class="col-md-9">
        <span class="badge badge-primary"> Public Repos:${user.public_repos}</span>
        <span class="badge badge-success"> Public Gists:${user.public_gist}</span>
        
        <span class="badge badge-primary"> Followers:${user.followers}</span>
        <span class="badge badge-primary"> Following:${user.following}</span>
        <br><br>
        <ul class = "list-group">
        <li class="list-group-item">Company: ${user.company}</li>
        <li class="list-group-item">website/blog: ${user.blog}</li>
        <li class="list-group-item">Location: ${user.location}</li>
        <li class="list-group-item">Member Since: ${user.created_at}</li>
        </ul>
        
        
        </div>
        </div>
        </div>
        <h3 class="page-geading mb-3">Latest Repos</h3>
        <div id="repos"></div>
        `;

    }

    //show repos
    showRepos(repos){
        let output = '';
        repos.forEach(repo=> {
            output+= `
            <div class = " card card-body mb-2">
            <div class="row">
            <div class = "col-md-6">
            
            <a href=" ${repo.html_url}" target="blank">${repo.name}</a>
            </div>
            <div class = "col-md-6">
            <span class="badge badge-primary"> Stars:${repo.stargazers_count}</span>
        <span class="badge badge-success"> Watchers:${repo.watchers_count}</span>
        
        <span class="badge badge-primary"> Forks:${repo.forms_count}</span>
            
            </div>
            </div>
            </div>`;
            });

            //output repositories
            document.getElementById('repos').innerHTML = output;
    }

    //show alert message
    showAlert(message,className){

        //remove any previous alert first 
        this.clearAlert();
        //create div 
        const div = document.createElement('div');
        //adding classname
        div.className = className;
        //add text 
        div.appendChild(document.createTextNode(message));
        //get parent
        const container = document.querySelector('.searchContainer');
        //get search box
        const search = document.querySelector('.search');
        //insert alert 
        container.insertBefore(div,search);


        //timeout after 3 sec
        setTimeout(()=>{
            this.clearAlert();
        },4000)
    }
    //clear alert message
    clearAlert(){
        const currnetAlert = document.querySelector('.alert');
        if(currnetAlert){
            currnetAlert.remove();
        }
        }


    //clear profile
    clearProfile(){
        this.profile.innerHTML = '';
    }
}