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
  {id:1, cat:"oron-nutag", region:"dornod", title:"Дорнод аймагт гарсан их хээрийн түймэр 12 хоногийн дараа бүрэн унтарлаа", titleEn:"Steppe fire in Dornod extinguished after 12 days; Japan to help with restoration", time:"1 цагийн өмнө", timeEn:"1 hour ago", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Big_fire_burning_big_fire_flames.jpg?width=1000", text:"Аравдугаар сарын 8-нд Дорнод аймгийн Нөмрөгийн дархан цаазат газрын орчимд гарсан хээрийн түймэр 12 хоног үргэлжилсний эцэст бүрэн унтарлаа. Түймрийн улмаас хүний амь нас хохироогүй нь хамгийн гол мэдээ юм.\n\nУрьдчилсан мэдээллээр түймэр Японы KDDI компанийн охин компани болох «Мобиком»-ын ажилтнуудын сууж явсан автомашины доод хэсгээс утаа гарч, улмаар гал дүрэлзэн тархсан байна. KDDI-ийн зүгээс ажилтнуудынхаа үйлдэлд хууль зөрчсөн зүйл байгаагүйг шалгаж тогтоосноо мэдэгджээ. Гал гарсан шалтгааныг холбогдох байгууллагууд үргэлжлүүлэн шалгаж байна.\n\nЯпоны Гадаад хэргийн сайд Мотэги Тошимицү мягмар гарагт мэдэгдэл хийхдээ, Японы Засгийн газар хохирлын цар хүрээг гүнээ ухамсарлан нухацтай хүлээн авч байгаа бөгөөд Олон улсын хамтын ажиллагааны байгууллага (JICA)-ийн ойн хамгааллын мэргэжилтнүүдийг Монгол руу илгээнэ гэж мэдэгдлээ.\n\nЯпоны Засгийн газрын Хэрэг эрхлэх газрын дарга Кихара Минорү мөн Монголын нийт ард түмэнд чин сэтгэлээсээ харамсаж байгаагаа илэрхийлж, хохирол учирсан газар нутгийг нөхөн сэргээхэд Монголын Засгийн газартай нягт холбоотой хамтран ажиллана гэв. Японы хөрөнгө оруулалттай компаниас шалгалтын явцад бүх талаар туслалцаа үзүүлж, байгалийн одоогийн байдлыг судалж, аль болох хурдан нөхөн сэргээх ажлыг идэвхтэй гүйцэтгэнэ гэсэн тайлан ирүүлсэн байна.\n\nХарин Монголын талаас гал унтраах зардал зэрэг асуудалд зөвхөн уучлалт гуйснаар дуусахгүй гэдгийг Шадар сайд илэрхийлсэн нь анхаарал татаж байна.", textEn:"A steppe fire that broke out on October 8 near the Nomrog strictly protected area in Dornod province was fully extinguished after burning for 12 days. Most importantly, there were no human casualties.\n\nAccording to preliminary reports, the fire spread after smoke rose from beneath a vehicle carrying employees of Mobicom, a subsidiary of Japan's KDDI. KDDI said it had confirmed that its employees' actions did not violate the law. The cause of the fire remains under investigation by the relevant authorities.\n\nJapanese Foreign Minister Toshimitsu Motegi told reporters on Tuesday that the Japanese government takes the scale of the damage very seriously and will dispatch forestry protection experts from the Japan International Cooperation Agency (JICA) to Mongolia.\n\nChief Cabinet Secretary Minoru Kihara also expressed his sincere condolences to the people of Mongolia and said Japan would work closely with the Mongolian government to restore the damaged land. The Japanese-invested company has pledged to fully cooperate with the investigation, survey the current state of the environment, and actively carry out restoration work as quickly as possible.\n\nOn the Mongolian side, the Deputy Prime Minister has indicated that an apology alone will not settle issues such as the cost of fighting the fire."},
  {id:2, cat:"uls-tor", title:"Ерөнхийлөгч У.Хүрэлсүхийн Беларусь дахь айлчлалаар 50 сая ам.долларын гэрээ, санамж бичгүүд байгуулагдлаа", titleEn:"President Khurelsukh's visit to Belarus yields $50 million in deals and memoranda", time:"2 цагийн өмнө", timeEn:"2 hours ago", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Minsk_National_Library_-_views_01.jpg?width=760", text:"Монгол Улсын Ерөнхийлөгч Ухнаагийн Хүрэлсүхийн Бүгд Найрамдах Беларусь Улсад хийж буй төрийн айлчлалын хүрээнд «Беларусь-Монголын бизнес форум» аравдугаар сарын 26-нд Минск хотноо боллоо. Форумын үеэр хоёр улсын бизнес эрхлэгчид нийт 50 сая ам.долларын үнийн дүн бүхий гэрээ, санамж бичгүүд байгуулсан байна.\n\nФорумыг Беларусийн Аж үйлдвэрийн сайд Андрей Кузнецов, Монгол Улсын Хүнс, хөдөө аж ахуй, хөнгөн үйлдвэрийн сайд Ц.Идэрбат, Беларусийн Худалдаа, аж үйлдвэрийн танхимын дарга Михаил Мятликов, Монголын Үндэсний худалдаа, аж үйлдвэрийн танхимын ерөнхийлөгч Б.Лхагважав нар нээж үг хэлэв.\n\nФорумд хоёр улсын төр, хувийн хэвшил, бизнесийн байгууллага, худалдаа, аж үйлдвэрийн танхимын төлөөлөгчид оролцож, худалдаа, эдийн засаг, хөрөнгө оруулалтын хамтын ажиллагааг өргөжүүлэх, бизнес эрхлэгчдийн шууд харилцаа, түншлэлийг бэхжүүлэх боломжийн талаар санал солилцлоо. Хоёр улсын бизнес, хөрөнгө оруулалтын орчин, эдийн засгийн хамтын ажиллагааны боломж, аж үйлдвэр, хөдөө аж ахуй, тээвэр, логистик, хөнгөн үйлдвэрлэлийн салбарын хөгжлийн чиглэлээр илтгэл, танилцуулга хийсэн байна.\n\nМөн бизнес эрхлэгчдийн ганцаарчилсан уулзалтууд зохион байгуулагдаж, худалдаа, хөрөнгө оруулалт, үйлдвэрлэлийн чиглэлээр шинэ түншлэл тогтоох, харилцан ашигтай төсөл, санаачилгыг хэрэгжүүлэх боломжийн талаар ярилцжээ.", textEn:"During President Ukhnaagiin Khurelsukh's state visit to Belarus, the Belarus-Mongolia Business Forum was held in Minsk on October 26. Businesses from the two countries signed contracts and memoranda worth a total of $50 million.\n\nThe forum was opened by Belarusian Industry Minister Andrey Kuznetsov, Mongolian Minister of Food, Agriculture and Light Industry Ts. Iderbat, Chairman of the Belarusian Chamber of Commerce and Industry Mikhail Myatlikov, and President of the Mongolian National Chamber of Commerce and Industry B. Lkhagvajav.\n\nRepresentatives of government, the private sector, businesses and chambers of commerce from both countries discussed ways to expand trade, economic and investment cooperation and to strengthen direct business ties. Presentations covered the business and investment environment in both countries and cooperation opportunities in industry, agriculture, transport, logistics and light industry.\n\nOne-on-one business meetings were also held to establish new partnerships and discuss mutually beneficial projects in trade, investment and manufacturing."},
  {id:3, cat:"uls-tor", title:"УИХ-ын чуулганы нэгдсэн хуралдаан энэ пүрэв, баасан гарагт болно", titleEn:"Parliament plenary sessions scheduled for Thursday and Friday", time:"3 цагийн өмнө", timeEn:"3 hours ago", img:"https://commons.wikimedia.org/wiki/Special:FilePath/2024-10-18_Ulaanbaatar%2C_Government_Palace.jpg?width=760", text:"Улсын Их Хурлын чуулганы нэгдсэн хуралдаан энэ долоо хоногийн пүрэв, баасан гарагт буюу аравдугаар сарын 29, 30-нд болно. Нэгдсэн хуралдаанаар хэлэлцэх асуудлууд Байнгын хороодоор урьдчилан хэлэлцэгдэж байна.\n\nДолоо хоногийн эхэнд УИХ дахь намуудын бүлэг хуралдаж, мягмар, лхагва гарагт Байнгын хороодын хуралдаан үргэлжилж байна. Мөн өнөөдөр Засгийн газрын ээлжит хуралдаан Төрийн ордонд болно.\n\nХарин аравдугаар сарын 29-нд Монгол Улсын нийслэл хотын өдрийг тэмдэглэнэ. Долоо хоногийн сүүлээр буюу аравдугаар сарын 30-нд Монголын Хүүхдийн ордонд «1000 сэтгүүлчийн форум» болохоор товлогджээ.", textEn:"Plenary sessions of the State Great Khural (parliament) will be held this Thursday and Friday, October 29 and 30. The issues on the agenda are being discussed in advance by the standing committees.\n\nAt the start of the week, parliamentary party groups met, and standing committee meetings continue on Tuesday and Wednesday. The government's regular meeting also takes place today at the State Palace.\n\nOctober 29 marks Capital City Day in Mongolia. Later in the week, on October 30, the '1000 Journalists Forum' is scheduled at the Mongolian Children's Palace."},
  {id:4, cat:"delhii", title:"Израилд 2023 оны халдлагаас хойшхи анхны парламентын сонгууль болж, өрсөлдөөн ширүүн байна", titleEn:"Israel holds first election since the 2023 attack in a tight race", time:"4 цагийн өмнө", timeEn:"4 hours ago", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Reuven_Rivlin_and_his_wife_voting_on_the_municipal_elections_in_Israel%2C_Jerusalem%2C_October_2018_%288679%29.jpg?width=760", text:"Израилын иргэд мягмар гарагт 2023 оны аравдугаар сарын 7-ны ХАМАС-ын халдлагаас хойшхи анхны улсын сонгуульд саналаа өглөө. Санал хураалтад оролцогчдын идэвх сүүлийн хэдэн арван жилийн хамгийн өндөр түвшинд хүрсэн байна.\n\nЭнэ удаагийн сонгууль нь тус улсын хамгийн удаан хугацаанд Ерөнхий сайдаар ажиллаж буй Биньямин Нетаньяхугийн хувьд нэг ёсны итгэл үзүүлэлтийн санал хураалт гэж өргөнөөр харж байна. Түүний гол өрсөлдөгч нь зэвсэгт хүчний ерөнхий командлагч асан Гади Айзенкотын тэргүүлдэг сөрөг хүчний эвсэл юм.\n\nУрьдчилсан таамгаар Нетаньяхугийн эвсэл 50 орчим, сөрөг хүчний эвсэл 54 орчим суудал авах төлөвтэй байна. Кнессетийн 120 суудлаас олонх болохын тулд 61 суудал шаардлагатай тул засгийн газар байгуулах яриа хэлэлцээ нилээд сунжрах магадлалтай.\n\nСанал хураалтын дүнгийн урьдчилсан таамаг сонгуулийн орой зарлагдах бөгөөд албан ёсны баталгаажсан дүн арваннэгдүгээр сарын 4-нд нийтлэгдэнэ.", textEn:"Israelis voted on Tuesday in the country's first national election since the Hamas attack of October 7, 2023. Turnout was reported to be among the highest in decades.\n\nThe election is widely seen as a referendum on Benjamin Netanyahu, the country's longest-serving prime minister. His main rival is the opposition bloc led by former military chief Gadi Eisenkot.\n\nPre-poll projections put Netanyahu's bloc at around 50 seats against about 54 for the opposition bloc. With 61 of the Knesset's 120 seats needed for a majority, coalition negotiations could be lengthy.\n\nExit polls were expected on election night, and the official certified results will be published on November 4."},
  {id:5, cat:"ediin-zasag", title:"Монгол Улс он гарснаас хойш 34 сая литр шар айраг импортолжээ", titleEn:"Mongolia imported 34 million liters of beer in the first nine months of 2026", time:"5 цагийн өмнө", timeEn:"5 hours ago", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Cheers%21_Dublin_Style_%287429748276%29.jpg?width=760", text:"Улсын хэмжээнд 2026 оны эхний есөн сарын байдлаар 34 сая литр шар айраг импортолжээ. Энэ нь 32.1 сая ам.долларын үнийн дүнтэй бөгөөд өмнөх оны мөн үеэс хэмжээний хувьд 6.1 сая литрээр буюу 15.1 хувиар, үнийн дүнгийн хувьд 5.7 сая ам.доллараар буюу 15.2 хувиар буурсан үзүүлэлт юм.\n\nМөн хугацаанд 2.1 сая литр дарс импортолсон нь 10.3 сая ам.долларын үнэ хүрчээ. Дарсны импорт өмнөх оны мөн үеэс 495.6 мянган литрээр буюу 19.3 хувиар, үнийн дүн нь 1.8 сая ам.доллараар буюу 15.1 хувиар буурсан байна.\n\nХарин архи, ликёр, виски, конъяк зэрэг согтууруулах ундааны импорт 3.2 сая литр буюу 24.6 сая ам.долларт хүрчээ. Энэ төрлийн бүтээгдэхүүний хэмжээ 229.5 мянган литрээр буюу 6.6 хувиар буурсан ч үнийн дүн нь 2.8 сая ам.доллараар буюу 12.6 хувиар өссөн нь анхаарал татаж байна.", textEn:"Mongolia imported 34 million liters of beer in the first nine months of 2026, worth $32.1 million. That is down 6.1 million liters (15.1 percent) in volume and $5.7 million (15.2 percent) in value compared with the same period a year earlier.\n\nOver the same period, wine imports reached 2.1 million liters worth $10.3 million, down 495.6 thousand liters (19.3 percent) in volume and $1.8 million (15.1 percent) in value year on year.\n\nImports of spirits such as vodka, liqueur, whisky and cognac totaled 3.2 million liters worth $24.6 million. While the volume fell by 229.5 thousand liters (6.6 percent), the value rose by $2.8 million (12.6 percent)."},
  {id:6, cat:"niigem", title:"Онцгой байдлын алба хаагчдыг эрүүл мэндийн хугацаат үзлэгт хамруулж байна", titleEn:"Emergency service staff undergo scheduled health screenings", time:"6 цагийн өмнө", timeEn:"6 hours ago", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Doctor_takes_blood_pressure.jpg?width=760", text:"Онцгой байдлын ерөнхий газрын даргын 2026 оны А/366 дугаар тушаалын дагуу алба хаагчдыг эрүүл мэндийн хугацаат үзлэг, шинжилгээнд хамруулах ажил үргэлжилж байна. Ажлын хэсгийг ОБЕГ-ын Захиргаа, эрх зүй, хүний нөөцийн газрын Эрүүл мэнд, сэтгэл зүйн хэлтсийн дарга, хурандаа Д.Хонгор ахалж, Анагаахын Шинжлэх Ухааны Үндэсний Их Сургуулийн нарийн мэргэжлийн эмч, эмнэлгийн мэргэжилтнүүдээс бүрдсэн нийт 16 хүний бүрэлдэхүүнтэй баг ажиллаж байна.\n\nАжлын хэсэг аравдугаар сарын 26-ны байдлаар Говийн бүсийн Говьсүмбэр, Дорноговь, Дундговь, Өмнөговь аймгийн Онцгой байдлын байгууллагын нийт 200 гаруй алба хаагч, 30 ахмад ажилтныг үзлэг, шинжилгээнд хамруулаад байна. Үзлэг аравдугаар сарын 21-ний өдрөөс эхэлсэн ба ирэх сарын 4-ний өдрийг хүртэл үргэлжлэх юм.\n\nҮзлэгээр цусан дахь өлөн үеийн сахрын хэмжээ, хэвлийн болон бамбайн хэт авиан оношилгоо, зүрхний цахилгаан бичлэг, чих, хамар, хоолой, арьс, харшил, мэдрэл, дотор, мэс засал, гэмтэл, хавдар, шүд, дотоод шүүрэл, эрэгтэйчүүд, эрүүл ахуй зэрэг олон төрлөөр үзлэг оношилгоо хийж байна.", textEn:"Scheduled health screenings for emergency service staff are under way under Order A/366 of the Director of the National Emergency Management Agency. The working group is led by Colonel D. Khongor, head of the Health and Psychology Division, and includes 16 specialist doctors and medical experts from the Mongolian National University of Medical Sciences.\n\nAs of October 26, the team had examined more than 200 staff and 30 retired employees of emergency agencies in the Gobi-region provinces of Govisumber, Dornogovi, Dundgovi and Umnugovi. The screening campaign began on October 21 and runs until November 4.\n\nThe examinations cover fasting blood sugar, abdominal and thyroid ultrasound, ECG, and ear-nose-throat, skin, allergy, neurology, internal medicine, surgery, trauma, oncology, dental, endocrinology, men's health and hygiene checks."},
  {id:7, cat:"delhii", title:"Конго улсад Эбола вирусийн халдварын тохиолдол 10,000 давлаа", titleEn:"Ebola cases in Congo pass 10,000 as response intensifies", time:"6 цагийн өмнө", timeEn:"6 hours ago", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Ebola_virus_virion.jpg?width=760", text:"Бүгд Найрамдах Ардчилсан Конго Улсад дэгдсэн Эбола вирусийн халдварын батлагдсан тохиолдол 10,000 давсан тухай мэдээллээ. Энэ нь тус улсад үргэлжилж буй дэгдэлт улам өргөжиж буйг харуулж байна.\n\nЭрх баригчид болон эрүүл мэндийн байгууллагууд халдварыг хөрш Африкийн орнуудад тархахаас сэргийлэх тэмцлээ эрчимжүүлж байна. Ийм дэгдэлтийн үед халдвар авсан хүмүүсийг тусгаарлах, хавьтал болсон хүмүүсийг хянах, орон нутгийн иргэдэд урьдчилан сэргийлэх мэдээлэл хүргэх ажил хамгийн чухал байдаг.\n\nЭбола нь өндөр халуурах, цус алдах зэрэг хүнд шинж тэмдэг үүсгэдэг аюултай халдварт өвчин бөгөөд дэгдэлтийг эрт шатанд нь хязгаарлах нь олон улсын эрүүл мэндийн аюулгүй байдалд чухал ач холбогдолтой гэж мэргэжилтнүүд үздэг.", textEn:"The Ebola outbreak in the Democratic Republic of Congo has topped 10,000 confirmed cases, underlining how the epidemic continues to widen.\n\nAuthorities and health organizations are racing to slow the spread to other African countries. In outbreaks of this kind, isolating patients, tracing contacts and informing local communities are among the most critical response measures.\n\nEbola is a dangerous infectious disease that causes severe symptoms including high fever and bleeding. Experts say containing such outbreaks early is vital for international health security."},
  {id:8, cat:"delhii", title:"«Арнаб» хар салхи Энэтхэгийн зүүн эрэгт хүрч, сургуулиуд хаагдлаа", titleEn:"Cyclone Arnab makes landfall on India's east coast; schools closed", time:"7 цагийн өмнө", timeEn:"7 hours ago", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Severe_Tropical_Cyclone_Gabrielle_%28MODIS%29.jpg?width=760", text:"«Арнаб» хар салхи мягмар гарагийн өглөө Энэтхэгийн зүүн эрэгт Андра Прадеш мужийн нутагт, Бапатла болон Вишакхапатнам хотуудын хооронд Янам хотын орчимд газардлаа. Энэтхэгийн Цаг уурын газар (IMD) салхины хурд цагт 150 км хүртэл ширүүсч болзошгүй гэж анхааруулсан байна.\n\nХар салхи дөхөж ирсэнтэй холбогдуулан Одишаa болон Андра Прадеш мужуудад урьдчилан сэргийлэх арга хэмжээг эрчимжүүлжээ. Эрх баригчид хэд хэдэн мужид сургуулиудыг хааж, далайн загас агнуурыг зогсоон, аврах багуудыг бэлэн байдалд оруулсан байна.\n\nМөн хөрш Непал улсад ч өндөржүүлсэн бэлэн байдал зарлажээ. Хар салхи газардсаны дараа их хэмжээний хур тунадас орж, үер усны аюул нүүрлэж болзошгүйг анхааруулж байна.", textEn:"Cyclone Arnab made landfall on India's east coast on Tuesday morning near Yanam in Andhra Pradesh, between Bapatla and Visakhapatnam. The India Meteorological Department warned that wind gusts could reach up to 150 km/h.\n\nOdisha and Andhra Pradesh intensified precautionary measures as the storm approached. Authorities shut schools in several states, suspended sea fishing and placed rescue teams on standby.\n\nNeighboring Nepal also went on high alert. Heavy rainfall and flooding are possible in the cyclone's aftermath, officials warned."},
  {id:9, cat:"delhii", title:"Бразилын Ерөнхийлөгч Лула дахин сонгогдлоо", titleEn:"Brazil's President Lula reelected", time:"8 цагийн өмнө", timeEn:"8 hours ago", img:"https://commons.wikimedia.org/wiki/Special:FilePath/President_Biden_with_President_Lula_da_Silva_2023.jpg?width=760", text:"Бразилын Ерөнхийлөгч Луиз Инасиу Лула да Силва дахин сонгогдлоо. Түүний дахин сонгогдсон явдал тус улсын дотоод улс төр болон байгаль хамгааллын бодлогод чухал үйл явдал болж байна.\n\nЛула дахин сонгогдсонд байгаль хамгаалагчид, уугуул иргэдийн бүлгэм болон уур амьсгалын эрдэмтэд баяр хүргэж байна. Тэрээр Амазоны ширэнгэн ойг хамгаалах, ой устгалыг бууруулах чиглэлээр идэвхтэй бодлого явуулж ирсэн билээ.\n\nХэвлэл мэдээллийн хэрэгслүүд түүний дахин сонгогдол нь байгаль хамгааллын бодлого нь цаашид ч үргэлжлэх хүлээлтийг бий болгож байна гэж онцолж байна.", textEn:"Brazil's President Luiz Inácio Lula da Silva has been reelected, in a result with major implications for the country's domestic politics and environmental policy.\n\nEnvironmentalists, Indigenous groups and climate scientists are celebrating his reelection. Lula has pursued active policies to protect the Amazon rainforest and reduce deforestation.\n\nMedia reports say his reelection brings the prospect of continued environmental protection policies in the world's largest rainforest nation."},
  {id:10, cat:"delhii", title:"Их 20-ийн Гадаад хэргийн сайд нар Атлантад уулзана", titleEn:"G20 foreign ministers to meet in Atlanta", time:"9 цагийн өмнө", timeEn:"9 hours ago", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Atlanta_skyline_from_Jackson_Street_Bridge_2020.jpg?width=760", text:"АНУ-ын Төрийн нарийн бичгийн дарга Марко Рубио аравдугаар сарын 30, 31-нд Атланта хотноо Их 20 (G20)-ийн Гадаад хэргийн сайд нарын уулзалтыг зохион байгуулна. Их 20 нь дэлхийн хамгийн том эдийн засагтай орнуудыг нэгтгэдэг бөгөөд сайд нарын уулзалтаар олон улсын анхаарал татсан асуудлуудыг хэлэлцдэг.\n\nҮүнтэй зэрэгцэн Энэтхэг улс 2023 оноос хойш анх удаа Пакистаны сайдыг арваннэгдүгээр сард болох ШХАБ-ын соёл иргэншлийн яриа хэлэлцээнд урьсан нь анхаарал татаж байна. Хоёр улсын харилцаа хурцадмал хэвээр байгаа үед ийм урилга нь дипломат дохио гэж ажиглагчид үзэж байна.", textEn:"U.S. Secretary of State Marco Rubio will host the G20 foreign ministers' meeting in Atlanta on October 30-31. The G20 brings together the world's largest economies, and its foreign ministers meet to discuss pressing international issues.\n\nSeparately, India has invited a Pakistani minister to the inaugural SCO Civilisational Dialogue in November — the first such invitation since 2023. Observers see the invitation as a notable diplomatic signal at a time when relations between the two countries remain tense."},
  {id:11, cat:"delhii", title:"Азийн хөрөнгийн зах зээл Уолл Стритийн өсөлтийг дагав", titleEn:"Asian stocks advance following Wall Street's AI-led rally", time:"10 цагийн өмнө", timeEn:"10 hours ago", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Frankfurt_Stock_Exchange_%28Ank_Kumar%29_05.jpg?width=760", text:"Уолл Стритэд хиймэл оюун ухааны салбарын компаниудын хувьцаа өссөний дараа Азийн ихэнх хөрөнгийн зах зээл мягмар гарагт өсөлттэй хаагдлаа. АНУ-ын фьючерс ханш ч мөн бага зэрэг өссөн байна.\n\nХөрөнгө оруулагчид одоо томоохон компаниудын улирлын санхүүгийн тайлан болон төв банкуудын бодлогын шийдвэрийг анхааралтай ажиглаж байна. Технологи, ялангуяа хиймэл оюун ухаантай холбоотой хувьцаанууд зах зээлийн өсөлтийг тэргүүлсээр байна.", textEn:"Asian stocks were mostly higher on Tuesday after an AI-led rally on Wall Street. U.S. futures also edged higher.\n\nInvestors are now watching quarterly earnings from major companies and upcoming central bank decisions. Technology shares, especially those linked to artificial intelligence, continue to lead the market's gains."},
  {id:12, cat:"sport", title:"«Завхан 2026» спортын их наадам Буянт-Ухаа ордонд болно", titleEn:"'Zavkhan 2026' sports games to be held at Buyant-Ukhaa Palace", time:"Өчигдөр", timeEn:"Yesterday", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Mongolian_Naadam_Wrestlers_-_2010.jpg?width=760", text:"Завхан аймгийн нутгийн зөвлөлөөс зохион байгуулж буй «Завхан 2026» спортын хоёрдугаар их наадам аравдугаар сарын 30-наас арваннэгдүгээр сарын 1-нд Буянт-Ухаа спортын ордонд болно.\n\nНутгийн зөвлөлөөс зохион байгуулдаг ийм наадам нь нийслэлд ажиллаж, амьдарч буй Завхан нутгийн уугуул иргэдийг нэгтгэж, спортоор нөхөрлөх зорилготой уламжлалт арга хэмжээ юм. Наадам гурван өдөр үргэлжилнэ.", textEn:"The second 'Zavkhan 2026' sports games, organized by the Zavkhan province local council, will be held from October 30 to November 1 at the Buyant-Ukhaa Sports Palace in Ulaanbaatar.\n\nSuch games, organized by provincial local councils, traditionally bring together people from the province who live and work in the capital to connect through sport. The games will last three days."},
  {id:13, cat:"sport", title:"ПСЖ Лионыг 2:0-ээр хожиж, Францын лигийг тэргүүллээ", titleEn:"PSG beat Lyon 2-0 to move top of Ligue 1", time:"Өчигдөр", timeEn:"Yesterday", img:"https://commons.wikimedia.org/wiki/Special:FilePath/LFP_-_Barcelona_vs_Mallorca_pre-match_-_Oct_3rd_2010.jpg?width=760", text:"Францын Лиг 1-ийн ээлжит тойргийн тоглолтод «Пари Сен-Жермен» баг талбайдаа «Лион»-ыг 2:0-ээр хожлоо. Тоглолт «Парк де Пренс» цэнгэлдэх хүрээлэнд болсон байна.\n\nТоглолтын хоёр гоолыг хоёуланг нь хоёрдугаар хагаст сэлгээгээр орж ирсэн тоглогчид оруулсан бөгөөд Сенни Маюлу, Мика Годтс нар гоолджээ. Сэлгээний тоглогчид тоглолтын хувь заяаг шийдсэн нь энэ удаагийн онцлог байлаа.\n\nЭнэ ялалтын дараа ПСЖ лигийн хүснэгтийг нэг онооны давуугаар тэргүүлж эхэллээ.", textEn:"Paris Saint-Germain beat Lyon 2-0 at home in the latest round of France's Ligue 1. The match was played at the Parc des Princes.\n\nBoth goals were scored in the second half by substitutes Senny Mayulu and Mika Godts, with the bench players deciding the outcome of the match.\n\nWith the win, PSG moved a point clear at the top of the Ligue 1 table."},
  {id:14, cat:"soyol", title:"Монгол циркийн 85 жилийн ойд зориулсан «Браво цирк» тоглолт болно", titleEn:"'Bravo Circus' show marks 85 years of Mongolian circus", time:"Өчигдөр", timeEn:"Yesterday", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Aladdin_Shrine_Circus_performance_with_the_Hernandez_Troupe_-_DPLA_-_7913d35028051a216b91d9aef428fe6a.jpg?width=760", text:"Монгол циркийн 85 жилийн ойд зориулсан «Браво цирк» тоглолт аравдугаар сарын 31, арваннэгдүгээр сарын 1-нд Монгол бөхийн өргөөнд болно. Ойн тоглолт хоёр өдөр дараалан үзэгчдэд хүрнэ.\n\nМонгол цирк нь уран нугаралтаараа дэлхийд алдартай уламжлалтай бөгөөд олон арван жилийн турш олон улсын тайзнаа эх орныхоо нэрийг гаргаж ирсэн билээ. 85 жилийн ойн тоглолт нь энэхүү баялаг түүхийг тэмдэглэх онцгой арга хэмжээ болох юм.", textEn:"The 'Bravo Circus' performance celebrating the 85th anniversary of the Mongolian circus will be held on October 31 and November 1 at the Mongolian Wrestling Palace. The anniversary show runs for two days.\n\nThe Mongolian circus is world-renowned for its contortion tradition and has represented the country on international stages for decades. The 85th anniversary performance marks this rich history with a special celebration."},
  {id:15, cat:"soyol", title:"Рэппер BLU анхны «Divine» цомгийнхоо танилцуулгыг хийнэ", titleEn:"Rapper BLU to host listening party for debut album 'Divine'", time:"Өчигдөр", timeEn:"Yesterday", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Singer_In_Concert_%28Unsplash%29.jpg?width=760", text:"Монголын шинэ үеийн артист BLU бие даасан анхны «Divine» цомгийнхоо сонсогчдын үдэшлэгийг арваннэгдүгээр сарын 28-нд «MPM Event Hall»-д зохион байгуулахаар болжээ.\n\nBLU нь сүүлийн жилүүдэд өөрийн хөгжмийн өнгө төрх, бүтээлч илэрхийллээрээ сонсогчдын анхаарлыг татах болсон уран бүтээлч юм. «Divine» цомог нь түүний цаашдын уран бүтээлийн чиг хандлагыг тодорхойлох шинэ алхам болохоор байна.\n\nЦомгийн сонсголын үдэшлэг нь шинэ дуунуудыг анх удаа сонсохын зэрэгцээ BLU-гийн шинэ уран бүтээлийн ертөнцтэй танилцах боломжийг бүрдүүлэх ажээ. Үдэшлэгт оролцох уран бүтээлчдийн нэрс бүхий бүрэлдэхүүнийг тун удахгүй зарлах аж.", textEn:"Mongolian new-generation artist BLU will hold a listening party for his first solo album 'Divine' on November 28 at MPM Event Hall.\n\nBLU has drawn listeners' attention in recent years with his musical style and creative expression. The 'Divine' album is expected to be a new step that defines the direction of his future work.\n\nThe listening party will give fans a first chance to hear the new songs and experience BLU's new creative world. The lineup of guest artists will be announced soon."},
  {id:16, cat:"tech", title:"АНУ-д цагдаагийн хиймэл оюуны систем хууль зөрчөөгүй жолоочдыг «сэжигтэй» гэж тэмдэглэж байна", titleEn:"ACLU warns police AI is flagging drivers who broke no law", time:"Өчигдөр", timeEn:"Yesterday", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Traffic_Lights_And_Surveillance_Camera.jpg?width=760", text:"Америкийн Иргэний эрх чөлөөний холбоо (ACLU) цагдаа нар хиймэл оюун ухаан болон автомашины улсын дугаар уншигч (ALPR) системийг ашиглан иргэдийн хөдөлгөөнийг хянаж байгаа талаар анхаарууллаа.\n\nТус холбооны мэдээлснээр, ямар ч хууль зөрчөөгүй жолоочдыг хүртэл «сэжигтэй аялал» хийсэн гэж систем тэмдэглэж байгаа аж. Энэ нь иргэдийн хувийн нууц, чөлөөтэй зорчих эрхтэй холбоотой ноцтой асуудал үүсгэж байна гэж холбоо үзэж байна.\n\nИргэний эрхийн байгууллагууд ийм технологийг хяналтгүйгээр өргөнөөр ашиглах нь энгийн иргэдийн өдөр тутмын хөдөлгөөнийг бүхэлд нь бүртгэх эрсдэлтэй гэж сэрэмжлүүлж байна.", textEn:"The American Civil Liberties Union (ACLU) has warned that police are using artificial intelligence and automated license plate readers (ALPR) to track people's movements.\n\nAccording to the ACLU, the systems are flagging drivers for 'suspicious travel' even when they have broken no law. The group says this raises serious questions about privacy and freedom of movement.\n\nCivil liberties organizations warn that unchecked use of such technology risks recording the everyday movements of ordinary people on a mass scale."},
  {id:17, cat:"oron-nutag", region:"selenge", title:"Сэлэнгэ аймагт «Хөдөлгөөнөөр эрүүлжье» сарын аян үргэлжилж байна", titleEn:"'Get healthy through movement' campaign continues in Selenge", time:"Өчигдөр", timeEn:"Yesterday", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Jogger_Centennial_Park_001.jpg?width=760", text:"Сэлэнгэ аймагт зохион байгуулагдаж буй «Хөдөлгөөнөөр эрүүлжье» сарын аян арваннэгдүгээр сарын 15-ныг хүртэл үргэлжилнэ.\n\nАян нь иргэдийг өдөр тутмын хөдөлгөөн, идэвхтэй амьдралын хэв маягт уриалж, эрүүл мэндийг нь дэмжих зорилготой. Сарын турш аймгийн хэмжээнд эрүүл мэндийн болон спортын арга хэмжээнүүд зохион байгуулагдах ажээ.", textEn:"The month-long 'Get healthy through movement' campaign in Selenge province runs until November 15.\n\nThe campaign encourages residents to stay active in everyday life and supports public health. Health and sports activities will be organized across the province throughout the month."},
  {id:18, cat:"uls-tor", title:"Монгол, БНСУ-ын Засгийн газар хоорондын хамтарсан хороо Сөүлд хуралдана", titleEn:"Mongolia-Korea joint committee to meet in Seoul", time:"Өчигдөр", timeEn:"Yesterday", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Seoul_panorama_11.jpg?width=760", text:"Монгол Улс, Бүгд Найрамдах Солонгос Улсын Засгийн газар хоорондын хамтарсан хорооны X хуралдаан аравдугаар сарын 29-31-нд Сөүл хотноо болно. Энэ нь хоёр улсын Засгийн газар хоорондын хамтын ажиллагааны байнгын механизмын ээлжит хуралдаан юм.\n\nХамтарсан хорооны хуралдаанаар хоёр талын хамтын ажиллагааны өнөөгийн байдал, цаашдын чиглэлийг хэлэлцдэг уламжлалтай. Хуралдаан гурван өдөр үргэлжилнэ.", textEn:"The 10th meeting of the Mongolia-Republic of Korea intergovernmental joint committee will be held in Seoul from October 29 to 31. It is the latest session of the two governments' standing cooperation mechanism.\n\nJoint committee meetings traditionally review the current state of bilateral cooperation and discuss its future direction. The meeting will last three days."},
  {id:19, cat:"niigem", title:"«Их Монгол улсын дипломат бодлого» олон улсын эрдэм шинжилгээний хурал болж байна", titleEn:"International conference on Great Mongolia's diplomacy held in Ulaanbaatar", time:"4 цагийн өмнө", timeEn:"4 hours ago", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Chinggis_Khaan_National_Museum_front_2023.jpg?width=760", text:"«Их Монгол улсын дипломат бодлого: Түүх, орчин үе» олон улсын эрдэм шинжилгээний хурал өнөөдөр «Чингис хаан» үндэсний музейд болж байна.\n\nХуралд түүх, олон улсын харилцааны чиглэлийн эрдэмтэн, судлаачид оролцож, Их Монгол улсын үеийн дипломат бодлогын түүхэн өв болон өнөөгийн гадаад бодлогын уялдаа холбооны талаар илтгэл хэлэлцүүлж байна.", textEn:"The international academic conference 'The diplomatic policy of Great Mongolia: history and the modern era' is being held today at the Chinggis Khaan National Museum.\n\nHistorians and international relations scholars are presenting research on the diplomatic heritage of the Great Mongol state and its connections to modern foreign policy."}
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
