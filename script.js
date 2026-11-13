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

// ===== Бодит мэдээнүүд (2026-11-14) — өдөр бүр шинэчлэгдэнэ =====
const ARTICLES = [
  {id:1, cat:"uls-tor", title:"2027 оны төсвийг эцэслэн баталлаа: 111 гишүүн оролцож, 91 нь дэмжлээ", titleEn:"2027 budget finally approved: 91 of 111 members vote in favour", time:"15 мин", timeEn:"15 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Mongolian%20Parliament%201.JPG?width=1000", text:"Улсын Их Хурал өчигдөр буюу арваннэгдүгээр сарын 13-ны баасан гарагийн хуралдаанаар Монгол Улсын 2027 оны төсвийн тухай хуулийн төслүүдийг эцэслэн баталлаа. Төсвийн тухай хуулийг зүйл заалт бүрээр нь уншиж танилцуулсны дараа явуулсан санал хураалтад 111 гишүүн оролцсоноос 91 нь буюу 82 хувь нь дэмжиж, ирэх оны төсөв батлагдсан байна. Хуулиар ирэх оны төсвийг арваннэгдүгээр сарын 15-ны дотор хэлэлцэн батлах ёстой байв.\n\n2027 оны нэгдсэн төсвийн зарлагыг 43.6 их наяд төгрөгөөр тусгасан нь нэг жилд 28 хувийн өсөлт болж байна. Улсын Их Хурал 2026 оны тавдугаар сард зарлагын дээд хэмжээг 36.5 их наяд төгрөг, алдагдлыг ДНБ-ий 1.5 хувь гэж тогтоосон байсан ч өргөн барьсан төсөлд зарлага 7.1 их наяд төгрөгөөр давж, алдагдал ДНБ-ий 2.0 хувьд хүрчээ. Үүнийг зөвшөөрүүлэхээр Засгийн газар Төсвийн тогтвортой байдлын тухай хуульд нэмэлт оруулах төсөл оруулсан бөгөөд уг хуулийн төслийг ч мөн өдөр эцэслэн баталсан байна.\n\nУИХ-ын дарга С.Бямбацогт баталсан төсвийг ард түмний амьжиргаа, орлогыг хамгаалсан, аж ахуйн нэгжүүдээ дэмжсэн төсөв гэж тодорхойлов. Төсөлд ногдол ашгийн орлогыг 6.71 их наяд төгрөгөөр тооцсон нь татварын бус орлогын 81.1 хувийг эзэлж байна. Мөн өдрийн хуралдаанаар Усны тухай хуулийн төслийн хэлэлцэх эсэхийг хэлэлцэхэд УИХ дахь МАН-ын бүлэг тав хоногийн завсарлага авсан байна.", textEn:"The State Great Khural finally approved Mongolia's 2027 budget bills at its session yesterday, Friday, November 13. After the budget law was read out article by article, 111 members took part in the vote, with 91 of them — 82 percent — voting in favour. By law, next year's budget had to be debated and approved by November 15.\n\nConsolidated spending for 2027 is set at 43.6 trillion tugriks, a rise of 28 percent in a single year. In May 2026, parliament had set the spending ceiling at 36.5 trillion tugriks and the deficit at 1.5 percent of GDP, but the submitted draft exceeded the ceiling by 7.1 trillion tugriks, with the deficit reaching 2.0 percent of GDP. To allow this, the Government submitted a bill amending the Fiscal Stability Law, which was also finally approved on the same day.\n\nSpeaker S. Byambatsogt described the approved budget as one that protects people's livelihoods and incomes and supports businesses. The draft counts dividend income of 6.71 trillion tugriks, or 81.1 percent of non-tax revenue. At the same session, when the Water Law bill came up for debate, the Mongolian People's Party group in parliament took a five-day recess."},
  {id:2, cat:"uls-tor", title:"Батлан хамгаалахын сайд Д.Батлут өөрийн хүсэлтээр чөлөөлөгдөхөөр болов", titleEn:"Defence Minister D. Batlut to step down at his own request", time:"30 мин", timeEn:"30 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Mongolian%20Armed%20Forces%20100711-A-CE583-114.jpg?width=760", text:"Батлан хамгаалахын сайд Д.Батлут үүрэгт ажлаасаа өөрийн хүсэлтээр чөлөөлөгдөх шийдвэр гаргаснаа өчигдөр цахим хуудсаараа дамжуулан мэдэгдлээ. Тэрбээр “Улс эх орны эрх ашгаас илүү албан тушаал гэж үгүй. Улс төрийн тогтвортой байдлыг эрхэмлэж Батлан хамгаалахын сайдын үүрэгт ажлаасаа өөрийн хүсэлтээр чөлөөлөгдөх шийдвэр гаргалаа” гэжээ.\n\nТүүнийг огцруулах шаардлагыг Ардчилсан нам зургаан сарын өмнө Ерөнхий сайдад хүргүүлсэн байна. Өнгөрсөн тавдугаар сард Баянхонгор аймгийн 339 дүгээр цэргийн ангид 19 настай цэрэг камергүй өрөөнд бусдад зодуулж амь насаа алдсан хэрэг гарсан бөгөөд үүнтэй холбогдуулан сөрөг хүчин сайдад хариуцлага тооцохыг шаардаж байв.\n\nТүүний хүсэлтийг ирэх долоо хоногийн Засгийн газрын хуралдаанаар хэлэлцэхээр төлөвлөж байна. Түүний оронд Эдийн засаг, хөгжлийн сайд Ж.Энхбаярыг томилохоор яригдаж байгаа бөгөөд Ерөнхий сайд Н.Учрал 2027 оны төсвийг баталсны дараа танхимдаа 4-5 сайдын сэлгээ хийхээр төлөвлөж байсан гэж эх сурвалжууд мэдээлж байна. Д.Батлут 2025 оноос Батлан хамгаалахын сайдаар ажиллаж, 2026 оны дөрөвдүгээр сарын 7-нд байгуулагдсан Засгийн газарт улиран томилогдсон юм.", textEn:"Defence Minister D. Batlut announced yesterday on his social media page that he has decided to step down from his post at his own request. He wrote: 'No office is more important than the interests of the country. Valuing political stability, I have decided to be relieved of my duties as Minister of Defence at my own request.'\n\nThe Democratic Party had sent the Prime Minister a demand for his dismissal six months ago. Last May, a 19-year-old soldier was beaten to death by others in a room without cameras at the 339th military unit in Bayankhongor aimag, and the opposition has since demanded that the minister be held accountable.\n\nHis request is expected to be discussed at next week's Cabinet meeting. Economy and Development Minister J. Enkhbayar is being talked about as his replacement, and sources say Prime Minister N. Uchral had planned to reshuffle four or five ministers after the 2027 budget was approved. D. Batlut has served as Defence Minister since 2025 and was reappointed in the Government formed on April 7, 2026."},
  {id:3, cat:"uls-tor", title:"АН-ын “Онц их хурал” өнөөдөр болно: С.Баярцогтыг чөлөөлсөн шийдвэр маргаан дагуулсаар байна", titleEn:"Democratic Party's 'extraordinary congress' meets today amid row over S. Bayartsogt's dismissal", time:"45 мин", timeEn:"45 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/S%C3%BCkhbaatar%20Square.jpg?width=760", text:"Ардчилсан намын “Онц их хурал” өнөөдөр буюу арваннэгдүгээр сарын 14-ний бямба гарагт Соёлын төв өргөөнд зарлагдсан байна. Уг хурал нь зөвхөн намын дотоод дүрмийн маргаан бус, сөрөг хүчний удирдлага болон 2027 оны зургадугаар сард болох Ерөнхийлөгчийн сонгуульд хэн нэр дэвших вэ гэдэг эрх мэдлийн хуваарилалтыг шалгах томоохон сорилт болж хувирчээ.\n\nМаргааны гол гогцоо нь арваннэгдүгээр сарын 6-нд АН-ын Хяналтын ерөнхий хороо хуралдаж, 15 гишүүний 13 нь оролцон 100 хувийн саналаар Ерөнхий нарийн бичгийн дарга С.Баярцогтыг чөлөөлөх шийдвэр гаргаснаас эхтэй. Дотоод сонгуулийн маргаантай холбоотой тус хорооны чиглэлийг биелүүлээгүй гэх үндэслэлээр түүнийг Солонгост томилолтоор явж байх хойгуур огцруулсан байна.\n\nНамын төв байгууллагаас уг хурлыг албан ёсны бус хэмээн няцаасан ч зохион байгуулагчид гишүүдийн чуулганыг хийхээр шулуудсан нь АН доторх зөрчлийг ил болгож байна. Намын дарга О.Цогтгэрэл арваннэгдүгээр сарын 11-нд сэтгүүлчдэд “Бичиг албан ёсоор ирээгүй байна, ирвэл хууль зүйн үндэслэлийг нь нягтална” гэж мэдэгдсэн нь түүнийг хүчгүй дарга гэх шүүмжлэлд өртүүлжээ. Хурлыг санаачлагчдын цөмд ТЕГ-ын дарга асан Б.Хурц болон дүүргийн хуучин дарга нар нэгдсэн байна.", textEn:"The Democratic Party's 'extraordinary congress' has been called for today, Saturday, November 14, at the Central Palace of Culture. The meeting is not only a dispute over the party's internal rules, but a major test of the opposition's leadership and of who will be its candidate in the presidential election in June 2027.\n\nThe row began on November 6, when the party's General Control Committee met and voted unanimously — with 13 of its 15 members present — to dismiss Secretary-General S. Bayartsogt. He was removed while on a business trip to South Korea, on the grounds that he had failed to follow the committee's instructions linked to a disputed internal election.\n\nAlthough the party's central organisation has dismissed the congress as unofficial, the organisers are pressing ahead with the members' gathering, exposing the divisions inside the party. Party leader O. Tsogtgerel told journalists on November 11 that 'no official document has arrived; if it does, I will examine its legal basis', a remark that drew criticism portraying him as a powerless leader. The core organisers include former intelligence chief B. Khurts and former district party leaders."},
  {id:4, cat:"niigem", title:"Их цас, цасан шуурганы сэрэмжлүүлэг: өнөөдөр төв, зүүн аймгуудаар цас орж, хүйтэрнэ", titleEn:"Heavy snow and blizzard warning: snow and colder weather across central and eastern aimags today", time:"1 цаг", timeEn:"1 hour", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Blizzard%20CYCB.jpg?width=760", text:"Цаг уур, орчны шинжилгээний газраас цаг агаарын аюултай үзэгдлээс сэрэмжлүүлж байна. Арваннэгдүгээр сарын 13-ны өдөр Архангай, Булган, Орхон аймгийн нутаг, Хөвсгөл, Сэлэнгийн өмнөд, Төв аймгийн хойд хэсэг болон Улаанбаатар хот орчмоор их цас орсон бол 13-14-нд шилжих шөнө Сэлэнгийн өмнөд, Төв, Хэнтийн хойд хэсгээр их цас оржээ.\n\nӨнөөдөр буюу арваннэгдүгээр сарын 14-нд төвийн аймгуудын нутгийн зүүн, зүүн аймгуудын нутгийн хойд хэсгээр нойтон цас, цас орж, цасан шуурга шуурч, ихэнх нутгаар хүйтэрнэ. Зам, даваа, гүвээнд үзэгдэх орчин хязгаарлагдаж, халтиргаа гулгаа, мөстөлт үүсэхийг мэргэжлийн байгууллагаас анхааруулж байна. Салхи нутгийн зарим газраар секундэд 12-14 метр хүрч ширүүснэ.\n\nАрваннэгдүгээр сарын 14-18-ны урьдчилсан төлвөөр цас, цасан шуурга үргэлжилж, шөнөдөө Дархадын хотгор, Монгол-Алтай, Хангай, Хөвсгөлийн уулархаг нутгаар 25-30 хэм хүйтэрнэ. Малчид хадлан тэжээл бэлтгэх, малын хашаа хороо болон өвөлжилтийн бэлтгэлийг хангах, иргэд, тээвэрчид цаг агаарын сэрэмжлүүлгийг тогтмол авч, замд гарахдаа болгоомжтой байхыг зөвлөлөө.", textEn:"The National Agency for Meteorology and Environmental Monitoring has issued a warning about dangerous weather. On November 13, heavy snow fell in Arkhangai, Bulgan and Orkhon, southern Khuvsgul and Selenge, northern Tuv and around Ulaanbaatar, and on the night of November 13 to 14 heavy snow fell in southern Selenge, Tuv and northern Khentii.\n\nToday, November 14, wet snow and snow with blizzards are expected in the eastern parts of the central aimags and the northern parts of the eastern aimags, with colder weather across most of the country. Visibility will be limited on roads, passes and hills, with slippery surfaces and icing, the agency warned. Winds will reach 12 to 14 metres per second in some places.\n\nThe outlook for November 14 to 18 is for snow and blizzards to continue, with night temperatures falling to minus 25 to 30 degrees in the Darkhad depression and the mountainous areas of the Mongol-Altai, Khangai and Khuvsgul ranges. Herders are advised to prepare hay and fodder and ready livestock shelters for winter, while residents and drivers should follow weather warnings regularly and take care when travelling."},
  {id:5, cat:"niigem", title:"Хүүхдээ томуугаас хамгаалж, олон нийтийн газарт амны хаалт зүүлгэхийг уриаллаа", titleEn:"Parents urged to mask children in public places as flu spreads", time:"1 цаг 15 мин", timeEn:"1 hour 15 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Surgical%20Face%20Mask%20used%20in%20Coronavirus%20pandemic%20COVID-19.jpg?width=760", text:"Нийслэлийн Эрүүл мэндийн газраас томуу, томуу төст өвчнөөс урьдчилан сэргийлэх зорилгоор “Маскаа зүүцгээе” аяныг эхлүүлжээ. Аян арваннэгдүгээр сарын турш үргэлжлэх бөгөөд эцэг эхчүүдийг хүүхдээ олон нийтийн газарт амны хаалт зүүлгэж, томуугаас хамгаалахыг уриалж байна.\n\nХүйтний улирал эхэлж, ханиад томууны дэгдэлт нэмэгдэж байгаа энэ үед хүүхдүүд олноороо цуглардаг сургууль, цэцэрлэг, олон нийтийн газраар дамжин халдвар тархах эрсдэл өндөр байдаг. Амны хаалт зүүх нь халдвараас сэргийлэх хамгийн энгийн бөгөөд үр дүнтэй арга гэдгийг эрүүл мэндийн байгууллагаас онцолж байна.\n\nЭцэг эхчүүд хүүхдийнхээ гарыг тогтмол угааж, агаар сэлгэлт сайтай орчинд байлгаж, ханиадны шинж тэмдэг илэрвэл сургууль, цэцэрлэгт явуулахгүй байх нь халдвар тархахаас сэргийлэхэд чухал үүрэгтэй. Томуугийн вакцин хийлгэж, дархлааг дэмжих нь өвчнөөс сэргийлэхэд тусална гэж эрүүл мэндийн мэргэжилтнүүд зөвлөж байна.", textEn:"The Ulaanbaatar Health Department has launched the 'Let's wear our masks' campaign to prevent flu and flu-like illness. The campaign runs through November, and parents are urged to have their children wear masks in public places to protect them from the flu.\n\nAs the cold season begins and flu cases rise, infection can spread easily where children gather in large numbers — schools, kindergartens and public places. Health authorities stress that wearing a mask is the simplest and most effective way to prevent infection.\n\nParents should also wash their children's hands regularly, keep them in well-ventilated rooms, and keep them home from school or kindergarten if flu symptoms appear, as this helps stop the infection spreading. Health experts advise getting a flu vaccine and supporting immunity to help prevent illness."},
  {id:6, cat:"ediin-zasag", title:"Экспорт 45.3 хувиар өсөж 17.9 тэрбум долларт хүрсэн ч инфляц 13.4 хувьд хүрчээ", titleEn:"Exports surge 45.3% to $17.9 billion, but inflation climbs to 13.4%", time:"1 цаг 30 мин", timeEn:"1 hour 30 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Container-Terminal%20Bremerhaven%2002.jpg?width=760", text:"Монгол Улсын экспорт энэ оны эхний 10 сард өмнөх оны мөн үеэс 45.3 хувиар өсөж 17.9 тэрбум ам.долларт хүрч, 6.9 тэрбум ам.долларын гадаад худалдааны ашигтай гарсан байна. Экспортын 97.2 хувийг хүдэр, баяжмал болон үнэт металл эзэлж байгаа нь эрдэс баялгаас ихээхэн хамааралтай хэвээр байгааг харуулж байна.\n\nНөгөө талаар хэрэглээний үнэ өсөж, аравдугаар сард инфляц жилийн дүнгээр 13.4 хувьд хүрсэн нь энэ оны хамгийн өндөр үзүүлэлт болжээ. Мах, махан бүтээгдэхүүний үнэ 44.4 хувь, хонь, ямааны мах 55.2 хувиар өссөн нь өрхийн төсөвт хүнд дарамт учруулж байна. Хүнс, тээвэр, импортын барааны үнийн өсөлт инфляцын өсөлтийн гуравны нэгийг бүрдүүлж байгаа аж.\n\nЖижиглэн худалдааны салбарын орлого эхний есөн сард 12.6 хувиар өсөж 54.7 их наяд төгрөгт хүрсэн бөгөөд Улаанбаатар хот борлуулалтын дийлэнх хувийг эзэлж байна. Засгийн газар экспортын орлогыг орон нутгийн хөгжилд чиглүүлэх, өрхийн зардлын дарамтыг бууруулах чиглэлээр хяналт шалгалт, санхүүгийн шинэчлэлтийн арга хэмжээ авч байгаа аж.", textEn:"Mongolia's exports grew 45.3 percent year on year in the first ten months of the year to 17.9 billion US dollars, producing a foreign trade surplus of 6.9 billion dollars. Ores, concentrates and precious metals made up 97.2 percent of shipments, showing that the economy still depends heavily on mineral resources.\n\nAt the same time, consumer prices have risen, with inflation reaching 13.4 percent year on year in October — the highest figure this year. Meat and meat products rose 44.4 percent, and sheep and goat meat 55.2 percent, putting heavy pressure on household budgets. Rises in food, transport and imported goods account for about a third of the increase in inflation.\n\nRetail sector revenue grew 12.6 percent in the first nine months to 54.7 trillion tugriks, with Ulaanbaatar accounting for the bulk of turnover. The Government is carrying out inspections and financial reforms to channel export revenue into regional development and to ease the pressure of household costs."},
  {id:7, cat:"ediin-zasag", title:"“Эрдэнэс Тавантолгой”-н санхүүгийн аудит зөрчилгүй гарч, баяжуулах үйлдвэр 4.4 сая тонн нүүрс боловсруулжээ", titleEn:"Erdenes Tavan Tolgoi passes financial audit clean as processing plant handles 4.4 million tonnes", time:"2 цаг", timeEn:"2 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Manda%20Pit%20of%20Miike%20Coal%20Mine%20(east).jpg?width=760", text:"“Эрдэнэс Тавантолгой” ХК олон улсын санхүүгийн аудитаар зөрчилгүй гарч, тайлангаа гардан авлаа. BDO аудитын компанийн тайлан өөрчлөлтгүй дүгнэлттэй эцэслэгдсэн бөгөөд одоо хөрөнгийн үнэлгээ, андеррайтерийн сонгон шалгаруулалт хийгдэж байна.\n\nТус компанийн нүүрс баяжуулах үйлдвэр 2026 оны эхний 10 сард 4.4 сая тонн нүүрс боловсруулж, 76 хувийн гарцтай ажиллан 3.3 сая тонн бүтээгдэхүүн үйлдвэрлэжээ. Түүхий эдээ боловсруулж, үнэ цэн, өгөөжийг нэмэгдүүлэх нь компанийн хөгжлийн бодит алхам гэдгийг Ерөнхий сайд Н.Учрал тус уурхайд ажиллах үеэрээ тэмдэглэсэн байна.\n\nКомпани эхний есөн сард 29 сая тонн нүүрс борлуулж, борлуулалтын орлого нь 2 тэрбум ам.долларыг давсан бол цэвэр ашиг 1.5 их наяд төгрөгт хүрчээ. Ерөнхий сайдын мэдэгдсэнээр иргэдийн эзэмшиж буй 1,072 хувьцааг үе шаттайгаар хөрөнгийн зах зээл дээр энгийн арилжаанд оруулах ажил үргэлжилж байгаа бөгөөд 936 төгрөгийн үнэлгээтэй хувьцааг 3,000 төгрөгт хүргэх зорилт тавиад байна.", textEn:"Erdenes Tavan Tolgoi has passed an international financial audit with no findings and received its report. The audit by BDO was completed with an unmodified opinion, and the company is now carrying out asset valuation and the selection of an underwriter.\n\nThe company's coal processing plant handled 4.4 million tonnes of coal in the first ten months of 2026, operating at 76 percent yield to produce 3.3 million tonnes of product. Processing its own raw material to add value is a real step in the company's development, Prime Minister N. Uchral noted during his visit to the mine.\n\nThe company sold 29 million tonnes of coal in the first nine months, with sales revenue exceeding 2 billion US dollars and net profit reaching 1.5 trillion tugriks. According to the Prime Minister, work continues to put citizens' 1,072 shares into ordinary trading on the stock market in stages, with a target of lifting the shares from their current valuation of 936 tugriks to 3,000 tugriks."},
  {id:8, cat:"delhii", title:"COP31: Уур амьсгалын санхүүжилт, дасан зохицох асуудлаарх хэлэлцээ Анталья хотод үргэлжилж байна", titleEn:"COP31: climate finance and adaptation talks continue in Antalya", time:"2 цаг 30 мин", timeEn:"2 hours 30 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Industry%20Climate%20Change%20Conference%202025%2003.jpg?width=760", text:"Дэлхийн улс орнуудын төлөөлөгчид Турк улсын Анталья хотод болж буй НҮБ-ын Уур амьсгалын өөрчлөлтийн тухай 31 дэх удаагийн бага хурал буюу COP31-д оролцож, уур амьсгалын санхүүжилт, байгаль орчныг хамгаалах, олон улсын уур амьсгалын амлалтыг биелүүлэх стратегийг хэлэлцэж байна.\n\nНҮБ-ын Ерөнхий нарийн бичгийн дарга бага хурлын үеэр чулуужсан түлшийг үе шаттайгаар халах шаардлагатайг онцолж, чулуужсан түлш “үлэг гүрвэлийн замаар явах ёстой” гэж мэдэгдсэн билээ. Тэрбээр улс орнуудыг нүүрс, газрын тос, байгалийн хийнээс татгалзаж, сэргээгдэх эрчим хүч рүү шилжих үйл явцыг хурдасгахыг уриалсан юм.\n\nCOP31 нь дэлхийн дулаарлыг 1.5 хэмээс хэтрүүлэхгүй байх Парисын хэлэлцээрийн зорилтыг биелүүлэхэд чухал үе шат болж байна. Хөгжиж буй орнууд уур амьсгалын өөрчлөлтөд дасан зохицох, хохирлыг нөхөхөд шаардлагатай санхүүжилтийг нэмэгдүүлэхийг шаардаж байгаа бол хөгжингүй орнууд ялгаруулалтыг бууруулах үүрэг амлалтаа биелүүлэхийг шаардаж байна.", textEn:"Representatives from different countries are meeting at the 31st United Nations Climate Change Conference, COP31, in Antalya, Türkiye, discussing climate finance, environmental protection and strategies to meet international climate commitments.\n\nThe UN Secretary-General stressed at the conference that fossil fuels must be phased out, saying they 'must go the way of dinosaurs'. He urged countries to accelerate the shift away from coal, oil and gas towards renewable energy.\n\nCOP31 is an important milestone in meeting the Paris Agreement goal of keeping global warming below 1.5 degrees. Developing countries are demanding more finance to adapt to climate change and to cover loss and damage, while developed countries are pressing for emissions-reduction commitments to be honoured."},
  {id:9, cat:"delhii", title:"Орос Абу Дабигийн хэлэлцээрт Финландыг НАТО-гоос гарахыг шаардав", titleEn:"Russia demands Finland leave NATO in Abu Dhabi talks", time:"3 цаг", timeEn:"3 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Helsinki%20July%202013-15.jpg?width=760", text:"Оросын тал Абу Даби хотод болсон хэлэлцээний үеэр Финландыг НАТО-гоос гарахыг шаардсан гэж мэдээлж байна. Энэхүү шаардлага нь Украины дайныг зогсоох чиглэлд өрнөж буй дипломат хүчин чармайлтын хүрээнд гарсан бөгөөд Европын аюулгүй байдлын талаарх маргааныг дахин хурцатгаж байна.\n\nФинланд улс 2023 онд НАТО-д элссэн бөгөөд Орос улс эвслийн тэлэлтийг аюулгүй байдалдаа заналхийлэл гэж үзсээр ирсэн юм. Оросын шаардлагыг Европын холбоотнууд хүлээн зөвшөөрөх нь юу л бол. Европын орнууд Украины энхийн хэлэлцээрт суудалтай байхыг шаардаж байгаа ч нэгдсэн байр суурьт хүрч чадахгүй байна.\n\nҮүний зэрэгцээ АНУ-ын төлөөлөгчид Оросын Ерөнхийлөгч Владимир Путинтай дээд түвшний энхийн хэлэлцээ хийхээр Москвад хүрэлцэн ирсэн билээ. Хэлэлцээ нь гал зогсоох, олзлогдогч солилцох зэрэг хүмүүнлэгийн тохиролцоонд чиглэж байгаа бөгөөд үр дүн нь олон улсын анхаарлын төвд байна.", textEn:"Russia demanded that Finland leave NATO during talks in Abu Dhabi, according to reports. The demand came as part of the diplomatic efforts to end the war in Ukraine and has sharpened the debate over European security once again.\n\nFinland joined NATO in 2023, and Russia has long regarded the alliance's expansion as a threat to its security. It is unlikely that European allies would accept Russia's demand. European countries are pushing for a seat at the Ukraine peace talks, but they have not reached a unified position.\n\nAt the same time, American representatives have arrived in Moscow for high-level peace discussions with Russian President Vladimir Putin. The talks focus on a ceasefire and humanitarian agreements such as prisoner exchanges, and their outcome is under close international attention."},
  {id:10, cat:"delhii", title:"Иран АНУ-ын дроныг Хормузын хоолойд сөнөөсөн гэж мэдэгдэж, Трамп хариу арга хэмжээ авахаа анхааруулав", titleEn:"Iran says it downed a US drone over Hormuz as Trump warns of response", time:"3 цаг 30 мин", timeEn:"3 hours 30 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/MQ-1%20Predator%20unmanned%20aircraft.jpg?width=760", text:"Иран улс АНУ-ын MQ-1 Predator тагнуулын нисгэгчгүй онгоцыг Хормузын хоолойн дээгүүр сөнөөсөн гэж мэдэгдлээ. Түүнчлэн Бахрейн дахь АНУ-ын радарын байгууламжийг устгасан гэж Ираны тал мэдэгдсэн байна. Эдгээр мэдэгдэл нь бүс нутгийн хурцадмал байдал дахин нэмэгдэж буйг харуулж байна.\n\nАНУ-ын Ерөнхийлөгч Дональд Трамп Иран улс Америкийн холбоотнууд болон хөлөг онгоцнуудад заналхийлбэл АНУ цэргийн арга хэмжээ авахыг авч үзэж магадгүй гэж анхааруулсан билээ. Ираны тал ч мөн АНУ-ын цэргийн ажиллагааны эсрэг “өвдөлттэй цохилт” өгөх болно гэж мэдэгдэж, дайсан давтагдсан ялагдлаас суралцах ёстой гэжээ.\n\nХормузын хоолой нь дэлхийн газрын тосны тээврийн хамгийн чухал зам бөгөөд тус хоолой орчмын аливаа мөргөлдөөн олон улсын эрчим хүчний нийлүүлэлт, далайн тээвэрт шууд нөлөөлнө. Тус бүсэд танкертай холбоотой осол гарсан тухай мэдээлэл ч мөн гарсан нь далайн тээврийн аюулгүй байдлын талаарх санаа зовнилыг нэмэгдүүлж байна.", textEn:"Iran says it has shot down a US MQ-1 Predator reconnaissance drone over the Strait of Hormuz. Tehran also claims to have destroyed a US radar installation in Bahrain. The claims point to rising tensions in the region once again.\n\nUS President Donald Trump has warned that the United States may consider military action if Iran threatens American allies or ships. Iran, for its part, has said it would deliver 'painful strikes' in response to any US military action, adding that the enemy must learn from repeated defeats.\n\nThe Strait of Hormuz is the most important route for the world's oil shipments, and any clash around it would directly affect international energy supplies and shipping. Reports of a tanker incident in the area have also added to concern about the safety of shipping."},
  {id:11, cat:"delhii", title:"Зеленский: Орос, Украины олзлогдогчдын солилцоо түүхэн дэх хамгийн том нь болж магадгүй", titleEn:"Zelenskyy: Russia-Ukraine prisoner swap could be the largest yet", time:"4 цаг", timeEn:"4 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Kyiv%20skyline%20(15688086793).jpg?width=760", text:"Украины Ерөнхийлөгч Владимир Зеленский Орос, Украины хооронд төлөвлөж буй олзлогдогчдын солилцоо нь түүхэн дэх хамгийн том нь болж магадгүй гэж мэдэгдлээ. Тус солилцоо нь дайны олзлогдогчдыг гэр бүлд нь буцаах хүмүүнлэгийн чухал алхам болох юм.\n\nЭнэ мэдэгдэл нь АНУ-ын төлөөлөгчид Оросын Ерөнхийлөгч Владимир Путинтай Москвад энхийн хэлэлцээ хийж байгаа үед гарсан байна. Хэлэлцээ нь гал зогсоох болон олзлогдогч солилцох асуудалд чиглэж байгаа бөгөөд талууд ахиц гаргах эсэх нь тодорхойгүй хэвээр байна.\n\nОрос, Украины дайн дөрөв дэх жилдээ үргэлжилж байгаа бөгөөд өмнө нь хэд хэдэн удаа олзлогдогчдыг солилцсон билээ. Хүмүүнлэгийн тохиролцоо нь энхийн хэлэлцээний хамгийн бодитой үр дүнгийн нэг байж болохыг ажиглагчид онцолж байна.", textEn:"Ukrainian President Volodymyr Zelenskyy has said that a planned prisoner exchange between Russia and Ukraine could become the largest of its kind. The exchange would be an important humanitarian step in returning prisoners of war to their families.\n\nThe statement came as American representatives hold peace talks with Russian President Vladimir Putin in Moscow. The talks focus on a ceasefire and prisoner exchanges, and it remains unclear whether the sides will make progress.\n\nThe Russia-Ukraine war is now in its fourth year, and the two sides have exchanged prisoners several times before. Observers note that a humanitarian agreement could be one of the most realistic outcomes of the peace talks."},
  {id:12, cat:"delhii", title:"АНЭУ-ын Фужайра хотод 23 машин мөргөлдөж, 14 хүн амиа алджээ", titleEn:"Fourteen killed in 23-vehicle pile-up in Fujairah, UAE", time:"4 цаг 30 мин", timeEn:"4 hours 30 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Road%20between%20Fujairah%20mountains.jpg?width=760", text:"Арабын Нэгдсэн Эмират Улсын Фужайра хотод 23 автомашин мөргөлдсөн ноцтой осол гарч, 14 хүн амиа алдсан байна. Амиа алдсан хүмүүсийн дунд Энэтхэгийн иргэд байгаа гэж мэдээлж байна.\n\nОсол их хэмжээний тээврийн хэрэгсэл оролцсон олон машины мөргөлдөөн байсан бөгөөд аврах багийнхан газар дээр нь ажиллаж, шархадсан хүмүүст тусламж үзүүлсэн байна. Ослын шалтгаан одоогоор тодорхойгүй байгаа бөгөөд холбогдох байгууллагууд мөрдөн шалгах ажиллагаа явуулж байна.\n\nФужайра хот нь АНЭУ-ын зүүн эрэгт орших боомт хот бөгөөд тус бүс нутгаар дамжин өнгөрөх ачаа тээвэр их байдаг. Олон машины мөргөлдөөний дараа ослын газрыг шалгаж, гэрчүүдийн мэдүүлэг авдаг бөгөөд албаныхан жолооч нарыг цаг агаарын нөхцөл, замын байдлыг анхаарч, аюулгүй хурд баримтлахыг сануулдаг байна.", textEn:"Fourteen people have been killed in a serious crash involving 23 vehicles in Fujairah in the United Arab Emirates. Indian nationals are reported to be among the dead.\n\nThe crash was a multi-vehicle pile-up, and emergency teams worked at the scene to help the injured. The cause of the crash is not yet known, and the relevant authorities are investigating.\n\nFujairah is a port city on the UAE's east coast, with heavy freight traffic passing through the area. After a multi-vehicle crash, investigators examine the scene and take witness statements, and officials remind drivers to watch weather and road conditions and to keep to a safe speed."},
  {id:13, cat:"delhii", title:"Энэтхэгийн экспорт 29.9 хувиар өсөж 89.99 тэрбум долларт хүрчээ", titleEn:"India's exports jump 29.9% to $89.99 billion", time:"5 цаг", timeEn:"5 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/MAERSK%20HANOI%20Container%20Ship%20(Port%20Koper%20SIKOP%2C%202023).jpg?width=760", text:"Энэтхэгийн экспорт аравдугаар сард өмнөх оны мөн үеэс 29.9 хувиар өсөж 89.99 тэрбум ам.долларт хүрсэн бол худалдааны алдагдал 20.09 тэрбум ам.доллар болж буурсан гэж тус улсын Засгийн газраас баасан гарагт нийтэлсэн мэдээллээс харагдаж байна.\n\nЭкспортын ийнхүү огцом өсөлт нь Энэтхэгийн эдийн засгийн гадаад эрэлт сайжирч буйг харуулж байгаа бөгөөд тус улсын үйлдвэрлэл, үйлчилгээний салбарын өрсөлдөх чадвар нэмэгдэж буйн илрэл гэж эдийн засагчид үзэж байна. Худалдааны алдагдал буурсан нь төлбөрийн тэнцэлд эерэг нөлөө үзүүлнэ.\n\nЭнэ мэдээ нь Ерөнхий сайд Нарендра Моди Бенгалуру хотын метроны ягаан шугамыг нээж, тус улсын дэд бүтцийн хөгжилд анхаарч байгаа үед гарсан байна. Энэтхэгийн эдийн засаг дэлхийн хамгийн хурдацтай өсөж буй томоохон эдийн засгуудын нэг хэвээр байгаа бөгөөд экспортын өсөлт нь энэ чиг хандлагыг бататгаж байна.", textEn:"India's exports increased 29.9 percent in October to 89.99 billion US dollars, while the trade deficit narrowed to 20.09 billion dollars, according to government data released on Friday.\n\nThe sharp rise in exports points to improving foreign demand for the Indian economy and is seen by economists as a sign of growing competitiveness in the country's manufacturing and services sectors. The narrower trade deficit will have a positive effect on the balance of payments.\n\nThe news comes as Prime Minister Narendra Modi opened the Pink Line of the Bengaluru metro, underlining the country's focus on infrastructure development. India's economy remains one of the fastest-growing large economies in the world, and the export growth confirms that trend."},
  {id:14, cat:"sport", title:"Э.Цэндбаатар өнөөдөр өглөө Якубовтой WBC холбооны АНУ-ын аваргын бүсний төлөө тулалдана", titleEn:"E. Tsendbaatar fights Yakubov for the WBC US super featherweight title this morning", time:"5 цаг 30 мин", timeEn:"5 hours 30 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Boxing%20gloves%20Bail%2010-OZ%20(2).jpg?width=760", text:"Монгол Улсын гавьяат тамирчин, мэргэжлийн боксчин Эрдэнэбатын Цэндбаатар өнөөдөр буюу арваннэгдүгээр сарын 14-ний бямба гарагийн өглөө 09:00 цаг орчимд Тажикистаны Мухаммадхужа Якубовтой тулалдана. Тулаан АНУ-ын Техас мужийн Эль-Пасо хотод орон нутгийн цагаар арваннэгдүгээр сарын 13-ны баасан гарагийн орой зохион байгуулагдаж байгаа бөгөөд WBC холбооны АНУ-ын супер өдөн жингийн аваргын бүсний төлөө явагдана.\n\nХоёр боксчин 58.976 кг буюу 130 паундын жинд 10 үе тулалдахаар товлогджээ. Э.Цэндбаатар мэргэжлийн боксын рингэнд 15 тулаан хийж, бүгдэд нь ялалт байгуулсан бөгөөд зургааг нь хүнд цохилтоор дуусгасан амжилттай. Тэрбээр энэхүү тулаанд бэлтгэж 15 кг жин хассанаа мэдэгдсэн бөгөөд жин үзэлтэд амжилттай орсон байна.\n\nТүүний өрсөлдөгч Мухаммадхужа Якубов 31 настай бөгөөд мэргэжлийн рингэнд 25 тулаан хийж, 23 ялалт, нэг ялагдал, нэг тэнцсэн амжилттай яваа юм. Тэрбээр WBC холбооны супер өдөн жингийн чансаанд долоодугаар байрт эрэмбэлэгддэг бол Э.Цэндбаатар есдүгээр сарын шинэчлэгдсэн чансаагаар эхний аравт багтжээ. Хоёр боксчин анх энэ оны дөрөвдүгээр сард тулалдахаар товлогдсон ч М.Якубов бэлтгэлийн үеэр бэртэл авсны улмаас тулаан долоон сарын дараа болж байна.", textEn:"Honoured Athlete of Mongolia and professional boxer Erdenebatyn Tsendbaatar will fight Tajikistan's Muhammadkhuja Yakubov this morning, Saturday, November 14, at around 09:00 Ulaanbaatar time. The fight is being held in El Paso, Texas, on the evening of Friday, November 13, local time, for the WBC US super featherweight championship belt.\n\nThe two boxers are scheduled to fight ten rounds at 58.976 kilograms, or 130 pounds. Tsendbaatar has fought 15 professional bouts, winning all of them, six by knockout. He said he lost 15 kilograms preparing for this fight and passed the weigh-in successfully.\n\nHis opponent, Muhammadkhuja Yakubov, is 31 years old and has fought 25 professional bouts, with 23 wins, one loss and one draw. He is ranked seventh in the WBC super featherweight rankings, while Tsendbaatar entered the top ten in the September update. The two boxers were originally scheduled to meet in April this year, but Yakubov was injured in training, so the fight is taking place seven months later."},
  {id:15, cat:"sport", title:"Шинэ Зеланд Энэтхэгийг 244 оноогоор хожиж, дөрөв дэх тоглолтод ялалт байгуулав", titleEn:"New Zealand beat India by 244 runs in the fourth ODI", time:"6 цаг", timeEn:"6 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/LucknowCricketStadium.jpg?width=760", text:"Шинэ Зеландын крикетийн шигшээ баг Энэтхэгийн багийг дөрөв дэх нэг өдрийн олон улсын тоглолтод 244 оноогоор хожлоо. Тоглолт Маунт Маунгануй хотод болж, Шинэ Зеланд эхлэн цохиж 333 оноо авсан бол Энэтхэгийн баг хариу цохилтонд ихээхэн хоцорчээ.\n\nШинэ Зеландын цохигч Вилл Янг гайхалтай тоглолт үзүүлж 125 оноо авсан нь багийн ялалтад шийдвэрлэх үүрэг гүйцэтгэсэн байна. Түүний тоглолт багийг өндөр оноонд хүргэж, өрсөлдөгчийнхөө итгэлийг эвдсэн гэж мэргэжилтнүүд дүгнэж байна.\n\nЭнэтхэгийн баг дөрөв дэх тоглолтод ийнхүү ихээхэн зөрүүгээр ялагдсан нь багийн бүрэлдэхүүн, тоглолтын төлөвлөгөөнд өөрчлөлт хийх шаардлагатайг харуулж байна. Хоёр багийн дараагийн тоглолт крикет сонирхогчдын анхаарлын төвд байх бөгөөд Энэтхэг сэргэлт хийхээр тэмцэх болно.", textEn:"New Zealand's cricket team beat India by 244 runs in the fourth one-day international. The match was played in Mount Maunganui, where New Zealand batted first and scored 333 runs, while India fell far behind in reply.\n\nNew Zealand batsman Will Young played a superb innings of 125 runs, which proved decisive in his team's victory. Experts said his batting took the team to a high total and broke the opponents' confidence.\n\nIndia's heavy defeat in the fourth match shows that changes are needed in the team's line-up and game plan. The two teams' next match will be the focus of cricket fans, with India fighting to bounce back."},
  {id:16, cat:"soyol", title:"“CLASSIC NIGHT”: Филармонийн симфони оркестр өнөөдөр дэлхийн сонгодог бүтээлүүдийг толилуулна", titleEn:"'CLASSIC NIGHT': Philharmonic Symphony Orchestra performs world classics today", time:"6 цаг 30 мин", timeEn:"6 hours 30 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/BBC%20Symphony%20Orchestra%20at%20the%20Royal%20Albert%20Hall.jpg?width=760", text:"Төрийн шагналт, Ардын жүжигчин Ц.Намсрайжавын нэрэмжит Улсын Филармонийн Симфони оркестр өнөөдөр буюу арваннэгдүгээр сарын 14-нд дэлхийн сонгодог хөгжмийн гайхамшигт бүтээлүүдийг “CLASSIC NIGHT” тоглолтоороо толилуулна.\n\nТус тоглолт нь “Соёлын бүтээлч сар-2026” аяны хүрээнд өрнөж буй соёлын арга хэмжээний нэг бөгөөд сонгодог хөгжим сонирхогчдод дэлхийн нэрт хөгжмийн зохиолчдын бүтээлийг амьд хөгжмөөр сонсох боломж олгож байна. Симфони оркестрын тоглолт нь Монголын хөгжмийн амьдралын онцлох үйл явдлын нэг юм.\n\nУлсын Филармони нь Монголын мэргэжлийн хөгжмийн урлагийн гол төвүүдийн нэг бөгөөд симфони оркестр нь үндэсний болон дэлхийн сонгодог бүтээлүүдийг тогтмол толилуулж ирсэн билээ. Өнөөдрийн тоглолт сонгодог хөгжимд дуртай үзэгчдэд мартагдашгүй үдэш бэлэглэх төлөвтэй байна.", textEn:"The State Philharmonic Symphony Orchestra, named after State Prize laureate and People's Artist Ts. Namsraijav, will perform masterpieces of world classical music today, November 14, in its 'CLASSIC NIGHT' concert.\n\nThe concert is one of the cultural events taking place as part of the 'Creative Culture Month 2026' campaign, giving classical music lovers the chance to hear works by the world's great composers performed live. A symphony orchestra concert is one of the highlights of Mongolia's musical life.\n\nThe State Philharmonic is one of the main centres of professional music in Mongolia, and its symphony orchestra has regularly performed national and world classical works. Today's concert is expected to give classical music lovers an unforgettable evening."},
  {id:17, cat:"soyol", title:"Д.Нацагдоржийн мэндэлсний 120 жилийн ой: “Өвөөр аялах долоо хоног” номын санд үргэлжилж байна", titleEn:"120th anniversary of D. Natsagdorj: 'Journey through his legacy' week continues at the library", time:"7 цаг", timeEn:"7 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Rammohun%20Library%20and%20Free%20Reading%20Room%20-%20Rare%20Books%20Collection%20(1).jpg?width=760", text:"Монголын орчин үеийн утга зохиолыг үндэслэгч, их зохиолч Дашдоржийн Нацагдоржийн мэндэлсний 120 жилийн ойг тохиолдуулан “Д.Нацагдоржийн өвөөр аялах долоо хоног” арга хэмжээ Улаанбаатар хотын нийтийн номын санд арваннэгдүгээр сарын 10-17-ны өдрүүдэд болж байна.\n\nАрга хэмжээний хүрээнд их зохиолчийн амьдрал, уран бүтээл, Монголын утга зохиолд оруулсан хувь нэмрийг танилцуулсан үзэсгэлэн, уншлага, хэлэлцүүлэг зохион байгуулагдаж байгаа бөгөөд уншигчид, оюутан залуус түүний зохиол бүтээлтэй танилцах боломжтой.\n\nД.Нацагдорж нь Монголын орчин үеийн утга зохиолыг үндэслэгчдийн нэг бөгөөд түүний бүтээлүүд Монголын уран зохиолын сонгодог өвийн салшгүй хэсэг болсон билээ. 120 жилийн ойг тэмдэглэх нь түүний өвийг залуу үедээ таниулах, үндэсний утга зохиолын уламжлалыг хадгалахад чухал ач холбогдолтой юм.", textEn:"To mark the 120th anniversary of the birth of Dashdorjiin Natsagdorj, a founder of modern Mongolian literature, a week-long event called 'Journey through D. Natsagdorj's legacy' is taking place at the Ulaanbaatar Public Library from November 10 to 17.\n\nThe programme includes exhibitions, readings and discussions about the great writer's life, work and contribution to Mongolian literature, giving readers and young students a chance to discover his writing.\n\nD. Natsagdorj is one of the founders of modern Mongolian literature, and his works have become an inseparable part of Mongolia's classical literary heritage. Marking the 120th anniversary is important for introducing his legacy to the young generation and preserving the tradition of national literature."},
  {id:18, cat:"tech", title:"Microsoft 365-ийн тасалдал хоёр дахь өдрөө үргэлжилж, Outlook, Teams ажиллахгүй байна", titleEn:"Microsoft 365 outage enters second day as Outlook and Teams stay down", time:"7 цаг 30 мин", timeEn:"7 hours 30 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/BalticServers%20data%20center.jpg?width=760", text:"Microsoft компанийн ажлын байрны үйлчилгээнүүд болох Outlook, Teams зэрэгт гарсан дэлхий даяарх тасалдал хоёр дахь өдрөө үргэлжилж байна. Баасан гарагт эхэлсэн тасалдал нь Энэтхэг болон бусад орны хэрэглэгчдэд нөлөөлсөн хэвээр байгаа бөгөөд компани шалтгааныг тогтоохоор ажиллаж байна.\n\nMicrosoft компани тасалдлын шалтгааныг тогтоохоор ажиллаж байгаа бөгөөд хорлон сүйтгэх ажиллагааны улмаас үүссэн гэх мэдээлэл байхгүй гэж мэдэгдсэн байна. Гэсэн хэдий ч хэрэглэгчид цахим шуудан, хурлын үйлчилгээнд нэвтрэхэд хүндрэлтэй байгаа аж.\n\nЭнэхүү тасалдал нь сургууль, албан байгууллага, бизнесүүд харилцаа холбоо, өдөр тутмын ажлаа үүлэн технологид хэр их тулгуурладаг болохыг харуулж байна. Microsoft 365-ийн үйлчилгээнд Copilot зэрэг хиймэл оюуны туслахууд багтдаг бөгөөд тасалдал олон орны хэрэглэгчдэд нөлөөлжээ.", textEn:"The global outage affecting Microsoft's workplace services, including Outlook and Teams, has entered its second day. The disruption, which began on Friday, is still affecting users in India and elsewhere, and the company is working to pinpoint the cause.\n\nMicrosoft says it is still working to identify the cause and is not aware of any malicious activity behind the outage. Even so, users are having trouble accessing email and meeting services.\n\nThe outage shows how much schools, offices and businesses depend on cloud technology for communication and daily work. Microsoft 365 services include AI assistants such as Copilot, and the disruption has affected users in many countries."},
  {id:19, cat:"oron-nutag", region:"selenge", title:"Сэлэнгэ: “Найрамдал” сангийн аж ахуйн 50 жилийн ойд зориулсан 64 бөхийн барилдаан өнөөдөр болно", titleEn:"Selenge: 64-wrestler tournament today marks 50 years of the Nairamdal farm", time:"8 цаг", timeEn:"8 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Bokh%20wrestling%20at%20the%20Terelj%20National%20Park%20(3961462793).jpg?width=760", text:"Сэлэнгэ аймгийн Цагааннуур суманд “Найрамдал” сангийн аж ахуй байгуулагдсаны түүхт 50 жилийн ой өнөөдөр буюу арваннэгдүгээр сарын 14-нд болно. Ойн хүрээнд Монгол Улсын даян аварга Б.Орхонбаярт хүндэтгэл илэрхийлэх улс, аймаг, сумын алдар цолтой хүчит 64 бөхийн барилдаан зохион байгуулагдана.\n\nБарилдаанд улс, аймаг, сумын цолтой хүчит бөхчүүд оролцох бөгөөд ойн баярыг тохиолдуулан сумын иргэд, зочид төлөөлөгчид цугларч, хүндэтгэлийн арга хэмжээнд оролцоно. Бөхийн барилдаан нь Монголын уламжлалт спортын нэг бөгөөд орон нутгийн баяр ёслолын салшгүй хэсэг юм.\n\nМөн Сэлэнгэ аймагт “Хөдөлгөөнөөр эрүүлжье” сарын аян арваннэгдүгээр сарын 15-ныг хүртэл үргэлжилж байгаа бөгөөд иргэдийг идэвхтэй хөдөлгөөн, эрүүл амьдралын хэв маягт уриалж байна. Тус аян нь орон нутгийн иргэдийн эрүүл мэндийг дэмжих зорилготой аж.", textEn:"The 50th anniversary of the founding of the Nairamdal state farm will be marked today, November 14, in Tsagaannuur soum, Selenge aimag. As part of the anniversary, a 64-wrestler tournament will be held in honour of State Champion B. Orkhonbayar, with wrestlers holding national, aimag and soum titles.\n\nWrestlers with national, aimag and soum titles will take part, and residents and guests will gather for the anniversary events. Wrestling is one of Mongolia's traditional sports and an inseparable part of local celebrations.\n\nThe 'Let's get healthy through movement' month-long campaign is also running in Selenge aimag until November 15, encouraging residents to stay active and live healthily. The campaign aims to support the health of local people."},
];

function aTitle(a){ return LANG === "en" ? (a.titleEn || a.title) : a.title; }
function aTime(a){ return LANG === "en" ? (a.timeEn || a.time) : a.time; }
function aText(a){ if(a.text) return LANG === "en" ? (a.textEn || a.text) : a.text; return SAMPLE_TEXT[LANG][a.id === 1 ? "long" : "short"]; }
function aRegion(a){ return a.region ? ((REGIONS[LANG] && REGIONS[LANG][a.region]) || a.region) : ""; }

// ===== Ханш · Цаг агаар (өдөр бүр шинэчлэгдэнэ; цаг агаарыг Open-Meteo-гоос шууд татна) =====
const RATES = {date:"2026-11-14", items:[
  {code:"USD", mnt:3603.46, chg:1}, {code:"EUR", mnt:3985.43, chg:-1}, {code:"JPY", mnt:22.54, chg:-1},
  {code:"CNY", mnt:540.2, chg:-1}, {code:"KRW", mnt:2.69, chg:-1}, {code:"RUB", mnt:43.79, chg:1}, {code:"GBP", mnt:4767.2, chg:-1}
]};
let WEATHER = [
  {city:"Улаанбаатар", cityEn:"Ulaanbaatar", lat:47.9212, lon:106.9186, tz:"Asia/Ulaanbaatar", temp:-3, code:73},
  {city:"Токио", cityEn:"Tokyo", lat:35.6762, lon:139.6503, tz:"Asia/Tokyo", temp:11, code:1},
  {city:"Сөүл", cityEn:"Seoul", lat:37.5665, lon:126.978, tz:"Asia/Seoul", temp:10, code:2},
  {city:"Бээжин", cityEn:"Beijing", lat:39.9042, lon:116.4074, tz:"Asia/Shanghai", temp:4, code:0},
  {city:"Москва", cityEn:"Moscow", lat:55.7558, lon:37.6173, tz:"Europe/Moscow", temp:5, code:61}
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
  {yt:"Uo9uRSu8D3A", title:"Тусгай сурвалжилга: ТЕНДЕРИЙН ЦААНА", titleEn:"Special report: Behind the Tender", src:"Eagle TV", srcEn:"Eagle TV", srcFull:"Eagle TV (Ийгл телевиз)", srcFullEn:"Eagle TV"},
  {yt:"4OPM0rtxtew", title:"Тусгай сурвалжилга: ЭЙКҮСОРА", titleEn:"Special report: Eiküsora", src:"Eagle TV", srcEn:"Eagle TV", srcFull:"Eagle TV (Ийгл телевиз)", srcFullEn:"Eagle TV"},
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
