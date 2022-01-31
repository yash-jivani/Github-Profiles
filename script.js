const GitAPI = 'https://api.github.com/users/';
const form = document.querySelector('.form');

// console.log(form);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let inputUserName = form.querySelector('input').value;
    console.log(inputUserName);
    // input filed ko phir se blank karne ke liye
    const input = document.querySelector('.search');
    input.value = ''
    getUser(inputUserName);
})

// console.log()
async function getUser(user) {
    const resp = await fetch(GitAPI + user);
    const respData = await resp.json(resp);
    // console.log(respData);
    fillInfo(respData);

}


function fillInfo(respdata) {
    console.log(respdata);

    const userImg = respdata.avatar_url;
    // console.log(userImg);

    const userName = respdata.login;
    // console.log(userName);

    const userBio = respdata.bio;
    const userLocation = respdata.location;
    const userMail = respdata.email;
    console.log(userBio, userLocation, userMail);

    const userFollower = respdata.followers;
    const userFollowing = respdata.following;
    const userRepo = respdata.public_repos;
    console.log(userFollower, userFollowing, userRepo);

    const userProfileLink = respdata.html_url;
    const userRepos = `${respdata.html_url}?tab=repositories`
    console.log(userProfileLink, userRepos);

    if (userImg) {
        document.querySelector('.userImg img').setAttribute('src', userImg);
    }
    if (userName) {
        document.querySelector('.userInfo h1').innerText = userName;
    }
    if (userLocation) {
        document.querySelector('.location').innerText = userLocation;
    }
    else {
        document.querySelector('.location').innerText = 'Not mentioned';
    }
    if (userBio) {
        document.querySelector('.bio').innerHTML = userBio;
    } else {
        document.querySelector('.bio').innerHTML = 'Not mentioned';
    }
    if (userMail) {
        document.querySelector('.mail').innerHTML = userMail;
    } else {
        document.querySelector('.mail').innerHTML = 'Not mentioned';
    }
    if (userFollower) {
        document.querySelector('.count-follower').innerText = userFollower;
    }
    if (userFollowing) {
        document.querySelector('.count-following').innerText = userFollowing;
    }
    if (userRepo) {
        document.querySelector('.count-repo').innerText = userRepo;
    }
    document.querySelector('.profileLink').setAttribute('href', userProfileLink);
    document.querySelector('.repoLink').setAttribute('href', userRepos)

}
