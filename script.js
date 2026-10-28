// ===== Хэл (MN / EN) =====
let LANG = localStorage.getItem("tugee-lang") || "mn";

const UI = {
  mn: {
    nav_home: "ЭХЛЭЛ", nav_uls: "УЛС ТӨР", nav_niigem: "НИЙГЭМ", nav_ediin: "ЭДИЙН ЗАСАГ",
    nav_delhii: "ДЭЛХИЙ", nav_sport: "СПОРТ", nav_soyol: "СОЁЛ УРЛАГ", nav_tech: "ТЕХНОЛОГИ", nav_video: "ВИДЕО",
    trend_label: "ТРЭНД:", search_ph: "Мэдээ хайх… (гарчиг бичээд Enter дарна уу)", search_btn: "Хайх",
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
    trend_label: "TREND:", search_ph: "Search news… (type a headline and press Enter)", search_btn: "Search",
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

// ===== Бодит мэдээнүүд (2026-10-28) — өдөр бүр шинэчлэгдэнэ =====
const ARTICLES = [
  {id:1, cat:"oron-nutag", region:"dornod", title:"Дорнод аймагт гарсан их хээрийн түймэр 12 хоногийн дараа бүрэн унтарлаа", titleEn:"Steppe fire in Dornod extinguished after 12 days; Japan to help with restoration", time:"1 цагийн өмнө", timeEn:"1 hour ago", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Big_fire_burning_big_fire_flames.jpg?width=1000", text:"Аравдугаар сарын 8-нд Дорнод аймгийн Нөмрөгийн дархан цаазат газрын орчимд гарсан хээрийн түймэр 12 хоногийн дараа бүрэн унтарч, хүний амь нас хохироогүй байна.\n\nТүймэр Японы хөрөнгө оруулалттай компанийн ажилтнуудын автомашины доод хэсгээс гарсан гэх урьдчилсан мэдээлэл байгаа бөгөөд шалгалт үргэлжилж байна. Японы тал хохирлын цар хүрээг нухацтай хүлээн авч, JICA-ийн ойн хамгааллын мэргэжилтнүүдийг илгээн, нөхөн сэргээлтийн ажилд Монголын Засгийн газартай хамтран ажиллахаа мэдэгдлээ.", textEn:"A steppe fire that broke out on October 8 near the Nomrog strictly protected area in Dornod province was fully extinguished after 12 days, with no human casualties.\n\nPreliminary reports say the fire spread from beneath a vehicle of employees of a Japanese-invested company, and an investigation is under way. Japan says it takes the scale of the damage seriously and will dispatch JICA forestry experts and work with the Mongolian government on restoring the affected land."},
  {id:2, cat:"uls-tor", title:"Ерөнхийлөгч У.Хүрэлсүхийн Беларусь дахь айлчлалаар 50 сая ам.долларын гэрээ, санамж бичгүүд байгуулагдлаа", titleEn:"President Khurelsukh's visit to Belarus yields $50 million in deals and memoranda", time:"2 цагийн өмнө", timeEn:"2 hours ago", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Minsk_National_Library_-_views_01.jpg?width=760", text:"Монгол Улсын Ерөнхийлөгч Ухнаагийн Хүрэлсүхийн Бүгд Найрамдах Беларусь Улсад хийж буй төрийн айлчлалын хүрээнд «Беларусь-Монголын бизнес форум» аравдугаар сарын 26-нд Минск хотноо боллоо.\n\nФорумын үеэр хоёр улсын бизнес эрхлэгчид нийт 50 сая ам.долларын үнийн дүн бүхий гэрээ, санамж бичгүүд байгуулсан байна. Талууд худалдаа, аж үйлдвэр, хөдөө аж ахуй, тээвэр логистикийн салбарын хамтын ажиллагааг өргөжүүлэхээр санал солилцжээ.", textEn:"During President Ukhnaagiin Khurelsukh's state visit to Belarus, the Belarus-Mongolia Business Forum was held in Minsk on October 26.\n\nBusinesses from the two countries signed contracts and memoranda worth a total of $50 million. The sides discussed expanding cooperation in trade, industry, agriculture, transport and logistics."},
  {id:3, cat:"uls-tor", title:"УИХ-ын чуулганы нэгдсэн хуралдаан энэ пүрэв, баасан гарагт болно", titleEn:"Parliament plenary sessions scheduled for Thursday and Friday", time:"3 цагийн өмнө", timeEn:"3 hours ago", img:"https://commons.wikimedia.org/wiki/Special:FilePath/2024-10-18_Ulaanbaatar%2C_Government_Palace.jpg?width=760", text:"Энэ долоо хоногт УИХ дахь намын бүлгүүд болон Байнгын хороод хуралдаж, аравдугаар сарын 29, 30-нд чуулганы нэгдсэн хуралдаан болохоор товлогдоод байна.\n\nМөн өнөөдөр Засгийн газрын ээлжит хуралдаан Төрийн ордонд болно. Харин аравдугаар сарын 29-нд Монгол Улсын нийслэл хотын өдрийг тэмдэглэнэ.", textEn:"Parliamentary party groups and standing committees are meeting this week, with plenary sessions scheduled for October 29 and 30.\n\nThe government's regular meeting takes place today at the State Palace, and October 29 marks Capital City Day."},
  {id:4, cat:"delhii", title:"Израилд 2023 оны халдлагаас хойшхи анхны парламентын сонгууль болж, өрсөлдөөн ширүүн байна", titleEn:"Israel holds first election since the 2023 attack in a tight race", time:"4 цагийн өмнө", timeEn:"4 hours ago", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Reuven_Rivlin_and_his_wife_voting_on_the_municipal_elections_in_Israel%2C_Jerusalem%2C_October_2018_%288679%29.jpg?width=760", text:"Израилын иргэд мягмар гарагт 2023 оны аравдугаар сарын 7-ны ХАМАС-ын халдлагаас хойшхи анхны улсын сонгуульд саналаа өглөө. Санал хураалтад оролцогчдын идэвх сүүлийн хэдэн арван жилийн хамгийн өндөр түвшинд хүрсэн байна.\n\nУрьдчилсан таамгаар Ерөнхий сайд Биньямин Нетаньяхугийн эвсэл 50 орчим, сөрөг хүчний эвсэл 54 орчим суудал авах төлөвтэй бөгөөд олонх болоход 120 суудлаас 61 нь шаардлагатай. Албан ёсны дүн арваннэгдүгээр сарын 4-нд зарлагдана.", textEn:"Israelis voted on Tuesday in the country's first national election since the Hamas attack of October 7, 2023, with turnout among the highest in decades.\n\nPre-poll projections put Prime Minister Benjamin Netanyahu's bloc at around 50 seats against about 54 for the opposition bloc, with 61 of 120 Knesset seats needed for a majority. Official results will be published on November 4."},
  {id:5, cat:"ediin-zasag", title:"Монгол Улс он гарснаас хойш 34 сая литр шар айраг импортолжээ", titleEn:"Mongolia imported 34 million liters of beer in the first nine months of 2026", time:"5 цагийн өмнө", timeEn:"5 hours ago", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Cheers%21_Dublin_Style_%287429748276%29.jpg?width=760", text:"Улсын хэмжээнд 2026 оны эхний есөн сарын байдлаар 34 сая литр шар айраг импортолсон нь өмнөх оны мөн үеэс 15.1 хувиар буурсан үзүүлэлт юм.\n\nМөн 2.1 сая литр дарс, 3.2 сая литр архи, виски зэрэг согтууруулах ундаа импортолсон бөгөөд дарсны импорт хэмжээ болон үнийн дүнгийн хувьд буурчээ.", textEn:"Mongolia imported 34 million liters of beer in the first nine months of 2026, down 15.1 percent from the same period a year earlier.\n\nImports also included 2.1 million liters of wine and 3.2 million liters of spirits, with wine imports falling both in volume and value."},
  {id:6, cat:"niigem", title:"Онцгой байдлын алба хаагчдыг эрүүл мэндийн хугацаат үзлэгт хамруулж байна", titleEn:"Emergency service staff undergo scheduled health screenings", time:"6 цагийн өмнө", timeEn:"6 hours ago", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Doctor_takes_blood_pressure.jpg?width=760", text:"Онцгой байдлын ерөнхий газрын ажлын хэсэг Говийн бүсийн Говьсүмбэр, Дорноговь, Дундговь, Өмнөговь аймгийн 200 гаруй алба хаагч, 30 ахмад ажилтныг эрүүл мэндийн үзлэг, шинжилгээнд хамруулаад байна.\n\nАШУҮИС-ийн нарийн мэргэжлийн эмч нарын баг оролцож буй үзлэг арваннэгдүгээр сарын 4 хүртэл үргэлжилнэ.", textEn:"A National Emergency Management Agency team has examined more than 200 staff and 30 retired employees in the Gobi-region provinces of Govisumber, Dornogovi, Dundgovi and Umnugovi.\n\nThe screenings, carried out with specialist doctors, run until November 4."},
  {id:7, cat:"delhii", title:"Конго улсад Эбола вирусийн халдварын тохиолдол 10,000 давлаа", titleEn:"Ebola cases in Congo pass 10,000 as response intensifies", time:"6 цагийн өмнө", timeEn:"6 hours ago", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Ebola_virus_virion.jpg?width=760", text:"Бүгд Найрамдах Ардчилсан Конго Улсад дэгдсэн Эбола вирусийн халдварын батлагдсан тохиолдол 10,000 давж, эрх баригчид хөрш Африкийн орнуудад тархахаас сэргийлэн тэмцлээ эрчимжүүлж байна.", textEn:"The Ebola outbreak in the Democratic Republic of Congo has topped 10,000 cases, and authorities are racing to slow its spread to other African countries."},
  {id:8, cat:"delhii", title:"«Арнаб» хар салхи Энэтхэгийн зүүн эрэгт хүрч, сургуулиуд хаагдлаа", titleEn:"Cyclone Arnab makes landfall on India's east coast; schools closed", time:"7 цагийн өмнө", timeEn:"7 hours ago", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Severe_Tropical_Cyclone_Gabrielle_%28MODIS%29.jpg?width=760", text:"«Арнаб» хар салхи Энэтхэгийн Андра Прадеш мужийн эрэгт Янам хотын орчимд хүрч, салхины хурд цагт 150 км хүртэл ширүүсэх төлөвтэй байна.\n\nЭрх баригчид сургуулиудыг хааж, далайн загас агнуурыг зогсоон, аврах багуудыг бэлэн байдалд оруулсан бөгөөд хөрш Непал улсад ч өндөржүүлсэн бэлэн байдал зарлажээ.", textEn:"Cyclone Arnab reached the Andhra Pradesh coast near Yanam, with wind gusts forecast up to 150 km/h.\n\nAuthorities closed schools, suspended sea fishing and put rescue teams on standby, while neighboring Nepal also went on high alert."},
  {id:9, cat:"delhii", title:"Бразилын Ерөнхийлөгч Лула дахин сонгогдлоо", titleEn:"Brazil's President Lula reelected", time:"8 цагийн өмнө", timeEn:"8 hours ago", img:"https://commons.wikimedia.org/wiki/Special:FilePath/President_Biden_with_President_Lula_da_Silva_2023.jpg?width=760", text:"Бразилын Ерөнхийлөгч Луиз Инасиу Лула да Силва дахин сонгогдсонд байгаль хамгаалагчид, уугуул иргэдийн бүлгэм болон уур амьсгалын эрдэмтэд баяр хүргэж байна.\n\nТүүний дахин сонгогдол нь байгаль хамгааллын бодлого нь цаашид ч үргэлжлэх хүлээлтийг бий болгож байна.", textEn:"Environmentalists, Indigenous groups and climate scientists are celebrating the reelection of Brazil's President Luiz Inácio Lula da Silva.\n\nHis reelection is expected to bring a continuation of his environmental protection policies."},
  {id:10, cat:"delhii", title:"Их 20-ийн Гадаад хэргийн сайд нар Атлантад уулзана", titleEn:"G20 foreign ministers to meet in Atlanta", time:"9 цагийн өмнө", timeEn:"9 hours ago", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Atlanta_skyline_from_Jackson_Street_Bridge_2020.jpg?width=760", text:"АНУ-ын Төрийн нарийн бичгийн дарга Марко Рубио аравдугаар сарын 30, 31-нд Атланта хотноо Их 20 (G20)-ийн Гадаад хэргийн сайд нарын уулзалтыг зохион байгуулна.\n\nМөн Энэтхэг улс 2023 оноос хойш анх удаа Пакистаны сайдыг арваннэгдүгээр сард болох ШХАБ-ын соёл иргэншлийн яриа хэлэлцээнд урьсан байна.", textEn:"U.S. Secretary of State Marco Rubio will host the G20 foreign ministers' meeting in Atlanta on October 30-31.\n\nSeparately, India has invited a Pakistani minister to the inaugural SCO Civilisational Dialogue in November, the first such invitation since 2023."},
  {id:11, cat:"delhii", title:"Азийн хөрөнгийн зах зээл Уолл Стритийн өсөлтийг дагав", titleEn:"Asian stocks advance following Wall Street's AI-led rally", time:"10 цагийн өмнө", timeEn:"10 hours ago", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Frankfurt_Stock_Exchange_%28Ank_Kumar%29_05.jpg?width=760", text:"Уолл Стритэд хиймэл оюун ухааны салбарын хувьцаа өссөний дараа Азийн ихэнх хөрөнгийн зах зээл мягмар гарагт өсөлттэй хаагдлаа.\n\nХөрөнгө оруулагчид томоохон компаниудын санхүүгийн тайлан болон төв банкуудын шийдвэрийг хүлээж байна.", textEn:"Asian stocks were mostly higher on Tuesday after an AI-led rally on Wall Street.\n\nU.S. futures also edged higher as investors awaited major corporate earnings and central bank decisions."},
  {id:12, cat:"sport", title:"«Завхан 2026» спортын их наадам Буянт-Ухаа ордонд болно", titleEn:"'Zavkhan 2026' sports games to be held at Buyant-Ukhaa Palace", time:"Өчигдөр", timeEn:"Yesterday", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Mongolian_Naadam_Wrestlers_-_2010.jpg?width=760", text:"Завхан аймгийн нутгийн зөвлөлөөс зохион байгуулж буй «Завхан 2026» спортын хоёрдугаар их наадам аравдугаар сарын 30-наас арваннэгдүгээр сарын 1-нд Буянт-Ухаа спортын ордонд болно.", textEn:"The second 'Zavkhan 2026' sports games, organized by the Zavkhan province local council, will be held from October 30 to November 1 at the Buyant-Ukhaa Sports Palace."},
  {id:13, cat:"sport", title:"ПСЖ Лионыг 2:0-ээр хожиж, Францын лигийг тэргүүллээ", titleEn:"PSG beat Lyon 2-0 to move top of Ligue 1", time:"Өчигдөр", timeEn:"Yesterday", img:"https://commons.wikimedia.org/wiki/Special:FilePath/LFP_-_Barcelona_vs_Mallorca_pre-match_-_Oct_3rd_2010.jpg?width=760", text:"Францын Лиг 1-ийн тоглолтод «Пари Сен-Жермен» баг «Лион»-ыг 2:0-ээр хожиж, лигийн хүснэгтийг тэргүүлж эхэллээ.\n\nХоёр гоолыг хоёуланг нь хоёрдугаар хагаст сэлгээгээр орж ирсэн тоглогчид оруулсан байна.", textEn:"Paris Saint-Germain beat Lyon 2-0 at the Parc des Princes, with both goals scored by second-half substitutes, moving a point clear at the top of Ligue 1."},
  {id:14, cat:"soyol", title:"Монгол циркийн 85 жилийн ойд зориулсан «Браво цирк» тоглолт болно", titleEn:"'Bravo Circus' show marks 85 years of Mongolian circus", time:"Өчигдөр", timeEn:"Yesterday", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Aladdin_Shrine_Circus_performance_with_the_Hernandez_Troupe_-_DPLA_-_7913d35028051a216b91d9aef428fe6a.jpg?width=760", text:"Монгол циркийн 85 жилийн ойд зориулсан «Браво цирк» тоглолт аравдугаар сарын 31, арваннэгдүгээр сарын 1-нд Монгол бөхийн өргөөнд болно.", textEn:"The 'Bravo Circus' performance celebrating the 85th anniversary of the Mongolian circus will be held on October 31 and November 1 at the Mongolian Wrestling Palace."},
  {id:15, cat:"soyol", title:"Рэппер BLU анхны «Divine» цомгийнхоо танилцуулгыг хийнэ", titleEn:"Rapper BLU to host listening party for debut album 'Divine'", time:"Өчигдөр", timeEn:"Yesterday", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Singer_In_Concert_%28Unsplash%29.jpg?width=760", text:"Шинэ үеийн артист BLU бие даасан анхны «Divine» цомгийнхоо сонсогчдын үдэшлэгийг арваннэгдүгээр сарын 28-нд «MPM Event Hall»-д зохион байгуулахаар болжээ.\n\nҮдэшлэгийн үеэр цомгийн шинэ дуунуудыг анх удаа сонсох боломжтой бөгөөд оролцох уран бүтээлчдийн нэрсийг удахгүй зарлах аж.", textEn:"Mongolian artist BLU will hold a listening party for his first solo album 'Divine' on November 28 at MPM Event Hall.\n\nFans will hear the new songs for the first time, and the lineup of guest artists will be announced soon."},
  {id:16, cat:"tech", title:"АНУ-д цагдаагийн хиймэл оюуны систем хууль зөрчөөгүй жолоочдыг «сэжигтэй» гэж тэмдэглэж байна", titleEn:"ACLU warns police AI is flagging drivers who broke no law", time:"Өчигдөр", timeEn:"Yesterday", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Traffic_Lights_And_Surveillance_Camera.jpg?width=760", text:"Америкийн Иргэний эрх чөлөөний холбоо (ACLU) цагдаа нар хиймэл оюун ухаан болон автомашины улсын дугаар уншигч системийг ашиглан ямар ч хууль зөрчөөгүй жолоочдыг сэжигтэй аялал хийсэн гэж тэмдэглэж байгаа талаар анхаарууллаа.", textEn:"The ACLU has warned that police in the United States are using AI and automated license plate readers to flag drivers for 'suspicious' travel even when they have broken no law."},
  {id:17, cat:"oron-nutag", region:"selenge", title:"Сэлэнгэ аймагт «Хөдөлгөөнөөр эрүүлжье» сарын аян үргэлжилж байна", titleEn:"'Get healthy through movement' campaign continues in Selenge", time:"Өчигдөр", timeEn:"Yesterday", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Jogger_Centennial_Park_001.jpg?width=760", text:"Сэлэнгэ аймагт зохион байгуулагдаж буй «Хөдөлгөөнөөр эрүүлжье» сарын аян арваннэгдүгээр сарын 15-ныг хүртэл үргэлжилнэ.", textEn:"The month-long 'Get healthy through movement' campaign in Selenge province runs until November 15."},
  {id:18, cat:"uls-tor", title:"Монгол, БНСУ-ын Засгийн газар хоорондын хамтарсан хороо Сөүлд хуралдана", titleEn:"Mongolia-Korea joint committee to meet in Seoul", time:"Өчигдөр", timeEn:"Yesterday", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Seoul_panorama_11.jpg?width=760", text:"Монгол Улс, Бүгд Найрамдах Солонгос Улсын Засгийн газар хоорондын хамтарсан хорооны X хуралдаан аравдугаар сарын 29-31-нд Сөүл хотноо болно.", textEn:"The 10th meeting of the Mongolia-Republic of Korea intergovernmental joint committee will be held in Seoul from October 29 to 31."},
  {id:19, cat:"niigem", title:"«Их Монгол улсын дипломат бодлого» олон улсын эрдэм шинжилгээний хурал болж байна", titleEn:"International conference on Great Mongolia's diplomacy held in Ulaanbaatar", time:"4 цагийн өмнө", timeEn:"4 hours ago", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Chinggis_Khaan_National_Museum_front_2023.jpg?width=760", text:"«Их Монгол улсын дипломат бодлого: Түүх, орчин үе» олон улсын эрдэм шинжилгээний хурал өнөөдөр «Чингис хаан» үндэсний музейд болж байна.", textEn:"The international academic conference 'The diplomatic policy of Great Mongolia: history and the modern era' is being held today at the Chinggis Khaan National Museum."}
];
function aTitle(a){ return LANG === "en" ? (a.titleEn || a.title) : a.title; }
function aTime(a){ return LANG === "en" ? (a.timeEn || a.time) : a.time; }
function aText(a){ if(a.text) return LANG === "en" ? (a.textEn || a.text) : a.text; return SAMPLE_TEXT[LANG][a.id === 1 ? "long" : "short"]; }
function aRegion(a){ return a.region ? ((REGIONS[LANG] && REGIONS[LANG][a.region]) || a.region) : ""; }

const VIDEOS = [
  {title:"Видео: Хотын хөгжлийн талаарх тусгай сурвалжилга", titleEn:"Video: Special report on urban development", img:"https://picsum.photos/seed/video1/640/420"},
  {title:"Видео: Төсвийн зарцуулалтын талаар ярилцлага", titleEn:"Video: Interview on budget spending", img:"https://picsum.photos/seed/video2/640/420"},
  {title:"Видео: Аялал жуулчлалын улирлын нээлтийн тойм", titleEn:"Video: Tourism season opening highlights", img:"https://picsum.photos/seed/video3/640/420"},
  {title:"Видео: Залуучуудын технологийн форумын онцлох мөчүүд", titleEn:"Video: Highlights from the youth technology forum", img:"https://picsum.photos/seed/video4/640/420"}
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
  document.getElementById("videoGrid").innerHTML = VIDEOS.map((v,i)=>`
    <div class="video-card" onclick="openArticle(${ARTICLES[i%ARTICLES.length].id})">
      <div class="imgwrap"><img src="${v.img}" alt="" loading="lazy"><span class="play-badge">▶</span></div>
      <h4>${LANG === "en" ? (v.titleEn || v.title) : v.title}</h4></div>`).join("");
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
