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

// ===== Бодит мэдээнүүд (2026-11-09) — өдөр бүр шинэчлэгдэнэ =====
const ARTICLES = [
  {id:1, cat:"uls-tor", title:"Ерөнхий сайд Н.Учрал Сайншанд иргэдтэй уулзаж, төсөв, цалин, тэтгэврийн талаар танилцууллаа", titleEn:"PM Uchral meets Sainshand residents, presents budget, salary and pension plans", time:"15 мин", timeEn:"15 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/2018-08-11%20155233%20Ulaanbaatar%20Parliament%20anagoria.jpg?width=1000", text:"Ерөнхий сайд Н.Учрал “Ерөнхий сайдаас шууд асуу” уулзалтын хүрээнд өчигдөр /2026.11.08/ Дорноговь аймгийн Сайншанд суманд ажиллаж, Засгийн газрын бодлого, эдийн засгийн нөхцөл байдал, 2026 оны улсын төсвийн тодотгол, 2027 оны улсын төсвийн төслийн талаар аймгийн иргэдэд мэдээлэл өгч, тэдний асуултад хариуллаа.\n\nЕрөнхий сайд 2026 оны төсвийн тодотголыг баталснаар өрхийн бодит орлогыг хамгаалах боломж бүрдсэн гэж тэмдэглэв. Төрийн зардлаас 1.4 их наяд төгрөг танаж, хэмнэлтээ боловсрол, эрүүл мэнд, төрийн үйлчилгээний албан хаагчдын цалинг нэмэхэд зарцуулж байгаа аж. Төрийн үйлчилгээний 52 мянган албан хаагчийн цалинг арваннэгдүгээр сарын 1-нээс нэмсэн бөгөөд ирэх онд төрийн нийт албан хаагчийн цалинг инфляцтай уялдуулан нэмэхээр төлөвлөжээ.\n\nТөрийн өмчит компаниудын 1.6 их наяд төгрөгийн цэвэр ашгийг төсөвт татсан бөгөөд баталгаат суурь тэтгэвэр 769 мянган төгрөгөөс нэг сая төгрөг болж нэмэгдсэн байна. Шинэ оноос тэтгэврийг инфляцтай уялдуулан нэмж, дундаж тэтгэвэр 1.3 сая гаруй төгрөг болох аж. Түүнчлэн 2027 оны төсвийн төслийг УИХ ирэх долоо хоногт батална гэж Ерөнхий сайд хэллээ.\n\n2027 оны төсвийн онцлох есөн шийдвэрийн дунд төсвийн орлогод татварын эзлэх хувийг 90-өөс 79 хувь болгон бууруулж, иргэд, аж ахуйн нэгжийг 1.3 их наяд төгрөгийн татвараас чөлөөлөх, төрийн албан хаагчдын цалинг 10–20 хувиар нэмэх зэрэг багтаж байна. Мөн ирэх онд 25 мянган айлыг орон сууцжуулж, ипотекийн зээлийн санхүүжилтийн 50 хувийг орон нутагт олгохоор төлөвлөжээ.\n\nЕрөнхий сайд ТӨК-иудын захирлуудыг 2027 оны нэгдүгээр сарын 1-нд чөлөөлж, нээлттэй сонгон шалгаруулалтаар шинээр томилно гэж мэдэгдлээ. Түүнчлэн Замын-Үүдийн “Гэгээн” нарны цахилгаан станцад түшиглэн Монголд анх удаа ачааны автомашин цэнэглэх эхлэл тавигдсан бөгөөд хилийн боомтод ачааны цахилгаан автомашинд зориулсан ногоон гарц нээнэ гэдгийг тэрбээр онцолсон юм.", textEn:"Prime Minister N. Uchral, as part of the “Ask the Prime Minister Directly” meetings, worked yesterday (2026.11.08) in Sainshand soum, Dornogovi aimag, informing residents about government policy, the economic situation, the 2026 state budget amendment and the draft 2027 state budget, and answering their questions.\n\nThe Prime Minister said adopting the 2026 budget amendment made it possible to protect households' real income. The state cut 1.4 trillion tugriks from its spending, channelling the savings into raising salaries in education, health and public services. Salaries of 52,000 public service employees were raised from November 1, and next year all civil servants' salaries are planned to rise in line with inflation.\n\nThe 1.6 trillion tugriks of net profit of state-owned companies was drawn into the budget, and the guaranteed base pension rose from 769,000 to one million tugriks. From the new year, pensions will be raised in line with inflation, with the average pension set to exceed 1.3 million tugriks. The Prime Minister also said parliament will approve the draft 2027 budget next week.\n\nAmong the nine key decisions in the 2027 budget are cutting the tax share of budget revenue from 90 to 79 percent, exempting citizens and businesses from 1.3 trillion tugriks of taxes, and raising civil servants' salaries by 10–20 percent. Next year 25,000 households are also planned to be housed, with 50 percent of mortgage financing going to the regions.\n\nThe Prime Minister said the directors of state-owned companies will be released on January 1, 2027, and newly appointed through open selection. He also stressed that, based on the “Gegeen” solar power plant in Zamyn-Uud, Mongolia has for the first time begun charging trucks, and a green corridor for electric trucks will open at the border crossing."},
  {id:2, cat:"uls-tor", title:"Оюутолгойн ногдол ашгийг иргэдэд тараах эсэх дээр байр суурь зөрсөөр байна", titleEn:"Positions still diverge over paying Oyu Tolgoi dividends directly to citizens", time:"30 мин", timeEn:"30 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Oyu%20Tolgoi%2007.JPG?width=760", text:"Оюутолгой төслөөс орж ирэх ногдол ашгийг иргэдийн дансанд шууд шилжүүлэх эсэх асуудлаар Ерөнхийлөгч, Засгийн газар, УИХ-ын гишүүдийн байр суурь зөрж байна. Ерөнхийлөгч У.Хүрэлсүх арваннэгдүгээр сарын 2-нд Ерөнхий сайд Н.Учрал, Сангийн сайд З.Мэндсайхан нарыг дуудан уулзаж, гурван их наяд төгрөгийн ногдол ашгийг орж ирсэн тухай бүрд нь иргэдийн дансанд шилжүүлэх чиглэл өгсөн юм.\n\nЕрөнхийлөгч D-Parliament цахим системд 100 мянга гаруй иргэн ногдол ашгийг өөрсдийн дансанд авах нь зүйтэй гэсэн санал өгснийг онцолж, ард түмний энэ саналыг хүндэтгэх ёстой гэж мэдэгдлээ. Тэрбээр байгалийн баялгийнхаа эхний хишгийг иргэдийн дансанд шилжүүлэх нь чухал гэж үзэж байна.\n\nХарин Сангийн сайд З.Мэндсайхан бэлэн мөнгө тараахгүй гэсэн байр суурьтай байгаагаа мэдэгдсэн бөгөөд Засгийн газар энэ асуудал дээр нэгдмэл байр суурьтай байгаа гэж мэдээлсэн байна. Хүчин төгөлдөр үйлчилж буй Үндэсний баялгийн сангийн тухай хуулиар Оюутолгойн ногдол ашиг Хуримтлалын, Хөгжлийн, Ирээдүйн өв санд төвлөрөх ёстой бөгөөд иргэд уг мөнгийг боловсрол, эрүүл мэнд, байрны ипотекийн урьдчилгаанд 2030 оноос зарцуулах эрхтэйгээр зохицуулсан юм.\n\nУИХ-ын гишүүн Б.Жаргалан Ерөнхийлөгч өөрийн бүрэн эрхэд хамаарахгүй асуудлаар Засгийн газарт чиглэл өгөх эрхгүй гэсэн байр суурийг илэрхийлсэн бол УИХ-ын дарга 100 мянган иргэний өргөдөлд УИХ хамгийн оновчтой шийдвэр гаргах ёстой гэж хэлжээ. Ногдол ашгийг бэлнээр тараахын тулд Баялгийн сангийн тухай хуульд өөрчлөлт оруулах шаардлагатай бөгөөд энэ нь УИХ-ын гишүүдийн гарт байгаа юм. Түүнчлэн “Оюутолгой” компанийн гүйцэтгэх захирал С.Мөнхсүх компани ашиггүй ажиллаж байгаа тул ногдол ашиг өгөх эсэх нь тодорхойгүй байгааг дурдсан байна.", textEn:"Positions diverge between the President, the Government and members of parliament over whether dividends from the Oyu Tolgoi project should be transferred directly to citizens' accounts. On November 2, President U. Khurelsukh summoned Prime Minister N. Uchral and Finance Minister Z. Mendsaikhan and directed that the three trillion tugriks of dividends be transferred to citizens' accounts as they arrive.\n\nThe President stressed that more than 100,000 citizens voted on the D-Parliament online system in favour of receiving the dividends in their own accounts, and said the people's view must be respected. He believes it is important to transfer the first benefits of the country's natural wealth to citizens' accounts.\n\nFinance Minister Z. Mendsaikhan, however, has said he opposes distributing cash, and the Government is said to hold a united position on the matter. Under the National Wealth Fund law now in force, Oyu Tolgoi dividends must go to the Savings, Development and Future Heritage funds, and citizens may use that money for education, health and mortgage down payments from 2030.\n\nMP B. Jargalan said the President has no right to direct the Government on a matter outside his authority, while the Speaker of Parliament said parliament must make the most optimal decision on the petition of 100,000 citizens. Paying the dividends in cash would require amending the Wealth Fund law, which rests with members of parliament. Oyu Tolgoi CEO S. Munkhsukh has also noted that, as the company is operating at a loss, whether it will pay dividends at all is uncertain."},
  {id:3, cat:"ediin-zasag", title:"Монгол Улс ачаа тээврээ шатахууны хамаарлаас салгах түүхэн алхмаа Замын-Үүдээс эхлүүллээ", titleEn:"Mongolia takes historic first step to free freight transport from fuel dependence in Zamyn-Uud", time:"45 мин", timeEn:"45 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/DAF%20XB%20190%20Electric%20FA%20IAA%20Transportation%202026%20(DSC6636).jpg?width=760", text:"Хүнд даацын цахилгаан ачааны машинаар ачаа тээвэрлэх сүлжээг хөгжүүлэх “Ногоон өртөө” төслийн сүүлийн туршилт арваннэгдүгээр сарын 7-нд Дорноговь аймгийн Замын-Үүд сумын “Гэгээн” нарны цахилгаан станцад амжилттай болж, төсөл туршилтын шатаа дуусган бүрэн хэрэгжилтийн шатанд шилжлээ.\n\nТуршилтад Ерөнхий сайд Н.Учрал биечлэн оролцож, төслийн явц, цаашдын төлөвлөгөөтэй газар дээр нь танилцсан байна. Төслийн хүрээнд Улаанбаатар–Замын-Үүд чиглэлийн 700 орчим км зам дагуу долоон байршилд нарны цахилгаан станц, эрчим хүч хуримтлуурын систем бүхий цэнэглэх өртөө байгуулна. Байршлууд нь Улаанбаатар, Багахангай, Сүмбэр, Айраг, Сайншанд, Эрдэнэ, Замын-Үүд юм.\n\nТөслийн хамгийн онцлох хэсэг нь Монгол Улсад анх удаа баригдах мегаватт хүчин чадлын цэнэглэх станц бөгөөд төслийг “Монложистикс Холдинг” хэрэгжүүлж байна. Төслийн тооцоогоор цахилгаан ачаа тээвэр нэвтэрснээр тээврийн зардлыг 30 хүртэл хувиар бууруулах боломжтой аж.\n\nТөсөл нь Засгийн газрын 2026 оны дөрөвдүгээр сарын 29-ний шийдвэрт үндэслэсэн бөгөөд Замын-Үүдийн “Гэгээн” станцад түшиглэн Монголд анх удаа ачааны автомашин цэнэглэх эхлэл тавигдсан байна. Хилийн боомтод ачааны цахилгаан автомашинд зориулсан ногоон гарц нээхээр төлөвлөж байгаа нь ачаа тээврийг шатахууны хамаарлаас салгах алхам болно гэж албаныхан үзэж байна.", textEn:"The final test of the “Green Station” project to develop a network for heavy-duty electric freight transport was successfully held on November 7 at the “Gegeen” solar power plant in Zamyn-Uud soum, Dornogovi aimag, and the project has now moved from the testing stage to full implementation.\n\nPrime Minister N. Uchral attended the test in person and reviewed the project's progress and plans on site. Under the project, charging stations with solar power plants and energy storage systems will be built at seven locations along the roughly 700-kilometre Ulaanbaatar–Zamyn-Uud road: Ulaanbaatar, Bagakhangai, Sumber, Airag, Sainshand, Erdene and Zamyn-Uud.\n\nThe most notable part of the project is the first megawatt-capacity charging station ever built in Mongolia, implemented by Monlogistics Holding. Project estimates say electric freight transport could cut transport costs by up to 30 percent.\n\nThe project is based on a Government decision of April 29, 2026, and the “Gegeen” station in Zamyn-Uud has now seen Mongolia's first truck charging. Officials say plans to open a green corridor for electric trucks at the border crossing will be a step towards freeing freight transport from dependence on fuel."},
  {id:4, cat:"niigem", title:"Төр, нийгмийн нэрт зүтгэлтэн, хурандаа генерал С.Лувсангомбо 102 насандаа таалал төгсжээ", titleEn:"Prominent statesman and Colonel General S. Luvsangombo dies aged 102", time:"1 цаг", timeEn:"1 hour", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Military%20parade%20mongolia.jpg?width=760", text:"Төр, нийгмийн нэрт зүтгэлтэн, хурандаа генерал, Монгол Улсын гавьяат барилгачин Сономын Лувсангомбо 2026 оны арваннэгдүгээр сарын 6-ны өдөр 102 насандаа таалал төгслөө.\n\nТүүний таалал төгссөн мэдээг арваннэгдүгээр сарын 8-нд хэвлэл мэдээллийн хэрэгслүүд мэдээлсэн бөгөөд олон нийт түүний дурсгалыг хүндэтгэж байна. С.Лувсангомбо нь Монгол Улсын төр, нийгмийн амьдралд олон жил зүтгэсэн, хурандаа генерал цолтой, барилгын салбарын гавьяат цолтон байв.\n\nТэрбээр зуун хоёр насыг элээж, Монголын орчин үеийн түүхийн олон үеийг туулсан үеийн төлөөлөгчдийн нэг байсан юм. Түүнийг эцсийн замд нь үдэх ёслолын талаарх дэлгэрэнгүй мэдээллийг холбогдох байгууллагууд дараа нь мэдээлэх аж.", textEn:"Prominent statesman, Colonel General and Honoured Builder of Mongolia Sonomyn Luvsangombo died on November 6, 2026, at the age of 102.\n\nNews of his death was reported by the media on November 8, and the public is honouring his memory. Luvsangombo served for many years in Mongolia's political and public life, held the rank of colonel general, and was an honoured figure in the construction sector.\n\nHe lived to 102, as one of the representatives of a generation that lived through many eras of Mongolia's modern history. The relevant organisations will announce details of the farewell ceremony later."},
  {id:5, cat:"niigem", title:"Сурагчдын II улирлын хичээл өнөөдөр эхэллээ", titleEn:"Second-quarter classes for school pupils begin today", time:"1 цаг", timeEn:"1 hour", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Children%20in%20Classroom%20Tanunda%20Primary%20School(GN08910).jpg?width=760", text:"Ерөнхий боловсролын сургуулийн сурагчдын эхний улирлын амралт 2026 оны арваннэгдүгээр сарын 2–8-ны өдрүүдэд үргэлжилж дуусч, II улирлын хичээл өнөөдөр буюу арваннэгдүгээр сарын 9-нд эхэлж байна. Сурагчид нэг долоо хоног амарсны дараа хичээлийн шинэ улиралдаа эргэн орж байгаа юм.\n\n2026–2027 оны хичээлийн жилээс ерөнхий боловсролын сургуулиуд дөрвөн улирлын тогтолцоонд шилжсэн. Уг тогтолцооны дагуу хичээлийн жил улирал тус бүрээр хуваагдаж, улирал бүрийн дараа сурагчид амрах зохицуулалттай болсон нь сурагчдын ачааллыг тэнцвэржүүлэх, амралтыг тогтмолжуулах зорилготой юм.\n\nСургуулиудаас эцэг эхчүүдэд хүүхдүүдээ өнөөдрийн хичээлд бэлтгэж, хичээлийн хэрэглэл, дүрэмт хувцсыг нь шалгахыг зөвлөж байна. Хүйтний улирал эхэлж байгаатай холбогдуулан хүүхдийг дулаан хувцаслах, томуу, ханиад томуунаас сэргийлэх нь чухал хэвээр байна.", textEn:"The first-quarter break for pupils of general education schools, which ran from November 2 to 8, 2026, has ended, and second-quarter classes begin today, November 9. After a week off, pupils are returning to a new school quarter.\n\nFrom the 2026–2027 school year, general education schools have moved to a four-quarter system. Under this system the school year is divided into quarters, with a break after each quarter, intended to balance pupils' workload and make holidays regular.\n\nSchools advise parents to prepare their children for today's classes and check their school supplies and uniforms. With the cold season beginning, dressing children warmly and protecting them from flu and colds remains important."},
  {id:6, cat:"ediin-zasag", title:"Яндангаа буулгаж, байранд орох өрхүүдийг “100 мянган айлын орон сууц” хөтөлбөрт хамруулна", titleEn:"Households that remove their chimneys and move into flats to join “100,000-household housing” programme", time:"2 цаг", timeEn:"2 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Ulaanbaatar%20new%20buildings%20in%20Yaarmag.jpg?width=760", text:"Засгийн газар 2027–2030 онд “100 мянган айлын орон сууц” үндэсний хөтөлбөр хэрэгжүүлж, 50 мянган яндан буулгах зорилт тавьжээ. Хөтөлбөрийн хүрээнд яндангаа буулгаж, байранд орох өрхүүдийг хамруулахаар төлөвлөж байна.\n\nМонгол Улсад 1 сая 5 мянган өрх байдаг бөгөөд гэр хорооллын яндангаас үүдэлтэй агаарын бохирдол нь Улаанбаатар хотын тулгамдсан асуудлын нэг хэвээр байна. 50 мянган яндан буулгах зорилт нь агаарын бохирдлыг бууруулах, иргэдийн амьдрах нөхцөлийг сайжруулахад чиглэж байгаа юм.\n\nЕрөнхий сайд Н.Учрал Сайншандад болсон уулзалтын үеэр 2027 онд 25 мянган айлыг орон сууцжуулж, ипотекийн зээлийн санхүүжилтийн 50 хувийг орон нутагт олгохоор төлөвлөж байгааг мэдэгдсэн юм. Хөтөлбөр хэрэгжсэнээр иргэдийн амьдрах нөхцөл сайжирч, агаарын бохирдол буурах төлөвтэй байна.", textEn:"The Government will implement the national “100,000-household housing” programme in 2027–2030, with a target of removing 50,000 chimneys. Households that remove their chimney and move into flats will be included in the programme.\n\nMongolia has 1,005,000 households, and air pollution from ger district chimneys remains one of Ulaanbaatar's pressing problems. The target of removing 50,000 chimneys is aimed at reducing air pollution and improving citizens' living conditions.\n\nPrime Minister N. Uchral said at the meeting in Sainshand that 25,000 households are planned to be housed in 2027, with 50 percent of mortgage financing going to the regions. Once the programme is implemented, living conditions are expected to improve and air pollution to fall."},
  {id:7, cat:"niigem", title:"МЭЕГ: 2025 оны өр төлбөр, 2026 оны нэмэлт санхүүжилтийг 11 дүгээр сарын 15-ны дотор шийдвэрлэнэ", titleEn:"Veterinary agency: 2025 debts and 2026 extra funding to be settled by November 15", time:"2 цаг", timeEn:"2 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Female,%20Veterinarian,%20Proud.jpg?width=760", text:"Мал эмнэлгийн ерөнхий газар 2025 оны өр төлбөр болон 2026 оны нэмэлт санхүүжилтийн асуудлыг 2026 оны арваннэгдүгээр сарын 15-ны дотор шийдвэрлэхээ мэдэгдлээ. Тус газар 2025 онд 17.3 тэрбум төгрөгийн өр төлбөрийн үлдэгдэлтэй гарсан бөгөөд 2026 онд нийт 30.8 тэрбум төгрөгийн нэмэлт санхүүжилт шаардлагатай болсон байна.\n\n2026 онд олон улсын хорио цээрт гоц халдварт шүлхий болон ямааны годрон өвчин гарсантай холбогдуулан төсөвлөсөн зардал нэмэгдэж, төлөвлөгөөт дархлаажуулалтын хүрээнд нэмэлт арга хэмжээ авах шаардлага үүссэн гэж тус газраас мэдээллээ. Энэ онд нийт 19 нэр төрлийн халдварт өвчнөөс урьдчилан сэргийлэх дархлаажуулалтыг технологит хугацаанд нь хийж гүйцэтгэж байгаа бөгөөд өнөөдрийн байдлаар ажил 90 гаруй хувийн гүйцэтгэлтэй байна.\n\nТехнологит дархлаажуулалтын ажлыг гурван үе шаттайгаар зохион байгуулснаас эхний болон хоёрдугаар шатны ажил бүрэн дууссан байна. Вакциныг арваннэгдүгээр сарын 5-ны дотор аймаг, орон нутгийн мал эмнэлгийн байгууллагуудад хүргэх бэлтгэлийг хангаж, дархлаажуулалтыг арваннэгдүгээр сарын 8-наас эхлүүлж, арванхоёрдугаар сарын 1-ний дотор дуусгахаар хугацааг товлосон юм.\n\nДотоодын вакцин үйлдвэрлэлийг дэмжих зорилгоор Засгийн газрын хуралдаанд асуудлыг танилцуулж, 1.5 тэрбум төгрөгийн нэмэлт санхүүжилтийг шийдвэрлүүлсэн байна. Өнөөдрийн байдлаар вакцин үйлдвэрлэлийн нийт зардлын 80 хувийг “Биокомбинат” төрийн өмчит компанид шилжүүлж, үйлдвэрлэлийн ажлыг эрчимжүүлээд байна.", textEn:"The General Veterinary Agency has said it will settle its 2025 debts and the additional funding needed for 2026 by November 15, 2026. The agency ended 2025 with 17.3 billion tugriks of outstanding debt, and needs a total of 30.8 billion tugriks of additional funding in 2026.\n\nThe agency said costs rose because foot-and-mouth disease and goat plague — both internationally quarantined diseases — broke out in 2026, requiring extra measures within the planned vaccination programme. This year vaccination against 19 infectious diseases is being carried out on schedule, and is now more than 90 percent complete.\n\nThe scheduled vaccination is organised in three stages, of which the first two are fully complete. Vaccines were prepared for delivery to aimag and local veterinary organisations by November 5, and vaccination began on November 8, to finish by December 1.\n\nTo support domestic vaccine production, the issue was presented to a Government meeting and 1.5 billion tugriks of additional funding was approved. So far 80 percent of vaccine production costs have been transferred to the state-owned company Biocombinat, and production has been stepped up."},
  {id:8, cat:"delhii", title:"Уур амьсгалын COP31 бага хурал өнөөдөр Туркийн Антальяад нээгдэнэ", titleEn:"COP31 climate conference opens today in Antalya, Turkey", time:"3 цаг", timeEn:"3 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Antalya,%20Turkey%20-%20panoramio%20(1).jpg?width=760", text:"НҮБ-ын Уур амьсгалын өөрчлөлтийн тухай суурь конвенцын талуудын 31 дүгээр бага хурал буюу COP31 өнөөдөр буюу арваннэгдүгээр сарын 9-нд Туркийн Антальяа хотод нээгдэнэ. Бага хурал арваннэгдүгээр сарын 20-ныг хүртэл үргэлжилж, 60 мянга орчим хүн, олон арван удирдагч оролцох төлөвтэй байна.\n\nЭнэ удаагийн бага хурлыг “Ирээдүйн COP – Хэрэгжилтийн COP” уриан дор зохион байгуулж байгаа бөгөөд гол анхаарлаа уур амьсгалын талаарх амлалтыг бодит арга хэмжээ болгон хэрэгжүүлэхэд хандуулах юм. Турк улс бага хурлыг даргалж, Австрали улс хэлэлцээг удирдах онцгой зохион байгуулалтаар явагдаж байна.\n\nХоёр долоо хоногийн хэлэлцээний үеэр тогтвортой хөгжил, уур амьсгалын санхүүжилт, цэвэр эрчим хүч, дасан зохицох, технологи, ногоон шилжилтийн асуудлыг хэлэлцэнэ. Гэвч энэ удаагийн бага хурлаар шинэ томоохон шийдвэр гарахгүй, харин хэрэгжилтийг урагшлуулах тодорхой дохио өгөхөд анхаарна гэж ажиглагчид үзэж байна.\n\nБага хурал уур амьсгалын хямралын улмаас үүссэн гамшиг нэмэгдэж, эрчим хүчний хямрал гүнзгийрсэн нөхцөлд болж байна. АНУ энэ оны эхнээс Уур амьсгалын конвенцын гишүүнчлэлээс гарсан тул хэлэлцээнд оролцохгүй бөгөөд дэлхийн хоёр дахь том ялгаруулагчгүйгээр талууд тохиролцоонд хүрэх ёстой болжээ. НҮБ-ын Байгаль орчны хөтөлбөрийн мэдээлснээр хөгжиж буй орнуудад уур амьсгалын нөлөөнд дасан зохицоход 2035 он гэхэд жилд 305 тэрбум ам.доллар шаардлагатай болно.", textEn:"The 31st Conference of the Parties to the UN Framework Convention on Climate Change, COP31, opens today, November 9, in Antalya, Turkey. The conference runs until November 20, with around 60,000 people and dozens of leaders expected to attend.\n\nThis year's conference is being held under the theme “COP of the Future – COP of Implementation”, focusing on turning climate commitments into concrete action. In an unusual arrangement, Turkey will preside over the conference while Australia leads the negotiations.\n\nOver the two weeks, delegates will discuss sustainable development, climate finance, clean energy, adaptation, technology and green transformation. Observers expect no landmark new decision from this transitional COP, but rather clear signals to advance implementation.\n\nThe conference takes place as climate-linked disasters multiply and an energy crisis deepens. The United States, which left the Climate Convention at the start of the year, will not take part, so the remaining parties must reach agreement without the world's second-largest emitter. According to the UN Environment Programme, developing countries will need 305 billion US dollars a year by 2035 to adapt to climate impacts."},
  {id:9, cat:"delhii", title:"АНУ Иран руу чиглэсэн хуурай замын нийлүүлэлтийг таслах 20 гишүүнтэй ажлын хэсэг байгууллаа", titleEn:"US sets up 20-member task force to cut Iran's overland supply routes", time:"3 цаг", timeEn:"3 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/The%20Pentagon%20US%20Department%20of%20Defense%20building.jpg?width=760", text:"АНУ Ираны хуурай замын нийлүүлэлтийн маршрутыг таслах зорилготой 20 гишүүнтэй цэргийн шинэ ажлын хэсэг байгуулснаа зарлалаа. Энэ алхам нь Персийн булангийн бүс нутаг дахь хурцадмал байдлыг улам нэмэгдүүлж байна.\n\nҮүний зэрэгцээ Ерөнхийлөгч Дональд Трамп ням гарагт мөргөлдөөнийг зогсоох хэлэлцээ урагшилж байгаа тохиолдолд Иранд дахин цохилт өгөх тушаал өгөх магадлал тун бага гэж мэдэгдсэн байна. Хэлэлцээний явц нь цаашдын цэргийн шийдвэрийг тодорхойлох гол хүчин зүйл болох нь харагдаж байна.\n\nИзраилийн тал “Ирантай холбоотой үүрэг даалгавар” дуусаагүй хэвээр байгаа бөгөөд Иран цөмийн зэвсэг олж авахыг оролдож байна гэж мэдэгдсэн юм. Хоёрдугаар сарын сүүлээр Иран дахь дайн эхэлж, Хормузын хоолой хаагдсанаас үүссэн эрчим хүчний хямрал дэлхийн эрчим хүч, хүнсний үнийг өсгөсөөр байгаа билээ.\n\nБүс нутгийн хурцадмал байдал өндөр хэвээр байгаа бөгөөд олон улсын анхаарал хэлэлцээний ширээнд чиглэж байна. Ажиглагчид АНУ-ын шинэ ажлын хэсэг нь Ираны нийлүүлэлтийн сүлжээнд дарамт үзүүлэх замаар хэлэлцээнд нөлөөлөх зорилготой гэж үзэж байна.", textEn:"The United States has announced a new 20-member military task force aimed at disrupting Iran's overland supply routes. The move further intensifies tensions in the Gulf region.\n\nAt the same time, President Donald Trump said on Sunday that he was highly unlikely to order fresh strikes on Iran as long as talks to end the conflict keep progressing. The course of the talks looks set to determine further military decisions.\n\nIsrael has said its “Iran mission” is not yet complete and that Iran is trying to obtain nuclear weapons. The energy crisis triggered by the outbreak of war in Iran at the end of February and the closure of the Strait of Hormuz continues to push up global energy and food prices.\n\nTensions in the region remain high, and international attention is focused on the negotiating table. Observers say the new US task force is intended to influence the talks by putting pressure on Iran's supply networks."},
  {id:10, cat:"delhii", title:"Сенегалын эрэгт цагаачдын завь живж, 21 хүн амиа алдав", titleEn:"Migrant boat sinks off Senegal, killing 21", time:"4 цаг", timeEn:"4 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/FISHERMEN%20EVENING%20RETURN%20DAKAR%20LIGHTHOUSE.jpg?width=760", text:"Сенегалын хойд эргийн ойролцоо цагаачдыг тээвэрлэж явсан завь живж, дор хаяж 21 хүн амиа алдаж, одоогоор ганцхан хүн аврагдсан гэж тус улсын Дотоод хэргийн яам мэдээллээ.\n\nОслын талаарх дэлгэрэнгүй мэдээлэл хараахан тодорхойгүй байгаа бөгөөд эрэн хайх, аврах ажиллагаа үргэлжилж байна. Аврагдсан ганц хүний биеийн байдал болон завинд хэдэн хүн явж байсан нь тодорхойгүй хэвээр байна.\n\nБаруун Африкийн эргээс Европ руу чиглэсэн цагаачдын зам нь дэлхийн хамгийн аюултай замуудын нэгт тооцогддог бөгөөд энэ замд жил бүр олон хүн амиа алддаг билээ. Сенегалын эрх баригчид хууль бус цагаачлалын сүлжээтэй тэмцэх арга хэмжээгээ чангатгаж байгаа юм.", textEn:"At least 21 people have died after a boat carrying migrants sank off Senegal's northern coast, with only one person rescued so far, the country's Interior Ministry said.\n\nDetails of the accident are still unclear, and search and rescue operations are continuing. The condition of the sole survivor and how many people were on board remain unknown.\n\nThe migrant route from the West African coast to Europe is considered one of the most dangerous in the world, claiming many lives every year. Senegal's authorities are tightening measures against illegal migration networks."},
  {id:11, cat:"delhii", title:"Польш Краков хотын халдлагын дараа хоёр өдрийн гашуудал зарлав", titleEn:"Poland declares two days of mourning after Krakow attack", time:"4 цаг", timeEn:"4 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Krakow%20-%20Cloth%20Hall%20from%20Basilica%20-%201.jpg?width=760", text:"Польш улс Краков хотод болсон халдлагын дараа хоёр өдрийн үндэсний гашуудал зарлалаа. Халдлагын улмаас зургаан хүн амиа алдсан байна.\n\nХалдлагын талаарх дэлгэрэнгүй мэдээлэл, шалтгаан нь хараахан тодорхой болоогүй байгаа бөгөөд эрх баригчид шалгалт явуулж байна. Олон нийтэд нэмэлт мэдээлэл өгөхөө эрх баригчид мэдэгдсэн байна.\n\nКраков нь Польшийн түүх, соёлын чухал төв бөгөөд тус хотод болсон халдлага улс орон даяар цочролд оруулсан юм. Олон улсын хамтын нийгэмлэг Польшийн ард түмэнд эмгэнэл илэрхийлж байна.", textEn:"Poland has declared two days of national mourning after an attack in the city of Krakow. Six people were killed in the attack.\n\nDetails and the motive of the attack are still unclear, and the authorities are investigating. Officials have said they will provide the public with further information.\n\nKrakow is an important historical and cultural centre of Poland, and the attack has shocked the whole country. The international community has expressed condolences to the people of Poland."},
  {id:12, cat:"delhii", title:"Францад оюутан, ажилчдын эсэргүүцэл дөрөв дэх бямба гарагт үргэлжиллээ", titleEn:"Student and worker protests in France continue for a fourth Saturday", time:"5 цаг", timeEn:"5 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Smoke%20during%20demonstrations%20and%20protests%20in%20Paris%20in%202017%20(F4hO0SEi1h8).jpg?width=760", text:"Франц улсад оюутнууд болон ажилчид эдийн засгийн нөхцөл байдал, нийтийн үйлчилгээний асуудлаар дөрөв дэх бямба гарагтаа дараалан эсэргүүцлийн жагсаал зохион байгууллаа.\n\nЭсэргүүцлийн хөдөлгөөн хэдэн долоо хоногийн турш үргэлжилж байгаа бөгөөд жагсагчид эдийн засгийн нөхцөл байдал хүндэрч, нийтийн үйлчилгээний чанар муудаж байгаад сэтгэл дундуур байгаагаа илэрхийлж байна. Оюутнууд боловсролын санхүүжилт, ажилчид цалин, хөдөлмөрийн нөхцөлтэй холбоотой шаардлага тавьж байгаа юм.\n\nФранцын Засгийн газар жагсагчдын шаардлагыг сонсож, хэлэлцээ хийх ёстой гэж эсэргүүцлийн зохион байгуулагчид үзэж байна. Жагсаал цаашид хэрхэн өрнөх нь улс төрийн маргааны чухал сэдэв болсоор байна.", textEn:"In France, students and workers held protests for a fourth consecutive Saturday over economic conditions and public services.\n\nThe protest movement has been going on for several weeks, with demonstrators expressing dissatisfaction over worsening economic conditions and declining public services. Students are raising demands about education funding, while workers are raising demands about pay and working conditions.\n\nProtest organisers say the French Government must listen to the demonstrators' demands and negotiate. How the protests develop further remains a key subject of political debate."},
  {id:13, cat:"sport", title:"“ДАКАР 2026”: Монголын баг тамирчид өнөөдөр спортын гурван төрөлд өрсөлдөнө", titleEn:"“Dakar 2026”: Mongolian athletes compete in three sports today", time:"5 цаг", timeEn:"5 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/AG%2023%203x3%20Basketball%2058.jpg?width=760", text:"Монголын баг тамирчид “Дакар-2026” Залуучуудын олимпын наадмын хүрээнд өнөөдөр сагсан бөмбөгийн 3х3, элсний чөлөөт бөх болон дугуйн замын уралдаан гэсэн гурван төрөлд өрсөлдөнө.\n\nМонголын 3х3 сагсан бөмбөгийн баг В хэсгийн тоглолтуудаа хоёрдугаар байраар өндөрлүүлж, шөвгийн наймд шалгараад байгаа бөгөөд өнөөдөр талбайн эзэн Сенегалын багтай учраа таарсан юм. Тоглолт орон нутгийн цагаар 12:45 цагт эхэлнэ.\n\nЭмэгтэйчүүдийн 65 кг-ын жинд Э.Анужин өнөөдөр Сали хотноо хүч үзэх бол дугуйн тамирчин Г.Ариунхүслэн дугуйн замын уралдаанд орон нутгийн цагаар 09:00 цагт гараанаас гарна. Эмэгтэйчүүдийн 48 кг жингийн боксын төрөлд А.Алтанзул эхний тойрогт сугалаагаар гоц мөргөж, Их Британи, Туркийн тамирчдын тулааны ялагчтай арваннэгдүгээр сарын 10-ны өдөр өрсөлдөх юм.\n\n“Дакар-2026” Залуучуудын IV олимпын наадам аравдугаар сарын 31-нээс арваннэгдүгээр сарын 13-ны өдрүүдэд Сенегалын Дакар, Диамниадио, Сали хотуудад зохион байгуулагдаж байгаа бөгөөд дэлхийн 204 орны 15–17 насны 2,700 орчим тамирчин спортын 25 төрөлд 153 багц медалийн төлөө өрсөлдөж байна. Монгол Улсаа төлөөлөн бокс, дугуй, жүдо, элсний бөх, 3х3 сагсан бөмбөг, усанд сэлэлтийн зургаан төрөлд нийт 10 тамирчин өрсөлдөж байгаа юм.", textEn:"Mongolian athletes will compete today in three sports at the Dakar 2026 Youth Olympic Games: 3x3 basketball, beach freestyle wrestling and road cycling.\n\nMongolia's 3x3 basketball team finished second in Group B and reached the quarter-finals, where they face hosts Senegal today. The match starts at 12:45 local time.\n\nIn the women's 65 kg beach wrestling, E. Anujin competes today in Saly, while cyclist G. Ariunkhuslen starts the road race at 09:00 local time. In the women's 48 kg boxing, A. Altanzul received a first-round bye and will fight the winner of the Great Britain–Turkey bout on November 10.\n\nThe fourth Youth Olympic Games, Dakar 2026, run from October 31 to November 13 in Dakar, Diamniadio and Saly, Senegal, with around 2,700 athletes aged 15–17 from 204 countries competing for 153 sets of medals in 25 sports. Mongolia is represented by 10 athletes in six sports: boxing, cycling, judo, beach wrestling, 3x3 basketball and swimming."},
  {id:14, cat:"sport", title:"Бакуд 25,08 секунд: гал унтраах спортод мөнгөн медаль, шинэ рекорд", titleEn:"25.08 seconds in Baku: silver medal and new record in firefighting sport", time:"6 цаг", timeEn:"6 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/U%20S%20Navy%20Sailors,%20American%20and%20Spanish%20Firefighters%20participate%20in%20Firefighter%20Competition%20(8069316).jpg?width=760", text:"Гал унтраах техникийн олон төрөлт спортын дэлхийн аварга шалгаруулах тэмцээн энэ сарын 2–8-нд Азербайжан улсын Баку хотноо болж байна. Эрэгтэйчүүдийн XXI, эмэгтэйчүүдийн XII удаагийн тэмцээний эрэгтэйчүүдийн байлдааны тархалтын төрөлд Монголын шигшээ баг 25,08 секундын амжилтаар мөнгөн медаль хүртлээ.\n\nТэмцээнд 14 орны 139 эрэгтэй, 50 эмэгтэй тамирчин оролцож байгаа бөгөөд Монголоос эрэгтэй 10, эмэгтэй 8 тамирчин бүхий хоёр баг оролцжээ. Ингэснээр Монголын баг 2017 онд Туркийн Измир хотноо болсон ижил төрлийн тэмцээнд хүрэл медаль авч тогтоосон улсын рекордоо ахиулсан байна.\n\nГал унтраах спорт нь гал сөнөөгчдийн мэргэжлийн ур чадвар, хурд, багийн ажиллагааг шалгадаг спортын төрөл бөгөөд байлдааны тархалт нь хамгийн их анхаарал татдаг төрлүүдийн нэг юм. Монголын багийн амжилт нь тус спортын хөгжилд чухал алхам боллоо.", textEn:"The World Firefighting Sport Championships are taking place in Baku, Azerbaijan, on November 2–8. In the men's combat deployment event of the 21st men's and 12th women's championships, the Mongolian national team won the silver medal with a time of 25.08 seconds.\n\nThe championships bring together 139 men and 50 women from 14 countries, with Mongolia fielding two teams of 10 men and 8 women. With this result, the Mongolian team improved the national record it set when winning bronze at the same event in Izmir, Turkey, in 2017.\n\nFirefighting sport tests firefighters' professional skills, speed and teamwork, and combat deployment is one of its most watched events. The Mongolian team's success is an important step for the development of the sport."},
  {id:15, cat:"sport", title:"“Мөнгөн цом”-ын барилдаан удахгүй эхэлнэ", titleEn:"“Silver Cup” wrestling tournament to begin soon", time:"6 цаг", timeEn:"6 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Mongolian%20Naadam%20Wrestlers%20-%202010.jpg?width=760", text:"Монголын Үндэсний Бөхийн Холбооноос аймаг, цэргийн цолтой бөхчүүдийн дунд шилдэг бүсийн багийг шалгаруулах “Мөнгөн цом”-ын барилдааныг зохион байгуулахаар болжээ.\n\nТус барилдаанд Алтай, Баруун, Говийн, Зүүн, Төвийн, Хангайн, Хойд бүс гэсэн долоон бүсийн багууд өрсөлдөх бөгөөд барилдаанууд Монгол Бөхийн өргөө болон орон нутагт болно. Бүс бүрээс шалгарсан багууд 2026–2027 оны улирлын “Шилдэг баг” болохын төлөө хүч сорих юм.\n\nАймгийн дэвжээд баг бүрдүүлэхдээ “Алтан цом”-д оролцоогүй бөхчүүдээс сонгох зарчим баримтална. Энэ нь залуу болон орон нутгийн бөхчүүдэд өөрийгөө сорих, цолоо ахиулах боломж олгож байгаа юм.\n\nМонгол бөх нь үндэсний спортын тулгуур төрөл бөгөөд “Мөнгөн цом” нь бүсийн багуудын өрсөлдөөнийг идэвхжүүлж, бөхийн спортыг орон нутагт хөгжүүлэхэд чиглэж байна.", textEn:"The Mongolian National Wrestling Federation will organise the “Silver Cup” tournament to determine the best regional team among wrestlers holding aimag and military titles.\n\nSeven regional teams — Altai, West, Gobi, East, Central, Khangai and North — will compete, with bouts held at the Mongolian Wrestling Palace and in the regions. The regional winners will then compete to become the “Best Team” of the 2026–2027 season.\n\nWhen forming aimag teams, wrestlers who did not take part in the “Golden Cup” will be selected. This gives young and regional wrestlers a chance to test themselves and advance their titles.\n\nMongolian wrestling is a pillar of national sport, and the “Silver Cup” aims to energise regional team competition and develop wrestling in the regions."},
  {id:16, cat:"soyol", title:"Монгол Улс ЮНЕСКО-ийн “Дэлхийн дурсамж” хөтөлбөрт шинээр баримтат өв бүртгүүллээ", titleEn:"Mongolia registers new documentary heritage in UNESCO's “Memory of the World” programme", time:"7 цаг", timeEn:"7 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/2014%20Erywań,%20Matenadaran%20(01).jpg?width=760", text:"Монгол Улсаас нэр дэвшүүлсэн “Бурхан багшийн шүтээн зурагт намтар” баримтат өв ЮНЕСКО-ийн “Дэлхийн дурсамж” хөтөлбөрийн Ази, Номхон далайн бүсийн жагсаалтад бүртгэгдлээ. Энэ тухай МҮОНРТ арваннэгдүгээр сарын 7-нд мэдээллээ.\n\nЮНЕСКО-ийн “Дэлхийн дурсамж” хөтөлбөрийн Ази, Номхон далайн бүсийн хорооны ээлжит 11 дүгээр Ерөнхий чуулган 2026 оны арваннэгдүгээр сарын 2–6-ны өдрүүдэд Индонез Улсын нийслэл Жакарта хотноо хуралдсан юм. Чуулганы үеэр улс орнуудаас нэр дэвшүүлсэн 28 баримтат өвийг бүртгэх эсэх асуудлыг хэлэлцэж, 10 улсын 21 өвийг шинээр бүртгэж, гэрчилгээг гардуулсан байна.\n\n“Бурхан багшийн шүтээн зурагт намтар” өв нь Г.Занабазарын нэрэмжит Дүрслэх урлагийн музейн сан хөмрөгт хадгалагддаг XIX зууны түүх, соёлын дурсгал юм. Тус өв нь таван зурагт бүтээлээс бүрдэж, Бурхан багшийн амьдралын 34 үйл явдлыг өгүүлдэг бөгөөд 28 х 22 см хэмжээтэй цаасан дээр шороон будгаар зурсан байна.\n\nСоёл, спорт, аялал жуулчлал, залуучуудын яамны Төрийн нарийн бичгийн даргаар ахлуулсан ЮНЕСКО-ийн “Дэлхийн дурсамж” хөтөлбөрийн үндэсний хороо тус өвийг бүртгүүлэх материал бэлтгэх, холбогдох судалгааны ажлыг музейн захирал, урлаг судлалын ухааны доктор П.Байгалмаа болон музейн эрдэм шинжилгээний ажилтан, судлаачдад хариуцуулж, заавар зөвлөмжөөр хангаж ажилласны үр дүнд тус өв хүн төрөлхтөнд зориулсан “чухал ой санамж” болсон гэж мэдээллээ.", textEn:"The documentary heritage “Illustrated Biography of the Buddha”, nominated by Mongolia, has been inscribed on the Asia-Pacific regional register of UNESCO's “Memory of the World” programme, MNB reported on November 7.\n\nThe 11th General Meeting of the Asia-Pacific Regional Committee of UNESCO's “Memory of the World” programme was held on November 2–6, 2026, in Jakarta, Indonesia. The meeting considered 28 documentary heritage items nominated by countries, newly inscribing 21 items from 10 countries and presenting their certificates.\n\nThe “Illustrated Biography of the Buddha” is a 19th-century historical and cultural treasure kept in the collection of the Zanabazar Museum of Fine Arts. It consists of five paintings depicting 34 episodes from the life of the Buddha, painted with mineral pigments on paper measuring 28 by 22 centimetres.\n\nThe national committee for UNESCO's “Memory of the World” programme, led by the State Secretary of the Ministry of Culture, Sports, Tourism and Youth, entrusted the museum's director, Dr P. Baigalmaa, and its researchers with preparing the nomination and research, and with their guidance the heritage became an “important memory” for humanity, the report said."},
  {id:17, cat:"soyol", title:"“Соёлын бүтээлч сар-2026” сарын аян “Монгол бахархал” уриан дор үргэлжилж байна", titleEn:"“Creative Culture Month 2026” continues under the slogan “Mongolian Pride”", time:"7 цаг", timeEn:"7 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Mongorian%20musical%20instruments,%20MIM%20PHX.jpg?width=760", text:"“Соёлын бүтээлч сар-2026” сарын аян “Монгол бахархал” уриан дор арваннэгдүгээр сарын 1–30-ны өдрүүдэд улс орон даяар зохион байгуулагдаж байна.\n\nСарын аяны хүрээнд улсын хэмжээнд болон орон нутагт соёл, урлагийн олон арга хэмжээ зохион байгуулагдаж байгаа бөгөөд Монголын соёл, уламжлал, бүтээлч үйлдвэрлэлийг олон нийтэд таниулах зорилготой юм.\n\nАрваннэгдүгээр сарын 8-нд Хөдөө аж ахуйн ажилтны өдөр тохиосон бөгөөд энэ долоо хоногт соёлын олон арга хэмжээ төлөвлөгдсөн байна. Соёлын бүтээлч сар нь иргэдийн соёлын амьдралыг баяжуулж, уран бүтээлчдийг дэмжихэд чиглэж байгаа юм.", textEn:"The “Creative Culture Month 2026” campaign is being held nationwide from November 1 to 30 under the slogan “Mongolian Pride”.\n\nWithin the campaign, many cultural and artistic events are being organised across the country and in the regions, aiming to introduce Mongolian culture, traditions and creative industries to the public.\n\nNovember 8 marked Agricultural Workers' Day, and many cultural events are planned this week. The creative culture month aims to enrich citizens' cultural life and support artists."},
  {id:18, cat:"oron-nutag", title:"Дорнод: Бүсийн наадамд мянга орчим уяач оролцоно", titleEn:"Dornod: Around a thousand horse trainers to take part in regional festival", time:"8 цаг", timeEn:"8 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Horse%20race%20in%20Mongolia%20Naadam.jpg?width=760", text:"Монголын морин спорт уяачдын холбооны 25 жилийн ойд зориулсан хурдан морины уралдаан энэ сарын 6–8-ны өдрүүдэд Дорнод аймгийн Хөлөнбуйр суманд болж байна. Энэхүү бүсийн наадамд мянга орчим уяач ирэх урьдчилсан судалгаа гарчээ.\n\nХурдан морины уралдаан нь Монголын уламжлалт спортын нэг бөгөөд бүсийн наадам нь уяачид, морь сонирхогчдыг нэгтгэн, морин спортыг хөгжүүлэхэд чухал үүрэг гүйцэтгэдэг. Наадмын үеэр олон насны морьдын уралдаан болох төлөвтэй байна.\n\nДорнод аймаг нь морин спортын уламжлал хүчтэй бүс нутгийн нэг бөгөөд тус наадам орон нутгийн иргэд, зочид гийчдийн анхаарлыг татаж байна.", textEn:"A horse racing festival dedicated to the 25th anniversary of the Mongolian Horse Racing Trainers' Association is being held on November 6–8 in Khulunbuir soum, Dornod aimag. A preliminary survey suggests around a thousand horse trainers will attend the regional festival.\n\nHorse racing is one of Mongolia's traditional sports, and the regional festival brings together trainers and horse enthusiasts, playing an important role in developing equestrian sport. Races for horses of many ages are expected during the festival.\n\nDornod aimag is one of the regions with a strong horse-racing tradition, and the festival is drawing the attention of local residents and visitors.", region:"dornod"},
  {id:19, cat:"tech", title:"OpenAI GPT-6 загваруудаа танилцуулж, Anthropic Claude Opus 5.5-ыг гаргалаа", titleEn:"OpenAI unveils GPT-6 models as Anthropic releases Claude Opus 5.5", time:"8 цаг", timeEn:"8 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/BalticServers%20data%20center.jpg?width=760", text:"OpenAI компани GPT-6 Sol болон Luna загваруудаа танилцуулж, API үнийг 50 хувиар хямдруулсан байна. Үүний зэрэгцээ GPT-6 Cyber загвар нь 948 Linux сул талыг засварласны дараа кибер аюулгүй байдлын “Critical” үнэлгээ авчээ. Anthropic компани ч Claude Opus 5.5 загвараа гаргасан байна.\n\nХиймэл оюуны салбарын хурдацтай хөгжил сүүлийн 24 цагийн технологийн мэдээний гол сэдэв болсон бөгөөд OpenAI, Anthropic компаниуд програм хангамжийн томоохон дэвшил гаргаж байна. Гэвч технологийн зардалтай холбоотой эдийн засгийн айдас дэлхийн зах зээлд хэлбэлзэл үүсгэжээ.\n\nOpenAI-ийн аюулгүй байдлын удирдагч Дэвид Робинсон гурван жил хагасын дараа огцорч, хиймэл оюуны аюулгүй байдлын стандартыг ихээхэн чангатгахыг уриалсан байна. Anthropic компани өөрийн хиймэл оюуны дата төвүүдэд эрчим хүч худалдан авахад 2.54 тэрбум фунт стерлинг буюу 3.4 тэрбум ам.долларын гэрээ байгуулжээ.\n\nТехнологийн салбарын бусад мэдээгээр Motorola компани Snapdragon 8 Elite Extreme Gen 6 чип дээр суурилсан Signature 27 гар утсаа арваннэгдүгээр сард гаргахаар бэлтгэж байгаа бөгөөд MIT-ийн судлаачид ухаалаг гар утсанд зориулсан супер хүчирхэг, эрчим хүчний хэмнэлттэй чипний шинэ төрлийг хөгжүүлж байна.", textEn:"OpenAI has unveiled its GPT-6 Sol and Luna models, with API pricing 50 percent cheaper. At the same time, GPT-6 Cyber received a “Critical” cybersecurity rating after patching 948 Linux vulnerabilities. Anthropic has also released its Claude Opus 5.5 model.\n\nRapid progress in artificial intelligence dominated technology news over the past 24 hours, with OpenAI and Anthropic making major software advances. But economic fears linked to tech spending triggered volatility in global markets.\n\nOpenAI's safety leader David Robinson resigned after three and a half years, calling for significantly stricter AI safety standards. Anthropic finalised a 2.54 billion pound (3.4 billion dollar) deal to buy energy for its own AI data centres.\n\nIn other technology news, Motorola is preparing to launch its Signature 27 phone in November, based on the Snapdragon 8 Elite Extreme Gen 6 chip, while MIT researchers are developing a new type of super-powerful, energy-efficient chip for smartphones."}
];
function aTitle(a){ return LANG === "en" ? (a.titleEn || a.title) : a.title; }
function aTime(a){ return LANG === "en" ? (a.timeEn || a.time) : a.time; }
function aText(a){ if(a.text) return LANG === "en" ? (a.textEn || a.text) : a.text; return SAMPLE_TEXT[LANG][a.id === 1 ? "long" : "short"]; }
function aRegion(a){ return a.region ? ((REGIONS[LANG] && REGIONS[LANG][a.region]) || a.region) : ""; }

// ===== Ханш · Цаг агаар (өдөр бүр шинэчлэгдэнэ; цаг агаарыг Open-Meteo-гоос шууд татна) =====
const RATES = {date:"2026-11-09", items:[
  {code:"USD", mnt:3600.44, chg:0}, {code:"EUR", mnt:4024.21, chg:0}, {code:"JPY", mnt:22.8, chg:0},
  {code:"CNY", mnt:539.8, chg:0}, {code:"KRW", mnt:2.66, chg:0}, {code:"RUB", mnt:43.96, chg:0}, {code:"GBP", mnt:4825.13, chg:0}
]};
let WEATHER = [
  {city:"Улаанбаатар", cityEn:"Ulaanbaatar", lat:47.9212, lon:106.9186, tz:"Asia/Ulaanbaatar", temp:-7, code:0},
  {city:"Токио", cityEn:"Tokyo", lat:35.6762, lon:139.6503, tz:"Asia/Tokyo", temp:9, code:51},
  {city:"Сөүл", cityEn:"Seoul", lat:37.5665, lon:126.978, tz:"Asia/Seoul", temp:5, code:1},
  {city:"Бээжин", cityEn:"Beijing", lat:39.9042, lon:116.4074, tz:"Asia/Shanghai", temp:-1, code:0},
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
  {yt:"wztrr-LKx0U", title:"Асуудлын мөрөөр... /Сурвалжилга/ Нийтийн эзэмшлийн авто зогсоол", titleEn:"Following the issue... /Report/ Public parking", src:"МҮОНТ", srcEn:"MNB", srcFull:"МҮОНТ (Монголын үндэсний олон нийтийн телевиз)", srcFullEn:"MNB (Mongolian National Broadcaster)"},
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
