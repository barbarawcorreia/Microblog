function load_obj_json() {
    var container;
    $.getJSON("/myjson.json", function (posts) {
        for (let post of posts) {

            var div = document.createElement("div");
            container = document.getElementById("posts");
            container.appendChild(div);
            var p = document.createElement("p");
            div.appendChild(p);
            p.textContent = 'Title : ' + post.title;
            var p2 = document.createElement("p");
            div.appendChild(p2);
            p2.textContent = 'Text' + post.text;

        }
    });
}
load_obj_json();
