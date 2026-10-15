const characters = [
    {
        id: "miyu",
        name: "Miyu Suzuki",
        group: "main",
        role: "Main Character",
        hue: "#ff8fc0,#ffc08f",
        image: "./Images/miyu-suzuki.jpg",

        personality: "Bright, outgoing and expressive",
        appearance: "Stylish, colorful and eye-catching",

        description:
            "Miyu is the energetic half of the pair. She says what she feels, makes friends easily, and brings color to every room she walks into.",

        likes: ["Hanging out with friends", "Chatting", "Fashion"],
        dislikes: ["Awkward silences", "Being bored"],

        traits: ["Cheerful", "Sociable", "Honest"],
        activity: "Chatting with the whole class",

        tags: ["Energetic", "Social", "Lead"],

        bond:
            "Her opposite, Yuusuke, fascinates her. She wants to understand how he sees the world.",

        relationships: [
            {
                to: "yuusuke",
                text: "Her opposite and the person she is learning to understand."
            },
            {
                to: "yamada",
                text: "Class friend."
            },
            {
                to: "nishi",
                text: "Class friend."
            }
        ]
    },

    {
        id: "yuusuke",
        name: "Yuusuke Tani",
        group: "main",
        role: "Main Character",
        hue: "#6a7bd8,#2c3a7a",
        image: "./Images/yuusuke-tani1.jpg",

        personality: "Quiet, thoughtful and reserved",
        appearance: "Neat and understated",

        description:
            "Yuusuke is calm and keeps to himself. He thinks before he speaks, and his gentle honesty makes his words count.",

        likes: ["Quiet time", "Reading", "Calm routines"],
        dislikes: ["Loud crowds", "Being rushed"],

        traits: ["Calm", "Observant", "Sincere"],
        activity: "Reading in a quiet corner",

        tags: ["Reserved", "Thoughtful", "Lead"],

        bond:
            "Miyu's brightness is unfamiliar to him, but it slowly becomes something he looks forward to.",

        relationships: [
            {
                to: "miyu",
                text: "Her opposite. Her energy challenges and warms him."
            },
            {
                to: "yamada",
                text: "Classmate."
            },
            {
                to: "nishi",
                text: "Classmate."
            }
        ]
    },

    {
        id: "yamada",
        name: "Yamada",
        group: "miyu",
        role: "Classmate / Nishi's partner",
        hue: "#ffb36b,#ff7fa0",
        image: "./Images/yamada.jpg",

        personality: "Friendly and lively",

        description:
            "Yamada is Nishi's partner and part of the circle around Miyu and Yuusuke. As the other couple in the class, they add warmth and humor to school life.",

        likes: ["Group chats", "Class events"],
        dislikes: ["Dull lunch breaks"],

        traits: ["Supportive", "Funny"],
        activity: "Cheering on friends",

        tags: ["Couple", "Friend", "Comic relief"],

        relationships: [
            {
                to: "miyu",
                text: "Friend."
            },
            {
                to: "yuusuke",
                text: "Classmate."
            },
            {
                to: "nishi",
                text: "Nishi's partner. They are a couple."
            }
        ]
    },

    {
        id: "nishi",
        name: "Nishi",
        group: "miyu",
        role: "Classmate / Yamada's partner",
        hue: "#7ec8ff,#8c8cff",
        image: "./Images/nishi.jpg",

        personality: "Easygoing and observant",

        description:
            "Nishi is Yamada's partner and a steady presence in the friend group. As the other couple in the class, they add warmth and humor to school life.",

        likes: ["Observing people", "Relaxed afternoons"],
        dislikes: ["Drama"],

        traits: ["Steady", "Perceptive"],
        activity: "Quietly watching the action",

        tags: ["Couple", "Friend", "Observer"],

        relationships: [
            {
                to: "yuusuke",
                text: "Friend."
            },
            {
                to: "miyu",
                text: "Classmate."
            },
            {
                to: "yamada",
                text: "Yamada's partner. They are a couple."
            }
        ]
    },

    {
        id: "c2",
        name: "Shuuji Taira",
        group: "miyu",
        role: "Classmate",
        hue: "#c4a6ff,#ff9ec7",
        image: "./Images/shuuji-taira.jpg",

        personality: "Cynical, insecure, and self-conscious.",

        appearance: "Messy brown hair and a reserved appearance.",

        description:
            "He tends to overthink social situations and compare himself to others, often putting himself down. Despite this, he is caring and protective toward his friends.",

        likes: ["Spending time with friends", "Quiet moments"],
        dislikes: ["Awkward situations", "Comparing himself to others"],

        traits: ["Cynical", "Insecure", "Caring"],
        activity: "Observing the people around him",

        tags: ["Classmate", "Reserved"],

        relationships: [
            {
                to: "miyu",
                text: "Classmate."
            },
            {
                to: "c1",
                text: "Classmate."
            }
        ]
    },

    {
        id: "c1",
        name: "Shino Azuma",
        group: "miyu",
        role: "Classmate",
        hue: "#9be0c0,#7ec8ff",
        image: "./Images/shino-azuma.jpg",

        personality: "Calm, mature, and somewhat jaded.",

        appearance: "Elegant and composed with a calm expression.",

        description:
            "She can appear emotionally detached, but she's actually observant, kind, and supportive toward the people around her. She also has a playful side that comes out around Taira.",

        likes: ["Quiet conversations", "Observing people"],
        dislikes: ["Unnecessary drama"],

        traits: ["Calm", "Mature", "Observant"],
        activity: "Watching and listening to conversations",

        tags: ["Classmate", "Mature"],

        relationships: [
            {
                to: "yuusuke",
                text: "Classmate."
            },
            {
                to: "c2",
                text: "Classmate."
            }
        ]
    }
];




const groupInfo = {
    main: {
        title: "Main Characters",
        cls: "g-main"
    },

    miyu: {
        title: "Miyu's Friends",
        cls: "g-miyu"
    }
};



const filterMap = {
    all: () => true,

    main: c =>
        c.group === "main",

    friends: c =>
        c.group === "miyu"
};




const story = [
    [
        "First Impressions",
        "Miyu is lively and Yuusuke is calm. At first they seem to have nothing in common, and neither quite knows what to make of the other."
    ],

    [
        "Getting Closer",
        "Small everyday exchanges in class turn into real conversations, and curiosity replaces awkwardness."
    ],

    [
        "Understanding Each Other",
        "They learn that different does not mean incompatible. Each starts to see the world a little through the other's eyes."
    ],

    [
        "Friends and Classmates",
        "Yamada, Nishi and the rest of the class add humor, teasing and support to school life."
    ],

    [
        "Growing Together",
        "Honest communication and shared moments help a first romance grow naturally between two opposites."
    ]
];




const galleryItems = [
    "Miyu",
    "Yuusuke",
    "Miyu & Yuusuke",
    "Yamada",
    "Nishi",
    "Classmates",
    "School scene",
    "Friendship scene",
    "Romantic moment",
    "Funny moment"
].map((cap, i) => ({
    cap,
    image: `./Images/gallery-${i + 1}.jpg`,
    g: characters[i % characters.length].hue
}));




const $ = (s, r = document) =>
    r.querySelector(s);

const $$ = (s, r = document) =>
    [...r.querySelectorAll(s)];

const byId = id =>
    characters.find(c => c.id === id);




const esc = s =>
    String(s).replace(
        /[&<>"]/g,
        m => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;"
        }[m])
    );


    

const pic = c => `
    <div class="pic" style="--g:linear-gradient(160deg,${c.hue})">
        <img
            src="${c.image}"
            alt="${esc(c.name)}"
            loading="lazy"
            onerror="this.remove()"
        >

        <b>${esc(c.name[0])}</b>
    </div>
`;



let favs = [];

try {
    favs = JSON.parse(localStorage.getItem("favs")) || [];
} catch (e) {
    favs = [];
}


const saveFavs = () => {
    try {
        localStorage.setItem(
            "favs",
            JSON.stringify(favs)
        );
    } catch (e) {
        console.error("Could not save favorites.");
    }
};




const actions = c => `
    <div class="actions">

        <button data-details="${c.id}">
            View Details
        </button>

        <button
            class="fav ${favs.includes(c.id) ? "on" : ""}"
            data-fav="${c.id}"
        >
            ${favs.includes(c.id) ? "♥" : "♡"} Favorite
        </button>

    </div>
`;




function cardHTML(c) {

    return `
        <article
            class="card reveal scale"
            data-id="${c.id}"
        >

            ${pic(c)}

            <div class="body">

                <h3>
                    ${esc(c.name)}
                </h3>

                <div class="role">
                    ${esc(c.role)}
                </div>

                <p>
                    ${esc(c.description)}
                </p>

                <p class="meta">
                    <b>Personality:</b>
                    ${esc(c.personality)}
                </p>

                <p class="meta">
                    <b>Relationships:</b>
                    ${
                        c.relationships
                            .map(r => {
                                const character = byId(r.to);
                                return character
                                    ? esc(character.name.split(" ")[0])
                                    : "";
                            })
                            .filter(Boolean)
                            .join(", ")
                    }
                </p>

                <p class="meta">
                    <b>Favorite activity:</b>
                    ${esc(c.activity)}
                </p>

                <div class="tags">
                    ${
                        c.tags
                            .map(t => `
                                <span>
                                    ${esc(t)}
                                </span>
                            `)
                            .join("")
                    }
                </div>

                ${actions(c)}

            </div>

        </article>
    `;
}




function bigHTML(c, cls) {

    return `
        <article
            class="card big ${cls} reveal ${cls === "miyu" ? "left" : "right"}"
        >

            ${pic(c)}

            <div class="body">

                <h3>
                    ${esc(c.name)}
                </h3>

                <div class="role">
                    ${esc(c.role)}
                </div>

                <dl>

                    <dt>Personality</dt>
                    <dd>
                        ${esc(c.personality)}
                    </dd>

                    <dt>Appearance</dt>
                    <dd>
                        ${esc(c.appearance)}
                    </dd>

                    <dt>Likes</dt>
                    <dd>
                        ${c.likes.join(", ")}
                    </dd>

                    <dt>Dislikes</dt>
                    <dd>
                        ${c.dislikes.join(", ")}
                    </dd>

                    <dt>Traits</dt>
                    <dd>
                        ${c.traits.join(", ")}
                    </dd>

                    <dt>About</dt>
                    <dd>
                        ${esc(c.description)}
                    </dd>

                    <dt>
                        With ${cls === "miyu" ? "Yuusuke" : "Miyu"}
                    </dt>

                    <dd>
                        ${esc(c.bond)}
                    </dd>

                </dl>

                <div class="actions">

                    <button data-details="${c.id}">
                        View Profile
                    </button>

                    <button
                        class="fav ${favs.includes(c.id) ? "on" : ""}"
                        data-fav="${c.id}"
                    >
                        ${favs.includes(c.id) ? "♥" : "♡"} Favorite
                    </button>

                </div>

            </div>

        </article>
    `;
}




function renderAll() {

    const mainCards = $("#mainCards");

    if (mainCards) {
        mainCards.innerHTML =
            bigHTML(byId("miyu"), "miyu") +
            bigHTML(byId("yuusuke"), "yuu");
    }


    const groups = $("#groups");

    if (groups) {

        groups.innerHTML =
            Object.keys(groupInfo)
                .map(g => {

                    const list =
                        characters.filter(
                            c => c.group === g
                        );

                    return `
                        <div
                            class="group ${groupInfo[g].cls}"
                            data-group="${g}"
                        >

                            <h3>
                                ${groupInfo[g].title}
                            </h3>

                            <div class="grid">
                                ${
                                    list
                                        .map(cardHTML)
                                        .join("")
                                }
                            </div>

                        </div>
                    `;
                })
                .join("");
    }


    renderFavs();
    applyFilters();
    observeReveals();
}




function renderFavs() {

    const favGrid = $("#favGrid");
    const favEmpty = $("#favEmpty");

    if (!favGrid) return;

    const list =
        favs
            .map(byId)
            .filter(Boolean);

    favGrid.innerHTML =
        list
            .map(cardHTML)
            .join("");

    if (favEmpty) {
        favEmpty.hidden =
            list.length > 0;
    }

    $$("#favGrid .reveal")
        .forEach(e =>
            e.classList.add("in")
        );
}




let filter = "all";


function applyFilters() {

    const search = $("#search");

    if (!search) return;

    const q =
        search.value
            .trim()
            .toLowerCase();

    let shown = 0;


    $$("#groups .group")
        .forEach(group => {

            let n = 0;


            $$(".card", group)
                .forEach(card => {

                    const c =
                        byId(card.dataset.id);

                    if (!c) return;


                    const hay = [
                        c.name,
                        c.personality,
                        c.role,
                        c.tags.join(" ")
                    ]
                        .join(" ")
                        .toLowerCase();


                    const filterFunction =
                        filterMap[filter] ||
                        filterMap.all;


                    const ok =
                        filterFunction(c) &&
                        hay.includes(q);


                    card.hidden = !ok;

                    if (ok) {
                        n++;
                    }

                });


            group.hidden = n === 0;

            shown += n;

        });


    const empty = $("#empty");

    if (empty) {
        empty.hidden = shown > 0;
    }
}




const searchInput = $("#search");

if (searchInput) {
    searchInput.addEventListener(
        "input",
        applyFilters
    );
}





const filters = $("#filters");

if (filters) {

    filters.addEventListener(
        "click",
        e => {

            const b =
                e.target.closest(".chip");

            if (!b) return;


            $$("#filters .chip")
                .forEach(x =>
                    x.classList.toggle(
                        "active",
                        x === b
                    )
                );


            filter =
                b.dataset.f || "all";

            applyFilters();

        }
    );
}





const modal = $("#modal");
const lightbox = $("#lightbox");


function openModal(id) {

    const c = byId(id);

    if (!c || !modal) return;


    $("#modalBody").innerHTML = `

        <div class="m-grid">

            ${pic(c)}

            <div class="m-text">

                <h3>
                    ${esc(c.name)}
                </h3>

                <div class="role">
                    ${esc(c.role)}
                </div>

                <p>
                    ${esc(c.description)}
                </p>

                <h4>
                    Personality
                </h4>

                <p>
                    ${esc(c.personality)}
                </p>

                <h4>
                    Appearance
                </h4>

                <p>
                    ${esc(c.appearance || "Not available")}
                </p>

                <h4>
                    Likes
                </h4>

                <ul>
                    ${
                        c.likes
                            .map(x => `
                                <li>
                                    ${esc(x)}
                                </li>
                            `)
                            .join("")
                    }
                </ul>

                <h4>
                    Dislikes
                </h4>

                <ul>
                    ${
                        c.dislikes
                            .map(x => `
                                <li>
                                    ${esc(x)}
                                </li>
                            `)
                            .join("")
                    }
                </ul>

                <h4>
                    Relationships
                </h4>

                <ul>
                    ${
                        c.relationships
                            .map(r => {

                                const related =
                                    byId(r.to);

                                if (!related) {
                                    return "";
                                }

                                return `
                                    <li>
                                        <b>
                                            ${esc(related.name)}:
                                        </b>
                                        ${esc(r.text)}
                                    </li>
                                `;
                            })
                            .join("")
                    }
                </ul>

                <h4>
                    Additional info
                </h4>

                <p>
                    Favorite activity:
                    ${esc(c.activity)}.

                    Traits:
                    ${c.traits
                        .map(esc)
                        .join(", ")}.
                </p>

            </div>

        </div>
    `;


    show(modal);
}





const show = m => {

    if (!m) return;

    m.classList.add("open");

    m.setAttribute(
        "aria-hidden",
        "false"
    );
};


const hide = m => {

    if (!m) return;

    m.classList.remove("open");

    m.setAttribute(
        "aria-hidden",
        "true"
    );
};


$$(".modal")
    .forEach(m => {

        m.addEventListener(
            "click",
            e => {

                if (
                    e.target === m ||
                    e.target.closest("[data-close]")
                ) {
                    hide(m);
                }

            }
        );

    });



    
document.addEventListener(
    "click",
    e => {

        const details =
            e.target.closest("[data-details]");

        if (details) {

            openModal(
                details.dataset.details
            );

            return;
        }


        const favorite =
            e.target.closest("[data-fav]");

        if (!favorite) return;


        const id =
            favorite.dataset.fav;


        if (favs.includes(id)) {

            favs =
                favs.filter(
                    x => x !== id
                );

        } else {

            favs = [
                ...favs,
                id
            ];

        }


        saveFavs();


        $$(`[data-fav="${id}"]`)
            .forEach(button => {

                const on =
                    favs.includes(id);

                button.classList.toggle(
                    "on",
                    on
                );

                button.textContent =
                    (on ? "♥" : "♡") +
                    " Favorite";
            });


        renderFavs();

    }
);





function renderMap() {

    const map = $("#map");

    if (!map) return;


    const node = id => {

        const character =
            byId(id);

        if (!character) {
            return "";
        }

        return `
            <button
                class="node"
                data-node="${id}"
            >
                ${esc(
                    character.name.split(" ")[0]
                )}
            </button>
        `;
    };


    map.innerHTML = `

        <div class="row">

            ${node("miyu")}

            ${node("yuusuke")}

        </div>

        <div class="arrow">
            ↕ ❤️ ↕
        </div>

        <div class="row">

            ${node("yamada")}

            <span
                class="arrow"
                style="flex-basis:auto"
            >
                💞
            </span>

            ${node("nishi")}

            ${["c1", "c2"]
                .map(node)
                .join("")}

        </div>
    `;
}





const map = $("#map");

if (map) {

    map.addEventListener(
        "click",
        e => {

            const n =
                e.target.closest(".node");

            if (!n) return;


            const c =
                byId(n.dataset.node);

            if (!c) return;


            const linked =
                new Set(
                    c.relationships.map(
                        r => r.to
                    )
                );


            characters.forEach(o => {

                o.relationships.forEach(r => {

                    if (r.to === c.id) {
                        linked.add(o.id);
                    }

                });

            });


            map.classList.add(
                "has-sel"
            );


            $$(".node")
                .forEach(x => {

                    x.classList.toggle(
                        "sel",
                        x === n
                    );

                    x.classList.toggle(
                        "linked",
                        linked.has(
                            x.dataset.node
                        )
                    );

                });


            const relInfo =
                $("#relInfo");

            if (!relInfo) return;


            relInfo.innerHTML = `

                <h3>
                    ${esc(c.name)}
                </h3>

                <ul>

                    ${
                        c.relationships
                            .map(r => {

                                const related =
                                    byId(r.to);

                                if (!related) {
                                    return "";
                                }

                                return `
                                    <li>

                                        <b>
                                            ${esc(
                                                related.name
                                            )}:
                                        </b>

                                        ${esc(r.text)}

                                    </li>
                                `;

                            })
                            .join("")
                    }

                </ul>
            `;

        }
    );
}





const timeline = $("#timeline");

if (timeline) {

    timeline.innerHTML =
        story
            .map((s, i) => `
                <div
                    class="step reveal ${
                        i % 2
                            ? "right"
                            : "left"
                    }"
                    data-n="${i + 1}"
                >

                    <div class="card box">

                        <h3>
                            ${esc(s[0])}
                        </h3>

                        <p>
                            ${esc(s[1])}
                        </p>

                    </div>

                </div>
            `)
            .join("");
}





let gi = 0;

const gallery = $("#gallery");

if (gallery) {

    gallery.innerHTML =
        galleryItems
            .map((g, i) => `
                <button
                    class="tile reveal scale"
                    data-i="${i}"
                    style="--g:linear-gradient(160deg,${g.g})"
                >

                    <img
                        src="${g.image}"
                        alt="${esc(g.cap)}"
                        loading="lazy"
                        onerror="this.remove()"
                    >

                    <span>
                        ${esc(g.cap)}
                    </span>

                </button>
            `)
            .join("");
}





function showLB(i) {

    if (!galleryItems.length) return;


    gi =
        (i + galleryItems.length) %
        galleryItems.length;


    const g =
        galleryItems[gi];


    const lbImg =
        $("#lbImg");

    const lbCap =
        $("#lbCap");


    if (!lbImg) return;


    lbImg.style.background =
        `linear-gradient(160deg,${g.g})`;


    lbImg.innerHTML = `

        <img
            src="${g.image}"
            alt="${esc(g.cap)}"
            onerror="this.remove()"
        >

        <span>
            ${esc(g.cap)}
        </span>
    `;


    if (lbCap) {

        lbCap.textContent =
            `${g.cap} (${gi + 1}/${galleryItems.length})`;

    }
}





if (gallery) {

    gallery.addEventListener(
        "click",
        e => {

            const tile =
                e.target.closest(".tile");

            if (!tile) return;


            showLB(
                Number(tile.dataset.i)
            );


            if (lightbox) {
                show(lightbox);
            }

        }
    );
}





const prevButton = $("#prev");
const nextButton = $("#next");


if (prevButton) {

    prevButton.onclick = () =>
        showLB(gi - 1);
}


if (nextButton) {

    nextButton.onclick = () =>
        showLB(gi + 1);
}




document.addEventListener(
    "keydown",
    e => {

        if (e.key === "Escape") {

            $$(".modal")
                .forEach(hide);
        }


        if (
            lightbox &&
            lightbox.classList.contains("open")
        ) {

            if (e.key === "ArrowLeft") {
                showLB(gi - 1);
            }

            if (e.key === "ArrowRight") {
                showLB(gi + 1);
            }

        }

    }
);





const burger = $("#burger");
const links = $("#navLinks");


if (burger && links) {

    burger.onclick = () => {

        const open =
            links.classList.toggle("open");


        burger.classList.toggle(
            "open",
            open
        );


        burger.setAttribute(
            "aria-expanded",
            String(open)
        );

    };


    links.addEventListener(
        "click",
        e => {

            if (
                e.target.closest("a")
            ) {

                links.classList.remove(
                    "open"
                );

                burger.classList.remove(
                    "open"
                );

                burger.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }

        }
    );
}





const themeBtn = $("#themeBtn");


function setTheme(t) {

    document.documentElement.dataset.theme =
        t;


    if (themeBtn) {

        themeBtn.textContent =
            t === "dark"
                ? "☀"
                : "🌙";
    }


    try {

        localStorage.setItem(
            "theme",
            t
        );

    } catch (e) {
        console.error(
            "Could not save theme."
        );
    }
}


let savedTheme = null;

try {

    savedTheme =
        localStorage.getItem(
            "theme"
        );

} catch (e) {
    savedTheme = null;
}


const prefersDark =
    window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;


setTheme(
    savedTheme ||
    (prefersDark
        ? "dark"
        : "light")
);


if (themeBtn) {

    themeBtn.onclick = () => {

        setTheme(
            document.documentElement.dataset.theme ===
                "dark"
                ? "light"
                : "dark"
        );

    };
}





const floaters = $("#floaters");

if (floaters) {

    floaters.innerHTML =
        Array.from(
            { length: 16 },
            (_, i) => `
                <span
                    style="
                        left:${(i * 6.4 + 3) % 98}%;
                        font-size:${14 + (i * 7) % 22}px;
                        animation-duration:${9 + (i * 3) % 9}s;
                        animation-delay:-${(i * 2) % 10}s;
                    "
                >
                    ${["💗", "✨", "🌸", "💜", "⭐"][i % 5]}
                </span>
            `
        )
        .join("");
}


const particles = $("#particles");

if (particles) {

    particles.innerHTML =
        Array.from(
            { length: 8 },
            (_, i) => `
                <span
                    style="
                        left:${10 + i * 11}%;
                        animation-delay:${i * 0.4}s;
                    "
                >
                    ${i % 2 ? "💗" : "✨"}
                </span>
            `
        )
        .join("");
}





const io =
    new IntersectionObserver(
        entries => {

            entries.forEach(en => {

                if (!en.isIntersecting) {
                    return;
                }


                en.target.classList.add(
                    "in"
                );


                $$(".bar i", en.target)
                    .forEach(b => {

                        b.style.width =
                            b.dataset.w + "%";

                    });


                io.unobserve(
                    en.target
                );

            });

        },
        {
            threshold: 0.15
        }
    );


function observeReveals() {

    $$(".reveal:not(.in)")
        .forEach(el =>
            io.observe(el)
        );
}





const toTop = $("#toTop");


if (toTop) {

    window.addEventListener(
        "scroll",
        () => {

            toTop.classList.toggle(
                "show",
                window.scrollY > 500
            );

        },
        {
            passive: true
        }
    );


    toTop.onclick = () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    };
}



renderMap();
renderAll();