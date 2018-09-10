class Github {
    constructor(){
        this.client_id ='e6b6fc6a5a78439c18a1';
        this.client_secret = 'b74505bbf4a7381e4513bc9a8d71c3a0c007cb44';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

        async getUser(user){
            const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);


            const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        
        
            const profile =  await profileResponse.json();
            const repos = await repoResponse.json();


            return{
                profile, //returning data in the form of object
               repos        
            }
        
        }

}