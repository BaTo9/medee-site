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

// ===== Бодит мэдээнүүд (2026-11-17) — өдөр бүр шинэчлэгдэнэ =====
const ARTICLES = [
  {id:1, cat:"delhii", title:"АНУ-ын гурав дахь нисэх онгоц тээгч Ойрхи Дорнодод ирлээ: Хормузын хоолойд супертанкер живжээ", titleEn:"Third US aircraft carrier arrives in Middle East as supertanker sinks in Strait of Hormuz", time:"15 мин", timeEn:"15 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/200125-N-LH674-1073%20USS%20Theodore%20Roosevelt%20%28CVN-71%29.jpg?width=1000", text:"АНУ-ын «Теодор Рузвельт» нисэх онгоц тээгч тэргүүтэй цохилтын бүлэг ням гарагт Ойрхи Дорнодын бүсэд ирж, АНУ-ын Төв командлалын хариуцах бүсэд ажиллаж буй нисэх онгоц тээгчийн тоо гурав боллоо. Тус бүлэг нь «Жорж Х.В. Буш», «Жорж Вашингтон» тээгчдийн эгнээнд нэгдсэн бөгөөд Вашингтон бүс нутагт цэргийн байрлалаа бэхжүүлж байгааг харуулж байна.\n\nИраны Исламын хувьсгалын хамгаалалтын корпус ням гарагийн үүрээр Бахрейн дахь АНУ-ын Аль-Риффа нисдэг тэрэгний баазын радарын системийг онилж зургаан дрон илгээснээ мэдэгдсэн бол Бахрейны тал агаарын довтолгооноос хамгаалах системүүд довтолгоог таслан зогсоосон гэж мэдээлжээ. Энэ нь гурван хоногийн дотор Бахрейн руу хийсэн хоёр дахь довтолгоо болж, хоёр сар орчим үргэлжилсэн харьцангуй нам гүм үе дуусч байгааг харуулж байна.\n\nҮүний зэрэгцээ Хормузын хоолойд хоёр сая гаруй баррель нефть тээвэрлэж явсан супертанкер минад өртөж живсэн тухай мэдээлэл гарчээ. Ираны төрийн телевиз 48 цагийн дотор таван хөлөг онгоц минад өртөж шатсан гэж мэдэгдсэн байна. Хормузын хоолой нь дэлхийн нефтийн нийлүүлэлтийн чухал суваг тул үйл явдал эрчим хүчний зах зээлд түгшүүр төрүүлж байна.\n\nАНУ, Израиль хоёр Ираны эрчим хүч, эдийн засгийн дэд бүтцэд чиглэсэн шинэ цохилтын төлөвлөгөө боловсруулж байгаа тухай мэдээлэл гарсан бол Ираны Гадаад хэргийн дэд сайд Казем Гарибабади Тегеран АНУ-ын довтолгоог хүлээхгүйгээр хариу барина гэж анхаарууллаа. АНУ-ын Элчин сайд Бахрейн дахь иргэддээ сонор сэрэмжтэй байхыг уриалж, нислэг цуцлагдах, агаарын орон зай хаагдах магадлалтайг мэдэгдсэн байна.", textEn:"The US aircraft carrier strike group led by USS Theodore Roosevelt arrived in the Middle East on Sunday, bringing the number of US carrier groups operating in the Central Command area to three. The group joined the carriers George H.W. Bush and George Washington, a sign that Washington is reinforcing its military presence in the region.\n\nIran's Islamic Revolutionary Guard Corps said it sent six drones at the radar system of the US Al-Riffa helicopter base in Bahrain in the early hours of Sunday, while Bahrain said its air defence systems intercepted the attack. It was the second attack on Bahrain in three days, ending a roughly two-month lull in hostilities.\n\nAt the same time, reports emerged that a supertanker carrying more than two million barrels of oil sank in the Strait of Hormuz after hitting a mine. Iranian state television said five vessels had struck mines and caught fire within 48 hours. Because the strait is a crucial channel for global oil supplies, the incident has raised alarm on energy markets.\n\nReports say the US and Israel are drawing up plans for fresh strikes on Iran's energy and economic infrastructure, while Iranian Deputy Foreign Minister Kazem Gharibabadi warned that Tehran would not wait for a US attack before responding. The US Embassy in Bahrain urged American citizens to remain vigilant, warning of possible flight cancellations and airspace closures."},
  {id:2, cat:"uls-tor", title:"2027 оны төсөв батлагдлаа: орлого 39.2 их наяд, зарлага 41.5 их наяд төгрөг", titleEn:"2027 budget approved: revenue 39.2 trillion, spending 41.5 trillion tugriks", time:"30 мин", timeEn:"30 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/2024-10-18%20Ulaanbaatar%2C%20Government%20Palace.jpg?width=760", text:"Улсын Их Хурал арваннэгдүгээр сарын 13-ны нэгдсэн хуралдаанаараа Монгол Улсын 2027 оны улсын төсвийг эцэслэн баталлаа. Санал хураалтад оролцсон гишүүдийн 82.7 хувь нь төсвийг дэмжсэн бөгөөд батлагдсан төсвөөр улсын орлогыг 39.2 их наяд, зарлагыг 41.5 их наяд төгрөгөөр тооцож, төсвийн алдагдлыг 2.3 их наяд төгрөг байхаар тогтоожээ.\n\nЗасгийн газар анх 41.3 их наяд төгрөгийн орлого, 43.6 их наяд төгрөгийн зарлагатай төсөл өргөн мэдүүлсэн ч хэлэлцүүлгийн явцад орлого, зарлагын хэмжээг тус бүр 2.1 их наяд төгрөгөөр бууруулсан байна. Хөрөнгө оруулалтад 3.9 их наяд төгрөг зарцуулахаар тусгасан бөгөөд энэ нь анх төлөвлөж байсан 5.77 их наяд төгрөгөөс багассан дүн юм.\n\nТөсвийн хүрээнд ирэх оны эхний өдрөөс 562 мянган хүний тэтгэвэр 10 хувиар нэмэгдэж, 141 мянган ахмадын тэтгэврийн зөрүүг арилгана. Ингэснээр ахмадуудын дундаж тэтгэвэр 1.3 сая төгрөгт хүрэхээр болж байна. Мөн 2027 оны хоёрдугаар улирлаас төрийн үйлчилгээний албан хаагчдын цалинг 10 хувь, төрийн захиргаа болон тусгай албаныхны цалинг 20 хувиар нэмэгдүүлэхээр тусгажээ.\n\nСард 792 мянган төгрөгөөс доош орлоготой иргэдийг хувь хүний орлогын албан татвараас чөлөөлж, татварын орлогын эзлэх хувийг 90 орчим хувиас 79 хувь болгон бууруулсан байна. Ипотекийн зээлийн санхүүжилтийг 500 сая ам.доллар хүртэлх шинэ эх үүсвэрээр нэмэгдүүлж, 16 мянган иргэнийг орон сууцтай болоход дэмжихээр төлөвлөжээ. Оюутолгойгоос орох гурван их наяд төгрөгийн ногдол ашгийг гурван үе шаттайгаар шилжүүлэхээр тохирсон байна.", textEn:"The State Great Khural gave final approval to Mongolia's 2027 state budget at its plenary session on November 13. Of the members who voted, 82.7 percent supported the budget, which sets state revenue at 39.2 trillion tugriks and spending at 41.5 trillion, with a deficit of 2.3 trillion tugriks.\n\nThe Government had initially proposed revenue of 41.3 trillion and spending of 43.6 trillion tugriks, but both figures were cut by 2.1 trillion during parliamentary debate. Investment spending was set at 3.9 trillion tugriks, down from the 5.77 trillion originally planned.\n\nUnder the budget, pensions for 562,000 people will rise by 10 percent from the first day of next year, and the pension gap affecting 141,000 elderly people will be closed. The average pension is expected to reach 1.3 million tugriks. From the second quarter of 2027, salaries of public service employees will rise by 10 percent and those of administrative and special-service staff by 20 percent.\n\nCitizens earning less than 792,000 tugriks a month will be exempt from personal income tax, and the share of tax revenue in the budget will fall from around 90 percent to 79 percent. Mortgage financing will be increased with up to 500 million US dollars in new funding, supporting 16,000 citizens in buying homes. The three trillion tugriks of Oyu Tolgoi dividends will be transferred in three stages."},
  {id:3, cat:"niigem", title:"Өнөөдөр зүүн аймгуудаар цасан шуурга шуурч, ихэнх нутгаар хүйтэрнэ", titleEn:"Blizzards hit eastern aimags today as cold grips most of the country", time:"45 мин", timeEn:"45 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Blizzard%20CYCB.jpg?width=760", text:"Цаг уур, орчны шинжилгээний газраас цаг агаарын аюултай үзэгдлээс сэрэмжлүүлж байна. Өнөөдөр буюу арваннэгдүгээр сарын 17-нд Төв аймгийн өмнөд, Дорнод, Сүхбаатарын баруун, Дундговь, Дорноговь, Хэнтийн нутгаар цас орж, цасан шуурга шуурна. Цасны хэмжээ 0.0-6.0 миллиметр байх төлөвтэй байна.\n\nГовь, тал, хээрийн нутгаар салхи секундэд 15-17 метр хүрч ширүүсч, зам, даваа, гүвээнд үзэгдэх орчин хязгаарлагдаж, халтиргаа гулгаа, мөстөлт үүсэхийг малчид, иргэд, тээвэрчдэд анхааруулж байна. Шөнөдөө Дархадын хотгор, Завхан, Заг, Байдраг голын эхээр 27-32 хэм, Алтай, Хангай, Хөвсгөл, Хэнтийн уулархаг нутаг, голын хөндийгөөр 20-25 хэм, говийн бүс нутгийн өмнөд хэсгээр 6-11 хэм, бусад нутгаар 13-18 хэм хүйтэн байна.\n\nУлаанбаатар хот орчмоор өнөөдөр үүлэрхэг, шөнөдөө ялимгүй цас, өдөртөө цас орно. Салхи баруун өмнөөс секундэд 5-10 метр, шөнөдөө Яармаг-Сонгины орчмоор 16-18 хэм, бусад хэсгээр 11-13 хэм, өдөртөө 6-8 хэм хүйтэн байх төлөвтэй байна. Багануур орчмоор шөнөдөө 19-21 хэм, өдөртөө 9-11 хэм хүйтэн байна.\n\nАрваннэгдүгээр сарын 17-ноос 21-нийг хүртэлх төлөвөөр цас үргэлжлэн орох төлөвтэй байна. Маргааш буюу арваннэгдүгээр сарын 18-нд Сэлэнгэ, Хэнтийн хойд сумдын нутгаар цас орно. Иргэд хол замд гарахдаа бэлтгэлтэй байж, цаг агаарын мэдээг тогтмол авахыг цаг уурын байгууллагаас зөвлөж байна.", textEn:"The National Agency for Meteorology and Environmental Monitoring has warned of dangerous weather. Today, November 17, snow and blizzards are expected in southern Tuv, Dornod, western Sukhbaatar, Dundgovi, Dornogovi and Khentii, with snowfall of 0.0-6.0 millimetres.\n\nWinds will strengthen to 15-17 metres per second across the Gobi, steppe and field regions, and herders, residents and drivers are warned that visibility will be limited on roads, passes and hills, with slippery conditions and icing. Overnight temperatures will fall to minus 27-32 degrees in the Darkhad depression and the headwaters of the Zavkhan, Zag and Baidrag rivers, minus 20-25 in the Altai, Khangai, Khuvsgul and Khentii mountains and river valleys, minus 6-11 in the southern Gobi, and minus 13-18 elsewhere.\n\nAround Ulaanbaatar today it will be cloudy, with slight snow overnight and snow during the day. Winds from the southwest at 5-10 metres per second; overnight minus 11-13 degrees, minus 16-18 in the Yaarmag-Songino area, and minus 6-8 during the day. Around Baganuur, overnight minus 19-21 degrees and minus 9-11 during the day.\n\nThe outlook for November 17-21 shows snow continuing. Tomorrow, November 18, snow is expected in Selenge and northern Khentii. The weather agency advises residents to prepare carefully before long journeys and to follow weather updates regularly."},
  {id:4, cat:"uls-tor", title:"Батлан хамгаалахын сайд Д.Батлут албан тушаалаасаа чөлөөлөгдөхийг хүслээ", titleEn:"Defence Minister D. Batlut asks to step down", time:"1 цаг", timeEn:"1 hour", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Mongolian%20Armed%20Forces%20100711-A-CE583-114.jpg?width=760", text:"Батлан хамгаалахын сайд Д.Батлут арваннэгдүгээр сарын 13-нд Улсын Их Хурал 2027 оны төсвийг баталсны дараа албан тушаалаасаа чөлөөлөгдөхийг хүссэн тухайгаа мэдэгдлээ. Түүний хүсэлтийг Засгийн газар болон Улсын Их Хурал хэлэлцэж шийдвэрлэх ёстой юм.\n\nСайдын албан тушаалаас чөлөөлөгдөх хүсэлтийн шалтгааны талаар албан ёсны дэлгэрэнгүй тайлбар гараагүй байна. Залгамжлагчаар нь Энхбаярыг нэр дэвшиж байгаа тухай мэдээлэл гарч байгаа бөгөөд томилгооны асуудлыг ойрын өдрүүдэд шийдвэрлэх төлөвтэй байна.\n\nБатлан хамгаалахын сайдын солилцоо нь Засгийн газрын бүрэлдэхүүнд гарч буй өөрчлөлтийн нэг хэсэг бөгөөд батлан хамгаалах салбарын бодлого, шинэчлэл үргэлжлэх эсэх нь олон нийтийн анхаарлыг татаж байна. Томилгооны эцсийн шийдвэрийг Ерөнхий сайд болон Улсын Их Хурал гаргана.", textEn:"Defence Minister D. Batlut announced on November 13, after Parliament passed the 2027 budget, that he has asked to be relieved of his post. His request must be considered and decided by the Government and the State Great Khural.\n\nNo official detailed explanation of the reasons for the request has been given. Reports say Enkhbayar is being tipped as his successor, and the appointment is expected to be decided in the coming days.\n\nThe change of defence minister is part of a reshuffle in the Government, and the public is watching whether defence policy and reforms will continue. The final decision on the appointment will be made by the Prime Minister and the State Great Khural."},
  {id:5, cat:"ediin-zasag", title:"Инфляц аравдугаар сард 13.4 хувьд хүрч, Монголбанкны зорилтоос давлаа", titleEn:"Inflation hits 13.4 percent in October, above central bank target", time:"1 цаг", timeEn:"1 hour", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Mongolian%201000%20tugrik%20banknote.jpg?width=760", text:"Монгол Улсын инфляц аравдугаар сард 13.4 хувьд хүрч хурдассан тухай мэдээлэл гарлаа. Энэ нь Монголбанкны зорилтот түвшнээс 5.4 пунктээр давсан үзүүлэлт бөгөөд үнийн өсөлт иргэдийн амьжиргаанд дарамт болж байгааг харуулж байна.\n\nУлсын нэгдсэн төсвийн 2026 оны эхний 10 сарын урьдчилсан гүйцэтгэлээр нийт орлого, тусламж 29.7 их наяд төгрөгт хүрсэн байна. Орлогын дүн нь төсвийн гүйцэтгэлийн талаарх анхны мэдээлэл бөгөөд зардлын талаарх дэлгэрэнгүй мэдээлэл хараахан гараагүй байна.\n\nЗасгийн газар үнийн өсөлтийг хязгаарлаж, иргэдийн бодит орлогыг хамгаалахад онцгой анхаарч ажиллах ёстой гэж Улсын Их Хурлын дарга онцолсон байна. 2027 оны төсөвт тэтгэвэр, цалин нэмэгдүүлэх, татварын хөнгөлөлт үзүүлэх зэрэг иргэдийн орлогыг дэмжих арга хэмжээг тусгасан бөгөөд хэрэгжилт нь инфляцын дарамтыг бууруулахад чухал үүрэгтэй гэж үзэж байна.", textEn:"Mongolia's inflation accelerated to 13.4 percent in October, according to new figures. That is 5.4 percentage points above the Bank of Mongolia's target, showing that rising prices are putting pressure on household living standards.\n\nPreliminary budget execution figures for the first 10 months of 2026 show total revenue and grants in the consolidated state budget reached 29.7 trillion tugriks. The revenue figure is the first information on budget performance, and detailed spending data has not yet been released.\n\nThe Speaker of Parliament has stressed that the Government must pay particular attention to containing price rises and protecting citizens' real incomes. The 2027 budget includes measures to support household incomes, such as pension and salary increases and tax relief, and their implementation is seen as important for easing inflationary pressure."},
  {id:6, cat:"niigem", title:"«Шинэ үеийн малчин» аян орон даяар хэрэгжинэ", titleEn:"New Era Herder campaign to be implemented nationwide", time:"2 цаг", timeEn:"2 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Mongolia%2C%20horses%20and%20cowboys.jpg?width=760", text:"Засгийн газрын хуралдаанаар «Шинэ үеийн малчин» аяныг орон даяар хэрэгжүүлэх үйл ажиллагааны төлөвлөгөөг баталлаа. Аяныг хоёр үе шаттайгаар хэрэгжүүлэх бөгөөд эхний үе шат буюу 2026-2027 онд малчдыг өвөл, хаврын улирлыг эрсдэл багатай даван туулахад нь туслахад чиглэнэ.\n\nАяны гол зорилго нь хөдөлмөрийн бүтээмж, малын ашиг шимийг нэмэгдүүлж, малчдын орлого, амьжиргааны чанарыг сайжруулах явдал юм. Мөн хүн амыг эрүүл хүнсээр хангаж, инфляцын дарамтыг бууруулж, эдийн засгийн өсөлтийг дэмжиж, бэлчээрийн газрыг тогтвортой ашиглахыг зорьж байна.\n\nАян хэрэгжсэнээр малчдын орлого тогтвортой нэмэгдэж, хүнсний хангамж сайжирч, эдийн засгийн өсөлт дэмжигдэнэ гэж Засгийн газар үзэж байна. Мал аж ахуй нь Монголын эдийн засаг, хүнсний аюулгүй байдлын гол тулгуур тул малчдыг дэмжих бодлого нь нийгэм, эдийн засгийн хувьд чухал ач холбогдолтой гэж онцолжээ.", textEn:"At its cabinet session, the Government approved the action plan for the nationwide implementation of the New Era Herder campaign. The campaign will be implemented in two phases, with the first phase, covering 2026-2027, focused on helping herders get through the winter and spring seasons with fewer risks.\n\nThe main goal of the campaign is to increase labour productivity and livestock yields and to improve herders' incomes and quality of life. It also aims to ensure the supply of healthy food to the population, ease inflationary pressures, support economic growth and promote the sustainable use of pastureland.\n\nThe Government expects the campaign to deliver sustainably higher herders' incomes, better food supplies and stronger economic growth. Because livestock farming is a mainstay of Mongolia's economy and food security, support for herders is of great social and economic importance, officials stressed."},
  {id:7, cat:"ediin-zasag", title:"Шөнийн цахилгааны хөнгөлөлтийг бууруулсан шийдвэрийг гишүүд эсэргүүцэж, Ерөнхий сайд засварлахыг үүрэгджээ", titleEn:"Lawmakers oppose cut to night electricity discount as PM orders fix", time:"2 цаг", timeEn:"2 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/2013%20Transmission%20tower%20Long%20Bennington.jpg?width=760", text:"Эрчим хүчний зохицуулах хорооноос шөнийн цахилгааны хөнгөлөлтийг бууруулсан шийдвэр гаргасныг Улсын Их Хурлын гишүүд эсэргүүцэж байна. Гишүүдийн зүгээс хөнгөлөлтийг бууруулсан нь өвлийн улиралд иргэдийн цахилгааны зардлыг нэмэгдүүлж, амьжиргаанд дарамт болно гэж үзэж байна.\n\nЕрөнхий сайд Н.Учрал шөнийн хөнгөлөлтийн асуудлыг засварлахыг үүрэг болгосон тухай мэдээлэл гарлаа. Засгийн газар энэ өвөл цахилгаан, дулааны үнийг нэмэхгүй гэж өмнө нь мэдэгдсэн бөгөөд 2026 оны төсвийн тодотголд энэ зорилго болон засварын ажилд 186.2 тэрбум төгрөг суулгасан байна.\n\nЭрчим хүчний сайд Б.Найдалаагийн мэдээлснээр эрчим хүчний салбарт 2027 оны төсвөөр 479 тэрбум төгрөг олгосон бөгөөд шинэ төсөл цөөхөн байгаа аж. Шөнийн хөнгөлөлтийн асуудлыг хэрхэн шийдвэрлэх нь ойрын өдрүүдэд тодорхой болох төлөвтэй байна.", textEn:"Members of the State Great Khural have opposed the Energy Regulatory Commission's decision to cut night electricity discounts. Lawmakers say reducing the discount will raise household electricity costs in winter and add to the burden on living standards.\n\nPrime Minister N. Uchral has ordered the night discount issue to be fixed, according to reports. The Government had previously said it would not raise electricity or heating prices this winter, allocating 186.2 billion tugriks in the amended 2026 budget for that purpose and for repairs.\n\nEnergy Minister B. Naidalaa said the energy sector received 479 billion tugriks in the 2027 budget, with few new projects planned. How the night discount issue will be resolved is expected to become clear in the coming days."},
  {id:8, cat:"delhii", title:"АСЕАН-ы дээд хэмжээний уулзалт өндөрлөв: Өмнөд Хятадын тэнгисийн дүрэм 80 хувьд хүрлээ", titleEn:"ASEAN summit ends with South China Sea code 80 percent complete", time:"30 мин", timeEn:"30 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Manila%20skyline%2C%20Philippines.jpg?width=760", text:"Зүүн Өмнөд Азийн орнуудын холбоо буюу АСЕАН-ы 49 дэх дээд хэмжээний уулзалт Филиппинд өндөрлөж, удирдагчид 150 гаруй баримт бичгийг баталж, тэмдэглэн авлаа. Уулзалтыг Филиппиний Ерөнхийлөгч Фердинанд Маркос даргалж, Манила хотын Филиппиний олон улсын хурлын төвд зохион байгуулсан байна.\n\nУулзалтын гол үр дүнгийн нэг нь АСЕАН-Хятадын Өмнөд Хятадын тэнгисийн зан үйлийн дүрмийн хэлэлцээ 80 хувьд хүрсэн явдал юм. Гэсэн хэдий ч дүрмийг хууль ёсны хүчинтэй болгох эсэх зэрэг гол асуудлууд шийдэгдээгүй тул эцсийн тохиролцоонд хүрч чадсангүй. Филиппиний Гадаад хэргийн сайд Мария Тереза Лазаро хэлэлцээг дуусгахад дахин 5-6 сар шаардлагатай гэж мэдэгдсэн бөгөөд даргалагчийн үүргийг Сингапурт шилжүүлжээ.\n\nЭдийн засгийн гол үр дүн нь АСЕАН-ы дижитал эдийн засгийн хүрээний хэлэлцээрийг хүлээлгэн өгсөн явдал бөгөөд бүс нутгийн дижитал эдийн засгийг 2030 он гэхэд нэг их наяд ам.доллараас хоёр их наяд ам.доллар болгон хоёр дахин нэмэгдүүлэх боломжтой гэж тооцож байна. Мөн АСЕАН-ы эрчим хүчний сүлжээ, нефтийн аюулгүй байдлын гэрээг түргэтгэхээр болсон байна.\n\nЗүүн Тимор улс АСЕАН-д албан ёсоор нэгдэж, холбооны сүлдэнд 11 дүгээр иш нэмэгдсэн бөгөөд 2029 онд даргалагчийн үүргийг гүйцэтгэнэ. Мьянмарын удирдагчийг дээд хэмжээний уулзалтад оролцохыг хориглосон хоригийг сунгаж, тус улсыг таван зүйлт зөвшилцлийн дагуу алхам алхмаар эргэн ирэх замд оруулахаар шийдвэрлэжээ. Энэтхэгийн Ерөнхий сайд Нарендра Моди уулзалтад оролцсон нь Энэтхэг, Зүүн Өмнөд Азийн харилцааг бэхжүүлэхэд чухал ач холбогдолтой гэж үзэж байна.", textEn:"The 49th summit of the Association of Southeast Asian Nations, ASEAN, has concluded in the Philippines, with leaders approving and noting more than 150 documents. The summit was chaired by Philippine President Ferdinand Marcos Jr. at the Philippine International Convention Center in Manila.\n\nOne of the main outcomes was that negotiations on the ASEAN-China Code of Conduct for the South China Sea reached about 80 percent completion. However, no final agreement was reached because key issues remain unresolved, including whether the code would be legally binding. Philippine Foreign Affairs Secretary Maria Theresa Lazaro said another five to six months of talks would be needed, and the chairmanship passes to Singapore.\n\nThe main economic deliverable was the handover of the ASEAN Digital Economy Framework Agreement, which could help double the region's digital economy from one trillion to two trillion US dollars by 2030. Leaders also agreed to accelerate the ASEAN Power Grid and a petroleum security pact.\n\nTimor-Leste formally joined ASEAN, with an 11th stalk added to the bloc's emblem, and will chair the association in 2029. The ban on Myanmar's leader attending summits was extended, with the country placed on a step-by-step path back under the Five-Point Consensus. Indian Prime Minister Narendra Modi's attendance was seen as important for strengthening ties between India and Southeast Asia."},
  {id:9, cat:"delhii", title:"Украин Орос руу 1300 гаруй дрон илгээж, Керчийн гүүрийг ониллоо", titleEn:"Ukraine sends 1,300 drones at Russia in strike on Kerch Bridge", time:"45 мин", timeEn:"45 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Crimean%20Bridge%2C%202021.png?width=760", text:"Украины зэвсэгт хүчин өнгөрсөн шөнө Орос руу 1300 гаруй дрон илгээж, энэ оны хоёр дахь хамгийн том шөнийн довтолгоог хийлээ. Довтолгоонд Крымийг Орост холбосон Керчийн гүүрийг онилсон цохилт багтсан бөгөөд гүүрэн дээрх хөдөлгөөн тасалдсан байна. Оросын тал 1336 дроныг таслан зогсоосон гэж мэдэгдсэн байна.\n\nДовтолгооны зорилтуудад Оросын нефть химийн дэд бүтэц, батлан хамгаалах үйлдвэрлэл, пуужин үйлдвэрлэх, хөөргөх байгууламжууд багтсан тухай Дайныг судлах хүрээлэн мэдээлжээ. Украины тал Оросын дайны чадавхыг сулруулахын тулд алсын зайн цохилтоо эрчимжүүлж байгаа бөгөөд энэ нь дайны шинэ шатанд орж байгааг харуулж байна.\n\nҮүний зэрэгцээ АНУ анх удаа Донбассын бүс нутгийг НАТО-гийн гишүүнчлэлийн хариуд солилцох санал тавьсан тухай Украины Ерөнхийлөгч Володимир Зеленский мэдэгдлээ. Тэрбээр ийм тохиролцоог бүх нийтийн санал асуулгаар шийдвэрлэх нөхцөл тавьсан байна. АНУ-ын зуучлалтайгаар Абу Дабид болсон Орос-Украины хэлэлцээ арваннэгдүгээр сарын 11-нд өндөрлөж, олзлогдогсдыг солилцох асуудлаар ахиц гарснаас өөр газар нутаг, аюулгүй байдлын баталгааны талаар тохиролцоонд хүрч чадаагүй байна.\n\nЕвропын Холбоо Украиныг дэмжих 45 тэрбум еврогийн зээлийн төлөвлөгөөг лхагва гарагт гишүүн орнуудад танилцуулахаар төлөвлөж байна. Цөмийн аюулгүй байдлын зохицуулагчид энэ өвөл Украинд цөмийн ослын эрсдэл нэмэгдэж байгааг анхааруулжээ.", textEn:"Ukrainian forces launched a barrage of more than 1,300 drones at Russia overnight, the second-largest overnight attack of the year. The attack included a strike on the Kerch Bridge linking Crimea to Russia, disrupting traffic on the bridge. Russia said it intercepted 1,336 drones.\n\nThe strikes targeted Russian petrochemical infrastructure, defence industry facilities and missile production and launch sites, according to the Institute for the Study of War. Ukraine is intensifying its long-range strikes to weaken Russia's war capacity, a sign that the war is entering a new phase.\n\nAt the same time, Ukrainian President Volodymyr Zelensky said the United States had for the first time proposed exchanging the Donbas region for NATO membership. He set the condition that such a deal be decided by referendum. US-mediated talks between Russia and Ukraine in Abu Dhabi ended on November 11, with progress only on expanding prisoner exchanges and no agreement on territory or security guarantees.\n\nThe European Union plans to present a 45-billion-euro loan plan for Ukraine to member states on Wednesday. Nuclear safety regulators have warned that the risk of a nuclear accident in Ukraine is increasing this winter."},
  {id:10, cat:"delhii", title:"COP31: дасан зохицох санхүүжилтийг 2035 он гэхэд 120 тэрбум ам.долларт хүргэхийг уриаллаа", titleEn:"COP31 draft urges tripling adaptation finance to $120 billion by 2035", time:"1 цаг", timeEn:"1 hour", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Antalya%2C%20Turkey%202022%20-%20TerraCity.jpg?width=760", text:"Туркийн Анталья хотод болж буй НҮБ-ын уур амьсгалын өөрчлөлтийн тухай 31 дүгээр бага хурал буюу COP31-ийн даргалагчийн бэлтгэсэн анхны төсөлд дасан зохицох санхүүжилтийг 2035 он гэхэд 120 тэрбум ам.доллар болгон гурав дахин нэмэгдүүлэхийг уриалсан байна. 18 хуудас бүхий төсөлд мөн чулуужсан түлшнээс нэн даруй татгалзахыг уриалжээ.\n\nНҮБ-ын Ерөнхий нарийн бичгийн дарга Антониу Гутерреш өөрийн сүүлчийн уур амьсгалын дээд хэмжээний уулзалтдаа үг хэлэхдээ чулуужсан түлшний ялгарлыг нэн даруй, эрс бууруулахыг уриалж, дэлхий дахин эрс тэс цаг агаарын шинэ эрин үед орж байгааг онцоллоо. «Шатаж буй гараг дээр энх тайвныг бүтээж болохгүй» гэж тэрбээр мэдэгдсэн байна.\n\nCOP31-д оролцогчид 1.5 хэмээс хэтрэхгүй байх зорилт одоо зайлшгүй, гарцаагүй болсон бодит байдалтай тулгарч байна. Уур амьсгалын санхүүжилт, Уур амьсгалын өөрчлөлтийн тухай Засгийн газар хоорондын зөвлөлийн дараагийн үнэлгээний хуваарийн талаарх маргаан шийдэгдээгүй хэвээр байгаа бөгөөд хурал сүүлийн долоо хоногтоо оржээ.\n\nМонгол Улсын Гадаад хэргийн сайд Б.Батцэцэг, НҮБ-ын Цөлжилттэй тэмцэх конвенцын талуудын 17 дугаар бага хурлын даргын хувиар Дэлхийн удирдагчдын дээд хэмжээний уулзалтад үг хэлж, Монголын «Тал нутгийн үйл ажиллагааны төлөвлөгөө»-ний хүрээнд санал болгосон гурван санаачилгыг танилцуулсан байна. Тэрбээр НҮБ-ын Цөлжилттэй тэмцэх конвенцын гүйцэтгэх нарийн бичгийн дарга Ясмин Фуадтай хоёр талын уулзалт хийжээ.", textEn:"The first draft prepared under the COP31 presidency in Antalya, Türkiye, urges tripling adaptation finance to 120 billion US dollars by 2035. The 18-page draft also calls for an immediate transition away from fossil fuels.\n\nUN Secretary-General António Guterres, speaking at his final climate summit, urged an immediate and drastic cut in fossil fuel emissions, stressing that the world is entering a new era of extreme weather. «You cannot build peace on a burning planet,» he said.\n\nNegotiators at COP31 are grappling with the reality that the 1.5-degree warming limit is now considered imminent and unavoidable. Disputes over climate finance and the timetable for the next assessment by the Intergovernmental Panel on Climate Change remain unresolved as the conference enters its final week.\n\nMongolian Foreign Minister B. Battsetseg, in her capacity as President of the 17th Conference of the Parties to the UN Convention to Combat Desertification, addressed the World Leaders' Summit and presented three initiatives proposed by Mongolia under its Steppe Action Plan. She also held a bilateral meeting with UNCCD Executive Secretary Yasmine Fouad."},
  {id:11, cat:"delhii", title:"Японы эдийн засаг гуравдугаар улиралд агшив: өндөр үнэ өрхийн зардалд дарамт болж байна", titleEn:"Japan's economy contracts as high prices weigh on households", time:"2 цаг", timeEn:"2 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Tokyo%20Skyline20210123.jpg?width=760", text:"Японы эдийн засаг энэ оны гуравдугаар улиралд бага зэрэг агшсан тухай урьдчилсан мэдээлэл гарлаа. Долдугаар сараас есдүгээр сар хүртэлх улиралд жилийн дүнгээр тооцсон ДНБ-ий өсөлт хасах 0.1 хувь байсан бөгөөд хэрэглээний зардал суларсан нь гол шалтгаан болсон байна.\n\nӨндөр үнэ өрхийн зардалд дарамт болж, хэрэглэгчдийн итгэл суларч байгаа нь эдийн засгийн өсөлтийг сааруулж байна. Японы Засгийн газар болон Төв банк үнийн өсөлт, хэрэглээний төлөв байдалд анхааралтай ажиглалт хийж байгаа бөгөөд эдийн засгийг дэмжих арга хэмжээг хэлэлцэж байна.\n\nЭдийн засагчдын үзэж байгаагаар гуравдугаар улирлын үзүүлэлт нь Японы эдийн засаг тогтвортой өсөлтөд хүрэхэд хүндрэлтэй байгааг харуулж байна. Ирэх улирлын үзүүлэлтүүд нь хэрэглээ сэргэж байгаа эсэх, үнийн дарамт буурч байгаа эсэхийг харуулах чухал шалгуур болох төлөвтэй байна.", textEn:"Japan's economy contracted slightly in the third quarter of this year, according to preliminary data. Annualised GDP growth for the July-September quarter was minus 0.1 percent, with weaker consumer spending the main cause.\n\nHigh prices are weighing on household spending and weakening consumer confidence, slowing economic growth. The Japanese Government and central bank are watching price rises and consumption closely and discussing measures to support the economy.\n\nEconomists say the third-quarter figures show Japan's economy is struggling to achieve stable growth. Next quarter's figures will be an important test of whether consumption is recovering and price pressures are easing."},
  {id:12, cat:"delhii", title:"Дөрвөн улс Израилийг Газа руу 150 мянган майхан нэвтрүүлэхийг уриаллаа", titleEn:"Four nations urge Israel to allow 150,000 tents into Gaza", time:"2 цаг", timeEn:"2 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/U.S.%20Air%20Force%20airdrops%20humanitarian%20aid%20to%20Gaza%20-%208300942.jpg?width=760", text:"Их Британи, Австрали, Канад, Итали улсууд Израилийг Газа руу хүмүүнлэгийн тусламжийг нэн даруй, саадгүй нэвтрүүлэхийг уриалсан хамтарсан мэдэгдэл гаргалаа. Дөрвөн улсын Гадаад хэргийн сайд нар хилийн гадна 150 мянган майхан зэрэг амьдралд нэн шаардлагатай хангамж саатаж байгааг онцолжээ.\n\nСүүлийн үед орсон үер Газын хүмүүнлэгийн хямралыг улам хүндрүүлж, өвлийн улирал эхэлж байгаа нь нөхцөл байдлыг улам аюултай болгож байна. Сайд нар Израилийг тусламжийг тодорхой, урьдчилан таамаглах боломжтой дүрмийн дагуу илүү олон өдөр нэвтрүүлэхийг уриалсан байна.\n\nЕвропын Холбооны комиссар Хажа Лахбиб мөн Израилийг Газа руу тусламж нэвтрүүлэх өдрүүдийг нэмэгдүүлэхийг уриалж, Европын Холбооноос Украин, Сири, Йеменд үзүүлэх дэмжлэгийг танилцууллаа. Японы Гадаад хэргийн сайд Тошимицү Мотеги Палестины Ерөнхий сайд Мохаммад Мустафатай утсаар ярихдаа Баруун эрэг дэх суурьшигчдын хүчирхийлэл нэмэгдэж, Газа үерт автсанд ноцтой санаа зовниж байгаагаа илэрхийлжээ.", textEn:"The United Kingdom, Australia, Canada and Italy have issued a joint statement urging Israel to allow immediate, rapid and unimpeded humanitarian access into Gaza. The four countries' foreign ministers stressed that vital supplies, including 150,000 tents, remain held up at the borders.\n\nRecent flooding has worsened Gaza's humanitarian crisis, and the onset of winter is making conditions more dangerous. The ministers urged Israel to allow aid in on more days under clear, predictable rules.\n\nEuropean Commissioner Hadja Lahbib also urged Israel to open Gaza aid access on more days and outlined EU support for Ukraine, Syria and Yemen. Japanese Foreign Minister Toshimitsu Motegi voiced serious concern over rising settler violence in the West Bank and flooding in Gaza during a phone call with Palestinian Prime Minister Mohammad Mustafa."},
  {id:13, cat:"tech", title:"Хуан Нвидиад эргэн ирэх талаар ярилцаж байна: залгамжлагчийн эрэл үргэлжилж байна", titleEn:"Huang discusses Nvidia return as successor search continues", time:"30 мин", timeEn:"30 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/NVIDIA%20Headquarters.jpg?width=760", text:"Нвидиагийн үүсгэн байгуулагч Женсен Хуан өнгөрсөн долоо хоногт гүйцэтгэх захирлын албан тушаалаасаа огцорсны дараа түүнийг эргэн ирэх талаар ярилцаж байгаа тухай мэдээлэл гарлаа. Санхүүгийн Таймс сонины мэдээлснээр Хуан дотны хүмүүстэйгээ эргэн ирэх боломжийг хэлэлцсэн бөгөөд технологийн салбарын зүтгэлтнүүд, тэр дундаа Илон Маск түүнийг эргэн ирэхийг дэмжиж байна.\n\nНвидиагийн төлөөлөн удирдах зөвлөл байнгын залгамжлагчийг хайж байгаа бөгөөд Arm компанийн гүйцэтгэх захирал Рене Хааст хандсан тухай мэдээлэл гарсан байна. АНУ-ын Сангийн сайд Скотт Бессент Нвидиагийн удирдлагад гаднаас хүн томилох шаардлагатай гэж мэдэгдсэн бол зөвлөл одоо хайлтын фирм сонгох шатандаа явж, ямар ч нэр дэвшигчтэй албан ёсоор холбогдоогүй, хувь хүний талаарх таамаг эрт байна гэж мэдэгджээ.\n\nСанхүүгийн захирал Колетт Кресс түр гүйцэтгэх захирлаар ажиллаж байгаа бөгөөд зөвлөл дотоод, гадаад нэр дэвшигчдийг авч үзэж байна. Нэр дэвшигчдийн дунд AMD-ийн Лиза Су, Эплийн Тим Кук, Google Cloud-ийн Томас Куриан, Micron-ийн Санжай Мехротра нарын нэр дурдагдаж байна. Нвидиа өнөөдөр буюу арваннэгдүгээр сарын 17-нд улирлын орлогын тайлангаа танилцуулах бөгөөд энэ нь Хуаныг огцорсноос хойших анхны томоохон санхүүгийн шалгуур болох төлөвтэй байна.", textEn:"Reports say Nvidia co-founder Jensen Huang has discussed a possible return after resigning as chief executive last week. According to the Financial Times, Huang has talked with close associates about coming back, and technology figures, including Elon Musk, are backing his return.\n\nNvidia's board is searching for a permanent successor and has reportedly approached Arm CEO Rene Haas. US Treasury Secretary Scott Bessent said Nvidia needs to appoint an outsider, while the board said it is still selecting a search firm, has not formally engaged any candidate, and that speculation about individuals is premature.\n\nChief Financial Officer Colette Kress is serving as interim CEO, and the board is considering internal and external candidates. Names mentioned include AMD's Lisa Su, Apple's Tim Cook, Google Cloud's Thomas Kurian and Micron's Sanjay Mehrotra. Nvidia reports quarterly earnings today, November 17, the first major financial test since Huang's departure."},
  {id:14, cat:"tech", title:"COP31-д хиймэл оюуны уур амьсгалын амлалт гарлаа: АНУ, Хятад, ЕХ нэгдсэнгүй", titleEn:"COP31 AI climate pledge released as US, China and EU stay out", time:"1 цаг", timeEn:"1 hour", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Artificial%20Intelligence%20%28AI%29%20and%20Robotics%20exhibition%20at%20the%20Heinz%20Nixdorf%20MuseumsForum.jpg?width=760", text:"Турк улс буюу COP31-ийг зохион байгуулагч орон болон Олон улсын цахилгаан холбооны байгууллага хиймэл оюуны уур амьсгалын амлалт буюу Антальягийн хиймэл оюуны амлалтыг танилцууллаа. Уг амлалт нь хиймэл оюуныг тогтвортой эрчим хүчээр хангаж, түүний байгаль орчинд үзүүлэх нөлөөллийг ил тод мэдээлэхийг уриалж байна.\n\nАрваннэгдүгээр сарын 16-ны байдлаар 80 байгууллага амлалтад нэгдсэн бөгөөд тэдгээрийн дунд Өмнөд Солонгос, Люксембург, Колумб зэрэг ердөө долоон засгийн газар багтсан байна. АНУ, Хятад, Европын Холбоо болон OpenAI, Google компаниуд хараахан нэгдээгүй байна.\n\nХиймэл оюуны дата төвүүдийн эрчим хүчний хэрэглээ хурдацтай өсөж байгаа тул технологийн салбарын уур амьсгалд үзүүлэх нөлөөлөл COP31-ийн хэлэлцээний чухал сэдэв болж байна. Амлалтад нэгдсэн талууд хиймэл оюуны хөгжлийг цэвэр эрчим хүчээр хангах, байгаль орчны нөлөөллийг нээлттэй тайлагнах үүрэг хүлээж байна.", textEn:"Türkiye, the COP31 host, and the International Telecommunication Union have released the Antalya Artificial Intelligence Pledge, a climate pledge for artificial intelligence. The pledge calls for powering AI with sustainable energy and transparently disclosing its environmental impact.\n\nAs of November 16, 80 entities had signed the pledge, including only seven governments, among them South Korea, Luxembourg and Colombia. The United States, China, the European Union and the companies OpenAI and Google have not joined.\n\nBecause the energy consumption of AI data centres is growing rapidly, the technology sector's impact on the climate has become an important topic at COP31. Signatories commit to powering AI development with clean energy and openly reporting its environmental impact."},
  {id:15, cat:"sport", title:"Э.Даариймаа зуун буудалт даамны өсвөрийн дэлхийн аварга боллоо", titleEn:"E. Daariimaa becomes youth world champion in 100-square draughts", time:"45 мин", timeEn:"45 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Checkers%20%28Draughts%29%20Board.jpg?width=760", text:"Монголын даамны спортын түүхэнд шинэ хуудас нээгдлээ. БНХАУ-ын Шинтай хотноо аравдугаар сарын 29-нөөс арваннэгдүгээр сарын 8-ны өдрүүдэд болсон зуун буудалт даамны өсвөр, залуучуудын дэлхийн аварга шалгаруулах тэмцээнд Монгол Улсын иргэн Эрдэнэсайханы Даариймаа түрүүлж, дэлхийн аваргын алтан медалийг гурван төрөлд хүртлээ.\n\nТэрбээр үргэлжлүүлэн БНХАУ-ын Лишуй хотноо арваннэгдүгээр сарын 9-16-ны өдрүүдэд болсон зуун буудалт даамны насанд хүрэгчдийн дэлхийн аварга шалгаруулах тэмцээний рапид төрөлд хүрэл медаль хүртэж, Дэлхийн цомын цуврал «Синтай цом» олон улсын тэмцээнд шагналт дөрөвдүгээр байр эзэлсэн байна.\n\nЭнэ амжилт нь Монголын даамны спортын түүхэн дэх шинэ дээд амжилт болж, өсвөрийн ангилалд дэлхийн аварга болсон анхны тохиолдол юм. Даариймаа олон жил уйгагүй хөдөлмөрлөж, дэлхийн тавцанд амжилт гаргасан нь Монголын даамны спортын хөгжилд чухал хувь нэмэр болж байна.", textEn:"A new chapter has opened in the history of Mongolian draughts. At the Youth World Championship in 100-square draughts, held in Xintai, China, from October 29 to November 8, Mongolia's Erdenesaikhany Daariimaa won the title, taking world championship gold medals in three categories.\n\nShe went on to win a bronze medal in the rapid event at the Adult World Championship in Lishui, China, held from November 9 to 16, and finished fourth in the Xintai Cup, a World Cup series event.\n\nThe achievement is a new record for Mongolian draughts and the first time a Mongolian has become youth world champion. Daariimaa's years of tireless work and success on the world stage are an important contribution to the development of draughts in Mongolia."},
  {id:16, cat:"sport", title:"Гардан тулааны Азийн аваргаас Монголын баг 12 алт, 8 мөнгө хүртэж, багийн дүнгээр гуравдугаар байр эзлэв", titleEn:"Mongolia wins 12 golds at Asian hand-to-hand combat championship", time:"1 цаг", timeEn:"1 hour", img:"https://commons.wikimedia.org/wiki/Special:FilePath/National%20Martial%20Arts%20Competition%20Dhaka%202017-11-23%20%28PID-0046985%29.jpg?width=760", text:"Тайланд Улсын Паттаяа хотод арваннэгдүгээр сарын 13-14-ний өдрүүдэд гардан тулааны Азийн аварга шалгаруулах тэмцээн амжилттай болж өндөрлөлөө. Тэмцээнд Азийн 23 орны 240 тамирчин 58 ангилалд хурд, хүч, тэсвэр хатуужил, ур чадвараа сорин өрсөлдсөн байна.\n\nМонгол Улсын баг тамирчид 12 алтан медаль, найман мөнгөн медаль хүртэж, багийн дүнгээр гуравдугаар байр эзэлж, цомын эзэн боллоо. Монгол Улсаас өсвөрийн таван тамирчин, насанд хүрэгчдийн ангилалд найман тамирчин оролцсон юм.\n\nМонголын гардан тулааны холбооны удирдах зөвлөлийн гишүүн, «ЭЗО» дэвжээний үүсгэн байгуулагч, багш, дасгалжуулагч С.Энхсайхан өөрийгөө хамгаалах төрлийн мастеруудын ангилалд алтан медаль хүртсэн байна. Сэтгүүлч Т.Цолмонсайхан гардан тулааны төрөлд алтан медаль, өөрийгөө хамгаалах төрөлд мөнгөн медаль хүртэж, Монголын багийн амжилтад хувь нэмэр орууллаа. Олон улсын шүүгч Б.Алтанзул Монгол Улсыг төлөөлөн шүүгчийн бүрэлдэхүүнд ажиллажээ.", textEn:"The Asian hand-to-hand combat championship concluded successfully in Pattaya, Thailand, on November 13-14. Athletes from 23 Asian countries, 240 in total, competed in 58 categories, testing their speed, strength, endurance and skill.\n\nMongolia's team won 12 gold and eight silver medals, finishing third in the team standings and taking home the trophy. Mongolia was represented by five youth athletes and eight adult athletes.\n\nS. Enkhsaikhan, a board member of the Mongolian Hand-to-Hand Combat Federation, founder of the EZO club, coach and international master, won gold in the masters' self-defence category. Journalist T. Tsolmonsaikhan won gold in hand-to-hand combat and silver in self-defence, adding to the team's success. International referee B. Altanzul served on the judging panel for Mongolia."},
  {id:17, cat:"soyol", title:"Их зохиолч Д.Нацагдоржийн мэндэлсний 120 жилийн ой өнөөдөр тохиож байна", titleEn:"120th anniversary of great writer D. Natsagdorj's birth today", time:"1 цаг", timeEn:"1 hour", img:"https://commons.wikimedia.org/wiki/Special:FilePath/State%20Academic%20Drama%20Theater.jpg?width=760", text:"Монголын орчин үеийн уран зохиолыг үндэслэгч, их зохиолч, соён гэгээрүүлэгч Дашдоржийн Нацагдоржийн мэндэлсний 120 жилийн ой өнөөдөр буюу арваннэгдүгээр сарын 17-нд тохиож байна. Тэрбээр 1906 оны арваннэгдүгээр сарын 17-ны өдөр Түшээт хан аймгийн Дархан чин вангийн хошуу, өнөөгийн Төв аймгийн Баяндэлгэр сумын нутаг Гүн Галуутай гэдэг газар мэндэлжээ.\n\nӨнөөдөр их зохиолчийн хөшөөнд цэцэг өргөх ёслол болох бөгөөд «Хэлхээгүй сувд» яруу найргийн уншлага зохион байгуулагдана. Мөн энэ сарын 10-17-нд Улаанбаатар хотын нийтийн номын санд «Д.Нацагдоржийн өвөөр аялах долоо хоног» болж байна.\n\nТүүхт ойг тохиолдуулан их зохиолчийн амьдрал, уран бүтээлээс сэдэвлэсэн «Жаргаагүй нар» түүхэн эмгэнэлт жүжгийг Улсын Драмын Эрдмийн Театрын тайзнаа энэ сарын 5-наас эхлэн шинэчлэн толилуулж байна. Энэ жил тус театрын 95 жилийн ой мөн тохиож байна.\n\nД.Нацагдорж 31-хэн наслахдаа 114 орчим шүлэг, 35 орчим богино өгүүллэг, «Хэлхээгүй сувд» тууж, долоон жүжиг туурвиж, Пушкин, Эдгар Алан По, Мопассан, Чехов зэрэг дэлхийн сонгодог зохиолчдын зохиолыг орчуулсан байна. Түүний намтраа өөрөө бичсэн ганц баримт нь Берлиний номын санд хадгалагдаж байгаа бөгөөд наймдугаар сард Чингис хаан үндэсний музейд түүнд зориулсан олон улсын эрдэм шинжилгээний хурал болсон юм.", textEn:"Today, November 17, marks the 120th anniversary of the birth of Dashdorjiin Natsagdorj, founder of modern Mongolian literature, great writer, educator and enlightener. He was born on November 17, 1906, in Gun Galuutai, in what is now Bayandelger soum, Tuv aimag.\n\nToday a flower-laying ceremony will be held at his statue, and a poetry reading of his novella «Khelkheegui Suvd» (Unstrung Pearls) will take place. A week dedicated to Natsagdorj's legacy is also running at Ulaanbaatar's public library from November 10 to 17.\n\nTo mark the anniversary, the historical tragedy «Jargaagui Nar» (The Unsetting Sun), based on the writer's life and work, is being staged in a renewed production at the State Drama Academic Theatre from November 5. This year also marks the theatre's 95th anniversary.\n\nIn his short life of just 31 years, Natsagdorj wrote around 114 poems, 35 short stories, the novella «Khelkheegui Suvd» and seven plays, and translated works by Pushkin, Edgar Allan Poe, Maupassant and Chekhov. The only autobiography he wrote himself is kept in the Berlin State Library, and an international academic conference dedicated to him was held at the Chinggis Khaan National Museum in August."},
  {id:18, cat:"soyol", title:"Монголын мөсөн сийлбэрчид Испанид дахин түрүүллээ", titleEn:"Mongolian ice sculptors win again in Spain", time:"2 цаг", timeEn:"2 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Ice%20and%20Snow%20World%20%28Ice%20and%20Snow%20Sculpture%20Festival%29%2036.jpg?width=760", text:"Монголын мөсөн сийлбэрчид Ц.Мөнх-Эрдэнэ, Б.Доржнамжил нар Испанийн Мадрид мужийн Торрехон-де-Ардос хотод болсон олон улсын мөсөн сийлбэрийн тав дахь удаагийн Ice Festival тэмцээнд тэргүүн байр эзэлж, алтан медаль хүртлээ.\n\nТэд «Тэнгисийн үнсэлт» нэртэй бүтээлээрээ өрсөлдсөн бөгөөд энэ удаагийн тэмцээн «Далайн аваргууд» сэдвийн дор болж, 14 орны 22 уран бүтээлч оролцжээ. Сийлбэрчид арваннэгдүгээр сарын 7-13-нд бүтээлээ урлаж, ялагчдыг 14-ний өдөр зарласан байна.\n\nТэмцээний бүтээлүүдийг Торрехон-де-Ардос хотын Mágicas Navidades цэцэрлэгт хүрээлэнд 2027 оны нэгдүгээр сарын 10-ныг хүртэл олон нийтэд дэлгэн үзүүлнэ. Үзэсгэлэнд бодит хэмжээтэй бөгтөр халим, далайн бурхан Нептун, домгийн Кракен зэрэг дүрийг мөсөөр бүтээн дэлгэсэн байна.\n\nЦ.Мөнх-Эрдэнэ, Б.Доржнамжил нар тус наадмын гурав дахь удаагийн тэмцээнд «Алиса: Гайхамшигт аялал» бүтээлээрээ мөн тэргүүн байр эзэлж, үзэгчдийн нэрэмжит шагнал хүртэж байсан юм. Энэ удаагийн ялалт нь Монголын мөсөн сийлбэрийн урлагийг дэлхийд дахин таниулсан амжилт болж байна.", textEn:"Mongolian ice sculptors Ts. Munkh-Erdene and B. Dorjnamjil won first place and the gold medal at the fifth Ice Festival, an international ice sculpture competition held in Torrejón de Ardoz, Madrid, Spain.\n\nThey competed with their work «Kiss of the Sea», at a festival held under the theme «Champions of the Sea» with 22 artists from 14 countries taking part. The sculptors created their works from November 7 to 13, and the winners were announced on November 14.\n\nThe festival's works will be on public display at the Mágicas Navidades park in Torrejón de Ardoz until January 10, 2027. The exhibition features life-size ice figures including a humpback whale, the sea god Neptune and the mythical Kraken.\n\nMunkh-Erdene and Dorjnamjil also won first place at the festival's third edition with their work «Alice: A Wonderful Journey», receiving the audience award as well. This latest victory has once again brought Mongolian ice sculpture to the world's attention."},
  {id:19, cat:"oron-nutag", title:"ДОРНОД: Нөмрөгийн түймрийн дараа иргэд ТББ байгуулж, өвс тэжээлийн тусламж илгээж байна", titleEn:"DORNOD: Residents form NGO after Numrug fire and send hay aid", time:"3 цаг", timeEn:"3 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Firefighters%20at%20High%20Park%20Wildfire%20June%2010%2C%202012.jpg?width=760", text:"Дорнод аймгийн Халхгол сумын нутагт гарсан хээрийн түймрийг арваннэгдүгээр сарын 11-ний 01:41 цагт цурамд оруулсан тухай Онцгой байдлын ерөнхий газар мэдээллээ. Түймэр гарсан тухай дуудлагыг арваннэгдүгээр сарын 10-ны 10:12 цагт хүлээн авсан бөгөөд урьдчилсан байдлаар 7800 орчим га талбай өртсөн байна.\n\nТүймрийг унтраах ажиллагаанд Дорнод аймгийн Онцгой байдлын газрын эрэн хайх, аврах анги, Халхгол сум дахь 62 дугаар анги, Сүхбаатар аймгийн Эрээнцагаан сум дахь 47 дугаар ангийн алба хаагчид, Хилийн 0146 дугаар ангийн алба хаагчид, Халхгол, Матад сумын мэргэжлийн ангийнхан, Сангийн далай багийн иргэд оролцсон байна.\n\nЭнэ нь аравдугаар сард Нөмрөгийн дархан цаазат газарт гарсан томоохон түймрийн дараагийн гал түймэр юм. Аравдугаар сарын 8-нд гарсан түймэр дархан цаазат газрын 70-80 орчим хувийг хамарч, 500 мянга орчим га талбай өртсөн тухай мэдээлэл гарсан ч эцсийн албан ёсны тоо хараахан гараагүй байна.\n\nАрваннэгдүгээр сарын 11-нд Дорнод нутгаас гаралтай, Улаанбаатар хотод ажиллаж, амьдарч буй бизнес эрхлэгчид болон залуусын төлөөлөл мэдээлэл хийж, Нөмрөгийн байгальд тусламжийн гараа сунгах зорилгоор төрийн бус байгууллага байгуулснаа мэдэгдлээ. Тэд түймэрт өртсөн талбайн хэмжээг тогтоох судалгааны дүнг хуульд заасан 30 хоногийн хугацаанд гаргаж, олон нийтэд ил тод мэдээлэхийг шаардаж байна. Матад сумын малчид, тариаланчидтай хамтран 2000 боодол өвсийг Халхгол сум руу хүргэхээр ажиллаж байна.", textEn:"The steppe fire in Khalkhgol soum, Dornod aimag, was contained at 01:41 on November 11, the National Emergency Management Agency said. The fire was reported at 10:12 on November 10, and preliminary estimates say around 7,800 hectares were affected.\n\nFirefighting involved the search and rescue unit of Dornod's Emergency Department, Unit 62 in Khalkhgol soum, Unit 47 in Erdenetsagaan soum of Sukhbaatar aimag, border troops of Unit 0146, professional units from Khalkhgol and Matad soums, and residents of Sandiin Dalai bag.\n\nThis was the latest fire after the major blaze in the Numrug Strictly Protected Area in October. The fire that broke out on October 8 covered around 70-80 percent of the reserve, with reports of some 500,000 hectares affected, though no final official figure has been released.\n\nOn November 11, businesspeople and young entrepreneurs from Dornod living and working in Ulaanbaatar held a press conference announcing they had formed a non-governmental organisation to help restore Numrug's nature. They are demanding that the findings of the study on the burned area be published transparently within the legally required 30 days. Together with herders and farmers from Matad soum, they are delivering 2,000 bales of hay to Khalkhgol soum.", region:"dornod"},
];

function aTitle(a){ return LANG === "en" ? (a.titleEn || a.title) : a.title; }
function aTime(a){ return LANG === "en" ? (a.timeEn || a.time) : a.time; }
function aText(a){ if(a.text) return LANG === "en" ? (a.textEn || a.text) : a.text; return SAMPLE_TEXT[LANG][a.id === 1 ? "long" : "short"]; }
function aRegion(a){ return a.region ? ((REGIONS[LANG] && REGIONS[LANG][a.region]) || a.region) : ""; }

// ===== Ханш · Цаг агаар (өдөр бүр шинэчлэгдэнэ; цаг агаарыг Open-Meteo-гоос шууд татна) =====
const RATES = {date:"2026-11-16", items:[
  {code:"USD", mnt:3603.64, chg:1}, {code:"EUR", mnt:3970.13, chg:-1}, {code:"JPY", mnt:22.59, chg:1},
  {code:"CNY", mnt:540.33, chg:1}, {code:"KRW", mnt:2.7, chg:1}, {code:"RUB", mnt:43.83, chg:1}, {code:"GBP", mnt:4757.89, chg:-1}
]};
let WEATHER = [
  {city:"Улаанбаатар", cityEn:"Ulaanbaatar", lat:47.9212, lon:106.9186, tz:"Asia/Ulaanbaatar", temp:-12, code:3},
  {city:"Токио", cityEn:"Tokyo", lat:35.6762, lon:139.6503, tz:"Asia/Tokyo", temp:10, code:2},
  {city:"Сөүл", cityEn:"Seoul", lat:37.5665, lon:126.978, tz:"Asia/Seoul", temp:9, code:2},
  {city:"Бээжин", cityEn:"Beijing", lat:39.9042, lon:116.4074, tz:"Asia/Shanghai", temp:3, code:1},
  {city:"Москва", cityEn:"Moscow", lat:55.7558, lon:37.6173, tz:"Europe/Moscow", temp:1, code:0}
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
  {yt:"sYA4A58J0RI", title:"Кино эхлэхийн өмнө: Феррари", titleEn:"Before the Movie: Ferrari", src:"МҮОНТ", srcEn:"MNB", srcFull:"МҮОНТ (Монголын үндэсний олон нийтийн телевиз)", srcFullEn:"MNB (Mongolian National Broadcaster)"},
  {yt:"MlKteXNISKU", title:"Кино эхлэхийн өмнө: Төрсөн өдөр", titleEn:"Before the Movie: Birthday", src:"МҮОНТ", srcEn:"MNB", srcFull:"МҮОНТ (Монголын үндэсний олон нийтийн телевиз)", srcFullEn:"MNB (Mongolian National Broadcaster)"},
  {yt:"9Eh5GtJHJAQ", title:"Санчир гарагийн зочин: Ойн инженер Ц.Баяр", titleEn:"Guest from Saturn: Forest Engineer Ts. Bayar", src:"Eagle TV", srcEn:"Eagle TV", srcFull:"Eagle TV (Ийгл телевиз)", srcFullEn:"Eagle TV"},
  {yt:"jd8ebc7kBEk", title:"Шинжээчийн цаг: Нийт зээлтэй өрхийн 39.1 хувь нь цалингийн зээлтэй, 24.8 хувь нь тэтгэврийн зээлтэй", titleEn:"Expert Hour: 39.1% of indebted households have salary loans, 24.8% have pension loans", src:"Eagle TV", srcEn:"Eagle TV", srcFull:"Eagle TV (Ийгл телевиз)", srcFullEn:"Eagle TV"},
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
