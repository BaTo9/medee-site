// ===== Хэл (MN / EN) =====
let LANG = localStorage.getItem("tugee-lang") || "mn";

const UI = {
  mn: {
    nav_home: "ЭХЛЭЛ", nav_uls: "УЛС ТӨР", nav_niigem: "НИЙГЭМ", nav_ediin: "ЭДИЙН ЗАСАГ",
    nav_delhii: "ДЭЛХИЙ", nav_sport: "СПОРТ", nav_soyol: "СОЁЛ УРЛАГ", nav_tech: "ТЕХНОЛОГИ", nav_video: "ВИДЕО",
    search_ph: "Мэдээ хайх… (гарчиг бичээд Enter дарна уу)", search_btn: "Хайх",
    ad: "СУРТАЛЧИЛГАА · 820×100", latest: "шинэ мэдээ",
    sec_politics: "УЛС ТӨР", sec_society: "НИЙГЭМ", sec_video_word: "ВИДЕО", sec_news_word: "МЭДЭЭ",
    sec_authors: "НИЙТЛЭЛЧИД", sec_local: "ОРОН НУТАГ",
    today: "Өнөөдөр: ", weather: "☀ Улаанбаатар 4°C",
    footer_addr: "📍 Улаанбаатар хот (хаяг дараа оруулна)", footer_phone: "📞 Утас: —", footer_mail: "✉ И-мэйл: —",
    link_about: "Бидний тухай", link_ads: "Сурталчилгаа байршуулах", link_terms: "Үйлчилгээний нөхцөл",
    copyright: "© 2026 TUGEE.mn (ТҮГЭЭ). Бүх эрх хуулиар хамгаалагдсан.",
    no_news: "Мэдээ алга.", no_cat: "Энэ ангилалд жишээ мэдээ алга.", no_result: "Илэрц олдсонгүй.",
    author_prefix: "Нийтлэлч · ", doc_title: "TUGEE.mn — ТҮГЭЭ | Мэдээг түгээ"
  },
  en: {
    nav_home: "HOME", nav_uls: "POLITICS", nav_niigem: "SOCIETY", nav_ediin: "ECONOMY",
    nav_delhii: "WORLD", nav_sport: "SPORTS", nav_soyol: "CULTURE", nav_tech: "TECHNOLOGY", nav_video: "VIDEO",
    search_ph: "Search news… (type a headline and press Enter)", search_btn: "Search",
    ad: "ADVERTISEMENT · 820×100", latest: "latest news",
    sec_politics: "POLITICS", sec_society: "SOCIETY", sec_video_word: "VIDEO", sec_news_word: "NEWS",
    sec_authors: "COLUMNISTS", sec_local: "REGIONS",
    today: "Today: ", weather: "☀ Ulaanbaatar 4°C",
    footer_addr: "📍 Ulaanbaatar (address to be added)", footer_phone: "📞 Phone: —", footer_mail: "✉ Email: —",
    link_about: "About us", link_ads: "Advertise with us", link_terms: "Terms of service",
    copyright: "© 2026 TUGEE.mn. All rights reserved.",
    no_news: "No news yet.", no_cat: "No sample news in this category.", no_result: "No results found.",
    author_prefix: "Columnist · ", doc_title: "TUGEE.mn — News from Mongolia"
  }
};
function t(key){ return (UI[LANG] && UI[LANG][key]) || UI.mn[key] || key; }

const CATS = {
  mn: { "uls-tor": "Улс төр", "niigem": "Нийгэм", "ediin-zasag": "Эдийн засаг", "delhii": "Дэлхий", "sport": "Спорт", "soyol": "Соёл урлаг", "tech": "Технологи", "oron-nutag": "Орон нутаг" },
  en: { "uls-tor": "Politics", "niigem": "Society", "ediin-zasag": "Economy", "delhii": "World", "sport": "Sports", "soyol": "Culture", "tech": "Technology", "oron-nutag": "Regions" }
};
function catName(cat){ return (CATS[LANG] && CATS[LANG][cat]) || CATS.mn[cat] || cat; }

const REGIONS = {
  mn: { "arkhangai": "Архангай", "khuvsgul": "Хөвсгөл", "dornogovi": "Дорноговь", "uvurkhangai": "Өвөрхангай" },
  en: { "arkhangai": "Arkhangai", "khuvsgul": "Khuvsgul", "dornogovi": "Dornogovi", "uvurkhangai": "Uvurkhangai" }
};

const SAMPLE_TEXT = {
  mn: {
    long: "Энэ бол жишээ мэдээний үндсэн текст юм.\n\nСайтын бүтцийг харуулах зорилгоор оруулсан тул жинхэнэ мэдээ бэлэн болмогц энэ текстийг солино. Дэлгэрэнгүй хуудсанд мэдээний гарчиг, ангилал, цаг болон үндсэн агуулга ингэж харагдана.",
    short: "Энэ бол жишээ мэдээний үндсэн текст юм.\n\nСайтын бүтцийг харуулах зорилгоор оруулсан тул жинхэнэ мэдээ бэлэн болмогц энэ текстийг солино."
  },
  en: {
    long: "This is the main text of a sample news article.\n\nIt was added to demonstrate the site's layout and will be replaced once real news is ready. The article page shows the headline, category, time and main content like this.",
    short: "This is the main text of a sample news article.\n\nIt was added to demonstrate the site's layout and will be replaced once real news is ready."
  }
};

// ===== Туршилтын (жишээ) мэдээнүүд — жинхэнэ мэдээгээр солино =====
const ARTICLES = [
  {id:1, cat:"uls-tor", title:"Намрын чуулганаар ирэх оны төсвийн төслийг хэлэлцэж эхэллээ", titleEn:"Parliament begins debating next year's draft budget at the autumn session", time:"15 минутын өмнө", timeEn:"15 min ago", img:"https://picsum.photos/seed/medee1/900/520"},
  {id:2, cat:"niigem", title:"Нийслэлд шинэ сургууль, цэцэрлэгийн барилгын ажил ирэх хавраас эрчимжинэ", titleEn:"New school and kindergarten construction in the capital to accelerate next spring", time:"32 минутын өмнө", timeEn:"32 min ago", img:"https://picsum.photos/seed/medee2/640/420"},
  {id:3, cat:"ediin-zasag", title:"Экспортын орлого өсөж, валютын ханш харьцангуй тогтвортой байна", titleEn:"Export revenue grows while the exchange rate stays relatively stable", time:"1 цагийн өмнө", timeEn:"1 hour ago", img:"https://picsum.photos/seed/medee3/640/420"},
  {id:4, cat:"delhii", title:"Азийн орнууд ногоон эрчим хүчний хамтын ажиллагаагаа өргөжүүлнэ", titleEn:"Asian countries to expand green energy cooperation", time:"1 цагийн өмнө", timeEn:"1 hour ago", img:"https://picsum.photos/seed/medee4/640/420"},
  {id:5, cat:"sport", title:"Үндэсний шигшээ баг олон улсын тэмцээний бэлтгэлдээ гарлаа", titleEn:"National team begins preparations for an international tournament", time:"2 цагийн өмнө", timeEn:"2 hours ago", img:"https://picsum.photos/seed/medee5/640/420"},
  {id:6, cat:"tech", title:"Дотоодын стартапууд хиймэл оюун ухааны шинэ шийдлүүдээ танилцуулав", titleEn:"Local startups present new artificial intelligence solutions", time:"2 цагийн өмнө", timeEn:"2 hours ago", img:"https://picsum.photos/seed/medee6/640/420"},
  {id:7, cat:"soyol", title:"Үндэсний номын баяр энэ амралтын өдрүүдэд төв талбайд болно", titleEn:"National Book Festival to be held at the central square this weekend", time:"3 цагийн өмнө", timeEn:"3 hours ago", img:"https://picsum.photos/seed/medee7/640/420"},
  {id:8, cat:"uls-tor", title:"Засгийн газрын хуралдаанаар өвлийн бэлтгэлийн асуудлыг хэлэлцэв", titleEn:"Government meeting discusses winter preparations", time:"3 цагийн өмнө", timeEn:"3 hours ago", img:"https://picsum.photos/seed/medee8/640/420"},
  {id:9, cat:"niigem", title:"Эрүүл мэндийн байгууллагууд өвлийн улирлын бэлтгэлээ хангаж байна", titleEn:"Healthcare organizations complete preparations for the winter season", time:"4 цагийн өмнө", timeEn:"4 hours ago", img:"https://picsum.photos/seed/medee9/640/420"},
  {id:10, cat:"ediin-zasag", title:"Жижиг, дунд үйлдвэрлэгчдэд зориулсан зээлийн хөтөлбөр үргэлжилнэ", titleEn:"Loan program for small and medium businesses continues", time:"5 цагийн өмнө", timeEn:"5 hours ago", img:"https://picsum.photos/seed/medee10/640/420"},
  {id:11, cat:"delhii", title:"Дэлхийн зах зээлд нефтийн үнэ бага зэрэг хэлбэлзэж байна", titleEn:"Oil prices fluctuate slightly on world markets", time:"6 цагийн өмнө", timeEn:"6 hours ago", img:"https://picsum.photos/seed/medee11/640/420"},
  {id:12, cat:"sport", title:"Залуу тамирчид Азийн аварга шалгаруулах тэмцээнээс медаль хүртлээ", titleEn:"Young athletes win medals at the Asian championships", time:"7 цагийн өмнө", timeEn:"7 hours ago", img:"https://picsum.photos/seed/medee12/640/420"},
  {id:13, cat:"niigem", title:"Нийтийн тээврийн шинэ чиглэлүүд ирэх сараас нээгдэнэ", titleEn:"New public transport routes to open next month", time:"8 цагийн өмнө", timeEn:"8 hours ago", img:"https://picsum.photos/seed/medee13/640/420"},
  {id:14, cat:"uls-tor", title:"Орон нутгийн хөгжлийн сангийн зарцуулалтыг ил тод болгоно", titleEn:"Local development fund spending to be made transparent", time:"9 цагийн өмнө", timeEn:"9 hours ago", img:"https://picsum.photos/seed/medee14/640/420"},
  {id:15, cat:"soyol", title:"Улсын драмын театрын шинэ улирлын нээлт энэ баасан гарагт болно", titleEn:"State Drama Theatre opens its new season this Friday", time:"10 цагийн өмнө", timeEn:"10 hours ago", img:"https://picsum.photos/seed/medee15/640/420"},
  {id:16, cat:"tech", title:"Харилцаа холбооны шинэ үеийн сүлжээ орон нутагт нэвтэрч эхэллээ", titleEn:"Next-generation communication network rolls out in rural areas", time:"Өчигдөр", timeEn:"Yesterday", img:"https://picsum.photos/seed/medee16/640/420"},
  {id:17, cat:"oron-nutag", title:"Малчдын өвлийн бэлтгэл ихэнх аймагт 90 хувьтай байна", titleEn:"Herders' winter preparation reaches 90 percent in most provinces", time:"Өчигдөр", timeEn:"Yesterday", img:"https://picsum.photos/seed/medee17/640/420", region:"arkhangai"},
  {id:18, cat:"oron-nutag", title:"Хөвсгөл нуурын эрэг дагуух аялал жуулчлалын бүсийг тохижуулна", titleEn:"Tourism zone along the Lake Khuvsgul shore to be developed", time:"Өчигдөр", timeEn:"Yesterday", img:"https://picsum.photos/seed/medee18/640/420", region:"khuvsgul"},
  {id:19, cat:"oron-nutag", title:"Дорноговьд нарны цахилгаан станцын хоёрдугаар ээлж ашиглалтад орно", titleEn:"Second phase of the solar power plant in Dornogovi to be commissioned", time:"Өчигдөр", timeEn:"Yesterday", img:"https://picsum.photos/seed/medee19/640/420", region:"dornogovi"},
  {id:20, cat:"oron-nutag", title:"Өвөрхангайд шинэ цэцэрлэгийн барилга ирэх сард ашиглалтад орно", titleEn:"New kindergarten building in Uvurkhangai to open next month", time:"Өчигдөр", timeEn:"Yesterday", img:"https://picsum.photos/seed/medee20/640/420", region:"uvurkhangai"}
];
function aTitle(a){ return LANG === "en" ? (a.titleEn || a.title) : a.title; }
function aTime(a){ return LANG === "en" ? (a.timeEn || a.time) : a.time; }
function aText(a){ return SAMPLE_TEXT[LANG][a.id === 1 ? "long" : "short"]; }
function aRegion(a){ return a.region ? ((REGIONS[LANG] && REGIONS[LANG][a.region]) || a.region) : ""; }

const VIDEOS = [
  {title:"Видео: Хотын хөгжлийн талаарх тусгай сурвалжилга", titleEn:"Video: Special report on urban development", img:"https://picsum.photos/seed/video1/640/420"},
  {title:"Видео: Төсвийн зарцуулалтын талаар ярилцлага", titleEn:"Video: Interview on budget spending", img:"https://picsum.photos/seed/video2/640/420"},
  {title:"Видео: Аялал жуулчлалын улирлын нээлтийн тойм", titleEn:"Video: Tourism season opening highlights", img:"https://picsum.photos/seed/video3/640/420"},
  {title:"Видео: Залуучуудын технологийн форумын онцлох мөчүүд", titleEn:"Video: Highlights from the youth technology forum", img:"https://picsum.photos/seed/video4/640/420"}
];

const AUTHORS = [
  {name:"Эдийн засгийн тоймч", nameEn:"Economics columnist", quote:"“Төсвийн сахилга бат бол хөгжлийн эхлэл”", quoteEn:"“Budget discipline is the foundation of development”"},
  {name:"Нийгмийн тоймч", nameEn:"Society columnist", quote:"“Боловсролд оруулсан хөрөнгө хэзээ ч хоосон байдаггүй”", quoteEn:"“Investment in education is never wasted”"},
  {name:"Улс төрийн тоймч", nameEn:"Politics columnist", quote:"“Ил тод байдал итгэлийг бий болгодог”", quoteEn:"“Transparency builds trust”"},
  {name:"Соёлын тоймч", nameEn:"Culture columnist", quote:"“Соёл бол үндэстний санах ой”", quoteEn:"“Culture is the memory of a nation”"}
];

// ===== Рендер =====
function cardHTML(a, cls){
  return `<article class="feat-card ${cls||''}" onclick="openArticle(${a.id})">
    <div class="imgwrap"><img src="${a.img}" alt="" loading="lazy"></div>
    <h3>${aTitle(a)}</h3><p class="time">${aTime(a)}</p></article>`;
}
function latestHTML(a){
  return `<div class="latest-item" onclick="openArticle(${a.id})">
    <img src="${a.img}" alt="" loading="lazy">
    <div><h4>${aTitle(a)}</h4><p class="time">${aTime(a)}</p></div></div>`;
}
function miniHTML(a){
  return `<div class="mini-row" onclick="openArticle(${a.id})">
    <img src="${a.img}" alt="" loading="lazy">
    <div><h4>${aTitle(a)}</h4><p class="time">${aTime(a)}</p></div></div>`;
}
function colHTML(cat, elId){
  const list = ARTICLES.filter(a=>a.cat===cat);
  const el = document.getElementById(elId);
  if(!list.length){ el.innerHTML = `<p>${t("no_news")}</p>`; return; }
  el.innerHTML = `<div class="col-lead" onclick="openArticle(${list[0].id})">
      <img src="${list[0].img}" alt=""><h3>${aTitle(list[0])}</h3></div>`
    + list.slice(1,3).map(miniHTML).join("");
}

let currentCat = "home";
function renderHome(){
  document.getElementById("latestList").innerHTML = ARTICLES.map(latestHTML).join("");
  const f = document.getElementById("featuredArea");
  const lead = ARTICLES[0], mid = ARTICLES[1], row = ARTICLES.slice(2,5);
  f.innerHTML = `
    <article class="feat-card feat-lead" onclick="openArticle(${lead.id})">
      <div class="imgwrap"><img src="${lead.img}" alt=""><span class="time-tab">◷ ${aTime(lead)}</span></div>
      <h3>${aTitle(lead)}</h3>
    </article>
    <article class="feat-card feat-mid" onclick="openArticle(${mid.id})">
      <div class="imgwrap"><img src="${mid.img}" alt=""></div>
      <h3>${aTitle(mid)}</h3><p class="time">${aTime(mid)}</p>
    </article>
    <div class="feat-row">${row.map(a=>cardHTML(a)).join("")}</div>`;
  colHTML("uls-tor","politicsCol");
  colHTML("niigem","societyCol");
  document.getElementById("videoGrid").innerHTML = VIDEOS.map((v,i)=>`
    <div class="video-card" onclick="openArticle(${ARTICLES[i%ARTICLES.length].id})">
      <div class="imgwrap"><img src="${v.img}" alt="" loading="lazy"><span class="play-badge">▶</span></div>
      <h4>${LANG === "en" ? (v.titleEn || v.title) : v.title}</h4></div>`).join("");
  document.getElementById("authorsRow").innerHTML = AUTHORS.map(a=>`
    <div class="author-card"><p class="a-name">${t("author_prefix")}${LANG === "en" ? a.nameEn : a.name}</p><p class="a-quote">${LANG === "en" ? a.quoteEn : a.quote}</p></div>`).join("");
  document.getElementById("localGrid").innerHTML = ARTICLES.filter(a=>a.cat==="oron-nutag").map(a=>`
    <div class="local-card" onclick="openArticle(${a.id})">
      <img src="${a.img}" alt="" loading="lazy"><h4>${aTitle(a)}</h4>
      <span class="region-tag">→ ${aRegion(a)}</span></div>`).join("");
  if(currentCat !== "home" && currentCat !== "video"){
    const list = ARTICLES.filter(a=>a.cat===currentCat);
    document.getElementById("catViewTitle").textContent = catName(currentCat);
    document.getElementById("catGrid").innerHTML = list.length ? list.map(a=>cardHTML(a)).join("") : `<p>${t("no_cat")}</p>`;
  }
  showTrend(true);
}

// ===== Хэл солих =====
function applyLang(){
  document.documentElement.lang = LANG === "en" ? "en" : "mn";
  document.title = t("doc_title");
  document.querySelectorAll("[data-i18n]").forEach(el=>{ el.textContent = t(el.dataset.i18n); });
  const inp = document.getElementById("searchInput");
  if(inp) inp.placeholder = t("search_ph");
  const w = document.getElementById("weatherText");
  if(w) w.textContent = t("weather");
  const lb = document.getElementById("langBtn");
  if(lb) lb.textContent = LANG === "en" ? "MN" : "EN";
  const now = new Date();
  document.getElementById("todayDate").textContent = t("today") + (now.getMonth()+1) + "/" + now.getDate();
  renderHome();
}
function setLang(l){
  LANG = l;
  localStorage.setItem("tugee-lang", l);
  applyLang();
}
function toggleLang(){ setLang(LANG === "en" ? "mn" : "en"); }

// ===== Чиглүүлэлт =====
function setActive(cat){
  document.querySelectorAll(".mainnav a").forEach(a=>a.classList.toggle("active", a.dataset.cat===cat));
}
function navGo(e, cat){
  e.preventDefault();
  document.getElementById("mainnav").classList.remove("open");
  setActive(cat);
  const catView = document.getElementById("catView");
  const homeTop = document.getElementById("homeTop");
  if(cat==="video"){ document.querySelector(".video-band").scrollIntoView({behavior:"smooth"}); return; }
  currentCat = cat;
  if(cat==="home"){ catView.style.display="none"; homeTop.style.display=""; window.scrollTo({top:0,behavior:"smooth"}); return; }
  const list = ARTICLES.filter(a=>a.cat===cat);
  document.getElementById("catViewTitle").textContent = catName(cat);
  document.getElementById("catGrid").innerHTML = list.length ? list.map(a=>cardHTML(a)).join("") : `<p>${t("no_cat")}</p>`;
  catView.style.display="block"; homeTop.style.display="none";
  window.scrollTo({top:0,behavior:"smooth"});
}
function goHome(e){ e.preventDefault(); navGo(e,"home"); }

// ===== Дэлгэрэнгүй =====
function openArticle(id){
  const a = ARTICLES.find(x=>x.id===id); if(!a) return;
  document.getElementById("modalImg").src = a.img;
  document.getElementById("modalCat").textContent = catName(a.cat);
  document.getElementById("modalTitle").textContent = aTitle(a);
  document.getElementById("modalTime").textContent = "◷ " + aTime(a);
  document.getElementById("modalText").textContent = aText(a);
  document.getElementById("articleModal").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeArticle(){
  document.getElementById("articleModal").classList.remove("open");
  document.body.style.overflow = "";
}
document.getElementById("articleModal").addEventListener("click", e=>{ if(e.target.id==="articleModal") closeArticle(); });

// ===== Хайлт =====
document.getElementById("searchBtn").addEventListener("click", ()=>{
  document.getElementById("searchbox").classList.toggle("open");
  document.getElementById("searchInput").focus();
});
function doSearch(){
  const q = document.getElementById("searchInput").value.trim().toLowerCase();
  const box = document.getElementById("searchResults");
  if(!q){ box.innerHTML=""; return; }
  const found = ARTICLES.filter(a=>a.title.toLowerCase().includes(q) || (a.titleEn||"").toLowerCase().includes(q));
  box.innerHTML = found.length
    ? found.map(a=>`<a href="#" onclick="event.preventDefault();openArticle(${a.id})">${aTitle(a)}</a>`).join("")
    : `<p style='padding:10px 4px'>${t("no_result")}</p>`;
}

// ===== Бусад =====
document.getElementById("burger").addEventListener("click", ()=>document.getElementById("mainnav").classList.toggle("open"));
let ti = 0;
function showTrend(reset){
  if(reset) ti = 0;
  const trends = ARTICLES.slice(0,5);
  document.getElementById("trendText").textContent = aTitle(trends[ti % trends.length]);
  ti++;
}
setInterval(()=>showTrend(false), 5000);
const toTop = document.getElementById("toTop");
window.addEventListener("scroll", ()=>toTop.classList.toggle("show", window.scrollY>500));
toTop.addEventListener("click", ()=>window.scrollTo({top:0,behavior:"smooth"}));

applyLang();
