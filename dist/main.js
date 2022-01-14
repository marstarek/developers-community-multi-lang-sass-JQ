let profiles = [{
        name: "Tarek Ahemd",
        job: "Developer at UpWork",
        country: "Alexandria ,Egy",
        img: "https://s.gravatar.com/avatar/b3acf1012dd32aa51d759a0a55be09e3?s=200",
        skills: ["CSS", "HTML", "TS", "JS", "React"],
    },
    {
        name: " Ahemd Hosny",
        job: "Developer at AHBS",
        country: "Alexandria ,Egy",
        img: "./img/c2.jpg",
        skills: ["SQL", "HTML", "Python", "JS", "Angular"],
    },
    {
        name: " Muhamed sabry",
        job: "PHP Developer ",
        country: "Alexandria ,Egy",
        img: "./img/c5.jpg",
        skills: ["CSS", "HTML", "PHP", "Larval", "Bootstrap"],
    },
    {
        name: "Maiada Muhamed ",
        job: "MERN Developer ",
        country: "Tanta ,Egy",
        img: "./img/c3.jpg",
        skills: ["Bootstrap", "Larval", "TS", "JS", "Gulp"],
    },
    {
        name: " Hana Hesham",
        job: "JS Developer ",
        country: "Cairo ,Egy",
        img: "./img/c4.jpg",
        skills: ["Redux", "Vue", "Vuex", "JS", "React"],
    },
];

profiles.map((p) => {
    let profilesDev = document.querySelector(".profiles");
    let child = `<div class="profile bg-light">
    <img src=${p.img} class="round-img" alt="" />
    <div>
        <h2 class="name">${p.name}</h2>
        <p class="job">${p.job}</p>
        <p class="country">${p.country}</p>
        <a href="profile.html" class="btn btn-prim"> View Profile </a>
    </div>
    <ul class="profile-list">
        <li class="text-prim"><i class="fas fa-check"></i>${p.skills[0]}</li>
        <li class="text-prim"><i class="fas fa-check"></i>${p.skills[1]}</li>
        <li class="text-prim"><i class="fas fa-check"></i>${p.skills[2]}</li>
        <li class="text-prim"><i class="fas fa-check"></i>${p.skills[3]}</li>
        <li class="text-prim"><i class="fas fa-check"></i>${p.skills[4]}</li>
    </ul>
</div>`;
    profilesDev.insertAdjacentHTML("beforeend", child);
});