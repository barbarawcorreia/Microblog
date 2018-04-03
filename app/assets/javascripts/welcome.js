// main
//= require post.js

function load_posts() {
    var container;
    var cards_element = document.getElementById("cards"); // Pega cards como Pai do elemento que será criado dentro dele card

    $.getJSON("/myposts.json", function (posts) {
        for (let post of posts) {
            let postComponent = new Post(post);
            cards_element.appendChild(postComponent.render());
            //idem para comentários.
        }
        window.scroll(0, 130000);
    });
}

document.getElementsByClassName("open-blog")[0].onclick = load_posts;