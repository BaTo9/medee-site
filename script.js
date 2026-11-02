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

// ===== Бодит мэдээнүүд (2026-11-03) — өдөр бүр шинэчлэгдэнэ =====
const ARTICLES = [
  {id:1, cat:"niigem", title:"Гэр бүл, хүүхдийн хэргийн дагнасан шүүх үйл ажиллагаагаа албан ёсоор эхлүүллээ", titleEn:"Specialised family and children's court officially begins work", time:"15 мин", timeEn:"15 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/CourthousePostOfficeTampa01.jpg?width=1000", text:"Монгол Улсад шинээр байгуулагдсан Гэр бүл, хүүхдийн хэргийн дагнасан шүүх 2026 оны арваннэгдүгээр сарын 2-ны өдрөөс үйл ажиллагаагаа албан ёсоор эхлүүлж, гэр бүл, хүүхдийн хэрэг, маргааны нэхэмжлэлийг хүлээн авч байна. Энэ нь гэр бүл, хүүхэд, насанд хүрээгүй хүний хэрэг, маргааныг мэргэшсэн шүүхээр хянан шийдвэрлэх тогтолцоог бүрдүүлэх зорилготой шүүх эрх мэдлийн салбарын чухал шинэчлэл гэж үзэж байна.\n\nУлсын Их Хурлаас 2026 оны долдугаар сарын 3-ны өдөр анх удаа «Гэр бүлийн хэрэг шүүхэд хянан шийдвэрлэх тухай хууль»-ийг баталсан бөгөөд уг хууль 2026 оны арваннэгдүгээр сарын 1-ний өдрөөс хэрэгжиж эхэлсэн юм. Хуулийн хэрэгжилтийг хангах хүрээнд Нийслэл дэх Гэр бүл, хүүхдийн хэргийн анхан шатны болон давж заалдах шатны шүүхийг байгуулж, үйл ажиллагааг нь эхлүүлээд байна.\n\nШинэ шүүх нь гэр бүлийн маргаан, хүүхдийн эрх, асран хамгаалал зэрэг мэдрэмтгий асуудлыг илүү нарийн мэргэшсэн байдлаар шийдвэрлэх боломжийг бүрдүүлнэ гэж найдаж байна. Иргэд гэр бүл, хүүхэдтэй холбоотой нэхэмжлэлээ одооноос дагнасан шүүхэд гаргах боломжтой боллоо. Шүүхийн үйл ажиллагаа тогтвортой явагдахын хэрээр хэрэг хянан шийдвэрлэх хугацаа, шийдвэрийн чанарт ямар өөрчлөлт гарах нь анхаарлын төвд байх болно.", textEn:"Mongolia's newly established specialised Family and Children's Court officially began work on November 2, 2026, and is now accepting claims in family and children's cases and disputes. The move is seen as an important reform of the judiciary, creating a system in which cases involving families, children and minors are heard by a specialised court.\n\nParliament adopted the Law on Family Cases Heard by Courts for the first time on July 3, 2026, and the law came into force on November 1, 2026. To implement it, first-instance and appellate family and children's courts have been established in the capital and have begun operating.\n\nThe new court is expected to allow sensitive matters such as family disputes, children's rights and custody to be handled with greater specialisation. Citizens can now file family- and child-related claims with the specialised court. How the change affects case timelines and the quality of decisions will be watched closely as its work becomes established."},
  {id:2, cat:"ediin-zasag", title:"Ханги боомтоор нүүрсний экспорт 14 сая тоннд хүрч, өнгөрсөн оны хэмжээнээс 62.8 хувиар өслөө", titleEn:"Coal exports through Khangi port reach 14 million tonnes, up 62.8 percent on last year", time:"30 мин", timeEn:"30 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Banff National Park (AB, Canada), Bankhead, Lower Bankhead, Coal Mine Train -- 2022 -- 2222.jpg?width=760", text:"Ханги боомтоор 2025 онд нийт 8.6 сая тонн нүүрс экспортолсон бол 2026 оны арваннэгдүгээр сарын 1-ний байдлаар 14 сая тоннд хүрч, өнгөрсөн оны бүтэн жилийн хэмжээнээс 62.8 хувиар өссөн байна. Боомтын нэвтрүүлэх хүчин чадал, тээвэр логистикийн зохион байгуулалт сайжирсан нь экспортын өсөлтөд нөлөөлсөн гэж үзэж байна.\n\n«Эрдэнэс Тавантолгой» ХК-ийн хувьд өнгөрсөн онд 1.4 сая тонн нүүрс экспортолсон бол энэ оны өнөөдрийн байдлаар 5.7 сая тоннд хүрч, бараг дөрөв дахин нэмэгджээ. Энэ нь компанийн экспортын чиглэлийн үйл ажиллагаа эрчимжсэнийг харуулж байна.\n\nЦаашид 2027 онд хил, боомтын ачаалал, тээврийн бөөгнөрлийг бууруулах, нэвтрүүлэх хүчин чадлыг нэмэгдүүлэх зорилгоор хилийн шинэ гарц нээх, одоо байгаа гарцуудыг өргөтгөх чиглэлээр ажиллахаар төлөвлөж байна. Мөн БНХАУ-ын ӨМӨЗО-ны Бугат хоттой хамтын ажиллагаагаа өргөжүүлж, нүүрсний экспорт, тээвэр логистикийн үйл ажиллагааг эрчимжүүлэхэд анхаарна.", textEn:"Coal exports through the Khangi port reached 14 million tonnes as of November 1, 2026, compared with 8.6 million tonnes for the whole of 2025 — an increase of 62.8 percent on last year's full-year volume. Improved border-crossing capacity and transport logistics are seen as factors behind the growth.\n\nErdenes Tavantolgoi JSC exported 1.4 million tonnes of coal last year, but has already reached 5.7 million tonnes this year, almost four times as much. The figures show a sharp acceleration in the company's export operations.\n\nLooking ahead to 2027, work is planned to open new border crossings and expand existing ones in order to ease border and port congestion and raise throughput capacity. Cooperation with Bugat city in China's Inner Mongolia will also be expanded to boost coal exports and transport logistics."},
  {id:3, cat:"uls-tor", title:"Ерөнхий сайд Н.Учрал өвөлжилтийн бэлтгэлийг шалгаж, Дулааны III, IV станцад ажиллалаа", titleEn:"Prime Minister N. Uchral inspects winter preparations at Thermal Power Plants III and IV", time:"45 мин", timeEn:"45 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Centrale termoelettrica thermal power station Turbigo Italy.jpg?width=760", text:"Монгол Улсын Ерөнхий сайд Н.Учрал эрчим хүчний салбар дахь өвөлжилтийн бэлтгэлийг өнгөрсөн хавар буюу дөрөвдүгээр сараас эхлүүлж, Дулааны III болон IV цахилгаан станцад ажиллаж, албаныханд үүрэг даалгавар өгч, шаардлагатай, тулгамдсан санхүүжилтийг нь шийдвэрлэсэн байна. Ерөнхий сайд 2026 оны аравдугаар сарын 31-нд дээрх хоёр станц болон Диспетчерийн үндэсний төвд ажиллаж, улсын төсвийн хөрөнгө оруулалт, Засгийн газрын нөөц сангаас санхүүжүүлсэн засвар, шинэчлэлийн ажлын явцыг хянаж, нэмэлт үүрэг өглөө.\n\nДиспетчерийн үндэсний төв нь эрчим хүчний системийн тасралтгүй, найдвартай ажиллагааг 24 цагийн турш шуурхай удирдлагаар хангаж, зохицуулдаг. Ерөнхий сайдын хавар өгсөн үүрэг даалгаврын биелэлт 92.5 хувьтай үргэлжилж байна гэж «Диспетчерийн үндэсний төв» ТӨХХК-ийн гүйцэтгэх захирал Г.Балжинням хэлэв.\n\nМонгол Улсын эрчим хүчний системийн нийт суурилагдсан хүчин чадал 1905 МВт, төвийн бүсийн хэсэгт 1797 МВт байдаг. 2026–2027 оны өвлийн их ачааллаар төвийн бүсийн хэрэглээ 1956 МВт хүрнэ гэж тооцоолсон бөгөөд чадлын дутагдлыг БНХАУ-аас 80 МВт, шинээр ашиглалтад орох Сүхбаатарын 70 МВт-ын ДЦС-аар хангахаар төлөвлөжээ. Ерөнхий сайдын хэлснээр энэ өвөл цахилгааны хэрэглээ 120–150 МВт-аар өсөх тооцоо байгаа бөгөөд Дулааны IV станцын нэг зуух зогсоход л хэрэглэгчдийн цахилгааныг 100 МВт-аар хязгаарлах нөхцөл үүсэж болзошгүй байна.", textEn:"Prime Minister N. Uchral began preparations for winter in the energy sector last spring, in April, visiting Thermal Power Plants III and IV, giving officials instructions and resolving urgent financing needs. On October 31, 2026, the Prime Minister visited the two plants and the National Dispatch Centre, reviewing repair and modernisation work funded from the state budget and the government's reserve fund and issuing further instructions.\n\nThe National Dispatch Centre provides round-the-clock operational control to keep the energy system running continuously and reliably. Its executive director, G. Baljinnyam, said implementation of the Prime Minister's spring instructions is 92.5 percent complete.\n\nMongolia's energy system has a total installed capacity of 1,905 MW, of which 1,797 MW is in the central region. Peak winter demand in the central region in 2026–2027 is forecast at 1,956 MW, with the shortfall to be covered by 80 MW from China and the new 70 MW Sukhbaatar power plant. Electricity consumption is expected to rise by 120–150 MW this winter, and the Prime Minister noted that if just one boiler at Plant IV stops, consumers' supply could be limited by 100 MW."},
  {id:4, cat:"niigem", title:"Суурь тэтгэвэр банк болон бүртгэлтэй хаягаас шалтгаалан 2-3 хоногийн дараа дансанд орж магадгүй", titleEn:"Basic pension may arrive 2-3 days late depending on bank and registered address", time:"1 цаг", timeEn:"1 hour", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Group portrait of seven elderly people (AM 77607-1).jpg?width=760", text:"2026 оны арваннэгдүгээр сарын 1-нээс эмэгтэй 55, эрэгтэй 60 нас хүрсэн зохих шаардлагыг хангасан иргэдэд суурь тэтгэвэр нэмж олгохоор болсон ч зарим иргэний дансанд нэмэгдэл нь шилжээгүй байгаа талаар мэдээлэл гараад байна. Үүнтэй холбогдуулан Гэр бүл, хөдөлмөр, нийгмийн хамгааллын яамнаас суурь тэтгэврийн шилжүүлэг нь тэтгэвэр авагчийн банк болон бүртгэлтэй хаягаас шалтгаалан хоёр, гурав хоногийн дараа дансанд нь орж магадгүйг мэдээлсэн байна.\n\nТус яамны тайлбарласнаар суурь тэтгэвэр нь улсын төсвөөс санхүүжиж байгаа тул иргэдийн сар бүр авдаг үндсэн тэтгэврээс тусдаа шилжиж, улсын төсвөөс санхүүжилт орж ирсний дараа тэтгэвэр авагчдын дансанд олгож байгаа аж. Нийгмийн даатгалын ерөнхий газрын мэдээлснээр суурь тэтгэврийн хэмжээг нийгмийн даатгалын мэдээллийн санд бүртгэлтэй өгөгдөлд тулгуурлан иргэн тус бүрээр тооцоолон олгож байна.\n\nИймээс суурь тэтгэврийн нэмэгдэл нь бүх иргэнд ижил хэмжээтэй олгогдохгүй бөгөөд тухайн иргэний мэдээлэл, тооцооллоос хамааран харилцан адилгүй байх аж. Мөн тэтгэвэр олгодог банкуудын шилжүүлгийн дарааллаас шалтгаалан зарим иргэний дансанд мөнгө хараахан ороогүй байгааг тайлбарлав. Иргэд 2026 оны арваннэгдүгээр сарын 1-нээс эхлэн «E-Mongolia» цахим системээр дамжуулан суурь тэтгэврийн тооцооллыг шалгах боломжтой бөгөөд тодруулах шаардлагатай иргэд Гэр бүл, хөдөлмөр, нийгмийн хамгааллын яамны 11-328030 дугаарын 304 дотуур утсаар холбогдож мэдээлэл авах боломжтойг албаныхан онцоллоо.", textEn:"From November 1, 2026, citizens meeting the requirements — women aged 55 and men aged 60 — began receiving an additional basic pension, but reports emerged that some people's accounts had not yet received the supplement. The Ministry of Family, Labour and Social Protection said the transfer may arrive two or three days later depending on the pensioner's bank and registered address.\n\nAccording to the ministry, the basic pension is financed from the state budget, so it is transferred separately from the regular monthly pension, after state funding arrives, and then paid into pensioners' accounts. The General Authority for Social Insurance said the amount is calculated individually for each person based on data in the social insurance database.\n\nThe supplement is therefore not the same amount for everyone and varies with each person's data and calculation. The order of transfers by pension-paying banks also explains why some accounts have not yet received the money. Since November 1, citizens have been able to check their basic pension calculation through the E-Mongolia system, and those needing clarification can call the ministry at 11-328030, extension 304."},
  {id:5, cat:"niigem", title:"Энэ сарын 10-нд бүх нийтээр амарна: Их эзэн Чингис хааны мэндэлсэн өдөр тохионо", titleEn:"November 10 will be a public holiday, marking the birthday of Chinggis Khaan", time:"1 цаг", timeEn:"1 hour", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Genghis Khan Equestrian Statue.jpg?width=760", text:"2026 онд Их эзэн Чингис хааны мэндэлсэн өдөр буюу Монгол бахархлын өдөр арваннэгдүгээр сарын 10-ны Мягмар гарагт тохиож, бүх нийтээр амарна. Энэ өдөр нь Монгол Улсын үндэсний бахархал, түүхэн уламжлалыг тэмдэглэх өдөр бөгөөд жил бүр улс орон даяар тэмдэглэдэг.\n\nМонгол бахархлын өдрийг тохиолдуулан төрийн болон олон нийтийн байгууллагууд түүх, соёлын арга хэмжээ зохион байгуулдаг уламжлалтай. Энэ жил ч мөн Чингис хааны мэндэлсэн өдрийг угтан олон арга хэмжээ болох төлөвтэй байна.\n\nАрваннэгдүгээр сар нь Монголын түүхэнд онцгой байр суурь эзэлдэг сар бөгөөд энэ сарын 10-нд амарснаар иргэд гэр бүлээрээ баяраа тэмдэглэж, түүхэн дурсгалт газруудаар зочлох боломжтой болно. Аж ахуйн нэгж, байгууллагууд амралтын өдрийн хуваарьтаа анхаарч, үйл ажиллагаагаа урьдчилан төлөвлөх шаардлагатайг анхааруулж байна.", textEn:"In 2026, the birthday of Chinggis Khaan — Mongolian Pride Day — falls on Tuesday, November 10, which will be a public holiday across the country. The day celebrates Mongolia's national pride and historical traditions and is marked nationwide every year.\n\nState and public organisations traditionally hold historical and cultural events to mark Mongolian Pride Day, and events are again expected this year to honour the birthday of Chinggis Khaan.\n\nNovember holds a special place in Mongolian history, and the holiday on November 10 gives citizens a chance to celebrate with their families and visit historical sites. Businesses and organisations are advised to take the holiday into account when planning their schedules."},
  {id:6, cat:"uls-tor", title:"АН: Төрийн бүх байгууллага дэргэдээ хэвлэл мэдээллийн албатай болсон нь хууль зөрчиж байна", titleEn:"Democratic Party: all state bodies having press offices violates the law", time:"2 цаг", timeEn:"2 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Government Palace of Mongolia in May 2025 (1).jpg?width=760", text:"Улсын Их Хурал дахь Ардчилсан намын бүлэг өнөөдрийн хуралдаанаараа хэлэлцсэн асуудлуудын талаар мэдээлэл хийлээ. Бүлгийн мэдэгдсэнээр төрийн бүх байгууллага дэргэдээ хэвлэл мэдээллийн албатай болсон нь хууль зөрчиж байна гэж үзэж байна.\n\nТөрийн байгууллагууд өөрсдийн хэвлэл мэдээллийн албаар дамжуулан мэдээлэл түгээх нь хэвлэл мэдээллийн хараат бус байдал, олон нийтийн мэдэх эрхэд хэрхэн нөлөөлж байгаа нь улс төрийн маргааны сэдэв болж байна. Ардчилсан намын бүлэг энэ асуудлыг хууль тогтоомжийн хүрээнд авч үзэх шаардлагатай гэж үзэж байна.\n\nУлс төрийн намууд болон төрийн байгууллагуудын харилцаа, мэдээллийн ил тод байдал нь ардчилсан нийгмийн үндсэн зарчмуудын нэг юм. Иймээс төрийн байгууллагын бүтэц, хэвлэл мэдээлэлтэй харилцах журам нь хуульд нийцсэн байх ёстой гэж сөрөг хүчний зүгээс шаардаж байна. Энэ асуудлаар цаашид Улсын Их Хуралд хэлэлцүүлэг өрнөх төлөвтэй байна.", textEn:"The Democratic Party faction in Parliament briefed the press on the issues discussed at its meeting today. According to the faction, the fact that every state body now has its own press office violates the law.\n\nHow state bodies disseminate information through their own press offices, and what that means for media independence and the public's right to know, has become a subject of political debate. The Democratic Party faction says the matter needs to be considered within the framework of the law.\n\nThe relationship between political parties and state bodies, and the transparency of information, are among the basic principles of a democratic society. The opposition therefore insists that the structure of state bodies and their procedures for dealing with the media must comply with the law. Further debate on the issue is expected in Parliament."},
  {id:7, cat:"uls-tor", title:"Зуны цагийн тооллыг жил бүр хэрэглэх тухай УИХ-ын тогтоолын төсөл санаачиллаа", titleEn:"Draft resolution proposed to apply daylight saving time every year", time:"2 цаг", timeEn:"2 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Cape Town (ZA), Waterfront, Clock Tower, Detail -- 2024 -- 2911.jpg?width=760", text:"Улсын Их Хурлын гишүүн Г.Хосбаяр Зуны цагийн тооллыг жил бүр хэрэглэх тухай УИХ-ын тогтоолын төсөл боловсруулж, олон нийтийн саналыг авахаар 2026 оны аравдугаар сарын 26-наас эхлэн танилцуулсан байна. Төсөл нь зуны цагийн тооллыг тогтмол хэрэглэх замаар өдрийн гэрлийг илүү үр дүнтэй ашиглах, эрчим хүчний хэрэглээг зохицуулах зорилготой юм.\n\nЗуны цагийн тоолол нь олон улсад өргөн хэрэглэгддэг практик бөгөөд цаг агаарын нөхцөл, газарзүйн байршлаас хамааран үр нөлөө нь харилцан адилгүй байдаг. Монгол Улсын хувьд өвлийн улиралд өдөр богино, шөнө урт байдаг тул зуны цагийг жилийн турш хэрэглэх нь иргэдийн өдөр тутмын амьдрал, ажлын цагийн хуваарьт хэрхэн нөлөөлөх нь хэлэлцүүлгийн гол сэдэв болж байна.\n\nОлон нийтийн саналыг авч дууссаны дараа төслийг Улсын Их Хурлаар хэлэлцэх эсэх нь шийдэгдэнэ. Иргэд, мэргэжилтнүүд, эрчим хүч, эрүүл мэнд, боловсролын салбарын төлөөлөгчдийн байр суурь төслийн хувь заяанд чухал үүрэг гүйцэтгэх төлөвтэй байна.", textEn:"Member of Parliament G. Khosbayar has drafted a resolution on applying daylight saving time every year and has presented it for public comment since October 26, 2026. The draft aims to make better use of daylight and manage energy consumption by using summer time on a permanent basis.\n\nDaylight saving is widely practised internationally, but its effects vary with climate and geography. In Mongolia, where winter days are short and nights long, how year-round summer time would affect citizens' daily lives and working hours is the main subject of debate.\n\nOnce public comments have been collected, Parliament will decide whether to debate the draft. The views of citizens, experts and representatives of the energy, health and education sectors are expected to play an important role in the draft's fate."},
  {id:8, cat:"oron-nutag", region:"selenge", title:"Сэлэнгэ аймаг 150 МВт-ын дулааны цахилгаан станц байгуулах гэрээнд гарын үсэг зурлаа", titleEn:"Selenge province signs deal to build a 150 MW thermal power plant", time:"3 цаг", timeEn:"3 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Dalian Liaoning China Dalian-Thermal-Power-Plant-01.jpg?width=760", text:"Сэлэнгэ аймаг эрчим хүчний салбарынхаа хоёр дахь томоохон эх үүсвэрийг шийдвэрлэж, 2026 оны арваннэгдүгээр сарын 2-нд 150 МВт-ын хүчин чадалтай дулааны цахилгаан станц байгуулах гэрээнд гарын үсэг зурлаа. Аймгийн төв Сүхбаатар хотод 70 МВт-ын дулааны цахилгаан станцын нээлт болоход хоёрхон хоног үлдээд байгаа энэ цаг үед Сэлэнгэ аймгийн Засаг дарга Н.Лхагвадорж Мандал суманд 150 МВт-ын хүчин чадалтай станц барьж байгуулах төслийн төр, хувийн хэвшлийн түншлэлийн гэрээнд гарын үсэг зурсан байна.\n\nЭнэ нь Сэлэнгэ аймгийн эрчим хүчний хангамжийг сайжруулж, орон нутгийн үйлдвэрлэл, аж ахуйн нэгжүүдийн эрчим хүчний хэрэгцээг хангах чухал алхам юм. Аймгийн хэмжээнд хоёр томоохон бүтээн байгуулалт зэрэг хэрэгжиж байгаа нь эрчим хүчний салбарын хөгжилд шинэ түлхэц өгч байна.\n\nТөслийг төр, хувийн хэвшлийн түншлэлийн хүрээнд хэрэгжүүлэх бөгөөд станц ашиглалтад орсноор Сэлэнгэ аймаг болон хөрш зэргэлдээ бүс нутгийн эрчим хүчний найдвартай байдал нэмэгдэж, өвлийн оргил ачааллын үед ч тогтвортой хангамж бүрдэх боломжтой болно.", textEn:"Selenge province has secured its second major energy source, signing a deal on November 2, 2026, to build a 150 MW thermal power plant. With just two days to go until the opening of a 70 MW thermal power plant in the provincial centre, Sukhbaatar city, Governor N. Lkhagvadorj signed a public-private partnership agreement for the 150 MW plant in Mandal soum.\n\nThe project is an important step towards improving Selenge's energy supply and meeting the needs of local industry and businesses. Two major projects proceeding in the province at the same time are giving new momentum to the development of the energy sector.\n\nThe plant will be built under a public-private partnership, and once in operation it is expected to improve the reliability of energy supply in Selenge and neighbouring regions, providing stable supply even during winter peak loads."},
  {id:9, cat:"oron-nutag", region:"khuvsgul", title:"Арваннэгдүгээр сарын зудын урьдчилсан төлөв гарлаа: нутгийн 8 хувьд өвөлжилт нэн хүндрэлтэй", titleEn:"November dzud outlook: wintering conditions extremely difficult in 8 percent of the country", time:"3 цаг", timeEn:"3 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Mong winter1 - panoramio.jpg?width=760", text:"Арваннэгдүгээр сарын зудын урьдчилсан төлөвөөс харахад мал өвөлжилт нийт нутгийн 8 хувьд нэн их, 18 хувьд их, 33 хувьд дунд, 24 хувьд бага зэрэг хүндрэлтэй, харин 16 хувьд хүндрэлгүй байхаар байна. Тухайлбал, мал өвөлжилтийн байдал Баян-Өлгий, Увс, Ховд, Завхан, Өмнөговийн ихэнх, Говь-Алтай, Баянхонгор, Хөвсгөл, Архангай, Булган, Өвөрхангай, Дундговийн зарим нутгаар их болон нэн их хүндрэлтэй байх төлөвтэй байна.\n\nИймд мал өвөлжилт хүндэрч буй болон хүндэрч болзошгүй бүс нутгуудад онцгойлон анхаарч, цаг уурын байгууллагаас гаргадаг богино, дунд, урт хугацааны цаг агаарын урьдчилсан мэдээ болон тухай бүр шинэчлэн гаргах зудын урьдчилсан төлөвийн мэдээг тогтмол авч ашиглахыг зөвлөж байна.\n\nЦагийн байдал хүндэрсэн үед авч хэрэгжүүлэх арга хэмжээний урьдчилсан бэлтгэлийг бүрэн хангаж ажиллахыг малчид, орон нутгийн удирдлагуудад анхааруулж байна. Цаашид мал өвөлжилтийн байдал хүндэрч байгаа тухай бүр цаг агаарын бодит нөхцөл болон нарийвчлан боловсруулсан урьдчилсан мэдээгээр уг үнэлгээг тухай бүр шинэчлэн мэдээлнэ.", textEn:"The preliminary November dzud outlook shows livestock wintering conditions will be extremely difficult in 8 percent of the country, severely difficult in 18 percent, moderately difficult in 33 percent, slightly difficult in 24 percent, and without difficulty in 16 percent. Wintering is expected to be severe or extremely difficult in most of Bayan-Ulgii, Uvs, Khovd, Zavkhan and Umnugovi, and in parts of Govi-Altai, Bayankhongor, Khuvsgul, Arkhangai, Bulgan, Uvurkhangai and Dundgovi.\n\nHerders and local authorities in areas where wintering is difficult or may become difficult are advised to pay special attention and to regularly use short-, medium- and long-term weather forecasts from the meteorological service, as well as updated dzud outlooks.\n\nThey are also urged to fully prepare in advance the measures to be taken if conditions worsen. The assessment will be updated as wintering conditions change, based on actual weather and detailed forecasts."},
  {id:10, cat:"sport", title:"Т.Тулга дэлхийн аваргаас гурав дахь медалиа хүртэж, Монголын чөлөөт бөхийн 50 дахь хүрэл боллоо", titleEn:"T. Tulga wins third world medal, Mongolia's 50th freestyle wrestling bronze", time:"4 цаг", timeEn:"4 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/FreestyleWrestling3.jpg?width=760", text:"Казахстаны Астана хотод болж буй чөлөөт бөхийн дэлхийн аварга шалгаруулах тэмцээний эрэгтэйчүүдийн 70 кг-ын жинд гавьяат тамирчин Төмөр-Очирын Тулга хүрэл медаль хүртлээ. Тэрбээр хүрэл медалийн төлөөх барилдаанд Молдавын бөх Василе Диаконыг 9:0-ээр ялж, цэвэр ялалт байгуулсан байна.\n\nИнгэснээр Т.Тулга дэлхийн аварга шалгаруулах тэмцээнээс гурав дахь медалиа хүртлээ. Тэрбээр 2021 онд Норвегийн Осло хотод болсон дэлхийн аваргаас 65 кг-ын жинд хүрэл, 2025 онд Хорватын Загреб хотод болсон тэмцээнээс 70 кг-ын жинд мөнгөн медаль хүртэж байв. Мөн Т.Тулга дэлхийн аваргаас гурван медаль хүртсэн Монголын гурав дахь эрэгтэй бөх болжээ.\n\nТүүнчлэн түүний хүртсэн хүрэл медаль нь Монголын чөлөөт бөхийн тамирчдын дэлхийн аваргаас хүртсэн 50 дахь хүрэл медаль болж байна. «Астана-2026» тэмцээн аравдугаар сарын 24-нд эхэлж, долоо хоног үргэлжилсэн бөгөөд сүүлийн өдөр нь Монголын хоёр бөх дагах болон медалийн төлөө барилдсан байна.", textEn:"At the World Freestyle Wrestling Championships in Astana, Kazakhstan, Merited Athlete Tumur-Ochiryn Tulga won bronze in the men's 70 kg category. In the bronze-medal bout he beat Moldova's Vasile Diacon 9–0 in a clean victory.\n\nIt is Tulga's third medal at a world championship. He previously won bronze at 65 kg at the 2021 world championships in Oslo, Norway, and silver at 70 kg at the 2025 championships in Zagreb, Croatia. Tulga has now become the third Mongolian male wrestler to win three world championship medals.\n\nHis bronze is also the 50th bronze medal won by Mongolian freestyle wrestlers at world championships. The Astana 2026 championships began on October 24 and lasted a week, with two Mongolian wrestlers contesting repechage and medal bouts on the final day."},
  {id:11, cat:"sport", title:"«Мөрөөдлийн гоол-2026» тэмцээний шилдгүүд тодорлоо: Өвөрхангайн охид улсын аварга болов", titleEn:"Dream Goal 2026 winners decided as Uvurkhangai girls become national champions", time:"4 цаг", timeEn:"4 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Iranian Baluchi children playing beach soccer. South kerman 01.jpg?width=760", text:"Монголын хөлбөмбөгийн холбоо, Боловсролын яам, Гэр бүл, хөдөлмөр, нийгмийн хамгааллын яам болон бусад холбогдох байгууллагууд хамтран 21 аймаг, 9 дүүргийн сурагчдын дунд «Мөрөөдлийн гоол-2026» тэмцээний улсын аваргын шатыг зохион байгууллаа.\n\nТэмцээнд Говь-Алтай аймгийн ерөнхий боловсролын нэгдүгээр сургуулийн 6д ангийн сурагч ихрүүд болох Г.Орхонтуяа, Г.Ононтуяа нар багаараа амжилттай оролцон мөнгөн медаль хүртсэн байна. Мөн Г.Орхонтуяа шилдэг довтлогчоор шалгарчээ.\n\nТүүнчлэн Өвөрхангай аймгийн Арвайхээр сумын ерөнхий боловсролын хоёрдугаар сургуулийн тамирчид амжилттай наадаж, U15 насны охидын баг алтан медаль хүртэн улсын аварга болсон бол тус сургуулийн U15 насны хөвгүүдийн баг мөнгөн медаль, U13 насны хөвгүүдийн баг шагналт байр эзэлсэн байна. Ерөнхий боловсролын сургуулиудын дунд зохион байгуулагдсан тус тэмцээн нь сурагчдын спортоор хичээллэх сонирхлыг дэмжих, авьяаслаг залуу хөлбөмбөгчдийг нээн илрүүлэх зорилготой юм.", textEn:"The Mongolian Football Federation, the Ministry of Education, the Ministry of Family, Labour and Social Protection and other organisations jointly held the national stage of the Dream Goal 2026 tournament among school students from 21 provinces and 9 districts.\n\nTwins G. Orkhontuya and G. Onontuya, sixth-grade students at the first general education school in Govi-Altai province, won silver medals with their team, and G. Orkhontuya was named best striker.\n\nAthletes from the second general education school in Arvaikheer soum, Uvurkhangai province, also performed well: the U15 girls' team won gold and became national champions, the school's U15 boys' team took silver, and its U13 boys' team placed in the prizes. The tournament, held among general education schools, aims to encourage students to play sport and to discover talented young footballers."},
  {id:12, cat:"soyol", title:"Чех улс байгуулагдсаны 108 жилийн ойг Улаанбаатарт тэмдэглэлээ", titleEn:"108th anniversary of the founding of Czechoslovakia marked in Ulaanbaatar", time:"5 цаг", timeEn:"5 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Prague Old Town 2021 13.jpg?width=760", text:"Чехословак улс байгуулагдсаны 108 жилийн ойд зориулсан хүндэтгэлийн арга хэмжээг Монгол Улсад суух Чехийн Элчин сайдын яамнаас аравдугаар сарын 28-нд Улаанбаатарт зохион байгууллаа. Арга хэмжээ нь Чех, Монголын найрсаг харилцаа, хамтын ажиллагааг тэмдэглэх зорилготой байв.\n\nЧехословак улс 1918 онд байгуулагдсан бөгөөд Төв Европын түүхэнд чухал байр суурь эзэлдэг. Чех улс нь Монгол Улстай олон жилийн найрсаг харилцаатай бөгөөд боловсрол, соёл, эдийн засгийн салбарт хамтран ажиллаж ирсэн түүхтэй.\n\nОйн арга хэмжээнд дипломат төлөөлөгчид, Чехэд суралцаж, ажиллаж байсан монгол иргэд, соёл, боловсролын салбарын төлөөлөгчид оролцсон байна. Ийм арга хэмжээ нь хоёр орны ард түмний харилцан ойлголцол, найрамдлыг бэхжүүлэхэд чухал үүрэг гүйцэтгэдэг гэж зохион байгуулагчид онцолж байна.", textEn:"An event marking the 108th anniversary of the founding of Czechoslovakia was organised in Ulaanbaatar on October 28 by the Embassy of the Czech Republic in Mongolia. The event celebrated the friendly relations and cooperation between the Czech Republic and Mongolia.\n\nCzechoslovakia was founded in 1918 and holds an important place in Central European history. The Czech Republic has long-standing friendly relations with Mongolia, with a history of cooperation in education, culture and the economy.\n\nDiplomats, Mongolian citizens who have studied and worked in the Czech Republic, and representatives of the cultural and education sectors took part in the anniversary event. The organisers stressed that such events play an important role in strengthening mutual understanding and friendship between the peoples of the two countries."},
  {id:13, cat:"niigem", title:"Цэргийн төв эмнэлгийг түүхт 105 жилийн ойгоор нь Сүхбаатарын одонгоор шагналаа", titleEn:"Central Military Hospital awarded Sukhbaatar Order on its 105th anniversary", time:"5 цаг", timeEn:"5 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Exterior of Makoanyane Military Hospital, Maseru, Lesotho.jpg?width=760", text:"Цэргийн төв эмнэлгийн түүхт 105 жилийн ой тохиож, ойг тохиолдуулан тус эмнэлгийг Сүхбаатарын одонгоор шагналаа. Энэ шагнал нь эмнэлгийн хамт олны олон жилийн хөдөлмөр, цэргийн алба хаагчид болон иргэдэд үзүүлсэн эрүүл мэндийн тусламж үйлчилгээний чанарыг үнэлсэн хэрэг юм.\n\nЦэргийн төв эмнэлэг нь Монгол Улсын зэвсэгт хүчний эрүүл мэндийн салбарын гол байгууллагын нэг бөгөөд цэргийн алба хаагчид, тэдний гэр бүл, ахмад дайчдад эмнэлгийн тусламж үзүүлж ирсэн урт түүхтэй. Тус эмнэлэг нь оношилгоо, эмчилгээ, мэс заслын чиглэлээр мэргэшсэн эмч, эмнэлгийн ажилтнуудаараа алдартай.\n\n105 жилийн ойн хүрээнд эмнэлгийн түүх, хөгжлийн замналыг дурсан санаж, ирээдүйн зорилтоо тодорхойлсон арга хэмжээнүүд зохион байгуулагдсан байна. Сүхбаатарын одон нь Монгол Улсын төрийн дээд шагналуудын нэг бөгөөд тус эмнэлгийн хамт олны хувьд нэр төртэй үнэлгээ болж байна.", textEn:"The Central Military Hospital has marked its historic 105th anniversary and has been awarded the Sukhbaatar Order on the occasion. The award recognises the hospital staff's many years of work and the quality of medical care provided to military personnel and citizens.\n\nThe Central Military Hospital is one of the main institutions of the Mongolian Armed Forces' health sector, with a long history of providing medical care to service members, their families and veterans. It is known for its specialised doctors and medical staff in diagnostics, treatment and surgery.\n\nEvents marking the 105th anniversary recalled the hospital's history and development and set out its future goals. The Sukhbaatar Order is one of Mongolia's highest state awards and is a prestigious recognition for the hospital's staff."},
  {id:14, cat:"tech", title:"Турк улс 15 хүртэлх насны хүүхдүүдийг олон нийтийн сүлжээ ашиглахыг хориглож эхэллээ", titleEn:"Turkey begins banning social media use for children under 15", time:"6 цаг", timeEn:"6 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Child plays on smartphone while sitting on a couch during afternoon at home in cozy living room setting.jpg?width=760", text:"Турк улсад 15 нас хүрээгүй хүүхдүүд олон нийт сүлжээ ашиглахыг хориглосон шийдвэр 2026 оны арваннэгдүгээр сарын 1-ний өдрөөс эхлэн хүчин төгөлдөр болжээ. Энэ шийдвэр нь хүүхдийн эрүүл мэнд, аюулгүй байдал, хувийн мэдээллийг хамгаалах зорилготой юм.\n\nОлон нийтийн сүлжээний хэрэглээ хүүхдийн сэтгэцийн эрүүл мэнд, суралцах үйл явц, нийгмийн харилцаанд үзүүлэх нөлөө нь дэлхий даяар хэлэлцүүлгийн сэдэв болж байна. Туркийн эрх баригчид насны хязгаар тогтоох замаар хүүхдүүдийг сүлжээний сөрөг нөлөөнөөс хамгаалахыг зорьж байна.\n\nХоригийг хэрэгжүүлэх механизм, платформуудын үүрэг хариуцлага, эцэг эхчүүдийн хяналтын асуудал нь цаашид анхаарлын төвд байх болно. Бусад улс орнууд ч хүүхдийн сүлжээний хэрэглээг зохицуулах чиглэлээр ижил төстэй арга хэмжээ авч байгаа бөгөөд Туркийн туршлага олон улсын хэлэлцүүлэгт нэмэлт жишээ болж байна.", textEn:"A decision banning children under 15 in Turkey from using social media came into force on November 1, 2026. The measure aims to protect children's health, safety and personal data.\n\nThe impact of social media use on children's mental health, learning and social relationships is a subject of debate worldwide. The Turkish authorities aim to protect children from the negative effects of social media by setting an age limit.\n\nThe enforcement mechanism, the responsibilities of platforms and parental supervision will remain in focus. Other countries are also taking similar steps to regulate children's social media use, and Turkey's experience adds another example to the international debate."},
  {id:15, cat:"delhii", title:"АНУ-д дунд хугацааны сонгууль өнөөдөр болж, Конгрессын хяналт шийдэгдэнэ", titleEn:"US midterm elections held today as control of Congress is decided", time:"6 цаг", timeEn:"6 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Capitol at Dusk 2.jpg?width=760", text:"Америкийн Нэгдсэн Улсад 2026 оны дунд хугацааны сонгууль арваннэгдүгээр сарын 3-нд болж байна. Сонгогчид Төлөөлөгчдийн танхимын гишүүд болон хэд хэдэн сенатчийг сонгох бөгөөд үр дүн нь Ерөнхийлөгч Дональд Трампын бүрэн эрхийн үлдсэн хоёр жилийн хугацаанд Конгрессыг аль нам хянахыг шийдвэрлэнэ.\n\nДунд хугацааны сонгууль нь ерөнхийлөгчийн бүрэн эрхийн дунд үед болдог тул засаг захиргааны бодлогод сонгогчдын өгч буй үнэлгээ гэж ихэвчлэн үздэг. Энэ удаагийн сонгуульд эдийн засаг, амьжиргааны өртөг, цагаачлал зэрэг асуудлууд сонгогчдын шийдвэрт голлон нөлөөлж байна гэж ажиглагчид үзэж байна.\n\nТрампын Бүгд найрамдах нам Конгресс дахь олонхоо хадгалж чадах эсэх, эсвэл Ардчилсан нам хяналтыг авах эсэх нь дараагийн хоёр жилийн хууль тогтоох үйл явц, төсөв, гадаад бодлогын чиглэлд шууд нөлөөлнө. Сонгуулийн дүн гарахын хэрээр муж бүрийн санал тооллогын явц анхаарлын төвд байх болно.", textEn:"The United States is holding its 2026 midterm elections on November 3. Voters will elect members of the House of Representatives and a number of senators, and the results will decide which party controls Congress for the remaining two years of President Donald Trump's term.\n\nMidterm elections, held midway through a president's term, are often seen as a verdict by voters on the administration's policies. Observers say the economy, the cost of living and immigration are among the main issues shaping voters' decisions this time.\n\nWhether Trump's Republican Party can hold its majorities in Congress or the Democratic Party takes control will directly affect lawmaking, the budget and foreign policy over the next two years. As results come in, vote counting in each state will be closely watched."},
  {id:16, cat:"delhii", title:"Израилын сөрөг хүчний удирдагчид Айзенкотыг засгийн газар байгуулахад дэмжихээр тохиролцов", titleEn:"Israeli opposition leaders agree to back Eisenkot to form government", time:"7 цаг", timeEn:"7 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Knesset front side - 2022.jpg?width=760", text:"Израилын сөрөг хүчний удирдагчид Гади Айзенкотыг засгийн газар байгуулахад дэмжихээр тохиролцлоо. «Йисраэль Бейтену» намын дарга Авигдор Либерман даваа гарагт хийсэн хэвлэлийн бага хурлын үеэр өөрийн нам нь Айзенкотыг засгийн газар байгуулахад санал болгож, «Б'Яхад» намын Яир Лапидыг Кнессетийн даргаар дэмжихээ мэдэгдсэн байна.\n\nҮүнээс өмнө Ерөнхий сайд асан Нафтали Беннетийн «Б'Яхад» фракц Айзенкотыг дэмжихээ мэдэгдсэн бөгөөд Айзенкот, Беннет, Либерман, Яир Голан нар мягмар гарагт анхны хамтарсан уулзалтаа хийхээр төлөвлөж байна. Сөрөг хүчний эвсэл 120 суудалтай Кнессетэд 48 суудал авсан бол Ерөнхий сайд Биньямин Нетаньяхугийн эвсэл 53 суудал авч, засгийн газар байгуулахад шаардлагатай 61 суудалд хүрч чадаагүй байна.\n\nАраб намуудын 19 суудлыг нэмбэл Айзенкотыг дэмжих санал 67-д хүрэх төлөвтэй байгаа ч Либерман Нетаньяхутай хамтарсан засгийн газар байгуулах, Араб намуудаас хамааралтай цөөнхийн засгийн газар байгуулахыг үгүйсгэж, дахин сонгууль болох нь «маш муу сонголт» гэж мэдэгдсэн байна. Ерөнхийлөгч Исаак Херцог албан ёсны дүнг арваннэгдүгээр сарын 4-нд хүлээн авч, дараа нь намуудтай зөвлөлдөж, засгийн газар байгуулах үүргийг өгөх юм.", textEn:"Israel's opposition leaders have agreed to back Gadi Eisenkot to form a government. Yisrael Beytenu leader Avigdor Liberman said at a press briefing on Monday that his party would recommend Eisenkot to form the next government and support B'Yachad's Yair Lapid for Knesset speaker.\n\nFormer prime minister Naftali Bennett's B'Yachad faction had already announced its backing for Eisenkot, and Eisenkot, Bennett, Liberman and Yair Golan plan their first joint meeting on Tuesday. The opposition bloc won 48 seats in the 120-seat Knesset, while Prime Minister Benjamin Netanyahu's bloc won 53, short of the 61 needed to govern.\n\nWith the Arab parties' 19 seats, support for Eisenkot could reach 67, although Liberman has ruled out a unity government with Netanyahu or a minority government reliant on the Arab parties, calling another election a very bad option. President Isaac Herzog will receive the official results on November 4 and then consult the parties before tasking a leader with forming a government."},
  {id:17, cat:"delhii", title:"Японы Шима орчимд 6.0 магнитудын газар хөдлөлт болов", titleEn:"Magnitude 6.0 earthquake hits Japan's Shima area", time:"7 цаг", timeEn:"7 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/2004 Chuetsu earthquake Damaged building, Nagaoka 01.jpg?width=760", text:"Японы Шима орчимд 6.0 магнитудын газар хөдлөлт болсон гэж мэдээллээ. Газар хөдлөлт нь Япон улсын газар хөдлөлтөд өртөмтгий бүс нутагт болсон бөгөөд эрх баригчид нөхцөл байдлыг хянаж, хохирлын талаарх мэдээллийг цуглуулж байна.\n\nЯпон нь Номхон далайн галт цагираг дээр байрладаг тул газар хөдлөлт байнга тохиолддог улс бөгөөд барилга байгууламж, дэд бүтцийг газар хөдлөлтөд тэсвэртэй байхаар барьдаг уламжлалтай. Иргэдэд газар хөдлөлтийн үед аюулгүй байдлын зааврыг дагахыг зөвлөж байна.\n\nОдоогийн байдлаар хохирлын хэмжээ, цунамийн аюулын талаарх дэлгэрэнгүй мэдээлэл гараагүй байгаа бөгөөд эрх баригчид нэмэлт мэдээллийг тухай бүр нь мэдээлэх төлөвтэй байна. Бүс нутгийн иргэд болон жуулчдад албан ёсны анхааруулгыг дагахыг зөвлөж байна.", textEn:"A magnitude 6.0 earthquake has hit Japan's Shima area, according to reports. The earthquake struck a seismically active region of Japan, and authorities are monitoring the situation and gathering information about any damage.\n\nJapan lies on the Pacific Ring of Fire and experiences earthquakes frequently, and its buildings and infrastructure are traditionally built to be earthquake-resistant. Citizens are advised to follow safety guidance during earthquakes.\n\nNo detailed information about the extent of damage or any tsunami threat has yet been released, and authorities are expected to provide updates as they become available. Residents and visitors in the region are advised to follow official warnings."},
  {id:18, cat:"delhii", title:"Энэтхэгт Мурасу хар салхи хүчээ авч, Одиша муж нүүлгэн шилжүүлэлтийг эрчимжүүллээ", titleEn:"Cyclone Murasu strengthens as Odisha speeds up evacuations in India", time:"8 цаг", timeEn:"8 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Tropical Cyclone Batsirai approaching Madagascar NOAA-20 satellite image 2 February 2022.png?width=760", text:"Энэтхэгт Мурасу хар салхи хүчээ авч байгаа тул Одиша муж эмзэг бүс нутгаас хүмүүсийг нүүлгэн шилжүүлэх ажлыг эрчимжүүлж байна. Өмнөх Арнаб хар салхи зургаан хүний амь насыг авч одсон бөгөөд эрх баригчид шинэ шуурганы өмнө урьдчилан сэргийлэх арга хэмжээг чангатгаж байна.\n\nХар салхины зам, хүч чадлын талаарх урьдчилсан мэдээг цаг уурын алба тогтмол шинэчилж, эрэг орчмын бүс нутгийн иргэдэд аюулгүй газарт шилжих, нөөц бэлтгэх зөвлөмж өгч байна. Зарим нислэг цуцлагдаж, мужууд онцгой байдлын бэлтгэлээ хангаж байна.\n\nЭнэтхэгийн зүүн эрэг нь хар салхинд байнга өртдөг бүс бөгөөд жил бүр борооны улирлын дараа шуурганы аюул нэмэгддэг. Эрх баригчид иргэдийг албан ёсны мэдээллийг дагаж, шаардлагагүй зорчих явдлаас зайлсхийхыг уриалж байна.", textEn:"Cyclone Murasu is strengthening in India, and Odisha state is speeding up evacuations from vulnerable areas. The earlier Cyclone Arnab left six people dead, and authorities are tightening preventive measures ahead of the new storm.\n\nThe meteorological service is regularly updating forecasts of the cyclone's path and strength, advising coastal residents to move to safe places and prepare supplies. Some flights have been cancelled and states are making emergency preparations.\n\nIndia's east coast is regularly hit by cyclones, and storm risk rises each year after the rainy season. Authorities are urging citizens to follow official information and avoid unnecessary travel."},
  {id:19, cat:"delhii", title:"Украины хамгийн урт гал зогсоох 6 хоногийн дараа дуусч, талууд бие биенээ буруутгав", titleEn:"Ukraine's longest ceasefire ends after 6 days as sides blame each other", time:"8 цаг", timeEn:"8 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Day of the Armed Forces of Ukraine 2023 Mykola Oleshchuk.jpg?width=760", text:"Украины дайн дахь хамгийн урт гал зогсоох хугацаа Херсон мужид 6 хоног үргэлжилсний дараа дуусчээ. Украин улс Оросыг Олешкийн гал зогсоох хугацааг дахин зэвсэглэхэд ашигласан гэж мэдэгдсэн бол Москва Киевыг мөн адил зүйл хийсэн гэж үзэж байна.\n\nГал зогсоох нь Олешки хотоос иргэдийг нүүлгэн шилжүүлэх хүмүүнлэгийн ажиллагааг явуулах боломжийг олгосон бөгөөд 700 гаруй хүн Орос, Беларусиар дамжин Украин хяналттай нутагт хүрсэн гэж Ерөнхийлөгч Володимир Зеленский мэдэгдсэн байна. Гэвч гал зогсоох дууссаны дараа хоёр тал бие биенээ гал зогсоох нөхцөлийг зөрчсөн гэж буруутгаж байна.\n\nЭнэ явдал нь богино хугацааны гал зогсоох ч тогтвортой энх тайванд хүрэхэд хэр хэцүү болохыг харуулж байна. Олон улсын зуучлагчид талуудыг дахин хэлэлцээний ширээнд суухыг уриалж байгаа ч цэргийн ажиллагаа үргэлжилж, энгийн иргэдийн аюулгүй байдал эрсдэлд хэвээр байна.", textEn:"The longest ceasefire of the Ukraine war has ended after lasting six days in Kherson region. Ukraine says Russia used the Oleshky truce to rearm, while Moscow assumes Kyiv did the same.\n\nThe ceasefire allowed a humanitarian operation to evacuate civilians from the town of Oleshky, with more than 700 people reaching Ukrainian-controlled territory via Russia and Belarus, President Volodymyr Zelenskyy said. After it ended, both sides accused each other of violating its terms.\n\nThe episode shows how difficult it is for even a short ceasefire to lead to lasting peace. International mediators are urging the sides back to the negotiating table, but military operations continue and civilians remain at risk."}
];
function aTitle(a){ return LANG === "en" ? (a.titleEn || a.title) : a.title; }
function aTime(a){ return LANG === "en" ? (a.timeEn || a.time) : a.time; }
function aText(a){ if(a.text) return LANG === "en" ? (a.textEn || a.text) : a.text; return SAMPLE_TEXT[LANG][a.id === 1 ? "long" : "short"]; }
function aRegion(a){ return a.region ? ((REGIONS[LANG] && REGIONS[LANG][a.region]) || a.region) : ""; }

// ===== Ханш · Цаг агаар (өдөр бүр шинэчлэгдэнэ; цаг агаарыг Open-Meteo-гоос шууд татна) =====
const RATES = {date:"2026-11-03", items:[
  {code:"USD", mnt:3598.99, chg:-1}, {code:"EUR", mnt:4029.61, chg:1}, {code:"JPY", mnt:22.81, chg:-1},
  {code:"CNY", mnt:541.54, chg:1}, {code:"KRW", mnt:2.68, chg:-1}, {code:"RUB", mnt:44.47, chg:-1}, {code:"GBP", mnt:4828.23, chg:1}
]};
let WEATHER = [
  {city:"Улаанбаатар", cityEn:"Ulaanbaatar", lat:47.9212, lon:106.9186, tz:"Asia/Ulaanbaatar", temp:-4, code:2},
  {city:"Токио", cityEn:"Tokyo", lat:35.6762, lon:139.6503, tz:"Asia/Tokyo", temp:11, code:0},
  {city:"Сөүл", cityEn:"Seoul", lat:37.5665, lon:126.978, tz:"Asia/Seoul", temp:8, code:2},
  {city:"Бээжин", cityEn:"Beijing", lat:39.9042, lon:116.4074, tz:"Asia/Shanghai", temp:6, code:0},
  {city:"Москва", cityEn:"Moscow", lat:55.7558, lon:37.6173, tz:"Europe/Moscow", temp:0, code:45}
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
