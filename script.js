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

// ===== Бодит мэдээнүүд (2026-11-04) — өдөр бүр шинэчлэгдэнэ =====
const ARTICLES = [
  {id:1, cat:"uls-tor", title:"Ерөнхийлөгч: Оюу толгойн ногдол ашгийг иргэдийн дансанд шууд шилжүүл", titleEn:"President: transfer Oyu Tolgoi dividends directly to citizens' accounts", time:"15 мин", timeEn:"15 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Bingham%20Canyon%20Open%20Pit%20Copper%20Mine%202012-09-17%2021-25-59.jpg?width=1000", text:"Монгол Улсын Ерөнхийлөгч У.Хүрэлсүх арваннэгдүгээр сарын 3-нд Ерөнхий сайд Н.Учрал, Сангийн сайд З.Мэндсайхан нартай уулзаж, Оюу толгойгоос 2027 онд орж ирэх ногдол ашгийг иргэдийн дансанд шууд шилжүүлэх чиглэл өглөө. Тэрбээр хөрөнгө оруулагч талаас ногдол ашиг авах хэлэлцээрийг амжилттай хийсэн Засгийн газарт баяр хүргээд, D-Parliament системээр 100 мянга гаруй иргэн ногдол ашгийг өөрсдийн дансанд авах саналыг дэмжсэнийг онцолсон байна.\n\nЕрөнхийлөгчийн хэлснээр байгалийн баялгийн анхны хишгийг орж ирсэн тухай бүрд нь ард иргэдийн дансанд шилжүүлэх нь чухал бөгөөд мөнгийг хэзээ, хэрхэн хийх талаар Засгийн газар хууль эрх зүйн хүрээнд дүрэм журмаа боловсруулж ажиллах ёстой аж. Өмнө нь Засгийн газар гурван их наяд төгрөгийн ногдол ашгаас хоёр их наядаар эрчим хүчний төсөл санхүүжүүлж, нэг их наядыг Хуримтлалын санд төвлөрүүлэхээр төлөвлөж байсан ч аравдугаар сард холбогдох хуулийн төслөө эргүүлэн татсан юм.\n\nСангийн сайд З.Мэндсайхан бэлнээр олгох нь инфляцыг өсгөх эрсдэлтэй ч Ерөнхийлөгч чиглэл өгсөн тул хууль эрх зүйн орчныг бүрдүүлэх шаардлага үүсэж байна гэж мэдэгдлээ. Харин Улсын Их Хурлын гишүүн Н.Алтанхуяг татвар төлөгчдийн мөнгийг бэлнээр тараах нь буруу гэж шүүмжилсэн байна. Иргэн бүрд 857 мянган төгрөг олгох тухай өргөдөл 100 мянган хүний дэмжлэг авсан нь энэ маргааны гол үндэслэл болж байна.", textEn:"President U. Khurelsukh met Prime Minister N. Uchral and Finance Minister Z. Mendsaikhan on November 3 and directed the government to transfer dividends expected from Oyu Tolgoi in 2027 directly to citizens' bank accounts. He congratulated the government on successfully negotiating dividends from the investor side and noted that more than 100,000 citizens supported, through the D-Parliament system, receiving the dividend in their own accounts.\n\nAccording to the President, it is important to transfer the first benefits of natural resources to citizens' accounts as they arrive, and the government must prepare rules within the legal framework on when and how the money will be paid. The government had previously planned to use two trillion tugriks of the three-trillion-tugrik dividend to finance energy projects and to place one trillion in the Savings Fund, but withdrew the relevant draft law in October.\n\nFinance Minister Z. Mendsaikhan said cash payments carry a risk of raising inflation, but that the President's direction creates a need to establish the legal framework. Member of Parliament N. Altankhuyag, by contrast, criticised cash distribution of taxpayers' money as wrong. A petition to pay 857,000 tugriks to each citizen, which gathered 100,000 supporters, is at the centre of the debate."},
  {id:2, cat:"ediin-zasag", title:"Монголбанк: Хэрэглээний зээлийг 48 хүртэлх сараар сунгах боломж олголоо", titleEn:"Central Bank: consumer loans may now be extended to up to 48 months", time:"30 мин", timeEn:"30 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Seat%20of%20the%20European%20Central%20Bank%20and%20Frankfurt%20Skyline%20at%20dawn%2020150422%201.jpg?width=760", text:"Монголбанкны Мөнгөний бодлогын хороо хуралдаж, макро зохистой бодлогын хүрээнд хэрэгжүүлэх арга хэмжээний талаар шийдвэр гаргаж, арваннэгдүгээр сарын 3-нд олон нийтэд танилцууллаа. Шийдвэрийн дагуу хэрэглээний зээлд нэмэлт зээл олгохгүйгээр бүтцийн өөрчлөлт хийх тохиолдолд зээлийн хугацааг нийт 48 хүртэлх сараар сунгаж, тухайн зээлд өр орлогын харьцааны хязгаарлалт үйлчлэхгүй байхаар холбогдох зохицуулалтад өөрчлөлт оруулсан байна.\n\nМонголбанкны ерөнхийлөгч С.Наранцогтын тайлбарласнаар энэ өөрчлөлт нь зээлдэгчдийн сарын төлбөрийн дарамтыг бууруулж, зээлийн бүтцийг илүү уян хатан болгох зорилготой юм. Хугацаа сунгах нь зээлдэгчид нэмэлт өр авахгүйгээр төлбөрөө төлөх боломжийг олгох бөгөөд банкуудад ч зээлийн багцын чанарыг хадгалахад туслах тооцоо бий.\n\nГэхдээ хугацаа сунгаснаар зээлийн нийт хүүгийн зардал өсөж болзошгүйг мэргэжилтнүүд сануулж байна. Иймээс иргэд зээлийн нөхцөлөө өөрчлөхөөс өмнө шинэ хуваарь, нийт төлбөрийн хэмжээг сайтар тооцоолж, банктайгаа зөвшилцөх нь зүйтэй гэж зөвлөж байна.", textEn:"The Monetary Policy Committee of the Bank of Mongolia met and adopted measures under its macroprudential policy framework, presenting the decision to the public on November 3. Under the change, when a consumer loan is restructured without granting an additional loan, its term may be extended to a total of up to 48 months, and the debt-to-income ratio limit will not apply to that loan.\n\nBank of Mongolia Governor S. Narantsogt explained that the change aims to ease borrowers' monthly payment burden and make loan structures more flexible. Extending the term gives borrowers a chance to repay without taking on new debt, and is also expected to help banks preserve the quality of their loan portfolios.\n\nExperts caution, however, that a longer term can increase the total interest cost of a loan. Citizens are therefore advised to carefully calculate the new schedule and total payments, and to agree the terms with their bank, before changing their loan conditions."},
  {id:3, cat:"niigem", title:"Шатахуун: Арваннэгдүгээр сард 92 мянган тонн импортолж, нийлүүлэлт тасалдахгүй", titleEn:"Fuel: 92,000 tonnes to be imported in November, supply will not be interrupted", time:"45 мин", timeEn:"45 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Closure%20of%20Morrisons%20petrol%20station,%20Wetherby%20during%20the%202021%20United%20Kingdom%20fuel%20crisis%20(26th%20September%202021)%20002.jpg?width=760", text:"Шатахууны шуурхай штабаас арваннэгдүгээр сарын 3-нд цаг үеийн асуудлаар мэдээлэл хийж, шатахууны нийлүүлэлт тасалдахгүй тул иргэдийг дараалал үүсгэж, шатахуун нөөцлөх шаардлагагүй гэж анхаарууллаа. Аж үйлдвэр, эрдэс баялгийн дэд сайд Б.Мөнхтамирын мэдээлснээр ОХУ-ын Ангарскийн нефть боловсруулах үйлдвэрээс аравдугаар сард захиалсан 57 мянган тонн бүтээгдэхүүнээс 51 мянган тонн нь ачигдаж, одоогоор замд 5,700 тонн шатахуун тээвэрлэгдэж байна.\n\nӨнөөдрийн байдлаар улсын хэмжээнд АИ-92 автобензин 10 хоног, дизель түлш 28 хоног, онгоцны түлш 36 хоногийн нөөцтэй байна. Арваннэгдүгээр сарын нийлүүлэлтийг нэмэгдүүлэн нийт 92 мянган тонн шатахуун импортлохоор баталгаажуулсан бөгөөд үүнд ОХУ-аас 70 мянган тонн, БНСУ-аас 12 мянган тонн, БНХАУ-аас 8 мянган тонн, Казахстан Улсаас 3 мянган тонн шатахуун авахаар төлөвлөжээ. Энэ нь ердийн үеийн сарын дундаж хэрэглээнээс 20 орчим мянган тонноор илүү захиалга гэсэн үг юм.\n\nШатахууны нийлүүлэлт саатахад вагон тээврийн эргэлт нөлөөлж байгаа бөгөөд Улаанбаатар төмөр замын сүлжээнд шатахуунтай 1,500 орчим вагон байгаагаас Улаанбаатар хот орчимд 200 орчим вагон буюу 7-8 өдрийн хэрэглээ бэлэн байна. Арав, арваннэгдүгээр сар нь зуны түлшнээс өвлийн түлшинд шилждэг үе бөгөөд өвлийн түлшний нөөц хангалттай бүрдсэн гэж албаныхан мэдээллээ. Мөн хөгжлийн бэрхшээлтэй иргэд E-Mongolia-ийн комиссын актаа үзүүлэн дугаарлалгүй үйлчлүүлэх зохицуулалтыг зарим хүн өдөрт олон дахин өөр машинаар ирж ашиглаж байгаа зөрчил илэрсэн тул аж ахуйн нэгжүүд дотоод зохион байгуулалтаараа шийдвэрлэхээр болжээ.", textEn:"The fuel rapid-response headquarters briefed the press on November 3, assuring the public that fuel supply will not be interrupted and that there is no need to queue or stockpile fuel. Deputy Minister of Industry and Mineral Resources B. Munkhtamir said that of the 57,000 tonnes of product ordered in October from Russia's Angarsk refinery, 51,000 tonnes have been shipped and 5,700 tonnes are currently in transit.\n\nNationwide reserves now stand at 10 days for AI-92 petrol, 28 days for diesel and 36 days for aviation fuel. November supply has been increased, with a total of 92,000 tonnes of fuel imports confirmed: 70,000 tonnes from Russia, 12,000 from South Korea, 8,000 from China and 3,000 from Kazakhstan. That is about 20,000 tonnes more than the average monthly consumption in normal times.\n\nWagon turnaround has contributed to earlier supply delays: about 1,500 fuel wagons are on the Ulaanbaatar Railway network, including about 200 wagons around Ulaanbaatar, equal to 7-8 days of consumption. October and November are the transition from summer to winter fuel, and officials say winter fuel reserves are sufficient. Violations were also reported in which the rule allowing people with disabilities to be served without queuing on presentation of an E-Mongolia commission certificate was abused by people arriving several times a day in different cars; businesses will address this through their own internal arrangements."},
  {id:4, cat:"uls-tor", title:"Ерөнхий сайд: Дулаан гараашийг татвараас чөлөөлөх хуулийг шинэчлэн боловсруулна", titleEn:"Prime Minister: law to exempt heated garages from tax will be redrafted", time:"1 цаг", timeEn:"1 hour", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Spiral%20Parking%20Garage%20Ramp,%20John%20Hancock%20Center,%20Michigan%20Avenue,%20Streeterville,%20Chicago,%20IL%20-%2054195641376.jpg?width=760", text:"Монгол Улсын Ерөнхий сайд Н.Учрал дулаан гараашийг татвараас чөлөөлөх холбогдох хуулийг шинэчлэн боловсруулж, Засгийн газрын хуралдаанд танилцуулахыг Сангийн сайд З.Мэндсайханд үүрэг болголоо. E-zasag.mn платформоор гараашны татвар тэглэх санаачилга гарч, 20 хоногт 101,097 иргэн дэмжсэн бөгөөд олон нийтийн өргөдлийг Ерөнхий сайдын зөвлөх О.Батхүү Ерөнхий сайдад хүлээлгэн өгсөн байна.\n\nЭнэ нь E-Zasag платформоор 100 мянган санал авсан анхны олон нийтийн өргөдөл боллоо. Иймд Үл хөдлөх эд хөрөнгийн албан татварын тухай хуульд нэмэлт оруулж, гэр бүлийн хэрэгцээний авто гарааш, авто зогсоолыг татвараас чөлөөлөх санал гарч байна. Ерөнхий сайд өрхийн хэрэгцээний дулаан гарааш, зогсоолыг татвараас чөлөөлөх нь зүйтэй гэсэн байр суурьтай байгаагаа илэрхийлжээ.\n\nЕрөнхий сайдын хэлснээр 2027 он нь хөдөлмөрлөж, хийж бүтээж буй иргэдийг 1.3 их наяд төгрөгийн татварын дарамтаас чөлөөлж, ажлын байр нэмэгдүүлсэн жил байх болно. Тэрбээр саналаа илэрхийлж, шийдвэр гаргахад идэвхтэй оролцсон иргэддээ талархал илэрхийлсэн байна.", textEn:"Prime Minister N. Uchral has instructed Finance Minister Z. Mendsaikhan to redraft the relevant law to exempt heated garages from tax and present it to a Cabinet meeting. An initiative to set garage tax to zero on the E-zasag.mn platform gathered support from 101,097 citizens in 20 days, and the public petition was handed to the Prime Minister by his adviser O. Batkhuu.\n\nIt is the first public petition on the E-Zasag platform to reach 100,000 votes. An amendment to the Immovable Property Tax Law is therefore proposed to exempt family-use car garages and parking spaces from tax. The Prime Minister said he supports exempting household heated garages and parking spaces from tax.\n\nAccording to the Prime Minister, 2027 should be a year that frees working and productive citizens from 1.3 trillion tugriks of tax burden and increases jobs. He thanked citizens who actively took part in expressing their views and in decision-making."},
  {id:5, cat:"ediin-zasag", title:"Ханги-Мандал боомтын чиглэлд экспортын тээврийн хэрэгслийн тоо өдөрт 530 болж өслөө", titleEn:"Export vehicles on Khangi-Mandal route rise to 530 per day", time:"1 цаг", timeEn:"1 hour", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Freight%20trucks%20running%20on%20highway.jpg?width=760", text:"Хилийн боомтуудын экспортын тээвэрлэлтийг эрчимжүүлэх, ачаа тээврийн саатал, хүлээгдлийг бууруулах зорилгоор Зам, тээврийн сайд Б.Дэлгэрсайхан, «Эрдэнэс Тавантолгой» ХК-ийн гүйцэтгэх захирал Б.Чагнаадорж нар Засгийн газар, Ерөнхий сайдаас өгсөн үүрэг, чиглэлийн дагуу албан томилолтоор ажиллаж байна. Ажлын хэсэг арваннэгдүгээр сарын 2-нд хилийн боомт, экспортын тээвэр зохицуулалтын бүсэд ажиллаж, ачаа тээврийн урсгалд үүссэн хүндрэл, тулгамдсан асуудлыг шийдвэрлэхээр холбогдох талуудтай уулзалт, хэлэлцээ хийжээ.\n\nУулзалт, хэлэлцээний үр дүнд зэсийн экспортын тээвэрлэлт хэвийн болж, өдөрт 14 байсан тээврийн хэрэгслийн нэвтрэлтийн тоо 134 болж нэмэгдсэн байна. Мөн Ханги-Мандал боомтын чиглэлд өдөрт 130 байсан экспортын тээврийн хэрэгслийн тоо 530 болж, дөрөв дахин өсжээ. Энэ нь боомтын нэвтрүүлэх хүчин чадал, зохион байгуулалт сайжирч байгаагийн илрэл гэж үзэж байна.\n\nАжлын хэсэг арваннэгдүгээр сарын 3-нд БНХАУ-ын Бугат, Баяннуур хотын чиглэлд албан томилолтоо үргэлжлүүлж, хилийн боомтуудын нэвтрүүлэх хүчин чадлыг нэмэгдүүлэх, экспортын тээвэрлэлтийг тогтворжуулах чиглэлээр холбогдох талуудтай ажиллаж байна. Экспортын урсгал тогтвортой байх нь уул уурхайн бүтээгдэхүүний борлуулалт, улсын валютын орлогод шууд нөлөөлдөг тул энэ ажлыг цаашид ч эрчимжүүлэх төлөвтэй байна.", textEn:"Transport Minister B. Delgersaikhan and Erdenes Tavantolgoi CEO B. Chagnaadorj are working on an official mission under instructions from the government and the Prime Minister to speed up export transport at border ports and reduce cargo delays and waiting times. On November 2 the working group visited border ports and export transport regulation zones and held meetings with relevant parties to resolve difficulties in freight flows.\n\nAs a result, copper export transport has normalised, with the daily number of vehicles crossing rising from 14 to 134. On the Khangi-Mandal port route, the daily number of export vehicles rose from 130 to 530, a fourfold increase. This is seen as a sign of improved border throughput capacity and organisation.\n\nOn November 3 the working group continued its mission towards Bugat and Bayannuur in China, working with relevant parties to raise border throughput and stabilise export transport. Stable export flows directly affect mining product sales and the country's foreign currency revenue, so this work is expected to continue at pace."},
  {id:6, cat:"niigem", title:"Цэвэр халаалт: 5,000 өрхийг хийн түлш, 408 өрхийг нарны эрчим хүчинд холбожээ", titleEn:"Clean heating: 5,000 households connected to gas fuel, 408 to solar power", time:"2 цаг", timeEn:"2 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Ger%20district%20of%20Ulaanbaatar.jpg?width=760", text:"«Өрхийн түвшинд нүүрсний хэрэглээнээс үе шаттай татгалзах арга зам» үндэсний форум арваннэгдүгээр сарын 3-4-ний өдрүүдэд болж байна. Форумаар Монгол Улсын өрхийн түвшинд нүүрсний хэрэглээнээс үе шаттай татгалзах, цэвэр, аюулгүй, өртөг багатай халаалтын шийдэлд шилжих бодлого, арга хэмжээг эрчимжүүлэх, салбар дундын хамтын ажиллагааг бэхжүүлэх талаар хэлэлцэж, санал солилцож байна.\n\nФорумын үеэр нийслэлийн Засаг дарга бөгөөд Улаанбаатар хотын Захирагч Б.Пүрэвдагва Монгол Улсад айл өрхийн түвшинд цэвэр түлшинд шилжих үйл явцыг эрчимжүүлэх уриалга дэвшүүлж, оролцогч талууд хамтын зорилго, үүрэг амлалтаа бататгалаа. Нийслэлийн агаарын бохирдлын 51 орчим хувийг 161 мянга гаруй өрхийн нүүрсний хэрэглээ бүрдүүлж байна. Иймд эхний ээлжид эдгээр өрхийг цэвэр эрчим хүчний олон төрөлт шийдэлд шилжүүлэхээр төлөвлөжээ.\n\nӨнөөдрийн байдлаар 5,000 өрхийг шингэрүүлсэн хийн түлш, 408 өрхийг нарны эрчим хүчний хэрэглээнд холбож, 31 уурын зуухыг хийн болон цахилгаан халаалтад шилжүүлээд байна. Энэ өвөл НҮБ-ын Хүүхдийн сантай хамтран гэр хорооллын 7,000-10,000 өрхийг дулаалга, эрчим хүчний хэмнэлттэй, дулаан хуримтлуур бүхий цахилгаан халаалтын иж бүрэн шийдэлд шилжүүлэхээр төлөвлөж байна. Мөн НҮБ-ын Хөгжлийн хөтөлбөртэй хамтран гэр хорооллын өрхүүдэд нийт 2.4 МВт хүчин чадалтай батарей хуримтлуулах системтэй хосолсон нарны цахилгаан станцыг байгуулна.", textEn:"The national forum on a phased transition away from household coal use is being held on November 3-4. It is discussing policies and measures to accelerate the shift to clean, safe and low-cost heating solutions at household level in Mongolia and to strengthen cross-sector cooperation.\n\nDuring the forum, Ulaanbaatar Mayor B. Purevdagva called for accelerating the transition to clean fuel at household level, and participants confirmed their shared goals and commitments. About 51 percent of the capital's air pollution comes from coal use by more than 161,000 households, so these households are to be shifted first to diverse clean-energy solutions.\n\nSo far, 5,000 households have been connected to liquefied gas fuel and 408 to solar power, and 31 steam boilers have been converted to gas or electric heating. This winter, together with UNICEF, 7,000-10,000 ger-district households are to be switched to a complete package of insulation, energy-efficient electric heating with heat storage. With UNDP, solar power plants with a total capacity of 2.4 MW combined with battery storage systems will be built for ger-district households."},
  {id:7, cat:"niigem", title:"Цаг агаар: Өнөөдөр Улаанбаатарт цас орж, шөнөдөө 7 хэм хүйтэн байна", titleEn:"Weather: snow in Ulaanbaatar today, minus 7 degrees at night", time:"2 цаг", timeEn:"2 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Pedestrians%20crossing%20a%20snowy%20street%20in%20Quebec%20City%20at%20night.jpg?width=760", text:"Цаг уур, орчны шинжилгээний газраас арваннэгдүгээр сарын 4-нд төв болон зүүн аймгуудын нутгийн хойд хэсгээр, 5-нд нутгийн зүүн хэсгээр цас орж, зөөлөн цасан шуурга шуурч, хүйтрэхийг анхааруулж байна. Арваннэгдүгээр сарын 3-ны 20 цагаас 4-ний 20 цаг хүртэлх урьдчилсан мэдээгээр нутгийн хойд хэсгээр үүлшинэ, бусад нутгаар солигдмол үүлтэй байх төлөвтэй байна.\n\nШөнөдөө Увс, Завхан, Хөвсгөл, Архангай, Булганы зарим, Сэлэнгийн ихэнх, Говь-Алтай, Төв, Хэнтий, Дорнодын хойд сумдаар, өдөртөө Завхан, Хөвсгөлийн зарим, Сэлэнгийн зүүн, Төв, Хэнтий, Дорнодын хойд сумдын нутгаар 0.0-4.0 мм цас орж, зөөлөн цасан шуурга шуурна. Салхи баруун аймгуудын нутгаар баруун хойноос, бусад нутгаар баруун өмнөөс баруун хойш эргэж секундэд 5-10 метр, Алтайн уулархаг нутаг, говь, тал, хээрийн нутгаар зарим үед секундэд 15-17 метр хүрч, шороон шуурга шуурна.\n\nУлаанбаатар хот орчмоор үүлшинэ, шөнөдөө хотын хойд хэсгээр ялимгүй цас, өдөртөө хотын ихэнх хэсгээр цас орно. Шөнөдөө 7 хэм хүйтэн байх төлөвтэй байгаа тул малчид, иргэд, тээвэрчдийг зам, даваа гүвээнд үзэгдэх орчин хязгаарлагдаж, халтиргаа гулгаа, мөстөлт үүсэхийг анхаарахыг цаг уурын байгууллагаас анхаарууллаа.", textEn:"The National Agency for Meteorology and Environmental Monitoring warns that snow and light blizzards will affect northern parts of central and eastern provinces on November 4 and eastern areas on November 5, with colder weather. From 20:00 on November 3 to 20:00 on November 4, northern areas are expected to be cloudy and other areas variably cloudy.\n\nOvernight, 0.0-4.0 mm of snow and light blizzards are expected in parts of Uvs, Zavkhan, Khuvsgul, Arkhangai and Bulgan, most of Selenge, and northern soums of Govi-Altai, Tuv, Khentii and Dornod, and during the day in parts of Zavkhan and Khuvsgul and eastern Selenge and northern Tuv, Khentii and Dornod. Winds will blow at 5-10 metres per second, reaching 15-17 metres per second at times in the Altai mountains, Gobi, steppe and field areas, with dust storms.\n\nAround Ulaanbaatar it will be cloudy, with slight snow in the northern part of the city overnight and snow across most of the city during the day. With night temperatures around minus 7 degrees expected, herders, residents and drivers are warned that visibility on roads and passes may be limited and that slippery conditions and ice may form."},
  {id:8, cat:"oron-nutag", region:"dornod", title:"Дорнод: Зүүн нутгаар цас, цасан шуурга шуурч, малчид бэлтгэлээ хангахыг анхаарууллаа", titleEn:"Dornod: snow and blizzards in the east, herders urged to prepare", time:"3 цаг", timeEn:"3 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Mong%20winter1%20-%20panoramio.jpg?width=760", text:"Арваннэгдүгээр сарын 4-5-нд нутгийн зүүн хэсгээр цас орж, зөөлөн цасан шуурга шуурах төлөвтэй байгаа тул Дорнод зэрэг зүүн аймгуудын малчид, иргэдэд цаг уурын байгууллагаас онцгой анхааруулга хүргүүллээ. Дорнодын хойд сумдаар шөнөдөө, зүүн сумдаар 5-нд цас орж, шуурга шуурах төлөвтэй байна.\n\nЦас, шуурганы үед зам, даваа гүвээнд үзэгдэх орчин хязгаарлагдаж, халтиргаа гулгаа, мөстөлт үүсэх эрсдэлтэй тул тээвэрчид хурдаа тохируулж, замын хөдөлгөөнд болгоомжтой оролцох шаардлагатай. Малчид малаа хашаа, хороондоо оруулж, өвс тэжээлийн нөөцөө шалгаж, цаг агаарын богино, дунд хугацааны урьдчилсан мэдээг тогтмол авч ашиглахыг мэргэжлийн байгууллагаас зөвлөж байна.\n\nӨвөлжилтийн бэлтгэл хангагдаагүй айл өрхөд цас, хүйтэн нь хүндрэл учруулж болзошгүй тул орон нутгийн удирдлагууд малчдад тусламж, мэдээлэл хүргэх ажлыг эрчимжүүлэх шаардлагатай байна. Цаг агаарын нөхцөл байдал өөрчлөгдөх тухай бүр урьдчилсан мэдээг шинэчлэн мэдээлэх тул иргэдийг албан ёсны мэдээг дагахыг анхаарууллаа.", textEn:"With snow and light blizzards forecast for eastern areas on November 4-5, the meteorological service has issued a special warning to herders and residents in eastern provinces including Dornod. Snow is expected overnight in northern soums of Dornod and on November 5 in its eastern soums, with blizzard conditions.\n\nDuring snow and storms, visibility on roads and passes may be limited and slippery, icy conditions may develop, so drivers need to adjust speed and take care. Herders are advised to bring livestock into shelters, check fodder reserves, and regularly follow short- and medium-term weather forecasts.\n\nHouseholds that have not fully prepared for winter may face difficulties from snow and cold, so local authorities need to step up help and information for herders. Forecasts will be updated as conditions change, and citizens are urged to follow official information."},
  {id:9, cat:"oron-nutag", region:"khuvsgul", title:"Зудын төлөв: Хөвсгөл зэрэг нутгаар өвөлжилт их, нэн их хүндрэлтэй байх төлөвтэй", titleEn:"Dzud outlook: wintering severe or extremely difficult in Khuvsgul and other areas", time:"3 цаг", timeEn:"3 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Snow%20in%20Mongolia%20(MODIS%202017-01-19).jpg?width=760", text:"Арваннэгдүгээр сарын зудын урьдчилсан төлөвөөс харахад мал өвөлжилт нийт нутгийн 8 хувьд нэн их, 18 хувьд их, 33 хувьд дунд, 24 хувьд бага зэрэг хүндрэлтэй, харин 16 хувьд хүндрэлгүй байхаар байна. Тухайлбал, Баян-Өлгий, Увс, Ховд, Завхан, Өмнөговийн ихэнх, Говь-Алтай, Баянхонгор, Хөвсгөл, Архангай, Булган, Өвөрхангай, Дундговийн зарим нутгаар өвөлжилт их болон нэн их хүндрэлтэй байх төлөвтэй байна.\n\nХовд аймгийн хувьд тусдаа гаргасан үнэлгээгээр нутгийн 54.7 хувьд өвөлжилт хүндрэх эрсдэлтэй бөгөөд 16.7 хувьд нэн их, 38 хувьд их, 41.9 хувьд дунд, 3.4 хувьд бага эрсдэлтэй гэж дүгнэжээ. Өөрөөр хэлбэл, аймгийн хэмжээнд зудын эрсдэлгүй нутаг байхгүй байна. Энэ жил Ховд аймагт 8,000 гаруй малчин өрхийн 3.1 сая гаруй мал өвөлжинө.\n\nИймд мал өвөлжилт хүндэрч буй болон хүндэрч болзошгүй бүс нутгуудад онцгойлон анхаарч, цаг уурын байгууллагаас гаргадаг богино, дунд, урт хугацааны урьдчилсан мэдээ болон тухай бүр шинэчлэн гаргах зудын төлөвийг тогтмол авч ашиглахыг зөвлөж байна. Цаг агаар хүндэрсэн үед авах арга хэмжээний урьдчилсан бэлтгэлийг бүрэн хангаж ажиллахыг малчид, орон нутгийн удирдлагуудад анхаарууллаа.", textEn:"The preliminary November dzud outlook shows livestock wintering conditions will be extremely difficult in 8 percent of the country, severely difficult in 18 percent, moderately difficult in 33 percent, slightly difficult in 24 percent, and without difficulty in 16 percent. Wintering is expected to be severe or extremely difficult in most of Bayan-Ulgii, Uvs, Khovd, Zavkhan and Umnugovi, and in parts of Govi-Altai, Bayankhongor, Khuvsgul, Arkhangai, Bulgan, Uvurkhangai and Dundgovi.\n\nA separate assessment for Khovd province finds wintering at risk of difficulty in 54.7 percent of its territory: extremely high risk in 16.7 percent, high in 38 percent, moderate in 41.9 percent and low in 3.4 percent. In other words, there is no part of the province without dzud risk. More than 8,000 herder households and over 3.1 million livestock will winter in Khovd this year.\n\nHerders and local authorities in areas where wintering is difficult or may become difficult are advised to pay special attention and regularly use short-, medium- and long-term forecasts from the meteorological service, as well as updated dzud outlooks. They are urged to fully prepare in advance the measures to be taken if conditions worsen."},
  {id:10, cat:"sport", title:"Чөлөөт бөх: Монголын баг дэлхийн аваргыг гурван хүрэл медальтай өндөрлүүлэв", titleEn:"Freestyle wrestling: Mongolia finishes world championships with three bronzes", time:"4 цаг", timeEn:"4 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/FreestyleWrestling2.jpg?width=760", text:"Казахстаны Астана хотын «Барыс арена»-д болсон насанд хүрэгчдийн чөлөөт бөхийн дэлхийн аварга шалгаруулах тэмцээнд Монголын баг гурван хүрэл медаль хүртэж, тэмцээнийг амжилттай өндөрлүүллээ. Эрэгтэйчүүдийн 70 кг-ын жинд гавьяат тамирчин Т.Тулга, эмэгтэйчүүдийн 76 кг-ын жинд Э.Даваанасан, 59 кг-ын жинд Х.Болортуяа нар тус бүр хүрэл медаль хүртсэн байна.\n\nТ.Тулга хүрэл медалийн төлөөх барилдаанд Молдавын Василе Диаконыг 9:0-ээр цэвэр ялж, дэлхийн аваргаас гурав дахь медалиа хүртлээ. Тэрбээр 2021 онд Ослод 65 кг-ын жинд хүрэл, 2025 онд Загребт 70 кг-ын жинд мөнгөн медаль хүртэж байсан бөгөөд дэлхийн аваргаас гурван медаль хүртсэн Монголын гурав дахь эрэгтэй бөх болжээ. Түүний хүрэл нь Монголын чөлөөт бөхийн тамирчдын дэлхийн аваргаас хүртсэн 50 дахь хүрэл медаль болж байна.\n\nЭрэгтэйчүүдийн багийн дүнгээр Монгол Улс 35 оноогоор есдүгээр, эмэгтэйчүүдийн багийн дүнгээр 74 оноогоор долоодугаар байрт орсон байна. Эмэгтэйчүүдийн ангилалд Монголын таван бөх медалийн төлөө барилдаж, хоёрт нь шагналын тавцанд гарсан нь эмэгтэйчүүдийн багийн өрсөлдөөний түвшин ахиж байгааг харуулж байна. Багийн нийлбэр дүнгээр АНУ 194 оноогоор илт давуу тэргүүлжээ.", textEn:"At the senior freestyle wrestling world championships at the Barys Arena in Astana, Kazakhstan, Mongolia's team won three bronze medals and finished the tournament successfully. Merited athlete T. Tulga won bronze in the men's 70 kg, E. Davaanasan in the women's 76 kg and Kh. Bolortuya in the women's 59 kg.\n\nTulga beat Moldova's Vasile Diacon 9-0 in the bronze-medal bout, winning his third world championship medal. He previously won bronze at 65 kg in Oslo in 2021 and silver at 70 kg in Zagreb in 2025, becoming the third Mongolian male wrestler to win three world championship medals. His bronze is the 50th bronze won by Mongolian freestyle wrestlers at world championships.\n\nIn team standings Mongolia placed ninth among men with 35 points and seventh among women with 74 points. Five Mongolian women wrestled for medals, with two reaching the podium, showing the rising competitiveness of the women's team. The United States topped the combined team standings by a clear margin with 194 points."},
  {id:11, cat:"soyol", title:"«Монгол бахархал – Соёлын бүтээлч сар» аян орон даяар эхэллээ", titleEn:"Mongolian Pride – Creative Culture Month campaign begins nationwide", time:"4 цаг", timeEn:"4 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/783%203%20(+%203)%20dancers%20performing%20on%20stage%20V-P.jpg?width=760", text:"Засгийн газрын хэрэгжүүлэгч агентлаг Соёл, урлагийн газраас 2026 оны арваннэгдүгээр сарыг «Монгол бахархал – Соёлын бүтээлч» сарын аян болгон улсын хэмжээнд зохион байгуулж байна. Энэхүү аян нь Монголын түүхэн үйл явдлуудын ач холбогдол, үндэсний бахархал, өв соёлын үнэт зүйлсийг олон нийт, хүүхэд залуучуудад таниулах зорилготой юм. 2026 онд Их Монгол Улс байгуулагдсаны 820 жилийн ой тохиож байгаа нь уг аяны агуулгатай нягт уялдаж байна.\n\nСарын аяны хүрээнд орон нутгийн соёлын байгууллагууд олон талт ажлуудыг төлөвлөн хэрэгжүүлж эхэллээ. Тухайлбал, Дархан-Уул аймгийн Орхон сумын Соёлын төвөөс арваннэгдүгээр сарын 2-6-ны өдрүүдэд «Монгол бахархал» үндэсний бичиг, соёлын арга хэмжээг зохион байгуулж байгаа бол бусад аймгийн соёлын төвүүд ч тус аянд нэгдээд байна. Дархан хотын Хүүхдийн номын ордноос «Монгол хээ угалз» боловсролын хөтөлбөрийг хэрэгжүүлж, сурагчдад монгол хээ угалзны утга соёл, хээрийн урлалтай танилцуулж байна.\n\nЭдгээр арга хэмжээ нь монгол хэл, үндэсний бичгийн хэрэглээ, соёлын үнэ цэнийг бэхжүүлэх, төрт ёсны уламжлал болон Үндсэн хуулийн үзэл санааг түгээн таниулахад чиглэж байна. Аяны эхний долоо хоногт «Бичиг соёл»-ын долоо хоногийн хүрээнд Дуурь бүжгийн эрдмийн театраас «Ромео, Жульетта» сонгодог балетын жүжиг тоглогдох зэрэг олон арга хэмжээ төлөвлөгджээ.", textEn:"The Culture and Arts Agency, an implementing agency of the government, is organising November 2026 nationwide as the Mongolian Pride – Creative Culture Month campaign. The campaign aims to introduce the public, children and young people to the significance of Mongolian historical events, national pride and cultural heritage values. The 820th anniversary of the founding of the Great Mongol State in 2026 is closely linked to the campaign's content.\n\nLocal cultural institutions have begun planning and implementing diverse activities under the campaign. For example, the Cultural Centre of Orkhon soum in Darkhan-Uul province is holding a Mongolian Pride national script and culture event from November 2 to 6, and cultural centres in other provinces are also joining. Darkhan city's Children's Library is running a Mongolian Pattern educational programme introducing schoolchildren to the meaning and craft of Mongolian patterns.\n\nThese events aim to strengthen the use of the Mongolian language and national script, reinforce cultural values, and promote state traditions and the ideas of the Constitution. In the campaign's first week, under the Script Culture week, the State Academic Theatre of Opera and Ballet will stage the classic ballet Romeo and Juliet, among many other planned events."},
  {id:12, cat:"soyol", title:"СУИС-ийн оюутнууд Сингапурт театрын сургуулиудын олон улсын фестивальд оролцоно", titleEn:"Mongolian arts students to join international theatre schools festival in Singapore", time:"5 цаг", timeEn:"5 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Northern%20Ballet%20(13665775275).jpg?width=760", text:"Ази, Номхон далайн бүс нутгуудын театрын сургуулиудын олон улсын фестиваль Сингапур улсын Лассалын их сургуульд арваннэгдүгээр сарын 3-7-ны өдрүүдэд зохион байгуулагдаж байна. Тус наадамд Соёл урлагийн их сургуулийг төлөөлөн оролцох оюутнууд Найруулах, жүжиглэх урлагийн тэнхимийн эрхлэгч У.Дэлгэрбуян ахлан, Д.Батбаярын «Гэгээ» жүжгээс сэдэвлэсэн «Гэгээ» физикл жүжгээр оролцоно.\n\nНаадамд оролцох бүтээл нь 2026 оны «3.27» олон улсын оюутны их наадмаас шилдэг үндэсний бүтээл, шилдэг эмэгтэй дүр номинаци хүртэж, шилдэг бүтээл буюу гран-при цом хүртсэн юм. Фестивалийн хүрээнд захирлуудын уулзалт зохион байгуулагдах бөгөөд хуралд СУИС-ийн Театрын урлагийн сургуулийн захирал доктор М.Ариунжолоо оролцох аж.\n\nОлон улсын фестивальд оролцох нь Монголын залуу уран бүтээлчдэд өөр орны театрын сургуулиудтай туршлага солилцож, бүтээлээ олон улсын үзэгчдэд танилцуулах боломж олгоно. Мөн энэ нь Монголын театрын боловсрол, залуу жүжигчдийн ур чадварыг олон улсад таниулах чухал алхам гэж зохион байгуулагчид үзэж байна.", textEn:"The international festival of theatre schools of the Asia-Pacific region is being held at LASALLE College of the Arts in Singapore from November 3 to 7. Students representing the Mongolian State University of Arts and Culture, led by U. Delgerbuyan, head of the Directing and Acting Department, will perform the physical theatre piece Gegee, inspired by D. Batbayar's play Gegee.\n\nThe work won best national production and best actress at the 2026 3.27 international student festival, as well as the grand prix for best production. A directors' meeting will be held as part of the festival, attended by Dr M. Ariunjoloo, director of the university's School of Theatre Arts.\n\nTaking part in the international festival gives young Mongolian artists a chance to exchange experience with theatre schools from other countries and present their work to an international audience. Organisers see it as an important step in promoting Mongolian theatre education and the skills of young actors internationally."},
  {id:13, cat:"tech", title:"Samsung Техаст AMD, Nvidia-ийн чипний эд анги үйлдвэрлэхээр болжээ", titleEn:"Samsung to build AMD and Nvidia chip parts at Texas plant", time:"5 цаг", timeEn:"5 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/TSMC%20Fab%2018%20and%20fields%20May%202025.jpg?width=760", text:"Samsung компани Техас дахь хоёр дахь үйлдвэртээ AMD болон Nvidia-ийн чипний эд анги үйлдвэрлэхээр болсон тухай мэдээлэл гарлаа. Энэ нь хиймэл оюун ухааны тооцоололд хэрэглэгддэг чипний эрэлт огцом өсөж байгаа үед АНУ-д чип үйлдвэрлэх хүчин чадлыг өргөжүүлэх алхам гэж үзэж байна.\n\nҮүний зэрэгцээ санах ойн чипний үнэ өссөөр байгаа бөгөөд RAM болон DRAM-ийн үнэ хомсдлоос болж тасралтгүй нэмэгдэж байна. Хиймэл оюун ухааны дэд бүтцэд оруулсан хөрөнгө оруулалт төвлөрч байгаа нь зах зээлийн эрсдэл дагуулж болзошгүйг Хятадын зохицуулагч анхааруулсан байна. Мөн АНУ-ын сенаторууд Google-ийг сургуульд хиймэл оюун ухааныг түрэмгий нэвтрүүлж байгаа талаар шахаж байгаа тухай мэдээлэл гарчээ.\n\nЧип үйлдвэрлэлийн өрсөлдөөн ширүүсч байгаа энэ үед томоохон технологийн компаниуд нийлүүлэлтийн сүлжээгээ төрөлжүүлж, АНУ, Азид үйлдвэрлэлээ өргөжүүлж байна. Samsung-ийн Техас дахь төсөл нь энэ чиг хандлагын нэг хэсэг бөгөөд хиймэл оюун ухааны чипний нийлүүлэлтэд чухал үүрэг гүйцэтгэх төлөвтэй байна.", textEn:"Samsung is to build chip components for AMD and Nvidia at its second plant in Texas, according to reports. The move is seen as expanding chip manufacturing capacity in the United States at a time when demand for chips used in artificial intelligence computing is rising sharply.\n\nAt the same time, memory chip prices keep climbing, with RAM and DRAM prices rising steadily amid shortages. China's regulator has warned that investment in artificial intelligence infrastructure is dangerously concentrated, carrying market risks. US senators are also pressing Google over its aggressive push for artificial intelligence in schools.\n\nAs competition in chip manufacturing intensifies, major technology companies are diversifying their supply chains and expanding production in the United States and Asia. Samsung's Texas project is part of this trend and is expected to play an important role in the supply of artificial intelligence chips."},
  {id:14, cat:"delhii", title:"АНУ: Сонгогчид шинэ Конгрессын төлөө саналаа өгч байна", titleEn:"United States: voters cast ballots for a new Congress", time:"6 цаг", timeEn:"6 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Mendocino%20County%20Official%20Election%20Ballot%20Drop%20Box%20-%20April%202023%20-%20Sarah%20Stierch%2002.jpg?width=760", text:"Америкчууд арваннэгдүгээр сарын 3-нд шинэ Конгрессын төлөө саналаа өгч, 2026 оны завсрын сонгууль болж байна. АНУ-аас гадуурх албаныхан, шинжээчид, сонинууд хэдэн долоо хоногийн турш энэ сонгууль тэдэнд ямар ач холбогдолтой болохыг тооцоолж иржээ. Сонгуулийн кампанит ажилд зарцуулсан нийт мөнгө 12 тэрбум долларт хүрч, түүхэн дэх хамгийн үнэтэй завсрын сонгууль болох төлөвтэй байна.\n\nСонгуулийн өдөр олон улсын анхаарлын төвд байгаа өөр нэг сэдэв бол АНУ-ын цэргийнхэн Ормузын хоолой дахь Ираны Кешм аралд хязгаарлагдмал цохилт өгсөн тухай мэдээлэл юм. Америкийн албаныхан үүнийг Ираны гадарга-агаар пуужингийн аюулаас АНУ-ын хөрөнгийг хамгаалах хамгаалалтын арга хэмжээ гэж тодорхойлсон байна.\n\nМөн энэ өдөр Нью-Йорк мужийн хөдөөгийн Льюис тойрогт улаанбурхан өвчнөөр хүүхэд нас барсан нь тус мужийн 30 жилийн хугацаан дахь анхны улаанбурхнаар нас барсан тохиолдол болсон тухай эрүүл мэндийн албаныхан мэдээллээ. Сонгуулийн дүн гарахын хэрээр АНУ-ын дотоод болон гадаад бодлогын чиглэлд ямар өөрчлөлт гарах нь дэлхийн анхаарлын төвд байх болно.", textEn:"Americans voted on November 3 for a new Congress in the 2026 midterm elections. Officials, analysts and newspapers outside the United States have spent weeks working out what the election means for them. Total spending on the election campaign is expected to reach nearly 12 billion dollars, making it the most expensive midterm election on record.\n\nAnother subject in international focus on election day is reports that the US military carried out limited strikes on Iran's Qeshm Island in the Strait of Hormuz. US officials described them as defensive measures against Iranian surface-to-air missile threats to US assets.\n\nHealth officials also reported that a child in rural Lewis County, New York, has died after contracting measles, the state's first measles-related death in 30 years. As election results emerge, what changes they bring to US domestic and foreign policy will be in the world's focus."},
  {id:15, cat:"delhii", title:"АНУ Ираны Кешм аралд хязгаарлагдмал цохилт өгсөн тухай мэдээллээ", titleEn:"US reported to have carried out limited strikes on Iran's Qeshm Island", time:"6 цаг", timeEn:"6 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Flickr%20-%20Official%20U.S.%20Navy%20Imagery%20-%20U.S.%20Navy%20ships%20transit%20the%20Strait%20of%20Hormuz..jpg?width=760", text:"Америкийн хэвлэлүүдийн мэдээлснээр АНУ-ын цэргийнхэн Ормузын хоолой дахь Ираны Кешм аралд хязгаарлагдмал цохилт өгсөн бөгөөд цэргийнхэн үүнийг нууцлахыг хүсч байжээ. Арал болон Бандар Ленге хотод дэлбэрэлтийн дуу сонсогдсон байна. АНУ-ын албаныхан цохилтыг Ираны гадарга-агаар пуужингийн аюулаас АНУ-ын хөрөнгийг хамгаалах хамгаалалтын арга хэмжээ гэж тодорхойлж, томоохон байлдааны ажиллагаа дахин эхэлсэн хэрэг биш гэж мэдэгдсэн байна.\n\nЕрөнхийлөгч Дональд Трамп сэтгүүлчдэд АНУ Ирантай хийсэн дайнд ялсан гэж мэдэгдэж, хэдэн сарын турш тулалдаан болоогүй тул үүнийг дайн гэж нэрлэж болох эсэхийг мэдэхгүй байна гэжээ. Сонгуулийн дараа Иран руу цохилт өгөх талаар бодож байгаа эсэхийг асуухад тэрбээр үгүй гэж хариулсан байна.\n\nОйрхи Дорнодын нөхцөл байдал хурцадмал хэвээр байгаа бөгөөд хэлэлцээ зогсонги байдалд орсон үед ийм цохилт нь бүс нутгийн аюулгүй байдал, дэлхийн эрчим хүчний нийлүүлэлтэд ямар нөлөө үзүүлэх нь анхаарлын төвд байна. Олон улсын хамтын нийгэмлэг талуудыг хурцадмал байдлыг намжааж, хэлэлцээний ширээнд буцахыг уриалж байна.", textEn:"According to American media, the US military carried out limited strikes on Iran's Qeshm Island in the Strait of Hormuz, which the military wanted to keep secret. Explosions were heard on the island and in Bandar Lengeh. US officials described the strikes as defensive measures against Iranian surface-to-air missile threats to US assets, not a resumption of major combat operations.\n\nPresident Donald Trump told reporters that the US had won the war with Iran, saying he did not know whether it could be called a war since there had been no fighting for months. Asked whether he was considering a strike on Iran after the election, he replied no.\n\nThe Middle East situation remains tense, and with negotiations stalled, what effect such strikes will have on regional security and global energy supplies is in focus. The international community is urging the parties to ease tensions and return to the negotiating table."},
  {id:16, cat:"delhii", title:"Орос, Украин 11 дүгээр сарын 10-11-нд Абу Дабид хэлэлцээ хийнэ", titleEn:"Russia and Ukraine to hold talks in Abu Dhabi on November 10-11", time:"7 цаг", timeEn:"7 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/80-391-9007%20Kyiv%20St.Michael's%20Golden-Domed%20Monastery%20RB%2018.jpg?width=760", text:"АНУ-ын тусгай элч Стив Уиткоффын мэдээлснээр Орос, Украин хоёр арваннэгдүгээр сарын 10, 11-нд Вашингтоны зуучлал дор Абу Дабид ажлын хэлэлцээ хийнэ. Энэ нь дайн дуусгах дипломат оролдлогын шинэ үе шат гэж үзэж байна. Мөн Их Британи, Франц хоёр 11 орны 2,800 орчим цэрэг 11 дүгээр сарын 9-22-нд Польш улсад дайн дууссаны дараа Украинд байрлах олон улсын хүчний байрлалыг дадлага хийх сургуульд оролцоно гэж мэдэгдлээ.\n\nҮүний зэрэгцээ Украины өмнөд хэсгийн Запорожье мужийн Комишувахад хүмүүнлэгийн тусламж түгээж байсан газарт Оросын бөмбөгдөлтийн улмаас дор хаяж 29 хүн нас барж, 48 хүн сураггүй болсон тухай Украины албаныхан мэдээллээ. Украины Ерөнхийлөгч Володимир Зеленский Орос дараагийн томоохон довтолгоо, тэр дундаа эрчим хүч, ложистикийн байгууламжид чиглэсэн довтолгоо бэлтгэж байгаа тухай тагнуулын мэдээлэл байна гэж анхааруулсан байна.\n\nШөнөдөө Орос 289 дрон, 17 баллистик пуужин, 59 далавчит пуужингаар есөн бүс нутгийн байгууламжид довтолж, дор хаяж нэг хүн нас барж, олон хүн шархадсан бөгөөд яаралтай цахилгаан тасалдал үүсгэсэн гэж Украин мэдээллээ. Оросын Батлан хамгаалах яам цохилт нь Украины цэргийн үйлдвэр, армийг хангадаг дөрвөн цахилгаан станц, хоёр дэд станцыг онилсон гэж мэдэгдсэн байна.", textEn:"US special envoy Steve Witkoff has announced that Russia and Ukraine will hold working negotiations on November 10 and 11 in Abu Dhabi, under Washington's mediation. This is seen as a new stage in diplomatic efforts to end the war. Britain and France also said some 2,800 troops from 11 European countries will take part in a November 9-22 exercise in Poland rehearsing the deployment of a multinational force that would move into Ukraine after the war ends.\n\nAt the same time, Ukrainian officials reported that at least 29 people were killed and 48 remain missing after a Russian bomb strike on a humanitarian aid distribution site in Komyshuvakha, in the southern Zaporizhzhia region. President Volodymyr Zelenskyy warned that Ukraine has intelligence that Russia is preparing another massive attack, primarily on energy and logistics facilities.\n\nUkraine said Russia launched 289 drones, 17 ballistic missiles and 59 cruise missiles at targets in nine regions overnight, killing at least one person, wounding scores and triggering emergency power cuts. Russia's Defence Ministry said the strikes hit four power plants and two electricity substations that it claims supply Ukrainian military factories and the army."},
  {id:17, cat:"delhii", title:"«Мурасу» хар салхи Энэтхэгийн зүүн эрэгт хүрч, нүүлгэн шилжүүлэлт хийв", titleEn:"Cyclone Murasu hits India's east coast, evacuations carried out", time:"7 цаг", timeEn:"7 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Tropical%20Cyclone%20Fyita%20(MODIS%202026-02-04).jpg?width=760", text:"Энэтхэгийн цаг уурын албаны мэдээлснээр «Мурасу» хар салхи мягмар гарагт Энэтхэгийн зүүн эрэгт хүрсэн байна. Энэ нь тус бүс нутагт долоо хоногийн дотор цохилсон хоёр дахь шуурга болж байна. Эрх баригчид шуурга хүрэхээс өмнө нүүлгэн шилжүүлэлтийг зохион байгуулсан бөгөөд эрэг орчмын иргэдийг аюулгүй газарт шилжүүлжээ.\n\nХар салхины улмаас хүчтэй салхи, их хэмжээний бороо орж, эрэг орчмын бүс нутагт үер, мод унах, цахилгаан тасрах эрсдэл үүсч байна. Орон нутгийн эрх баригчид аврах баг, тусламжийн материалыг бэлэн байдалд байлгаж, иргэдийг албан ёсны анхааруулгыг дагахыг уриалж байна.\n\nУур амьсгалын өөрчлөлтийн нөлөөгөөр халуун орны шуурганы давтамж, хүч нэмэгдэж байгаа нь бүс нутгийн орнуудад тулгамдсан асуудал болж байна. Энэтхэгийн цаг уурын байгууллага шуурганы зам, хүчийг тогтмол хянаж, нэмэлт мэдээллийг тухай бүр нь мэдээлэх төлөвтэй байна.", textEn:"According to India's meteorological service, Cyclone Murasu made landfall on Tuesday on India's east coast. It is the second storm to strike the region in a week. Authorities organised evacuations beforehand, moving coastal residents to safe places.\n\nThe cyclone brings strong winds and heavy rain, creating risks of flooding, fallen trees and power cuts in coastal areas. Local authorities have kept rescue teams and relief supplies ready and are urging residents to follow official warnings.\n\nThe increasing frequency and strength of tropical storms under climate change is a pressing issue for countries in the region. India's meteorological service is continuously monitoring the storm's path and strength and is expected to provide updates as they become available."},
  {id:18, cat:"delhii", title:"Европын долоон оронд супермаркетуудын хөргөгчийг кибер халдлагад өртжээ", titleEn:"Cyberattack hits supermarket refrigerators in seven European countries", time:"8 цаг", timeEn:"8 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Glass%20door%20freezer%20display%20cabinets%20refrigerator%20chiller%20showcase%20for%20soft%20drinks%20(Coca%20Cola,%20Red%20Bull,%20Pepsi,%20etc.)%20in%20Spar%20Supermarket%20in%20Tjøme,%20Norway%202017-12-05.jpg?width=760", text:"Даваа гарагт Европын долоон орны олон арван супермаркет кибер халдлагын улмаас хөргөгч, хөлдөөгчийн температур нь зарим мэдээллээр 50 хэм хүртэл өссөн байна. Хөргөгчийн хяналтын системд халдсан нь хүнсний бүтээгдэхүүнийг хадгалах нөхцөлийг алдагдуулж, дэлгүүрүүдэд их хэмжээний хохирол учруулж болзошгүй байна.\n\nКибер халдлага нь зөвхөн мэдээллийн системд бус, бодит дэд бүтэц, хүнсний хангамжийн сүлжээнд шууд нөлөөлж болохыг энэ явдал харуулж байна. Хөргөгчийн температур өссөнөөс хүнсний бүтээгдэхүүн муудаж, устгах шаардлагатай болж, хэрэглэгчдийн эрүүл мэндэд эрсдэл үүсч болзошгүй тул дэлгүүрүүд бүтээгдэхүүнээ шалгаж, аюулгүй байдлыг хангах арга хэмжээ авч байна.\n\nЭрх баригчид халдлагын эх үүсвэр, цар хүрээг тогтоохоор мөрдөн шалгах ажиллагаа явуулж байна. Мэргэжилтнүүдийн үзэж байгаагаар дэд бүтцийн дижитал системүүдийг хамгаалах нь улам чухал болж байгаа бөгөөд ийм халдлага дахин гарахаас сэргийлэхэд компаниуд кибер аюулгүй байдлын хөрөнгө оруулалтаа нэмэгдүүлэх шаардлагатай байна.", textEn:"On Monday, dozens of supermarkets in seven European countries saw the temperature of their refrigerators and freezers soar to as high as 50 degrees Celsius according to some accounts, following a cyberattack. Attacking refrigerator control systems disrupted food storage conditions and may have caused major losses for shops.\n\nThe incident shows that cyberattacks can directly affect not only information systems but also real infrastructure and food supply chains. As rising refrigerator temperatures can spoil food, forcing its disposal and creating risks to consumer health, shops are checking products and taking safety measures.\n\nAuthorities are investigating to establish the source and scale of the attack. Experts say protecting the digital systems of infrastructure is becoming ever more important, and companies need to increase investment in cybersecurity to prevent such attacks from recurring."},
];
function aTitle(a){ return LANG === "en" ? (a.titleEn || a.title) : a.title; }
function aTime(a){ return LANG === "en" ? (a.timeEn || a.time) : a.time; }
function aText(a){ if(a.text) return LANG === "en" ? (a.textEn || a.text) : a.text; return SAMPLE_TEXT[LANG][a.id === 1 ? "long" : "short"]; }
function aRegion(a){ return a.region ? ((REGIONS[LANG] && REGIONS[LANG][a.region]) || a.region) : ""; }

// ===== Ханш · Цаг агаар (өдөр бүр шинэчлэгдэнэ; цаг агаарыг Open-Meteo-гоос шууд татна) =====
const RATES = {date:"2026-11-04", items:[
  {code:"USD", mnt:3599.71, chg:1}, {code:"EUR", mnt:4030.96, chg:1}, {code:"JPY", mnt:22.80, chg:-1},
  {code:"CNY", mnt:539.57, chg:-1}, {code:"KRW", mnt:2.69, chg:1}, {code:"RUB", mnt:44.19, chg:-1}, {code:"GBP", mnt:4830.45, chg:1}
]};
let WEATHER = [
  {city:"Улаанбаатар", cityEn:"Ulaanbaatar", lat:47.9212, lon:106.9186, tz:"Asia/Ulaanbaatar", temp:-4, code:0},
  {city:"Токио", cityEn:"Tokyo", lat:35.6762, lon:139.6503, tz:"Asia/Tokyo", temp:12, code:1},
  {city:"Сөүл", cityEn:"Seoul", lat:37.5665, lon:126.978, tz:"Asia/Seoul", temp:7, code:2},
  {city:"Бээжин", cityEn:"Beijing", lat:39.9042, lon:116.4074, tz:"Asia/Shanghai", temp:6, code:3},
  {city:"Москва", cityEn:"Moscow", lat:55.7558, lon:37.6173, tz:"Europe/Moscow", temp:2, code:51}
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
  {yt:"b5MGTsoHrCY", title:"Эргэх дөрвөн цаг / Төв аймгийн Сүмбэр сумаас бэлтгэв/", titleEn:"Four seasons: report from Sumber soum, Tuv province", src:"МҮОНТ", srcEn:"MNB", srcFull:"МҮОНТ (Монголын үндэсний олон нийтийн телевиз)", srcFullEn:"MNB (Mongolian National Broadcaster)"},
  {yt:"4ITGJk8A9Nc", title:"Томилолтоос ирлээ: \u201cТунхаглалаас бодит алхамд шилжих харилцаа\u201d", titleEn:"Back from assignment: relations moving from declaration to real steps", src:"МҮОНТ", srcEn:"MNB", srcFull:"МҮОНТ (Монголын үндэсний олон нийтийн телевиз)", srcFullEn:"MNB (Mongolian National Broadcaster)"},
  {yt:"4OPM0rtxtew", title:"Тусгай сурвалжилга: ЭЙКҮСОРА", titleEn:"Special report: EIKUSORA", src:"Eagle TV", srcEn:"Eagle TV", srcFull:"Eagle TV (Ийгл телевиз)", srcFullEn:"Eagle TV"},
  {yt:"pnZ7Dt2mm5k", title:"Тусгай сурвалжилга: ШАХМАЛ ТҮЛШ", titleEn:"Special report: Smokeless fuel", src:"Eagle TV", srcEn:"Eagle TV", srcFull:"Eagle TV (Ийгл телевиз)", srcFullEn:"Eagle TV"}
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
