const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const mainEl = document.querySelector("main");
for(let i=0; i<posts.length; i++){
    let post;
    post =
        `<section>
            <div class="container">
                <img class="avatar" src="${posts[i].avatar}" alt="${posts[i].name} avatar">
                <div class="author">
                    <h2 class="name">${posts[i].name}</h2>
                    <p class="location">${posts[i].location}</p>
                </div>
            </div>

            <img class="post" src="${posts[i].post}" alt="Vincent van Gogh post">

            <div class="container">
                <div class="share">
                    <img class="heart-icon" src="images/icon-heart.png" alt="heart icon">
                    <img class="comment-icon" src="images/icon-comment.png" alt="comment icon">
                    <img class="dm-icon" src="images/icon-dm.png" alt="dm icon">
                </div>
                <p class="like">${posts[i].likes} likes</p>
                <p>
                    <span class="username">${posts[i].username}</span> 
                    <span class="comment">${posts[i].comment}</span>
                </p>
            </div>
        </section>`;
    mainEl.innerHTML += post;
}


const heartIcon = document.querySelectorAll(".heart-icon");
for(let i=0; i<heartIcon.length; i++){
    heartIcon[i].addEventListener("click", ()=>{
        let currentLikes = Number(posts[i].likes) + 1;
        posts[i].likes = currentLikes;
        const likeEls = document.querySelectorAll(".like");
        likeEls[i].innerHTML = `${currentLikes} likes`;
    });
}



