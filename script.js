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
  mn: { "arkhangai": "Архангай", "khuvsgul": "Хөвсгөл", "dornogovi": "Дорноговь", "uvurkhangai": "Өвөрхангай", "dornod": "Дорнод", "selenge": "Сэлэнгэ" },
  en: { "arkhangai": "Arkhangai", "khuvsgul": "Khuvsgul", "dornogovi": "Dornogovi", "uvurkhangai": "Uvurkhangai", "dornod": "Dornod", "selenge": "Selenge" }
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

// ===== Бодит мэдээнүүд (2026-11-02) — өдөр бүр шинэчлэгдэнэ =====
const ARTICLES = [
  {id:1, cat:"ediin-zasag", title:"Он гарсаар Монголд 919 мянган жуулчин ирж, нэг сая жуулчны зорилтод ойртлоо", titleEn:"919,000 tourists have visited Mongolia this year, bringing the one-million target within reach", time:"15 мин", timeEn:"15 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Ulaanbaatar skyline.jpg?width=1000", text:"2026 оны нэгдүгээр сарын 1-нээс аравдугаар сарын 29-ний өдрийн урьдчилсан статистик мэдээллээр Монгол Улс 919,104 жуулчин хүлээн авчээ. Энэ нь аялал жуулчлалын салбарын түүхэн амжилтыг ахиулсан үзүүлэлт бөгөөд жилийн зорилтын 91.9 хувьд хүрсэн гэсэн үг юм. Нэг сая жуулчин хүлээн авах зорилт биелэхэд ердөө 80,896 жуулчин үлдээд байна.\n\nМонгол Улсын Засгийн газар аялал жуулчлалыг эдийн засгийн тэргүүлэх чиглэлийн нэг болгон тодорхойлж, 2023–2028 оныг «Монголд зочлох жил» болгон зарласан билээ. Жуулчдын тоо өсөж байгаа нь зөвхөн тоон үзүүлэлт бус, салбарын хамтын ажиллагаа, үйлчилгээний чанар, олон улсын сурталчилгаа, өрсөлдөх чадварын өсөлтийг илтгэж байгаа гэж салбарынхан үзэж байна.\n\nЖуулчдын урсгал нэмэгдэх нь зочид буудал, тээвэр, хоол хүнс, гар урлал зэрэг олон салбарт шууд нөлөөлж, орон нутгийн иргэдийн орлогыг нэмэгдүүлдэг. Ирэх саруудад өвлийн аялал жуулчлалын улирал эхлэхтэй зэрэгцэн жуулчдын тоо нэг саяд хүрэх боломжтой гэж үзэж байгаа бөгөөд салбарынхан үйлчилгээний чанарыг хадгалж, жуулчдад зориулсан шинэ бүтээгдэхүүн санал болгоход анхаарч байна.", textEn:"According to preliminary statistics from January 1 to October 29, 2026, Mongolia has received 919,104 tourists. The figure marks a historic achievement for the tourism sector and represents 91.9 percent of the annual target. Only 80,896 more tourists are needed to reach the goal of one million visitors.\n\nThe Mongolian government has identified tourism as a priority economic sector and declared 2023–2028 the «Visit Mongolia» years. Industry representatives say the growth is not just a number: it reflects stronger cooperation in the sector, better service quality, international promotion and rising competitiveness.\n\nMore visitors directly benefit hotels, transport, food and handicrafts, and raise incomes for local communities. With the winter tourism season approaching, the one-million mark looks within reach, and the industry is focusing on maintaining service quality and offering new products for visitors."},
  {id:2, cat:"delhii", title:"Испанийн галт тэрэгний ослын 69 хохирогчийн 56-гийнх нь нэр тогтоогдож, сайд огцрохоос татгалзав", titleEn:"56 of 69 victims identified in Spain train crash as minister refuses to resign", time:"30 мин", timeEn:"30 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/High speed Renfe 9671 91-30 016 -9 at Barcelona pic1.JPG?width=760", text:"Испанийн Толедо мужийн Урда хотын ойролцоо аравдугаар сарын 28-нд болсон хурдны хоёр галт тэрэгний мөргөлдөөнөөр амиа алдсан 69 хүний 56-гийнх нь нэрийг бямба гараг гэхэд тогтоосон байна. Хурууны хээ, ДНХ-ийн шинжилгээгээр таних ажил үргэлжилж байгаа бөгөөд Иргэний хамгаалалтынхан амралтын өдрүүдэд ч ажиллажээ. Бүх 69 цогцост Толедо дахь Шүүх эмнэлгийн хүрээлэнд задлан шинжилгээ хийсэн байна.\n\nУрьдчилсан тайланд дурдсанаар Renfe компанийн галт тэрэг зогсож байсан Iryo компанийн галт тэрэгний араас 160–200 километр цаг хурдтайгаар мөргөсөн байна. Осол Мадрид–Андалус чиглэлийн төмөр замын 118 дахь километр орчимд, өглөөний 08:53 цагийн орчимд болсон бөгөөд Мадрид–Андалус чиглэлийн шугам хоёр тийшээ хаалттай хэвээр байна. Энэ нь 2013 оны Сантьяго де Компостелагийн ослоос хойших Испанийн хамгийн хүнд төмөр замын осол юм.\n\nТээврийн сайд Оскар Пуэнте огцрох шаардлагыг няцааж, Ерөнхий сайд Педро Санчесийн дэмжлэгийг хадгалж байгаа гэдгээ мэдэгдлээ. Харин галт тэрэгний жолооч нарын үйлдвэрчний эвлэл аюулгүй байдлын бүтцийн арга хэмжээ шаардаж, арваннэгдүгээр сарын 10, 12-нд ажил хаяхээ зарласан байна. Мөрдөн шалгалтад LZB галт тэрэг хамгаалалтын системийн доголдол болон Мадридын хяналтын төвийн шийдвэрүүд гол асуудал болж байна.", textEn:"Spanish authorities had identified 56 of the 69 people killed in the collision of two high-speed trains near Urda in Toledo province on October 28, by Saturday. Identification through fingerprints and DNA tests is continuing, with Civil Guard teams working through the weekend. All 69 bodies have undergone autopsies at the Institute of Forensic Medicine in Toledo.\n\nAccording to a preliminary report, the Renfe train struck the stationary Iryo train at 160–200 kilometres per hour. The crash happened at around 08:53 in the morning near kilometre 118 on the Madrid–Andalusia line, which remains closed in both directions. It is Spain's deadliest rail disaster since the 2013 Santiago de Compostela derailment.\n\nTransport Minister Oscar Puente has rejected calls to resign, saying he retains the support of Prime Minister Pedro Sanchez. The train drivers' union, meanwhile, is demanding structural safety measures and has called strikes for November 10 and 12. Investigators are focusing on the failure of the LZB train protection system and decisions taken at the Madrid control centre."},
  {id:3, cat:"sport", title:"Т.Төгсхүслэн залуучуудын олимпын хүрэл медалийн төлөө барилдана", titleEn:"T. Tugskhuslen to fight for Youth Olympics bronze", time:"45 мин", timeEn:"45 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/A judo competition (FL61747625).jpg?width=760", text:"«Дакар-2026» залуучуудын олимпын наадмын эхний өдөр Монголын жүдоч Т.Төгсхүслэн хүрэл медалийн төлөө барилдахаар боллоо. Тэрбээр шөвгийн наймд Замби улсын Элиша Зимбаг ялж хагас шигшээд шалгарсан ч хагас шигшээд Хорватын Йона Зворцтой барилдаж, нэмэлт цагт харамсалтайгаар ялагдсан байна. Т.Төгсхүслэн барилдааны явцад илүү байсан ч шийдвэрлэх мөчид алдаа гаргаж, үнэлгээ алдсан гэж мэдээлжээ.\n\nИйнхүү тэрбээр хүрэл медалийн төлөө олимпын дүрвэгсдийн багийн тамирчин Ботай Арно Яфунгатай хүч үзэхээр боллоо. Т.Төгсхүслэн нь 2025 оны улсын аварга шалгаруулах тэмцээний мөнгөн медаль, 2026 оны улсын аваргын алтан медаль хүртэж, 2026 оны дэлхийн аварга шалгаруулах тэмцээнд долдугаар байр эзэлсэн амжилттай тамирчин юм. Тэрбээр Монголын багийн тугчаар сонгогдсон билээ.\n\n«Дакар-2026» наадам 2026 оны арваннэгдүгээр сарын 1-нд албан ёсоор эхэлж, эхний өдөр элсний волейбол, бадминтон, үшү, ширээний теннис, жүдо, усанд сэлэлтийн тэмцээнүүд эхэлсэн байна. Монголын жүдо, усанд сэлэлтийн тамирчид эхний өдөр салхийг хагалсан бөгөөд эмэгтэйчүүдийн 400 метрийн чөлөөт сэлэлтийн төрөлд Б.Оргилмаа өрсөлдөж байна.", textEn:"On the first day of the Dakar 2026 Youth Olympic Games, Mongolian judoka T. Tugskhuslen advanced to a bronze-medal bout. He beat Zambia's Elisha Zimba in the quarter-finals to reach the semi-finals, but lost narrowly in extra time to Croatia's Jona Zvorc in the semi-final. Reports said Tugskhuslen had the better of the contest but made a costly error at the decisive moment.\n\nHe will now face Botay Arno Yafunga of the Refugee Olympic Team for the bronze medal. Tugskhuslen won silver at the 2025 national championships and gold at the 2026 national championships, and placed seventh at the 2026 world championships. He was chosen as Mongolia's flag bearer for the Games.\n\nThe Dakar 2026 Games officially began on November 1, with beach volleyball, badminton, wushu, table tennis, judo and swimming starting on the first day. Mongolia's judo and swimming athletes opened the country's campaign, with B. Orgilmaa competing in the women's 400-metre freestyle."},
  {id:4, cat:"niigem", title:"Монгол эмч нарыг БНСУ-д сургаж, мэргэшүүлэхээр тохиролцжээ", titleEn:"Mongolia and South Korea agree to train Mongolian doctors in Korea", time:"1 цаг", timeEn:"1 hour", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Doctors training doctors 131001-F-IW762-414.jpg?width=760", text:"Монгол, БНСУ-ын Эрүүл мэндийн яамд найман жилийн дараа зөвлөлдөх уулзалтаа сэргээж, хоёр улсын эрүүл мэндийн салбарын хамтын ажиллагааг өргөжүүлэхээр тохиролцжээ. Энэ хүрээнд Монгол эмч нарыг БНСУ-д сургаж, мэргэшүүлэх асуудал яригдсан бөгөөд эрүүл мэндийн салбарын хамтын ажиллагааг шинэ шатанд гаргах зорилготой байна.\n\nХоёр улсын эрүүл мэндийн яамдын зөвлөлдөх уулзалт найман жилийн завсарлагааны дараа сэргэж байгаа нь өөрөө онцлог үйл явдал юм. Уулзалтаар эмч, эмнэлгийн ажилтнуудыг солилцох, мэргэжил дээшлүүлэх сургалтад хамруулах, эмнэлгийн технологи, туршлага солилцох зэрэг чиглэлээр хамтран ажиллах боломжийг хэлэлцсэн байна.\n\nМонголын эрүүл мэндийн салбарт мэргэшсэн хүний нөөцийн хэрэгцээ өндөр байгаа үед Солонгост сурч, мэргэших боломж нь эмч нарын ур чадварыг дээшлүүлж, эцэстээ иргэдэд үзүүлэх эрүүл мэндийн тусламж үйлчилгээний чанарт эерэгээр нөлөөлнө гэж үзэж байна. Талууд хамтын ажиллагааны дараагийн алхмуудыг ойрын хугацаанд тодорхой болгохоор ажиллаж байна.", textEn:"Mongolia's and South Korea's health ministries have resumed their consultative meeting after eight years and agreed to expand cooperation in the health sector. The talks covered training and specialising Mongolian doctors in South Korea, with the aim of taking bilateral health cooperation to a new level.\n\nThe resumption of the ministries' consultative meeting after an eight-year break is itself a notable development. The meeting discussed exchanging doctors and medical staff, involving them in professional development training, and sharing medical technology and experience.\n\nAt a time when Mongolia's health sector has a strong need for skilled personnel, the opportunity to study and specialise in South Korea is expected to raise doctors' skills and, ultimately, improve the quality of health care for citizens. The two sides are working to define the next steps of cooperation in the near future."},
  {id:5, cat:"uls-tor", title:"Улаанбаатар хотын 387 жилийн ой тохиож, хотын дарга иргэдэд хандав", titleEn:"Ulaanbaatar marks its 387th anniversary as mayor addresses residents", time:"1 цаг", timeEn:"1 hour", img:"https://commons.wikimedia.org/wiki/Special:FilePath/2024-10-18 View of Ulaanbaatar.jpg?width=760", text:"Нийслэл хотын 387 жилийн ой тохиож, ойг тохиолдуулан Гэрэлт хөшөөнд хүндэтгэл үзүүлж, Төрийн далбаа болон Нийслэлийн тугийг мандууллаа. Гэрэлт хөшөө буюу мэлхийт хөшөөг 1778 онд Алтан тэвшийн хөндий буюу одоогийн Улаанбаатарт суурьшсан түүхэн үйл явдалд зориулж босгосон байна.\n\nХотын дарга Б.Пүрэвдагва Улаанбаатар хот бол олон гэр бүл зорин ирж амьдралаа төвхнүүлсэн гэр юм гэж онцоллоо. Олонтоо бууриа сэлгэсэн нүүдэлчдийн хотод өдгөө улсын хүн амын тал нь суурьшиж, эдийн засгийн 70 хувийг бүрдүүлдэг их хот болон хөгжиж байгааг тэрбээр тэмдэглэв.\n\n«Улаанбаатар хотын түүх бол олон гэр бүл зорин ирж амьдралаа төвхнүүлсэн гэр юм. Улаанбаатар хот бол бидний төрж өссөн, үр хүүхдийнхээ ирээдүйг төлөвлөж хамтдаа бүтээж буй гэр орон юм. Улаанбаатар хотын баяр бол хоттой хувь заяагаа холбосон хүн бүрийн баяр юм» гэж хотын дарга хэллээ.", textEn:"Ulaanbaatar marked its 387th anniversary, with a tribute paid at the Gerelt monument and the state flag and the city flag raised. The Gerelt monument, also known as the turtle monument, was erected to commemorate the historic settlement in the Altan Tevsh valley, present-day Ulaanbaatar, in 1778.\n\nMayor B. Purevdagva stressed that Ulaanbaatar is a home where many families have come to settle and build their lives. The once-nomadic city, which moved its site many times, is now a major city home to half of the country's population and producing 70 percent of its economy, he noted.\n\n«The history of Ulaanbaatar is the story of many families who came here to settle and build their lives. Ulaanbaatar is the home where we were born and raised, and where we are building the future of our children together. The city's anniversary is a celebration for everyone whose fate is tied to this city,» the mayor said."},
  {id:6, cat:"niigem", title:"Өнөөдөр Улаанбаатарт шөнөдөө 9 хэм хүйтэн, ихэнх нутгаар цас орохгүй", titleEn:"Ulaanbaatar to see minus 9 degrees overnight as most of Mongolia stays dry", time:"2 цаг", timeEn:"2 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Mongolia Winter (127750833).jpeg?width=760", text:"Цаг уур, орчны шинжилгээний газрын мэдээллээр арваннэгдүгээр сарын 1-ний 20 цагаас 2-ны 20 цаг хүртэлх хугацаанд ихэнх нутгаар солигдмол үүлтэй байх бөгөөд 1-2-нд шилжих шөнө Хөвсгөлийн баруун, Сэлэнгийн зүүн, Төв аймгийн зүүн хойд, Завхан, Хэнтий, Дорнодын хойд сумдаар, 2-ны өдөр Хөвсгөлийн баруун, Дорнодын зарим газраар 0.0–1.0 миллиметр ялимгүй цас орно. Бусад нутгаар цас орохгүй.\n\nСалхи нутгийн зүүн хэсгээр баруун өмнөөс хойш эргэж, бусад нутгаар баруунаас секундэд 5–10 метр, тал, хээрийн нутгаар секундэд 12–14 метр хүрч ширүүснэ. Шөнөдөө Завхан, Заг-Байдраг голын эх, Хүрэнбэлчир орчмоор 15–20 хэм, уулархаг нутаг, голын хөндий, Дорнод-Дарьгангын тал нутгаар 10–15 хэм, говийн бүс нутгийн баруун өмнөд хэсгээр 1 хэм дулаанаас 4 хэм хүйтэн, бусад нутгаар 4–9 хэм хүйтэн байна.\n\nУлаанбаатар хот орчмоор шөнөдөө үүлшинэ, өдөртөө үүл багасна. Цас орохгүй. Салхи баруунаас секундэд 5–10 метр. Шөнөдөө Яармаг-Сонгины орчмоор 13–15 хэм, бусад хэсгээр 7–9 хэм хүйтэн, өдөртөө 1–3 хэм дулаан байна. Харин арваннэгдүгээр сарын 3-нд нутгийн баруун хэсгээр, 4-нд нутгийн хойд хэсгээр, 5-нд нутгийн зүүн хэсгээр цас орж, зөөлөн цасан шуурга шуурч, хүйтрэх төлөвтэй байна.", textEn:"According to the National Agency for Meteorology and Environmental Monitoring, most of Mongolia will see variable cloud from 20:00 on November 1 to 20:00 on November 2. Light snow of 0.0–1.0 millimetres is expected overnight in western Khuvsgul, eastern Selenge, north-eastern Tuv, Zavkhan, Khentii and northern Dornod, and on November 2 in western Khuvsgul and parts of Dornod. Other areas will stay dry.\n\nWinds will turn from south-west to north in the east and blow from the west at 5–10 metres per second elsewhere, strengthening to 12–14 metres per second in steppe and plain areas. Overnight temperatures will be minus 15–20 degrees around Zavkhan, the Zag-Baidrag river source and Khurenbelchir, minus 10–15 in mountainous areas, river valleys and the Dornod-Darianganga steppe, from plus 1 to minus 4 in the south-western Gobi, and minus 4–9 elsewhere.\n\nIn Ulaanbaatar it will be cloudy overnight and clearer during the day, with no snow. Winds from the west at 5–10 metres per second. Overnight temperatures will be minus 13–15 degrees around Yarmag-Songino and minus 7–9 elsewhere, rising to plus 1–3 during the day. Snow and light snowstorms are forecast in the west on November 3, the north on November 4 and the east on November 5, with colder weather."},
  {id:7, cat:"niigem", title:"Арваннэгдүгээр сарын 1-нээс дулааны сүлжээнд шинээр хэрэглэгч холбох, огтолгоо авахыг зогсоов", titleEn:"New heating-network connections and disconnections suspended from November 1", time:"2 цаг", timeEn:"2 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Ulaanbaatar coal power plant.jpg?width=760", text:"«Улаанбаатар Дулааны Сүлжээ» ТӨХК-аас 2026 оны арваннэгдүгээр сарын 1-ний өдрөөс 2027 оны гуравдугаар сарын 1-ний өдрийг хүртэл нэгдсэн сүлжээнд болон төвлөрсөн дулаан хангамжийн системүүдэд сэлгэн залгалт, шинээр холболт хийх үйл ажиллагааг зогсоохоо мэдэгдлээ. Энэ хугацаанд дулааны төв болон салаа шугамаас огтолгоо авах, сүлжээнд шинээр хэрэглэгч холбохгүй.\n\nШийдвэр нь 2026–2027 оны өвлийн оргил ачааллын горим ажиллагааг эрчим хүчний системүүдэд мөрдөж эхэлсэнтэй холбоотой юм. Халаалтын улирал эхлэх, дуусах хугацаанд хэрэглэгчдийн эрчим хүчний тасралтгүй, найдвартай ажиллагааг хангах үүднээс ийм хязгаарлалт тогтоосон гэж компани тайлбарлав.\n\nХарин улс, орон нутгийн төсөв болон гадаадын зээл тусламжаар хэрэгжих төсөл хөтөлбөр, хөрөнгө оруулалтын ажлууд, зайлшгүй аваарийн захиалгаар хийгдэх сэлгэн залгалтын захиалгыг холбогдох хууль тогтоомжийн хүрээнд дурдсан хугацаанд зохион байгуулж ажиллана. 2026–2027 оны халаалтын улиралд нийслэлийн 14,500 гаруй барилгыг дулааны эрчим хүчээр хангах бөгөөд 266 барилга, объект шинээр дулааны эрчим хүчинд холбогдохоор техникийн нөхцөл авчээ.", textEn:"Ulaanbaatar Heating Network state company has announced that switching and new connections to the integrated network and centralised heating systems will be suspended from November 1, 2026 to March 1, 2027. During this period, no disconnections from heating centres or branch lines will be made, and no new consumers will be connected to the network.\n\nThe decision is linked to the start of the 2026–2027 winter peak-load regime in the energy systems. The company explained that the restriction is intended to ensure continuous and reliable energy supply to consumers during the heating season.\n\nHowever, projects and investments funded from the state and local budgets or foreign loans and aid, and switching work required by urgent emergency orders, will still be organised within the relevant laws during this period. In the 2026–2027 heating season, more than 14,500 buildings in the capital will be supplied with heating, and 266 buildings and facilities have received technical conditions for new connections."},
  {id:8, cat:"ediin-zasag", title:"Ургац хураалт 89 хувьтай үргэлжилж, хүнсний тогтвортой нийлүүлэлтэд 120 орчим тэрбум төгрөг батлагдав", titleEn:"Harvest 89 percent complete as about 120 billion tugrik approved for food supply stability", time:"3 цаг", timeEn:"3 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Wheat harvest 1.jpg?width=760", text:"Засгийн газрын ээлжит хуралдаанаар Хүнс, хөдөө аж ахуй, хөнгөн үйлдвэрийн сайд Ц.Идэрбат ургац хураалтын явцын талаар мэдээлэл танилцууллаа. Түүний мэдээлснээр өнөөдрийн байдлаар ургац хураалт 89 хувьтай үргэлжилж байгаа бөгөөд газар тариаланчид хүйтэнтэй уралдаж тариа ногоогоо хурааж чадсан байна.\n\nХаврын тариалалтаас эхлэн Засгийн газар шатахууны асуудалд онцгой анхаарал хандуулсан бөгөөд хавар 7,000 гаруй тонн шатахууныг хөнгөлөлттэй үнээр, худалдан авсан үнээр нь тариаланчдад өгчээ. Намрын тариа хураалтад 2,300 орчим тонн шатахууныг нөөцөлж, шаардлагатай аж ахуйн нэгжүүдэд 700–800 тонныг нийлүүлсэн байна.\n\n2026 оны төсвийн тодотголд хүнсний барааны тогтвортой нийлүүлэлт, үнийн өсөлтөөс сэргийлэх зорилгоор 150 орчим тэрбум төгрөгийг тусгаж өргөн барьсан бөгөөд хэлэлцүүлгийн явцад гишүүдийн саналаар 30 орчим тэрбум төгрөг хасагдаж, 120 орчим тэрбум төгрөг батлагдсан байна. Энэ хөрөнгөөр улаан буудайн нөөц бүрдүүлэх, 5,000 тонн түлшний нөөц нэмж бүрдүүлэх зэрэг ажлыг хийх бөгөөд нийслэлийн махны асуудалд 10.9 тэрбум төгрөгийн зээлийн хүүгийн татаас тусгагджээ.", textEn:"At its regular meeting, the government heard a report from Food, Agriculture and Light Industry Minister Ts. Iderbat on the harvest. According to the minister, the harvest is now 89 percent complete, with farmers managing to bring in their crops despite racing against the cold.\n\nSince spring sowing, the government has paid special attention to fuel supply, providing more than 7,000 tonnes of fuel to farmers in spring at a discounted price, at cost. For the autumn harvest, about 2,300 tonnes of fuel were reserved, with 700–800 tonnes supplied to enterprises in need.\n\nThe 2026 budget amendment initially proposed about 150 billion tugrik to ensure stable food supply and prevent price rises; after debate, members cut about 30 billion, approving about 120 billion tugrik. The funds will be used to build wheat reserves and add 5,000 tonnes of fuel reserves, while a 10.9 billion tugrik loan-interest subsidy was included for the capital's meat supply."},
  {id:9, cat:"delhii", title:"Израилын сөрөг хүчний удирдагч Айзенкот хамгийн өргөн засгийн газар байгуулахыг зорьж байна", titleEn:"Israel opposition leader Eisenkot aims to form broadest possible government", time:"3 цаг", timeEn:"3 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Knesset front side - 2022.jpg?width=760", text:"Израилын сонгуулийн санал тооллого дууссаны дараа сөрөг хүчний удирдагч Гади Айзенкот бямба гарагт хамгийн өргөн боломжтой засгийн газар байгуулахыг зорьж байгаагаа мэдэгдлээ. Түүний сөрөг хүчний эвсэл 120 суудалтай Кнессетэд 48 суудал авсан бол Ерөнхий сайд Биньямин Нетаньяхугийн эвсэл 53 суудал авч, засгийн газар байгуулахад шаардлагатай 61 суудалд хүрч чадаагүй байна.\n\nСонгуульд нийт 5,716,665 санал өгөгдөж, ирц 77.9 хувьд хүрсэн нь сүүлийн хэдэн арван жилийн хамгийн өндөр үзүүлэлтүүдийн нэг гэж мэдээлжээ. Баталгаажсан эцсийн дүн арваннэгдүгээр сарын 4-нд Ерөнхийлөгчид өргөн баригдаж, үүний дараа Ерөнхийлөгч Исаак Херцог намуудын төлөөлөгчидтэй зөвлөлдөж, засгийн газар байгуулах үүргийг аль нэг намын даргад өгөх юм. Шинэ 26 дахь Кнессет арваннэгдүгээр сарын 10-нд тангараг өргөх товтой байна.\n\nНетаньяху сонгуулийг «хулгайлагдсан» гэж мэдэгдэж, Араб тэргүүтэй намуудыг луйвар хийсэн гэж буруутгасан бөгөөд шүүмжлэгчид эдгээр мэдэгдэлд баримт нотолгоо дутмаг гэж үзэж байна. Израилын дотоод аюулгүй байдлын агентлаг Шин Бет гадаадын оролцоо байж болзошгүй гэх мэдэгдлийг шалгаж байгаа бөгөөд мөрдөн шалгалт нь «төвлөрсөн, хязгаарлагдмал» хүрээтэй гэж мэдэгдлээ. Энэ сонгууль нь 2023 оны аравдугаар сарын 7-ны халдлагаас хойшхи анхны улсын сонгууль юм.", textEn:"After vote counting ended in Israel's election, opposition leader Gadi Eisenkot said on Saturday that he intends to form the broadest possible government. His opposition bloc won 48 seats in the 120-seat Knesset, while Prime Minister Benjamin Netanyahu's bloc won 53 seats, short of the 61 needed to govern.\n\nA total of 5,716,665 ballots were cast, for a turnout of 77.9 percent, reported to be among the highest in decades. The certified results will be submitted to the President on November 4, after which President Isaac Herzog will consult party representatives before tasking a party leader with forming a government. The new 26th Knesset is scheduled to be sworn in on November 10.\n\nNetanyahu has claimed the election was stolen and accused Arab-led parties of fraud, claims critics say lack evidence. Israel's internal security agency, Shin Bet, is examining allegations of possible foreign interference, describing its inquiry as focused and limited. The election was the first national vote since the October 7, 2023 attack."},
  {id:10, cat:"delhii", title:"Франц, Германд амьжиргааны өртгийн эсрэг залуучуудын жагсаал үргэлжилж, Франкфуртад 54 хүн саатуулагдав", titleEn:"Youth cost-of-living protests continue in France and Germany; 54 detained in Frankfurt", time:"4 цаг", timeEn:"4 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Protest against ACTA - 2012-01-28 - Toulouse - 05.jpg?width=760", text:"Францад амьжиргааны өртөг болон нийтийн үйлчилгээний хомсдлын эсрэг залуучуудын жагсаал гурав дахь өдрөө үргэлжилж, бямба гарагт 320,000 гаруй хүн жагсав. Жагсаалын үеэр цагдаа нартай мөргөлдөөн гарсан гэж мэдээлжээ. Германд «Gen Z regelt» хөдөлгөөний уриалгаар 30 орчим хотод хэдэн арван мянган залуу жагсаж, хүчирхийлэл, дэлгүүр тоногдсон тохиолдлууд гарсан байна.\n\nФранкфуртад болсон залуучуудын жагсаал хүчирхийлэл болон хувирч, дэлгүүрүүд тоногдсон гэж DW News мэдээлэв. Франкфуртад 54 хүн саатуулагдсан бол Берлинд 60 орчим хүн баривчлагдсан гэж мэдээлж байна. Францад 70,000 орчим аюулгүй байдлын ажилтан дайчлагдсан бөгөөд бямба гарагт болсон жагсаалд ерөнхийлөгчийн сонгуульд нэр дэвшигч Жан-Люк Меланшон оролцсон байна.\n\nЗалуучуудын жагсаал нь амьжиргааны өртөг өсөж, нийтийн үйлчилгээ хангалтгүй байгаа явдалд чиглэж байгаа бөгөөд Европын олон хотод ижил төстэй жагсаалууд өрнөж байна. Жагсагчид цалин, орон сууц, нийтийн үйлчилгээний хүртээмжийг сайжруулахыг шаардаж байгаа бол эрх баригчид олон нийтийн дэг журам, аюулгүй байдлыг хангахын тулд нэмэлт хүч дайчилж байна.", textEn:"Youth protests in France against the cost of living and the lack of public services continued for a third day, with more than 320,000 people marching on Saturday and clashes with police reported. In Germany, tens of thousands of young people protested in around 30 cities at the call of the «Gen Z regelt» movement, with violence and shop looting reported.\n\nThe youth protests in Frankfurt turned violent, with shops looted, according to DW News. Fifty-four people were detained in Frankfurt and nearly 60 arrested in Berlin. In France, about 70,000 security personnel were deployed, and presidential candidate Jean-Luc Melenchon joined Saturday's demonstrations.\n\nThe youth protests focus on rising living costs and inadequate public services, with similar demonstrations taking place in many European cities. Protesters are demanding better wages, housing and access to public services, while authorities have deployed extra forces to maintain public order and safety."},
  {id:11, cat:"delhii", title:"Хойд Солонгос тактикийн пуужинд зориулсан бөөгнөрсөн бөмбөгт байлдааны хошуу туршлаа", titleEn:"North Korea tests cluster-bomb warhead for tactical missiles", time:"4 цаг", timeEn:"4 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/North Korea's ballistic missile - North Korea Victory Day-2013 02.jpg?width=760", text:"БНАСАУ бямба гарагт тактикийн баллистик пуужинд зориулсан бөөгнөрсөн бөмбөгт байлдааны хошууг туршиж, энэ оны эцэс гэхэд янз бүрийн төрлийн ийм зэвсгийг байрлуулахаар төлөвлөж байгаагаа зарласан гэж тус улсын албан ёсны Солонгосын төв мэдээллийн агентлаг ням гарагт мэдээллээ. Туршилт нь Хойд Солонгосын зэвсгийн хөтөлбөрийн шинэ чиглэлийг харуулж байна.\n\nБөөгнөрсөн бөмбөг нь нэг пуужингаас олон жижиг тэсрэх бөмбөг тараах замаар өргөн талбайг хамардаг зэвсэг бөгөөд иргэний хохирол, удаан хугацааны аюулын талаар олон улсад маргаан дагуулдаг. Олон улс бөөгнөрсөн бөмбөгийг хориглох конвенцид нэгдсэн боловч Хойд Солонгос, АНУ, Орос зэрэг улс нэгдээгүй байна.\n\nТуршилтын мэдээ нь бүс нутгийн аюулгүй байдлын хурцадмал байдал нэмэгдэж байгаа үед гарч байна. Солонгосын хойг болон Зүүн хойд Азийн аюулгүй байдлын асуудлаарх хэлэлцээ үргэлжилж байгаа бөгөөд хөрш орнууд болон олон улсын хамтын нийгэмлэг Хойд Солонгосын зэвсгийн туршилтуудыг анхааралтай ажиглаж байна.", textEn:"North Korea on Saturday tested a cluster-bomb warhead designed for tactical ballistic missiles and announced plans to deploy different types of the weapon by the end of this year, the official Korean Central News Agency reported on Sunday. The test points to a new direction in North Korea's weapons programme.\n\nCluster bombs spread many small explosive bomblets from a single missile to cover a wide area, and they are internationally controversial because of civilian harm and long-lasting danger. Many countries have joined the convention banning cluster munitions, but North Korea, the United States and Russia have not.\n\nThe test comes at a time of heightened regional security tensions. Talks on security on the Korean peninsula and in north-east Asia continue, and neighbouring countries and the international community are watching North Korea's weapons tests closely."},
  {id:12, cat:"tech", title:"Холбооны мөрдөх товчоо Binance-ийн 6.3 тэрбум ам.долларын хулгайн ард Хойд Солонгосын хакерууд байна гэж мэдэгдлээ", titleEn:"FBI blames North Korean hackers for record $6.3 billion Binance theft", time:"5 цаг", timeEn:"5 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Bitcoin BTC golden coin with the symbol.jpg?width=760", text:"АНУ-ын Холбооны мөрдөх товчоо түүхэн дэх хамгийн том криптовалютын хулгай гэж тооцогдож буй Binance платформоос 6.3 тэрбум ам.доллар хулгайлсан хэргийн ард Хойд Солонгосын TraderTraitor хакерын бүлэг байна гэж мэдэгдлээ. Энэ нь улсаас дэмжигдсэн хакерын бүлэгт хамааруулсан хамгийн том криптовалютын хулгай болж байна.\n\nBinance компани алдагдлын 90 хувийг нөхсөн гэж мэдэгдсэн байна. Криптовалютын биржүүд болон дижитал хөрөнгийн платформууд нь улсаас дэмжигдсэн хакеруудын бай болсоор байгаа бөгөөд хулгайлагдсан хөрөнгийг мөнгө угаах, зэвсгийн хөтөлбөр санхүүжүүлэхэд ашиглаж болзошгүй гэж эрх баригчид анхааруулж байна.\n\nХойд Солонгосын хакерууд сүүлийн жилүүдэд криптовалютын хулгайгаар олон тэрбум ам.доллар олсон гэж АНУ болон олон улсын байгууллагууд мэдээлж ирсэн. Энэ хэрэг нь дижитал хөрөнгийн аюулгүй байдал, олон улсын санхүүгийн хяналт, улсаас дэмжигдсэн кибер гэмт хэрэгтэй тэмцэх асуудлыг дахин анхаарлын төвд оруулж байна.", textEn:"The FBI has said that the North Korean hacker group TraderTraitor is behind the theft of 6.3 billion dollars from the Binance platform, the largest cryptocurrency theft ever recorded. It is the largest crypto theft attributed to a state-backed hacker group.\n\nBinance said it has covered 90 percent of the losses. Cryptocurrency exchanges and digital asset platforms remain targets for state-backed hackers, and authorities warn that stolen funds may be laundered or used to finance weapons programmes.\n\nUS and international bodies have reported that North Korean hackers have stolen billions of dollars through cryptocurrency thefts in recent years. The case has put digital asset security, international financial controls and the fight against state-backed cybercrime back in focus."},
  {id:13, cat:"delhii", title:"Атлантад болсон «Их 20»-ийн гадаад хэргийн сайд нарын уулзалт хамтарсан мэдэгдэлгүйгээр өндөрлөв", titleEn:"G20 foreign ministers' meeting in Atlanta ends without joint communique", time:"5 цаг", timeEn:"5 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/G20 Foreign Ministers Meetings - New Delhi 2023 - 000111568.jpg?width=760", text:"АНУ-ын Атланта хотод болсон «Их 20»-ийн гадаад хэргийн сайд нарын хоёр өдрийн уулзалт бямба гарагт хамтарсан мэдэгдэлгүйгээр өндөрлөв. Оролцогчид Украины хямрал, АНУ-Ираны мөргөлдөөн зэрэг дэлхийн геополитик, эдийн засгийн аюулгүй байдлын асуудлаар зөвшилцөлд хүрч чадаагүй байна.\n\nУулзалтын хоёр дахь нэгдсэн хуралдаанд Энэтхэгийн гадаад хэргийн сайд С.Жайшанкар эрчим хүчний худалдаа, дэд бүтцэд чиглэсэн халдлага нь дэлхийн үнийг барьцаалж байна гэж анхааруулав. Тэрбээр эрчим хүчний хямрал нь үйлдвэрлэлээс бус, тасалдал, боломжийн бус зардлаас үүдэлтэй бөгөөд хөгжиж буй орнуудад хамгийн их хохирол учруулж байна гэж хэллээ.\n\nҮүний зэрэгцээ Украины Олешки хотоос иргэдийг нүүлгэн шилжүүлэх хүмүүнлэгийн ажиллагаа дуусч, 700 гаруй хүн Орос, Беларусиар дамжин Украин хяналттай нутагт хүрсэн гэж Ерөнхийлөгч Володимир Зеленский мэдэгдлээ. Квад буюу Энэтхэг, АНУ, Австрали, Японы гадаад хэргийн сайд нар Энэтхэг-Номхон далайн бүсэд итгэлтэй хиймэл оюуныг дэмжихэд 85 сая гаруй ам.доллар амлав.", textEn:"A two-day meeting of Group of 20 foreign ministers in Atlanta, in the United States, ended on Saturday without a joint communique. Participants failed to reach consensus on major global geopolitical and economic security issues, including the Ukraine crisis and the US-Iran conflict.\n\nAt the second plenary session, Indian Foreign Minister S. Jaishankar warned that attacks on energy trade and infrastructure are being used to hold global prices hostage. He said the energy crisis stems not from production but from disruption and unaffordable costs, which hit developing nations hardest.\n\nMeanwhile, the humanitarian operation to evacuate civilians from Oleshky in Ukraine has concluded, with more than 700 people reaching Ukrainian-controlled territory via Russia and Belarus, President Volodymyr Zelenskyy said. The Quad foreign ministers of India, the United States, Australia and Japan pledged more than 85 million dollars to support trusted artificial intelligence across the Indo-Pacific."},
  {id:14, cat:"delhii", title:"Алабамад хөлбөмбөгийн тэмцээний дараа буудалцаан гарч, нэг хүн амиа алдаж, найман хүн шархаджээ", titleEn:"One killed and eight wounded in shooting after Alabama football game", time:"6 цаг", timeEn:"6 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/University of Alabama Bryant%E2%80%93Denny Stadium Panorama.jpg?width=760", text:"АНУ-ын Алабама мужийн Бирмингем хотод бямба гарагийн орой жил бүр болдог Magic City Classic хөлбөмбөгийн тэмцээний дараа Legion Field цэнгэлдэх хүрээлэнгийн гадна буудалцаан гарч, нэг хүн амиа алдаж, найман хүн шархадсан гэж цагдаа нар мэдээллээ. Шархадсан хүмүүсийн нэг нь хүнд байдалтай байна.\n\nБирмингем хотын цагдаагийн газрын дарга Майкл Пикеттийн мэдэгдсэнээр ихэнх үзэгчид, гэр бүлүүд тэмцээний дараа цэнгэлдэх хүрээлэнгээс явсан байсан ч буудалцаан нь Греймонт өргөн чөлөөний дагуу худалдаачид байрласан газарт гарсан байна. Цагдаа нар нэг хүнийг саатуулж, байцаалтад зориулж цагдаагийн газарт хүргэсэн бөгөөд олон зэвсэг хураагдсан байна.\n\nAlabama State болон Alabama A&M нь түүхэн хар арьст их сургуулиуд бөгөөд тэдний жил бүр хийдэг тоглолт 100 гаруй жилийн түүхтэй. Энэ удаагийн тоглолтод 70,000 орчим үзэгч цугларч, Alabama A&M баг 31–28 харьцаагаар ялсан байна. Буудалцааны нөхцөл байдал одоогоор тодорхойгүй байгаа бөгөөд мөрдөн шалгалт үргэлжилж байна.", textEn:"One person was killed and eight others were wounded in a shooting outside Legion Field in Birmingham, Alabama, on Saturday night after the annual Magic City Classic football game, police said. One survivor was reported to be in critical condition.\n\nBirmingham Police Chief Michael Pickett said most spectators and families had left the stadium after the game, but the shooting happened nearby, where vendors were set up along Graymont Avenue. Police detained one person and took them to police headquarters for questioning, and multiple weapons were found and secured.\n\nAlabama State and Alabama A&M are historically Black universities whose annual meeting has been played for more than 100 years. Nearly 70,000 fans attended Saturday's game, which Alabama A&M won 31–28. The circumstances of the shooting remain unclear, and the investigation is continuing."},
  {id:15, cat:"sport", title:"«Дакар-2026» залуучуудын олимп Африк тивд анх удаа нээлтээ хийлээ", titleEn:"Dakar 2026 Youth Olympics open for the first time on African soil", time:"6 цаг", timeEn:"6 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Dakar Arena, Senegal.jpg?width=760", text:"Африк тивд анх удаа зохион байгуулагдаж буй Залуучуудын IV олимпын наадам «Дакар-2026» аравдугаар сарын 31-нд Сенегал улсын Диамниадио хотын Абдулайе Уэйд цэнгэлдэх хүрээлэнд ёслол төгөлдөр нээлтээ хийлээ. «Африк тив угтан авч, Дакар баярлан тэмдэглэнэ» уриан дор зохион байгуулагдаж буй тус наадамд дэлхийн 204 Үндэсний олимпын хорооны 2,700 орчим залуу тамирчин спортын 25 төрөлд өрсөлдөж байна.\n\nНээлтийн ёслолыг Сенегал Улсын Ерөнхийлөгч Бассиру Диомайе Файе албан ёсоор нээж, Олон улсын олимпын хорооны Ерөнхийлөгч Кирсти Ковентри болон Дакар-2026 наадмын Зохион байгуулах хорооны дарга Мамаду Диагна Ндиайе нар баяр хүргэж, залуу тамирчдад хандан олимпын үнэт зүйлс, эв нэгдэл, нөхөрлөлийн талаар онцлон тэмдэглэв.\n\nНээлтийн ёслол Сенегалын үндэсний өв соёл, Африк тивийн олон үндэстний уламжлалт хөгжим, бүжиг, орчин үеийн урлагийг хослуулсан өргөн хэмжээний тоглолтоор үргэлжиллээ. 1,115 уран бүтээлч оролцож, 1,500 хувцас хэрэгсэл бэлтгэж, 5,000 цагийн бэлтгэл орсон байна. Олимпын бамбарыг есдүгээр сарын 10-нд Грекийн Афин хотноо бадрааж, Сенегалын 14 бүс нутгаар дамжин 3,600 гаруй километр зам туулж Дакарт хүрсэн бөгөөд Сенегалын туялзуур сэлэмний залуу тамирчид бамбарыг асаасан байна.", textEn:"The fourth Youth Olympic Games, Dakar 2026, the first to be held on the African continent, officially opened on October 31 at the Abdoulaye Wade Stadium in Diamniadio, Senegal. Held under the slogan «Africa welcomes, Dakar celebrates», the Games bring together about 2,700 young athletes from 204 National Olympic Committees competing in 25 sports.\n\nThe opening ceremony was officially opened by Senegalese President Bassirou Diomaye Faye, with International Olympic Committee President Kirsty Coventry and Dakar 2026 Organising Committee chair Mamadou Diagna Ndiaye congratulating the athletes and emphasising Olympic values, unity and friendship.\n\nThe ceremony continued with a large-scale performance combining Senegalese national heritage with the traditional music and dance of Africa's many peoples and contemporary art. It involved 1,115 performers, 1,500 costumes and 5,000 hours of preparation. The Olympic flame, lit in Athens, Greece on September 10, travelled more than 3,600 kilometres through 14 regions of Senegal to Dakar, where young Senegalese fencers lit the cauldron."},
  {id:16, cat:"soyol", title:"Арваннэгдүгээр сарыг «Монгол бахархал–бүтээлч сар» болгон тэмдэглэнэ", titleEn:"November to be marked as Mongolian Pride and Creativity Month", time:"7 цаг", timeEn:"7 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Mongolian Traditional Culture Flute (34898655353).jpg?width=760", text:"Засгийн газрын хэрэгжүүлэгч агентлаг Соёл, урлагийн газраас 2026 оны арваннэгдүгээр сарыг «МОНГОЛ БАХАРХАЛ–СОЁЛЫН БҮТЭЭЛЧ» сарын аян болгон тэмдэглэж, улс, бүс, орон нутаг, байгууллагын түвшинд хэрэгжүүлж ажиллах чиглэлийг төрийн болон орон нутгийн өмчийн соёл урлагийн байгууллагуудад хүргүүллээ. Аян нь Монгол хүний үндэсний бахархал, эв нэгдлийг бэхжүүлэх зорилготой байна.\n\nАяны хүрээнд монгол хэл, бичиг, түүх, соёл, өв уламжлал, нүүдлийн соёл иргэншлийн үнэт зүйлсийг хадгалан хамгаалж, хойч үедээ өвлүүлэн уламжлах нь үндэсний оюун санааны дархлааг бэхжүүлэхэд чухал ач холбогдолтой гэж үзэж байна. 2026 онд Монголын төрт ёсны түүхэнд 1206 оны Их хуралдайгаар Тэмүжинг Чингис хаанд өргөмжилж, Их Монгол Улсыг байгуулсан түүхэн үйл явдлын 820 жилийн ой тохиож байгаа нь энэ аянд онцгой ач холбогдол өгч байна.\n\nУлс хэмжээнд соёл, уламжлал, түүхээ хүндэтгэх сэтгэлгээг төлөвшүүлэх, үндэсний хэл, бичгийн хэрэглээг нэмэгдүүлэх, үнэ цэнийг таниулах, төр, нийгмийн зүтгэлтнүүдийн бүтээл туурвил, үзэл санааг түгээн дэлгэрүүлэх, Монгол Улсын Үндсэн хуулийн үзэл санааг сурталчлах, тусгаар тогтнолын үнэ цэн, эрх зүйт соёлын ухамсрыг бэхжүүлэх чиглэлээр арга хэмжээнүүд зохион байгуулагдана. Соёл, боловсрол, нийгмийн чиглэлээр үйл ажиллагаа явуулдаг мэргэжлийн холбоод, олон нийтийн байгууллагууд, чөлөөт уран бүтээлчид, эрдэмтэн судлаачид үйл ажиллагаагаа уялдуулж ажиллахыг уриалж байна.", textEn:"The Culture and Arts Agency, an implementing agency of the government, has designated November 2026 as «Mongolian Pride and Cultural Creativity» month, directing state and locally owned cultural organisations to implement it at national, regional, local and institutional levels. The campaign aims to strengthen Mongolians' national pride and unity.\n\nThe campaign highlights the importance of preserving the Mongolian language, script, history, culture, heritage and nomadic civilisation values and passing them on to future generations, as a way of strengthening national spiritual immunity. The year 2026 also marks the 820th anniversary of the 1206 Great Khuraldai at which Temujin was proclaimed Genghis Khan and the Great Mongol State was founded, giving the campaign special significance.\n\nNationwide events will promote respect for culture, tradition and history, increase the use of the national language and script, spread the works and ideas of statesmen and public figures, promote the ideas of Mongolia's Constitution, and strengthen awareness of independence and legal culture. Professional associations, public organisations, freelance artists and researchers working in culture, education and society are invited to coordinate their activities with the campaign."},
  {id:17, cat:"soyol", title:"«Чойжин ламын сүм» музейн гадна гэрэлтүүлгийг шинэчиллээ", titleEn:"Choijin Lama Temple Museum's exterior lighting renewed", time:"8 цаг", timeEn:"8 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Choijin Lama Museum, Ulaanbaatar, Mongolia (48788604416).jpg?width=760", text:"Монголын урлагийн зөвлөл «Бурхдыг гэрэлтүүлж, өв соёлоо хамгаалъя» төслийг санаачилж, «MCS Холдинг» ХХК-ийн санхүүжилтээр наймдугаар сарын 15-наас аравдугаар сарын 30-ны хооронд «Чойжин ламын сүм» музейн гадна гэрэлтүүлгийг шинэчиллээ. Төслийн гүйцэтгэгчээр «Смарт энд симпле» ХХК ажиллаж, 270 орчим гэрлийг шинэчилж, шинээр суурилуулжээ.\n\n«Чойжин ламын сүм» музей нь 100 гаруй жилийн түүхтэй, хоёр га талбайд байрладаг, нийслэлчүүд төдийгүй гадаад, дотоодын жуулчдын зорин ирдэг соёлын чухал өв юм. Музейн гадна гэрэлтүүлгийг Итали улсын iGuzzini брэндийн соёлын өв, түүхэн дурсгалт барилга байгууламжийг гэрэлтүүлэх зориулалттай гэрлээр тохижуулсан байна.\n\nТөслийн удирдагч, Монголын урлагийн зөвлөлийн гүйцэтгэх захирал О.Одгэрэл болон нийслэлийн удирдлагын төлөөлөл гэрэлтүүлгийг шинэчилснээр түүхэн дурсгалт барилгын үзэмжийг сайжруулж, жуулчдад зориулсан орчныг илүү аюулгүй, таатай болгож байгаа гэж онцоллоо. Шинэ гэрэлтүүлэг нь музейн архитектурын онцлогийг тодотгож, оройн цагаар үзэх боломжийг сайжруулж байна.", textEn:"The Arts Council of Mongolia initiated the «Light the Gods, Protect Our Heritage» project, and with funding from MCS Holding, the exterior lighting of the Choijin Lama Temple Museum was renewed between August 15 and October 30. The contractor, Smart and Simple LLC, renewed and newly installed about 270 lights.\n\nThe Choijin Lama Temple Museum is an important cultural heritage site with more than 100 years of history, located on two hectares of land and visited by residents of the capital as well as domestic and foreign tourists. Its exterior lighting was fitted with lights by the Italian brand iGuzzini, designed for illuminating cultural heritage and historic buildings.\n\nThe project leader, Arts Council of Mongolia executive director O. Odgerel, and representatives of the city administration stressed that the new lighting improves the appearance of the historic building and makes the surroundings safer and more pleasant for visitors. The new lighting highlights the museum's architectural features and improves evening viewing."},
  {id:18, cat:"oron-nutag", region:"dundgovi", title:"Дундговь: 2027 оныг «Дундговьд зочлох жил» болгон зарлав", titleEn:"Dundgovi declares 2027 the Year of Visiting Dundgovi", time:"9 цаг", timeEn:"9 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Tourist camp in central Mongolia near Tsenkher Hot Springs.jpg?width=760", text:"Монголын аялал жуулчлалын холбоо, Соёл, спорт, аялал жуулчлал, залуучуудын яам, нийслэлийн Аялал жуулчлалын газраас хамтран 27 дахь жилдээ зохион байгуулж буй «ITM Mongolia 2026» олон улсын аялал жуулчлалын үзэсгэлэн Мишээл экспо төвд нээгдлээ. Үзэсгэлэнд 500 гаруй байгууллага оролцож, гурван өдрийн турш 300 гаруй бизнес уулзалт зохион байгуулж, 150 гаруй гэрээ, хэлцэл хийх бөгөөд 20 мянга гаруй зочин, үзэгчийг хүлээн авна.\n\nЭнэ удаагийн үзэсгэлэнгийн түнш аймгаар Дундговь аймаг оролцож, 2027 оныг «Дундговьд зочлох жил» болгон зарласан байна. Энэ хүрээнд говийн байгаль, соёлын өвд түшиглэсэн аяллыг хөгжүүлэх, жуулчдын урсгалыг нэмэгдүүлэх, орон нутгийн иргэд, бизнес эрхлэгчдийн оролцоог өргөжүүлэхийг зорьж байна.\n\nМонголын аялал жуулчлалын холбооны ерөнхийлөгч С.Баясгалангийн мэдэгдсэнээр үзэсгэлэн нь аялал жуулчлалын салбарын хөгжлийн чиг хандлага, шинэ бүтээгдэхүүн, үйлчилгээг танилцуулах, үзэсгэлэнд оролцож буй бизнес эрхлэгчдийн борлуулалтыг нэмэгдүүлэх, хөрөнгө оруулалт татах, хүний нөөцийн тулгамдсан асуудлыг хэлэлцэх, олон улсын сайн туршлага, шийдлийг хуваалцах зорилготой. Үзэсгэлэнг намар зохион байгуулж байгаа тул иргэд өвлийн аяллаа урьдчилан төлөвлөж, аялал жуулчлалын баталгаатай бүтээгдэхүүнийг хөнгөлттэй үнээр худалдан авах боломжтой байна.", textEn:"The 27th «ITM Mongolia 2026» international tourism exhibition, organised by the Mongolian Tourism Association, the Ministry of Culture, Sports, Tourism and Youth and the capital's Tourism Department, has opened at the Misheel Expo Centre. More than 500 organisations are taking part, with more than 300 business meetings and more than 150 agreements expected over three days, and more than 20,000 visitors.\n\nDundgovi province is the partner province of this year's exhibition and has declared 2027 the «Year of Visiting Dundgovi». The initiative aims to develop tourism based on the Gobi's nature and cultural heritage, increase visitor numbers, and expand the participation of local residents and businesses.\n\nAccording to Mongolian Tourism Association president S. Bayasgalan, the exhibition aims to present tourism trends and new products and services, increase sales for participating businesses, attract investment, discuss human resource challenges, and share international good practice. Because it is held in autumn, visitors can plan their winter trips in advance and buy reliable tourism products at discounted prices."}
];
function aTitle(a){ return LANG === "en" ? (a.titleEn || a.title) : a.title; }
function aTime(a){ return LANG === "en" ? (a.timeEn || a.time) : a.time; }
function aText(a){ if(a.text) return LANG === "en" ? (a.textEn || a.text) : a.text; return SAMPLE_TEXT[LANG][a.id === 1 ? "long" : "short"]; }
function aRegion(a){ return a.region ? ((REGIONS[LANG] && REGIONS[LANG][a.region]) || a.region) : ""; }

// ===== Ханш · Цаг агаар (өдөр бүр шинэчлэгдэнэ; цаг агаарыг Open-Meteo-гоос шууд татна) =====
const RATES = {date:"2026-11-02", items:[
  {code:"USD", mnt:3599.28, chg:0}, {code:"EUR", mnt:4027.77, chg:0}, {code:"JPY", mnt:22.84, chg:0},
  {code:"CNY", mnt:540.76, chg:0}, {code:"KRW", mnt:2.70, chg:0}, {code:"RUB", mnt:44.61, chg:0}, {code:"GBP", mnt:4824.47, chg:0}
]};
let WEATHER = [
  {city:"Улаанбаатар", cityEn:"Ulaanbaatar", lat:47.9212, lon:106.9186, tz:"Asia/Ulaanbaatar", temp:-6, code:0},
  {city:"Токио", cityEn:"Tokyo", lat:35.6762, lon:139.6503, tz:"Asia/Tokyo", temp:12, code:1},
  {city:"Сөүл", cityEn:"Seoul", lat:37.5665, lon:126.978, tz:"Asia/Seoul", temp:8, code:2},
  {city:"Бээжин", cityEn:"Beijing", lat:39.9042, lon:116.4074, tz:"Asia/Shanghai", temp:5, code:0},
  {city:"Москва", cityEn:"Moscow", lat:55.7558, lon:37.6173, tz:"Europe/Moscow", temp:1, code:45}
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
  {yt:"8clJMGivhdk", title:"Ургацын далай: Төв, Сэлэнгэ аймгаас бэлтгэв", titleEn:"Harvest report from Tuv and Selenge provinces", src:"МҮОНТ", srcEn:"MNB", srcFull:"МҮОНТ (Монголын үндэсний олон нийтийн телевиз)", srcFullEn:"MNB (Mongolian National Broadcaster)"},
  {yt:"srwOMtC9YsY", title:"Хүнсний хувьсгал", titleEn:"Food revolution", src:"МҮОНТ", srcEn:"MNB", srcFull:"МҮОНТ (Монголын үндэсний олон нийтийн телевиз)", srcFullEn:"MNB (Mongolian National Broadcaster)"},
  {yt:"FPh0_NOsWxw", title:"Сэтгүүлч Бадарчийн Жаргалмаагийн Өмнөд Судан улсад хийсэн сурвалжлага", titleEn:"Journalist Badarchiin Jargalmaa's report from South Sudan", src:"Eagle TV", srcEn:"Eagle TV", srcFull:"Eagle TV (Ийгл телевиз)", srcFullEn:"Eagle TV"},
  {yt:"8mNrAC85WMk", title:"Тоон тойм: Амнатын асуудал хуулийн нэмэлт өөрчлөлтөнд хэрхэн туссан бэ", titleEn:"Analysis: How the mineral royalty issue featured in the legal amendments", src:"Eagle TV", srcEn:"Eagle TV", srcFull:"Eagle TV (Ийгл телевиз)", srcFullEn:"Eagle TV"}
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
