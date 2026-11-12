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

// ===== Бодит мэдээнүүд (2026-11-13) — өдөр бүр шинэчлэгдэнэ =====
const ARTICLES = [
  {id:1, cat:"uls-tor", title:"Ерөнхий сайд Н.Учрал “Эрдэнэс Тавантолгой”-д ажиллаж, 1072 хувьцааны эрхийг нээхээ мэдэгдэв", titleEn:"PM N. Uchral visits Erdenes Tavan Tolgoi, pledges to unlock rights to the 1,072 shares", time:"15 мин", timeEn:"15 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Manda%20Pit%20of%20Miike%20Coal%20Mine%20(east).jpg?width=1000", text:"Монгол Улсын Ерөнхий сайд Н.Учрал болон Улсын Их Хурлын гишүүд, Засгийн газрын гишүүд өчигдөр Өмнөговь аймаг дахь “Эрдэнэс Тавантолгой” ХК-ийн уурхайд ажиллаж, төслийн бүтээн байгуулалт, санхүү, эдийн засгийн үзүүлэлттэй танилцаж, уурхайчидтай уулзлаа. Ерөнхий сайд тус компанийн үр шим иргэдэд хүрч буйг онцолж, 11 дүгээр сарын 1-нээс шинээр суурь тэтгэвэр авч эхэлсэн 413 мянган ахмад настан, цалин нь 50 хувь нэмэгдсэн олон мянган эмч, багш, төрийн үйлчилгээний албан хаагчдын өмнөөс уурхайчдад талархал илэрхийлэв.\n\n“Ерөнхий сайдаас шууд асуу” уулзалтаар Ерөнхий сайд иргэдийн эзэмшиж буй 1,072 хувьцааг үе шаттайгаар хөрөнгийн зах зээл дээр энгийн арилжаанд оруулах, өвлүүлэх, бэлэглэх, арилжих, худалдах эрхийг бодитоор нээх ажил үргэлжилж буйг мэдэгдлээ. Ирэх оны долоодугаар сараас эхлэн шаардлагатай инженер, операторуудын ажлын байрыг нээх бөгөөд 933 төгрөгийн үнэлгээтэй хувьцаа 3,000 төгрөг болох боломжтой гэж тэрбээр хэлэв. Мөн 2027 оны төсөвт онцлох есөн шийдвэрээ зарлаж, Оюу толгойгоос Монгол Улс 17 жилийн дараа анх удаа ногдол ашиг авахаар болсныг дурдлаа.\n\nЕрөнхий сайд говийн усны асуудлыг нэн тэргүүнд тавина гэдгээ дахин нотлов. Говийг усжуулах “Хэрлэн Тооно” төслийн зураг төсвийн санхүүжилтийг тэрбээр Эдийн засаг, хөгжлийн сайдаар ажиллаж байхдаа шийдэж байсан аж. Түүнчлэн 2026 оны төсвийн тодотголоор 1.4 их наяд төгрөг хэмнэж, боловсрол, эрүүл мэндийн салбарынхны цалинг 50 хувь хүртэл нэмэгдүүлсэн бол 2027-2030 онд “50 мянган яндан буулгах, 100 мянган айлын орон сууц” үндэсний хөтөлбөр хэрэгжүүлэхээр төлөвлөж байна.", textEn:"Prime Minister N. Uchral, together with members of parliament and the Cabinet, visited the Erdenes Tavan Tolgoi mine in Umnugovi aimag yesterday, reviewed the project's construction and financial results, and met miners. The Prime Minister stressed that the company's returns are reaching citizens, thanking the miners on behalf of the 413,000 pensioners who began receiving the basic pension on November 1 and the thousands of doctors, teachers and public servants whose pay rose by 50 percent.\n\nAt a public meeting, the Prime Minister said work continues to put citizens' 1,072 shares into ordinary trading on the stock market in stages, genuinely opening the rights to inherit, gift, trade and sell them. From July next year, jobs for the engineers and operators the company needs will open, and he said the shares, valued at 933 tugriks, could reach 3,000 tugriks. He also announced nine key decisions in the 2027 budget, noting that Mongolia will receive dividends from Oyu Tolgoi for the first time in 17 years.\n\nThe Prime Minister reaffirmed that the Gobi's water problem is his top priority. He said he had secured design funding for the Kherlen Toono project to bring water to the Gobi while serving as Minister of Economy and Development. He also noted that the 2026 budget revision saved 1.4 trillion tugriks, allowing pay rises of up to 50 percent in education and health, and that a national programme to remove 50,000 chimneys and build 100,000 apartments will run from 2027 to 2030."},
  {id:2, cat:"uls-tor", title:"Улсын нөөцийн тухай хуулийн төслийн хэлэлцэх эсэхийг маргааш шийднэ", titleEn:"Parliament to decide tomorrow whether to debate the State Reserve Law bill", time:"30 мин", timeEn:"30 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Mongolian%20Parliament%201.JPG?width=760", text:"Улсын Их Хурлын чуулганы 11 дүгээр сарын 12-ны өдрийн хуралдаанаар Улсын нөөцийн тухай хуульд нэмэлт, өөрчлөлт оруулах тухай хуулийн төслийн хэлэлцэх эсэх хэлэлцүүлгийг хийлээ. Төслийн талаар Монгол Улсын Шадар сайд Н.Номтойбаяр танилцуулсан бөгөөд гишүүд асуулт асууж, хариулт авав.\n\nШадар сайдын танилцуулснаар, Засгийн газар улсын нөөцийн удирдлага, эрх зүйн тогтолцоог боловсронгуй болгох, гамшгийн үеийн бэлэн байдал, шуурхай ажиллах чадавхыг бэхжүүлэх зорилгоор хуулийн төслийг 2026 оны 10 дугаар сарын 23-нд өргөн мэдүүлсэн юм. Төсөлд нөөцийн нэгдсэн мэдээллийн сан, цахим удирдлагыг нэвтрүүлэх, стратегийн, гамшгийн болон орон нутгийн нөөцийн мэдээллийг гамшгийн мэдээллийн санд нэгтгэх зэрэг долоон үндсэн зорилт тусгагджээ.\n\nХэлэлцүүлгийн үеэр Улсын Их Хурлын гишүүн П.Сайнзориг улсын нөөц бүрдүүлэлтэд хувийн хэвшилтэй хамтран ажиллах орон зай, боломжийн талаар, гишүүн О.Саранчулуун гамшигт өртсөн хүмүүсийн судалгаа, мэдээлэл, хүртээмжийн талаар асуув. Төслийг үзэл баримтлалын хувьд дэмжих эсэхээр санал хураах ёстой байсан ч гишүүдийн ирц хангалтгүйгээс санал хураалтыг маргааш болгон хойшлууллаа.", textEn:"At its session on November 12, the State Great Khural discussed whether to debate a bill amending the Law on State Reserves. Deputy Prime Minister N. Nomtoibaatar presented the bill, and members of parliament asked questions and received answers.\n\nAccording to the Deputy Prime Minister, the Government submitted the bill on October 23, 2026, aiming to improve the management and legal framework of state reserves and to strengthen disaster readiness and rapid response capacity. The bill sets out seven main goals, including a unified reserve information database, digital management, and bringing strategic, disaster and local reserve data into the disaster information system.\n\nDuring the debate, member of parliament P. Sainzorig asked about scope for cooperating with the private sector in building state reserves, while member O. Saranchuluun asked about data on people affected by disasters and the accessibility of services. A vote on whether to support the bill in principle was due, but it was postponed until tomorrow because attendance was insufficient."},
  {id:3, cat:"ediin-zasag", title:"2027 оны төсөл: 43.6 их наяд төгрөгийн зарлага тавдугаар сард баталсан хязгаарыг 7.1 их наядаар давжээ", titleEn:"2027 draft budget: spending of 43.6 trillion tugriks exceeds the May ceiling by 7.1 trillion", time:"45 мин", timeEn:"45 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/The%20front%20side%20of%20the%20banknote%201000%20tugrik%20Mongolia%202020.jpg?width=760", text:"Монгол Улсын 2027 оны нэгдсэн төсвийн төсөлд нийт зарлагыг 43.6 их наяд төгрөгөөр тусгасан нь нэг жилд 28 хувийн өсөлт болж байна. Нэгдсэн төсөв 2025 онд 31.3 их наяд төгрөг зарцуулсан бол 2026 оны төсвийг 32.98 их наядаар баталж, одоо 34.0 их наяд болгон тодотгож байгаа юм. Эдийн засаг бодитоор 5.8 хувь, үнэ 7 хувь орчим өснө гэж тооцсон байхад зарлага 28 хувиар нэмэгдэж байгаа нь анхаарал татаж байна.\n\nУлсын Их Хурал 2026 оны тавдугаар сарын 29-нд нэгдсэн төсвийн 2027 оны төсвийн хүрээний мэдэгдлийг баталж, зарлагын дээд хэмжээг 36.5 их наяд төгрөг буюу ДНБ-ий 31.9 хувь, алдагдлыг ДНБ-ий 1.5 хувь гэж тогтоосон байв. Гурван сарын дараа өргөн барьсан төсөлд зарлага 43.6 их наяд төгрөг, алдагдал ДНБ-ий 2.0 хувь болж, хуулиар зөвшөөрөгдөх дээд хязгаартаа тулжээ. Үүнийг зөвшөөрүүлэхээр Засгийн газар Төсвийн тогтвортой байдлын тухай хуульд нэмэлт оруулах төсөл оруулсан байна.\n\nТөсвийн тогтвортой байдлын зөвлөл есдүгээр сарын 16-ны дүгнэлтдээ 2027 оны зарлага ДНБ-ий 37.8 хувь болж, зөвлөлийн тооцсон оновчтой түвшнээс 27 хувь буюу 10.8 нэгж хувиар давж байгааг тэмдэглэжээ. Төсөлд ногдол ашгийн орлогыг нийт 6.71 их наяд төгрөг гэж тооцсон нь татварын бус орлогын 81.1 хувийг эзэлж байна. 2027 он бол Ерөнхийлөгчийн сонгуулийн он бөгөөд 2028 оны Улсын Их Хурлын сонгуулийн өмнөх он юм.", textEn:"Mongolia's draft consolidated budget for 2027 puts total spending at 43.6 trillion tugriks, a rise of 28 percent in a single year. The consolidated budget spent 31.3 trillion tugriks in 2025, while the 2026 budget was approved at 32.98 trillion and is now being revised to 34.0 trillion. Spending is rising by 28 percent even though the economy is assumed to grow 5.8 percent in real terms and prices by around 7 percent.\n\nOn May 29, 2026, the State Great Khural approved the 2027 budget framework statement, setting the spending ceiling at 36.5 trillion tugriks, or 31.9 percent of GDP, and the deficit at 1.5 percent of GDP. Three months later, the submitted draft put spending at 43.6 trillion tugriks and the deficit at 2.0 percent of GDP, reaching the legally permitted maximum. To allow this, the Government has submitted a bill to amend the Fiscal Stability Law.\n\nIn its conclusion of September 16, the Fiscal Stability Council noted that 2027 spending would reach 37.8 percent of GDP, exceeding the Council's estimated optimal level of 27 percent by 10.8 percentage points. The draft counts dividend income of 6.71 trillion tugriks, or 81.1 percent of non-tax revenue. 2027 is a presidential election year, and the year before the 2028 parliamentary election."},
  {id:4, cat:"ediin-zasag", title:"“Эрдэнэс Тавантолгой” есөн сард 28.6 сая тонн нүүрс олборлож, орлого нь 2 тэрбум долларыг давжээ", titleEn:"Erdenes Tavan Tolgoi mines 28.6 million tonnes of coal in nine months as revenue tops $2 billion", time:"1 цаг", timeEn:"1 hour", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Mining%20Drill%20at%20Dudhichua%20Coal%20Mine.jpg?width=760", text:"“Эрдэнэс Тавантолгой” ХК 2026 оны эхний есөн сард 28.6 сая тонн нүүрс олборлож, 29 сая тонныг борлуулснаа компанийн гүйцэтгэх захирал Б.Чагнаадорж Ерөнхий сайд Н.Учрал тус уурхайд ажиллах үеэр танилцууллаа. Олборлолт өмнөх оны мөн үеэс 30 хувиар, борлуулалт 48-50 хувиар нэмэгдсэн үзүүлэлт юм. Борлуулалтын орлого 2 тэрбум ам.долларыг давж, төлөвлөгөөг 126 хувиар биелүүлжээ.\n\nКомпанийн цэвэр ашиг 1.5 их наяд төгрөгт хүрч, жилийн төлөвлөгөөг есөн сарын байдлаар 48 хувиар давуулан биелүүлсэн байна. Тайлант хугацаанд улс, орон нутгийн төсөвт 1.4 их наяд төгрөгийн татвар, төлбөр, хураамж төлж, төлөвлөгөөгөө 33 хувиар давуулсан бөгөөд төрийн өмчийн ногдол ашиг 1 их наяд төгрөгийг бодитоор төвлөрүүлжээ. Түүнчлэн “Чингис хаан” Үндэсний баялгийн санд энэ ондоо багтаан 675 тэрбум төгрөгийг төвлөрүүлэхээр ажиллаж байна.\n\nКомпани 2010 онд байгуулагдсанаас хойш нийт 210 сая тонн нүүрс олборлоод байна. 2026 оны долоодугаар сарын 1-нээс өртөг зардал бууруулах хөтөлбөрийг хэрэгжүүлснээр 604 тэрбум төгрөгийн зардлыг хэмнэж, нэг тонн нүүрсний өртгийг 6 ам.доллароор бууруулсан аж. Цаашид хөрс тээврийн конвейер, Бортээг, Бор толгой, Харзаат хэсгүүдийн төмөр замыг гол шугамтай холбох төслүүдийг эхлүүлэхээр төлөвлөж байна.", textEn:"Erdenes Tavan Tolgoi mined 28.6 million tonnes of coal and sold 29 million tonnes in the first nine months of 2026, chief executive B. Chagnaadorj told Prime Minister N. Uchral during his visit to the mine. Output rose 30 percent on a year earlier, while sales grew by 48 to 50 percent. Sales revenue exceeded 2 billion US dollars, reaching 126 percent of the plan.\n\nNet profit reached 1.5 trillion tugriks, exceeding the annual plan by 48 percent after nine months. In the same period the company paid 1.4 trillion tugriks in taxes, fees and charges to the state and local budgets, 33 percent above plan, and transferred 1 trillion tugriks in state dividends. It is also working to channel 675 billion tugriks into the Chinggis Khaan National Wealth Fund this year.\n\nSince its founding in 2010, the company has mined a total of 210 million tonnes of coal. A cost-reduction programme running since July 1, 2026, has saved 604 billion tugriks and cut the cost per tonne of coal by 6 dollars. The company plans to start projects linking the overburden conveyor and the railways of the Borteeg, Bor Tolgoi and Kharzaat sections to the main line."},
  {id:5, cat:"niigem", title:"Өргөдлийн байнгын хороо: Иргэдийн 73 өргөдлийн 24.7 хувийг шийдвэрлэж, 65.8 хувь нь шийдвэрлэх шатанд байна", titleEn:"Petitions committee: 24.7% of 73 citizens' petitions resolved, 65.8% in progress", time:"1 цаг 15 мин", timeEn:"1 hour 15 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/S%C3%BCkhbaatar%20Square.jpg?width=760", text:"Улсын Их Хурлын Өргөдлийн байнгын хороо өчигдөр хуралдаж, тус хорооноос Засгийн газар, яам, агентлагт шийдвэрлүүлэхээр илгээсэн иргэд, хуулийн этгээдийн өргөдөл, гомдлыг хэрхэн шийдвэрлэсэн тухай мэдээллийг сонсон хэлэлцлээ. Хуралдаан Төрийн ордны “Жанжин Д.Сүхбаатар” танхимд 11 цаг 05 минутад 52.4 хувийн ирцтэй эхэлж, Байнгын хорооны дарга О.Номинчимэг удирдан явуулав.\n\nУлсын Их Хурлын дарга, Өргөдлийн болон Хууль зүйн байнгын хороонд 2025 оны есдүгээр сарын 10-наас 2026 оны аравдугаар сарын 13-ны хугацаанд ирүүлсэн нийт 73 өргөдөл, гомдлыг Засгийн газрын 18 байгууллага, албан тушаалтанд шилжүүлсэн байна. Эдгээрийн 24.7 хувийг шийдвэрлэсэн, 65.8 хувь нь шийдвэрлэх шатанд байгааг Монгол Улсын сайд, Засгийн газрын Хэрэг эрхлэх газрын дарга Б.Энхбаяр танилцууллаа. Иргэдээс ирүүлсэн өргөдөл, гомдлын дийлэнх хувийг орон сууцтай холбоотой асуудал эзэлж байна.\n\nОрон сууцны захиалгын гэрээний улмаас хохирсон иргэдийн асуудлыг шалгаж шийдвэрлэх үүрэг бүхий ажлын хэсгийг Ерөнхий сайдын 2026 оны 154 дүгээр захирамжаар Хууль зүй, дотоод хэргийн сайдаар ахлуулан байгуулсан бөгөөд одоогоор 870 гаруй өргөдөл, гомдлыг хүлээн авч, шалгаж байна. Тэтгэврийн зөрүүг арилгах хүрээнд тэтгэвэр бодох сарын цалингийн дээд хэмжээг 1,404,000 төгрөгөөс 2,400,000 төгрөг болгон тооцож, 328.5 тэрбум төгрөгийг Нийгмийн даатгалын сангийн 2027 оны төсөвт тусгажээ.", textEn:"The Standing Committee on Petitions of the State Great Khural met yesterday to hear how citizens' and legal entities' petitions sent to the Government, ministries and agencies have been resolved. The meeting began at 11:05 in the General D. Sukhbaatar hall of the Government Palace with 52.4 percent attendance, chaired by committee chair O. Nominchimeg.\n\nA total of 73 petitions received between September 10, 2025 and October 13, 2026 were forwarded to 18 government bodies and officials. B. Enkhbayar, Minister of Mongolia and Head of the Cabinet Secretariat, reported that 24.7 percent of them have been resolved and 65.8 percent are in progress. Most of the petitions from citizens concern housing.\n\nA working group led by the Minister of Justice and Home Affairs was set up under the Prime Minister's Order No. 154 of 2026 to investigate and resolve cases of citizens harmed by housing reservation contracts; it has so far received more than 870 petitions. To close pension gaps, the maximum monthly salary used to calculate pensions was raised from 1,404,000 to 2,400,000 tugriks, with 328.5 billion tugriks included in the Social Insurance Fund's 2027 budget."},
  {id:6, cat:"niigem", title:"Арваннэгдүгээр сард ихэнх нутгаар олон жилийн дунджаас хүйтэн, цас их орно", titleEn:"November to be colder than average across most of Mongolia, with heavy snow", time:"1 цаг 30 мин", timeEn:"1 hour 30 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/20250101%20Winter%20in%20Mongolia23.jpg?width=760", text:"2026 оны арваннэгдүгээр сарын цаг агаарын урьдчилсан төлвийг Цаг уур, орчны шинжилгээний газраас мэдээллээ. Баруун аймгуудын нутгаар агаарын дундаж температур олон жилийн дунджийн орчим, бусад нутгаар дунджаас хүйтэн байх төлөвтэй байна. Хур тунадас Говь-Алтай, Баянхонгорын өмнөд хэсгээр олон жилийн дунджаас ахиу, бусад нутгаар дунджийн орчим орох төлөвтэй байгаа аж.\n\nТөвийн аймгуудын нутгаар энэ сард агаарын дундаж температур нийт нутгаар олон жилийн дунджаас хүйтэн, хур тунадас дунджийн орчим байх бол зүүн аймгуудын нутгаар Хэнтий болон Дорнодын хойд хэсгээр дунджаас хүйтэн, бусад нутгаар дунджийн орчим байх төлөвтэй байна. Улаанбаатар хотод агаарын дундаж температур ихэнх нутгаар олон жилийн дунджаас хүйтэн, хур тунадас нутгийн өмнөд хэсгээр дунджаас ахиу байх төлөвтэй байгаа аж.\n\nНэгдүгээр арав хоногийн эхэн болон дунд үеэр ихэнх нутгаар цас орж, салхи ширүүсэн, цасан болон шороон шуурга шуурч болзошгүй байна. Агаарын температур огцом буурах, цочир хүйтрэх үзэгдэл ажиглагдах магадлалтай тул малчид хадлан тэжээл бэлтгэх, малын хашаа хороо болон өвөлжилтийн бэлтгэлийг хангах, иргэд богино хугацааны цаг агаарын нарийвчилсан урьдчилсан мэдээ, сэрэмжлүүлгийг тогтмол авч ашиглахыг мэргэжлийн байгууллагаас зөвлөлөө.", textEn:"The National Agency for Meteorology and Environmental Monitoring has published its weather outlook for November 2026. Average temperatures in the western aimags are expected to be near the long-term average, while most other areas will be colder than average. Precipitation in southern Govi-Altai and Bayankhongor is expected to exceed the long-term average, with near-average amounts elsewhere.\n\nIn the central aimags, average temperatures are expected to be below the long-term average across the whole region, with precipitation near average. In the east, Khentii and northern Dornod will be colder than average, with other areas near average. In Ulaanbaatar, temperatures are expected to be colder than average in most places, with above-average precipitation in the southern part of the area.\n\nSnow is likely in most areas in the early and middle part of the first ten days of the month, with strong winds and snow and dust storms possible. With sudden temperature drops and sharp cold snaps possible, herders are advised to prepare hay and fodder and ready livestock shelters for winter, while citizens are urged to follow short-term detailed forecasts and warnings regularly."},
  {id:7, cat:"sport", title:"Э.Цэндбаатар дэлхийн чансааны эхний аравт багтдаг М.Якубовтой маргааш тулалдана", titleEn:"E. Tsendbaatar to face world top-ten boxer M. Yakubov tomorrow", time:"2 цаг", timeEn:"2 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Boxing%20gloves%20Bail%2010-OZ%20(2).jpg?width=760", text:"Монгол Улсын гавьяат тамирчин, мэргэжлийн боксчин Э.Цэндбаатар Тажикистаны Мухаммадхужа Якубовтой энэ сарын 14-ний бямба гарагт тулалдахаар болжээ. Мэргэжлийн боксын рингэнд ялагдал хүлээгээгүй яваа Монголын тамирчин энэ удаад дэлхийн чансааны эхний аравт эрэмбэлэгддэг өрсөлдөгчтэй хүч үзэх юм.\n\nТус тулаан АНУ-ын Техас мужийн Эль-Пасо хотод арваннэгдүгээр сарын 13-ны баасан гарагийн орой, орон нутгийн цагаар зохион байгуулагдана. Харин цагийн зөрүүнээс шалтгаалан Монголын цагаар арваннэгдүгээр сарын 14-ний бямба гарагийн өглөө болох аж. Энэ нь Э.Цэндбаатарын хувьд мэргэжлийн замналдаа гарч буй хамгийн чухал тулаануудын нэг болохыг мэргэжилтнүүд онцолж байна.\n\nЭ.Цэндбаатар мэргэжлийн боксын замналаа эхлүүлснээсээ хойш нэг ч ялагдал хүлээгээгүй амжилтаа хадгалж байна. Харин түүний энэ удаагийн өрсөлдөгч Мухаммадхужа Якубов мэргэжлийн бокст нийт 24 тулаан хийж, 23 ялалт байгуулж, нэг удаа ялагдсан үзүүлэлттэй аж. Хоёр боксчны тулааныг анх 2026 оны дөрөвдүгээр сард зохион байгуулахаар товлож байсан юм. Гэвч М.Якубов бэлтгэлийн үеэр бэртэл авснаар товлосон хугацаанд рингэнд гарах боломжгүй болж, тулаан долоон сарын дараа болж байна.", textEn:"Honoured Athlete of Mongolia and professional boxer E. Tsendbaatar will fight Tajikistan's Muhammadkhuja Yakubov on Saturday, November 14. The Mongolian boxer, unbeaten in the professional ring, faces an opponent ranked in the world's top ten.\n\nThe fight will take place in El Paso, Texas, on the evening of Friday, November 13, local time. Because of the time difference, it will be Saturday morning, November 14, in Mongolia. Experts note that this is one of the most important fights of Tsendbaatar's professional career.\n\nTsendbaatar has kept an unbeaten record since starting his professional career. His opponent, Muhammadkhuja Yakubov, has fought 24 professional bouts, winning 23 and losing once. The two boxers were originally scheduled to meet in April 2026, but Yakubov was injured in training and could not enter the ring on time, so the fight is taking place seven months later."},
  {id:8, cat:"sport", title:"Д.Сарантуяа самбо бөхийн дэлхийн аварга шалгаруулах тэмцээнээс мөнгөн медаль хүртлээ", titleEn:"D. Sarantuya wins silver at the World Sambo Championships", time:"2 цаг 30 мин", timeEn:"2 hours 30 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Athl%C3%A8te%20de%20Sambo%2003.jpg?width=760", text:"Самбо бөхийн дэлхийн аварга шалгаруулах 50 дахь удаагийн тэмцээн энэ сарын 6-8-ны өдрүүдэд Узбекистан улсын Ташкент хотод боллоо. Монгол Улсыг төлөөлөн спорт болон байлдааны самбо бөхийн эрэгтэй, эмэгтэй төрлүүдэд нийт 20 тамирчин, өрвөн багш, дасгалжуулагчийн хамт оролцсон байна.\n\nТус тэмцээний спорт самбо бөхийн эмэгтэйчүүдийн 54 кг жинд Монголын тамирчин Д.Сарантуяа мөнгөн медаль хүртжээ. Дэлхийн аваргын 50 жилийн ойн тэмцээнээс медаль хүртсэн нь Монголын самбо бөхийн хувьд нэр хүндтэй амжилт болж байна.\n\nСамбо бөх нь Монголд олон жилийн түүхтэй, олон улсын тавцанд тогтмол амжилт гаргаж ирсэн спорт юм. Энэ удаагийн дэлхийн аварга шалгаруулах тэмцээнд дэлхийн олон орны шилдэг тамирчид өрсөлдсөн бөгөөд Монголын баг тамирчид спортын болон байлдааны самбо бөхийн төрлүүдэд хүч сорьсон билээ.", textEn:"The 50th World Sambo Championships took place in Tashkent, Uzbekistan, from November 6 to 8. Mongolia was represented by 20 athletes in the men's and women's sport and combat sambo events, accompanied by referees and coaches.\n\nMongolian athlete D. Sarantuya won the silver medal in the women's 54 kg sport sambo category. Winning a medal at the 50th anniversary World Championships is a prestigious achievement for Mongolian sambo.\n\nSambo has a long history in Mongolia and has regularly brought success on the international stage. The world's best athletes competed at this year's World Championships, with the Mongolian team testing itself in both sport and combat sambo."},
  {id:9, cat:"sport", title:"Дакарт Монголын багаа дэмжсэн ээж, охид: “Бид Монголыг маш их санаж байна”", titleEn:"Mother and daughters cheer on Mongolia in Dakar: \"We miss Mongolia so much\"", time:"3 цаг", timeEn:"3 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/AG%2023%203x3%20Basketball%20110.jpg?width=760", text:"“Дакар 2026” залуучуудын олимпын наадмын 3х3 сагсан бөмбөгийн тэмцээний үеэр нэгэн сонирхолтой үзэгчидтэй тааралдлаа. Ээж, ихэр охид Монголын сагсан бөмбөгийн эмэгтэйчүүдийн дээд лигийн аварга Улаанбаатар Амазонс багийн өмсгөлийг өмссөн байв. Хоёр жилийн өмнө Монголоос Сенегалд ирсэн тэд Монголын 3х3 сагсан бөмбөгийн шигшээ багийг дэмжихээр Дакар хотын цэнгэлдэхэд иржээ.\n\n“Бид нэг удаа Улаанбаатарт болсон сагсан бөмбөгийн тоглолт үзэхээр очоод энэ өмсгөлийг авсан юм. Ингээд хоёр жилийн өмнө Монголоос Сенегал руу нүүж ирсэн. Өнөөдөр энд тааралдсандаа баяртай байна. Залуучуудын олимпийн наадмыг үзэж, Монголын баг тамирчдаа дэмжих үнэхээр сайхан байлаа” гэж ээж нь ярилаа. Өнөөдөр Монголын баг тоглоно гэдгийг хараад тэд маш их баярласан аж.\n\n“Бид Монголыг маш удаан хугацаанд санасан болохоор өнөөдөр Монголын багийн тоглолтыг үзэхдээ эх орноосоо авчирсан энэ өмсгөлөө өмсөж, дэмжиж байгаа нь энэ” гэж охид хэлэв. Сенегалд амьдарч буй монгол гэр бүлийн хувьд эх орныхоо тамирчдыг дэргэдээс нь дэмжих нь онцгой баяр хөөр болсон байна.", textEn:"An interesting group of spectators turned up at the 3x3 basketball tournament of the Dakar 2026 Youth Olympic Games: a mother and her twin daughters wearing the jerseys of the Ulaanbaatar Amazons, champions of Mongolia's women's basketball premier league. Having moved from Mongolia to Senegal two years ago, they came to the arena in Dakar to support Mongolia's 3x3 basketball team.\n\n\"We once went to watch a basketball game in Ulaanbaatar and bought these jerseys. Then, two years ago, we moved from Mongolia to Senegal. We are delighted to be here today. It is wonderful to watch the Youth Olympic Games and support our Mongolian athletes,\" the mother said. They were thrilled to see that the Mongolian team was playing today.\n\n\"We have missed Mongolia for such a long time, so today we are wearing the jerseys we brought from home to support the Mongolian team,\" the girls said. For this Mongolian family living in Senegal, cheering on their country's athletes up close was a special joy."},
  {id:10, cat:"soyol", title:"Ерөнхийлөгч У.Хүрэлсүх Улсын драмын эрдмийн театрын уран бүтээлчидтэй уулзав", titleEn:"President U. Khurelsukh meets artists of the State Drama Academic Theatre", time:"3 цаг 30 мин", timeEn:"3 hours 30 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Main%20stage%20in%20Nowy%20Theatre%20in%20Zabrze%2C%20June%202021.jpg?width=760", text:"Монгол Улсын Ерөнхийлөгч Ухнаагийн Хүрэлсүх Улсын драмын эрдмийн театр болон орон нутаг, хувийн хэвшлийн байгууллагад ажиллаж буй уран бүтээлч, инженер, техникийн ажилтан, албан хаагчидтай уулзав. Тэрбээр улс орны оюун санааны тусгаар тогтнолыг бататган хамгаалж, эх хэл, их түүх, эртний соёлоо түгээн дэлгэрүүлж ирсэн үе үеийн хамт олонд орчин цагийн театрын урлаг үүсэж хөгжсөний 95 жилийн ойн баярын мэндийг өргөн дэвшүүллээ.\n\nЕрөнхийлөгч соёл, урлагийн салбарынхан нийгмийг соён гэгээрүүлж, үндэсний эв нэгдлийг бататган бэхжүүлж, ирээдүй хойч үеэ эх орноороо бахархаж, өв соёлоо дээдэлсэн иргэд болгон төлөвшүүлэхэд үнэтэй хувь нэмэр оруулах учиртай гэж онцлов. Тэрбээр үндэсний соёл, урлаг, тэр дундаа театрын урлагт онцгой анхаарч, дэмжлэг үзүүлсээр ирснийг тэмдэглэв. Тухайлбал, Ерөнхий сайд байхдаа Соёлын яамыг сэргээн байгуулснаар соёлын салбар төрийн бодлогод орсон, давсан орлогоо захиран зарцуулах эрхтэй болсон зэргийг Улсын драмын эрдмийн театрын захирал Н.Наранбаатар тодотголоо.\n\nТеатрын хамт олон 95 жилийн хугацаанд үндэсний түүхэн, орчин үеийн, туульсын, хүүхдийн болон дэлхийн орчин үеийн, сонгодог 400 гаруй жүжгийг үзэгчдэд толилуулсан байна. Засгийн газрын Хэрэг эрхлэх товчоо 1931 оны 11 дүгээр сарын 12-ны өдөр Улсын төв театр байгуулах тогтоол гаргаснаар Монголын анхны мэргэжлийн театр үүссэн гэж үздэг. Театрын хамт олон 2031 оныг хүртэл “Шинэ замд хамтдаа” уриан дор ажиллахаар зорилго тавьжээ.", textEn:"President Ukhnaagiin Khurelsukh met artists, engineers, technicians and staff of the State Drama Academic Theatre and of regional and private organisations. He congratulated the generations who have strengthened the country's spiritual independence and spread its mother tongue, great history and ancient culture on the 95th anniversary of modern Mongolian theatre.\n\nThe President stressed that people in culture and the arts enlighten society, strengthen national unity and raise future generations to be proud of their homeland and to honour their heritage. He noted his continued focus on and support for national culture and the arts, including theatre. State Drama Academic Theatre director N. Naranbaatar recalled that, as Prime Minister, he had restored the Ministry of Culture, bringing culture into state policy and giving the sector the right to manage its own surplus income.\n\nOver 95 years, the theatre's company has presented more than 400 national historical, contemporary, epic, children's and world classical and modern plays. Mongolia's first professional theatre is considered to have been founded when the Government Secretariat issued a resolution on November 12, 1931, establishing the State Central Theatre. The company has set itself the goal of working under the motto \"Together on a New Path\" until 2031."},
  {id:11, cat:"soyol", title:"Хулсан үзэг, бийр, таталган тигээр урласан монгол бичгийн бүтээлүүдийг дэлгэлээ", titleEn:"Mongolian calligraphy works in bamboo pen, brush and traditional styles go on display", time:"4 цаг", timeEn:"4 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Mongolian%20Calligraphy%20(1).jpg?width=760", text:"“Соёлын бүтээлч сар” аяны хүрээнд Байгалийн шинжлэх ухааны үндэсний музейд Их Эзэн Чингис хаантай холбогдох Монгол бичгийн түүхэн дурсгалуудаас бүрдсэн “Монгол бичиг — Монгол бахархал” түр үзэсгэлэн нээлтээ хийлээ. Үзэсгэлэнгийн нээлтэд Байгалийн шинжлэх ухааны үндэсний музейн захирал Н.Манчук, МУИС-ийн Сургалт, оюутны хөгжил эрхэлсэн проректор, доктор, профессор Д.Заяабаатар, МУИС-ийн Монгол хэл, хэл шинжлэлийн тэнхимийн дэргэдэх оюутны Монгол бичиг соёлын “Хос уянга” нэгдлийн тэргүүн Ч.Өнөрзаяа нар оролцож үг хэлсэн юм.\n\n“Монголын сайхан бичигтэн”, “Мөнх тэнгэрийн бичиг” олон улсын уралдааны шагналтууд болон оюутан залуусын хулсан үзэг, бийр, угалзан, дөрвөлжин эвхмэл, хичээнгүй болон таталган тигээр урласан шилдэг 32 бүтээл дэлгэгдлээ. Нээлтийн үеэр “Монголын сайхан бичигтэн-2023” олон улсын уралдааны тэргүүн байр, “Мөнх тэнгэрийн бичиг-2026” олон улсын үзэсгэлэнгийн тусгай байрын шагналт, “Хос уянга” нэгдлийн дэд тэргүүн, оюутан Т.Хонгорзул, мөн “Мөнх тэнгэрийн бичиг-2026” олон улсын үзэсгэлэнгийн дэд байрын шагналт Б.Бат-Эрдэнэ нар каллиграфийн урлагийн гайхамшигт үзүүлбэрийг хүрэлцэн ирсэн зочдод сонирхууллаа.\n\nМонгол бичиг нь Монгол үндэстний оюуны их өв бөгөөд залуу үедээ өвлүүлэн уламжлуулах нь соёлын бодлогын чухал хэсэг болж байна. Үзэсгэлэн нь монгол бичгийн гоо зүй, уран бичлэгийн уламжлалыг олон нийтэд таниулах, залуусыг монгол бичгээр бичихэд уриалах зорилготой аж.", textEn:"As part of the \"Creative Culture Month\" campaign, the temporary exhibition \"Mongolian Script — Mongolian Pride\", featuring historical artefacts of Mongolian writing linked to Chinggis Khaan, has opened at the National Museum of Natural Sciences. The opening was attended by museum director N. Manchuk, D. Zayabaatar, Vice-Rector for Education and Student Development at the National University of Mongolia, and Ch. Unurzayaa, head of the \"Khos Uyanga\" student association for Mongolian script culture.\n\nThirty-two outstanding works are on display, created by prizewinners of the international competitions \"Beautiful Mongolian Calligraphy\" and \"Eternal Heavenly Script\" and by students, using bamboo pens, brushes and other traditional techniques. At the opening, student T. Khongorzul, first-place winner of \"Beautiful Mongolian Calligraphy 2023\" and special prizewinner of \"Eternal Heavenly Script 2026\", and B. Bat-Erdene, second-place winner of the 2026 exhibition, gave the audience a remarkable calligraphy performance.\n\nMongolian script is a great intellectual heritage of the Mongolian nation, and passing it on to the young generation is an important part of cultural policy. The exhibition aims to introduce the public to the beauty of Mongolian script and the tradition of calligraphy, and to encourage young people to write in Mongolian script."},
  {id:12, cat:"tech", title:"Nvidia-ийн гүйцэтгэх захирал Женсен Хуанг огцорч, компанийн хувьцаа огцом унав", titleEn:"Nvidia CEO Jensen Huang resigns as shares plunge", time:"4 цаг 30 мин", timeEn:"4 hours 30 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Integrated%20circuit%20in%20a%20removed%20package.jpg?width=760", text:"Хиймэл оюуны салбарын хамгийн том чип үйлдвэрлэгч Nvidia компанийн гүйцэтгэх захирал Женсен Хуанг үүрэгт ажлаасаа гарч байгаагаа тус компани пүрэв гарагт мэдэгдлээ. Тэрбээр хэд хоногийн өмнө гэр бүлээс гадуурх харилцаатай байснаа хүлээн зөвшөөрч, гэр бүл болон ажилтнуудаасаа уучлал гуйсан юм. Төлөөлөн удирдах зөвлөл түүний огцрох хүсэлтийг лхагва гарагт хүлээн авсан байна.\n\nШүүмжлэлийн голд орсон харилцаануудын нэг нь Сингапурт төвтэй Megaspeed технологийн компанийн хуучин гүйцэтгэх ажилтан Алис Хуангтай холбоотой бөгөөд түүнийг Хятадын тагнуулын байгууллагад ажиллаж байсан гэж АНУ-ын эрх баригчид сэжиглэж байгаа аж. Түүнчлэн New York Times сонин Хуанг компанийнхаа эрүүл мэндийн асуудал хариуцсан дэд ерөнхийлөгч Кимберли Пауэллтэй ч харилцаатай байсан гэж мэдээлжээ. Энэ нь үндэсний аюулгүй байдлын асуудал үүсгэсэн бөгөөд АНУ-д дэвшилтэт хиймэл оюуны чип Хятадад экспортлохыг тойрсон маргаантай давхцаж байна.\n\nNvidia-ийн санхүүгийн захирал Колетт Кресс түр гүйцэтгэх захирлаар ажиллах бол Хуанг 1993 онд хамтран үүсгэн байгуулсан компанийнхаа удирдах зөвлөлөөс ч гарч, 33 жилийн удирдлагаа дуусгав. Компанийн хувьцаа пүрэв гарагт 12 орчим хувиар унаж, баасан гарагаас хойш зах зээлийн үнэлгээ нь 855 тэрбум ам.доллароор буурчээ. Ерөнхийлөгч Дональд Трамп Apple-ийн хуучин захирал Тим Кукийг залгамжлагчаар санал болгосон бол Илон Маск Хуангыг ажилд авах нь нэр төрийн хэрэг болно гэжээ. Nvidia ирэх долоо хоногт Anthropic компанид 10 тэрбум ам.доллар орчим хөрөнгө оруулахаар бэлтгэж байна.", textEn:"Nvidia, the world's largest maker of artificial intelligence chips, announced on Thursday that chief executive Jensen Huang is stepping down. Days earlier he admitted to extramarital affairs and apologised to his family and to employees. The board accepted his resignation on Wednesday.\n\nOne of the relationships at the centre of the scrutiny involved Alice Huang, a former executive at Singapore-based tech company Megaspeed, whom US authorities suspect of having worked for Chinese intelligence. The New York Times also reported that Huang had an affair with Kimberly Powell, Nvidia's vice president of healthcare, who reported directly to him. The affair has raised national security questions and coincides with a debate in Washington over exporting advanced AI chips to China.\n\nChief financial officer Colette Kress will serve as interim chief executive, while Huang, who co-founded the company in 1993, has also left the board, ending his 33-year tenure. Nvidia shares fell about 12 percent on Thursday, with more than 855 billion dollars wiped off the company's market value since Friday. President Donald Trump has suggested former Apple chief executive Tim Cook as a successor, while Elon Musk said it would be an honour to hire Huang. Nvidia is preparing to invest around 10 billion dollars in AI developer Anthropic."},
  {id:13, cat:"delhii", title:"АНУ-ын төлөөлөгчид Путинтай энхийн хэлэлцээ хийхээр Москвад хүрэлцэн ирлээ", titleEn:"US envoys arrive in Moscow for peace talks with Putin", time:"5 цаг", timeEn:"5 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Moscow%2005-2012%20Kremlin%2022.jpg?width=760", text:"АНУ-ын төлөөлөгчид Стив Уиткофф, Жаред Кушнер нар Оросын Ерөнхийлөгч Владимир Путинтай дээд түвшний энхийн хэлэлцээ хийхээр Москвад хүрэлцэн ирлээ. Хэлэлцээ нь Орос, Украины мөргөлдөөний асуудлаарх дипломат хүчин чармайлт, олзлогдогч солилцох зэрэг хүмүүнлэгийн тохиролцоонд чиглэж байгаа аж.\n\nЭнэхүү айлчлал нь Украины дайныг зогсоох чиглэлд АНУ-ын зүгээс авч буй хамгийн сүүлийн дипломат алхам болж байна. Уиткофф, Кушнер нар нь Ерөнхийлөгч Дональд Трампын ойрын итгэлт хүмүүс бөгөөд өмнө нь ч Оросын талтай хэлэлцээ хийж байсан туршлагатай юм.\n\nХэлэлцээний үр дүн олон улсын анхаарлын төвд байгаа бөгөөд талууд гал зогсоох, олзлогдогч солилцох асуудлаар ахиц гаргах эсэх нь тодорхойгүй байна. Орос, Украины дайн дөрөв дэх жилдээ үргэлжилж байгаа бөгөөд энхийн хэлэлцээний өмнөх оролдлогууд үр дүнд хүрээгүй билээ.", textEn:"American representatives Steve Witkoff and Jared Kushner have arrived in Moscow for high-level peace discussions with Russian President Vladimir Putin. The talks focus on diplomatic efforts concerning the Russia-Ukraine conflict and possible humanitarian agreements, including prisoner exchanges.\n\nThe visit is the latest diplomatic step by the United States towards ending the war in Ukraine. Witkoff and Kushner are close confidants of President Donald Trump and have experience negotiating with the Russian side.\n\nThe outcome of the talks is under close international attention, and it remains unclear whether the sides will make progress on a ceasefire or prisoner exchanges. The Russia-Ukraine war is now in its fourth year, and previous attempts at peace talks have not produced results."},
  {id:14, cat:"delhii", title:"COP31: НҮБ-ын тэргүүн чулуужсан түлшийг халахыг уриалав", titleEn:"COP31: UN chief urges the world to leave fossil fuels behind", time:"5 цаг 30 мин", timeEn:"5 hours 30 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Industry%20Climate%20Change%20Conference%202025%2003.jpg?width=760", text:"Дэлхийн улс орнуудын төлөөлөгчид Турк улсад болж буй НҮБ-ын Уур амьсгалын өөрчлөлтийн тухай 31 дэх удаагийн бага хурал буюу COP31-д оролцож, уур амьсгалын санхүүжилт, байгаль орчныг хамгаалах, олон улсын уур амьсгалын амлалтыг биелүүлэх стратегийг хэлэлцэж байна.\n\nНҮБ-ын Ерөнхий нарийн бичгийн дарга бага хурлын үеэр чулуужсан түлшийг үе шаттайгаар халах шаардлагатайг онцолж, “Чулуужсан түлш үлэг гүрвэлийн замаар явах ёстой” гэж мэдэгдлээ. Тэрбээр улс орнуудыг нүүрс, газрын тос, байгалийн хийнээс татгалзаж, сэргээгдэх эрчим хүч рүү шилжих үйл явцыг хурдасгахыг уриалав.\n\nCOP31 нь дэлхийн дулаарлыг 1.5 хэмээс хэтрүүлэхгүй байх Парисын хэлэлцээрийн зорилтыг биелүүлэхэд чухал үе шат болж байна. Хөгжиж буй орнууд уур амьсгалын өөрчлөлтөд дасан зохицох, хохирлыг нөхөхөд шаардлагатай санхүүжилтийг нэмэгдүүлэхийг шаардаж байгаа бол хөгжингүй орнууд ялгаруулалтыг бууруулах үүрэг амлалтаа биелүүлэхийг шаардаж байна.", textEn:"Representatives from different countries are meeting at the 31st United Nations Climate Change Conference, COP31, in Türkiye, discussing climate finance, environmental protection and strategies to meet international climate commitments.\n\nThe UN Secretary-General stressed at the conference that fossil fuels must be phased out, saying they \"must go the way of dinosaurs\". He urged countries to accelerate the shift away from coal, oil and gas towards renewable energy.\n\nCOP31 is an important milestone in meeting the Paris Agreement goal of keeping global warming below 1.5 degrees. Developing countries are demanding more finance to adapt to climate change and to cover loss and damage, while developed countries are pressing for emissions-reduction commitments to be honoured."},
  {id:15, cat:"delhii", title:"Газа дахь Израилийн агаарын цохилтод дөрвөн хүн амь үрэгдэв", titleEn:"Four killed in Israeli airstrike in Gaza", time:"6 цаг", timeEn:"6 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Damage%20in%20Gaza%20Strip%20during%20the%20October%202023%20-%2029.jpg?width=760", text:"Израилийн агаарын цохилтод Газын зурвасын Хан Юнис хот дахь Нассер эмнэлгийн ойролцоох барилга өртөж, дор хаяж дөрвөн хүн амь үрэгдэж, хэд хэдэн хүн шархадсан гэж Газын иргэний хамгаалалтын алба мэдээллээ.\n\nГаза дахь мөргөлдөөн үргэлжилж байгаа бөгөөд эмнэлгийн ойролцоо болсон энэхүү цохилт нь энгийн иргэдийн аюулгүй байдлын талаарх санаа зовнилыг улам нэмэгдүүлж байна. Шархадсан хүмүүст эмнэлгийн тусламж үзүүлж байгаа аж.\n\nОлон улсын хамтын нийгэмлэг Газад гал зогсоох, хүмүүнлэгийн тусламжийг нэвтрүүлэх чиглэлд хүчин чармайлт гаргаж байгаа ч газар дээрх нөхцөл байдал хурцадмал хэвээр байна. НҮБ болон тусламжийн байгууллагууд энгийн иргэдийг хамгаалах, хүмүүнлэгийн коридорыг нээлттэй байлгахыг уриалсаар байна.", textEn:"An Israeli airstrike on a building near Nasser Hospital in Khan Younis in the Gaza Strip killed at least four people and injured several others, according to Gaza's civil defence authorities.\n\nFighting in Gaza continues, and this strike near a hospital has deepened concern for the safety of civilians. The injured are receiving medical care.\n\nThe international community is working towards a ceasefire in Gaza and the delivery of humanitarian aid, but conditions on the ground remain tense. The United Nations and aid organisations continue to call for civilians to be protected and humanitarian corridors to be kept open."},
  {id:16, cat:"delhii", title:"Бруклинд барилга нурж, найман хүн амь үрэгдэв", titleEn:"Eight dead as building collapses in Brooklyn", time:"6 цаг 30 мин", timeEn:"6 hours 30 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Lower%20Manhattan%20from%20Jersey%20City%20September%202020%20panorama.jpg?width=760", text:"АНУ-ын Нью-Йорк хотын Бруклин дүүрэгт барилга нурж, найман хүн амь үрэгдсэн бөгөөд аврах багийнхан нурангид дарагдсан хүмүүсийг аврах ажиллагааг үргэлжлүүлж байна. Нурангиас жирэмсэн эмэгтэйг амьд гаргасан байна.\n\nБарилга нурсан шалтгаан одоогоор тодорхойгүй байгаа бөгөөд ослын газарт аврах ажиллагаа үргэлжилж, өөр хүмүүс нурангид дарагдсан байх магадлалтай гэж албаныхан мэдээлж байна. Ойр орчмын гудамжийг хааж, онцгой байдлын албаныхан ажиллаж байна.\n\nНью-Йорк хотын удирдлагууд ослын шалтгааныг тогтоохоор мөрдөн шалгах ажиллагаа эхлүүлжээ. Барилгын аюулгүй байдлын дүрэм, хуучин барилгуудын засвар үйлчилгээний асуудал дахин анхаарлын төвд орж байна.", textEn:"Eight people have died after a building collapsed in the Brooklyn borough of New York City, while emergency teams continue rescue operations. A pregnant woman was pulled alive from the rubble.\n\nThe cause of the collapse is not yet known, and officials say others may still be trapped under the debris. Nearby streets have been closed as emergency services work at the scene.\n\nNew York City authorities have opened an investigation to determine the cause of the collapse. The disaster has renewed attention on building safety rules and the maintenance of older buildings."},
  {id:17, cat:"delhii", title:"Индонезийн дэд ерөнхийлөгч нэр дэвших эрхийн маргааны улмаас огцров", titleEn:"Indonesia's Vice President resigns amid eligibility dispute", time:"7 цаг", timeEn:"7 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Jakarta%20Indonesia%20Business-in-Kota-Jakarta-01.jpg?width=760", text:"Индонез Улсын дэд ерөнхийлөгч Гибран Ракабуминг Рака огцорч байгаа талаар мэдээлэл гарчээ. Түүний нэр дэвших эрх болон боловсролын үнэмлэхний талаарх асуулт гарсантай холбогдуулан огцрох шийдвэр гарсан гэж мэдээлж байна.\n\nГибран Ракабуминг Рака нь Индонезийн өмнөх ерөнхийлөгч Жоко Видодогийн хүү бөгөөд 2024 оны аравдугаар сард дэд ерөнхийлөгчийн албан тушаалд орсон билээ. Түүнийг сонгуульд нэр дэвших үед насны болон боловсролын шаардлага хангасан эсэх талаар маргаан гарч байсан юм.\n\nЭнэхүү огцролт нь Индонезийн улс төрд томоохон үйл явдал болж, засгийн газрын бүрэлдэхүүн, эрх баригч эвслийн ирээдүйн талаар асуулт үүсгэж байна. Огцрох үйл явц болон залгамжлагчийг томилох журам хэрхэн явагдах нь олон нийтийн анхаарлын төвд байна.", textEn:"Indonesia's Vice President Gibran Rakabuming Raka has resigned, according to reports, after questions were raised about his eligibility and academic credentials.\n\nGibran Rakabuming Raka, the son of former Indonesian president Joko Widodo, took office as Vice President in October 2024. His candidacy in the election had already been surrounded by debate over whether he met the age and education requirements.\n\nThe resignation is a major event in Indonesian politics, raising questions about the composition of the government and the future of the ruling coalition. How the resignation process unfolds and how a successor will be appointed are now the focus of public attention."},
  {id:18, cat:"delhii", title:"Си Жиньпин: Тайванийг нэгтгэх нь зайлшгүй, түүхийг зогсоож болохгүй", titleEn:"Xi: Taiwan 'reunification' must happen, history cannot be stopped", time:"7 цаг 30 мин", timeEn:"7 hours 30 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Taipei%20Taiwan%20Taipei-101-Tower-01.jpg?width=760", text:"БНХАУ-ын дарга Си Жиньпин Тайваний асуудлаар мэдэгдэл хийж, Тайванийг эх газартай нэгтгэх нь зайлшгүй бөгөөд түүхийг зогсоож болохгүй гэж мэдэгдлээ. Түүний энэхүү мэдэгдэл нь Тайваний хоолойн асуудлаарх олон улсын анхаарлыг дахин татлаа.\n\nТайваний хоолойн энх тайван, тогтвортой байдал нь бүс нутгийн төдийгүй дэлхийн эдийн засаг, худалдаанд чухал ач холбогдолтой гэж “Их-7” бүлгийн Гадаад хэргийн сайд нар Парист болсон уулзалтынхаа дараа гаргасан хамтарсан мэдэгдэлдээ онцолсон билээ. Тайваний асуудал олон улсын харилцааны хамгийн эмзэг сэдвүүдийн нэг хэвээр байна.\n\nБээжин Тайванийг өөрийн нутаг дэвсгэрийн салшгүй хэсэг гэж үздэг бол Тайбэй өөрийн ардчилсан засаглал, бие даасан байдлаа хамгаалсаар байна. АНУ болон түүний холбоотнууд Тайваний хоолойд энх тайван, тогтвортой байдлыг хадгалахыг шаардаж, статусыг нэг талын хүчээр өөрчлөхгүй байхыг анхааруулж байна.", textEn:"Chinese leader Xi Jinping has said that the \"reunification\" of Taiwan with the mainland must happen and that history cannot be stopped. His remarks have once again drawn international attention to the Taiwan Strait.\n\nThe foreign ministers of the Group of Seven stressed in a joint statement after their meeting in Paris that peace and stability in the Taiwan Strait matter not only for the region but for the global economy and trade. The Taiwan issue remains one of the most sensitive topics in international relations.\n\nBeijing regards Taiwan as an inseparable part of its territory, while Taipei continues to defend its democratic system and autonomy. The United States and its allies insist on preserving peace and stability in the Taiwan Strait and warn against changing the status quo by force."},
  {id:19, cat:"oron-nutag", region:"zavkhan", title:"Завхан: Ойрын өдрүүдэд ихэнх нутгаар цасан шуурга шуурна", titleEn:"Zavkhan: blizzards expected across most of the aimag in the coming days", time:"8 цаг", timeEn:"8 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Blizzard%20CYCB.jpg?width=760", text:"Ойрын өдрүүдэд Завхан аймгийн ихэнх нутгаар цас орж, цасан шуурга шуурч, эрс хүйтрэх төлөвтэй байгаа тул болзошгүй эрсдэлээс урьдчилан сэргийлэхийг аймгийн Ус цаг уур, орчны шинжилгээний төвөөс анхаарууллаа.\n\nЦаг агаарын урьдчилсан мэдээгээр арваннэгдүгээр сарын 12-ны өдөр Баян-Өлгий аймгийн нутаг, Ховд аймгийн хойд хэсгээр, 12-ноос 13-нд шилжих шөнө Увс, Завхан аймгийн нутгаар, 13-ны өдөр Архангай аймгийн нутаг, Хөвсгөл, Булган аймгийн өмнөд хэсэг болон Төв аймгийн баруун хэсгээр их хэмжээний цас орно.\n\nТүүнчлэн 12-ны өдөр Завхан аймгийн баруун сумдаар, 12-13-нд шилжих шөнө аймгийн ихэнх нутгаар, 13-14-нд шилжих шөнө мөн Завхан аймгийн нутгаар нойтон цас, цас орж, цасан шуурга шуурах төлөвтэй байна. Иймд малчид, иргэд, тээвэрчид цаг агаарын сэрэмжлүүлгийг тогтмол авч, замд гарахдаа болгоомжтой байхыг мэргэжлийн байгууллагаас зөвлөлөө.", textEn:"Heavy snow, blizzards and a sharp cold snap are expected across most of Zavkhan aimag in the coming days, the aimag's Hydrology and Meteorology Centre has warned, urging precautions against possible risks.\n\nAccording to the forecast, heavy snow will fall on November 12 in Bayan-Ulgii and northern Khovd, on the night of November 12 to 13 in Uvs and Zavkhan, and on November 13 in Arkhangai, southern Khuvsgul and Bulgan, and western Tuv.\n\nWet snow and snow with blizzard conditions are also expected in Zavkhan's western soums on November 12, across most of the aimag on the night of November 12 to 13, and again on the night of November 13 to 14. Herders, residents and drivers are advised to follow weather warnings regularly and to take care when travelling."},
];

function aTitle(a){ return LANG === "en" ? (a.titleEn || a.title) : a.title; }
function aTime(a){ return LANG === "en" ? (a.timeEn || a.time) : a.time; }
function aText(a){ if(a.text) return LANG === "en" ? (a.textEn || a.text) : a.text; return SAMPLE_TEXT[LANG][a.id === 1 ? "long" : "short"]; }
function aRegion(a){ return a.region ? ((REGIONS[LANG] && REGIONS[LANG][a.region]) || a.region) : ""; }

// ===== Ханш · Цаг агаар (өдөр бүр шинэчлэгдэнэ; цаг агаарыг Open-Meteo-гоос шууд татна) =====
const RATES = {date:"2026-11-13", items:[
  {code:"USD", mnt:3602.93, chg:1}, {code:"EUR", mnt:3994.03, chg:-1}, {code:"JPY", mnt:22.56, chg:-1},
  {code:"CNY", mnt:540.26, chg:1}, {code:"KRW", mnt:2.7, chg:0}, {code:"RUB", mnt:43.53, chg:1}, {code:"GBP", mnt:4781.27, chg:-1}
]};
let WEATHER = [
  {city:"Улаанбаатар", cityEn:"Ulaanbaatar", lat:47.9212, lon:106.9186, tz:"Asia/Ulaanbaatar", temp:-1, code:3},
  {city:"Токио", cityEn:"Tokyo", lat:35.6762, lon:139.6503, tz:"Asia/Tokyo", temp:8, code:1},
  {city:"Сөүл", cityEn:"Seoul", lat:37.5665, lon:126.978, tz:"Asia/Seoul", temp:8, code:3},
  {city:"Бээжин", cityEn:"Beijing", lat:39.9042, lon:116.4074, tz:"Asia/Shanghai", temp:4, code:0},
  {city:"Москва", cityEn:"Moscow", lat:55.7558, lon:37.6173, tz:"Europe/Moscow", temp:2, code:3}
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
  {yt:"KfgEZRLz41Y", title:"Мянга нэгэн түүх: Хүрээ хоттой болсон нь", titleEn:"A Thousand and One Stories: How Khuree became a city", src:"МҮОНТ", srcEn:"MNB", srcFull:"МҮОНТ (Монголын үндэсний олон нийтийн телевиз)", srcFullEn:"MNB (Mongolian National Broadcaster)"},
  {yt:"in8zj4A9dKE", title:"ТООН ТОЙМ", titleEn:"By the Numbers", src:"Eagle TV", srcEn:"Eagle TV", srcFull:"Eagle TV (Ийгл телевиз)", srcFullEn:"Eagle TV"},
  {yt:"tj7xvGFHlhM", title:"MINING HUB: Монгол Улсын тэргүүлэх салбар “уул уурхай”-н салбарын өрсөлдөх чадвар ямар вэ?", titleEn:"MINING HUB: How competitive is Mongolia's mining sector?", src:"Eagle TV", srcEn:"Eagle TV", srcFull:"Eagle TV (Ийгл телевиз)", srcFullEn:"Eagle TV"},
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
