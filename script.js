// ===== Туршилтын (жишээ) мэдээнүүд — жинхэнэ мэдээгээр солино =====
const CATS = {
  "uls-tor": "Улс төр",
  "niigem": "Нийгэм",
  "ediin-zasag": "Эдийн засаг",
  "delhii": "Дэлхий",
  "sport": "Спорт",
  "soyol": "Соёл урлаг",
  "tech": "Технологи",
  "oron-nutag": "Орон нутаг"
};

const ARTICLES = [
  {id:1, cat:"uls-tor", title:"Намрын чуулганаар ирэх оны төсвийн төслийг хэлэлцэж эхэллээ", time:"15 минутын өмнө", img:"https://picsum.photos/seed/medee1/900/520", text:"Энэ бол жишээ мэдээний үндсэн текст юм.\n\nСайтын бүтцийг харуулах зорилгоор оруулсан тул жинхэнэ мэдээ бэлэн болмогц энэ текстийг солино. Дэлгэрэнгүй хуудсанд мэдээний гарчиг, ангилал, цаг болон үндсэн агуулга ингэж харагдана."},
  {id:2, cat:"niigem", title:"Нийслэлд шинэ сургууль, цэцэрлэгийн барилгын ажил ирэх хавраас эрчимжинэ", time:"32 минутын өмнө", img:"https://picsum.photos/seed/medee2/640/420", text:"Энэ бол жишээ мэдээний үндсэн текст юм.\n\nСайтын бүтцийг харуулах зорилгоор оруулсан тул жинхэнэ мэдээ бэлэн болмогц энэ текстийг солино."},
  {id:3, cat:"ediin-zasag", title:"Экспортын орлого өсөж, валютын ханш харьцангуй тогтвортой байна", time:"1 цагийн өмнө", img:"https://picsum.photos/seed/medee3/640/420", text:"Энэ бол жишээ мэдээний үндсэн текст юм.\n\nСайтын бүтцийг харуулах зорилгоор оруулсан тул жинхэнэ мэдээ бэлэн болмогц энэ текстийг солино."},
  {id:4, cat:"delhii", title:"Азийн орнууд ногоон эрчим хүчний хамтын ажиллагаагаа өргөжүүлнэ", time:"1 цагийн өмнө", img:"https://picsum.photos/seed/medee4/640/420", text:"Энэ бол жишээ мэдээний үндсэн текст юм.\n\nСайтын бүтцийг харуулах зорилгоор оруулсан тул жинхэнэ мэдээ бэлэн болмогц энэ текстийг солино."},
  {id:5, cat:"sport", title:"Үндэсний шигшээ баг олон улсын тэмцээний бэлтгэлдээ гарлаа", time:"2 цагийн өмнө", img:"https://picsum.photos/seed/medee5/640/420", text:"Энэ бол жишээ мэдээний үндсэн текст юм.\n\nСайтын бүтцийг харуулах зорилгоор оруулсан тул жинхэнэ мэдээ бэлэн болмогц энэ текстийг солино."},
  {id:6, cat:"tech", title:"Дотоодын стартапууд хиймэл оюун ухааны шинэ шийдлүүдээ танилцуулав", time:"2 цагийн өмнө", img:"https://picsum.photos/seed/medee6/640/420", text:"Энэ бол жишээ мэдээний үндсэн текст юм.\n\nСайтын бүтцийг харуулах зорилгоор оруулсан тул жинхэнэ мэдээ бэлэн болмогц энэ текстийг солино."},
  {id:7, cat:"soyol", title:"Үндэсний номын баяр энэ амралтын өдрүүдэд төв талбайд болно", time:"3 цагийн өмнө", img:"https://picsum.photos/seed/medee7/640/420", text:"Энэ бол жишээ мэдээний үндсэн текст юм.\n\nСайтын бүтцийг харуулах зорилгоор оруулсан тул жинхэнэ мэдээ бэлэн болмогц энэ текстийг солино."},
  {id:8, cat:"uls-tor", title:"Засгийн газрын хуралдаанаар өвлийн бэлтгэлийн асуудлыг хэлэлцэв", time:"3 цагийн өмнө", img:"https://picsum.photos/seed/medee8/640/420", text:"Энэ бол жишээ мэдээний үндсэн текст юм.\n\nСайтын бүтцийг харуулах зорилгоор оруулсан тул жинхэнэ мэдээ бэлэн болмогц энэ текстийг солино."},
  {id:9, cat:"niigem", title:"Эрүүл мэндийн байгууллагууд өвлийн улирлын бэлтгэлээ хангаж байна", time:"4 цагийн өмнө", img:"https://picsum.photos/seed/medee9/640/420", text:"Энэ бол жишээ мэдээний үндсэн текст юм.\n\nСайтын бүтцийг харуулах зорилгоор оруулсан тул жинхэнэ мэдээ бэлэн болмогц энэ текстийг солино."},
  {id:10, cat:"ediin-zasag", title:"Жижиг, дунд үйлдвэрлэгчдэд зориулсан зээлийн хөтөлбөр үргэлжилнэ", time:"5 цагийн өмнө", img:"https://picsum.photos/seed/medee10/640/420", text:"Энэ бол жишээ мэдээний үндсэн текст юм.\n\nСайтын бүтцийг харуулах зорилгоор оруулсан тул жинхэнэ мэдээ бэлэн болмогц энэ текстийг солино."},
  {id:11, cat:"delhii", title:"Дэлхийн зах зээлд нефтийн үнэ бага зэрэг хэлбэлзэж байна", time:"6 цагийн өмнө", img:"https://picsum.photos/seed/medee11/640/420", text:"Энэ бол жишээ мэдээний үндсэн текст юм.\n\nСайтын бүтцийг харуулах зорилгоор оруулсан тул жинхэнэ мэдээ бэлэн болмогц энэ текстийг солино."},
  {id:12, cat:"sport", title:"Залуу тамирчид Азийн аварга шалгаруулах тэмцээнээс медаль хүртлээ", time:"7 цагийн өмнө", img:"https://picsum.photos/seed/medee12/640/420", text:"Энэ бол жишээ мэдээний үндсэн текст юм.\n\nСайтын бүтцийг харуулах зорилгоор оруулсан тул жинхэнэ мэдээ бэлэн болмогц энэ текстийг солино."},
  {id:13, cat:"niigem", title:"Нийтийн тээврийн шинэ чиглэлүүд ирэх сараас нээгдэнэ", time:"8 цагийн өмнө", img:"https://picsum.photos/seed/medee13/640/420", text:"Энэ бол жишээ мэдээний үндсэн текст юм.\n\nСайтын бүтцийг харуулах зорилгоор оруулсан тул жинхэнэ мэдээ бэлэн болмогц энэ текстийг солино."},
  {id:14, cat:"uls-tor", title:"Орон нутгийн хөгжлийн сангийн зарцуулалтыг ил тод болгоно", time:"9 цагийн өмнө", img:"https://picsum.photos/seed/medee14/640/420", text:"Энэ бол жишээ мэдээний үндсэн текст юм.\n\nСайтын бүтцийг харуулах зорилгоор оруулсан тул жинхэнэ мэдээ бэлэн болмогц энэ текстийг солино."},
  {id:15, cat:"soyol", title:"Улсын драмын театрын шинэ улирлын нээлт энэ баасан гарагт болно", time:"10 цагийн өмнө", img:"https://picsum.photos/seed/medee15/640/420", text:"Энэ бол жишээ мэдээний үндсэн текст юм.\n\nСайтын бүтцийг харуулах зорилгоор оруулсан тул жинхэнэ мэдээ бэлэн болмогц энэ текстийг солино."},
  {id:16, cat:"tech", title:"Харилцаа холбооны шинэ үеийн сүлжээ орон нутагт нэвтэрч эхэллээ", time:"Өчигдөр", img:"https://picsum.photos/seed/medee16/640/420", text:"Энэ бол жишээ мэдээний үндсэн текст юм.\n\nСайтын бүтцийг харуулах зорилгоор оруулсан тул жинхэнэ мэдээ бэлэн болмогц энэ текстийг солино."},
  {id:17, cat:"oron-nutag", title:"Малчдын өвлийн бэлтгэл ихэнх аймагт 90 хувьтай байна", time:"Өчигдөр", img:"https://picsum.photos/seed/medee17/640/420", region:"Архангай", text:"Энэ бол жишээ мэдээний үндсэн текст юм.\n\nСайтын бүтцийг харуулах зорилгоор оруулсан тул жинхэнэ мэдээ бэлэн болмогц энэ текстийг солино."},
  {id:18, cat:"oron-nutag", title:"Хөвсгөл нуурын эрэг дагуух аялал жуулчлалын бүсийг тохижуулна", time:"Өчигдөр", img:"https://picsum.photos/seed/medee18/640/420", region:"Хөвсгөл", text:"Энэ бол жишээ мэдээний үндсэн текст юм.\n\nСайтын бүтцийг харуулах зорилгоор оруулсан тул жинхэнэ мэдээ бэлэн болмогц энэ текстийг солино."},
  {id:19, cat:"oron-nutag", title:"Дорноговьд нарны цахилгаан станцын хоёрдугаар ээлж ашиглалтад орно", time:"Өчигдөр", img:"https://picsum.photos/seed/medee19/640/420", region:"Дорноговь", text:"Энэ бол жишээ мэдээний үндсэн текст юм.\n\nСайтын бүтцийг харуулах зорилгоор оруулсан тул жинхэнэ мэдээ бэлэн болмогц энэ текстийг солино."},
  {id:20, cat:"oron-nutag", title:"Өвөрхангайд шинэ цэцэрлэгийн барилга ирэх сард ашиглалтад орно", time:"Өчигдөр", img:"https://picsum.photos/seed/medee20/640/420", region:"Өвөрхангай", text:"Энэ бол жишээ мэдээний үндсэн текст юм.\n\nСайтын бүтцийг харуулах зорилгоор оруулсан тул жинхэнэ мэдээ бэлэн болмогц энэ текстийг солино."}
];

const VIDEOS = [
  {title:"Видео: Хотын хөгжлийн талаарх тусгай сурвалжилга", img:"https://picsum.photos/seed/video1/640/420"},
  {title:"Видео: Төсвийн зарцуулалтын талаар ярилцлага", img:"https://picsum.photos/seed/video2/640/420"},
  {title:"Видео: Аялал жуулчлалын улирлын нээлтийн тойм", img:"https://picsum.photos/seed/video3/640/420"},
  {title:"Видео: Залуучуудын технологийн форумын онцлох мөчүүд", img:"https://picsum.photos/seed/video4/640/420"}
];

const AUTHORS = [
  {name:"Эдийн засгийн тоймч", quote:"“Төсвийн сахилга бат бол хөгжлийн эхлэл”"},
  {name:"Нийгмийн тоймч", quote:"“Боловсролд оруулсан хөрөнгө хэзээ ч хоосон байдаггүй”"},
  {name:"Улс төрийн тоймч", quote:"“Ил тод байдал итгэлийг бий болгодог”"},
  {name:"Соёлын тоймч", quote:"“Соёл бол үндэстний санах ой”"}
];

// ===== Рендер =====
function cardHTML(a, cls, imgH){
  return `<article class="feat-card ${cls||''}" onclick="openArticle(${a.id})">
    <div class="imgwrap"><img src="${a.img}" alt="" loading="lazy"></div>
    <h3>${a.title}</h3><p class="time">${a.time}</p></article>`;
}
function latestHTML(a){
  return `<div class="latest-item" onclick="openArticle(${a.id})">
    <img src="${a.img}" alt="" loading="lazy">
    <div><h4>${a.title}</h4><p class="time">${a.time}</p></div></div>`;
}
function miniHTML(a){
  return `<div class="mini-row" onclick="openArticle(${a.id})">
    <img src="${a.img}" alt="" loading="lazy">
    <div><h4>${a.title}</h4><p class="time">${a.time}</p></div></div>`;
}
function colHTML(cat, elId){
  const list = ARTICLES.filter(a=>a.cat===cat);
  const el = document.getElementById(elId);
  if(!list.length){ el.innerHTML = "<p>Мэдээ алга.</p>"; return; }
  el.innerHTML = `<div class="col-lead" onclick="openArticle(${list[0].id})">
      <img src="${list[0].img}" alt=""><h3>${list[0].title}</h3></div>`
    + list.slice(1,3).map(miniHTML).join("");
}

function renderHome(){
  document.getElementById("latestList").innerHTML = ARTICLES.map(latestHTML).join("");
  const f = document.getElementById("featuredArea");
  const lead = ARTICLES[0], mid = ARTICLES[1], row = ARTICLES.slice(2,5);
  f.innerHTML = `
    <article class="feat-card feat-lead" onclick="openArticle(${lead.id})">
      <div class="imgwrap"><img src="${lead.img}" alt=""><span class="time-tab">◷ ${lead.time}</span></div>
      <h3>${lead.title}</h3>
    </article>
    <article class="feat-card feat-mid" onclick="openArticle(${mid.id})">
      <div class="imgwrap"><img src="${mid.img}" alt=""></div>
      <h3>${mid.title}</h3><p class="time">${mid.time}</p>
    </article>
    <div class="feat-row">${row.map(a=>cardHTML(a)).join("")}</div>`;
  colHTML("uls-tor","politicsCol");
  colHTML("niigem","societyCol");
  document.getElementById("videoGrid").innerHTML = VIDEOS.map((v,i)=>`
    <div class="video-card" onclick="openArticle(${ARTICLES[i%ARTICLES.length].id})">
      <div class="imgwrap"><img src="${v.img}" alt="" loading="lazy"><span class="play-badge">▶</span></div>
      <h4>${v.title}</h4></div>`).join("");
  document.getElementById("authorsRow").innerHTML = AUTHORS.map(a=>`
    <div class="author-card"><p class="a-name">Нийтлэлч · ${a.name}</p><p class="a-quote">${a.quote}</p></div>`).join("");
  document.getElementById("localGrid").innerHTML = ARTICLES.filter(a=>a.cat==="oron-nutag").map(a=>`
    <div class="local-card" onclick="openArticle(${a.id})">
      <img src="${a.img}" alt="" loading="lazy"><h4>${a.title}</h4>
      <span class="region-tag">→ ${a.region||""}</span></div>`).join("");
}

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
  if(cat==="home"){ catView.style.display="none"; homeTop.style.display=""; window.scrollTo({top:0,behavior:"smooth"}); return; }
  if(cat==="video"){ document.querySelector(".video-band").scrollIntoView({behavior:"smooth"}); return; }
  const list = ARTICLES.filter(a=>a.cat===cat);
  document.getElementById("catViewTitle").textContent = CATS[cat]||cat;
  document.getElementById("catGrid").innerHTML = list.length ? list.map(a=>cardHTML(a)).join("") : "<p>Энэ ангилалд жишээ мэдээ алга.</p>";
  catView.style.display="block"; homeTop.style.display="none";
  window.scrollTo({top:0,behavior:"smooth"});
}
function goHome(e){ e.preventDefault(); navGo(e,"home"); }

// ===== Дэлгэрэнгүй =====
function openArticle(id){
  const a = ARTICLES.find(x=>x.id===id); if(!a) return;
  document.getElementById("modalImg").src = a.img;
  document.getElementById("modalCat").textContent = CATS[a.cat]||"";
  document.getElementById("modalTitle").textContent = a.title;
  document.getElementById("modalTime").textContent = "◷ " + a.time;
  document.getElementById("modalText").textContent = a.text;
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
  const found = ARTICLES.filter(a=>a.title.toLowerCase().includes(q));
  box.innerHTML = found.length
    ? found.map(a=>`<a href="#" onclick="event.preventDefault();openArticle(${a.id})">${a.title}</a>`).join("")
    : "<p style='padding:10px 4px'>Илэрц олдсонгүй.</p>";
}

// ===== Бусад =====
document.getElementById("burger").addEventListener("click", ()=>document.getElementById("mainnav").classList.toggle("open"));
const now = new Date();
document.getElementById("todayDate").textContent = "Өнөөдөр: " + (now.getMonth()+1) + "/" + now.getDate();
const trends = ARTICLES.slice(0,5).map(a=>a.title);
let ti = 0;
function showTrend(){ document.getElementById("trendText").textContent = trends[ti]; ti = (ti+1)%trends.length; }
showTrend(); setInterval(showTrend, 5000);
const toTop = document.getElementById("toTop");
window.addEventListener("scroll", ()=>toTop.classList.toggle("show", window.scrollY>500));
toTop.addEventListener("click", ()=>window.scrollTo({top:0,behavior:"smooth"}));

renderHome();
