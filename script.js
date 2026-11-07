// ===== Хэл (MN / EN) =====
let LANG = localStorage.getItem("tugee-lang") || "mn";

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
    copyright: "© 2026 TUGEE.mn (ТҮГЭЭ). Бүх эрх хуулиар хамгаалагдсан.", img_credit: "Мэдээний зургууд: Wikimedia Commons — чөлөөт лицензтэй зургууд.",
    no_news: "Мэдээ алга.", no_cat: "Энэ ангилалд одоогоор мэдээ алга.", no_result: "Илэрц олдсонгүй.",
    author_prefix: "Нийтлэлч · ", doc_title: "TUGEE.mn — ТҮГЭЭ | Мэдээг түгээ"
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
    copyright: "© 2026 TUGEE.mn. All rights reserved.", img_credit: "News photos: Wikimedia Commons — freely licensed images.",
    no_news: "No news yet.", no_cat: "No news in this category yet.", no_result: "No results found.",
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
  mn: { "arkhangai": "Архангай", "khuvsgul": "Хөвсгөл", "dornogovi": "Дорноговь", "uvurkhangai": "Өвөрхангай", "dornod": "Дорнод", "selenge": "Сэлэнгэ", "zavkhan": "Завхан" },
  en: { "arkhangai": "Arkhangai", "khuvsgul": "Khuvsgul", "dornogovi": "Dornogovi", "uvurkhangai": "Uvurkhangai", "dornod": "Dornod", "selenge": "Selenge", "zavkhan": "Zavkhan" }
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

// ===== Бодит мэдээнүүд (2026-11-08) — өдөр бүр шинэчлэгдэнэ =====
const ARTICLES = [
  {id:1, cat:"uls-tor", title:"Ерөнхийлөгч У.Хүрэлсүх “Монголын төмөр зам” ТӨХК-ийн хамт олонтой уулзав", titleEn:"President Khurelsukh meets staff of Mongolian Railway state company", time:"15 мин", timeEn:"15 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Trans%20Mongolian%20Railway.jpg?width=1000", text:"Монгол Улсын Ерөнхийлөгч Ухнаагийн Хүрэлсүх “Монголын төмөр зам” ТӨХК-ийн хамт олонтой уулзаж, тус компанийн ажил үйлс, улс орны эдийн засагт оруулж буй хувь нэмрийн талаар ярилцлаа. Тэрбээр эдийн засгийн өсөлтийг хангах, төмөр замын үндэсний сүлжээг хөгжүүлэх төрийн бодлого, шийдвэрийг хэрэгжүүлэх үүргээ амжилттай гүйцэтгэж байгаа хамт олонд талархал илэрхийлэв.\n\n“Монголын төмөр зам” компани энэ оны эхний 11 сарын байдлаар 11.7 сая тонн ачаа тээвэрлээд байна. Тус компани Тавантолгой–Зүүнбаян чиглэлийн төмөр замыг барьж, Тавантолгой–Зүүнбаян, Тавантолгой–Гашуунсухайт чиглэлд ачаа тээвэрлэж байгаа юм. Тээвэрлэлтийн менежментийг сайжруулсны үр дүнд борлуулалтын орлого нь оны эхний хагас жилд өмнөх оны мөн үеэс 5.6 дахин өсөж, 314 тэрбум төгрөгт хүрчээ.\n\nЕрөнхийлөгч уулзалтын үеэр эдийн засаг 6.8 хувиар өсөж, нэг хүнд ногдох дотоодын нийт бүтээгдэхүүн 7,000 ам.доллар давж, худалдаа, хөрөнгө оруулалт нэмэгдэж, гадаад валютын нөөц 7 тэрбум ам.доллар болж, зээлжих зэрэглэл түүхэн дээд түвшинд хүрснийг дурдав. Мөн өнгөрсөн хугацаанд айл өрхүүд 60 гаруй мянган үрсээр ам бүлээ нэмж, мал сүргийн тоо 60 саяд хүрч, 745 мянган тонн үр тариа хураан авсныг хэллээ.\n\nБагахангай–Хөшигийн хөндий–Эмээлт чиглэлийн 127.1 км төмөр зам нь тус компанийн сүүлийн үеийн томоохон бүтээн байгуулалтын нэг юм. Энэ төмөр замаар эхний жилд 20 сая, цаашид 25 сая тонн ачааг Улаанбаатар хотыг тойруулан тээвэрлэх бөгөөд энэ нь хоногт дунджаар 1,800 орчим том оврын автомашин хотын хөдөлгөөнд оролцохгүй гэсэн үг юм.\n\nЗам, тээврийн сайд Б.Дэлгэрсайхан Ерөнхийлөгч У.Хүрэлсүхийг Ерөнхий сайд байхдаа Багахангай–Хөшигийн хөндий–Эмээлт чиглэлд төмөр зам барих санаачилга гаргаж, Тавантолгой–Гашуунсухайт чиглэлийн төмөр замын бүтээн байгуулалтыг эхлүүлсэн нь өдгөө бодит ажил хэрэг болсонд төмөр замчид, инженер, техникийн ажилтнууд, үндэсний аж ахуйн нэгжүүдийн нэрийн өмнөөс талархал илэрхийлэв.", textEn:"President of Mongolia Ukhnaa Khurelsukh met the staff of the state-owned company Mongolian Railway and discussed the company's work and its contribution to the national economy. He thanked the team for successfully carrying out state policy and decisions on ensuring economic growth and developing the national railway network.\n\nMongolian Railway has transported 11.7 million tonnes of freight in the first 11 months of this year. The company built the Tavantolgoi–Zuunbayan railway and now carries freight on the Tavantolgoi–Zuunbayan and Tavantolgoi–Gashuunsukhait lines. Improved transport management lifted sales revenue 5.6-fold year on year in the first half of the year, to 314 billion tugriks.\n\nDuring the meeting the President noted that the economy grew by 6.8 percent, GDP per capita exceeded 7,000 US dollars, trade and investment increased, foreign exchange reserves reached 7 billion US dollars, and the credit rating hit a historic high. He also said families had welcomed more than 60,000 newborns, livestock numbers had reached 60 million, and 745,000 tonnes of grain had been harvested.\n\nThe 127.1-kilometre Bagakhangai–Khushig Valley–Emeelt railway is one of the company's recent major projects. It is expected to carry 20 million tonnes of freight around Ulaanbaatar in its first year, rising to 25 million tonnes later — the equivalent of keeping around 1,800 heavy trucks a day out of city traffic.\n\nMinister of Roads and Transport B. Delgersaikhan, speaking on behalf of railway workers, engineers, technical staff and national enterprises, thanked President Khurelsukh for initiating the Bagakhangai–Khushig Valley–Emeelt railway while he was prime minister and for launching the Tavantolgoi–Gashuunsukhait railway construction, which has now become reality."},
  {id:2, cat:"uls-tor", title:"Б.Пүрэвдагвыг Нийслэлийн МАН-ын даргаар 97.5 хувийн саналаар сонголоо", titleEn:"B. Purevdagva elected chair of capital MPP committee with 97.5 percent of votes", time:"30 мин", timeEn:"30 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Genghis%20Khan%2C%20Parliament%20Building%2C%20Ulaanbaatar%2C%20Mongolia%20(48788605616).jpg?width=760", text:"Нийслэлийн Монгол Ардын Намын хорооны 36 дугаар Бага хурал өнөөдөр /2026.11.07/ Тусгаар тогтнолын ордонд болж, тус хуралд Нийслэлийн Монгол Ардын Намын 78 мянга гаруй гишүүнийг төлөөлж 489 төлөөлөгч оролцлоо. Хурлаар Нийслэлийн МАН-ын хорооны даргын тайлан, даргыг шинээр сонгох, бүтэц, зохион байгуулалтын асуудлыг хэлэлцэн шийдвэрлэв.\n\nХурлын эхэнд Хотын дарга асан Х.Нямбаатар цахимаар тайлангаа танилцуулсан бөгөөд хурлаар түүнийг Нийслэлийн МАН-ын хорооны даргын үүргээс чөлөөлөх шийдвэр гаргажээ. Төлөөлөгчид шинэ даргыг сонгох нууц санал хураалт явуулсан байна.\n\nСанал хураалтын дүнд Б.Пүрэвдагвыг Нийслэлийн МАН-ын хорооны даргаар 97.5 хувийн саналаар сонголоо. Ийнхүү нийслэлийн намын байгууллагын удирдлага шинэчлэгдэж, хотын намын хороог Б.Пүрэвдагва тэргүүлэхээр болов.\n\nНийслэлийн МАН-ын хорооны 36 дугаар Бага хуралд намын ахмад, дунд, залуу үеийнхний залгамж холбоо, эмэгтэйчүүдийн төлөөлөл сонгогджээ. Хурлын шийдвэрүүд нийслэлийн намын байгууллагын цаашдын үйл ажиллагаанд чиглэл өгөх юм.", textEn:"The 36th Baga Khural of the Ulaanbaatar committee of the Mongolian People's Party was held today (2026.11.07) at the Independence Palace, with 489 delegates representing more than 78,000 party members in the capital. The meeting discussed the committee chair's report, the election of a new chair, and organisational matters.\n\nAt the start of the meeting, former mayor Kh. Nyambaatar presented his report online, and the khural decided to release him from the post of chair of the capital MPP committee. Delegates then held a secret ballot to elect a new chair.\n\nB. Purevdagva was elected chair of the capital MPP committee with 97.5 percent of the votes. The leadership of the capital's party organisation has thus been renewed, with B. Purevdagva now heading the city party committee.\n\nDelegates to the 36th Baga Khural of the capital MPP committee were chosen to reflect continuity between the party's older, middle and younger generations, as well as women's representation. The decisions of the khural will guide the future work of the capital's party organisation."},
  {id:3, cat:"niigem", title:"Сурагчдын II улирлын хичээл ирэх даваа гарагт эхэлнэ", titleEn:"Second-quarter classes for school pupils start on Monday", time:"45 мин", timeEn:"45 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Children%20in%20Classroom%20Tanunda%20Primary%20School(GN08910).jpg?width=760", text:"Ерөнхий боловсролын сургуулийн сурагчдын эхний улирлын амралт 2026 оны 11 дүгээр сарын 2–8-ны өдрүүдэд үргэлжилж, II улирлын хичээл ирэх даваа гарагт буюу 11 дүгээр сарын 9-нд эхэлнэ. Сурагчид нэг долоо хоног амарсны дараа хичээлийн шинэ улиралдаа эргэн орох гэж байна.\n\n2026–2027 оны хичээлийн жилээс ерөнхий боловсролын сургуулиуд дөрвөн улирлын тогтолцоонд шилжсэн юм. Уг тогтолцооны дагуу хичээлийн жил улирал тус бүрээр хуваагдаж, улирал бүрийн дараа сурагчид амрах зохицуулалттай болсон нь сурагчдын ачааллыг тэнцвэржүүлэх, амралтыг тогтмолжуулах зорилготой гэж үзэж байна.\n\nЭцэг эхчүүд хүүхдүүдээ даваа гарагийн хичээлд бэлтгэж, хичээлийн хэрэглэл, дүрэмт хувцсыг нь шалгахыг сургуулиудаас зөвлөж байна. Хүйтний улирал эхэлж байгаатай холбогдуулан хүүхдийг дулаан хувцаслах, томуу, ханиад томуунаас сэргийлэх нь чухал хэвээр байна.", textEn:"The first-quarter break for pupils of general education schools runs from November 2 to 8, 2026, and second-quarter classes will begin on Monday, November 9. After a week off, pupils are returning to a new school quarter.\n\nFrom the 2026–2027 school year, general education schools have moved to a four-quarter system. Under this system the school year is divided into quarters, with a break after each quarter, intended to balance pupils' workload and make holidays regular.\n\nSchools advise parents to prepare their children for Monday's classes and check their school supplies and uniforms. With the cold season beginning, dressing children warmly and protecting them from flu and colds remains important."},
  {id:4, cat:"niigem", title:"Халтиргаа гулгаанаас сэргийлж 370 тонн давс, 86 тонн бодис цацаад байна", titleEn:"370 tonnes of salt and 86 tonnes of de-icing material spread to prevent icy roads", time:"1 цаг", timeEn:"1 hour", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Winter%20road%20treatment%20using%20salt%20brine.jpg?width=760", text:"Нийслэлд халтиргаа гулгаанаас сэргийлэх ажлын хүрээнд зам талбайн цэвэрлэгээ, үйлчилгээнд Хот тохижилтын газар болон дүүргүүдийн Тохижилт үйлчилгээний компаниуд ажиллаж байна. 2026 оны 11 дүгээр сарын 7-ны өдрийн 07:00 цагийн байдлаар зам талбайд 370 тонн давс, 86 тонн бодис цацсан тухай албаныхан мэдээллээ.\n\nХүйтний улиралд зам талбай халтиргаа гулгаатай болж, явган зорчигч болон тээврийн хэрэгслийн хөдөлгөөнд аюул учруулах нь нэмэгддэг. Тиймээс хотын зам талбайн цэвэрлэгээ, халтиргаа гулгаанаас сэргийлэх ажлыг эртнээс эхлүүлж, шаардлагатай давс, бодисыг бэлтгэсэн байна.\n\nАлбаныхан иргэдийг хүйтний улиралд замд болгоомжтой явах, тээврийн хэрэгслийн дугуйнд улирлын тохирсон дугуй хэрэглэхийг зөвлөж байна. Халтиргаа гулгаатай замд осол аваар гарах эрсдэл өндөр байдаг тул явган зорчигчид ч анхаарал болгоомжтой байх шаардлагатай юм.", textEn:"The City Landscaping Department and the landscaping companies of the districts are working on road cleaning and maintenance to prevent icy roads in the capital. As of 07:00 on November 7, 2026, officials reported that 370 tonnes of salt and 86 tonnes of de-icing material had been spread on roads and squares.\n\nIn the cold season, roads become slippery and icy, increasing the danger for pedestrians and traffic. The city therefore started road cleaning and anti-icing work early and prepared the necessary salt and materials.\n\nOfficials advise citizens to travel carefully in the cold season and to use season-appropriate tyres on their vehicles. The risk of accidents on icy roads is high, so pedestrians also need to take care."},
  {id:5, cat:"ediin-zasag", title:"Дарханы төмөрлөгийн үйлдвэр Үндэсний баялгийн санд 36 тэрбум төгрөг төвлөрүүлжээ", titleEn:"Darkhan metallurgical plant channels 36 billion tugriks to National Wealth Fund", time:"1 цаг", timeEn:"1 hour", img:"https://commons.wikimedia.org/wiki/Special:FilePath/ArcelorMittal%20steel%20plant%20on%20the%20Cuyahoga%20River.jpg?width=760", text:"Монгол Улсын Ерөнхийлөгч Ухнаагийн Хүрэлсүх Дархан-Уул аймагт ажиллах үеэрээ “Дарханы төмөрлөгийн үйлдвэр” ХХК-ийн хамт олонтой уулзав. Тэрбээр Монгол Улсад гангийн үйлдвэрийн суурийг тавьж, анхны ган хайлуулснаас хойших 33 жилийн түүхийг бүтээсэн үе үеийн уурхайчид, инженер, техникийн ажилтан, металлургич нарт талархал илэрхийллээ.\n\n“Дарханы төмөрлөгийн үйлдвэр” ХХК нь 1993 онд байгуулагдсан түүхтэй бөгөөд тус үйлдвэр 2026 оны хүлээгдэж буй гүйцэтгэлээр 31 мянган тонн хаягдал төмөр боловсруулж, 36 мянган тонн ган бэлдэц, 34 мянган тонн ган цувимал бүтээгдэхүүн үйлдвэрлэнэ.\n\nЭнэ оны байдлаар тус үйлдвэр 570 тэрбум төгрөгийн борлуулалтын орлого олж, улс, орон нутгийн төсөвт 116 орчим тэрбум төгрөгийн татвар хураамж төлж, Үндэсний баялгийн санд 36 тэрбум төгрөг төвлөрүүлжээ. Энэ нь дотоодын үйлдвэрлэлийн чадавх, эдийн засагт оруулж буй хувь нэмрийг харуулж байна.\n\nГангийн үйлдвэрлэлийг хөгжүүлэх нь барилга, дэд бүтцийн салбарын хэрэгцээг дотоодоос хангах, импортыг орлох, ажлын байр нэмэгдүүлэх ач холбогдолтой гэж албаныхан үзэж байна. Дарханы төмөрлөгийн үйлдвэр цаашид үйлдвэрлэлээ өргөжүүлэхээр ажиллаж байгаа юм.", textEn:"During his working visit to Darkhan-Uul aimag, President of Mongolia Ukhnaa Khurelsukh met the staff of Darkhan Metallurgical Plant LLC. He thanked generations of miners, engineers, technicians and metallurgists who have built the 33-year history since the plant laid the foundations of Mongolia's steel industry and smelted its first steel.\n\nDarkhan Metallurgical Plant LLC was founded in 1993. In 2026 it is expected to process 31,000 tonnes of scrap metal and produce 36,000 tonnes of steel billets and 34,000 tonnes of rolled steel products.\n\nThis year the plant has earned 570 billion tugriks in sales revenue, paid around 116 billion tugriks in taxes and fees to the state and local budgets, and channelled 36 billion tugriks into the National Wealth Fund. This shows the capacity of domestic industry and its contribution to the economy.\n\nOfficials say developing steel production is important for meeting the construction and infrastructure sectors' needs from domestic sources, replacing imports and creating jobs. Darkhan Metallurgical Plant is working to expand its production further."},
  {id:6, cat:"ediin-zasag", title:"Carrefour Mongolia “HORECA Mongolia Expo 2026”-д оролцож байна", titleEn:"Carrefour Mongolia takes part in HORECA Mongolia Expo 2026", time:"2 цаг", timeEn:"2 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/REMA%201000%20Supermarket%20interior%20grocery%20store%20T%C3%B8nsberg%2C%20Norway%202017-11-03%20Breads%20etc.jpg?width=760", text:"Дэлхийн хүнсний худалдааны тэргүүлэгч сүлжээ Carrefour-ийн Монгол дахь салбар Carrefour Mongolia нь зочлох үйлчилгээ, зочид буудал, ресторан, кафе, нийтийн хоол үйлдвэрлэл, катерингийн салбарынхныг нэгтгэсэн “HORECA Mongolia Expo 2026” олон улсын үзэсгэлэнд өөрийн брэндийн бүтээгдэхүүн, үйлчилгээг танилцуулан оролцож байна.\n\n2026 оны 11 дүгээр сарын 6–8-ны өдрүүдэд Мишээл Экспо төвд зохион байгуулагдаж буй тус үзэсгэлэн нь зочлох үйлчилгээний салбарын бизнес эрхлэгчид, мэргэжилтэн, ханган нийлүүлэгчдийг нэг дор холбож, шинэ бүтээгдэхүүн, үйлчилгээ, технологитой танилцах, бизнесийн түншлэлээ өргөжүүлэх чухал талбар юм.\n\nCarrefour Mongolia нь өнөөдрийн байдлаар Монгол Улсад 28 салбараар дамжуулан олон улсын стандартын бүтээгдэхүүн, үйлчилгээг хэрэглэгчдэд хүргэж байна. Тус компани үзэсгэлэнд оролцсоноороо олон улсын туршлага, бүтээгдэхүүний сонголт, чанарын стандартыг зөвхөн эцсийн хэрэглэгчдэд төдийгүй зочлох үйлчилгээний салбарын бизнес эрхлэгчдэд хүргэх, хамтын ажиллагааны шинэ боломжуудыг нээхийг зорьж байна.\n\nҮзэсгэлэнгийн үеэр Carrefour Mongolia-ийн бүүтээр зочилсон зочид, бизнес эрхлэгчид, салбарын мэргэжилтнүүд тус компанийн бүтээгдэхүүнтэй танилцаж, хамтын ажиллагааны талаар ярилцах боломжтой юм.", textEn:"Carrefour Mongolia, the Mongolian branch of the global food-retail leader Carrefour, is taking part in the international exhibition HORECA Mongolia Expo 2026, presenting its brand products and services. The expo brings together the hospitality, hotel, restaurant, cafe, public catering and catering sectors.\n\nHeld at the Misheel Expo centre on November 6–8, 2026, the exhibition connects business owners, specialists and suppliers in the hospitality sector in one place, offering a chance to discover new products, services and technologies and to expand business partnerships.\n\nCarrefour Mongolia currently serves consumers in Mongolia through 28 branches, delivering products and services of international standard. By taking part in the expo, the company aims to bring international experience, product choice and quality standards not only to end consumers but also to hospitality businesses, opening new opportunities for cooperation.\n\nDuring the exhibition, visitors, business owners and industry specialists can visit the Carrefour Mongolia booth, learn about its products and discuss cooperation."},
  {id:7, cat:"delhii", title:"Парагвайн огцорсон Ерөнхийлөгч Пенья банкны дуулианаар яллагдаж, гэрийн хорионд оров", titleEn:"Paraguay's ousted President Pena charged over banking scandal, placed under house arrest", time:"2 цаг", timeEn:"2 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Asunci%C3%B3n%20Paraguay.jpg?width=760", text:"Парагвайн Ерөнхийлөгч асан Сантьяго Пенья банкны дуулиантай холбоотойгоор яллагдаж, гэрийн хорионд орлоо. Тэрбээр пүрэв гарагт огцорч байгаагаа зарласны дараа парламентын дээд танхим баасан гарагт түүнийг огцруулах санал хураалт явуулж, оролцсон 44 сенатор бүгд огцруулахыг дэмжжээ. Үүний дараа дэд Ерөнхийлөгч Педро Аллиана Ерөнхийлөгчийн тангараг өргөж, 2028 оны наймдугаар сар хүртэл үүрэгт ажлаа гүйцэтгэхээр болов.\n\nДуулианы голд Ueno Bank гэх цахим банк байгаа юм. Тус банкны төлбөрийн чадварын асуудлаар Төв банк мягмар гарагт хяналтаа тогтоосон бөгөөд үүний улмаас 6.1 сая хүн амтай улсын бараг тал хувь буюу 3 сая орчим харилцагч дансандаа нэвтэрч, хадгаламжаа ашиглах боломжгүй болжээ. Энэ нь нийслэл Асунсьонд хэдэн өдөр үргэлжилсэн эсэргүүцлийн жагсаал дэгдээсэн байна.\n\nПеньяд итгэл эвдсэн, хувийн ашиг сонирхлын үүднээс удирдан зохион байгуулсан гэх ял тулгасан бөгөөд тэрбээр буруугаа үгүйсгэж, банкны асуудал нь зохицуулалтын асуудал байсан гэж мэдэгдсэн байна. Мөн Төв банкны ерөнхийлөгч асан Карлос Карваллод ч ял тулгасан бөгөөд прокурорууд нийт 27 хүнийг яллагдагчаар татжээ.\n\nПенья нь Ueno Bank-ны толгой компанийн хувьцааг 2025 оны гуравдугаар сар хүртэл эзэмшиж байсан бөгөөд түүний үед төсвийн 800 сая гаруй ам.доллар тус банканд орсон, үүний дотор улсын тэтгэврийн сангаас хуульд заасан хэмжээнээс хэтрүүлэн 355 сая ам.доллар байршуулсан гэх мэдээлэл гарчээ. Парагвайн Төв банкны мэдээлснээр 1.2 сая харилцагч даатгагдсан хадгаламжийнхаа хэсэгчилсэн болон бүрэн нөхөн төлбөрийг хэдийнэ авсан байна.", textEn:"Former Paraguayan President Santiago Pena has been charged over a banking scandal and placed under house arrest. After announcing his resignation on Thursday, the Senate voted on Friday to remove him from office, with all 44 senators present voting in favour. Vice President Pedro Alliana was then sworn in as president and will serve until August 2028.\n\nAt the centre of the scandal is the digital lender Ueno Bank. The central bank took control of the bank on Tuesday over solvency concerns, leaving around three million customers — nearly half the population of the 6.1-million country — unable to access their accounts or savings. The crisis triggered days of protests in the capital, Asuncion.\n\nPena has been charged with breach of trust and administration for personal gain. He has denied wrongdoing, arguing that the bank's problems were a regulatory matter. Former central bank president Carlos Carvallo has also been charged, and prosecutors have charged 27 people in total.\n\nPena held a stake in Ueno's parent company until March 2025, and reports say more than 800 million US dollars in public funds flowed into the bank during his presidency, including 355 million dollars from the state pension fund deposited above legal limits. According to Paraguay's central bank, 1.2 million customers have already received partial or full reimbursement of their insured deposits."},
  {id:8, cat:"delhii", title:"Израилын Ерөнхийлөгч Херцог Эйзенкотод Засгийн газар байгуулах үүргийг өглөө", titleEn:"Israeli President Herzog tasks Eisenkot with forming next government", time:"3 цаг", timeEn:"3 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Knesset%20of%20Israel%20Jerusalem%20Avney%20Moreshet%20a4ec1bca.jpg?width=760", text:"Израилын Ерөнхийлөгч Ицхак Херцог сөрөг хүчний удирдагч, цэргийн жанжин асан Гади Эйзенкотод тус улсын дараагийн Засгийн газрыг байгуулах үүрэг өглөө. Тэрбээр шийдвэрээ бямба гарагийн орой Эйзенкотод мэдэгдсэн бөгөөд үүргийг өнөөдөр /2026.11.08/ 17:00 цагт Ерөнхийлөгчийн өргөөнд болох ёслолын үеэр албан ёсоор гардуулах юм.\n\nАравдугаар сарын 27-нд болсон парламентын сонгуулийн дараа Ерөнхийлөгч Херцог Кнессетэд сонгогдсон бүх намын удирдагчидтай хоёр өдөр зөвлөлдсөн байна. Зөвлөлдөөний дүнд 120 суудалтай Кнессетийн 67 гишүүн Эйзенкотыг, 46 гишүүн одоогийн Ерөнхийлөгч Бенжамин Нетаньяхуг дэмжсэн бол долоо нь хэнийг ч дэмжээгүй юм.\n\nЭйзенкотод Засгийн газар байгуулах 28 хоногийн хугацаа олгогдох бөгөөд шаардлагатай бол 14 хоногоор сунгаж болно. Засгийн газар байгуулахын тулд Кнессетийн 120 суудлын 61-ийг бүрдүүлэх эвсэл хэрэгтэй. Арабын хоёр жагсаалт нийт 19 суудал авч, Эйзенкотыг дэмжсэн нь шийдвэрлэх үүрэг гүйцэтгэсэн боловч тэд эвсэлд нэгдэнэ гэсэн үг биш юм.\n\nЭйзенкот “үндэсний онцгой байдлын Засгийн газар” байгуулж, цөөнхийн Засгийн газрыг аль болох хурдан тангараг өргүүлэхээр зорьж байгаагаа мэдэгдлээ. Шинэ Кнессет мягмар гарагт тангараг өргөх бөгөөд хэрэв Эйзенкот Засгийн газар байгуулж чадахгүй бол үүрэг Нетаньяхуд дөрвөн долоо хоногоор шилжинэ.", textEn:"Israeli President Isaac Herzog has tasked opposition leader and former military chief Gadi Eisenkot with forming the country's next government. He informed Eisenkot of his decision on Saturday evening, and will formally hand him the mandate at a ceremony at the President's Residence today (2026.11.08) at 17:00.\n\nAfter the parliamentary election of October 27, President Herzog held two days of consultations with the leaders of all parties elected to the Knesset. As a result, 67 members of the 120-seat Knesset recommended Eisenkot, 46 backed incumbent Prime Minister Benjamin Netanyahu, and seven endorsed neither.\n\nEisenkot will have 28 days to form a government, with a possible 14-day extension. Forming a government requires a coalition holding 61 of the Knesset's 120 seats. The two Arab lists, which won 19 seats between them, backed Eisenkot — a decisive factor — though their support does not mean they will join his coalition.\n\nEisenkot has said he aims to form a “national emergency government” and swear in a minority government as soon as possible. The new Knesset will be sworn in on Tuesday, and if Eisenkot fails to form a government, the mandate will pass to Netanyahu for four weeks."},
  {id:9, cat:"delhii", title:"АНУ-ын завсрын сонгууль: Ардчилсан нам Конгрессын хоёр танхимыг хоёуланд нь яллаа", titleEn:"US midterms: Democrats win control of both houses of Congress", time:"3 цаг", timeEn:"3 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Capitol%20Building%20Full%20View.jpg?width=760", text:"АНУ-д 11 дүгээр сарын 3-нд болсон завсрын сонгуулиар Ардчилсан нам Конгрессын хоёр танхим болох Төлөөлөгчдийн танхим болон Сенатыг хоёуланд нь яллаа. Төлөөлөгчдийн танхимын 435 суудал бүгд, Сенатын 100 суудлын 35 нь энэ сонгуулиар шийдэгдсэн юм.\n\nAssociated Press агентлагийн тооллогоор Ардчилсан нам Төлөөлөгчдийн танхимд одоогоор 228 суудал авч, өөр 34 суудалд тэргүүлж байгаа бөгөөд Бүгд найрамдах намаас 25 суудлыг эргүүлэн авсан байна. Сенатад Ардчилсан нам 54 суудал авч, олонх болох 51 суудлын босгыг давжээ.\n\nАрдчилсан нам Техас, Өмнөд Каролина, Айова, Мичиган, Канзас зэрэг Бүгд найрамдах намын түшиц газар гэж үздэг мужуудад Сенатын суудал ялсан нь онцгой анхаарал татаж байна. Канзас муж 1932 оноос хойш, Техас муж 1988 оноос хойш анх удаа Ардчилсан намын сенатор сонголоо.\n\nЭнэ нь 2006 онд Жорж Бушийн үед болсноос хойш анх удаа Бүгд найрамдах намын Ерөнхийлөгч Конгрессын хоёр танхимыг хоёуланд нь алдсан тохиолдол болов. Ерөнхийлөгч Дональд Трамп өрсөлдөгчид нь түүний намаас илүү кампанит ажил явуулсан гэдгийг хүлээн зөвшөөрчээ. Шинэ олонх Сенатад 2027 оны нэгдүгээр сарын 3-наас үүрэгт ажилдаа орно.", textEn:"In the US midterm elections held on November 3, the Democratic Party won control of both houses of Congress — the House of Representatives and the Senate. All 435 House seats and 35 of the Senate's 100 seats were decided in the election.\n\nAccording to the Associated Press tally, the Democrats have so far won 228 seats in the House and are leading in 34 others, flipping 25 seats from the Republicans. In the Senate, the Democrats have won 54 seats, passing the 51-seat threshold for a majority.\n\nThe Democrats' Senate wins in states long seen as Republican strongholds — Texas, South Carolina, Iowa, Michigan and Kansas — drew particular attention. Kansas elected a Democratic senator for the first time since 1932, and Texas for the first time since 1988.\n\nThis is the first time since George W. Bush in 2006 that a Republican president has lost control of both chambers of Congress. President Donald Trump has conceded that his opponents ran a better campaign than his party. The new majority will take control of the Senate on January 3, 2027."},
  {id:10, cat:"delhii", title:"Украин: Запорожье мужийн тусламжийн төвд Оросын бөмбөгдөлтөөр 29 хүн амиа алдав", titleEn:"Ukraine: Russian bombing of aid centre in Zaporizhzhia kills 29", time:"4 цаг", timeEn:"4 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Destructions%20in%20Zaporizhzhia%20after%20Russian%20attack%2C%202023-12-29%20(01).jpg?width=760", text:"Украины өмнөд хэсгийн Запорожье мужийн Комышуваха тосгонд Оросын бөмбөгдөлт хүмүүнлэгийн тусламж түгээх төвийг сүйтгэж, 29 хүн амиа алдаж, 48 хүн сураггүй болжээ. Даваа гарагт болсон халдлагын үеэр 3,000 кг жинтэй есөн агаарын бөмбөг тусламж түгээх цэг болгон ашиглаж байсан хуучин сургуулийн барилга болон ойролцоох хоргодох байранд туссан байна.\n\nМягмар гарагт бүсийн цэргийн захиргааны даргын үүрэг гүйцэтгэгч Михайло Семикин амиа алдсан хүний тоо 29-д хүрч, 10 хүн шархадсан гэж мэдэгдлээ. Амиа алдсан хүмүүсийн дунд дөрвөн цагдаагийн алба хаагч, хоёр аврагч байсан бөгөөд аврах багууд нуранги дор үлдсэн хүмүүсийг хайсаар байна. Бүс нутагт гурван өдрийн гашуудал зарлажээ.\n\nЕрөнхийлөгч Володимир Зеленский халдлагыг “аймшигт” гэж нэрлэн, Оросын цэргийнхнийг энгийн иргэдийг зориуд онилсон гэж буруутгав. Харин Оросын Батлан хамгаалах яам цохилт нь Украины зэвсэгт хүчний эсрэг чиглэсэн гэж мэдэгдсэн байна.\n\nМөн шөнө Орос улс есөн бүс нутагт 289 нисгэгчгүй онгоц, 17 баллистик пуужин, 59 далавчит пуужин харваж, цахилгаан станцуудыг онилсон бөгөөд Харків хотын эмнэлэгт цохилт өгч, 73 хүн шархаджээ. Халдлага нь Орос, Украин, АНУ-ын хэлэлцээ Абу Дабид дахин эхлэхээс долоо хоногийн өмнө болсон юм.", textEn:"A Russian bombing strike on a humanitarian aid distribution point in the village of Komyshuvakha, in Ukraine's southern Zaporizhzhia region, has killed 29 people, with 48 reported missing. In the attack on Monday, at least nine 3,000-kilogramme aerial bombs hit a former school building used as an aid distribution point and a nearby shelter.\n\nOn Tuesday, Mykhailo Semikin, acting head of the regional military administration, said the death toll had risen to 29 and 10 people were injured. Among the dead were four police officers and two rescue workers, and rescue teams continued searching the rubble for people still trapped. Three days of mourning were declared in the region.\n\nPresident Volodymyr Zelenskyy called the attack “utterly horrific” and accused Russian forces of deliberately targeting civilians. Russia's Defence Ministry said the strike was aimed at Ukrainian armed forces.\n\nThe same night, Russia launched 289 drones, 17 ballistic missiles and 59 cruise missiles across nine regions, targeting power plants, and struck a hospital in Kharkiv, wounding 73 people. The attacks came a week before Russia-Ukraine-US talks are due to resume in Abu Dhabi."},
  {id:11, cat:"delhii", title:"Европын нислэгүүдэд тэсрэх бөмбөгийн заналхийлэл гарч, онгоцууд яаралтай буулт хийв", titleEn:"Bomb threats disrupt flights across Europe; planes diverted", time:"4 цаг", timeEn:"4 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/An%20airplane%20being%20prepared%20for%20takeoff%2C%20Jacksonville%20International%20Airport.jpg?width=760", text:"Европ даяар арилжааны нислэгүүдэд тэсрэх бөмбөг байрлуулсан гэх цуврал заналхийлэл гарч, хэд хэдэн онгоц яаралтай буулт хийж, нисэх онгоцны буудлуудад саатал үүсчээ. Пүрэв гарагт болсон гол тохиолдлын талаар Euronews агентлаг мэдээлсэн бөгөөд зарим онгоцыг цэргийн сөнөөгч онгоц дагалдан буулгасан байна.\n\nЗаналхийллийн улмаас нислэгүүдийн чиглэлийг өөрчилж, онгоцуудыг өөр нисэх онгоцны буудалд буулгах шаардлагатай болж, зорчигчид болон нисэх онгоцны буудлын ажилтнуудад хүндрэл учирчээ. Аюулгүй байдлын албаныхан онгоц бүрийг шалгаж, аюулгүй байдлыг хангах арга хэмжээ авсан байна.\n\nХожим нь мэдээлсэн долоон тэсрэх бөмбөгийн заналхийлэл бүгд хуурамч дохиолол болох нь тогтоогдсон бөгөөд бодит тэсрэх төхөөрөмж олдоогүй байна. Гэсэн хэдий ч эрх баригчид заналхийллийн эх сурвалжийг тогтоохоор шалгалт явуулж байгаа бөгөөд ийм төрлийн хуурамч заналхийлэл нь нисэхийн аюулгүй байдал, зорчигчдын итгэлд ноцтой аюул учруулж байгааг онцолж байна.", textEn:"A string of bomb threats against commercial flights across Europe forced several planes to make emergency landings and caused disruption at airports. Euronews reported on a major incident on Thursday, in which some aircraft were escorted by military jets as they landed.\n\nThe threats forced flights to be diverted to other airports, causing difficulties for passengers and airport staff. Security services checked each aircraft and took measures to ensure safety.\n\nAll seven reported bomb threats were later confirmed to be false alarms, and no real explosive devices were found. Authorities are nevertheless investigating the source of the threats, stressing that such hoaxes pose a serious danger to aviation safety and passengers' confidence."},
  {id:12, cat:"delhii", title:"Кени: шашны бүлгийн удирдагч 191 хүний амийг хөнөөсөн хэргээр бүх насаар нь хорих ял авлаа", titleEn:"Kenya: doomsday cult leader given life sentence for murder of 191 people", time:"5 цаг", timeEn:"5 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Buffalo%20Nairobi%20Skyline%20Savannah%20Kenya%20May19%20R1600769.jpg?width=760", text:"Кени улсын шүүх шашны бүлгийн удирдагч Пол Маккензид 191 хүний амийг хөнөөсөн хэргээр бүх насаар нь хорих ял оноолоо. Маккензи нь “Сайн мэдээний олон улсын сүм” хэмээх бүлгийг удирдаж байсан бөгөөд түүний дагалдагчид Есүстэй уулзахын тулд мацаг барьж амиа алдсан гэх хэрэгт буруутгагдсан юм.\n\nЭнэ хэрэг 2023 онд Кени улсын далайн эргийн Шакаола ойгоос олноор нь булшилсан олон зуун цогцос олдоход илэрч, улс орон даяар цочролд оруулсан билээ. Цагдаа нар ойгоос булшнуудыг малтаж гаргаж, олон зуун хүний цогцсыг олсон нь энэ хэргийг Кени улсын түүхэн дэх хамгийн аймшигт хэргүүдийн нэг болгосон юм.\n\nШүүхийн шийдвэр нь шашны бүлгүүдийг хянах, эмзэг бүлгийн иргэдийг мөлжлөгөөс хамгаалах асуудлаар Кени улсад өрнөж буй маргааны чухал үйл явдал боллоо. Маккензийн хэргийг олон улсын анхаарлын төвд байсан бөгөөд шүүхийн шийдвэрийг хохирогчдын ар гэрийнхэн болон хүний эрхийн байгууллагууд сайшааж байна.", textEn:"A Kenyan court has sentenced doomsday cult leader Paul Mackenzie to life in prison for the murder of 191 people. Mackenzie led a group called the Good News International Church, and was accused over followers who starved themselves to death believing they would meet Jesus.\n\nThe case came to light in 2023, when hundreds of bodies were found buried in mass graves in the Shakahola forest on Kenya's coast, shocking the whole country. Police exhumed graves in the forest and recovered hundreds of bodies, making it one of the most horrifying cases in Kenyan history.\n\nThe court's decision is a significant moment in Kenya's debate over regulating religious groups and protecting vulnerable people from exploitation. Mackenzie's case was followed internationally, and the verdict has been welcomed by victims' families and human rights organisations."},
  {id:13, cat:"sport", title:"Самбо бөхийн ДАШТ Ташкентэд: Монголын Б.Гантумур дэлхийн аварга болов", titleEn:"World Sambo Championships in Tashkent: Mongolia's Gantumur Bayanduuren takes world title", time:"5 цаг", timeEn:"5 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Athl%C3%A8te%20de%20Sambo%2003.jpg?width=760", text:"Узбекистаны Ташкент хотод болж буй самбо бөхийн 50 дахь удаагийн дэлхийн аварга шалгаруулах тэмцээний хоёр дахь өдөр Монгол Улсын тамирчин Баяндуурэн Гантумур байлдааны самбо бөхийн 58 кг жинд дэлхийн аварга боллоо. Тэрбээр шигшээ барилдаанд ялалт байгуулж, Монгол Улсад тэмцээний алтан медалийг авчирсан юм.\n\nТэмцээн 2026 оны 11 дүгээр сарын 6–8-ны өдрүүдэд болж байгаа бөгөөд 101 орны 500 гаруй тамирчин оролцож байна. Хоёр дахь өдрийн байдлаар 12 шинэ дэлхийн аварга тодорсон бөгөөд Оросын тамирчид долоон алтан медаль хүртэж тэргүүлж, Гүрж хоёр, Монгол, Туркменистан, Украин тус бүр нэг алтан медаль авчээ.\n\nМонголын бусад тамирчдаас Тугсболд Цогтбаатар байлдааны самбо бөхийн 64 кг жинд Беларусийн Евгений Михнод ялагдсан бол Бямбасүрэн Ганбаатар эмэгтэйчүүдийн 50 кг жинд алтан медаль хүртсэн Беларусийн Анфиса Копаевад ялагдсан байна. Тэмцээн өнөөдөр өндөрлөх бөгөөд тэмцээний нийт шагналын сан 363 мянган ам.доллар, алтан медальтнууд 4,000 ам.доллараар шагнуулж байгаа юм.", textEn:"Mongolian athlete Gantumur Bayanduuren has become world champion in the men's combat sambo 58 kg category on the second day of the 50th World Sambo Championships in Tashkent, Uzbekistan. He won the final bout to bring Mongolia a gold medal at the championship.\n\nThe tournament is being held on November 6–8, 2026, with more than 500 athletes from 101 countries taking part. Twelve new world champions were crowned on the second day: Russian athletes lead with seven gold medals, Georgia has two, and Mongolia, Turkmenistan and Ukraine have one each.\n\nAmong the other Mongolian athletes, Tugsbold Tsogtbaatar lost to Belarusian Yauhen Mikhno in the men's combat sambo 64 kg category, while Byambasuren Ganbaatar lost to Belarusian Anfisa Kapayeva, who won gold in the women's 50 kg category. The tournament ends today; the total prize fund is 363,000 US dollars, with gold medallists receiving 4,000 dollars."},
  {id:14, cat:"sport", title:"Криштиану Роналду Португалын шигшээ багаас зодог тайллаа", titleEn:"Cristiano Ronaldo retires from Portugal duty", time:"6 цаг", timeEn:"6 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Argentine%20-%20Portugal%20-%20Cristiano%20Ronaldo.jpg?width=760", text:"Португалын хөлбөмбөгийн домог Криштиану Роналду шигшээ багаасаа зодог тайлж байгаагаа 11 дүгээр сарын 5-нд цахим хуудсаараа дамжуулан зарлалаа. 41 настай довтлогч “Португалын шигшээ багийн 7 дугаартай өмсгөлийг буцааж өгөх цаг ирлээ” хэмээн мэдэгдсэн бөгөөд 11 дүгээр сарын олон улсын завсарлагааны дараа шигшээ багт тоглохоо болино.\n\nРоналду Португалын шигшээ багт 234 тоглолт хийж, 146 гоол оруулсан нь эрэгтэйчүүдийн олон улсын хөлбөмбөгийн түүхэн дээд амжилт юм. Тэрбээр 2016 онд Европын аварга, 2019 болон 2025 онд Үндэстнүүдийн лигийн аварга болж, зургаан дэлхийн аварга шалгаруулах тэмцээнд гоол оруулсан анхны тоглогч болсон билээ.\n\nТүүний шигшээ багийн сүүлчийн тэмцээн нь 2026 оны дэлхийн аварга шалгаруулах тэмцээн байсан бөгөөд Португал 16-ийн шатанд түрүүлсэн Испанид ялагдсан юм. Тэмцээнд Роналду гурван гоол оруулсан байна. Шийдвэр гаргахаас өмнө тэрбээр есдүгээр сард багийн дасгалжуулагч Жорж Жезустай зөрчилдөж, багийн байрнаас зөвшөөрөлгүй гарсан тул Португалын хөлбөмбөгийн холбооноос 30 хоногийн хориг, 255 еврогийн торгууль ногдуулсан байв.\n\nПортугалын хөлбөмбөгийн холбоо Роналдугийн асар их гавьяанд тохирсон хүндэтгэлийн арга хэмжээ зохион байгуулахаа мэдэгдлээ. Роналду клубийн түвшинд Саудын Арабын Аль-Наср багт 2027 оны зургаадугаар сар хүртэл гэрээтэйгээр тоглохоо үргэлжлүүлнэ.", textEn:"Portuguese football legend Cristiano Ronaldo announced on November 5 that he is retiring from the national team, in a video message on social media. The 41-year-old forward said “the day has come for me to hand back the No. 7 shirt of our national team”, and will stop playing for Portugal after the November international break.\n\nRonaldo made 234 appearances for Portugal and scored 146 goals — an all-time record in men's international football. He won the European Championship in 2016 and the Nations League in 2019 and 2025, and became the first player to score at six World Cup final tournaments.\n\nHis final tournament with the national team was the 2026 World Cup, where Portugal lost in the last 16 to eventual champions Spain. Ronaldo scored three goals at the tournament. Before his decision, he had walked out of the national team camp in September after a disagreement with manager Jorge Jesus, and the Portuguese Football Federation suspended him for 30 days and fined him 255 euros.\n\nThe Portuguese Football Federation said it would organise a fitting tribute to Ronaldo's immense career. Ronaldo will continue playing at club level with Al-Nassr in Saudi Arabia, where he is under contract until June 2027."},
  {id:15, cat:"soyol", title:"Монголын уран бүтээлчид Венецийн 61 дэх биеннальд оролцож байна", titleEn:"Mongolian artists take part in the 61st Venice Biennale", time:"6 цаг", timeEn:"6 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/60th%20Venice%20Biennale%2C%20main%20pavilion.jpg?width=760", text:"Монголын уран бүтээлчид дэлхийн хамгийн нэр хүндтэй урлагийн үзэсгэлэнгийн нэг болох Венецийн 61 дэх биеннальд “Сүлжилдээн: Хил дамнасан холбоосууд” нэртэй үзэсгэлэнгээр оролцож байна. Тус үзэсгэлэн 11 дүгээр сарын 22-ныг хүртэл үргэлжлэх юм.\n\nВенецийн биенналь нь 1895 оноос хойш хоёр жил тутамд зохион байгуулагддаг бөгөөд дэлхийн улс орнуудын шилдэг уран бүтээлчид өөрсдийн бүтээлээ дэлгэн үзүүлдэг урлагийн хамгийн чухал талбаруудын нэг билээ. Монголын уран бүтээлчид тус биеннальд оролцсоноороо Монголын соёл, урлагийг дэлхийд таниулах чухал боломж олж байна.\n\n“Сүлжилдээн: Хил дамнасан холбоосууд” үзэсгэлэн нь нэхмэл, сүлжмэл урлагийн уламжлал болон орчин үеийн урлагийн хэлээр дамжуулан хүмүүс, соёл, хил хязгаарын хоорондын холбоог харуулсан бүтээлүүдээс бүрдэж байгаа юм. Үзэсгэлэнгийн бүтээлүүд Монголын нүүдэлчдийн соёл, гар урлалын уламжлалыг орчин үеийн өнцгөөс тайлбарлан харуулж байна.", textEn:"Mongolian artists are taking part in the 61st Venice Biennale, one of the world's most prestigious art exhibitions, with an exhibition titled “Weaving: Cross-border Connections”. The exhibition runs until November 22.\n\nThe Venice Biennale has been held every two years since 1895, and is one of the most important platforms in art, where the finest artists from countries around the world present their work. By taking part, Mongolian artists gain an important opportunity to introduce Mongolian culture and art to the world.\n\nThe exhibition “Weaving: Cross-border Connections” brings together works that show the links between people, cultures and borders through the language of textile and woven art traditions and contemporary art. The works interpret Mongolia's nomadic culture and handicraft traditions from a contemporary perspective."},
  {id:16, cat:"soyol", title:"МУГЖ Л.Болдбаатар “Монголоо дуулна” тоглолтоо Дарханд толилууллаа", titleEn:"People's Artist L. Boldbaatar presents \"I Will Sing Mongolia\" concert in Darkhan", time:"7 цаг", timeEn:"7 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/DFC%205590%20Live%20band%20lights%20up%20the%20night%20in%20Pattaya%20-%20singers%20and%20musicians%20perform%20on%20stage%20at%20a%20packed%20venue%20in%20Nong%20Pla%20Lai%20Chon%20Buri.jpg?width=760", text:"Монгол Улсын гавьяат жүжигчин Л.Болдбаатар “Монголоо дуулна” нэртэй тоглолтоо 11 дүгээр сарын 6-нд Дархан-Уул аймгийн “Darkhan United Arena”-д толилууллаа. Тоглолтод Дархан хотын үзэгчид олноор цугларч, дуучны уран бүтээлийг сонслоо.\n\nЛ.Болдбаатар нь Монголын дууны урлагийн нэр хүндтэй төлөөлөгчдийн нэг бөгөөд олон жилийн турш тайз, дэлгэцийн урлагт идэвхтэй ажиллаж, олон арван дуу, уран бүтээлээрээ үзэгчдийн хайр хүндэтгэлийг хүлээсэн билээ. Түүний тоглолтууд үргэлж үзэгчдийн сонирхлыг татаж, танхим дүүрэн болдог юм.\n\nОрон нутагт зохион байгуулагдаж буй ийм тоглолт нь соёл, урлагийг хөдөө орон нутагт хүргэх, иргэдийн соёлын амьдралыг баяжуулах чухал ач холбогдолтой гэж зохион байгуулагчид үзэж байна. Дархан хотын үзэгчид дуучны тоглолтыг халуун дотноор хүлээн авсан юм.", textEn:"People's Artist of Mongolia L. Boldbaatar presented his concert titled “I Will Sing Mongolia” at the Darkhan United Arena in Darkhan-Uul aimag on November 6. Audiences in Darkhan gathered in large numbers to hear the singer's work.\n\nL. Boldbaatar is one of the most respected figures in Mongolian vocal art. Over many years he has worked actively on stage and screen, earning the love and respect of audiences with dozens of songs and works. His concerts always draw great interest and fill the hall.\n\nOrganisers say concerts like this held in the regions are important for bringing culture and art to rural areas and enriching citizens' cultural life. Audiences in Darkhan warmly welcomed the singer's concert."},
  {id:17, cat:"oron-nutag", title:"Сэлэнгэ: “Хөдөлгөөнөөр эрүүлжье” сарын аян 11 дүгээр сарын 15 хүртэл үргэлжилнэ", titleEn:"Selenge: \"Let's Get Healthy Through Movement\" month runs until November 15", time:"7 цаг", timeEn:"7 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Orkhon%20sum%2C%20Selenge%20province%2C%20Mongolia.JPG?width=760", text:"Сэлэнгэ аймагт “Хөдөлгөөнөөр эрүүлжье” сарын аян зохион байгуулагдаж байгаа бөгөөд тус аян 11 дүгээр сарын 15-ныг хүртэл үргэлжлэх юм. Аяны зорилго нь иргэдийг идэвхтэй хөдөлгөөн, дасгал хөдөлгөөнөөр дамжуулан эрүүл амьдралын хэв маягт уриалах явдал юм.\n\nХүйтний улирал эхэлж, хүмүүсийн хөдөлгөөн багасдаг энэ үед тогтмол дасгал хөдөлгөөн хийх нь эрүүл мэндэд онцгой ач холбогдолтой. Аяны хүрээнд аймгийн иргэд, байгууллагууд биеийн тамирын дасгал, явган алхалт, спортын арга хэмжээнд оролцохыг уриалж байна.\n\nЭрүүл мэндийн байгууллагууд тогтмол хөдөлгөөн нь зүрх судас, дархлаа, сэтгэл санааны эрүүл мэндэд эерэг нөлөө үзүүлдэг болохыг онцолж, иргэдийг өдөр тутамдаа хөдөлгөөнийг хэвшүүлэхийг зөвлөж байна. Аян орон нутгийн иргэдийн эрүүл мэндийн боловсролыг дээшлүүлэхэд чиглэж байгаа юм.", textEn:"The “Let's Get Healthy Through Movement” month campaign is under way in Selenge aimag and will run until November 15. The campaign aims to encourage citizens to adopt a healthy lifestyle through active movement and physical exercise.\n\nAs the cold season begins and people move less, regular exercise is especially important for health. Within the campaign, residents and organisations in the aimag are invited to take part in physical exercise, walking and sporting events.\n\nHealth organisations stress that regular movement has a positive effect on cardiovascular health, immunity and mental well-being, and advise citizens to make movement part of their daily routine. The campaign is aimed at raising health awareness among local residents.", region:"selenge"},
  {id:18, cat:"oron-nutag", title:"Дорнод: Халхголын Нөмрөг дархан цаазат газарт гарсан түймрийн асуудал анхаарлын төвд байна", titleEn:"Dornod: Steppe fire in Khalkhgol's Numrug reserve remains in focus", time:"8 цаг", timeEn:"8 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Mongolian%20nature%20steppe(35).jpg?width=760", text:"Дорнод аймгийн Халхгол сумын Нөмрөг дархан цаазат газарт аравдугаар сарын 8-нд гарсан түймэр тусгай хамгаалалттай газар нутагт ихээхэн хохирол учруулсан нь олон нийтийн анхаарлын төвд хэвээр байна. Түймэр нь Японы KDDI компанийн Монгол дахь охин компани Мобикомын гүйцэтгэх захирал тэргүүтэй цуваа тусгай хамгаалалттай газраар бартаат замаар зорчиж явах үед автомашины яндангаас хуурай өвсөнд гал авалцсанаас үүдэлсэн гэж мэдээлсэн байна.\n\nТүймэр найман хоног үргэлжилж, дархан цаазат газрын 80 орчим хувь нь шатсан бөгөөд 500 мянган гаруй га талбай өртсөн гэж Хятадын хэвлэлүүд мэдээлжээ. Халхгол сум нь 87 жилийн өмнө Зөвлөлт, Монголын нэгдсэн хүч Японы Квантуны армитай тулалдсан Номонханы тулалдааны газар гэдгээрээ түүхэн ач холбогдолтой юм.\n\nАравдугаар сарын 29-нд Монгол Улсын Ерөнхийлөгч У.Хүрэлсүх Японы Ерөнхий сайд Такайчи Санаэтай утсаар ярьсны дараа Монголын талын байр суурь өөрчлөгдөж, уучлал, нөхөн төлбөр, хуулийн хариуцлагын талаар дурдаагүй нь Хятадын хэвлэлүүдэд анхаарал татаж байна. Мобикомын хувьцааны 98.8 хувийг Японы KDDI компани эзэмшдэг юм.", textEn:"The fire that broke out on October 8 in the Numrug Strictly Protected Area in Khalkhgol soum, Dornod aimag, caused extensive damage to the protected land and remains in the public spotlight. The fire reportedly started when dry grass caught fire from the exhaust pipe of a vehicle in a convoy led by the CEO of Mobicom, the Mongolian subsidiary of Japan's KDDI, driving off-road through the protected area.\n\nThe fire burned for eight days, destroying around 80 percent of the reserve and affecting more than 500,000 hectares, according to Chinese media reports. Khalkhgol soum is historically significant as the site of the Battle of Nomonhan 87 years ago, where Soviet and Mongolian forces fought Japan's Kwantung Army.\n\nAfter President of Mongolia U. Khurelsukh spoke by telephone with Japanese Prime Minister Sanae Takaichi on October 29, the Mongolian side's stance changed, with no mention of apology, compensation or legal responsibility — a point noted in Chinese media coverage. KDDI of Japan owns 98.8 percent of Mobicom's shares.", region:"dornod"},
  {id:19, cat:"tech", title:"Apple компани 99 оронд хөлсний тагнуулын програмын талаар яаралтай анхааруулга илгээв", titleEn:"Apple issues urgent alerts over mercenary spyware attacks in 99 countries", time:"8 цаг", timeEn:"8 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/IPhone%2014%20Pro.jpg?width=760", text:"Apple компани 99 орны хэрэглэгчдэдээ хөлсний тагнуулын програм хангамжийн халдлагын талаар яаралтай анхааруулга илгээв. Тус компанийн аюулгүй байдлын сэрэмжлүүлэг нь тодорхой хэрэглэгчдийг онилсон, улсын дэмжлэгтэй байж болзошгүй тагнуулын халдлагын талаар анхааруулсан байна.\n\nХөлсний тагнуулын програм хангамж нь ихэвчлэн сэтгүүлчид, хүний эрхийн идэвхтнүүд, улс төрчид, бизнесийн удирдагчид зэрэг тодорхой хүмүүсийг онилдог бөгөөд тэдний утас, төхөөрөмжөөс мэдээлэл цуглуулах зорилготой байдаг. Apple ийм төрлийн халдлагын талаар хэрэглэгчдэдээ тогтмол анхааруулга илгээдэг юм.\n\nАюулгүй байдлын мэргэжилтнүүд хэрэглэгчдэд төхөөрөмжийнхөө программ хангамжийг хамгийн сүүлийн хувилбарт шинэчлэх, хүчтэй нууц үг хэрэглэх, хоёр шатлалт баталгаажуулалтыг асаахыг зөвлөж байна. Мөн Apple-ийн “Lockdown Mode” буюу түгжих горимыг асаах нь онилсон халдлагаас хамгаалах нэмэлт хамгаалалт болдог гэж үздэг.", textEn:"Apple has issued urgent security alerts to users in 99 countries over mercenary spyware attacks. The company's security warnings alert specific users to spyware attacks that may be state-backed and aimed at them personally.\n\nMercenary spyware typically targets specific people — such as journalists, human rights activists, politicians and business leaders — with the aim of collecting information from their phones and devices. Apple regularly sends warnings to users about this type of attack.\n\nSecurity experts advise users to update their devices to the latest software version, use strong passwords and turn on two-factor authentication. Apple's Lockdown Mode is also seen as providing extra protection against targeted attacks."},
];
function aTitle(a){ return LANG === "en" ? (a.titleEn || a.title) : a.title; }
function aTime(a){ return LANG === "en" ? (a.timeEn || a.time) : a.time; }
function aText(a){ if(a.text) return LANG === "en" ? (a.textEn || a.text) : a.text; return SAMPLE_TEXT[LANG][a.id === 1 ? "long" : "short"]; }
function aRegion(a){ return a.region ? ((REGIONS[LANG] && REGIONS[LANG][a.region]) || a.region) : ""; }

// ===== Ханш · Цаг агаар (өдөр бүр шинэчлэгдэнэ; цаг агаарыг Open-Meteo-гоос шууд татна) =====
const RATES = {date:"2026-11-08", items:[
  {code:"USD", mnt:3600.44, chg:0}, {code:"EUR", mnt:4024.21, chg:0}, {code:"JPY", mnt:22.8, chg:0},
  {code:"CNY", mnt:539.8, chg:0}, {code:"KRW", mnt:2.66, chg:0}, {code:"RUB", mnt:43.96, chg:0}, {code:"GBP", mnt:4825.13, chg:0}
]};
let WEATHER = [
  {city:"Улаанбаатар", cityEn:"Ulaanbaatar", lat:47.9212, lon:106.9186, tz:"Asia/Ulaanbaatar", temp:-14, code:0},
  {city:"Токио", cityEn:"Tokyo", lat:35.6762, lon:139.6503, tz:"Asia/Tokyo", temp:9, code:0},
  {city:"Сөүл", cityEn:"Seoul", lat:37.5665, lon:126.978, tz:"Asia/Seoul", temp:3, code:2},
  {city:"Бээжин", cityEn:"Beijing", lat:39.9042, lon:116.4074, tz:"Asia/Shanghai", temp:2, code:53},
  {city:"Москва", cityEn:"Moscow", lat:55.7558, lon:37.6173, tz:"Europe/Moscow", temp:0, code:3}
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
  {yt:"8Jas4MdBMNI", title:"Асуудлын мөрөөр.../Сурвалжилга/", titleEn:"Following the issue... /Report/", src:"МҮОНТ", srcEn:"MNB", srcFull:"МҮОНТ (Монголын үндэсний олон нийтийн телевиз)", srcFullEn:"MNB (Mongolian National Broadcaster)"},
  {yt:"o14hZJ5T71Q", title:"Монгол өв соёл: Баруун Монголын ут дуунаас…", titleEn:"Mongolian heritage: From the songs of Western Mongolia…", src:"МҮОНТ", srcEn:"MNB", srcFull:"МҮОНТ (Монголын үндэсний олон нийтийн телевиз)", srcFullEn:"MNB (Mongolian National Broadcaster)"},
  {yt:"in8zj4A9dKE", title:"ТООН ТОЙМ", titleEn:"By the Numbers", src:"Eagle TV", srcEn:"Eagle TV", srcFull:"Eagle TV (Ийгл телевиз)", srcFullEn:"Eagle TV"},
  {yt:"KeVigCEOvKY", title:"Гадаадын компаниуд Хятадын зах зээлийг орхин гарсаар байна", titleEn:"Foreign companies keep leaving the Chinese market", src:"Eagle TV", srcEn:"Eagle TV", srcFull:"Eagle TV (Ийгл телевиз)", srcFullEn:"Eagle TV"},
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
  document.querySelectorAll(".js-logo-name").forEach(el=>{ el.textContent = LANG === "en" ? "TUGEE" : "ТҮГЭЭ"; });
  document.querySelectorAll(".js-logo-suffix").forEach(el=>{ el.textContent = LANG === "en" ? ".mn" : ".мн"; });
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
