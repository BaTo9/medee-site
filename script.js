// ===== Хэл (MN / EN) =====
let LANG = localStorage.getItem("tana-lang") || "mn";

const UI = {
  mn: {
    nav_home: "ЭХЛЭЛ", nav_uls: "УЛС ТӨР", nav_niigem: "НИЙГЭМ", nav_ediin: "ЭДИЙН ЗАСАГ",
    nav_delhii: "ДЭЛХИЙ", nav_sport: "СПОРТ", nav_soyol: "СОЁЛ УРЛАГ", nav_tech: "ТЕХНОЛОГИ", nav_video: "ВИДЕО",
    trend_label: "ОНЦЛОХ:", databar_label: "ХАНШ · ЦАГ АГААР", tagline: "Өглөө бүр шинэ мэдээ, өдөр бүр шударга ёсыг түгээ.", search_ph: "Мэдээ хайх… (гарчиг бичээд Enter дарна уу)", search_btn: "Хайх",
    ad: "СУРТАЛЧИЛГАА · 820×100", latest: "шинэ мэдээ",
    sec_politics: "УЛС ТӨР", sec_society: "НИЙГЭМ", sec_video_word: "ВИДЕО", sec_news_word: "МЭДЭЭ",
    sec_authors: "НИЙТЛЭЛЧИД", sec_local: "ОРОН НУТАГ", sec_world: "ГАДААД",
    today: "Өнөөдөр: ", weather: "☀ Улаанбаатар 4°C",
    footer_addr: "📍 Улаанбаатар хот, Сүхбаатар дүүрэг, 7-р хороо, 11-р хороолол, 14180",
    link_about: "Бидний тухай", link_ads: "Сурталчилгаа байршуулах", link_terms: "Үйлчилгээний нөхцөл",
    copyright: "© 2026 TANA.mn (ТАНА). Бүх эрх хуулиар хамгаалагдсан.", img_credit: "Мэдээний зургууд: Wikimedia Commons — чөлөөт лицензтэй зургууд.",
    no_news: "Мэдээ алга.", no_cat: "Энэ ангилалд одоогоор мэдээ алга.", no_result: "Илэрц олдсонгүй.",
    author_prefix: "Нийтлэлч · ", doc_title: "TANA.mn — ТАНА | Таны мэдээ"
  },
  en: {
    nav_home: "HOME", nav_uls: "POLITICS", nav_niigem: "SOCIETY", nav_ediin: "ECONOMY",
    nav_delhii: "WORLD", nav_sport: "SPORTS", nav_soyol: "CULTURE", nav_tech: "TECHNOLOGY", nav_video: "VIDEO",
    trend_label: "FEATURED:", databar_label: "RATES · WEATHER", tagline: "Fresh news every morning, fairness spread every day.", search_ph: "Search news… (type a headline and press Enter)", search_btn: "Search",
    ad: "ADVERTISEMENT · 820×100", latest: "latest news",
    sec_politics: "POLITICS", sec_society: "SOCIETY", sec_video_word: "VIDEO", sec_news_word: "NEWS",
    sec_authors: "COLUMNISTS", sec_local: "REGIONS", sec_world: "WORLD",
    today: "Today: ", weather: "☀ Ulaanbaatar 4°C",
    footer_addr: "📍 11th khoroolol, 7th khoroo, Sukhbaatar district, Ulaanbaatar 14180",
    link_about: "About us", link_ads: "Advertise with us", link_terms: "Terms of service",
    copyright: "© 2026 TANA.mn. All rights reserved.", img_credit: "News photos: Wikimedia Commons — freely licensed images.",
    no_news: "No news yet.", no_cat: "No news in this category yet.", no_result: "No results found.",
    author_prefix: "Columnist · ", doc_title: "TANA.mn — News from Mongolia"
  }
};
function t(key){ return (UI[LANG] && UI[LANG][key]) || UI.mn[key] || key; }

const CATS = {
  mn: { "uls-tor": "Улс төр", "niigem": "Нийгэм", "ediin-zasag": "Эдийн засаг", "delhii": "Дэлхий", "sport": "Спорт", "soyol": "Соёл урлаг", "tech": "Технологи", "oron-nutag": "Орон нутаг" },
  en: { "uls-tor": "Politics", "niigem": "Society", "ediin-zasag": "Economy", "delhii": "World", "sport": "Sports", "soyol": "Culture", "tech": "Technology", "oron-nutag": "Regions" }
};
function catName(cat){ return (CATS[LANG] && CATS[LANG][cat]) || CATS.mn[cat] || cat; }

const REGIONS = {
  mn: { "arkhangai": "Архангай", "khuvsgul": "Хөвсгөл", "dornogovi": "Дорноговь", "uvurkhangai": "Өвөрхангай", "dornod": "Дорнод", "selenge": "Сэлэнгэ", "zavkhan": "Завхан", "khovd": "Ховд" },
  en: { "arkhangai": "Arkhangai", "khuvsgul": "Khuvsgul", "dornogovi": "Dornogovi", "uvurkhangai": "Uvurkhangai", "dornod": "Dornod", "selenge": "Selenge", "zavkhan": "Zavkhan", "khovd": "Khovd" }
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

// ===== Бодит мэдээнүүд (2026-11-21) — өдөр бүр шинэчлэгдэнэ =====
const ARTICLES = [
  {id:1, cat:"uls-tor", title:"С.Бямбацогт Төрийн тамгыг гардаж авч, Ерөнхийлөгчийн үүргийг түр хэрэгжүүлж эхлэв", titleEn:"Byambatsogt receives state seal and begins exercising presidential powers", time:"15 мин", timeEn:"15 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Mongolian%20Government%20Palace%20and%20Tamgha%20statue.jpg?width=1000", text:"Монгол Улсын Ерөнхийлөгч У.Хүрэлсүх өчигдөр буюу арваннэгдүгээр сарын 20-нд албан ёсоор ажлаа хүлээлгэн өгч, Д.Сүхбаатарын талбайд түүнийг хүндэтгэн үдэх ёслол болов. УИХ-ын дарга С.Бямбацогт мөн өдрийн 11:00 цагт Төрийн тамгыг гардаж авснаар дараагийн Ерөнхийлөгч сонгогдож, тангараг өргөх хүртэл Ерөнхийлөгчийн үүргийг түр хэрэгжүүлэхээр боллоо. Энэ зохицуулалт Монгол Улсын түүхэнд анх удаа хэрэгжиж байна.\n\nС.Бямбацогт сэтгүүлчдийн асуултад хариулахдаа Ерөнхийлөгчийн үүргийг зөвхөн шаардлагатай үед хэрэгжүүлж, эрх мэдлээ хэтрүүлэн ашиглахгүй гэдгээ мэдэгдлээ. Тэрбээр Үндсэн хуульд Ерөнхийлөгчийн 22, бусад хуульд 45 бүрэн эрх тусгагдсан байдгийг тайлбарлаж, бүрэн эрх бүрийг хэрэгжүүлэх эсэхийг УИХ чуулганаараа тухай бүрд нь шийднэ гэдгийг онцолсон байна. Мөн тэрбээр 2027 оны Ерөнхийлөгчийн сонгуульд нэр дэвшихгүй гэдгээ дахин нотолсон юм.\n\nҮндсэн хуулийн 37.2-т зааснаар Ерөнхийлөгч өөрийн хүсэлтээр чөлөөлөгдсөн тохиолдолд УИХ-ын дарга шинэ Ерөнхийлөгч тангараг өргөх хүртэл бүрэн эрхийг нь хэрэгжүүлж, УИХ дөрвөн сарын дотор ээлжит бус сонгууль зарлан явуулах ёстой. Сонгуулийн товыг сарын дотор зарлах ёстой гэж С.Бямбацогт мэдэгдсэн бөгөөд санал хураах өдрийг сонгууль зарласнаас хойш дор хаяж 70 хоногийн дараа товлоно. УИХ өчигдөр буюу арваннэгдүгээр сарын 19-нд Ерөнхийлөгчийн хүсэлтийг хуралдаанд оролцсон 104 гишүүний 96 буюу 92.3 хувийн саналаар дэмжсэн юм.", textEn:"President U. Khurelsukh formally handed over his duties yesterday, November 20, with a farewell ceremony held at Sukhbaatar Square. Parliament Speaker S. Byambatsogt received the state seal at 11:00 the same day and will exercise presidential powers until the next President is elected and sworn in. This arrangement is being used for the first time in Mongolia's history.\n\nAnswering journalists' questions, Byambatsogt said he would exercise presidential powers only when necessary and would not overstep them. He explained that the Constitution sets out 22 presidential powers and other laws a further 45, and that Parliament will decide case by case whether each power is exercised. He also reaffirmed that he will not run in the 2027 presidential election.\n\nUnder Article 37.2 of the Constitution, when a President steps down at his own request, the Parliament Speaker exercises presidential powers until a new President is sworn in, and Parliament must call an extraordinary election within four months. Byambatsogt said the election date must be announced within a month, and polling day must fall at least 70 days after the election is called. Parliament backed the President's request on November 19, with 96 of the 104 members present — 92.3 percent — voting in favour."},
  {id:2, cat:"uls-tor", title:"УИХ 2027 оны мөнгөний бодлогын үндсэн чиглэлийг баталлаа", titleEn:"Parliament approves 2027 monetary policy guidelines", time:"30 мин", timeEn:"30 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Mongolian%201000%20tugrik%20banknote.jpg?width=760", text:"Улсын Их Хурал 2027 оны мөнгөний бодлогын үндсэн чиглэлийг өнөөдөр баталлаа. Уг баримт бичиг нь дунд хугацаанд инфляцыг 5 орчим хувьд барих зорилтыг тавьж, Төвбанкны алдагдлыг нөхөх хоёр Засгийн газрын бондын хөтөлбөрийг тусгасан байна. Мөн хөнгөлөлттэй орон сууцны зээлийг Төвбанкнаас Засгийн газарт үе шаттайгаар шилжүүлэх хуваарийг баталсан гэж мэдээлж байна.\n\nМөнгөний бодлогын үндсэн чиглэлийг УИХ-ын чуулганаар хэлэлцэхээс өмнө Эдийн засгийн байнгын хороо дэмжиж, баримт бичгийг чуулганд оруулахыг зөвшөөрсөн юм. Төвбанкны зүгээс үнийн өсөлтийг тогтворжуулах нь эдийн засгийн тогтвортой байдлын гол нөхцөл гэж үзэж байгаа бөгөөд инфляц энэ оны эхний 10 сард 13.4 хувьд хүрээд байгаа нь бодлогын шинэ чиглэлийн ач холбогдлыг нэмэгдүүлж байна.\n\nШинэ чиглэлийн дагуу Засгийн газар жил бүр 1.5 их наяд төгрөгийн тусгай үнэт цаас гаргах төлөвлөгөөтэй байгаа талаар өмнө нь мэдээлж байсан юм. Мөнгөний бодлогын хэрэгжилт нь иргэдийн худалдан авах чадвар, зээлийн хүү, валютын ханшид шууд нөлөөлдөг тул ирэх онд бодлого хэрхэн хэрэгжихийг олон нийт, бизнес эрхлэгчид анхааралтай ажиглах төлөвтэй байна.", textEn:"The State Great Khural today approved the basic guidelines for monetary policy for 2027. The document sets a medium-term goal of keeping inflation at around 5 percent, provides for two government bond programmes to cover the central bank's shortfall, and sets a timetable for moving subsidised mortgage lending from the central bank to the Government.\n\nBefore the plenary vote, the Standing Committee on Economy backed the guidelines and agreed to submit them to the session. The central bank regards stabilising price growth as a key condition for economic stability, and with inflation reaching 13.4 percent in the first 10 months of this year, the new policy direction carries added weight.\n\nThe Government has previously said it plans to issue 1.5 trillion tugriks in special securities each year under the new guidelines. Because monetary policy directly affects household purchasing power, loan interest rates and the exchange rate, the public and businesses will be watching closely how it is implemented next year."},
  {id:3, cat:"uls-tor", title:"МАН-ын бүлэг хаврын морин уралдааны хуулийн төслийг хэлэлцэхээс өмнө таван хоногийн завсарлага авав", titleEn:"MPP caucus takes five-day recess before vote on spring horse-racing bill", time:"45 мин", timeEn:"45 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Naadam%202023%20-%20Horse%20racing%2002.jpg?width=760", text:"Монгол Ардын Намын бүлэг арваннэгдүгээр сарын 20-нд таван хоногийн завсарлага авснаар хаврын морин уралдааны тухай хуулийн төслийг УИХ хэлэлцэх эсэх талаар санал хураахыг хойшлууллаа. Уг хуулийн төслийг хэлэлцэх асуудал чуулганы хуралдааны хэлэлцэх асуудлын жагсаалтад орсон байсан ч бүлгийн шийдвэрээр санал хураалт хойшлогдсон байна.\n\nХаврын морин уралдаан нь Монголын уламжлалт баяр наадмын нэг хэсэг бөгөөд хүүхдийн морь унах аюулгүй байдал, уралдааны зохион байгуулалтын талаар олон нийтийн дунд маргаан дагуулдаг сэдэв юм. Хуулийн төслийг дэмжигчид уралдааныг хууль эрх зүйн тодорхой хүрээнд оруулах шаардлагатай гэж үздэг бол шүүмжлэгчид хүүхдийн эрүүл мэнд, аюулгүй байдалд эрсдэлтэй гэж болгоомжилдог.\n\nЗавсарлагын хугацаа дууссаны дараа УИХ хуулийн төслийг хэлэлцэх эсэх талаар дахин санал хураах төлөвтэй байна. Төслийн эргэн тойрны маргаан нь зөвхөн морин уралдаанаар хязгаарлагдахгүй, Монголын уламжлалт соёл, хүүхдийн эрхийн тэнцвэрийн талаарх өргөн хэлэлцүүлгийн нэг хэсэг болж байгаа юм.", textEn:"The Mongolian People's Party caucus took a five-day recess on November 20, postponing parliament's vote on whether to take up a bill on spring horse racing. The bill had been on the plenary session's agenda, but the caucus decision delayed the vote.\n\nSpring horse racing is part of Mongolia's traditional festival culture, and it is a subject of public debate over the safety of child jockeys and the organisation of races. Supporters of the bill say racing needs a clear legal framework, while critics warn of risks to children's health and safety.\n\nOnce the recess ends, parliament is expected to vote again on whether to discuss the bill. The debate around the draft goes beyond horse racing itself, forming part of a wider discussion about balancing Mongolian traditional culture with children's rights."},
  {id:4, cat:"ediin-zasag", title:"Монголын хөрөнгийн биржийн арилжаа 1.592 их наяд төгрөгт хүрч, түүхэн дээд үзүүлэлт тогтоов", titleEn:"Mongolian Stock Exchange trading hits record 1.592 trillion tugriks", time:"30 мин", timeEn:"30 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Frankfurt%20Stock%20Exchange%20%28Ank%20Kumar%29%2005.jpg?width=760", text:"Монголын хөрөнгийн биржийн үнэт цаасны арилжааны нийт дүн 2026 оны арваннэгдүгээр сарын 19-ний өдрийн байдлаар 1.592 их наяд төгрөгт хүрч, бүх цаг үеийн дээд үзүүлэлтээ шинэчиллээ. Өмнөх түүхэн дээд үзүүлэлт 2021 онд 1.41 их наяд төгрөг байсан бөгөөд энэ оны арилжаа уг түвшнээс 180 гаруй тэрбум төгрөгөөр давж байна гэж Монголын хөрөнгийн бирж мэдээллээ.\n\nАрилжааны өсөлт нь дотоодын хөрөнгийн зах зээлд хөрөнгө оруулагчдын итгэл нэмэгдэж, үнэт цаасны арилжаа идэвхжиж байгааг харуулж байна. Сүүлийн жилүүдэд Засгийн газрын болон компанийн бондын арилжаа өргөжиж, биржээр дамжин хөрөнгө босгох нь компаниудын хувьд улам чухал санхүүжилтийн суваг болж байгаа юм.\n\nХөрөнгийн зах зээлийн хөгжил нь эдийн засгийн олон талт байдлыг нэмэгдүүлэхэд чухал үүрэгтэй. Шинжээчдийн үзэж буйгаар арилжааны хэмжээ өссөн нь хөрөнгө оруулалтын орчин сайжирч буйн шинж тэмдэг боловч зах зээлийн гүнзгийрэл, хөрвөх чадвар, ил тод байдлыг цаашид сайжруулах шаардлагатай хэвээр байна.", textEn:"Securities trading on the Mongolian Stock Exchange reached 1.592 trillion tugriks as of November 19, 2026, setting an all-time record, the exchange said. The previous record was 1.41 trillion tugriks in 2021, and this year's trading has now exceeded that level by more than 180 billion tugriks.\n\nThe growth in trading shows rising investor confidence in the domestic capital market and increasingly active securities trading. In recent years, trading in government and corporate bonds has expanded, and raising capital through the exchange has become an ever more important financing channel for companies.\n\nCapital market development plays an important role in diversifying the economy. Analysts say the rise in trading volumes is a sign of an improving investment climate, but market depth, liquidity and transparency still need further improvement."},
  {id:5, cat:"ediin-zasag", title:"Өмнөд Солонгосын КакаоБанк М банкны 15 хувийг эзэмшихээр гэрээ байгуулав", titleEn:"South Korea's KakaoBank signs deal to take 15 percent of M Bank", time:"1 цаг", timeEn:"1 hour", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Mobile%20Payment.jpg?width=760", text:"Өмнөд Солонгосын тэргүүлэгч дижитал банкуудын нэг КакаоБанк Монголын бүрэн дижитал М банкны хувьцааны 15 хувийг эзэмших гэрээг үзэглэлээ. Ингэснээр Солонгосын банкны технологи, зээлийн эрсдэлийн удирдлагын туршлагыг Монголын санхүүгийн зах зээлд нэвтрүүлэх стратегийн түншлэлийн суурь тавигдаж байна.\n\nКакаоБанк нь 27 сая гаруй харилцагчтай, нийт хөрөнгийн хэмжээ нь 60 тэрбум ам.доллар орчимд хүрсэн томоохон дижитал банк юм. Тус банк өмнө нь Индонезийн Superbank, Тайландын BankX-тэй стратегийн түншлэл байгуулсан бөгөөд М банктай хийж буй гэрээ нь олон улсын зах зээл дэх гурав дахь томоохон стратегийн түншлэл болж буй. КакаоБанк нь зээлийн түүх багатай болон огт зээлийн түүхгүй харилцагчдад санхүүгийн үйлчилгээ хүргэх чиглэлээр хуримтлуулсан туршлагадаа тулгуурлан М банктай зээлийн онооны шинэ систем хөгжүүлэхээр төлөвлөжээ.\n\nМ банкны гүйцэтгэх захирал Б.Тэмүүлэн энэхүү хамтын ажиллагаа нь банкны санхүүгийн чадавхыг бэхжүүлж, урт хугацааны өсөлтийг дэмжих ач холбогдолтой гэдгийг онцолсон байна. КакаоБанк мөн Зүүн өмнөд Азид хэрэгжүүлж буй тэлэлтийн стратегиа Монголын зах зээлд үргэлжлүүлж, Төв Азийн бүс нутагт үйл ажиллагаагаа өргөжүүлэх боломжийг судалж байгаа юм.", textEn:"KakaoBank, one of South Korea's leading digital banks, has signed an agreement to acquire a 15 percent stake in Mongolia's fully digital M Bank. The deal lays the foundation for a strategic partnership bringing Korean banking technology and credit risk management expertise to Mongolia's financial market.\n\nKakaoBank has more than 27 million customers and total assets of around 60 billion US dollars. It previously formed strategic partnerships with Indonesia's Superbank and Thailand's BankX, and the M Bank deal is its third major strategic partnership in international markets. Drawing on its experience serving customers with little or no credit history, KakaoBank plans to develop a new credit scoring system with M Bank.\n\nM Bank chief executive B. Temuulen said the cooperation would strengthen the bank's financial capacity and support long-term growth. KakaoBank is also looking to extend its expansion strategy in Southeast Asia into the Mongolian market and is studying opportunities to grow its business in Central Asia."},
  {id:6, cat:"ediin-zasag", title:"Монголын хөрөнгө оруулалтын форум Сингапурт амжилттай болж, 250 гаруй төлөөлөгч оролцов", titleEn:"Mongolia investment forum succeeds in Singapore with over 250 participants", time:"1 цаг", timeEn:"1 hour", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Marina%20Bay%20Singapore-3499.jpg?width=760", text:"Монгол Улсаас Сингапур Улсад суугаа Элчин сайдын яам болон Capital Markets Mongolia байгууллага хамтран «Монголын хөрөнгө оруулалтын форум – Сингапур 2026» арга хэмжээг амжилттай зохион байгууллаа. Форумд Монголын болон олон улсын хөрөнгө оруулалт, банк, санхүү, бизнесийн салбарын 250 гаруй төлөөлөгч оролцож, Монгол Улсын эдийн засгийн төлөв, хөрөнгө оруулалтын боломж, хамтын ажиллагааны талаар санал солилцсон байна.\n\nФорумыг Элчин сайд Г.Уянга нээж, Монгол, Сингапурын хамтын ажиллагааг ногоон эдийн засаг, нүүрстөрөгчийн зах зээл, технологи, инновацын салбарт өргөжүүлэх боломжийг онцлов. Хоёр улсын нүүрстөрөгчийн зах зээлийн хамтын ажиллагааны хүрээнд төслийн өргөдлийг 2026 оны аравдугаар сарын 30-наас хүлээн авч эхэлсэн бөгөөд хөдөө аж ахуй, ноолуур, мах, арьс шир боловсруулах зэрэг уул уурхайн бус салбарын хөрөнгө оруулалтын боломжийг танилцуулсан байна.\n\nФорумын үеэр Монголын бондын зах зээл, эрчим хүчний шилжилт, нөөцийн үр ашигтай ашиглалтын талаар хэлэлцүүлэг өрнүүлж, BlackRock, UBS Asset Management, Wellington Management, Standard Chartered, DBS, BNY, MUFG, IFC зэрэг олон улсын санхүүгийн байгууллагын төлөөлөл оролцжээ. Түүнчлэн Голомт банк, ICFG Limited, Steppe Link Holding байгууллагууд хөрөнгө оруулалтын төсөл, боломжуудаа танилцуулж, Capital Markets Mongolia байгууллага «Mongolia Desk» мэдээллийн платформыг нээлээ.", textEn:"The Embassy of Mongolia in Singapore and Capital Markets Mongolia jointly held the Mongolia Investment Forum – Singapore 2026. More than 250 representatives from Mongolia's and international investment, banking, finance and business sectors took part, exchanging views on Mongolia's economic outlook, investment opportunities and cooperation.\n\nAmbassador G. Uyanga opened the forum, highlighting opportunities to expand Mongolia–Singapore cooperation in the green economy, carbon markets, technology and innovation. Under the two countries' carbon market cooperation, project applications have been accepted since October 30, 2026, and investment opportunities in non-mining sectors such as agriculture, cashmere, meat and leather processing were presented.\n\nThe forum featured discussions on Mongolia's bond market, the energy transition and efficient resource use, with representatives from international financial institutions including BlackRock, UBS Asset Management, Wellington Management, Standard Chartered, DBS, BNY, MUFG and IFC. Golomt Bank, ICFG Limited and Steppe Link Holding presented their investment projects, and Capital Markets Mongolia launched its Mongolia Desk information platform."},
  {id:7, cat:"niigem", title:"Энэ өвөл олон жилийн дунджаас 5 хэмээр хүйтэн байх төлөвтэй; 290 сум зудын эрсдэлтэй байна", titleEn:"Winter set to be 5 degrees colder than average; 290 soums at dzud risk", time:"45 мин", timeEn:"45 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Snow%20in%20Mongolia%20%28MODIS%202017-01-19%29.jpg?width=760", text:"Энэ өвөл олон жилийн дунджаас 5 хэмээр хүйтэн байх судалгаа гарсан тухай Цаг уур, орчны шинжилгээний газраас мэдээллээ. Мөн зудын эрсдэлийн ерөнхий үнэлгээгээр манай улсын 330 сумын 290 буюу 87.8 хувьд эрсдэл дундаас дээш түвшинд байх дүн гарчээ. Тухайлбал, онцгой эрсдэлтэй 8, их эрсдэлтэй 35, дунд эрсдэлтэй 247, бага эрсдэлтэй 40 сум байгаа гэж Онцгой байдлын ерөнхий газар мэдээлсэн байна.\n\nЯлангуяа Баян-Өлгий аймгийн Сагсай, Цэнгэл, Увс аймгийн Сагил, Малчин, Наранбулаг, Цагаанхайрхан сумдыг онцгой эрсдэлтэй гэж нэрлэжээ. Мөн Хангайн нуруугаа дагасан Завхан аймгийн хойд сумд эрсдэл ихтэй байгаа бол жил бүр туурайн зудтай, бэлчээрийн даац муу байдаг Баянхонгор, Өвөрхангай, Сүхбаатар, Дорноговь, Дундговь, Өмнөговь аймаг зудын эрсдэлтэй байгаагаас мал ихээр хорогдож болзошгүй байгаа юм.\n\nАймгуудын зудын эрсдэлийг оноогоор тооцоход Баян-Өлгий, Хөвсгөл 7, Говьсүмбэр 7.2 гэсэн үзүүлэлтээр их буюу «улбар шар», харин Хэнтий 1.47, Орхон 1.48 гэсэн үзүүлэлтээр бага буюу «ногоон» түвшинд бүртгэгджээ. Энэ оны арванхоёрдугаар сар, 2027 оны нэгдүгээр, хоёрдугаар сард баруун, төвийн аймгуудад олон жилийн дунджаас илүү хүйтрэх төлөвтэй байгаа бөгөөд одоогоор нийт нутаг дэвсгэрийн 17 хувь нь цастай байна. Онцгой байдлын ерөнхий газрын Эрсдэлийн удирдлагын газрын дарга, хурандаа Д.Баасансүрэн малчид хашаа хороогоо базааж, мэргэжлийн байгууллагуудтай хамтран ажиллахыг анхааруулсан байна.", textEn:"This winter is expected to be 5 degrees colder than the long-term average, the National Agency for Meteorology and Environmental Monitoring said. A general dzud risk assessment found that 290 of the country's 330 soums — 87.8 percent — face medium or higher risk: 8 soums at extreme risk, 35 at high risk, 247 at medium risk and 40 at low risk, according to the National Emergency Management Agency.\n\nSagsai and Tsengel soums in Bayan-Ulgii and Sagil, Malchin, Naranbulag and Tsagaankhairkhan soums in Uvs were named as being at extreme risk. Northern soums of Zavkhan along the Khangai range are also at high risk, while Bayankhongor, Uvurkhangai, Sukhbaatar, Dornogovi, Dundgovi and Umnugovi — where hoof dzud recurs every year and pasture capacity is poor — face the risk of heavy livestock losses.\n\nScored by aimag, Bayan-Ulgii and Khuvsgul scored 7 and Govisumber 7.2, a high or «orange» level, while Khentii at 1.47 and Orkhon at 1.48 were low or «green». Temperatures in western and central aimags are expected to fall below the long-term average in December and in January and February 2027, and 17 percent of the country's territory is already snow-covered. Colonel D. Baasansuren, head of the emergency agency's risk management department, urged herders to prepare their shelters and pens and work with professional agencies."},
  {id:8, cat:"niigem", title:"Арваннэгдүгээр сарын 22-23-нд ихэнх нутгаар цас орж, шөнөдөө 32 хэм хүрч хүйтрэнэ", titleEn:"Snow across most of the country on November 22-23; nights down to minus 32", time:"1 цаг", timeEn:"1 hour", img:"https://commons.wikimedia.org/wiki/Special:FilePath/1600%20block%20of%2021st%20Street%2C%20N.W.%20-%20Blizzard%20of%202010.JPG?width=760", text:"Цаг уур, орчны шинжилгээний газраас арваннэгдүгээр сарын 21-25-ныг хүртэлх цаг агаарын урьдчилсан төлөвийг шинэчлэн гаргалаа. Арваннэгдүгээр сарын 22-нд Хөвсгөл, Сэлэнгэ, Булганы зарим сум, Төв, Хэнтийн хойд сумдын нутгаар, 23-нд Сэлэнгийн зүүн, Хэнтий, Дорнодын хойд, Төв аймгийн зүүн хойд сумдын нутгаар 0.1-2.0 миллиметр цас орж, цасан шуурга шуурах төлөвтэй байна. Салхи ихэнх хугацаанд говь, тал, хээрийн нутгаар зарим үед секундэд 14-16 метр хүрч ширүүснэ.\n\nШөнөдөө Дархадын хотгор, Завхан, Заг, Байдраг голын эх, Хүрэнбэлчир орчмоор 27-32 хэм, Алтай, Хангай, Хөвсгөл, Хэнтийн уулархаг нутаг, Идэр, Тэс, Туул, Тэрэлж голын хөндийгөөр 20-25 хэм, говийн бүс нутгийн өмнөд хэсгээр 8-13 хэм, бусад нутгаар 14-19 хэм хүйтэн байна. Өдөртөө Дархадын хотгор, Завхан, Заг, Байдраг, Хүрэнбэлчир орчим, Идэр, Тэс голын хөндийгөөр 14-19 хэм, говийн бүс нутгийн өмнөд хэсгээр 1-6 хэм, бусад нутгаар 6-11 хэм хүйтэн байх төлөвтэй байна.\n\nӨнөөдөр буюу арваннэгдүгээр сарын 21-нд нутгийн баруун хагаст бага зэрэг дулаарч, зүүн хэсгээр солигдмол үүлтэй байна. Төв аймгийн зүүн хойд, Дорнод, Сүхбаатарын өмнөд сумдын нутгаар 0.0-0.5 миллиметр ялимгүй цас орж, явган шуурга шуурна. Улаанбаатар хот орчмоор үүлшинэ, шөнөдөө ялимгүй цас орж, өдөртөө 5-7 хэм хүйтэн байх төлөвтэй байна. Малчид, иргэд, тээвэрчид хол замд гарахдаа цаг агаарын мэдээг тогтмол авч, замын нөхцөл байдлыг урьдчилан шалгахыг цаг уурын байгууллагаас анхааруулж байна.", textEn:"The National Agency for Meteorology and Environmental Monitoring has updated its weather outlook for November 21-25. On November 22, snow of 0.1-2.0 millimetres and blizzards are expected in some soums of Khuvsgul, Selenge and Bulgan and in northern soums of Tuv and Khentii, and on November 23 in eastern Selenge, Khentii, northern Dornod and north-eastern soums of Tuv. Winds will at times reach 14-16 metres per second across the Gobi, steppe and field regions.\n\nOvernight, temperatures will fall to minus 27-32 degrees in the Darkhad depression, around the sources of the Zavkhan, Zag and Baidrag rivers and Khurenbelchir, minus 20-25 in the Altai, Khangai, Khuvsgul and Khentii mountains and the valleys of the Ider, Tes, Tuul and Terelj rivers, minus 8-13 in the southern Gobi, and minus 14-19 elsewhere. Daytime temperatures will be minus 14-19 in the Darkhad depression and around the Zavkhan, Zag and Baidrag sources, minus 1-6 in the southern Gobi and minus 6-11 elsewhere.\n\nToday, November 21, the western half of the country will warm slightly, with changeable cloud in the east. Light snow of up to 0.5 millimetres and drifting snow are expected in north-eastern Tuv and southern soums of Dornod and Sukhbaatar. Around Ulaanbaatar it will be mostly cloudy with slight snow overnight and minus 5-7 degrees during the day. Herders, residents and drivers are urged to follow weather updates and check road conditions before long journeys."},
  {id:9, cat:"oron-nutag", title:"Эгийн голын УЦС-ыг барьж болох нь: Монгол, Оросын эрдэмтдийн хамтарсан дүгнэлт гарлаа", titleEn:"Egiin Gol hydropower plant can be built, joint Mongolian-Russian study finds", time:"1 цаг", timeEn:"1 hour", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Irganai%20Dam%20and%20Power%20Station.jpg?width=760", text:"Монгол, Оросын эрдэмтэд Эгийн голын усан цахилгаан станцын төслийг хэрэгжүүлэх боломжтой гэж дүгнэв. Хамтарсан судалгааны урьдчилсан дүгнэлтийг Ерөнхий сайд Н.Учралд танилцуулсан бөгөөд уг дүгнэлтээр станцыг Сэлэнгэ мөрөн-Байгаль нуурын экосистемд хор хохирол учруулахгүйгээр барьж болох гэж үзсэн байна. Ажлын хэсэг тайлангаа 2026 оны арваннэгдүгээр сарын 19-нд Оросын талд хүлээлгэн өгөхөөр төлөвлөжээ.\n\nЭгийн голын УЦС нь Монгол Улсын эрчим хүчний бие даасан байдлыг нэмэгдүүлэх, импортын цахилгаан эрчим хүчнээс хараат байдлыг бууруулах стратегийн ач холбогдолтой төсөл гэж үздэг. Гэсэн хэдий ч төсөл нь хил дамнасан усны нөөц, Байгаль нуурын экосистемд нөлөөлж болзошгүй гэсэн болгоомжлолоос үүдэн олон жил хэлэлцэгдэж, Оросын талын байр суурь чухал хүчин зүйл болж ирсэн юм.\n\nХамтарсан судалгааны дүгнэлт гарсан нь төслийг хэрэгжүүлэх чиглэлд ахиц гарсан хэрэг гэж үзэж болох ч эцсийн шийдвэр гараагүй байна. Төслийн байршил, хүчин чадал, байгаль орчны нөлөөллийн нарийвчилсан үнэлгээ, санхүүжилтийн асуудлыг цаашид хэлэлцэх шаардлагатай бөгөөд хоёр улсын Засгийн газар хоорондын яриа хэлэлцээ үргэлжлэх төлөвтэй байна.", textEn:"Mongolian and Russian scientists have concluded that the Egiin Gol hydropower plant project can be implemented. The preliminary findings of the joint study were presented to Prime Minister N. Uchral, concluding that the plant can be built without harming the Selenge River–Lake Baikal ecosystem. The working group planned to hand its report to the Russian side on November 19, 2026.\n\nThe Egiin Gol plant is regarded as a project of strategic importance for increasing Mongolia's energy independence and reducing dependence on imported electricity. However, because of concerns that it could affect transboundary water resources and the Lake Baikal ecosystem, the project has been discussed for many years, with Russia's position a key factor.\n\nThe joint study's conclusion marks progress towards implementing the project, but no final decision has been made. The plant's location, capacity, detailed environmental impact assessment and financing still need to be discussed, and intergovernmental talks between the two countries are expected to continue.", region:"khuvsgul"},
  {id:10, cat:"delhii", title:"Трамп Путинийг өмгөөлж, Ираныг хэлэлцээнд үнэнч бус байна гэж буруутгав", titleEn:"Trump defends Putin and accuses Iran of negotiating in bad faith", time:"30 мин", timeEn:"30 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/The%20White%20House%2C%20Washington%2C%20D.C.%20USA2.jpg?width=760", text:"АНУ-ын Ерөнхийлөгч Дональд Трамп баасан гарагт буюу арваннэгдүгээр сарын 20-нд Цагаан ордонд хийсэн хэвлэлийн бага хурлаар Оросын Ерөнхийлөгч Владимир Путинтэй харилцаагаа өмгөөлж, Ираныг дайныг зогсоох хэлэлцээнд үнэнч бус байна гэж буруутгав. Түүний мэдэгдэл нь Хятадын Шэньжэнь хотод Трамп, Си Жиньпин, Путин нар анх удаа гурван талт уулзалт хийж, «Энх тайвны төлөөх тунхаглал» гаргаснаас нэг өдрийн дараа гарсан байна.\n\nТрамп Путин Украинд хийж буй дайнаа зогсоохыг хүсч байгаа гэдэгт итгэж байгаагаа мэдэгдэж, Украины Ерөнхийлөгч Володимир Зеленский болон Путин нарын хооронд «асар их үзэн ядалт» байгаа нь тохиролцоонд хүрэхэд хүндрэл учруулж байна гэж хэллээ. Тэрбээр хоёр удирдагчийг хоёулаа дайнаас гарах арга зам хайж байгаа гэж үзэж байгаа бөгөөд Украины асуудлаар тохиролцоонд хүрэх «бодит сайн боломж» байгаа гэж мэдэгдсэн байна.\n\nИраны талаар Трамп «Тэд гэрээ хийхийг хүсч байгаа ч миний хүлээн зөвшөөрөх гэрээг хийхийг хүсэхгүй байна» гэж хэлж, Ираны удирдлагыг олон арван жил хүмүүсийг төөрөгдүүлж ирсэн гэж буруутгав. Тэрбээр Тегерантай дахин хэлэлцээ хийх хугацаа, цэргийн шинэ ажиллагааны талаар тодорхой мэдэгдэл хийгээгүй бөгөөд Иран хэзээ ч цөмийн зэвсэгтэй болохыг зөвшөөрөхгүй гэдгээ дахин нотолсон юм. Мөн Хятад улс гурван талт цөмийн зэвсгийг хорогдуулах хэлэлцээнд оролцохыг зөвшөөрсөн гэж мэдэгдсэн байна.", textEn:"US President Donald Trump defended his relationship with Russian President Vladimir Putin at a White House news conference on Friday, November 20, and accused Iran of negotiating in bad faith over ending the war. His remarks came a day after Trump, Xi Jinping and Putin held their first trilateral meeting in Shenzhen, China, and issued a «Declaration Towards Peace».\n\nTrump said he believed Putin wanted to end the war in Ukraine, and that «tremendous hatred» between Putin and Ukrainian President Volodymyr Zelenskyy was complicating any agreement. He said both leaders were looking for a way out of the war and that there was a «real good chance» of reaching a settlement on Ukraine.\n\nOn Iran, Trump said: «They want to make a deal, but they don't want to make a deal that's acceptable to me,» accusing Iranian leaders of misleading people for decades. He announced no timetable for renewed talks with Tehran or for new military action, and reiterated that Iran will never be allowed to possess nuclear weapons. He also said China had agreed to join trilateral talks on reducing nuclear arsenals."},
  {id:11, cat:"delhii", title:"Гал зогсоох гэрээ хэрэгжиж байгаа ч Газад Израилийн цохилтод зургаан хүн амиа алдав", titleEn:"Israeli strikes kill six in Gaza despite ceasefire", time:"45 мин", timeEn:"45 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Damage%20in%20Gaza%20Strip%20during%20the%20October%202023%20-%2029.jpg?width=760", text:"Газагийн зурваст баасан гарагт буюу арваннэгдүгээр сарын 20-нд Израилийн цохилтод зургаан хүн амиа алдсан тухай Газын иргэний хамгаалалтын алба мэдээллээ. Энэ нь 2025 оны аравдугаар сард хүчин төгөлдөр болсон гал зогсоох гэрээний дараа ч хүчирхийлэл үргэлжилж байгаагийн сүүлийн жишээ боллоо. Израилын арми хэд хэдэн цохилтод «олон цэргийн байг онилсон» гэж мэдэгдсэн байна.\n\nГазагийн иргэний хамгаалалтын албаны хэвлэлийн төлөөлөгч Махмуд Бассал баасан гарагт төвийн Газагийн Бурейж дүрвэгсдийн хуарангийн баруун өмнөд хэсэгт Израилийн дроны цохилтод дөрвөн палестин хүн амиа алдаж, хэд хэдэн хүн шархадсан гэж мэдэгдлээ. Мөн Израилын цэрэг Газын хойд хэсэгт өнгөрсөн долоо хоногт гурван удаагийн цохилтоор Хамас, Исламын жихад бүлэглэлийн гурван командлагчийг устгасан гэж Израилын арми болон Шин Бет аюулгүй байдлын алба хамтарсан мэдэгдэлдээ дурдсан байна.\n\nИзраиль, Хамас хоёр бие биеэ гал зогсоох гэрээг зөрчсөн гэж тогтмол буруутгаж байна. Гал зогсоох гэрээ хэрэгжиж эхэлснээс хойш 1600 гаруй палестин хүн амиа алдсан гэж Газын эрүүл мэндийн яамны мэдээлэлд үндэслэсэн AFP агентлагийн тооллого харуулж байна. Мөн хугацаанд Израилын армийн долоон цэрэг, нэг иргэний гэрээт ажилтан амиа алджээ. НҮБ-ын хиймэл дагуулын төвийн мэдээлснээр 2026 оны зургаадугаар сарын 16-ны байдлаар Газагийн барилга байгууламжийн 82 орчим хувь буюу 201,290 барилга эвдэрч, сүйдсэн байна.", textEn:"Israeli strikes killed six people in the Gaza Strip on Friday, November 20, Gaza's civil defence agency said, the latest violence despite a ceasefire that came into effect in October 2025. The Israeli military said it had «targeted multiple military operatives» in several strikes.\n\nMahmoud Bassal, spokesman for Gaza's civil defence agency, said four Palestinians were killed and several wounded in an Israeli drone strike south-west of the Bureij refugee camp in central Gaza on Friday. The Israeli military and the Shin Bet security agency said in a joint statement that Israeli forces had killed three commanders of Hamas and Islamic Jihad in three strikes over the past week.\n\nIsrael and Hamas regularly accuse each other of violating the ceasefire. More than 1,600 Palestinians have been killed since the ceasefire began, according to an AFP tally based on data from the Gaza health ministry. Over the same period, the Israeli military says seven of its soldiers and one civilian contractor have been killed. According to the United Nations Satellite Centre, about 82 percent of structures in Gaza — 201,290 buildings — had been damaged or destroyed as of June 16, 2026."},
  {id:12, cat:"delhii", title:"Олон улсын шүүх Мьянмарыг рохинжа нарын эсрэг геноцид үйлдсэн гэж үзлээ", titleEn:"World court finds Myanmar responsible for genocide against Rohingya", time:"1 цаг", timeEn:"1 hour", img:"https://commons.wikimedia.org/wiki/Special:FilePath/International%20Court%20of%20Justice%20HQ%202006.jpg?width=760", text:"Олон улсын шүүх Мьянмар улсыг рохинжа мусульман шашинтнуудын эсрэг геноцид үйлдсэн гэж үзсэн түүхэн шийдвэр гаргалаа. Энэ нь тус шүүхээс улс орныг геноцид үйлдсэн гэж үзсэн анхны шийдвэр болж байна. Шийдвэр нь Гамби улсын нэхэмжлэлийн дагуу 2019 онд эхэлсэн шүүх ажиллагааны үр дүн юм.\n\nРохинжа нар нь Мьянмарын Ракхайн мужид амьдардаг мусульман шашинт цөөнх бөгөөд 2017 онд Мьянмарын армийн явуулсан цэргийн ажиллагааны улмаас 700 мянга гаруй хүн Бангладеш руу дүрвэж, дэлхийн хамгийн том дүрвэгсдийн хямралуудын нэг үүссэн юм. НҮБ-ын мөрдөн байцаагчид Мьянмарын армийг геноцид үйлдсэн, дайны гэмт хэрэг, хүн төрөлхтний эсрэг гэмт хэрэг үйлдсэн гэж буруутгаж байсан билээ.\n\nШүүхийн шийдвэр нь олон улсын эрх зүйн түүхэнд чухал үйл явдал болж, геноцидын хохирогчдын эрхийг хамгаалах, хариуцлагыг тогтоох чиглэлд ач холбогдолтой гэж шинжээчид үзэж байна. Мьянмарын Засгийн газар геноцид үйлдсэн гэх буруутгалыг өмнө нь эрс няцааж байсан бөгөөд шийдвэрийн хэрэгжилт, нөхөн төлбөрийн асуудал цаашид олон улсын анхаарлын төвд байх төлөвтэй байна.", textEn:"The International Court of Justice has issued a historic ruling finding Myanmar responsible for genocide against the Rohingya Muslim minority — the first time the court has found a state responsible for genocide. The ruling is the result of proceedings begun in 2019 on a case brought by The Gambia.\n\nThe Rohingya are a Muslim minority living in Myanmar's Rakhine State, and more than 700,000 people fled to Bangladesh after a military operation by the Myanmar army in 2017, creating one of the world's largest refugee crises. United Nations investigators had accused the Myanmar military of genocide, war crimes and crimes against humanity.\n\nAnalysts say the ruling is an important event in the history of international law, significant for protecting the rights of genocide victims and establishing accountability. Myanmar's government has previously strongly denied the genocide allegations, and the implementation of the ruling and questions of reparation are expected to remain in the international spotlight."},
  {id:13, cat:"delhii", title:"Европын Холбоо, Их Британи Брюссельд хоёр дахь дээд хэмжээний уулзалтаа хийж, хамтын ажиллагаагаа гүнзгийрүүлэхээ амлав", titleEn:"EU and UK hold second summit in Brussels, pledge deeper cooperation", time:"1 цаг", timeEn:"1 hour", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Belgique%20-%20Bruxelles%20-%20Schuman%20-%20Berlaymont%20-%2001.jpg?width=760", text:"Европын Холбоо болон Их Британи 2026 оны арваннэгдүгээр сарын 20-нд Брюссельд стратегийн түншлэлээ сэргээснээс хойших хоёр дахь хоёр талт дээд хэмжээний уулзалтаа хийж, томоохон сорилтуудад хамтран ажиллахаа амлав. Уулзалтад Европын Зөвлөлийн дарга Антониу Кошта, Европын Комиссын дарга Урсула фон дер Ляйен, Их Британийн Ерөнхий сайд Энди Бёрнхэм нар оролцсон байна.\n\nХоёр тал хамтарсан мэдэгдэлдээ Украинд улс төр, эдийн засаг, санхүү, цэрэг, хүмүүнлэг, дипломат тусламж үргэлжлүүлэн үзүүлж, Москвагийн эсрэг хориг арга хэмжээг чангатгаж, иж бүрэн, удаан хугацааны энх тайвны төлөөх хүчин чармайлтыг дэмжихээ амлав. Мөн Ойрхи Дорнодын хурцадмал байдал, дэлхийн эдийн засгийн аюулгүй байдлын асуудлаар хамтран ажиллахаа мэдэгдсэн байна.\n\nУулзалтын хэлэлцэх асуудалд худалдаа, хөдөө аж ахуй, хүнсний зохицуулалт, эрчим хүчний хамтын ажиллагаа, аюулгүй байдал, шилжилт хөдөлгөөн, иргэдийн хоорондын ойр дотно харилцаа орсон байна. Хоёр дахь дээд хэмжээний уулзалт нь Брекситийн дараа Европын Холбоо, Их Британийн харилцаа аажмаар сайжирч, стратегийн түншлэлийн шинэ шатанд орж байгааг харуулж байна.", textEn:"The European Union and the United Kingdom held their second bilateral summit since the renewal of their strategic partnership in Brussels on November 20, 2026, pledging to work together on major challenges. European Council President António Costa, European Commission President Ursula von der Leyen and British Prime Minister Andy Burnham took part.\n\nIn a joint statement, the two sides pledged to continue providing political, economic, financial, military, humanitarian and diplomatic assistance to Ukraine, to strengthen sanctions against Moscow and to support efforts towards a comprehensive and lasting peace. They also pledged to cooperate on tensions in the Middle East and global economic security.\n\nThe agenda covered trade, agrifood regulations, energy cooperation, security, migration and closer contacts between citizens. The second summit shows EU–UK relations gradually improving after Brexit and entering a new stage of strategic partnership."},
  {id:14, cat:"delhii", title:"COP31-ийн төсөлд чулуужсан түлшнээс татгалзах тухай заалт ороогүй нь шүүмжлэл дагуулж байна", titleEn:"COP31 draft drops fossil fuel phase-out call, drawing criticism", time:"2 цаг", timeEn:"2 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Antalya%2C%20Turkey%20-%20panoramio%20%281%29.jpg?width=760", text:"Туркийн Анталья хотноо болж буй НҮБ-ын Уур амьсгалын өөрчлөлтийн тухай суурь конвенцын талуудын 31 дүгээр бага хурал буюу COP31-ийн төсөл гэрээнээс чулуужсан түлшний хэрэглээг зогсоох тухай дурдсан хэсгийг хассанаар шүүмжлэл дагуулж байна. Хэлэлцээчид гэрээний төслийг товчилж, чулуужсан түлшнээс татгалзах тухай ямар ч заалт оруулаагүй байна.\n\nЭнэ шийдвэр нь уур амьсгалын өөрчлөлтийн эсрэг тэмцэлд чулуужсан түлшний хэрэглээг үе шаттайгаар бууруулах нь чухал гэж үздэг улс орнууд, байгаль орчны байгууллагуудын шүүмжлэлийг дагуулжээ. Уур амьсгалын эрдэмтдийн үзэж буйгаар дэлхийн дулаарлыг 1.5 хэмд барихын тулд чулуужсан түлшний хэрэглээг хурдан бууруулах шаардлагатай бөгөөд гэрээнд энэ талаар тодорхой амлалт байхгүй нь хэлэлцээний үр дүнг сулруулж болзошгүй байна.\n\nCOP31-ийн хэлэлцээ үргэлжилж байгаа бөгөөд эцсийн гэрээнд чулуужсан түлшний талаарх заалт орох эсэх нь хэлэлцээний сүүлийн өдрүүдэд шийдэгдэх төлөвтэй байна. Хөгжиж буй орнууд санхүүжилт, дасан зохицох арга хэмжээний талаар тодорхой амлалт шаардаж байгаа бол чулуужсан түлш үйлдвэрлэгч орнууд эрчим хүчний шилжилтийг аажмаар хийх байр суурь баримталж байна.", textEn:"The draft deal at COP31, the 31st Conference of the Parties to the UN Framework Convention on Climate Change, under way in Antalya, Turkey, has drawn criticism after negotiators removed any reference to ending fossil fuel use from a slimmed-down draft. The draft contains no provision on phasing out fossil fuels.\n\nThe decision has drawn criticism from countries and environmental groups that regard a phased reduction in fossil fuel use as essential to fighting climate change. Climate scientists say fossil fuel use must fall quickly to keep global warming to 1.5 degrees, and the absence of a clear commitment in the deal could weaken the outcome of the talks.\n\nNegotiations at COP31 continue, and whether the final agreement will contain a provision on fossil fuels is expected to be decided in the closing days of the talks. Developing countries are demanding clear commitments on finance and adaptation, while fossil fuel producing countries favour a gradual energy transition."},
  {id:15, cat:"sport", title:"Сүмо: Оносато Вакамотохарүг ялж, Кюүшү башёд тэргүүлэгчид 11-2-оор тэнцэв", titleEn:"Sumo: Onosato beats Wakamotoharu as Kyushu leaders tie at 11-2", time:"1 цаг", timeEn:"1 hour", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Sumo%20wrestlers.jpg?width=760", text:"Японы Фүкүока хотод болж буй мэргэжлийн сүмогийн Кюүшү башёгийн 13 дахь өдөр буюу арваннэгдүгээр сарын 20-нд ёкозүна Оносато ганцаараа тэргүүлж байсан маэгашира Вакамотохарүг ёрикири мэхээр ялж, хоёр бөхийг 11 даваа, 2 унаатайгаар тэргүүлэгчдийн байранд тэнцүүллээ. Оносато хоёр дахь удаагаа дараалан түрүүлэхээр өрсөлдөж байгаа бөгөөд зургаан удаа Эзэн хааны цом хүртсэн билээ.\n\nТэргүүлэгчийн араас явж байсан сэкиваке Атамифүжи, маэгашира Кинбозан нар хоёулаа ялагдаж, 10 даваа, 3 унаатай болсон байна. Атамифүжи Орос гаралтай Рогад, Кинбозан озэки Киришимад тус тус ялагдсан бөгөөд Киришима 9 даваа, 4 унаатай болж, гурван дараалан ялагдсан цувралаа таслав. Котосакура озэки 8 даваа, 5 унаатай болж, найм дахь ялалтаа байгууллаа.\n\nЁкозүна Хошорюү С.Бямбасүрэн озэки Аонишикиг охуринагэ мэхээр ялж, 8 даваа, 5 унаатайгаар хожлын тоогоо баталгаажууллаа. Энэ нь түүний дөрөв дэх дараалан ялалт бөгөөд өвдөгний мэс заслын дараа эргэн ирж байгаа түүний хувьд чухал амжилт юм. Аонишики 6 даваа, 7 унаатай болсон бөгөөд сүүлийн хоёр өдөрт хоёуланд нь ялах шаардлагатай байна. Кюүшү башё арваннэгдүгээр сарын 22-нд өндөрлөх бөгөөд 14 дэх өдөр буюу өнөөдөр тэргүүлэгчдийн өрсөлдөөн улам ширүүсэх төлөвтэй байна.", textEn:"On day 13 of the Kyushu basho professional sumo tournament in Fukuoka, Japan, on November 20, yokozuna Onosato beat sole overnight leader Wakamotoharu by yorikiri, leaving the two tied at the top with 11 wins and 2 losses. Onosato, a six-time Emperor's Cup winner, is chasing a second straight championship.\n\nSekiwake Atamifuji and maegashira Kinbozan, who had been chasing the leader, both lost and fell to 10-3. Atamifuji lost to Russian-born Roga, while Kinbozan lost to ozeki Kirishima, who improved to 9-4 and ended a three-match losing run. Ozeki Kotozakura secured his eighth win and now stands at 8-5.\n\nYokozuna Hoshoryu S. Byambasuren beat ozeki Aonishiki by okurinage to secure a winning record at 8-5. It was his fourth straight win, an important result as he returns from knee surgery. Aonishiki fell to 6-7 and must win both of his remaining bouts. The Kyushu basho ends on November 22, and the race at the top is set to intensify today, on day 14."},
  {id:16, cat:"sport", title:"У.Сүрэнжав пара таеквондогийн дэлхийн аваргаас хүрэл медаль хүртлээ", titleEn:"U. Surenjav wins para taekwondo world bronze", time:"2 цаг", timeEn:"2 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Taekwondo%20tournament.jpg?width=760", text:"БНСУ-ын Мүжү хотноо үргэлжилж буй пара таеквондогийн дэлхийн аварга шалгаруулах тэмцээнд Монголын баг тамирчдын эхний медалийг хөдөлмөрийн баатар У.Сүрэнжав авчирлаа. Эмэгтэйчүүдийн K44 ангиллын 52 кг-ын жинд тэрбээр эхний тойрогт хийлж, шөвгийн наймд ОХУ-ын тамирчныг 2:0-ээр ялснаар хагас шигшээд шалгарсан юм. Хагас шигшээд Ираны тамирчин Захра Рахимид 1:2-оор ялагдсанаар хүрэл медалийн эзэн болов.\n\nУ.Сүрэнжавын хувьд энэ нь дэлхийн аварга шалгаруулах тэмцээнээс хүртсэн хоёр дахь хүрэл медаль бөгөөд тэрбээр 2023 оны дэлхийн аваргаас мөн хүрэл медаль хүртэж байсан юм. Түүний амжилт нь Монголын пара спортын хөгжил, тамирчдын олон улсын тавцан дахь өрсөлдөх чадварыг харуулж байгаа бөгөөд багийнхандаа урам зориг өгч байна.\n\nМөн өдөр эрэгтэйчүүдийн K44 ангиллын 58 кг-ын жинд тулалдсан олон улсын хэмжээний мастер Х.Темирбек эхний тойрогт ОХУ-ын тамирчин Асхат Акматовыг 2:0-ээр ялсан ч дараа нь Азербайжаны Сабир Зейналовт дийлдсэнээр тэмцээнээ өндөрлүүлжээ. Маргааш манай улсаас эрэгтэйчүүдийн 63 кг-ын жинд гавьяат тамирчин Г.Болор-Эрдэнэ, 70 кг-д олон улсын хэмжээний мастер Б.Шинэбаяр дэвжээнд гарна.", textEn:"Labour Hero U. Surenjav won Mongolia's first medal at the Para Taekwondo World Championships under way in Muju, South Korea. In the women's K44 under-52-kilogram category, she had a bye in the first round, then beat a Russian athlete 2-0 in the quarter-final to reach the semi-final, where she lost 1-2 to Iran's Zahra Rahimi and took the bronze medal.\n\nIt is Surenjav's second world championship bronze, after she also won bronze at the 2023 World Championships. Her success shows the development of para sport in Mongolia and the competitiveness of its athletes on the international stage, and it inspires her teammates.\n\nOn the same day, international master Kh. Temirbek, competing in the men's K44 under-58-kilogram category, beat Russian Askhat Akmatov 2-0 in the first round but then lost to Azerbaijan's Sabir Zeynalov and ended his tournament. Tomorrow, honoured athlete G. Bolor-Erdene (under 63 kg) and international master B. Shinebayar (under 70 kg) will compete for Mongolia."},
  {id:17, cat:"soyol", title:"Италид «Монголчуудын ертөнц: Ил хаант улс ба Персийн урлаг» үзэсгэлэн нээгдэнэ", titleEn:"'The World of the Mongols: The Ilkhanate and Persian Art' opens in Italy", time:"2 цаг", timeEn:"2 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Mole%20Antonelliana%20di%20sera.jpg?width=760", text:"«Чингис хаан» Үндэсний музейгээс Итали Улсын Турин хотын Дорно дахины Урлагийн музейтэй хамтран зохион байгуулж буй «Монголчуудын ертөнц: Ил хаант улс ба Персийн урлаг» үзэсгэлэнг нээх гэж байна. Тус үзэсгэлэнгээр Чингис хаан болон Их Монгол Улсын хаадын ивээл дор уран баримал, шаазан эдлэл, уран барилга болон Исламын ертөнцийн урлаг хэрхэн цэцэглэн хөгжсөнийг харуулахын зэрэгцээ Монгол хаад өөрсдийн нүүдэлчин өв соёл, уламжлалаа хэрхэн хадгалж үлдсэнийг дэлгэн үзүүлнэ.\n\nХүн төрөлхтний түүхэнд хоёр зууныг эзэлсэн «Монголын эрин зуун» нь Өрнө-Дорнын соёл урлаг, шинжлэх ухааныг холбож, орчин цагийн ертөнцийн суурийг тавьсан билээ. Ил хаант улс нь Монголын эзэнт гүрний нэг хэсэг бөгөөд Персэд төвлөрч, Монголын захирагчдын ивээл дор Персийн урлаг, соёл шинэ шатанд хөгжсөн юм. Үзэсгэлэн нь энэ түүхэн үеийн урлагийн сор бүтээлүүдийг Италийн үзэгчдэд танилцуулах зорилготой байна.\n\nМонгол, Италийн соёлын хамтын ажиллагаа сүүлийн жилүүдэд идэвхжиж байна. Милан хотод нээгдсэн «Эртний дэлхийн өв» олон улсын үзэсгэлэнд 80 орчим байгууллагын 200 гаруй үзмэр дэлгэгдэж байгаа бөгөөд Чингис хаан Үндэсний музей, Шинжлэх ухааны академийн Археологийн хүрээлэнгийн хоёр үзмэр оролцож байгаа юм. Турины үзэсгэлэн нь хоёр улсын соёлын солилцоог гүнзгийрүүлэх бас нэгэн чухал алхам болж байна.", textEn:"The Chinggis Khaan National Museum and the Museum of Oriental Art in Turin, Italy, are opening the exhibition «The World of the Mongols: The Ilkhanate and Persian Art». It will show how sculpture, ceramics, architecture and the art of the Islamic world flourished under the patronage of Chinggis Khaan and the khans of the Great Mongol State, and how the Mongol rulers preserved their nomadic heritage and traditions.\n\nThe «Mongolian century», which spanned two centuries of human history, connected the culture, art and science of East and West and laid the foundations of the modern world. The Ilkhanate was part of the Mongol Empire, centred in Persia, where Persian art and culture reached a new stage under Mongol rulers. The exhibition aims to present masterpieces of this historical period to Italian audiences.\n\nMongolian–Italian cultural cooperation has intensified in recent years. The international exhibition «Heritage of the Ancient World» in Milan features more than 200 objects from around 80 institutions, including two items from the Chinggis Khaan National Museum and the Institute of Archaeology of the Academy of Sciences. The Turin exhibition is another important step in deepening cultural exchange between the two countries."},
  {id:18, cat:"tech", title:"Anthropic 81.3 тэрбум ам.доллар босгосон түүхэн IPO хийж, Nasdaq-д бүртгэгдлээ", titleEn:"Anthropic raises record $81.3 billion in historic IPO on Nasdaq", time:"2 цаг", timeEn:"2 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/New%20York%20Stock%20Exchange%20August%202017%2002.jpg?width=760", text:"Хиймэл оюун ухааны Anthropic компани түүхэн дэх хамгийн том анхдагч олон нийтийн санал болголт буюу IPO-г хийж, 980 сая ширхэг хувьцааг нэгж бүрийг нь 83 ам.доллараар зарж, нийт 81.3 тэрбум ам.доллар босголоо. Компанийн хувьцаа Nasdaq-ын хөрөнгийн бирж дээр Ant тикертэйгээр бүртгэгдэж, анхны арилжааны өдөр 17 хувиар өсч, 97.17 ам.доллараар хаагдсан байна. Гэсэн хэдий ч хувьцааны үнэ хоёр дахь өдрийн арилжаанд буурсан байна.\n\nIPO-гийн үнэ нь анх зарласан 70-78 ам.долларын хязгаараас давсан бөгөөд компанийн үүсгэн байгуулагчид олонхын саналын эрхийг хадгалж үлдсэн байна. Anthropic нь Claude хиймэл оюун ухааны загвараа хөгжүүлдэг бөгөөд IPO нь хиймэл оюун ухааны компаниудын хөрөнгийн зах зээл дэх үнэлгээний шинэ дээд түвшин болж байна. Компанийн зах зээлийн үнэлгээ 1.5 их наяд ам.доллар орчимд хүрсэн гэж мэдээлж байна.\n\nAnthropic-ийн IPO хийсэн өдөр дэлхийн хувьцааны зах зээл долоо дахь өдрөө дараалан буурсан бөгөөд Японы Nikkei индекс 4.8 хувиар уналаа. Энэ нь хиймэл оюун ухааны салбарын өсөлт, Nvidia компанийн 115.8 тэрбум ам.долларын улирлын орлого зэрэг эерэг мэдээ гарсан ч хөрөнгө оруулагчдын болгоомжлол нэмэгдэж байгааг харуулж байна. Nvidia компанийн гүйцэтгэх захирал Женсен Хуан арваннэгдүгээр сарын 12-нд огцорсон нь технологийн салбарын хувьцаанд нөлөөлж байгаа юм.", textEn:"Artificial intelligence company Anthropic has completed the largest initial public offering in history, selling 980 million shares at 83 US dollars each and raising 81.3 billion US dollars. The shares listed on the Nasdaq stock exchange under the ticker Ant and rose 17 percent on their first day of trading, closing at 97.17 dollars, although the price fell in second-day trading.\n\nThe IPO priced above the originally marketed range of 70-78 dollars, and the company's founders retained majority voting control. Anthropic develops the Claude family of AI models, and the offering sets a new high for the stock market valuation of AI companies, with the company's market value reported at around 1.5 trillion dollars.\n\nOn the day of Anthropic's debut, global stock markets fell for a seventh straight day, with Japan's Nikkei index down 4.8 percent. The slide shows growing investor caution despite positive news from the AI sector, including Nvidia's quarterly revenue of 115.8 billion dollars. Nvidia chief executive Jensen Huang resigned on November 12, which has also weighed on technology shares."},
];


function aTitle(a){ return LANG === "en" ? (a.titleEn || a.title) : a.title; }
function aTime(a){ return LANG === "en" ? (a.timeEn || a.time) : a.time; }
function aText(a){ if(a.text) return LANG === "en" ? (a.textEn || a.text) : a.text; return SAMPLE_TEXT[LANG][a.id === 1 ? "long" : "short"]; }
function aRegion(a){ return a.region ? ((REGIONS[LANG] && REGIONS[LANG][a.region]) || a.region) : ""; }

// ===== Ханш · Цаг агаар (өдөр бүр шинэчлэгдэнэ; цаг агаарыг Open-Meteo-гоос шууд татна) =====
const RATES = {date:"2026-11-21", items:[
  {code:"USD", mnt:3607.00, chg:1}, {code:"EUR", mnt:3961.93, chg:1}, {code:"JPY", mnt:22.66, chg:1},
  {code:"CNY", mnt:540.35, chg:-1}, {code:"KRW", mnt:2.70, chg:-1}, {code:"RUB", mnt:44.04, chg:1}, {code:"GBP", mnt:4730.40, chg:-1}
]};
let WEATHER = [
  {city:"Улаанбаатар", cityEn:"Ulaanbaatar", lat:47.9212, lon:106.9186, tz:"Asia/Ulaanbaatar", temp:-16, code:45},
  {city:"Токио", cityEn:"Tokyo", lat:35.6762, lon:139.6503, tz:"Asia/Tokyo", temp:6, code:0},
  {city:"Сөүл", cityEn:"Seoul", lat:37.5665, lon:126.978, tz:"Asia/Seoul", temp:-4, code:0},
  {city:"Бээжин", cityEn:"Beijing", lat:39.9042, lon:116.4074, tz:"Asia/Shanghai", temp:1, code:0},
  {city:"Москва", cityEn:"Moscow", lat:55.7558, lon:37.6173, tz:"Europe/Moscow", temp:4, code:3}
];
function wIcon(code){
  if(code === 0) return "☀️";
  if(code === 1) return "🌤️";
  if(code === 2) return "⛅";
  if(code === 3) return "☁️";
  if(code === 45 || code === 48) return "🌫️";
  if(code === 51 || code === 53 || code === 55 || code === 80) return "🌦️";
  if(code === 56 || code === 57 || code === 61 || code === 63 || code === 65 || code === 66 || code === 67 || code === 81 || code === 82) return "🌧️";
  if(code === 71 || code === 73 || code === 75 || code === 77 || code === 85 || code === 86) return "❄️";
  if(code >= 95) return "⛈️";
  return "🌡️";
}
function fmtRate(v){
  if(v >= 100) return Math.round(v).toLocaleString("en-US");
  return v.toFixed(2);
}
function renderData(){
  const parts = [];
  RATES.items.forEach(r=>{
    let arrow = "";
    if(r.chg > 0) arrow = ' <span class="up">▲</span>';
    else if(r.chg < 0) arrow = ' <span class="down">▼</span>';
    parts.push(`<span class="tk"><b>${r.code}</b> ${fmtRate(r.mnt)}₮${arrow}</span>`);
  });
  WEATHER.forEach(w=>{
    const name = LANG === "en" ? w.cityEn : w.city;
    const t = w.temp > 0 ? "+" + w.temp : "" + w.temp;
    parts.push(`<span class="tk">${wIcon(w.code)} ${name} ${t}°C</span>`);
  });
  const html = parts.join('<span style="color:#666">•</span>');
  const track = document.getElementById("tickerTrack");
  if(track) track.innerHTML = html + '<span style="color:#666">•</span>' + html + '<span style="color:#666">•</span>';
  const usd = RATES.items.find(r=>r.code === "USD");
  const ue = document.getElementById("usdText");
  if(ue && usd) ue.textContent = "USD: " + fmtRate(usd.mnt) + "₮";
  const wt = document.getElementById("weatherText");
  const ub = WEATHER[0];
  if(wt && ub) wt.textContent = wIcon(ub.code) + " " + (LANG === "en" ? ub.cityEn : ub.city) + " " + (ub.temp > 0 ? "+" + ub.temp : ub.temp) + "°C";
}
function refreshWeather(){
  WEATHER.forEach((w, idx)=>{
    const url = "https://api.open-meteo.com/v1/forecast?latitude=" + w.lat + "&longitude=" + w.lon + "&current=temperature_2m%2Cweather_code&timezone=" + encodeURIComponent(w.tz);
    fetch(url).then(r=>r.json()).then(d=>{
      if(d && d.current){ WEATHER[idx].temp = Math.round(d.current.temperature_2m); WEATHER[idx].code = d.current.weather_code; renderData(); }
    }).catch(()=>{});
  });
}

const VIDEOS = [
  {yt:"RZgWbFnVAw0", title:"Монгол Улсын Ерөнхийлөгч асан У.Хүрэлсүхийг үдэх ёслол", titleEn:"Farewell ceremony for former President U. Khurelsukh", src:"МҮОНТ", srcEn:"MNB", srcFull:"МҮОНТ (Монголын үндэсний олон нийтийн телевиз)", srcFullEn:"MNB (Mongolian National Broadcaster)"},
  {yt:"3SyuwBhJGdI", title:"Парламент Монгол Улсын Ерөнхийлөгчийн үүрэгт ажлаасаа чөлөөлөгдөх хүсэлтийг хүлээн зөвшөөрлөө", titleEn:"Parliament accepts the President's request to be relieved of his duties", src:"МҮОНТ", srcEn:"MNB", srcFull:"МҮОНТ (Монголын үндэсний олон нийтийн телевиз)", srcFullEn:"MNB (Mongolian National Broadcaster)"},
  {yt:"Uo9uRSu8D3A", title:"Тусгай сурвалжилга: ТЕНДЕРИЙН ЦААНА", titleEn:"Special report: Behind the Tender", src:"Eagle TV", srcEn:"Eagle TV", srcFull:"Eagle TV (Ийгл телевиз)", srcFullEn:"Eagle TV"},
  {yt:"cs8FjJEXC2s", title:"Шинжээчийн цаг: Anthropic, Pbc компани Nasdaq-ын хөрөнгийн бирж дээр Ant тикертэйгээр бүртгэгдэнэ", titleEn:"Expert's Hour: Anthropic, Pbc to list on Nasdaq under ticker Ant", src:"Eagle TV", srcEn:"Eagle TV", srcFull:"Eagle TV (Ийгл телевиз)", srcFullEn:"Eagle TV"},
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
  renderData();
  document.getElementById("videoGrid").innerHTML = VIDEOS.map((v,i)=>`
    <div class="video-card" onclick="openVideo(${i})">
      <div class="imgwrap"><img src="https://i.ytimg.com/vi/${v.yt}/hqdefault.jpg" alt="" loading="lazy"><span class="play-badge">▶</span></div>
      <h4>${LANG === "en" ? (v.titleEn || v.title) : v.title}</h4><p class="vsrc">${LANG === "en" ? "Source: " : "Эх сурвалж: "}${LANG === "en" ? (v.srcEn || v.src) : v.src}</p></div>`).join("");
  document.getElementById("authorsRow").innerHTML = AUTHORS.map(a=>`
    <div class="author-card"><p class="a-name">${t("author_prefix")}${LANG === "en" ? a.nameEn : a.name}</p><p class="a-quote">${LANG === "en" ? a.quoteEn : a.quote}</p></div>`).join("");
  const wg = document.getElementById("worldGrid");
  if(wg) wg.innerHTML = ARTICLES.filter(a=>a.cat==="delhii").slice(0,4).map(a=>`
    <div class="local-card" onclick="openArticle(${a.id})">
      <img src="${a.img}" alt="" loading="lazy"><h4>${aTitle(a)}</h4>
      <p class="time">${aTime(a)}</p></div>`).join("");
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
  document.querySelectorAll(".js-logo-name").forEach(el=>{ el.textContent = LANG === "en" ? "TANA" : "ТАНА"; });
  document.querySelectorAll(".js-logo-suffix").forEach(el=>{ el.textContent = LANG === "en" ? ".mn" : ".мн"; });
  const lb = document.getElementById("langBtn");
  if(lb) lb.textContent = LANG === "en" ? "MN" : "EN";
  const now = new Date();
  document.getElementById("todayDate").textContent = t("today") + (now.getMonth()+1) + "/" + now.getDate();
  renderHome();
}
function setLang(l){
  LANG = l;
  localStorage.setItem("tana-lang", l);
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

// ===== Видео =====
function openVideo(i){
  const v = VIDEOS[i]; if(!v) return;
  document.getElementById("videoFrame").src = "https://www.youtube-nocookie.com/embed/" + v.yt + "?autoplay=1&rel=0";
  document.getElementById("videoTitle").textContent = LANG === "en" ? (v.titleEn || v.title) : v.title;
  document.getElementById("videoSrc").textContent = (LANG === "en" ? "Source: " : "Эх сурвалж: ") + (LANG === "en" ? (v.srcFullEn || v.srcEn || v.src) : (v.srcFull || v.src));
  document.getElementById("videoModal").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeVideo(){
  document.getElementById("videoModal").classList.remove("open");
  document.getElementById("videoFrame").src = "";
  document.body.style.overflow = "";
}
document.getElementById("videoModal").addEventListener("click", e=>{ if(e.target.id==="videoModal") closeVideo(); });

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
refreshWeather();
