function load_posts() {
    var container;
    var cards_element = document.getElementById("cards"); // Pega cards como Pai do elemento que será criado dentro dele card

    $.getJSON("/myjson.json", function (posts) {
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

        }
    window.scroll(0,130000);
    });

}
document.getElementsByClassName("open-blog")[0].onclick = load_posts;
