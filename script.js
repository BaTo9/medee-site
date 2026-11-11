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

// ===== Бодит мэдээнүүд (2026-11-12) — өдөр бүр шинэчлэгдэнэ =====
const ARTICLES = [
  {id:1, cat:"uls-tor", title:"Ерөнхий сайд Н.Учрал Өмнөговь аймагт ажиллаж, хуулийн хэрэгжилтийг хангах үүрэг даалгавар өгөв", titleEn:"Prime Minister N. Uchral visits Umnugovi, orders officials to enforce the law", time:"15 мин", timeEn:"15 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/2024-10-18%20Ulaanbaatar%2C%20Government%20Palace.jpg?width=1000", text:"Монгол Улсын Ерөнхий сайд Н.Учрал өнөөдөр буюу 11 дүгээр сарын 11-нд Өмнөговь аймагт ажиллаж, аймгийн удирдлагуудад хууль тогтоомжийн хэрэгжилтийг хангах талаар хугацаатай үүрэг даалгавар өглөө.\n\nЗасгийн газрын хяналт хэрэгжүүлэх газрын шалгалтаар аймгийн үйл ажиллагаанд анхаарах хэд хэдэн асуудал илэрсэн байна. Тухайлбал, байгууллагын үйл ажиллагааны ерөнхий дүнгээр 2025 онд аймаг 67.9 хувийн үнэлгээ авч, хангалтгүй гэж дүгнэгдсэн бол нийтийн мэдээллийн ил тод байдлын тухай хуулийн хэрэгжилт хангалтгүй, shilen.gov.mn цахим системийн үнэлгээ 56.8 хувьтай байжээ.\n\nЗасгийн газрын тогтоол, хуралдааны тэмдэглэл, Ерөнхий сайдын албан даалгаврын хэрэгжилтэд дүн шинжилгээ хийхэд энэ оны гуравдугаар улирлын байдлаар хэрэгжсэн 12, хэсэгчлэн хангагдсан 15, хангалтгүй 5 үүрэг даалгавар байна. Мөн өргөдөл, гомдлын “Dashboard.gov.mn” системд аймгийн 195 байгууллагаас 189 нь холбогдоогүй, эрүүл мэндийн байгууллагатай холбоотой гомдол 2025 онд 150 байсан бол 2026 оны гуравдугаар улирлын байдлаар 233 болж өсжээ.\n\nТүүнчлэн зөвшөөрөл, мэдэгдлийн тухай хууль наймдугаар сарын 31-нээс хэрэгжиж эхэлсэн ч аймаг хуульд заасан нийт 55 зөвшөөрлөөс 41-ийг нь бүртгүүлээгүй байна. Аймгийн хэмжээнд 4,972 аж ахуйн нэгж бүртгэлтэй бол энэ сараас өндөр насны тэтгэвэр авч буй 10,695 иргэний 73.9 хувь нь суурь тэтгэвэр авч эхэлжээ. Ерөнхий сайд илэрсэн зөрчлийг арилгаж, хуулийн хэрэгжилтийг хангахыг аймгийн удирдлагуудад үүрэг болгов.", textEn:"Prime Minister N. Uchral is working in Umnugovi aimag today, November 11, and has given the aimag leadership time-bound instructions on enforcing the law.\n\nAn inspection by the Government Inspection Agency found several problems in the aimag's work. The aimag scored 67.9 percent in its 2025 performance assessment, rated unsatisfactory, while implementation of the law on transparency of public information was poor and the shilen.gov.mn system scored 56.8 percent.\n\nAnalysis of the implementation of Government resolutions, meeting minutes and the Prime Minister's instructions showed that as of the third quarter of this year, 12 instructions had been implemented, 15 partially implemented and 5 not implemented. Of the aimag's 195 organisations, 189 are not connected to the Dashboard.gov.mn complaints system, and complaints about health organisations rose from 150 in 2025 to 233 in the third quarter of 2026.\n\nAlthough the law on permits and notifications took effect on August 31, the aimag has registered only 14 of the 55 permits required by the law. The aimag has 4,972 registered businesses, and 73.9 percent of its 10,695 pensioners have begun receiving the basic pension this month. The Prime Minister instructed the aimag leadership to correct the violations and enforce the law."},
  {id:2, cat:"ediin-zasag", title:"Инфляц аравдугаар сард 13.4 хувьд хүрч, энэ оны хамгийн өндөр түвшинд хүрлээ", titleEn:"Inflation hits 13.4% in October, the highest level this year", time:"30 мин", timeEn:"30 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Fruit%20and%20vegetable%20stall%20at%20Southside%20Farmers%20Market%20November%202025.jpg?width=760", text:"Хэрэглээний бараа, үйлчилгээний үнэ 2026 оны аравдугаар сард улсын хэмжээнд өмнөх оны мөн үеэс 13.4 хувиар, өмнөх сараас 1.1 хувиар өссөнийг Үндэсний статистикийн хорооноос мэдээллээ. Ингэснээр инфляц энэ оны хамгийн өндөр түвшинд хүрч байна.\n\nИнфляцын түвшин 2025 оны аравдугаар сард 9.2 хувьтай байсан бол 2026 оны аравдугаар сард 13.4 хувь болж, өсөлтийн хурдац өмнөх оны мөн үеэс 4.2 нэгж хувиар нэмэгдсэн байна. Энэ оны долоодугаар сард инфляц 13 хувьтай гарч байлаа.\n\nУлсын инфляц 13.4 хувьтай гарахад бензин, түлшнээс бусад импортын барааны үнэ 2.1 нэгж хувиар, мах, хатуу түлшнээс бусад дотоодын барааны үнэ 4.4 нэгж хувиар өссөн нь голлон нөлөөлөв. Инфляцын 5.4 нэгж хувь нь хүнсний бараа, ундаа, усны бүлэг, 2.8 нь тээврийн бүлэг, 1.2 нь боловсролын үйлчилгээний бүлгийн үнийн өсөлтөөс шалтгаалжээ.\n\nМах, махан бүтээгдэхүүний бүлгийн үнэ өмнөх оны мөн үеэс 44.4 хувиар өсөхөд үхрийн мах 46.2, хонь, ямааны мах 55.2 хувиар тус тус өссөн нь голлон нөлөөлсөн байна. Талх, гурил, будааны бүлгийн үнэ 10.0 хувиар өсөхөд гурил 12.7, гоймон 26.3 хувиар өссөн аж. Хэрэглээний сагсанд нийт 430 нэр төрлийн бараа, үйлчилгээ багтдаг бөгөөд үүний 238 нь буюу 55.3 хувь нь импортын бараа байна.", textEn:"Consumer goods and services prices rose 13.4 percent year on year and 1.1 percent month on month in October 2026, the National Statistics Office reported, taking inflation to its highest level this year.\n\nInflation was 9.2 percent in October 2025 and reached 13.4 percent in October 2026, with the pace of increase up 4.2 percentage points on a year earlier. Inflation had stood at 13 percent in July this year.\n\nThe rise was driven mainly by non-fuel imported goods, up 2.1 percentage points, and domestic goods excluding meat and solid fuel, up 4.4 percentage points. Food, beverages and water accounted for 5.4 percentage points of the 13.4 percent, transport for 2.8, education services for 1.2 and clothing, textiles and footwear for 1.1.\n\nMeat and meat products rose 44.4 percent year on year, with beef up 46.2 percent and mutton and goat meat up 55.2 percent. Bread, flour and rice rose 10.0 percent, with flour up 12.7 percent and noodles up 26.3 percent. The consumer basket covers 430 goods and services, of which 238, or 55.3 percent, are imported."},
  {id:3, cat:"ediin-zasag", title:"Оюу толгой 2027 оноос ногдол ашиг олгоно гэдгээ захидлаар мэдэгджээ", titleEn:"Oyu Tolgoi confirms in letter it will pay dividends from 2027", time:"45 мин", timeEn:"45 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Oyu%20Tolgoi%2007.JPG?width=760", text:"Оюу толгой компани 2027 оноос хувьцаа эзэмшигчдийн хувь хэмжээнд тэнцүүлэн ногдол ашиг олгоно гэдгээ албан ёсны захидлаар мэдэгдсэнийг Сангийн сайд З.Мэндсайхан өнөөдрийн Засгийн газрын ээлжит хуралдаанаар танилцууллаа.\n\nЗахидал нь 2026 оны 11 дүгээр сарын 9-ний байдлаар Оюу толгой болон Рио тинто группээс ирсэн байна. Захидалд Монгол Улсын Ерөнхий сайд болон Рио тинто группын гүйцэтгэх захирлын уулзалтын үеэр талууд Оюу толгойгоос 2027 онд ногдол ашиг олгох талаар санал солилцсон тухай дурджээ.\n\nЗасгийн газраас 2027 онд Оюу толгойгоос 3 их наяд төгрөгийг төвлөрүүлэхээр төлөвлөсөнтэй холбогдуулан талууд төлөвлөгөө гарган ажиллаж байгаа аж. Энэ дүн нь компанийн 2027 онд улсын төсөвт төвлөрүүлэх татвар, ашигт малтмалын нөөц ашигласны төлбөр, бусад хураамжаас гадна төлөх дүн байх юм.\n\nЗахидалд Оюу толгойн захирал С.Мөнхсүх, Рио тинто зэсийн группийн Монгол дахь захирал Б.Дуламсүрэн нар гарын үсэг зурсан байна. Талууд компанийн урт хугацааны санхүүгийн тогтвортой байдлыг хадгалахын зэрэгцээ Монгол Улсад оруулах хувь нэмрийг нэмэгдүүлэхэд хамтран ажиллахаа илэрхийлжээ. Ямар хуваарийн дагуу, яаж олгохыг Сангийн сайдаар ахлуулсан ажлын хэсэг шийдвэрлэх юм.", textEn:"Oyu Tolgoi has confirmed in an official letter that it will pay dividends from 2027, in proportion to shareholdings, Finance Minister Z. Mendsaikhan told today's regular Cabinet meeting.\n\nThe letter, dated November 9, came from Oyu Tolgoi and the Rio Tinto group. It says that at a meeting between the Prime Minister of Mongolia and the chief executive of Rio Tinto, the two sides exchanged views on paying dividends from Oyu Tolgoi in 2027.\n\nThe Government plans to collect 3 trillion tugriks from Oyu Tolgoi in 2027, and the two sides are working on a plan to that end. The sum would be in addition to the taxes, mineral royalties and other fees the company is due to pay to the state budget in 2027.\n\nThe letter was signed by Oyu Tolgoi director S. Munkhsukh and B. Dulamsuren, Rio Tinto Copper's director for Mongolia. The two sides said they would work together to preserve the company's long-term financial stability while increasing its contribution to Mongolia. A working group led by the Finance Minister will decide on the schedule and method of payment."},
  {id:4, cat:"uls-tor", title:"Улсын нөөцийн тухай хуульд нэмэлт оруулах төслийг хэлэлцэхийг дэмжив", titleEn:"Committee backs debate on bill to amend the State Reserve Law", time:"1 цаг", timeEn:"1 hour", img:"https://commons.wikimedia.org/wiki/Special:FilePath/JA%20Saga%20South%20Refrigerated%20rice%20storage%20warehouses.jpg?width=760", text:"Улсын Их Хурлын Аюулгүй байдал, гадаад бодлогын байнгын хороо өнөөдөр буюу 11 дүгээр сарын 11-нд хуралдаж, Улсын нөөцийн тухай хуульд нэмэлт, өөрчлөлт оруулах тухай хуулийн төслийг хэлэлцэхийг дэмжлээ. Хуралдаан 12:01 цагт 15 гишүүн хүрэлцэн ирснээр 51.7 хувийн ирцтэйгээр эхэлж, Улсын Их Хурлын гишүүн Д.Цогтбаатар даргалсан байна.\n\nЗасгийн газраас улсын нөөцийн удирдлага, эрх зүйн тогтолцоог боловсронгуй болгох, гамшгийн үеийн бэлэн байдал, шуурхай ажиллах чадавхыг бэхжүүлэх зорилгоор боловсруулсан хуулийн төслийг 2026 оны 10 дугаар сарын 23-ны өдөр өргөн мэдүүлсэн юм. Төслийн талаар Монгол Улсын Шадар сайд Н.Номтойбаяр танилцуулав.\n\nДэлхий дахинд тохиолдож буй гамшиг, уур амьсгалын өөрчлөлтийн нөлөөлөл нь болзошгүй эрсдэлд бэлэн байх, нөөцийн хүрэлцээ, хүртээмжийг хангах шаардлагыг нэмэгдүүлж байгааг Шадар сайд дурдав. Төсөлд нөөцийн нэгдсэн мэдээллийн сан, цахим удирдлагыг нэвтрүүлэх, стратегийн, гамшгийн болон орон нутгийн нөөцийн мэдээллийг гамшгийн мэдээллийн санд нэгтгэх зэрэг долоон үндсэн зорилт тусгагджээ.\n\nХуулийн төслийн танилцуулгатай холбогдуулан Улсын Их Хурлын гишүүн Г.Хосбаяр, Д.Бум-Очир, Д.Цогтбаатар нар асуулт асууж, Шадар сайд болон ажлын хэсгийн гишүүдээс мэдээлэл авав. Байнгын хороо төслийг хэлэлцэх нь зүйтэй гэж үзэн дэмжлээ.", textEn:"The Standing Committee on Security and Foreign Policy of the State Great Khural met today, November 11, and supported debating a bill to amend the Law on State Reserves. The meeting began at 12:01 with 15 members present, 51.7 percent attendance, chaired by member of parliament D. Tsogtbaatar.\n\nThe Government submitted the bill on October 23, 2026, aiming to improve the management and legal framework of state reserves and to strengthen disaster readiness and rapid response capacity. Deputy Prime Minister N. Nomtoibaatar presented the bill.\n\nThe Deputy Prime Minister said disasters and climate change around the world are increasing the need to be prepared for possible risks and to ensure that reserves are sufficient and accessible. The bill sets out seven main goals, including a unified reserve information database and digital management, bringing strategic, disaster and local reserve data into the disaster information system.\n\nMembers of parliament G. Khosbayar, D. Bum-Ochir and D. Tsogtbaatar asked questions, and the Deputy Prime Minister and members of the working group provided information. The committee supported debating the bill."},
  {id:5, cat:"niigem", title:"Малын ашиг шимийг нэмэгдүүлж, малчдын орлогыг дэмжих “Шинэ цагийн малчин” аян өрнөнө", titleEn:"“Herder of the New Era” campaign to raise livestock productivity and herders' incomes", time:"1 цаг", timeEn:"1 hour", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Tal%20des%20Kherlen%20s%C3%BCdlich%20des%20Steppe%20Nomads%20Camp%2C%20Mongolei%20II.jpg?width=760", text:"Малын ашиг шимийг нэмэгдүүлж, малчдын орлого, амьдралын чанарыг сайжруулах зорилго бүхий “Шинэ цагийн малчин” аяныг орон даяар өрнүүлэхээр боллоо.\n\nМал аж ахуй нь Монголын хөдөөгийн өрхийн амьжиргааны гол тулгуур, улсын эдийн засгийн чухал салбарын нэг хэвээр байна. Малын ашиг шимийг нэмэгдүүлэх нь малчдын орлогыг өсгөж, хөдөөгийн амьдралын чанарыг дээшлүүлэхэд шууд нөлөөтэй гэж үздэг.\n\nАяны хүрээнд малчдад чиглэсэн дэмжлэг, мэдээлэл, сайн туршлагыг түгээн дэлгэрүүлэхээр төлөвлөж байна. Малчид, мал аж ахуйн салбарынхан, орон нутгийн удирдлагууд аянд идэвхтэй оролцох нь чухал гэж зохион байгуулагчид онцолж байна.", textEn:"A nationwide campaign called “Herder of the New Era” will be launched to increase livestock productivity and improve herders' incomes and quality of life.\n\nLivestock farming remains the mainstay of rural household livelihoods in Mongolia and an important sector of the national economy. Raising livestock productivity directly increases herders' incomes and improves the quality of life in rural areas.\n\nThe campaign will promote support, information and good practice for herders. Organisers say the active participation of herders, livestock sector workers and local authorities will be important to its success."},
  {id:6, cat:"niigem", title:"Ирэх жил 1–5 дугаар ангийн сурагчийн хоолны зардлыг 5,845 төгрөг болгон нэмэгдүүлнэ", titleEn:"School meal funding for grades 1–5 to rise to 5,845 tugriks per pupil next year", time:"2 цаг", timeEn:"2 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Children%20-%20six%20to%20twelve-%20School%20lunch.jpg?width=760", text:"Ирэх жилээс 1–5 дугаар ангийн нэг сурагчид ногдох хоолны зардлыг 5,845 төгрөг болгон нэмэгдүүлэхээр боллоо.\n\nБага ангийн сурагчдын үдийн хоолны хөтөлбөр нь хүүхдийн эрүүл мэнд, сурах идэвхийг дэмжих чухал арга хэмжээний нэг юм. Хоолны зардлыг нэмэгдүүлснээр сургуулийн хоолны чанар, илчлэг, олон төрөл байдлыг сайжруулах боломжтой болно гэж үзэж байна.\n\nСурагчдын хоолны зардал нь улсын төсвөөс санхүүждэг бөгөөд өсөлт нь өртөг, үнийн өсөлттэй уялдаж байгаа аж. Сургууль, эцэг эх, хүүхдийн эрүүл мэндийн байгууллагууд хөтөлбөрийн хэрэгжилтэд анхаарал хандуулж ажиллах нь чухал байна.", textEn:"From next year, the cost of school meals for each pupil in grades 1 to 5 will be raised to 5,845 tugriks.\n\nThe school lunch programme for primary pupils is an important measure supporting children's health and enthusiasm for learning. Raising the funding is expected to improve the quality, nutritional value and variety of school meals.\n\nSchool meal costs are funded from the state budget, and the increase reflects rising costs and prices. Schools, parents and children's health organisations will need to pay attention to how the programme is implemented."},
  {id:7, cat:"niigem", title:"Тэгш, сондгой дугаараар зорчсон жолоочдын авто зам ашигласны төлбөрийг хасна", titleEn:"Drivers who follow odd-even plate rules to get road-use fee discounts", time:"2 цаг", timeEn:"2 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Traffic%20Jam%20-%20geograph.org.uk%20-%207507046.jpg?width=760", text:"Авто зам ашигласны төлбөрийн хэмжээг шинэчлэн батлах тухай 24/29 тогтоолын хавсралтад нэмэлт өөрчлөлт оруулснаар долоо хоног бүр замын хөдөлгөөнд оролцохыг хязгаарласнаас бусад өдрүүдэд тэгш, сондгой дугаараар зорчсон бол зам ашигласны төлбөрөөс чөлөөлөхөөр болж байна.\n\nТодруулбал, тэгш, сондгойгоор замын хөдөлгөөнд оролцсон үед ирэх оныхоо зам ашигласны төлбөрөөс хасаж тооцохыг Даваа гарагт болсон Нийслэлийн иргэдийн төлөөлөгчдийн хурлын хуралд оролцсон төлөөлөгчдийн 70 хувь нь дэмжжээ.\n\nТатвар төлөгчдийн хувьд тээврийн хэрэгслийн төрлөөс хамааран нэг хоногт 274–1,370, 14 хоногт 3,836–19,180, нэг сард 8,220–41,100 төгрөгийг буцаан авах буюу ирэх оны төлбөрөөс хөнгөлөхөөр тогтоолын төсөлд тусгажээ.\n\nУлаанбаатар хотын замын хөдөлгөөний ачааллыг бууруулах зорилгоор цагаан сар, есдүгээр сарын 1-ний бэлтгэл ажлын үеэр болон олон улсын томоохон хурал зөвлөгөөний үед автомашиныг тэгш, сондгой дугаараар зорчуулах зохицуулалт хийдэг. Нийслэлийн хэмжээнд 744,246 авто тээврийн хэрэгсэл бүртгэлтэйгээс дугаарын хязгаарлалтад хамрагдах 720,122 нь замын хөдөлгөөнд оролцдог байна. Харин автомашины татвараас хөнгөлөх асуудлыг хуульд нэмэлт оруулснаар шийдэх учир Засгийн газраас Улсын Их Хуралд өргөн барихаар болжээ.", textEn:"Amendments to the annex of Resolution 24/29 on road-use fees mean drivers who follow odd-even number plate restrictions on restricted days will be exempt from the road-use fee.\n\nSpecifically, 70 percent of representatives at the Ulaanbaatar City Council meeting on Monday supported deducting the fee for days driven under the odd-even rules from next year's road-use fee.\n\nDepending on vehicle type, the deduction will be 274 to 1,370 tugriks for one day, 3,836 to 19,180 for 14 days and 8,220 to 41,100 for one month, according to the draft resolution.\n\nTo ease traffic congestion in Ulaanbaatar, odd-even restrictions are imposed during Tsagaan Sar, preparations for September 1 and major international meetings. Of the 744,246 vehicles registered in the capital, 720,122 are subject to the restriction. Exempting vehicles from vehicle tax will require a change to the law, which the Government will submit to parliament."},
  {id:8, cat:"sport", title:"Дакар 2026: А.Алтанзул хүрэл медалийн төлөөх тулаанд ялагдаж, Монголын баг хоёр хүрэлтэйгээр наадмаа өндөрлүүллээ", titleEn:"Dakar 2026: A. Altanzul loses bronze bout as Mongolia ends Youth Olympics with two bronzes", time:"3 цаг", timeEn:"3 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Set-up%20of%20a%20boxing%20Ring.jpg?width=760", text:"Сенегалын Дакар хотноо үргэлжилж буй “Дакар-2026” залуучуудын олимпын наадмын боксын тэмцээнд Монгол Улсыг төлөөлөн өрсөлдсөн А.Алтанзул хүрэл медалийн төлөөх тулаанд ялагдаж, тэмцээнээ өндөрлүүллээ.\n\nЭмэгтэйчүүдийн 48 кг-д өрсөлдсөн түүний өрсөлдөгч нь 19 хүртэлх насны Европын аварга, 16 настай Лили Бассетт гэх Их Британийн тамирчин байв. Тэрбээр сонирхогчдын боксоор 37 тулаан хийснээс 36-д нь ялсан үзүүлэлттэйгээр олимпод ирсэн юм. Хоёр тамирчин өнгөрсөн гуравдугаар сард учраа таарахад Лили Бассетт ялж байжээ.\n\nТулааны эхний үед А.Алтанзул ялимгүй илүү харагдсан ч үеийн төгсгөлд тоолуулж, Лилид давуу байдал үүсгэв. Хоёрдугаар үед А.Алтанзул раундын харьцааг тэнцүүлэх гэж хичээсэн ч Лили Бассетт дахин хоёр тоолуулж, шүүгчид тулааныг зогсоосноор А.Алтанзул ялагдал хүлээв.\n\nИйнхүү Монголын баг тамирчдын хувьд энэ удаагийн залуучуудын олимп өндөрлөж байна. Монгол Улс энэ наадамд жүдоч Т.Төгсхүслэн, элсний бөхийн Э.Анужин нарын хоёр хүрэл медаль хүртсэн амжилтаар оролцлоо. Наадам 10 дугаар сарын 31-нээс 11 дүгээр сарын 13-ныг хүртэл Дакар хотноо болж, дэлхийн 206 орны тамирчид өрсөлдсөн юм.", textEn:"A. Altanzul, representing Mongolia in boxing at the “Dakar-2026” Youth Olympic Games in Dakar, Senegal, lost her bronze-medal bout and ended her campaign.\n\nCompeting in the women's 48 kg category, her opponent was 16-year-old Lily Bassett of Great Britain, the European under-19 champion, who arrived at the Olympics with 36 wins from 37 amateur bouts. The two met last March, when Bassett also won.\n\nAltanzul looked slightly better in the first round but was counted at the end of the round, giving Bassett the advantage. In the second round Altanzul tried to level the score, but Bassett counted her twice more and the referee stopped the bout.\n\nMongolia's campaign at these Youth Olympics has now ended. Mongolia won two bronze medals, through judoka T. Tugskhuslen and beach wrestler E. Anujin. The Games run from October 31 to November 13 in Dakar, with athletes from 206 countries competing."},
  {id:9, cat:"sport", title:"Олимпын гурав, дэлхийн 11 алттай жүдоч Тедди Ринье Францын Ерөнхийлөгчийн сонгуульд нэр дэвшихээ мэдэгдэв", titleEn:"Teddy Riner, three-time Olympic and 11-time world judo champion, announces run for French presidency", time:"3 цаг", timeEn:"3 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/KOCIS%20Korea%20Judo%20Kim%20Jaebum%20London%2036%20%287696361164%29.jpg?width=760", text:"Олимпын гурван алт, дэлхийн 11 алттай Францын жүдоч Тедди Ринье Францын Ерөнхийлөгчийн сонгуульд нэр дэвшихээ мэдэгдлээ.\n\nРинье бол Францын спортын түүхэн дэх хамгийн алдартай тамирчдын нэг бөгөөд олон улсын жүдо бөхийн тавцанд хоёр арван жил гаруй ноёрхож ирсэн билээ. Түүний нэр дэвших шийдвэр Францын олон нийт, улс төрийн хүрээнд ихээхэн анхаарал татаж байна.\n\nТамирчны нэр хүнд, олон нийтийн итгэлийг улс төрд шилжүүлэх оролдлого Францад төдийгүй дэлхий дахинд сонирхол татаж байгаа юм. Риньегийн сонгуулийн хөтөлбөр, түүнийг дэмжих улс төрийн хүчний талаарх мэдээлэл ойрын өдрүүдэд тодрох төлөвтэй байна.", textEn:"Teddy Riner, the French judoka with three Olympic gold medals and 11 world titles, has announced he will run for President of France.\n\nRiner is one of the most famous athletes in French sporting history, dominating international judo for more than two decades. His decision to enter politics has drawn wide attention in France and beyond.\n\nTurning an athlete's popularity and public trust into political support is attracting interest in France and around the world. Details of Riner's election programme and the political forces backing him are expected to become clear in the coming days."},
  {id:10, cat:"soyol", title:"“Тэнгэрийн элч Тэмүүжин” жүжгийг өнөөдөр Улсын хүүхэд залуучуудын театрын тайзнаа толилуулна", titleEn:"“Heaven's Messenger Temujin” staged today at the State Children's and Youth Theatre", time:"4 цаг", timeEn:"4 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Theatrical%20performance%20in%20Xi%27an.jpg?width=760", text:"“Тэнгэрийн элч Тэмүүжин” жүжгийг өнөөдөр буюу 11 дүгээр сарын 12-нд Улсын хүүхэд залуучуудын театрын тайзнаа толилуулна.\n\nЖүжиг нь залуу Тэмүүжингийн амьдрал, хувь заяаны тухай өгүүлэх бөгөөд Монголын түүх, соёлын өвийг тайзны урлагаар дамжуулан үзэгчдэд хүргэх зорилготой юм. Хүүхэд, залуучуудад зориулсан тус театрын уран бүтээлчид уг бүтээлийг бэлтгэжээ.\n\nТэмүүжингийн түүх бол Монголын ард түмний бахархал, үндэсний ой санамжийн чухал хэсэг бөгөөд тайзны бүтээлээр дамжуулан залуу үед өвлүүлэх нь соёлын ач холбогдолтой гэж үздэг. Жүжгийг үзэхээр ирсэн үзэгчид Монголын түүхэн баатарлаг сэдвийг шинэ өнцгөөс харах боломжтой болно.", textEn:"The play “Heaven's Messenger Temujin” will be staged today, November 12, at the State Children's and Youth Theatre.\n\nThe play tells the story of the young Temujin and his fate, aiming to bring Mongolia's history and cultural heritage to audiences through theatre. The theatre's artists have prepared the production for children and young people.\n\nTemujin's story is an important part of the Mongolian people's pride and national memory, and passing it on to the younger generation through theatre is of cultural significance. Audiences will be able to see the historical heroic theme from a new angle."},
  {id:11, cat:"soyol", title:"Их Монгол Улс байгуулагдсаны 820 жилийн ойд зориулж “Өндөр хаан” хөгжмийн бүтээл туурвив", titleEn:"“Undur Khaan” musical work composed for the 820th anniversary of the Great Mongol State", time:"4 цаг", timeEn:"4 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/BBC%20Symphony%20Orchestra%20at%20the%20Royal%20Albert%20Hall.jpg?width=760", text:"Их Монгол Улс байгуулагдсаны 820 жилийн ойд зориулж “Өндөр хаан” хөгжмийн бүтээл туурвижээ.\n\nУг бүтээл нь Монгол төрийн 820 жилийн түүх, Их Эзэн Чингис хааны өв уламжлалыг хөгжмийн хэлээр илэрхийлэх зорилготой юм. Ойн арга хэмжээний хүрээнд уг бүтээлийг олон нийтэд толилуулж байгаа аж.\n\nЭнэ онд Монгол Улс Их Монгол Улс байгуулагдсаны 820 жил, Их Эзэн Чингис хааны мэндэлсний 864 жилийн ойг өргөн тэмдэглэж, “Монгол бахархлын өдөр”-ийг тохиолдуулан олон соёлын арга хэмжээ зохион байгуулж байна. “Өндөр хаан” бүтээл нь ойн арга хэмжээний соёлын хөтөлбөрийн нэгэн онцлох хэсэг болж байна.", textEn:"A musical work titled “Undur Khaan” has been composed for the 820th anniversary of the founding of the Great Mongol State.\n\nThe work aims to express the 820-year history of the Mongolian state and the heritage of Chinggis Khaan through music, and is being presented to the public as part of the anniversary events.\n\nThis year Mongolia is marking the 820th anniversary of the founding of the Great Mongol State and the 864th anniversary of the birth of Chinggis Khaan with a wide range of events, including many cultural activities for “Mongolian Pride Day”. The “Undur Khaan” work is one of the highlights of the anniversary cultural programme."},
  {id:12, cat:"tech", title:"DeepMind-ийн хиймэл оюун Signal мессенжерийн шифрлэлтийг машин код хүртэл шалгаж баталгаажуулав", titleEn:"DeepMind AI verifies Signal encryption security down to machine code", time:"5 цаг", timeEn:"5 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Messaging%20on%20smartphone%20%2822389367255%29.jpg?width=760", text:"Google DeepMind компани хиймэл оюуны агентүүдээр Signal мессенжерийн шифрлэлтийн аюулгүй байдлыг машин код хүртэл шалгаж баталгаажуулсан тухай мэдээллээ.\n\nDeepMind-ийн бүтээсэн AlphaProof Code хэмээх хиймэл оюуны агент нь албан ёсны баталгаажуулалтын хүрээнд ажилладаг бөгөөд Signal-ийн үндсэн сан болох libsignal-ийн аюулгүй байдлыг шалгажээ. Шалгалт нь эмхэтгэсэн машин код хүртэл үргэлжилсэн нь онцлог юм.\n\nЭнэ нь хиймэл оюуныг зөвхөн код бичихэд бус, програм хангамжийн аюулгүй байдлыг математикийн нарийвчлалтайгаар баталгаажуулахад ашиглаж болохыг харуулж байна. Signal бол дэлхий дахинд олон сая хүн ашигладаг, төгсгөл хоорондын шифрлэлтээрээ алдартай мессенжер юм.\n\nМэргэжилтнүүдийн үзэж буйгаар ийм баталгаажуулалт нь хэрэглэгчдийн хувийн мэдээллийн хамгаалалтыг бэхжүүлж, шифрлэлтийн системийн найдвартай байдлыг нэмэгдүүлэхэд чухал ач холбогдолтой аж.", textEn:"Google DeepMind has announced that its AI agents have verified the security of the encryption in the Signal messaging app, down to the machine code.\n\nDeepMind's AlphaProof Code, an AI agent framework for formal verification, was used to check libsignal, the core library of Signal. The verification extended to the compiled machine code, which is a notable feature.\n\nThe work shows that AI can be used not only to write code but to verify software security with mathematical precision. Signal is a messenger used by millions of people around the world and is known for its end-to-end encryption.\n\nExperts say such verification is important for strengthening the protection of users' personal data and increasing trust in encryption systems."},
  {id:13, cat:"tech", title:"Anthropic IPO үнэлгээгээ 1.3 их наяд доллараар тогтоов", titleEn:"Anthropic sets IPO valuation at $1.3 trillion", time:"5 цаг", timeEn:"5 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Artificial%20Intelligence%20%28AI%29%20and%20Robotics%20exhibition%20at%20the%20Heinz%20Nixdorf%20MuseumsForum.jpg?width=760", text:"Хиймэл оюуны салбарын уналтын аюулыг үл хайхарсан Anthropic компани олон нийтэд хувьцаагаа гаргах (IPO) үнэлгээгээ 1.3 их наяд доллараар тогтоов.\n\nAnthropic бол хиймэл оюун хөгжүүлэгч тэргүүлэх компаниудын нэг бөгөөд түүний бүтээсэн Claude хиймэл оюуны туслах нь дэлхий дахинд өргөн хэрэглэгдэж байна. Компанийн үнэлгээ нь хиймэл оюуны салбарт хөрөнгө оруулагчдын итгэл өндөр хэвээр байгааг харуулж байна.\n\nСүүлийн үед хиймэл оюуны компаниудын үнэлгээ хэт өндөр, зах зээлд “хөөс” үүсч болзошгүй тухай болгоомжлол яригдаж байгаа ч Anthropic-ийн шийдвэр нь салбарын өсөлт үргэлжилнэ гэсэн итгэлийг илэрхийлж байгаа юм. IPO-ийн тов, хувьцааны үнийн талаарх дэлгэрэнгүй мэдээлэл дараа нь зарлагдах төлөвтэй байна.", textEn:"Despite fears of a downturn in the artificial intelligence sector, Anthropic has set its initial public offering valuation at $1.3 trillion.\n\nAnthropic is one of the leading AI developers, and its Claude AI assistant is widely used around the world. The valuation shows that investor confidence in the AI sector remains high.\n\nConcerns have recently been raised that AI company valuations are too high and a market bubble could form, but Anthropic's decision signals confidence that the sector's growth will continue. Details of the IPO date and share price are expected to be announced later."},
  {id:14, cat:"delhii", title:"Орос, Украин Абу Дабид их хэмжээний олзлогдогч солилцохоор тохиролцов", titleEn:"Russia and Ukraine agree on large-scale prisoner exchange in Abu Dhabi talks", time:"6 цаг", timeEn:"6 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Abu%20Dhabi%20Skyline.jpg?width=760", text:"Орос, Украин улс Арабын Нэгдсэн Эмират Улсын нийслэл Абу Дабид үргэлжилж буй энхийн яриа хэлэлцээний үеэр их хэмжээний олзлогдогч солилцохоор тохиролцлоо.\n\nЯриа хэлэлцээ хоёр дахь өдрөө үргэлжилж байгаа бөгөөд талууд цаашид хэд хэдэн шатны хэлэлцээ хийхээр төлөвлөж байна. Олзлогдогч солилцох тохиролцоо нь дайны хүнд хэцүү байдлыг зөөлрүүлэх, талуудын итгэлийг сэргээхэд чиглэсэн чухал алхам гэж ажиглагчид үзэж байна.\n\nЯриа хэлэлцээ нь АНУ-ын зуучлалаар явагдаж байгаа юм. Олон улсын хамтын нийгэмлэг дайныг дипломат замаар дуусгахыг уриалж, энхийн хэлэлцээний явцыг анхааралтай ажиглаж байна.\n\nОлзлогдогч солилцоо нь дайнд нэрвэгдсэн гэр бүлүүдэд найдвар төрүүлж, цаашдын хэлэлцээнд эерэг уур амьсгал бүрдүүлэх боломжтой гэж үзэж байна. Солилцооны хэмжээ, хугацааны талаарх дэлгэрэнгүй мэдээлэл дараа нь зарлагдах төлөвтэй байна.", textEn:"Russia and Ukraine have agreed on a large-scale prisoner exchange during peace talks in Abu Dhabi, the capital of the United Arab Emirates.\n\nThe talks have entered their second day, and the two sides plan further rounds of negotiations. Observers see the prisoner exchange agreement as an important step towards easing the hardships of the war and rebuilding trust between the parties.\n\nThe talks are being held with mediation by the United States. The international community has urged a diplomatic end to the war and is watching the progress of the peace talks closely.\n\nThe exchange will bring hope to families affected by the war and could create a positive atmosphere for further negotiations. Details of the scale and timing of the exchange are expected to be announced later."},
  {id:15, cat:"delhii", title:"АНУ-ын Ираны эсрэг тэнгисийн бүслэлт үргэлжилж, Катар, Саудын Араб дипломат шийдлийг шаардаж байна", titleEn:"US naval blockade of Iran continues as Qatar and Saudi Arabia press for diplomacy", time:"6 цаг", timeEn:"6 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Royal%20Navy%20Aircraft%20Carrier%20HMS%20Illustrious%20Returns%20To%20Portsmouth%20Folllowing%20Refit%20MOD%2045152941.jpg?width=760", text:"АНУ, Ираны хоорондын хурцадмал байдал дэлхийн анхаарлын төвд хэвээр байна. АНУ-ын Ерөнхийлөгч Дональд Трамп Ираны эсрэг АНУ-ын тэнгисийн бүслэлт үргэлжлэх болно гэж мэдэгдлээ.\n\nХарин Катар, Саудын Араб зэрэг бүс нутгийн улсууд асуудлыг энхийн дипломат замаар шийдвэрлэхийг шаардаж, хурцадмал байдлыг намжаахыг уриалж байна. Дэлхийн удирдагчид талуудыг тэвчээртэй байж, мөргөлдөөнөөс зайлсхийхийг уриалжээ.\n\nИран өөрийн пуужингийн нөөцийг үзүүлэн, АНУ болон Израилийг хурцадмал байдлыг улам даамжруулахгүй байхыг анхааруулсан байна. Мөргөлдөөн даамжирвал бүс нутгийн тогтвортой байдал, дэлхийн эрчим хүчний зах зээлд ноцтой нөлөө үзүүлэх болзошгүй гэж шинжээчид үзэж байна.\n\nНөхцөл байдал хурцадмал хэвээр байгаа ч дипломат яриа хэлэлцээний суваг нээлттэй байгаа бөгөөд олон улсын зуучлагчид талуудын хооронд яриа хэлэлцээ өрнүүлэхийг хичээж байна.", textEn:"Tensions between the United States and Iran remain in the global spotlight. US President Donald Trump has said the US naval blockade of Iran will continue.\n\nRegional countries including Qatar and Saudi Arabia are pressing for a peaceful diplomatic solution and urging tensions to be eased. World leaders have called on both sides to show restraint and avoid conflict.\n\nIran has displayed its missile stocks and warned the United States and Israel not to escalate tensions further. Analysts say that if the conflict escalates it could seriously affect regional stability and global energy markets.\n\nThe situation remains tense, but diplomatic channels are still open and international mediators are trying to keep dialogue going between the parties."},
  {id:16, cat:"delhii", title:"“Их-7”-гийн Гадаад хэргийн сайд нар Парист Тайваний хоолойн асуудлаар хамтарсан мэдэгдэл гаргав", titleEn:"G7 foreign ministers issue joint statement on Taiwan Strait after Paris meeting", time:"7 цаг", timeEn:"7 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Eiffel%20Tower%20in%202022%2002.jpg?width=760", text:"“Их-7” бүлгийн Гадаад хэргийн сайд нар болон Европын Холбооны дээд төлөөлөгч 2026 оны жилийн уулзалтаа Францын нийслэл Парис хотноо 11 дүгээр сарын 9, 10-нд хийж, хамтарсан мэдэгдэл гаргав.\n\nХамтарсан мэдэгдэлд Тайваний хоолойн асуудлыг хөндсөн байна. Тайваний хоолойн энх тайван, тогтвортой байдал нь бүс нутаг төдийгүй дэлхийн эдийн засаг, худалдаанд чухал ач холбогдолтой гэж сайд нар онцолжээ.\n\n“Их-7” бүлэг нь АНУ, Их Британи, Франц, Герман, Итали, Канад, Япон зэрэг дэлхийн тэргүүлэх эдийн засагтай орнуудаас бүрддэг. Тус бүлгийн Гадаад хэргийн сайд нарын уулзалт нь олон улсын аюулгүй байдал, эдийн засгийн тулгамдсан асуудлаар байр сууриа нэгтгэх чухал тавцан юм.\n\nМэдэгдэл нь Хятадын зүгээс анхааралтай ажиглагдаж байгаа бөгөөд Тайваний хоолойн асуудал олон улсын харилцааны эмзэг сэдвүүдийн нэг хэвээр байна.", textEn:"Foreign ministers of the Group of Seven (G7) and the European Union's High Representative held their annual meeting in Paris, France, on November 9 and 10 and issued a joint statement.\n\nThe joint statement addresses the Taiwan Strait. The ministers stressed that peace and stability in the Taiwan Strait are important not only for the region but for the global economy and trade.\n\nThe G7 brings together leading economies including the United States, the United Kingdom, France, Germany, Italy, Canada and Japan. The foreign ministers' meeting is an important forum for aligning positions on pressing international security and economic issues.\n\nThe statement is being watched closely in China, and the Taiwan Strait remains one of the most sensitive issues in international relations."},
  {id:17, cat:"delhii", title:"Испанид 14 жилийн дараа анхны ерөнхий ажил хаялт болов", titleEn:"Spain holds first general strike in 14 years", time:"7 цаг", timeEn:"7 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/CGT%20Workers%20Demonstration%20-%20Protesting%20Cuts%20-%20Madrid%20-%20Spain.jpg?width=760", text:"Испанид 14 жилийн дараа анхны ерөнхий ажил хаялт болж, нийгэм, улс төрийн өөр өөр хүсэл эрмэлзэл мөргөлдөж байна.\n\nЕрөнхий ажил хаялт нь ажилчид, үйлдвэрчний эвлэлүүдийн зүгээс засгийн газрын бодлогод эсэргүүцэл илэрхийлэх хамгийн хүчтэй хэлбэрүүдийн нэг юм. Сүүлийн ерөнхий ажил хаялт 2012 онд болсон бөгөөд түүнээс хойш ийм өргөн хүрээний ажил хаялт болоогүй байв.\n\nАжил хаялт нь тээвэр, боловсрол, эрүүл мэнд зэрэг нийгмийн чухал салбаруудад нөлөөлж, өдөр тутмын амьдралд саад учруулж байна. Засгийн газар, үйлдвэрчний эвлэлүүд яриа хэлэлцээ хийхээр оролдож байгаа ч талуудын байр суурь хол хэвээр байна.\n\nИспанийн нийгэмд эдийн засгийн тэгш бус байдал, цалин, хөдөлмөрийн нөхцөлтэй холбоотой маргаан хурцадмал байгаа бөгөөд ажил хаялт нь эдгээр асуудлыг олон нийтийн анхаарлын төвд гаргаж ирлээ.", textEn:"Spain has held its first general strike in 14 years, bringing clashing social and political demands to the fore.\n\nA general strike is one of the strongest ways for workers and trade unions to express opposition to government policy. The last general strike was in 2012, and there has been no strike on this scale since.\n\nThe strike is affecting transport, education, health and other important public services and disrupting daily life. The Government and trade unions are trying to negotiate, but their positions remain far apart.\n\nDisputes over economic inequality, pay and working conditions are acute in Spanish society, and the strike has brought these issues to the centre of public attention."},
  {id:18, cat:"delhii", title:"Оросын талд тагнуулаар ажилласан хэргээр АНУ-ын цэргийн алба хаагчийг Их Британид баривчлав", titleEn:"Senior US soldier arrested in UK on suspicion of spying for Russia", time:"8 цаг", timeEn:"8 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Big%20Ben%20at%20sunset%20-%202014-10-27%2017-30.jpg?width=760", text:"Оросын талд тагнуулаар ажиллаж байсан хэргээр АНУ-ын армийн ахлах алба хаагчийг Их Британид баривчилжээ.\n\nБаривчилгаа нь барууны орнуудын аюулгүй байдлын албадын анхаарлыг татаж, Оросын тагнуулын үйл ажиллагааны талаарх болгоомжлолыг нэмэгдүүлж байна. Мөрдөн шалгах ажиллагаа үргэлжилж байгаа бөгөөд алба хаагчийн яг ямар мэдээлэл дамжуулсан байж болзошгүй нь тодроогүй байна.\n\nОрос, барууны орнуудын харилцаа сүүлийн жилүүдэд хурцадмал байгаа бөгөөд тагнуулын хэргүүд үе үе илэрч байна. Энэ хэрэг нь холбоотнуудын дундах аюулгүй байдлын хамтын ажиллагаа, мэдээллийн хамгаалалтын асуудлыг дахин анхаарлын төвд гаргаж ирлээ.", textEn:"A senior US Army soldier has been arrested in the United Kingdom on suspicion of spying for Russia.\n\nThe arrest has drawn the attention of Western security services and heightened concern about Russian intelligence activity. The investigation is continuing, and it is not yet clear what information the soldier may have passed on.\n\nRelations between Russia and Western countries have been tense in recent years, and espionage cases surface from time to time. The case has again put security cooperation among allies and the protection of information in the spotlight."},
  {id:19, cat:"oron-nutag", region:"khentii", title:"Хэнтий аймагт гарсан хээрийн түймрийг бүрэн унтраав", titleEn:"Steppe fire in Khentii province fully extinguished", time:"8 цаг", timeEn:"8 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Grassland%20fire%20-%20geograph.org.uk%20-%208144850.jpg?width=760", text:"Хэнтий аймгийн Батноров сумын Идэрмэг багийн “Ар булгийн жонш” гэдэг газарт гарсан хээрийн түймрийг бүрэн унтраав.\n\nТүймэр гарсан тухай дуудлагыг онцгой байдлын алба өнөөдөр 15:30 цагт хүлээн авчээ. Дуудлагын дагуу тус аймгийн Онцгой байдлын газрын 32 дугаар анги, Батноров сумын Бэрх тосгон дахь 42 дугаар ангийн алба хаагчид, сумын мэргэжлийн ангийн алба хаагчид түймрийг унтраахаар ажиллаж, 16:43 цагт бүрэн унтраасныг Онцгой байдлын ерөнхий газраас мэдээлэв.\n\nТүймэр гарсан газар нь аймгийн төвөөс зүүн хойд зүгт 100 км, Бэрх тосгоны төвөөс зүүн хойд зүгт 30 км-т оршдог байна. Хээрийн түймэр нь малчдын бэлчээр, байгаль орчинд хохирол учруулах эрсдэлтэй байдаг тул онцгой байдлын албаныхан шуурхай ажиллах нь чухал юм.\n\nНамрын улиралд хуурайшил ихэссэнтэй холбоотойгоор хээрийн түймрийн эрсдэл өндөр байдаг. Иргэдийг ил гал түлэхдээ болгоомжтой байж, түймрээс урьдчилан сэргийлэхийг онцгой байдлын байгууллагаас анхааруулж байна.", textEn:"A steppe fire in the Idermeg bag of Batnorov soum, Khentii aimag, at a place called “Ar Bulgiin Jonsh”, has been fully extinguished.\n\nThe emergency service received the call today at 15:30. Firefighters from the aimag emergency department's 32nd unit and the 42nd unit in Berkh village, together with the soum's professional unit, worked to extinguish the fire and fully put it out at 16:43, the General Emergency Management Agency reported.\n\nThe fire was 100 km northeast of the aimag centre and 30 km northeast of the centre of Berkh village. Steppe fires can damage herders' pastures and the environment, so a rapid response by emergency services is important.\n\nIn autumn, dry conditions increase the risk of steppe fires. The emergency authorities are urging people to be careful with open fires and to help prevent fires."}
];

function aTitle(a){ return LANG === "en" ? (a.titleEn || a.title) : a.title; }
function aTime(a){ return LANG === "en" ? (a.timeEn || a.time) : a.time; }
function aText(a){ if(a.text) return LANG === "en" ? (a.textEn || a.text) : a.text; return SAMPLE_TEXT[LANG][a.id === 1 ? "long" : "short"]; }
function aRegion(a){ return a.region ? ((REGIONS[LANG] && REGIONS[LANG][a.region]) || a.region) : ""; }

// ===== Ханш · Цаг агаар (өдөр бүр шинэчлэгдэнэ; цаг агаарыг Open-Meteo-гоос шууд татна) =====
const RATES = {date:"2026-11-12", items:[
  {code:"USD", mnt:3602.33, chg:1}, {code:"EUR", mnt:4018.22, chg:-1}, {code:"JPY", mnt:22.67, chg:-1},
  {code:"CNY", mnt:540.04, chg:1}, {code:"KRW", mnt:2.7, chg:1}, {code:"RUB", mnt:43.51, chg:-1}, {code:"GBP", mnt:4802.09, chg:-1}
]};
let WEATHER = [
  {city:"Улаанбаатар", cityEn:"Ulaanbaatar", lat:47.9212, lon:106.9186, tz:"Asia/Ulaanbaatar", temp:-4, code:2},
  {city:"Токио", cityEn:"Tokyo", lat:35.6762, lon:139.6503, tz:"Asia/Tokyo", temp:8, code:1},
  {city:"Сөүл", cityEn:"Seoul", lat:37.5665, lon:126.978, tz:"Asia/Seoul", temp:6, code:2},
  {city:"Бээжин", cityEn:"Beijing", lat:39.9042, lon:116.4074, tz:"Asia/Shanghai", temp:2, code:0},
  {city:"Москва", cityEn:"Moscow", lat:55.7558, lon:37.6173, tz:"Europe/Moscow", temp:1, code:3}
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
