function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data))
}

function displayPosts(posts) {
    const postsContainer = document.getElementById('posts-container')
    for (const post of posts) {
        const div = document.createElement('div')
        div.className = ('bg-rose-200 p-6 rounded-lg')
        div.innerHTML = `
        <h5 class = 'text-lg font-medium'>user - ${post.userId}</h5>
        <h1 class = 'text-xl font-bold mb-2'>${post.title}</h1>
        <p>${post.body}</p>
        `
        // const h1 = document.createElement('h1')
        // const p = document.createElement('p')
        // h1.className = ('text-3xl font-bold')
        // h1.innerText = post.title;
        // p.innerText = post.body;
        // div.appendChild(h1)
        // div.appendChild(p)
        postsContainer.appendChild(div)
    }
}
loadPosts()