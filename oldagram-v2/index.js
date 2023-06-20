const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        alt: "portrait of Vincent Van Gogh",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        alt: "portrait of Gustage Courbet",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        alt: "portrait of Joseph Ducreux",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    },

]

const icons = [
    {
        iconlike: "images/icon-heart.png",
        iconcomment: "images/icon-comment.png",
        icondm: "images/icon-dm.png"
    }
]

const renderIcons = () => {
    
    let result = ""
    for (let i = 0; i < icons.length; i++) {
        result += `
        <button class="btn like-btn"><img src="${icons[i].iconlike}" alt="icon-like" class="icon icon-like"></button>
        <button class="btn comment-btn"><img src="${icons[i].iconcomment}" alt="icon-comment" class="icon icon-comment"></button>
        <button class=" btn dm-btn"><img src="${icons[i].icondm}" alt="icon-dm" class="icon icon-dm"></button>
        `
    }
    return result
}

const renderPost = document.querySelector(".render-post")

const render = () => {
    let result = ""
    let iconDiv = renderIcons()
    const post = [...posts]

    for (let i = 0; i < post.length; i++) {
        result += `
        <article class="post-container">
            <div class="header-section">
            <div>
            <img src="${post[i].avatar}" alt="avatar" class="rounded-img avatar">
            </div>
            <div class="user-infos">
                <p class="user-name">${post[i].name}</p>
                <p class="user-location">${post[i].location}</p>
            </div>  
            </div>
            <div class="post-section">
                <img src="${post[i].post}" alt="${post[i].alt}" class="post-img">
            </div>
            <div class="icon-section">
                ${iconDiv}
            </div>
            <div class="comment-section">
                <p class="post-likes"><span class="likes-value">${post[i].likes}</span> likes</p>
                <p class="post-comment"><span class="post-comment-user">${post[i].username}</span> ${post[i].comment}</p>
            </div>
        </article>
        `
    }
    renderPost.innerHTML = result

}

render()