function getLastCommit(githubUsername){
    let githubURL = `https://api.github.com/users/${githubUsername}/events`
    let githubPromise = fetch(githubURL , {headers: {'Authorization': `token ${githubAPI}`}})
      return githubPromise
          .then((response) => {
            return response.json();
        }).then((gitHubEventData) => {
            for (let githubEvent of gitHubEventData){
                if (githubEvent.type === "PushEvent"){
                    console.log(githubEvent.created_at)
                    return new Date(githubEvent.created_at);
                }
            }
        })
}
getLastCommit('ThomsAlexander23')
