class Post {
    constructor(post) {
        this.post = post;
        this.card = document.createElement("div");
    }

    render() {
        this.card.innerHTML = ''; //faz um reload do cartão, limpando as propriedades antigas e carregando novas.

        this.card.className = "card pink lighten-2 center-align condensed light card-content white-text";

        var card_title = document.createElement("span");
        this.card.appendChild(card_title);
        card_title.className = "card-title";
        card_title.textContent = "POST";

        var div = document.createElement("div");
        this.card.appendChild(div);

        let p = document.createElement("p");
        div.appendChild(p);
        p.textContent = 'TITLE: ' + this.post.title;

        p = document.createElement("p");
        div.appendChild(p);
        p.textContent = 'TEXT: ' + this.post.text;

        var bt = document.createElement("button");
        div.appendChild(bt);
        bt.className = "curtir blue darken-4";
        bt.textContent = 'LIKE : ' + this.post.like;
        bt.onclick = this.count_likes.bind(this);

        var bt2 = document.createElement("button");
        div.appendChild(bt2);
        bt2.className = "descurtir red darken-4";
        bt2.textContent = 'DISLIKE : ' + this.post.dislike;
        bt2.onclick = this.count_dislikes.bind(this);



        return this.card;
    }

    count_likes() {
        const URL_TO_FETCH = "/myposts/" + this.post.id + "/like.json";
        fetch(URL_TO_FETCH, {
                method: 'put'
            })
            .then((response) => {
                response.json().then((post) => {
                    this.post = post;
                    this.render();
                });
            })
    }


    count_dislikes() {
        const URL_TO_FETCH = "/myposts/" + this.post.id + "/dislike.json";
        fetch(URL_TO_FETCH, {
                method: 'put'
            })
            .then((response) => {
                response.json().then((post) => { //att as propriedades p/ gerar o new dislike
                    this.post = post;
                    this.render();
                });
            })
    }

}
