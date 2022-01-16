let posts = [{
        name: "Tarek Ahemd",
        img: "https://s.gravatar.com/avatar/b3acf1012dd32aa51d759a0a55be09e3?s=200",
        desc: "Aut optio voluptatem soluta. Molestias quas omnis magni odit accusantium qui atque perspiciatis beatae. Ut perferendis nam vel quo. Maxime veritatis laborum ut rerum ea dolorem aspernatur. Libero quaerat placeat voluptatum fugiat. Omnis recusandae voluptatem in.",
        dislikes: "2",
        likes: "4",
    },
    {
        name: " Ahemd Hosny",
        img: "./img/c2.jpg",
        desc: "Aut optio voluptatem soluta. Molestias quas omnis magni odit accusantium qui atque perspiciatis beatae. Ut perferendis nam vel quo. Maxime veritatis laborum ut rerum ea dolorem aspernatur. Libero quaerat placeat voluptatum fugiat. Omnis recusandae voluptatem in.",
        dislikes: "12",
        likes: "40",
    },
    {
        name: " Muhamed sabry",
        img: "./img/c5.jpg",
        desc: "Aut optio voluptatem soluta. Molestias quas omnis magni odit accusantium qui atque perspiciatis beatae. Ut perferendis nam vel quo. Maxime veritatis laborum ut rerum ea dolorem aspernatur. Libero quaerat placeat voluptatum fugiat. Omnis recusandae voluptatem in.",
        dislikes: "22",
        likes: "82",
    },
    {
        name: "Maiada Muhamed ",

        img: "./img/c3.jpg",
        desc: "Aut optio voluptatem soluta. Molestias quas omnis magni odit accusantium qui atque perspiciatis beatae. Ut perferendis nam vel quo. Maxime veritatis laborum ut rerum ea dolorem aspernatur. Libero quaerat placeat voluptatum fugiat. Omnis recusandae voluptatem in.",
        dislikes: "24",
        likes: "60",
    },
    {
        name: " Hana Hesham",

        img: "./img/c4.jpg",
        desc: "Aut optio voluptatem soluta. Molestias quas omnis magni odit accusantium qui atque perspiciatis beatae. Ut perferendis nam vel quo. Maxime veritatis laborum ut rerum ea dolorem aspernatur. Libero quaerat placeat voluptatum fugiat. Omnis recusandae voluptatem in.",
        dislikes: "50",
        likes: "55",
    },
];

posts.map((post) => {
    let postsDev = document.querySelector(".posts");
    console.log(postsDev);

    let child = `  <div  class="lang       post bg-white my-1 p-1">
    <div>
        <a href="profile.html">
            <img  class="lang       round-img" src=${post.img} alt="" />
            <h4>${post.name}</h4>
        </a>
    </div>

    <div>
        <p  class="lang       my-1">
        ${post.desc}
        </p>
        <button  class="lang       btn">
<i  class="lang       fas fa-thumbs-up"></i> <span>       ${post.likes}</span>
</button>
        <button  class="lang       btn">
<i  class="lang       fas fa-thumbs-down"><span>    </i>   ${post.dislikes}</span> 
</button>
        <a href="post.html"  class="lang       btn btn-prim"> Discussion </a>
    </div>
</div>`;
    postsDev.insertAdjacentHTML("beforeend", child);
});