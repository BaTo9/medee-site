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

// ===== Бодит мэдээнүүд (2026-11-22) — өдөр бүр шинэчлэгдэнэ =====
const ARTICLES = [
  {id:1, cat:"uls-tor", title:"С.Бямбацогт: 2027 оны Ерөнхийлөгчийн сонгуульд нэр дэвшихгүй", titleEn:"Byambatsogt says he will not run in the 2027 presidential election", time:"15 мин", timeEn:"15 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/2024-10-18%20Ulaanbaatar%2C%20Government%20Palace.jpg?width=1000", text:"Улсын Их Хурлын дарга С.Бямбацогт 2027 оны Ерөнхийлөгчийн сонгуульд нэр дэвшихгүй гэдгээ мэдэгдлээ. Тэрбээр арваннэгдүгээр сарын 20-нд Төрийн тамгыг гардаж авч, шинэ Ерөнхийлөгч сонгогдож тангараг өргөх хүртэл Ерөнхийлөгчийн үүргийг түр хэрэгжүүлж эхэлсэн билээ. С.Бямбацогт сэтгүүлчдэд мэдээлэл өгөхдөө нэр дэвшихгүй гэсэн байр сууриа УИХ-ын даргад нэр дэвшиж байхдаа илэрхийлсэн бөгөөд тэр байр суурь нь өөрчлөгдөхгүй гэдгийг онцолсон байна.\n\nТэрбээр сонгуулийн товыг сарын дотор зарлах ёстой гэж мэдэгдсэн бөгөөд санал хураах өдрийг сонгууль зарласнаас хойш дор хаяж 70 хоногийн дараа товлоно. Үндсэн хуулийн 37.2-т зааснаар УИХ дөрвөн сарын дотор ээлжит бус сонгууль зарлан явуулах ёстой тул шинэ Ерөнхийлөгчийг 2027 оны гуравдугаар сард сонгох боломжтой гэж үзэж байна. Ерөнхийлөгч нь зургаан жилийн хугацаатай, хоёр шатны санал хураалтаар сонгогддог.\n\nС.Бямбацогт Ерөнхийлөгчийн үүргийг зөвхөн шаардлагатай үед хэрэгжүүлж, эрх мэдлээ хэтрүүлэн ашиглахгүй гэдгээ дахин мэдэгдлээ. Тэрбээр Үндсэн хуульд Ерөнхийлөгчийн 22, бусад хуульд 45 бүрэн эрх тусгагдсан байдгийг тайлбарлаж, бүрэн эрх бүрийг хэрэгжүүлэх эсэхийг УИХ чуулганаараа тухай бүрд нь шийднэ гэдгийг онцолсон байна. Мөн улс орны аюулгүй байдал, тусгаар тогтнол, ард иргэдийн эв нэгдэл, амгалан тайван байдал өөрт нь хамгийн чухал гэж тэрбээр хэлжээ.\n\nУ.Хүрэлсүх өөрийн хүсэлтээр үүрэгт ажлаасаа чөлөөлөгдөх хүсэлт гаргасныг УИХ арваннэгдүгээр сарын 19-нд хуралдаанд оролцсон 104 гишүүний 96 буюу 92.3 хувийн саналаар дэмжсэн юм. Маргааш нь Д.Сүхбаатарын талбайд түүнийг хүндэтгэн үдэх ёслол болсон бөгөөд энэ нь Монгол Улсын түүхэнд Ерөнхийлөгч бүрэн эрхийн хугацаа дуусахаас өмнө албан тушаалаасаа чөлөөлөгдсөн анхны тохиолдол болж байна. Хэвлэлд МАН-аас Г.Занданшатар, Я.Содбаатар нарын нэр нэр дэвшигчийн хувиар дурдагдаж байгаа бол Ардчилсан намаас хэд хэдэн улстөрч намын сунгаанд оролцох сонирхлоо илэрхийлээд байна.", textEn:"Parliament Speaker S. Byambatsogt has said he will not run in the 2027 presidential election. On November 20 he received the state seal and began exercising presidential powers until a new President is elected and sworn in. Briefing journalists, Byambatsogt said he had already stated this position when he ran for Speaker, and that it has not changed.\n\nHe said the election date must be announced within a month, and polling day must fall at least 70 days after the election is called. Under Article 37.2 of the Constitution, Parliament must call an extraordinary election within four months, so the new President could be elected in March 2027. The President serves a six-year term and is elected by a two-round vote.\n\nByambatsogt said again that he would exercise presidential powers only when necessary and would not overstep them. He explained that the Constitution sets out 22 presidential powers and other laws a further 45, and that Parliament will decide case by case whether each power is exercised. He also said the country's security, independence, national unity and peaceful life mattered most to him.\n\nParliament backed U. Khurelsukh's request to be relieved of his duties at his own request on November 19, with 96 of the 104 members present — 92.3 percent — voting in favour. The next day a farewell ceremony was held at Sukhbaatar Square, the first time in Mongolia's history that a President has left office before the end of his term. Media reports have mentioned G. Zandanshatar and Ya. Sodbaatar as possible candidates from the MPP, while several Democratic Party politicians have expressed interest in their party's primary."},
  {id:2, cat:"uls-tor", title:"Х.Нямбаатар «тэмцлийн штаб» байгуулж, Хүрэлсүхийн «дэглэм»-ийг нураах тэмцэл зарлав", titleEn:"Kh. Nyambaatar forms 'struggle headquarters' to bring down what he calls Khurelsukh's 'regime'", time:"30 мин", timeEn:"30 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/2024-10-18%20Ulaanbaatar%2C%20S%C3%BCkhbaatar%20Square.jpg?width=760", text:"Нийслэлийн Засаг дарга асан Х.Нямбаатар арваннэгдүгээр сарын 21-нд цахим сүлжээгээр ээлжит лайваа хийж, У.Хүрэлсүхийн тогтоосон гэж өөрийнх нь нэрлэдэг «дэглэм»-ийг нураахын төлөө «тэмцлийн штаб» байгуулж байгаагаа зарлалаа.\n\nТэрбээр дараагийн Ерөнхийлөгч сонгогдож, У.Хүрэлсүхийн томилсон хүмүүс өөрчлөгдсөн цагт өөрөө гарч ирнэ гэж мэдэгдсэн байна. Х.Нямбаатар У.Хүрэлсүх Ерөнхийлөгчийн албан тушаалаас чөлөөлөгдөх хүсэлт гаргасныг хариуцлагаас зугтах гэсэн улс төрийн алхам гэж тайлбарлаж байгаа юм.\n\nХ.Нямбаатар арваннэгдүгээр сарын 14-нд хийсэн лайвтаа «Боди Интернэшнл» компанийн гүйцэтгэх захирал асан А.Амундра авлигад нийт 110 орчим сая ам.доллар төлсөн гэж мэдэгдсэн бөгөөд үүнээс 25 сая ам.доллар нь Ерөнхийлөгчид очсон гэж мэдэгдсэн юм. У.Хүрэлсүх энэ буруутгалыг эрс няцааж, нэрээ цэвэрлүүлэхийн тулд шалгуулахаар албан тушаалаасаа чөлөөлөгдөх хүсэлт гаргасан билээ.\n\nЭдгээр буруутгалын талаар эрүүгийн хэрэг үүсгэсэн тухай албан ёсны мэдээлэл гараагүй байгаа бөгөөд Х.Нямбаатарын дэвшүүлж буй буруутгалыг хууль хяналтын байгууллага, шүүх тогтоогоогүй байна. Ардчилсан нам тусдаа шалгах түр хороо байгуулахыг шаардаж байгаа бол УИХ Ерөнхийлөгчийн хүсэлтийг арваннэгдүгээр сарын 19-нд дэмжсэн юм.", textEn:"Former Ulaanbaatar mayor Kh. Nyambaatar announced in a livestream on November 21 that he was forming a 'struggle headquarters' to bring down what he calls the 'regime' established by U. Khurelsukh.\n\nHe said he would come forward himself once the next President is elected and the people appointed by Khurelsukh are replaced. Nyambaatar described Khurelsukh's request to be relieved of the presidency as a political move to escape responsibility.\n\nIn a livestream on November 14, Nyambaatar alleged that A. Amundra, a former executive director of Bodi International, had paid around 110 million US dollars in bribes, of which 25 million dollars went to the President. Khurelsukh strongly denied the allegation and asked to be relieved of office so he could be investigated and clear his name.\n\nNo criminal case has been officially reported in connection with these allegations, and neither law enforcement nor the courts have established them. The Democratic Party is demanding a separate temporary investigative committee, while Parliament backed the President's request on November 19."},
  {id:3, cat:"uls-tor", title:"УИХ Санхүүгийн зохицуулах хорооны дарга Т.Жамбаажамцыг 57.7 хувийн саналаар чөлөөллөө", titleEn:"Parliament relieves Financial Regulatory Commission chairman T. Jambaajamts with 57.7 percent vote", time:"45 мин", timeEn:"45 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Mongolian%201000%20tugrik%20banknote.jpg?width=760", text:"УИХ-ын намрын ээлжит чуулганы арваннэгдүгээр сарын 20-ны нэгдсэн хуралдаанаар Санхүүгийн зохицуулах хорооны дарга Т.Жамбаажамцыг үүрэгт ажлаас нь чөлөөлөх тухай тогтоолыг баталлаа. Нууц санал хураалтад 78 гишүүн оролцож, 57.7 хувь нь буюу 45 гишүүн чөлөөлөхийг дэмжсэн байна.\n\nТ.Жамбаажамц арваннэгдүгээр сарын 2-нд өөрийн хүсэлтээр чөлөөлөгдөх өргөдлөө өгсөн бөгөөд УИХ-ын дарга С.Бямбацогт уг саналыг чуулганд оруулсан юм. Арваннэгдүгээр сарын 6-нд уг асуудлыг анх хэлэлцэхэд нууц санал хураалтад оролцсон 94 гишүүний 54 нь чөлөөлөхийг дэмжээгүй тул тэрбээр албан тушаалдаа үлдсэн билээ.\n\nАрваннэгдүгээр сарын 18-нд УИХ-ын Эдийн засгийн байнгын хороо уг асуудлыг дахин хэлэлцэж, гишүүдийн 63.6 хувь нь чөлөөлөх саналыг дэмжсэнээр асуудлыг нэгдсэн хуралдаанаар эцэслэн шийдвэрлэхээр болсон юм. Хэлэлцүүлгийн үеэр УИХ-ын гишүүн Ө.Шижир санхүүгийн салбарт олон жил ажиллаж, шатлан дэвшсэн албан хаагчийг чөлөөлөх нь мэргэжлийн хүмүүсийн төрийн албанд ажиллах сонирхолд сөргөөр нөлөөлж болзошгүй гэж үзсэн байна.\n\nТ.Жамбаажамцыг 2025 оны нэгдүгээр сарын 16-нд тухайн үеийн УИХ-ын дарга Д.Амарбаясгалан нэр дэвшүүлж, Санхүүгийн зохицуулах хорооны даргаар томилж байсан бөгөөд тэрбээр нэг жил 10 сар ажиллажээ. УИХ-ын дарга С.Бямбацогт тус хорооны дарга, дэд дарга болон орон тооны бус гишүүдийг нээлттэй сонгон шалгаруулалтаар тодруулна гэж мэдэгдсэн байна.", textEn:"The State Great Khural approved a resolution relieving Financial Regulatory Commission chairman T. Jambaajamts of his duties at its plenary session on November 20. In a secret ballot, 78 members took part and 57.7 percent — 45 members — voted in favour of relieving him.\n\nJambaajamts submitted a request to be relieved at his own request on November 2, and Speaker S. Byambatsogt put the proposal before Parliament. When the matter was first discussed on November 6, 54 of the 94 members who voted in the secret ballot did not support relieving him, so he stayed in office.\n\nOn November 18, the Standing Committee on Economy discussed the matter again, and 63.6 percent of members supported the proposal, sending it to the plenary session for a final decision. During the debate, MP U. Shijir said relieving a career professional who had worked in the financial sector for many years could discourage professionals from working in public service.\n\nJambaajamts was nominated by then-Speaker D. Amarbayasgalan and appointed commission chairman on January 16, 2025, serving for one year and 10 months. Speaker Byambatsogt said the commission's chairman, deputy chairman and non-staff members would be selected through an open competition."},
  {id:4, cat:"ediin-zasag", title:"УИХ төрийн хөрөнгө оруулалтын удирдлагыг шинэчлэх хуулийн төслийг хэлэлцэхээр дэмжив", titleEn:"Parliament advances bill to overhaul public investment management", time:"30 мин", timeEn:"30 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Construction%20next%20to%20wrestling%20palace%20%282540297922%29.jpg?width=760", text:"Улсын Их Хурал төрийн хөрөнгө оруулалтын удирдлагыг шинэчлэх тухай хуулийн төслийг хэлэлцэхээр дэмжив. Сангийн сайдын мэдээлснээр 2016 оноос хойш батлагдсан 2,874 төслийн 1,219 нь хугацаа хоцорч, төсвөөсөө илүү зардал гаргасан байна.\n\nХуулийн төсөл нь төрийн хөрөнгө оруулалтын төслүүдийг төлөвлөх, сонгох, хэрэгжүүлэх, хянах тогтолцоог сайжруулах зорилготой. Төслүүдийн хоцролт, зардлын хэтрэлт нь төсвийн сахилга бат, эдийн засгийн үр ашигт сөргөөр нөлөөлж байгаа тул удирдлагын шинэчлэл шаардлагатай гэж үзэж байна.\n\nТөрийн хөрөнгө оруулалт нь зам, эрчим хүч, эрүүл мэнд, боловсрол зэрэг дэд бүтцийн салбарт чиглэдэг бөгөөд төслүүдийг цаг хугацаанд нь, төсөвт багтаан хэрэгжүүлэх нь иргэдийн амьдралд шууд нөлөөлдөг. Хуулийн төслийг чуулганаар хэлэлцэх явцад төслийн сонгон шалгаруулалт, санхүүжилтийн ил тод байдал, хариуцлагын талаар санал солилцох төлөвтэй байна.", textEn:"The State Great Khural has agreed to take up a bill to overhaul the management of public investment. According to the finance minister, 1,219 of the 2,874 projects approved since 2016 ran late and cost more than budgeted.\n\nThe bill aims to improve the system for planning, selecting, implementing and monitoring public investment projects. Delays and cost overruns undermine budget discipline and economic efficiency, so management reform is seen as necessary.\n\nPublic investment goes to infrastructure sectors such as roads, energy, health and education, and delivering projects on time and within budget directly affects people's lives. As Parliament debates the bill, discussion is expected on project selection, the transparency of financing and accountability."},
  {id:5, cat:"ediin-zasag", title:"Монгол Улс НҮБ-ын цахим засаглалын индексээр 194 орноос 42-т жагсав", titleEn:"Mongolia ranks 42nd of 194 countries in UN e-government index", time:"1 цаг", timeEn:"1 hour", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Ulaanbaatar%20skyline%20from%20Sukhbaatar%20square%20in%202025.jpg?width=760", text:"Монгол Улс НҮБ-ын 2026 оны Цахим засаглалын хөгжлийн индексээр 194 орноос 42 дугаарт жагсаж, 2024 оноос дөрвөн байраар, 2022 оноос 32 байраар ахив. Ази тивд 15 дугаарт орсон байна.\n\nЦахим засаглалын индекс нь төрийн үйлчилгээний цахимжилт, цахим дэд бүтэц, хүний нөөцийн чадавх зэрэг үзүүлэлтээр улс орнуудыг үнэлдэг. Монгол Улс сүүлийн жилүүдэд төрийн үйлчилгээг цахимаар авах боломжийг өргөжүүлж, иргэдэд үзүүлэх үйлчилгээг хялбаршуулах чиглэлээр ажиллаж байгаа юм.\n\nИндекс дэх ахиц нь төрийн үйлчилгээний хүртээмж, ил тод байдлыг сайжруулахад чиглэсэн бодлогын үр дүн гэж үзэж болох бөгөөд цаашид цахим үйлчилгээний чанар, хөдөө орон нутгийн иргэдэд хүрэх хүртээмжийг нэмэгдүүлэх шаардлагатай хэвээр байна.", textEn:"Mongolia ranks 42nd of 194 countries in the United Nations 2026 E-Government Development Index, up four places from 2024 and 32 places from 2022. It ranks 15th in Asia.\n\nThe index assesses countries on the digitalisation of public services, digital infrastructure and human capacity. In recent years Mongolia has expanded the range of public services available online and worked to make services easier for citizens to use.\n\nThe improvement in the index can be seen as the result of policies aimed at improving the accessibility and transparency of public services, though the quality of digital services and their reach to people in rural areas still need to be improved."},
  {id:6, cat:"niigem", title:"Улаанбаатар 7,000 гэр хорооллын айлд цахилгаан халаалт суурилуулна", titleEn:"Ulaanbaatar to fit electric heating in 7,000 ger district homes", time:"45 мин", timeEn:"45 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Ger%20District%20Panorama%20%286141857498%29.jpg?width=760", text:"Улаанбаатар хот энэ өвөл гэр хорооллын 7,000 айлд цахилгаан халаагуур, дулаан хадгалах халаагуур болон дулааны насос суурилуулж, агаарын бохирдлыг бууруулахаар төлөвлөж байна. Төслийг НҮБ-ын Хүүхдийн сантай хамтран хэрэгжүүлж байгаа юм.\n\nД.Сүхбаатарын талбайд «GO BLUE 2026» нээлттэй арга хэмжээний хүрээнд цахилгаан халаалтын тоног төхөөрөмжийг танилцуулсан үзэсгэлэн арваннэгдүгээр сарын 22 хүртэл үргэлжилж байна. Мөн нийслэлээс гэрээ дулаалж, зуухгүй болгох зардлын хоёр сая төгрөгийг даах шийдвэр гаргасан байна.\n\nГэр хорооллын айл өрхүүд өвлийн улиралд нүүрс түлж халаадаг нь Улаанбаатарын агаарын бохирдлын гол эх үүсвэрийн нэг гэж үздэг. Цахилгаан халаалтад шилжих нь утааг бууруулж, хүүхэд, өндөр настнуудын эрүүл мэндэд эерэг нөлөө үзүүлэх төлөвтэй байна.", textEn:"Ulaanbaatar plans to fit electric heaters, heat-storage heaters and heat pumps in 7,000 ger district homes this winter to cut air pollution. The project is being carried out with UNICEF.\n\nAn exhibition showing the electric heating equipment, held as part of the 'GO BLUE 2026' open event at Sukhbaatar Square, runs until November 22. The city has also decided to cover the two million tugrik cost of insulating a ger and removing its stove.\n\nGer district households heat with coal in winter, which is regarded as one of the main sources of air pollution in Ulaanbaatar. Switching to electric heating is expected to reduce smoke and benefit the health of children and older people."},
  {id:7, cat:"niigem", title:"ОХУ-д ажил хийхээр явсан монгол иргэн армид хууртагдан татагджээ", titleEn:"Mongolian who went to Russia for work says he was tricked into the army", time:"1 цаг", timeEn:"1 hour", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Russian%20soldier%20with%20an%20Ak%20with%201P63%20sight.jpg?width=760", text:"Монгол Улсын иргэн Д.Эрдэнэмөрөн ОХУ-д өндөр цалинтай ажил хийнэ гэж арваннэгдүгээр сарын 7-нд гэрээсээ гарсан ч очсоныхоо дараа Оросын армид хууртагдан татагдсан тухайгаа ар гэрийнхэндээ мэдэгджээ. Энэ талаар түүний ар гэрийнхэн хэвлэлд мэдээлсэн байна.\n\nТүүний эхнэрийн мэдээлснээр Д.Эрдэнэмөрөн цэргийн бэлтгэлд хамрагдаж байгаа бөгөөд юу юугүй Украины дайн руу дайчилж магадгүй аюултай нөхцөл байдал үүссэн байна. Тэрбээр «өндөр цалинтай ажилд зуучилна» гэх зарын дагуу ОХУ-ыг зорьсон гэж ар гэрийнхэн нь хэлжээ.\n\nГадаадад ажил хийхээр явахдаа зуучлагчийн мэдээллийг сайтар шалгаж, албан ёсны гэрээ байгуулах нь чухал гэдгийг энэ хэрэг дахин сануулж байна. Ар гэрийнхэн нь холбогдох байгууллагуудад хандаж, иргэнээ эх оронд нь буцаах талаар туслалцаа хүсч байгаа юм.", textEn:"Mongolian citizen D. Erdenemoron left home on November 7 to take a high-paying job in Russia, but told his family after arriving that he had been tricked into the Russian army. His family reported this to the press.\n\nAccording to his wife, Erdenemoron is undergoing military training and faces the dangerous prospect of being sent to the war in Ukraine at any moment. His family said he travelled to Russia in response to an advertisement promising to arrange high-paying work.\n\nThe case is a reminder of the importance of carefully checking any intermediary and signing an official contract before going abroad for work. His family has approached the relevant authorities and asked for help in bringing him home."},
  {id:8, cat:"niigem", title:"Монголд 958 мянган жуулчин ирж, нэг саяын зорилтод дөхлөө", titleEn:"958,000 tourists visit Mongolia, nearing one million goal", time:"1 цаг", timeEn:"1 hour", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Camel%20at%20Khongoryn%20Els%2001.jpg?width=760", text:"Монгол Улсад энэ оны нэгдүгээр сарын 1-нээс арваннэгдүгээр сарын 15-ныг хүртэлх хугацаанд 958,470 гадаадын жуулчин ирсэн нь нэг сая жуулчин хүлээн авах зорилтод дөхөж байгааг харуулж байна. Салбарын мэргэжилтнүүд сая дахь жуулчныг арванхоёрдугаар сарын эхээр хүлээн авна гэж үзэж байна.\n\nНэг сая жуулчин хүлээн авах нь Монгол Улсын хувьд анхны тохиолдол болох бөгөөд аялал жуулчлалын салбарыг эдийн засгийн тэргүүлэх чиглэлийн нэг болгон хөгжүүлэх бодлогын хүрээнд хэрэгжиж байгаа юм. Жуулчдын тоо нэмэгдэх нь зочид буудал, тээвэр, хоолны газар зэрэг үйлчилгээний салбарын орлогыг нэмэгдүүлж, орон нутгийн ажлын байрыг дэмждэг.\n\nМонгол Улс байгалийн үзэсгэлэнт газар, нүүдэлчин соёл, түүхэн дурсгалт газруудаараа жуулчдыг татдаг бөгөөд сүүлийн жилүүдэд агаарын тээврийн чиглэл, визний хөнгөлөлтийг өргөжүүлэн ажиллаж байна.", textEn:"Mongolia received 958,470 foreign tourists from January 1 to November 15 this year, bringing it close to its goal of welcoming one million visitors. Industry specialists expect the millionth visitor to arrive in early December.\n\nReaching one million tourists would be a first for Mongolia, and it comes as part of a policy to develop tourism as one of the leading sectors of the economy. More visitors increase revenue for hotels, transport and restaurants and support jobs in the regions.\n\nMongolia attracts visitors with its natural landscapes, nomadic culture and historic sites, and in recent years it has expanded air routes and visa exemptions."},
  {id:9, cat:"oron-nutag", title:"Арваннэгдүгээр сарын 22-23-нд ихэнх нутгаар цас орж, шөнөдөө 32 хэм хүрч хүйтрэнэ", titleEn:"Snow across most of the country on November 22-23; nights down to minus 32", time:"45 мин", timeEn:"45 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Mong%20winter1%20-%20panoramio.jpg?width=760", text:"Цаг уур, орчны шинжилгээний газраас арваннэгдүгээр сарын 22-23-нд ихэнх нутгаар цас орж, цасан шуурга шуурна гэж анхаарууллаа. Арваннэгдүгээр сарын 22-нд Хөвсгөл, Сэлэнгэ, Булганы зарим сум, Төв, Хэнтийн хойд сумдын нутгаар, 23-нд Сэлэнгийн зүүн, Хэнтий, Дорнодын хойд, Төв аймгийн зүүн хойд сумдын нутгаар 0.1-2.0 миллиметр цас орж, цасан шуурга шуурах төлөвтэй байна.\n\nСалхи ихэнх хугацаанд говь, тал, хээрийн нутгаар зарим үед секундэд 14-16 метр хүрч ширүүснэ. Шөнөдөө Дархадын хотгор, Завхан, Заг, Байдраг голын эх, Хүрэнбэлчир орчмоор 27-32 хэм, Алтай, Хангай, Хөвсгөл, Хэнтийн уулархаг нутаг, Идэр, Тэс, Туул, Тэрэлж голын хөндийгөөр 20-25 хэм, говийн бүс нутгийн өмнөд хэсгээр 8-13 хэм, бусад нутгаар 14-19 хэм хүйтэн байна.\n\nӨдөртөө Дархадын хотгор, Завхан, Заг, Байдраг, Хүрэнбэлчир орчим, Идэр, Тэс голын хөндийгөөр 14-19 хэм, говийн бүс нутгийн өмнөд хэсгээр 1-6 хэм, бусад нутгаар 6-11 хэм хүйтэн байх төлөвтэй байна. Улаанбаатар хот орчмоор үүлшинэ, шөнөдөө ялимгүй цас орж, өдөртөө 5-7 хэм хүйтэн байна.\n\nМалчид, иргэд, тээвэрчид хол замд гарахдаа цаг агаарын мэдээг тогтмол авч, замын нөхцөл байдлыг урьдчилан шалгахыг цаг уурын байгууллагаас анхааруулж байна. Энэ өвөл олон жилийн дунджаас 5 хэмээр хүйтэн байх төлөвтэй байгаа бөгөөд 330 сумын 290 нь зудын эрсдэлтэй гэж үнэлэгдсэн юм.", textEn:"The National Agency for Meteorology and Environmental Monitoring has warned of snow and blizzards across most of the country on November 22-23. On November 22, snow of 0.1-2.0 millimetres and blizzards are expected in some soums of Khuvsgul, Selenge and Bulgan and in northern soums of Tuv and Khentii, and on November 23 in eastern Selenge, Khentii, northern Dornod and north-eastern soums of Tuv.\n\nWinds will at times reach 14-16 metres per second across the Gobi, steppe and field regions. Overnight, temperatures will fall to minus 27-32 degrees in the Darkhad depression, around the sources of the Zavkhan, Zag and Baidrag rivers and Khurenbelchir, minus 20-25 in the Altai, Khangai, Khuvsgul and Khentii mountains and the valleys of the Ider, Tes, Tuul and Terelj rivers, minus 8-13 in the southern Gobi, and minus 14-19 elsewhere.\n\nDaytime temperatures will be minus 14-19 in the Darkhad depression and around the Zavkhan, Zag and Baidrag sources, minus 1-6 in the southern Gobi and minus 6-11 elsewhere. Around Ulaanbaatar it will be mostly cloudy with slight snow overnight and minus 5-7 degrees during the day.\n\nHerders, residents and drivers are urged to follow weather updates and check road conditions before long journeys. This winter is expected to be 5 degrees colder than the long-term average, and 290 of the country's 330 soums have been assessed as being at dzud risk.", region:"selenge"},
  {id:10, cat:"delhii", title:"Оросын пуужин Польш улсад унаж, НАТО «ноцтой зөрчил» гэж мэдэгдэв", titleEn:"Russian missiles land in Poland; NATO calls it a grave violation", time:"30 мин", timeEn:"30 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Castle%20Square%20%2822346p%29.jpg?width=760", text:"Оросын хоёр пуужин болон нэг нисгэгчгүй нисэх төхөөрөмж арваннэгдүгээр сарын 20-нд Польшийн зүүн өмнөд нутагт унаж, НАТО «ноцтой зөрчил» гэж мэдэгдлээ. Пуужингуудын нэг нь Польшийн агаарын хилд 80 километр нэвтэрч, 11 орны 2,800 цэрэг оролцож буй «Coalition 26.2» цэргийн сургуулилалт болж буй газраас 30 километр хүрэхгүй зайд унасан байна.\n\nПольшийн Ерөнхий сайд Дональд Туск үүнийг санаатай өдөөн хатгалга байж болзошгүй гэж мэдэгдсэн бөгөөд НАТО-гийн Ерөнхий нарийн бичгийн дарга Марк Рютте Польшийн нутаг дэвсгэрийн инч бүрийг хамгаална гэж мэдэгдлээ. НАТО сөнөөгч онгоцуудыг хөөргөж, Польшийн агаарын довтолгооноос хамгаалах бүх систем байлдааны бэлэн байдалд шилжсэн байна. Хэн ч гэмтэж, хохирол учраагүй бөгөөд Орос улс мэдээлэл гарах үед тайлбар хийгээгүй байв.\n\nМөн шөнө Орос Украин руу 400 гаруй дрон, 110 гаруй пуужин харвасан бөгөөд дор хаяж найман хүн амиа алдсан байна. Ерөнхийлөгч Володимир Зеленскийн төрөлх хот Кривой Рогт баллистик пуужин тусч, долоон настай хүү, 20 настай эмнэлгийн ажилтан амиа алдаж, 60 хүн шархадсан юм. Киевт гүүрнүүд, Львовт галт тэрэгний буудал өртсөн гэж мэдээлж байна.", textEn:"Two Russian missiles and a drone came down in south-eastern Poland on November 20, and NATO called it a grave violation. One of the missiles penetrated 80 kilometres into Polish airspace, landing less than 30 kilometres from the 'Coalition 26.2' military exercise involving 2,800 troops from 11 countries.\n\nPolish Prime Minister Donald Tusk said it may have been a deliberate provocation, and NATO Secretary-General Mark Rutte said the alliance would defend every inch of Polish territory. NATO scrambled fighter jets and Poland put all of its air defence systems on combat alert. Nobody was hurt and no damage was reported, and Russia had not commented when the reports appeared.\n\nThe same night, Russia fired more than 400 drones and more than 110 missiles at Ukraine, killing at least eight people. A ballistic missile hit Kryvyi Rih, the hometown of President Volodymyr Zelenskyy, killing a seven-year-old boy and a 20-year-old paramedic and wounding 60 people. Bridges in Kyiv and a railway station in Lviv were also reported hit."},
  {id:11, cat:"delhii", title:"Иран Хормузын хоолойд танкерууд руу довтолж, Персийн булангийн хурцадмал байдал нэмэгдэв", titleEn:"Iran attacks tankers in Strait of Hormuz as Gulf tensions rise", time:"45 мин", timeEn:"45 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Oil%20tanker%20off%20of%20the%20Yemen%20coast%20%28oil-tanker-yemen-coast%29.jpg?width=760", text:"Ираны цэргийн хүчин Хормузын хоолойд танкерууд руу довтолж, Персийн булангийн хурцадмал байдал улам нэмэгдлээ. Ираны тэнгисийн цэргийн мэдээлснээр нэг танкер хоолойн зүүн хэсэгт тэнгисийн минад өртөж шатсан бөгөөд тусдаа довтолгоонд Оманы Хасаб боомтоос хойд зүгт 15 километр орчимд танкер руу пуужин харваж, гал гарсан байна. Хүний амь нас, байгаль орчинд хохирол учраагүй гэж мэдээлж байна.\n\nАНУ Ираны газрын тосны дөрвөн итгэмжлэгдсэн төлөөлөгчид хориг арга хэмжээ авсан бөгөөд Ерөнхийлөгч Дональд Трамп Ирантай холбоотой шийдвэр гаргахдаа яарахгүй, 2027 он хүртэл шийдвэрээ хойшлуулж магадгүй гэж мэдэгдсэн байна. Ираны Гадаад хэргийн сайд Тегеран дайныг дипломат аргаар дуусгахыг эрмэлзэж байгаа гэж хэлсэн бол Трамп Иран гэрээ хийхийг хүсч байгаа ч өөрийнх нь хүлээн зөвшөөрөх гэрээг хийхийг хүсэхгүй байна гэж мэдэгдлээ.\n\nПерсийн булан дахь дайн ес дэх сардаа орж байгаа бөгөөд талуудын хооронд цэргийн ажиллагаа, хориг арга хэмжээ үргэлжилж байна. Хормузын хоолой нь дэлхийн газрын тосны тээврийн гол зам бөгөөд тэндхийн хурцадмал байдал дэлхийн эрчим хүчний зах зээлд нөлөөлж болзошгүй гэж шинжээчид анхааруулж байна.", textEn:"Iranian forces have attacked tankers in the Strait of Hormuz, raising tensions in the Gulf still further. According to Iran's navy, one tanker caught fire after hitting a naval mine east of the strait, and in a separate attack a missile struck a tanker about 15 kilometres north of Oman's Khasab port, starting a fire. No casualties or environmental damage were reported.\n\nThe United States imposed sanctions on four Iranian oil trustees, and President Donald Trump said he was not rushing decisions on Iran and might not decide until 2027. Iran's foreign minister said Tehran still wanted a diplomatic end to the war, while Trump said Iran wanted a deal, but not one acceptable to him.\n\nThe war in the Gulf is in its ninth month, with military operations and sanctions continuing. The Strait of Hormuz is a main route for world oil transport, and analysts warn that tensions there could affect global energy markets."},
  {id:12, cat:"delhii", title:"Хуситууд Эр-Рияд руу пуужин харваж, Саудын эвсэл сөнөөв", titleEn:"Houthis fire missiles at Riyadh; Saudi coalition intercepts them", time:"1 цаг", timeEn:"1 hour", img:"https://commons.wikimedia.org/wiki/Special:FilePath/King%20Abdullah%20Financial%20District%20%28KAFD%29%2C%20Riyadh%2C%20Saudi%20Arabia%2C%202026.jpg?width=760", text:"Йемений хуситууд арваннэгдүгээр сарын 20-21-нд Саудын Арабын нийслэл Эр-Рияд болон Жазан муж руу баллистик пуужин харваж, Саудын тэргүүлсэн эвсэл тэдгээрийг сөнөөсөн гэж мэдэгдлээ. Эвсэл Эр-Рияд руу чиглэсэн гурван пуужин, Жазан руу чиглэсэн хоёр пуужинг сөнөөсөн байна.\n\nҮүнээс өмнө хуситуудын пуужин Эр-Риядын санхүүгийн дүүрэгт байрлах Нийтийн хөрөнгө оруулалтын сангийн цамхагийг гэмтээж, хэд хэдэн давхрын цонх хагарсан бөгөөд хэн ч гэмтээгүй байна. Мөн хуситууд Аль-Шукайк цахилгаан станц, Жазан боомт руу довтолсон гэж мэдэгдсэн бол эвсэл Ходейда боомт болон Сана, Саада, Таиз дахь хуситуудын 60 гаруй байг цохилтонд өртүүлсэн байна.\n\nХуситуудын мэдээлснээр эвслийн цохилтонд 24 цагийн дотор 41 хүн амиа алдсан бөгөөд НҮБ хурцадмал байдал нэмэгдэхээс сэрэмжлүүллээ. Саудын Араб өөрийн нутаг дэвсгэрт халдахыг тэвчихгүй гэж мэдэгдсэн бөгөөд Йемений дайн олон жил үргэлжилж, бүс нутгийн аюулгүй байдалд ноцтой аюул учруулж байна.", textEn:"Yemen's Houthis fired ballistic missiles at the Saudi capital Riyadh and Jazan province on November 20-21, and the Saudi-led coalition said it intercepted them. The coalition said it shot down three missiles headed for Riyadh and two headed for Jazan.\n\nEarlier, a Houthi missile damaged the Public Investment Fund Tower in Riyadh's financial district, breaking windows on several floors; nobody was hurt. The Houthis also said they attacked the Al-Shuqaiq power station and Jazan port, while the coalition said it struck Hodeidah port and more than 60 Houthi targets in Sanaa, Saada and Taiz.\n\nThe Houthis said 41 people were killed in coalition strikes within 24 hours, and the United Nations warned against escalation. Saudi Arabia said it would not tolerate attacks on its territory. The war in Yemen has lasted many years and poses a serious threat to regional security."},
  {id:13, cat:"delhii", title:"Перугийн төв хэсэгт 6.7 магнитудын газар хөдлөлт болов", titleEn:"6.7-magnitude earthquake strikes central Peru", time:"1 цаг", timeEn:"1 hour", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Andes%20-%20Anden%20-%2029526977937.jpg?width=760", text:"Перугийн төв хэсэгт арваннэгдүгээр сарын 20-ны орой 6.7 магнитудын хүчтэй газар хөдлөлт болж, нийслэл Лима хотод ч мэдрэгдсэн байна. АНУ-ын Геологийн албаны мэдээлснээр газар хөдлөлт орон нутгийн цагаар 19:09 цагт болж, голомт нь Хунин хотоос хойд зүгт 34 километр, 108 километрийн гүнд байрлаж байжээ.\n\nПеругийн Батлан хамгаалах яамны мэдээлснээр Хунин мужийн хэд хэдэн газарт байшин барилга бага зэрэг эвдэрч, цахилгаан тасарч, авто зам хаагдсан байна. Газар хөдлөлт нь Анкаш, Ика, Укаяли, Серро-де-Паско, Уануко, Каллао мужуудад ч мэдрэгдсэн бөгөөд уулсын энгэрт хөрсний гулсалт, чулуу нурсан тохиолдол гарсан байна.\n\nХүн амиа алдсан, гэмтсэн тухай мэдээлэл гараагүй бөгөөд Перугийн Геофизикийн хүрээлэнгийн дарга газар хөдлөлт хүчтэй мэдрэгдсэн гэж мэдэгдлээ. Перу улс Номхон далайн «Галт цагираг» хэмээх газар хөдлөлтийн идэвхтэй бүсэд оршдог бөгөөд энэ нь Япон, Зүүн Өмнөд Азийг дамжин Номхон далайг тойрсон газар хөдлөлтийн идэвхтэй нумыг хэлдэг.", textEn:"A powerful 6.7-magnitude earthquake struck central Peru on the evening of November 20 and was felt in the capital, Lima. According to the US Geological Survey, the quake occurred at 7:09 p.m. local time, with its epicentre 34 kilometres north of the city of Junin at a depth of 108 kilometres.\n\nPeru's Defence Ministry said homes in several parts of Junin were slightly damaged, electricity was cut off and highways were closed. The quake was also felt in Ancash, Ica, Ucayali, Cerro de Pasco, Huanuco and Callao, and landslides and rockfalls occurred on hillsides.\n\nNo fatalities or injuries were reported, and the head of Peru's Geophysical Institute said the shaking was intense. Peru lies on the Pacific 'Ring of Fire', an arc of intense seismic activity stretching from Japan through Southeast Asia and across the Pacific."},
  {id:14, cat:"delhii", title:"COP31 хэлэлцээ сунгагдаж, чулуужсан түлшний асуудлаар санал зөрөлдөв", titleEn:"COP31 talks stretch into overtime as countries remain divided on fossil fuels", time:"2 цаг", timeEn:"2 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Antalya%2C%20Turkey%20-%20panoramio%20%281%29.jpg?width=760", text:"Туркийн Анталья хотноо болж буй НҮБ-ын Уур амьсгалын өөрчлөлтийн тухай суурь конвенцын талуудын 31 дүгээр бага хурал буюу COP31-ийн хэлэлцээ арваннэгдүгээр сарын 21-нд сунгагдаж, улс орнууд гол асуудлаар санал зөрөлдсөөр байна.\n\nХэлэлцээчид гэрээний төслийг товчилж, чулуужсан түлшний хэрэглээг зогсоох тухай ямар ч заалт оруулаагүй нь уур амьсгалын өөрчлөлтийн эсрэг тэмцэлд чулуужсан түлшний хэрэглээг үе шаттайгаар бууруулах нь чухал гэж үздэг улс орнууд, байгаль орчны байгууллагуудын шүүмжлэлийг дагуулсан юм. Уур амьсгалын эрдэмтдийн үзэж буйгаар дэлхийн дулаарлыг 1.5 хэмд барихын тулд чулуужсан түлшний хэрэглээг хурдан бууруулах шаардлагатай байна.\n\nХөгжиж буй орнууд санхүүжилт, дасан зохицох арга хэмжээний талаар тодорхой амлалт шаардаж байгаа бол чулуужсан түлш үйлдвэрлэгч орнууд эрчим хүчний шилжилтийг аажмаар хийх байр суурь баримталж байна. Мөн Уур амьсгалын өөрчлөлтийн асуудлаарх Засгийн газар хоорондын зөвлөлийн тайланг нийтлэх асуудал улс төрийн маргааны сэдэв болж байгаа юм. Эцсийн гэрээнд чулуужсан түлшний талаарх заалт орох эсэх нь хэлэлцээний сүүлийн өдрүүдэд шийдэгдэх төлөвтэй байна.", textEn:"Negotiations at COP31, the 31st Conference of the Parties to the UN Framework Convention on Climate Change, under way in Antalya, Turkey, were extended into overtime on November 21, with countries still divided on key issues.\n\nNegotiators slimmed down the draft deal and left out any provision on ending fossil fuel use, drawing criticism from countries and environmental groups that regard a phased reduction in fossil fuel use as essential to fighting climate change. Climate scientists say fossil fuel use must fall quickly to keep global warming to 1.5 degrees.\n\nDeveloping countries are demanding clear commitments on finance and adaptation, while fossil fuel producing countries favour a gradual energy transition. Publishing the report of the Intergovernmental Panel on Climate Change has also become a subject of political dispute. Whether the final agreement will contain a provision on fossil fuels is expected to be decided in the closing days of the talks."},
  {id:15, cat:"delhii", title:"Зеленский: Хятадын дээд хэмжээний уулзалт Оросын хувьд «маш амжилтгүй» болов", titleEn:"Zelenskyy: China summit was 'very unsuccessful' for Russia", time:"2 цаг", timeEn:"2 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Skyline%20in%20Shenzhen%20%2820250327%29.jpg?width=760", text:"Украины Ерөнхийлөгч Володимир Зеленский Хятадын Шэньжэнь хотод болсон АНУ, Хятад, Оросын удирдагчдын анхны гурван талт дээд хэмжээний уулзалт Оросын хувьд «маш амжилтгүй» болсон гэж мэдэгдлээ. Уулзалтын дараа талууд «Энх тайвны төлөөх тунхаглал» гаргасан билээ.\n\nАНУ-ын Ерөнхийлөгч Дональд Трамп Оросын Ерөнхийлөгч Владимир Путин Украинд хийж буй дайнаа зогсоохыг хүсч байгаа гэдэгт итгэж байгаагаа мэдэгдэж, Украины асуудлаар тохиролцоонд хүрэх «бодит сайн боломж» байгаа гэж хэлсэн байна. Тэрбээр Путин, Зеленский нарын хооронд «асар их үзэн ядалт» байгаа нь тохиролцоонд хүрэхэд хүндрэл учруулж байна гэж үзэж байгаа юм.\n\nЗеленскийн мэдэгдэл нь Трамп Путинийг өмгөөлж, Ираныг хэлэлцээнд үнэнч бус байна гэж буруутгасан Цагаан ордны хэвлэлийн бага хурлын дараа гарсан байна. Мөн Трамп Хятад улс гурван талт цөмийн зэвсгийг хорогдуулах хэлэлцээнд оролцохыг зөвшөөрсөн гэж мэдэгдсэн юм. Украины дайныг дуусгах хэлэлцээ үргэлжилж байгаа бөгөөд талуудын байр суурь зөрүүтэй хэвээр байна.", textEn:"Ukrainian President Volodymyr Zelenskyy said the first trilateral summit of the leaders of the United States, China and Russia, held in Shenzhen, China, was 'very unsuccessful' for Russia. After the meeting, the parties issued a 'Declaration Towards Peace'.\n\nUS President Donald Trump said he believed Russian President Vladimir Putin wanted to end the war in Ukraine and that there was a 'real good chance' of reaching a settlement on Ukraine. He said 'tremendous hatred' between Putin and Zelenskyy was complicating any agreement.\n\nZelenskyy's remarks came after Trump's White House news conference, at which he defended Putin and accused Iran of negotiating in bad faith. Trump also said China had agreed to join trilateral talks on reducing nuclear arsenals. Talks to end the war in Ukraine continue, with the parties' positions still far apart."},
  {id:16, cat:"sport", title:"Сүмо: Оносато, Вакамотохарү 12-2-оор тэнцэж, өнөөдөр аварга тодорно", titleEn:"Sumo: Onosato and Wakamotoharu tied at 12-2 as champion is decided today", time:"30 мин", timeEn:"30 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Sumo%20wrestlers.jpg?width=760", text:"Японы Фүкүока хотод болж буй мэргэжлийн сүмогийн Кюүшү башёгийн 14 дэх өдөр буюу арваннэгдүгээр сарын 21-нд ёкозүна Оносато, маэгашира Вакамотохарү нар 12 даваа, 2 унаатайгаар тэргүүлэгчдийн байранд тэнцэж, өнөөдөр буюу арваннэгдүгээр сарын 22-нд болох сүүлийн өдрийн барилдаанаар аварга тодорно.\n\nОносато Казахстаны Кинбозаныг ялж, тэмцээний 12 дахь ялалтаа байгуулсан бол Вакамотохарү озэки Аонишикийг ялж, түүнийг 6 даваа, 8 унаатайгаар унааны тоогоо баталгаажууллаа. Аонишики 10 дахь өдрөөс хойш хөлөндөө бэртэл авсан бололтой ялалт байгуулаагүй байна. Сэкиваке Атамифүжи озэки Киришимаг ялж, 11 даваа, 3 унаатайгаар аваргын төлөөх өрсөлдөөнд үлдлээ.\n\nЁкозүна Хошорюү С.Бямбасүрэн озэки Котосакураг ялж, тав дахь дараалан ялалтаа байгуулж, 9 даваа, 5 унаатай боллоо. Энэ нь өвдөгний мэс заслын дараа эргэн ирж байгаа түүний хувьд чухал амжилт юм. Сүүлийн өдөр Оносато Хошорюүтэй, Вакамотохарү Атамифүжитэй барилдах бөгөөд тэргүүлэгчид тэнцвэл нэмэлт барилдаанаар аваргыг тодруулна. Кюүшү башё нь оны сүүлийн их тэмцээн бөгөөд Оносато хоёр дахь удаагаа дараалан түрүүлэхээр өрсөлдөж байна.", textEn:"On day 14 of the Kyushu basho professional sumo tournament in Fukuoka, Japan, on November 21, yokozuna Onosato and maegashira Wakamotoharu stayed tied at the top with 12 wins and 2 losses, and the champion will be decided on the final day today, November 22.\n\nOnosato beat Kazakhstan's Kinbozan for his 12th win, while Wakamotoharu beat ozeki Aonishiki, consigning him to a losing record at 6-8. Aonishiki has not won since appearing to suffer a leg injury on day 10. Sekiwake Atamifuji beat ozeki Kirishima and stayed in the title race at 11-3.\n\nYokozuna Hoshoryu S. Byambasuren beat ozeki Kotozakura for a fifth straight win and now stands at 9-5, an important result as he returns from knee surgery. On the final day, Onosato meets Hoshoryu and Wakamotoharu meets Atamifuji; if the leaders finish level, a playoff will decide the title. The Kyushu basho is the year's final grand tournament, and Onosato is chasing a second straight championship."},
  {id:17, cat:"sport", title:"Г.Болор-Эрдэнэ пара таеквондогийн ДАШ-ий хагас шигшээд шалгарлаа", titleEn:"G. Bolor-Erdene reaches para taekwondo world semi-final", time:"1 цаг", timeEn:"1 hour", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Taekwondo%20tournament.jpg?width=760", text:"БНСУ-ын Мүжү хотноо үргэлжилж буй пара таеквондогийн дэлхийн аварга шалгаруулах тэмцээнд Монголын гавьяат тамирчин Г.Болор-Эрдэнэ эрэгтэйчүүдийн 63 кг-ын жинд хагас шигшээд шалгарлаа. Тэрбээр шөвгийн наймд Мароккогийн Айюб Адоуичийг 2:0-ээр ялсан юм.\n\nАдоуич нь «Парис-2024» паралимпын наадмын хүрэл медальтан бөгөөд түүнийг ялсан нь Г.Болор-Эрдэний хувьд чухал амжилт болж байна. Өмнөх өдөр нь хөдөлмөрийн баатар У.Сүрэнжав эмэгтэйчүүдийн K44 ангиллын 52 кг-ын жинд хүрэл медаль хүртэж, Монголын багийн анхны медалийг авчирсан билээ.\n\nӨнөөдөр эрэгтэйчүүдийн 70 кг-ын жинд олон улсын хэмжээний мастер Б.Шинэбаяр дэвжээнд гарна. Монголын пара таеквондогийн тамирчид дэлхийн аварга шалгаруулах тэмцээнд тогтмол амжилт гаргаж, олон улсын тавцанд өрсөлдөх чадвараа харуулж байна.", textEn:"Honoured athlete G. Bolor-Erdene has reached the semi-final of the men's under-63-kilogram category at the Para Taekwondo World Championships under way in Muju, South Korea. He beat Morocco's Ayoub Adouich 2-0 in the quarter-final.\n\nAdouich is a bronze medallist from the Paris 2024 Paralympic Games, so beating him is an important result for Bolor-Erdene. The previous day, Labour Hero U. Surenjav won the bronze medal in the women's K44 under-52-kilogram category, Mongolia's first medal of the championships.\n\nToday, international master B. Shinebayar will compete in the men's under-70-kilogram category. Mongolia's para taekwondo athletes regularly achieve success at world championships, showing their competitiveness on the international stage."},
  {id:18, cat:"soyol", title:"«Нуанс» хамтлагийн 25 жилийн ойн тоглолт болов", titleEn:"Nuans marks 25th anniversary with gala concert", time:"2 цаг", timeEn:"2 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Concert%20stage%20of%20Severance%20Hall.jpg?width=760", text:"Монголын анхны «попера» хамтлаг болох «Нуанс» хамтлаг үүсгэн байгуулагдсаны 25 жилийн ойн баярын тоглолтоо арваннэгдүгээр сарын 21-нд Улаанбаатар хотын Төв соёлын ордонд хийлээ. «Попера» нь поп хөгжим, дуурийн урлагийг хослуулсан хэв маягийг хэлдэг.\n\n«Нуанс» хамтлаг 2001 онд байгуулагдсан бөгөөд сонгодог дуурийн хоолой, орчин үеийн поп хөгжмийг хослуулсан уран бүтээлээрээ Монголын хөгжмийн урлагт өөрийн гэсэн байр суурийг эзэлсэн юм. Тус хамтлаг 25 жилийн турш тайзан дээр тоглож, олон үеийн сонсогчдод хүрсэн байна.\n\nОйн тоглолт нь хамтлагийн уран бүтээлийн замналыг дүгнэж, сонсогчидтойгоо уулзах боломж болсон бөгөөд Монголын хөгжмийн урлагийн хөгжилд оруулсан хувь нэмрийг нь тэмдэглэж байна. Мөн энэ өдрүүдэд Монголын уран бүтээлчид Венецийн 61 дүгээр олон улсын урлагийн үзэсгэлэнд «Энтанглементс» үзэсгэлэнгээр оролцож байгаа бөгөөд үзэсгэлэн арваннэгдүгээр сарын 22-нд өндөрлөнө.", textEn:"Nuans, Mongolia's first 'popera' group, held a gala concert at the Central Cultural Palace in Ulaanbaatar on November 21 to mark the 25th anniversary of its founding. 'Popera' is a style that combines pop music with operatic singing.\n\nFounded in 2001, Nuans has earned its own place in Mongolian music by combining classical operatic voices with modern pop music. The group has performed on stage for 25 years, reaching many generations of listeners.\n\nThe anniversary concert was a chance to look back on the group's creative journey and meet its audiences, and to mark its contribution to the development of Mongolian music. Mongolian artists are also currently taking part in the 61st Venice International Art Exhibition with the exhibition 'Entanglements', which closes on November 22."},
  {id:19, cat:"tech", title:"Өмнөд Солонгосын Ерөнхийлөгч Ли: хиймэл оюун ухааны өрсөлдөөнд хурд шийдвэрлэнэ", titleEn:"South Korea's Lee: speed is decisive in the AI race", time:"2 цаг", timeEn:"2 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/BalticServers%20data%20center.jpg?width=760", text:"Өмнөд Солонгосын Ерөнхийлөгч Ли Жэ Мён арваннэгдүгээр сарын 21-нд Улсан хотод барьж буй хиймэл оюун ухааны дата төвийн барилгын талбайд зочилж, дэлхийн хиймэл оюун ухааны өрсөлдөөнд хурд шийдвэрлэх үүрэгтэй гэж мэдэгдлээ. «Бүх дэлхий одоо өрсөлдөж байна, хурд чухал» гэж тэрбээр хэлсэн байна.\n\nУг дата төвийг Өмнөд Солонгосын хоёр дахь том конгломерат SK групп Amazon Web Services компанитай хамтран барьж байгаа бөгөөд 2029 он хүртэлх зардал нь 7 их наяд вон буюу 5.2 тэрбум ам.доллар орчим болно. Төвийн үйл ажиллагаа 2027 оны хоёрдугаар хагаст эхлэх бөгөөд 2029 он гэхэд 103 мегаваттын хүчин чадалтай болж, дараа нь 900 мегаватт орчмоор өргөжих төлөвтэй байна.\n\nЛи Ерөнхийлөгч хиймэл оюун ухааны хөрөнгө оруулалт гол төлөв Сөүл орчимд төвлөрч байгаа бөгөөд Улсан дахь төсөл нь бүс нутгийн өсөлт боломжтойг харуулж байна гэж мэдэгдлээ. Тэрбээр уг төслийн амжилт нь дэлхийн хиймэл оюун ухааны компаниудын нэмэлт хөрөнгө оруулалтыг татна гэж найдаж байгаа юм. Мөн Солонгосын Засгийн газар хиймэл оюун ухааны төсвөө ирэх онд 10.1 их наяд вон буюу 7 тэрбум ам.доллар болгон гурав дахин нэмэгдүүлж, дэлхийн хиймэл оюун ухааны тэргүүлэх гурван гүрний нэг болохыг зорьж байна.", textEn:"South Korean President Lee Jae Myung visited the construction site of an AI data centre in Ulsan on November 21 and said speed is decisive in the global race for artificial intelligence. 'The whole world is competing right now, and speed is vital,' he said.\n\nThe data centre is being built by SK Group, South Korea's second-largest conglomerate, jointly with Amazon Web Services, at an estimated cost of 7 trillion won, about 5.2 billion US dollars, through 2029. Operations are scheduled to begin in the second half of 2027, with initial capacity of 103 megawatts by 2029 and plans to expand by nearly 900 megawatts later.\n\nPresident Lee said AI investment had mainly been concentrated around Seoul, and that the Ulsan project showed regional growth was possible. He said he hoped the project's success would draw further investment from global AI companies. The South Korean government is also tripling its AI budget to 10.1 trillion won, about 7 billion dollars, for next year, aiming to become one of the world's top three AI powers."},
];



function aTitle(a){ return LANG === "en" ? (a.titleEn || a.title) : a.title; }
function aTime(a){ return LANG === "en" ? (a.timeEn || a.time) : a.time; }
function aText(a){ if(a.text) return LANG === "en" ? (a.textEn || a.text) : a.text; return SAMPLE_TEXT[LANG][a.id === 1 ? "long" : "short"]; }
function aRegion(a){ return a.region ? ((REGIONS[LANG] && REGIONS[LANG][a.region]) || a.region) : ""; }

// ===== Ханш · Цаг агаар (өдөр бүр шинэчлэгдэнэ; цаг агаарыг Open-Meteo-гоос шууд татна) =====
const RATES = {date:"2026-11-22", items:[
  {code:"USD", mnt:3607.00, chg:0}, {code:"EUR", mnt:3961.93, chg:0}, {code:"JPY", mnt:22.66, chg:0},
  {code:"CNY", mnt:540.35, chg:0}, {code:"KRW", mnt:2.70, chg:0}, {code:"RUB", mnt:44.04, chg:0}, {code:"GBP", mnt:4730.40, chg:0}
]};
let WEATHER = [
  {city:"Улаанбаатар", cityEn:"Ulaanbaatar", lat:47.9212, lon:106.9186, tz:"Asia/Ulaanbaatar", temp:-15, code:1},
  {city:"Токио", cityEn:"Tokyo", lat:35.6762, lon:139.6503, tz:"Asia/Tokyo", temp:5, code:0},
  {city:"Сөүл", cityEn:"Seoul", lat:37.5665, lon:126.978, tz:"Asia/Seoul", temp:-4, code:0},
  {city:"Бээжин", cityEn:"Beijing", lat:39.9042, lon:116.4074, tz:"Asia/Shanghai", temp:-1, code:0},
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
  {yt:"px2DhtIE2x4", title:"ОХУ-ын пуужин, дрон Польшийн агаарын хилд нэвтэрчээ", titleEn:"Russian missiles and drones entered Polish airspace", src:"МҮОНТ", srcEn:"MNB", srcFull:"МҮОНТ (Монголын үндэсний олон нийтийн телевиз)", srcFullEn:"MNB (Mongolian National Broadcaster)"},
  {yt:"NQqC-AtDvvU", title:"Ж.Хуаныг NVIDIA-ийн захирлаар буцааж томилохыг уриалав", titleEn:"Calls to reinstate Jensen Huang as Nvidia CEO", src:"МҮОНТ", srcEn:"MNB", srcFull:"МҮОНТ (Монголын үндэсний олон нийтийн телевиз)", srcFullEn:"MNB (Mongolian National Broadcaster)"},
  {yt:"N4ivpea9pO8", title:"Санчир гарагийн зочин: Монгол Улсын Ардын жүжигчин, хөгжмийн зохиолч А.Энхтайван", titleEn:"Guest of Saturn: People's Artist of Mongolia, composer A. Enkhtaivan", src:"Eagle TV", srcEn:"Eagle TV", srcFull:"Eagle TV (Ийгл телевиз)", srcFullEn:"Eagle TV"},
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
