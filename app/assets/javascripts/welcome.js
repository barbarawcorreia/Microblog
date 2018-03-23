function load_posts() {
    var container;
    var cards_element = document.getElementById("cards"); // Pega cards como Pai do elemento que será criado dentro dele card

    $.getJSON("/myposts.json", function (posts) {
        for (let post of posts) {

            var card = document.createElement("div");
            cards_element.appendChild(card);
            card.className = "card pink lighten-2 center-align condensed light card-content white-text";

            var card_title = document.createElement("span");
            card.appendChild(card_title);
            card_title.className = "card-title";
            card_title.textContent = "POST";

            var div = document.createElement("div");
            card.appendChild(div);

            let p = document.createElement("p");
            div.appendChild(p);
            p.textContent = 'TITLE: ' + post.title;

            p = document.createElement("p");
            div.appendChild(p);
            p.textContent = 'TEXT: ' + post.text;

            var bt = document.createElement("button");
            div.appendChild(bt);
            bt.className = "curtir blue darken-4";
            bt.textContent = 'LIKE : ' + likes;
            bt.onclick = count_likes;

            var bt2 = document.createElement("button");
            div.appendChild(bt2);
            bt2.className = "descurtir red darken-4";
            bt2.textContent = 'DISLIKE : ' + likes;
            bt2.onclick = count_dislikes;

        }
        window.scroll(0, 130000);
    });

}

let likes = 0;
let count = 0;

function count_likes() {
    likes++;
}

function count_dislikes() {
    if (likes > 0) {
        likes--;
    }
}

document.getElementsByClassName("open-blog")[0].onclick = load_posts;