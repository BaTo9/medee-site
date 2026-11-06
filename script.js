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

// ===== Бодит мэдээнүүд (2026-11-07) — өдөр бүр шинэчлэгдэнэ =====
const ARTICLES = [
  {id:1, cat:"uls-tor", title:"Орон сууцны залилангийн эсрэг хуулийн төсөл УИХ-д өргөн баригдлаа", titleEn:"Bill against housing fraud submitted to Parliament", time:"15 мин", timeEn:"15 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Ulaanbaatar%2C%20Mongolia%20(34681044554).jpg?width=1000", text:"Улсын Их Хурлын дарга С.Бямбацогтод Улсын Их Хурлын гишүүн, Засгийн газрын гишүүн, Хууль зүй, дотоод хэргийн сайд Г.Тэмүүлэн өнөөдөр /2026.11.06/ Эд хөрөнгийн эрхийн улсын бүртгэлийн тухай хуульд нэмэлт, өөрчлөлт оруулах тухай хуулийн төслийг өргөн мэдүүлэв.\n\nМонгол Улсад барилгын салбар эрчимтэй хөгжиж, аж ахуйн нэгжүүд барьж дуусаагүй байраа урьдчилан борлуулж санхүүжилт босгох, иргэд орон сууцаа урьдчилан худалдан авах харилцаа өргөжсөн ч энэ харилцааг хуулиар нарийвчлан зохицуулаагүйгээс иргэд хохирох тохиолдол гарсаар байна. Эд хөрөнгийн эрхийн бүртгэл нь өмчлөх эрхийг баталгаажуулж, давхар борлуулалт, маргаанаас сэргийлэх үндэс болдог тул бүртгэлийн тогтолцоог сайжруулах нь зах зээлийн итгэлийг нэмэгдүүлэх чухал алхам гэж үзэж байна.\n\nХууль зүй, дотоод хэргийн сайд Г.Тэмүүлэн сүүлийн үед орон сууцны захиалга, залилантай холбоотой гэмт хэрэг өсөх хандлагатай байгааг онцолсон байна. Иргэд урьдчилж төлбөрөө төлөөд байраа хүлээж авч чадахгүй байх, нэг байрыг хэд хэдэн хүнд борлуулсан гэх гомдол, маргаан нэмэгдэж байгаа нь хуулийн зохицуулалтыг чангатгах шаардлагыг улам тодотгож байгаа юм.\n\nУлсын Их Хурлын дарга С.Бямбацогт орон сууцны захиалга, залилантай холбоотой гэмт хэргийг таслан зогсооход чиглэсэн хуулийн төслийг Улсын Их Хурлаар хэлэлцүүлэн батлуулах цаг болсныг тэмдэглэв.\n\nМөн энэ үеэр сайд цахим залилантай холбоотой хуулийн төслийг санаачлан боловсруулж дуусгаад, Засгийн газраас санал авахаар зэхэж байгаагаа дуулгалаа. Ийнхүү орон сууцны зах зээлийн шударга байдлыг хангах, иргэдийг залилангаас хамгаалах асуудал парламентын анхаарлын төвд орлоо.", textEn:"Speaker of the State Great Khural S. Byambatsogt today (2026.11.06) received a draft law on amendments to the Law on State Registration of Property Rights from Member of Parliament, Government member and Minister of Justice and Home Affairs G. Temuulen.\n\nMongolia's construction sector is developing rapidly: businesses raise financing by pre-selling unfinished apartments, and citizens increasingly buy homes in advance. Yet this relationship has not been regulated in detail by law, and cases of citizens suffering losses continue to occur. Property-rights registration underpins ownership and helps prevent double sales and disputes, so improving the registration system is seen as an important step toward greater market trust.\n\nMinister G. Temuulen noted that crimes related to housing orders and fraud have recently been on the rise. Complaints and disputes are growing from citizens who paid in advance but did not receive their apartments, or from cases where one apartment was sold to several people, underlining the need for tighter legal regulation.\n\nSpeaker S. Byambatsogt said the time had come for parliament to debate and pass a bill aimed at stopping housing-order and fraud-related crimes.\n\nThe minister also said a draft law on cyber fraud has been prepared and will be submitted to the Government for comments. Ensuring fairness in the housing market and protecting citizens from fraud is now at the centre of parliament's attention."},
  {id:2, cat:"uls-tor", title:"Саадгүй орчин, хүртээмжтэй үйлчилгээний тухай хуулийн төсөл өргөн баригдлаа", titleEn:"Bill on accessible environment and inclusive services submitted", time:"30 мин", timeEn:"30 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Winchester%20Center%20station%20track%201%20wheelchair%20ramp%20August%202025.jpg?width=760", text:"Улсын Их Хурлын дарга С.Бямбацогтод Улсын Их Хурлын гишүүн О.Саранчулуун, Ж.Баясгалан, А.Ариунзаяа, Д.Ганмаа, С.Эрдэнэбат нараас өнөөдөр /2026.11.06/ Саадгүй орчин, хүртээмжтэй үйлчилгээний тухай хуулийн төслийг өргөн мэдүүлэв.\n\nУлсын Их Хурлын гишүүн О.Саранчулуун хэлэхдээ, Гэр бүл, хөдөлмөр, нийгмийн хамгааллын яам болон хөгжлийн бэрхшээлтэй иргэний нийгмийн байгууллагуудын төлөөллүүдтэй дөрвөн жилийн өмнөөс хэлэлцүүлж ирсэн энэ хуулийн төсөлд жил гаруйн өмнөөс ажилласан гэлээ. Төслийг Улсын Их Хурлын 33 гишүүнээс өргөн мэдүүлж, Засгийн газраас санал аван холбогдох зохицуулалтуудыг тусган сайжруулсан байна.\n\nХуулийн төсөл нь нийтийн эзэмшлийн орчинд төрийн болон нийтийн бүх үйлчилгээг хүртээмжтэй болгохтой холбоотой харилцааг зохицуулна. Төслийн талаар Монгол Улсын 21 аймагт хэлэлцүүлэг хийжээ.\n\nУлсын Их Хурлын дарга С.Бямбацогт уг хуулийн төслийг маш чухал хэмээн тодотгоод, 126 гишүүнтэй парламент улс төрийн намууд болон нийгмийн бүлгүүдийн олон талт төлөөллийг хангасны үр дүн гэдгийг онцолсон байна.\n\nХуулийн төсөл 9 бүлэг, 27 зүйлтэй. Батлагдсанаар хүний эрүүл, аюулгүй орчинд амьдрах эрхийг баталгаажуулах саадгүй орчин бүрдэж, үйлчилгээний хүртээмж сайжирч, төрийн байгууллага, албан тушаалтны эрх, үүрэг тодорхой болж, хуулийн болон чиг үүргийн давхардал, хийдэл арилна гэж төсөл санаачлагчид үзэж байна.", textEn:"Speaker of the State Great Khural S. Byambatsogt today (2026.11.06) received the draft Law on Accessible Environment and Inclusive Services from Members of Parliament O. Saranchuluun, J. Bayasgalan, A. Ariunzayaa, D. Ganmaa and S. Erdenebat.\n\nMember of Parliament O. Saranchuluun said the bill had been discussed for four years with the Ministry of Family, Labour and Social Protection and representatives of organisations of persons with disabilities, and that work on the draft itself had taken more than a year. The bill was submitted by 33 members of parliament and improved with comments from the Government.\n\nThe draft regulates making all state and public services accessible in public spaces. It was discussed in all 21 aimags of Mongolia.\n\nSpeaker S. Byambatsogt described the bill as very important, noting that it is the result of a 126-member parliament ensuring diverse representation of political parties and social groups.\n\nThe draft has 9 chapters and 27 articles. Its initiators say that once adopted, it will create a barrier-free environment guaranteeing the right to a healthy and safe living environment, improve access to services, clarify the rights and duties of state bodies and officials, and remove duplication and gaps in the law and in functions."},
  {id:3, cat:"niigem", title:"Өрхийн эрүүл мэндийн төвүүд өнөөдрөөс уртасгасан цагаар ажиллана", titleEn:"Family health centres switch to extended hours from today", time:"45 мин", timeEn:"45 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/U.S.%20Air%20Force%20LT.%20COL.%20Clay%20Walsh%20(left)%2C%20a%20medical%20doctor%20assigned%20to%20the%20179th%20Medical%20Squadron%2C%20encourages%20a%20young%20patient%20during%20an%20examine%20at%20a%20free%20clinic%20during%20a%20Dominican%20-%20DPLA%20-%20c00e37cf75202fbef3ebdd75a98d3d36.jpeg?width=760", text:"Хүйтний улиралд ханиад томуугийн өвчлөл нэмэгдэж байгаатай холбогдуулан 2026 оны 11 дүгээр сарын 07-ны өдрөөс Өрхийн эрүүл мэндийн төвүүд уртасгасан цагаар ажиллаж эхэллээ.\n\nТодруулбал, ажлын өдөр 20:00 цаг, амралтын өдөр 17:00 цаг, нийтээр тэмдэглэх баярын өдөр 16:00 цаг хүртэл иргэдэд үйлчилнэ.\n\nМөн Сонгинохайрхан, Баянзүрх, Чингэлтэй, Сүхбаатар зэрэг төвийн дөрвөн дүүрэгт олон нийтийн эрүүл мэндийн 86 ажилтныг нэмэлтээр ажиллуулахаар бэлтгэл хангаж байгаа юм байна.\n\nИнгэснээр томуугийн дэгдэлтийн үед иргэд эмнэлгийн тусламжийг ойр, хүртээмжтэй авах боломжтой болох бөгөөд эрүүл мэндийн байгууллагуудын ачааллыг хуваарилах зорилготой гэж албаныхан мэдээллээ. Өрхийн эрүүл мэндийн төвүүд нь анхан шатны тусламжийн хамгийн ойрын цэг тул тэдний цагийг уртасгах нь эмнэлгүүдэд хандах иргэдийн дарааллыг бууруулахад чухал үүрэгтэй юм.", textEn:"Family health centres will start working extended hours from November 7, 2026, as flu cases rise in the cold season.\n\nSpecifically, they will serve citizens until 20:00 on working days, until 17:00 on weekends, and until 16:00 on public holidays.\n\nPreparations are also under way to deploy an additional 86 public health workers in the four central districts — Songinokhairkhan, Bayanzurkh, Chingeltei and Sukhbaatar.\n\nOfficials say this will allow citizens to receive medical care close to home and more accessibly during the flu outbreak, and will help distribute the workload across health facilities. Family health centres are the closest point of primary care, so extending their hours plays an important role in reducing queues at hospitals."},
  {id:4, cat:"niigem", title:"Томуу, томуу төст өвчний улмаас хүүхдийн тусламжийн ачаалал нэмэгдэж байна", titleEn:"Flu surge raises pressure on children's health services", time:"1 цаг", timeEn:"1 hour", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Influenza%20Virus.jpg?width=760", text:"Нийслэлийн хэмжээнд томуу, томуу төст өвчний тохиолдол нэмэгдэж, эрүүл мэндийн тусламж, үйлчилгээний ачаалал өсөж байна.\n\n2026 оны 11 дүгээр сарын 2-ны байдлаар нийслэлийн Түргэн тусламжийн төвийн дуудлага 2,249 болж, өмнөх оны мөн үеэс 56.72 хувиар нэмэгдсэн байна. Нийслэлийн харьяа эрүүл мэндийн байгууллагуудад нийт 877 хүүхэд хэвтэн эмчлүүлж байгаа нь өмнөх оны 764 хүүхэдтэй харьцуулахад 14.79 хувиар өссөн үзүүлэлт юм.\n\nҮүнтэй холбогдуулан Нийслэлийн Эрүүл мэндийн газраас тусламж, үйлчилгээний зохион байгуулалтыг гурван чиглэлээр эрчимжүүлэн ажиллаж байна. Өрхийн эрүүл мэндийн төвүүдийг уртасгасан цагаар ажиллуулж, бэлэн байдлыг хангах, иргэдэд эрүүл мэндийн тусламж, үйлчилгээг ойртуулах, хүртээмжийг нэмэгдүүлэх зэрэг арга хэмжээ авч байгаа юм.\n\nЭрүүл мэндийн байгууллагууд эцэг эхчүүдийг хүүхдийнхээ эрүүл мэндэд анхаарч, ханиад томуугийн шинж тэмдэг илэрвэл эрт хандахыг зөвлөж байна. Хүйтний улиралд томуугийн дэгдэлт ихэвчлэн нэмэгддэг тул иргэд дулаан хувцаслаж, олон нийтийн газарт амны хаалт хэрэглэхийг зөвлөжээ.", textEn:"Flu and flu-like illnesses are rising in the capital, increasing the burden on health services.\n\nAs of November 2, 2026, emergency calls in the capital reached 2,249 — up 56.72 percent on the same period last year. A total of 877 children are hospitalised in health facilities under the capital, up 14.79 percent from 764 children last year.\n\nIn response, the capital's Health Department is stepping up the organisation of care in three areas: running family health centres on extended hours and ensuring readiness, and bringing health services closer to citizens to improve access.\n\nHealth facilities advise parents to watch their children's health closely and seek care early if flu symptoms appear. Flu outbreaks usually intensify in the cold season, so citizens are advised to dress warmly and wear masks in public places."},
  {id:5, cat:"niigem", title:"Зүрх судасны өвчнөөс урьдчилан сэргийлэх арга хэмжээний төлөвлөгөө танилцуулав", titleEn:"Plan to prevent cardiovascular disease presented", time:"1 цаг", timeEn:"1 hour", img:"https://commons.wikimedia.org/wiki/Special:FilePath/CT%20Coronary%20Artery%20Imaging.jpg?width=760", text:"Улсын гуравдугаар төв эмнэлгийн зүрх судасны үндэсний төв, Эрүүл мэндийн яам хамтран зүрх судасны өвчнөөс урьдчилан сэргийлэх арга хэмжээний төлөвлөгөөг танилцуулах сургалт, уулзалтыг танхим, цахим хосолсон хэлбэрээр зохион байгууллаа.\n\nУулзалтад Эрүүл мэндийн яамны Бодлого, төлөвлөлтийн газрын дарга Б.Цэцэгсайхан оролцож, зүрх судасны тусламж үйлчилгээнд тулгамдаж буй асуудал, өвчлөл, хүндрэл, нас баралтыг бууруулахад урьдчилан сэргийлэлтийн хөтөлбөрийн ач холбогдлын талаар байр сууриа илэрхийллээ.\n\nЭрүүл мэндийн салбарын ажилтнуудын хичээл зүтгэл, Люксембургийн Засгийн газрын 5 удаагийн буцалтгүй тусламжийн төслийн хөрөнгө оруулалт, мэргэжилтнүүдийг чадавхжуулах тасралтгүй үйл ажиллагааны үр дүнд сүүлийн 20 жилд 10,000 хүн ам дахь зүрх судасны өвчний нас баралтыг 8 пунктээр бууруулж чадсан байна.\n\nГэсэн хэдий ч зүрх судасны нас баралтын 33 хувь нь 45-65 насныханд тохиолдож байгаа нь салбарын тулгамдсан асуудал хэвээр байна. Төлөвлөгөөний хүрээнд анхдагч болон хоёрдогч урьдчилан сэргийлэлтийг үндэсний хэмжээнд үр дүнтэй хэрэгжүүлж, өвчлөл, хүндрэл, нас баралтыг бууруулах зорилготой юм.\n\nУулзалтад 21 аймаг, 9 дүүргийн эрүүл мэндийн байгууллагын удирдлагууд, нийгмийн эрүүл мэндийн ажилтнууд оролцож, төлөвлөгөөний хэрэгжилтийг хэрхэн үр дүнтэй хангах талаар хэлэлцүүлэг хийлээ.", textEn:"The National Cardiovascular Centre of the Third State Central Hospital and the Ministry of Health jointly held a hybrid (in-person and online) training and meeting to present a plan of measures to prevent cardiovascular disease.\n\nB. Tsetsegsaikhan, Director of the Policy and Planning Department of the Ministry of Health, took part and spoke about the challenges in cardiovascular care and the importance of a prevention programme in reducing illness, complications and mortality.\n\nThanks to the dedication of health workers, investment from five non-refundable aid projects of the Government of Luxembourg over 25 years, and continuous capacity building of specialists, cardiovascular mortality per 10,000 people has been reduced by 8 points over the past 20 years.\n\nHowever, 33 percent of cardiovascular deaths still occur among people aged 45-65, which remains a pressing issue for the sector. The plan aims to implement primary and secondary prevention effectively nationwide to reduce illness, complications and deaths.\n\nLeaders of health organisations from 21 aimags and 9 districts, along with public health workers, attended the meeting and discussed how to implement the plan effectively."},
  {id:6, cat:"ediin-zasag", title:"«Цагаан алт» хөдөлгөөн: хөнгөн үйлдвэрийн экспорт 65 хувиар өслөө", titleEn:"\"White Gold\" movement: light industry exports up 65 percent", time:"2 цаг", timeEn:"2 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Pashmina%20scarf%20with%20woven%20elephant%20design%2002.jpg?width=760", text:"Монгол Улсын хөнгөн үйлдвэрийн салбарын нэр хүндтэй үзэсгэлэн худалдаа болох уламжлалт «Ноос, ноолуур, арьс ширэн бүтээгдэхүүн-2026» 20 дахь удаагийн нэгдсэн арга хэмжээ Мишээл Экспо төвд амжилттай зохион байгуулагдаж өндөрлөлөө.\n\nҮзэсгэлэнг Хүнс, хөдөө аж ахуй, хөнгөн үйлдвэрийн яам, «Монголын ноос, ноолуурын холбоо», «Монголын арьс ширний үйлдвэрлэлийн холбоо» болон «Мишээл экспо» төв хамтран зохион байгуулсан бөгөөд энэ жил Монгол Улсын Ерөнхийлөгчийн санаачилсан «Цагаан алт» үндэсний хөдөлгөөний хүрээнд болсноороо онцлог байв.\n\nУг хөдөлгөөн нь малын гаралтай түүхий эд болох ноос, ноолуур, арьс ширийг дотооддоо боловсруулж, нэмүү өртөг шингэсэн эцсийн бүтээгдэхүүн үйлдвэрлэх, үндэсний үйлдвэрлэлийн хүчин чадал, экспортын боломжийг нэмэгдүүлэх, ажлын байрыг дэмжихэд чиглэсэн юм.\n\n«Цагаан алт» үндэсний хөдөлгөөний үр дүнд хөнгөн үйлдвэрийн салбарын экспортын орлого 2025 оны мөн үетэй харьцуулахад 65 хувиар, бүтээгдэхүүний борлуулалт 33 хувиар тус тус өссөн байна.\n\nМөн Монгол Улс болон Евразийн эдийн засгийн холбоо, түүний гишүүн орнууд хоорондын чөлөөт худалдааны түр хэлэлцээр хэрэгжиж эхэлсэн эхний 2 сарын байдлаар тус холбооны гишүүн орнууд руу экспортолсон бараа, бүтээгдэхүүний 90 хувийг ноос, ноолуур, арьс ширний үйлдвэрлэлийн бүтээгдэхүүн бүрдүүлж байгаа нь тус зах зээл цаашид өргөжин тэлэх томоохон нөөц боломжтойг харуулж байна. Хүнс, хөдөө аж ахуй, хөнгөн үйлдвэрийн яамнаас «Хөнгөн үйлдвэрлэлийн тухай» хуулийн төслийг 2026 онд багтаан Улсын Их Хуралд өргөн барихаар ажиллаж байна.", textEn:"The traditional \"Wool, Cashmere and Leather Products-2026\" fair — the 20th edition of the light industry's prestigious exhibition — was successfully held at the Misheel Expo centre.\n\nIt was jointly organised by the Ministry of Food, Agriculture and Light Industry, the Mongolian Wool and Cashmere Association, the Mongolian Leather Industry Association and Misheel Expo. This year it was special because it was held within the framework of the \"White Gold\" national movement initiated by the President of Mongolia.\n\nThe movement aims to process animal raw materials — wool, cashmere and leather — domestically, produce value-added final products, increase national production capacity and export opportunities, and support jobs.\n\nAs a result of the \"White Gold\" movement, light industry export revenue rose by 65 percent and product sales by 33 percent compared with the same period in 2025.\n\nIn the first two months since the interim free trade agreement between Mongolia and the Eurasian Economic Union and its member states came into force, 90 percent of goods exported to EAEU members were wool, cashmere and leather products — showing that this market has great potential to expand further. The Ministry of Food, Agriculture and Light Industry is working to submit a draft Law on Light Industry to parliament within 2026."},
  {id:7, cat:"ediin-zasag", title:"«Байдрагийн 30 МВт-ын УЦС» ашиглалтад орсноор хоёр аймгийн эрчим хүчний хангамж сайжирна", titleEn:"Baidrag 30 MW hydropower plant to improve energy supply in two aimags", time:"2 цаг", timeEn:"2 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Peechi%20Dam%203.jpg?width=760", text:"Баянхонгор аймгийн Бөмбөгөр, Бууцагаан сумдын зааг, «Сүүдэртийн хясаа» орчимд хэрэгжүүлэхээр төлөвлөж буй Байдрагийн 30 МВт-ын усан цахилгаан станцын төслийн сонгон шалгаруулалт үргэлжилж байна.\n\nТөслийн сонгон шалгаруулалтад одоогоор 9 аж ахуйн нэгж оролцохоор хүсэлтээ ирүүлээд байгаа бөгөөд хувийн хэвшлийн саналыг 2026 оны 11 дүгээр сарын 12 хүртэл хүлээн авна.\n\nБайдрагийн 30 МВт-ын усан цахилгаан станцын төслийг 2026-2055 онд DBOT буюу зураг төсөл боловсруулах, байгаль орчин, нийгмийн нөлөөллийн үнэлгээ хийх, барих, ашиглах, шилжүүлэх хэлбэрээр хэрэгжүүлэхээр төлөвлөсөн.\n\nТөсөл хэрэгжсэнээр Баянхонгор, Өвөрхангай аймгийн сумдын эрчим хүчний хангамж сайжирч, орон нутгийн хөгжилд чухал хувь нэмэр оруулна гэж албаныхан үзэж байна. Сэргээгдэх эрчим хүчний эх үүсвэрийг нэмэгдүүлэх нь Монгол Улсын эрчим хүчний бие даасан байдлыг бэхжүүлэх бодлогын нэг хэсэг юм.", textEn:"The selection process continues for the Baidrag 30 MW hydropower plant project, planned at \"Suudertiin Khyasaa\" on the border of Bombogor and Buutsagaan soums in Bayankhongor aimag.\n\nNine companies have so far applied to take part in the project selection, and proposals from the private sector will be accepted until November 12, 2026.\n\nThe 30 MW Baidrag hydropower plant is planned to be implemented in 2026-2055 under the DBOT model — design, environmental and social impact assessment, build, operate and transfer.\n\nOfficials say that once implemented, the project will improve energy supply to soums in Bayankhongor and Uvurkhangai aimags and make an important contribution to local development. Expanding renewable energy sources is part of Mongolia's policy to strengthen its energy independence."},
  {id:8, cat:"delhii", title:"Израиль: Эйзенкот засгийн газар байгуулах хэлэлцээнд ахиц гаргав", titleEn:"Israel: Eisenkot reports progress in government formation talks", time:"3 цаг", timeEn:"3 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Knesset%20Israeli%20Parliament%20Building%20(41404889170).jpg?width=760", text:"Израилын сөрөг хүчний удирдагч, цэргийн жанжин асан Гади Эйзенкот парламентын сонгуулийн дараа засгийн газар байгуулах хэлэлцээнд мэдэгдэхүйц ахиц гарсан гэж мэдэгдлээ.\n\nАрабын нэгдсэн жагсаалт пүрэв гарагт түүнийг Ерөнхий сайдад нэр дэвшүүлэн дэмжихээ мэдэгдсэнээр Эйзенкот Ерөнхийлөгчийн нэр дэвшүүлэх саналд одоогийн Ерөнхий сайд Бенжамин Нетаньяхугаас хол тасарч тэргүүлж эхэлжээ.\n\nЕрөнхийлөгч Ицхак Херцог намын удирдагчидтай зөвлөлдөж, засгийн газар байгуулах асуудлаар шийдвэр гаргахаар ажиллаж байна.\n\nИзраилын сонгуулийн дараах улс төрийн хэлэлцээ ийнхүү шийдвэрлэх шатанд орж, тус улсын Засгийн газрын ирээдүй олон улсын анхаарлын төвд байна. Ойрхи Дорнодын бүс нутгийн хурцадмал байдал үргэлжилж байгаа энэ үед Израилын Засгийн газрын бүрэлдэхүүн бүс нутгийн тогтвортой байдалд шууд нөлөөлнө гэж ажиглагчид үзэж байна.", textEn:"Israeli opposition leader and former military chief Gadi Eisenkot has reported significant progress in negotiations aimed at forming a new government following the country's parliamentary election.\n\nThe Arab Joint List announced on Thursday that it would recommend him for prime minister, widening his lead over incumbent Prime Minister Benjamin Netanyahu in presidential nominations.\n\nPresident Isaac Herzog is consulting party leaders as he works toward a decision on forming a government.\n\nIsrael's post-election political negotiations have thus entered a decisive phase, and the future of the country's government is in the international spotlight. Observers say the composition of Israel's government will directly affect regional stability at a time when tensions in the Middle East continue."},
  {id:9, cat:"delhii", title:"Парагвайн Ерөнхийлөгч Сантьяго Пенья огцорлоо", titleEn:"Paraguay's President Santiago Pena resigns", time:"3 цаг", timeEn:"3 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/00%203819%20Asunci%C3%B3n%20-%20Paraguay%20(S%C3%BCdamerika).jpg?width=760", text:"Парагвайн Ерөнхийлөгч Сантьяго Пенья пүрэв гарагт огцорч байгаагаа зарлалаа. Түүний шийдвэр нь Ueno Bank цахим банкны хямралын улмаас үүссэн улс төрийн дарамт улам нэмэгдсэнтэй холбоотой юм.\n\nUeno Bank-ны хямралын улмаас сая сая харилцагч дансандаа нэвтэрч чадахгүйд хүрч, ойролцоогоор 3 сая хүний хадгаламж царцсан нь тус улсад улс төрийн хямрал дэгдээсэн байна.\n\nПарламентын гишүүд Ерөнхийлөгчид итгэл хүлээлгэх эсэх асуудлаар хэлэлцүүлэг өрнүүлж, огцруулах журмын талаар ярилцаж байсан юм.\n\nБанкны хямрал болон Ерөнхийлөгчийн огцролт нь Парагвайн санхүүгийн тогтолцоо, улс төрийн тогтвортой байдалд ноцтой сорилт болж байна. Тус улсын эрх баригчид банкны харилцагчдын эрх ашгийг хамгаалах, санхүүгийн системийн итгэлийг сэргээх арга хэмжээ авах шаардлагатай тулгарч байна.", textEn:"Paraguayan President Santiago Pena announced his resignation on Thursday. His decision follows mounting political pressure over the crisis at the digital lender Ueno Bank.\n\nThe Ueno Bank crisis left millions of customers unable to access their accounts, with the savings of around three million people frozen, triggering a political crisis in the country.\n\nLawmakers had been debating impeachment proceedings against the president.\n\nThe banking crisis and the president's resignation pose a serious challenge to Paraguay's financial system and political stability. The country's authorities now face the task of protecting bank customers and restoring trust in the financial system."},
  {id:10, cat:"delhii", title:"Трамп Ираны асуудлаар шийдвэр гаргана гэлээ", titleEn:"Trump says he will soon decide on Iran", time:"3 цаг", timeEn:"3 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Tehran%20skyline-%20Alborz%20Mountains%20on%20background-20150401.jpg?width=760", text:"АНУ-ын Ерөнхийлөгч Дональд Трамп пүрэв гарагт үндэсний аюулгүй байдлын зөвлөхүүдтэйгээ уулзсаны дараа Ирантай холбоотой цэргийн ажиллагааг дахин эхлүүлэх эсэх талаар удахгүй шийдвэр гаргана гэж мэдэгдлээ. Тэрбээр АНУ-ын завсрын сонгууль дууссан тул одоо шийдвэр гаргах цаг болсон гэж онцолсон байна.\n\nҮүний зэрэгцээ Иран улс Катарын зуучлалаар АНУ-д цөмийн санал илгээсэн бөгөөд уг саналыг зөвхөн АНУ Ираны тавьсан долоон шаардлагыг биелүүлж, Хормузын хоолойг дахин нээсний дараа хэлэлцэх боломжтой гэж Ираны өндөр албан тушаалтан Ройтерс агентлагт мэдээлжээ.\n\nКатарын Эмир Шейх Тамим бин Хамад Аль Тани болон Ерөнхийлөгч Трамп нар АНУ-Ираны хоорондын хурцадмал байдлыг бууруулах хүчин чармайлтын талаар хэлэлцсэн байна.\n\nПерсийн булан дахь далайн аюулгүй байдал олон улсын анхаарлын төвд хэвээр байна. Ираны цэргийн байгууллагаас худалдааны танкер хөлөг онгоцнуудад халдсан, мина дэлбэрсэн гэх мэдээллүүд гарсан бол Газын зурвасаас Израилын цэргийн ажиллагааны улмаас энгийн иргэд амь насаа алдсан тухай мэдээллүүд ирсээр байна. Нүүлгэн шилжсэн гэр бүлүүдийн орон байрны хямрал ч гүнзгийрч, 162,000 гаруй майхан ашиглах боломжгүй болсон гэж мэдээлжээ.", textEn:"US President Donald Trump said on Thursday that he will soon decide whether to resume military action over Iran, after a meeting with his national security advisers. He noted that now that the US midterm elections are over, it is time to make a decision.\n\nAt the same time, Iran has sent the United States a nuclear proposal via Qatar, which would only be discussed after the United States meets Iran's seven demands to reopen the Strait of Hormuz, a senior Iranian official told Reuters.\n\nQatar's Emir Sheikh Tamim bin Hamad Al Thani and President Trump discussed efforts to reduce tensions between the United States and Iran.\n\nMaritime security in the Persian Gulf remains a major international concern. Iranian military authorities have reported incidents involving commercial tankers, including vessels allegedly damaged by mines, while reports from Gaza describe further casualties from Israeli military operations, including civilians. The shelter crisis facing displaced families is also deepening, with more than 162,000 tents reported unusable."},
  {id:11, cat:"delhii", title:"Францад 600 мянган хүн жагсав", titleEn:"Around 600,000 people demonstrate across France", time:"4 цаг", timeEn:"4 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Paris%20-%20anti%20ACTA%20protest%2011%20February%202012%20-%20crowd.jpg?width=760", text:"Пүрэв гарагт Франц даяар болсон жагсаалд 600,000 орчим хүн оролцсон гэж BFM TV суваг Францын Дотоод хэргийн яамны урьдчилсан тооцоог иш татан мэдээллээ.\n\nЖагсаал улс даяар өрнөж, олон хотод олон мянган хүн гудамжинд гарсан байна.\n\nФранцын нийгэм, улс төрийн амьдралд жагсаал, олон нийтийн эсэргүүцэл чухал байр суурь эзэлсээр байгаа бөгөөд эрх баригчид жагсагчдын шаардлагыг хэрхэн хүлээж авах нь анхаарлын төвд байна. Жагсаалын цар хүрээ, зохион байгуулалт нь Францын нийгэм дэх сэтгэл ханамжгүй байдлын хэмжээг харуулж байгаа гэж ажиглагчид үзэж байна.", textEn:"Around 600,000 people took part in demonstrations across France on Thursday, French television channel BFM TV reported, citing an initial estimate by the French Interior Ministry.\n\nThe demonstrations spread across the country, with thousands of people taking to the streets in many cities.\n\nDemonstrations and public protest continue to play an important role in France's social and political life, and how the authorities respond to the demonstrators' demands is in the spotlight. Observers say the scale and organisation of the protests show the extent of discontent in French society."},
  {id:12, cat:"delhii", title:"Ньюсом Калифорнийн цаазаар авах 548 ялыг хөнгөлөв", titleEn:"Newsom commutes all 548 California death sentences", time:"4 цаг", timeEn:"4 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Yuma%20Territorial%20Prison%20cell%20doors.jpg?width=760", text:"Калифорни мужийн захирагч Гэвин Ньюсом тус мужийн цаазаар авах ялтай бүх 548 хоригдлын ялыг насан туршийн хорих ялаар сольж хөнгөллөө.\n\nИйнхүү Калифорнид цаазаар авах ялтай нэг ч хоригдол үлдэхгүй болсон нь АНУ-ын цаазаар авах ялын талаарх маргаанд чухал үйл явдал боллоо.\n\nКалифорни муж нь АНУ-д цаазаар авах ялтай хамгийн олон хоригдолтой мужуудын нэг байсан юм. Ньюсом өмнө нь цаазаар авах ялыг эсэргүүцэж, түүний гүйцэтгэлийг түдгэлзүүлж байсан билээ.\n\nЗахирагчийн шийдвэр нь цаазаар авах ялын шударга байдал, хэрэгжилтийн талаарх олон жилийн маргааны үргэлжилэл бөгөөд хүний эрхийн байгууллагууд уг шийдвэрийг сайшааж байна.", textEn:"California Governor Gavin Newsom has commuted the sentences of all 548 prisoners on the state's death row to life in prison.\n\nThis means California now has no prisoners under a death sentence — a significant moment in the debate over capital punishment in the United States.\n\nCalifornia was one of the states with the largest death-row populations in the US. Newsom had previously opposed the death penalty and suspended its implementation.\n\nThe governor's decision continues a years-long debate over the fairness and application of capital punishment, and human rights organisations have welcomed it."},
  {id:13, cat:"sport", title:"100 буудалт даамын ДАШТ-д Монгол Улс 5 дахь жилдээ багаараа аваргаллаа", titleEn:"Mongolia wins draughts world team title for fifth straight year", time:"5 цаг", timeEn:"5 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Draughts%20board%20game%20caf%C3%A9%20Haggerton%202019.jpg?width=760", text:"БНХАУ-ын Шинтай хотод болж буй 100 буудалт даамын өсвөр, залуучуудын дэлхийн аварга шалгаруулах тэмцээнд Монгол Улс багаараа 5 дахь жилдээ тэргүүн байр эзэллээ.\n\nТэмцээнд Олон улсын даамын холбооны гишүүн 15 орны 348 тамирчин таван насны ангилалд өрсөлдөж байна.\n\nМонгол Улсын баг 4 алт, 3 мөнгө, 3 хүрэл медаль хүртсэн амжилтаар 2022, 2023, 2024, 2025, 2026 онд дараалан тэргүүн байр эзэлсэн юм.\n\nЭнэ амжилт нь Монголын даамын спортын залуу үеийн ур чадвар, дасгалжуулагчдын ажлын үр дүн, тус спортын уламжлалт хүчирхэг байдлыг дахин нотоллоо. Даам нь Монголд өргөн дэлгэрсэн оюуны спорт бөгөөд залуу тамирчид олон улсын тавцанд тогтмол амжилт гаргаж байна.", textEn:"Mongolia has won the team title for the fifth consecutive year at the Youth World Championship in 100-square draughts, held in Xintai, China.\n\nA total of 348 players from 15 member countries of the International Draughts Federation are competing in five age categories.\n\nThe Mongolian team took first place with 4 gold, 3 silver and 3 bronze medals, topping the standings in 2022, 2023, 2024, 2025 and 2026 in a row.\n\nThe result once again confirms the skill of Mongolia's young draughts players, the work of their coaches, and the sport's traditional strength in the country. Draughts is a widely played mind sport in Mongolia, and young players regularly succeed on the international stage."},
  {id:14, cat:"sport", title:"Монголын баг спорт өрөлтийн Азийн аваргад оролцохоор Тайландыг зорилоо", titleEn:"Mongolian team heads to Thailand for Asian sport stacking championship", time:"5 цаг", timeEn:"5 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Sport-Stacking.jpg?width=760", text:"Спорт өрөлтийн 2026 оны Азийн аварга шалгаруулах тэмцээн (WSSA 2026 Asian Sport Stacking Championships) 2026 оны 11 дүгээр сарын 6-8-ны өдрүүдэд Тайланд улсын Чонбури мужийн Си Рача хотод зохион байгуулагдана.\n\nТус тэмцээнд Монгол Улсаа төлөөлөн нийт 54 тамирчин, багш дасгалжуулагч, эцэг эх, асран хамгаалагчдын хамт нийт 66 хүний бүрэлдэхүүнтэй баг оролцохоор Тайланд улсыг зорьж байна.\n\nАзийн 11 улсын 550 орчим шилдэг тамирчид нэгэн дор цуглаж, ур чадвар, хурд, авхаалж самбаагаараа өрсөлдөх бөгөөд манай тамирчид олон улсын тэмцээнээс туршлага хуримтлуулж, ур чадвараа ахиулахаар бэлтгэлээ хангаад байна.\n\nСпорт өрөлт нь хурд, нарийвчлал шаарддаг спорт бөгөөд сүүлийн жилүүдэд Монголд залуусын дунд эрчимтэй хөгжиж байгаа юм. Аяганыг секундын дотор өрж, буулгах энэ спортод тамирчдын гарны хурд, анхаарал төвлөрөлт шийдвэрлэх үүрэгтэй.", textEn:"The 2026 Asian Sport Stacking Championships (WSSA 2026 Asian Sport Stacking Championships) will be held on November 6-8, 2026, in Si Racha, Chonburi province, Thailand.\n\nMongolia will be represented by a 66-member delegation, including 54 athletes, coaches, parents and guardians.\n\nAround 550 of Asia's best athletes from 11 countries will gather to compete in skill, speed and dexterity, and Mongolian athletes have prepared to gain experience from the international competition and improve their skills.\n\nSport stacking is a sport demanding speed and precision, and it has been developing rapidly among young people in Mongolia in recent years. In this sport, cups are stacked and unstacked within seconds, and hand speed and concentration are decisive."},
  {id:15, cat:"soyol", title:"«Монгол бахархал-бүтээлч сар» аян 11 дүгээр сард болно", titleEn:"\"Mongolian Pride – Creative Culture\" month runs in November", time:"6 цаг", timeEn:"6 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Men%20and%20Women%20in%20Traditional%20Mongolian%20Dress%20Look%20on%20as%20Secretary%20Kerry%20Attends%20a%20%22Mini-Nadaam%22%20at%20a%20Field%20Outside%20of%20Ulaanbaatar%20(27506837976).jpg?width=760", text:"Монгол хүний үндэсний бахархал, эв нэгдлийг бэхжүүлэх, монгол хэл, бичиг, түүх, соёл, өв уламжлал, нүүдлийн соёл иргэншлийн үнэт зүйлсийг хадгалан хамгаалж, хойч үедээ өвлүүлэн уламжлах нь үндэсний оюун санааны дархлааг бэхжүүлэхэд чухал ач холбогдолтой юм.\n\nТүүнчлэн 2026 онд Монголын төрт ёсны түүхэнд 1206 оны Их хуралдайгаар Тэмүжинг Чингис хаанд өргөмжилж, Их Монгол Улсыг байгуулсан түүхэн үйл явдлын 820 жилийн ой тохиож байна.\n\nИймд Засгийн газрын хэрэгжүүлэгч агентлаг Соёл, урлагийн газраас 2026 оны 11 дүгээр сарыг «МОНГОЛ БАХАРХАЛ-СОЁЛЫН БҮТЭЭЛЧ» сарын аян болгон тэмдэглэж, улс, бүс, орон нутаг, байгууллагын түвшинд хэрэгжүүлж ажиллах чиглэлийг төрийн болон орон нутгийн өмчийн соёл, урлагийн байгууллагуудад хүргүүллээ.\n\nАяны хүрээнд соёл, уламжлал, түүхээ хүндэтгэх сэтгэлгээг төлөвшүүлэх, төр, нийгмийн зүтгэлтнүүдийн бүтээл туурвил, үзэл санааг түгээн дэлгэрүүлэх, Монгол Улсын Үндсэн хуулийн үзэл санааг сурталчлах, тусгаар тогтнолын үнэ цэн, эрх зүйт соёлын ухамсрыг бэхжүүлэх чиглэлээр үйл ажиллагаа зохион байгуулна. Соёл, боловсрол, нийгмийн чиглэлээр үйл ажиллагаа явуулдаг мэргэжлийн холбоод, олон нийтийн байгууллагууд, чөлөөт уран бүтээлчид, эрдэмтэн судлаачид үйл ажиллагаагаа уялдуулж ажиллахыг уриалж байна.", textEn:"Strengthening Mongolian national pride and unity, and preserving and passing on to future generations the Mongolian language, script, history, culture, heritage and the values of nomadic civilisation, is important for strengthening the nation's spiritual immunity.\n\nMoreover, 2026 marks the 820th anniversary of the historic event in Mongolian statehood when Temujin was proclaimed Chinggis Khan at the Great Khuraldai of 1206 and the Great Mongol State was founded.\n\nTherefore, the Culture and Arts Agency, a government implementing agency, has designated November 2026 as the \"MONGOLIAN PRIDE – CREATIVE CULTURE\" month campaign, and sent guidance to state and locally owned cultural and arts organisations to implement it at national, regional, local and organisational levels.\n\nWithin the campaign, activities will be organised to foster respect for culture, tradition and history, to spread the works and ideas of state and public figures, to promote the ideals of the Constitution of Mongolia, and to strengthen awareness of the value of independence and a rule-of-law culture. Professional associations, public organisations, independent artists and scholars working in culture, education and society are invited to coordinate their activities."},
  {id:16, cat:"soyol", title:"Mrs.M «Shube Tail» нэртэй шинэ дуугаа гаргалаа", titleEn:"Mrs.M releases new song \"Shube Tail\"", time:"6 цаг", timeEn:"6 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Musicians%20performing%20on%20stage%20at%20a%20night%20concert%20featuring%20vibrant%20lights%20and%20energetic%20atmosphere.jpg?width=760", text:"Монголын хип хоп урсгалын уран бүтээлч, реппер Mrs.M буюу А.Тамир «Shube Tail» нэртэй шинэ синглээ 11 дүгээр сарын 5-нд YouTube сувгаараа дамжуулан сонсогчдод хүргэлээ.\n\nШинэ дуугаа албан ёсны YouTube сувагтаа байршуулсан бөгөөд сонсогчид тус бүтээлийг дүрс бичлэгийн хамт үзэх боломжтой болсон байна.\n\n«Shube Tail» дууны үгийг Mrs.M өөрөө бичиж, хөгжмийн продакшныг Helpsisleet, клипийг Bronzehero бүтээжээ.\n\nРеппер Mrs.M аравдугаар сард «Иргэн баян бол улс баян» нэртэй уран бүтээлээ хүргэсэн бөгөөд сар бүрийн дотор хоёр дахь шинэ дуугаа гаргаж, уран бүтээлээ идэвхтэй үргэлжлүүлж байна.", textEn:"Mongolian hip-hop artist and rapper Mrs.M, also known as A. Tamir, released her new single \"Shube Tail\" on November 5 through her YouTube channel.\n\nThe new song has been posted on her official YouTube channel, where listeners can watch it together with its music video.\n\nMrs.M wrote the lyrics of \"Shube Tail\" herself; the music production was by Helpsisleet and the video by Bronzehero.\n\nIn October, Mrs.M released a work titled \"Irgen Bayan Bol Uls Bayan\" (\"When Citizens Are Rich, the Country Is Rich\"), and with this second new song within a month she continues her active creative work."},
  {id:17, cat:"tech", title:"NASA «X-70 Fractal» туршилтын онгоцоо танилцууллаа", titleEn:"NASA unveils X-70 Fractal experimental aircraft", time:"7 цаг", timeEn:"7 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Next%20Generation%20Experimental%20Aircraft%20Becomes%20NASA%27s%20Newest%20X-Plane.jpg?width=760", text:"АНУ-ын сансар судлалын NASA агентлаг лхагва гарагт Флорида муж дахь Кеннеди сансрын төвд болсон UP.Summit арга хэмжээний үеэр «X-70 Fractal» нэртэй хамгийн сүүлийн үеийн туршилтын онгоцоо танилцууллаа.\n\nХүнтэй нисэх X-70 онгоц нь дэвшилтэт, хурдан дахин тохируулах боломжтой нислэгийн удирдлагын технологиор тоноглогдсон бөгөөд урьд өмнө нь хүнтэй нислэгт хэзээ ч үзүүлж байгаагүй байдлаар онгоцны маневрлах чадварыг судлах боломж олгоно гэж NASA мэдээллээ.\n\nОнгоцны модульчлагдсан загвар нь дотоод болон гадна талд 2,000 фунт (907 кг) хүртэл туршилтын ачаа тээвэрлэх боломжтой бөгөөд судалгааны багууд туршилтын тоног төхөөрөмжөө хурдан сольж, нэг туршилтаас нөгөөд шилжих боломжтой юм.\n\nX-70-ийн хөөрөх жин 10,000 фунт (4,536 кг), аялалын хурд нь дууны хурдны 0.75 дахин (Mach 0.75), дээд өндөр нь 45,000 фут (13,700 метр), нислэгийн зай нь 1,726 миль (1,500 далайн миль буюу 2,778 км) хүрнэ.\n\nNASA-гийн захирал Жаред Айзекман «X-70 нь NASA-д хүнтэй, өндөр үзүүлэлттэй туршилтын тавцан олгож байна. Модульчлагдсан загвар, ачааг хурдан солих чадвар нь манай багийг нисч, суралцаж, нэг туршилтаас нөгөөд хурдан шилжих боломжийг олгоно» гэж хэллээ. Агентлаг онгоцыг NASA-гийн нэр дор хоёр жилийн дотор анх удаа нисгэнэ гэж найдаж байна. Ирээдүйд хэлбэрээ өөрчилдөг далавч, чиглэл өөрчлөх хөдөлгүүр, богино хөөрөлтөд зориулсан сэнс зэрэг технологийг энэ онгоцоор туршиж болох юм.", textEn:"NASA, the US space agency, unveiled its newest experimental aircraft, the X-70 Fractal, on Wednesday during the UP.Summit at the agency's Kennedy Space Center in Florida.\n\nThe crewed X-70 features advanced, rapidly reconfigurable flight-control technology that will allow NASA to explore aircraft manoeuvrability in ways never before demonstrated in crewed flight.\n\nIts modular design can accommodate up to 2,000 pounds (907 kg) of experimental payloads in internal and external locations, allowing research teams to swap experimental equipment quickly and move from one experiment to the next.\n\nThe X-70 has a takeoff weight of 10,000 pounds (4,536 kg), cruises at Mach 0.75, reaches altitudes of up to 45,000 feet (13,700 metres), and has a range of 1,726 miles (1,500 nautical miles, or 2,778 km).\n\nNASA Administrator Jared Isaacman said: \"The X-70 gives NASA a crewed, high-performance platform. Its modular design and ability to rapidly swap payloads will keep our teams flying, learning, and moving quickly from one experiment to the next.\" The agency expects its first flight under the NASA banner within the next two years. In the future, technologies such as morphing wings, thrust vectoring and lift fans for short takeoff could be tested on this aircraft."},
  {id:18, cat:"oron-nutag", title:"Завхан: Ойгон багийн иргэдийн хурал цаг үеийн асуудлуудыг шийдвэрлэлээ", titleEn:"Zavkhan: Oigon bag citizens' meeting resolves local issues", time:"7 цаг", timeEn:"7 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Mongolian%20Ger.jpg?width=760", text:"Завхан аймгийн Түдэвтэй сумын Ойгон багийн Иргэдийн Нийтийн Хурал 2026 оны 11 дүгээр сарын 4-ний өдөр хуралдлаа.\n\nХуралдаанаар багийн Засаг даргын ажлын тайлан болон мал аж ахуй, газар эзэмшилтэй холбоотой зургаан асуудлыг хэлэлцэн шийдвэрлэсэн байна.\n\nХурал эхлэхийн өмнө сумын Засаг даргын Тамгын газраас сумын 100 жилийн ойн ажлын тайланг танилцуулсан бөгөөд хуралдаанаар багийн Засаг даргын 2026 оны ажлын тайланг хэлэлцэж, аймаг, сумын аварга малчинд нэр дэвшүүлэх асуудлыг авч үзжээ.\n\nМөн чонын ав, хуц ухнын асуудал, хашааны тор солих болон газар эзэмших хүсэлтүүдийг шийдвэрлэсэн байна. Хурлын дараа хөзрийн тэмцээн зохион байгуулж, шалгарсан багийг шагнасан юм. Багийн иргэдийн хурал нь орон нутгийн тулгамдсан асуудлыг иргэд өөрсдөө хэлэлцэн шийдвэрлэх чухал хэлбэр юм.", textEn:"The Citizens' Public Meeting of Oigon bag, Tudevtei soum, Zavkhan aimag, convened on November 4, 2026.\n\nThe meeting discussed and decided six issues, including the bag governor's work report and matters related to livestock and land possession.\n\nBefore the meeting, the soum governor's office presented a report on the work for the soum's 100th anniversary. The meeting reviewed the bag governor's 2026 work report and considered nominations for aimag and soum champion herders.\n\nIt also decided on wolf control, ram issues, replacing fence nets, and land possession requests. After the meeting, a card tournament was held and the winning team was awarded. The bag citizens' meeting is an important way for local residents to discuss and decide pressing local issues themselves.", region:"zavkhan"},
  {id:19, cat:"oron-nutag", title:"«Говийн бүс-2026» шатрын аварга Өмнөговьд эхэллээ", titleEn:"\"Gobi Region-2026\" chess championship opens in Umnugovi", time:"8 цаг", timeEn:"8 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Paul%20Morphy%20Memorial%20Chess%20Tournament%202012%2016.jpg?width=760", text:"Шатрын спортыг орон нутагт түгээн дэлгэрүүлэх, говийн бүсийн тамирчдын ур чадварыг дээшлүүлэх, харилцан туршлага солилцох боломжийг бүрдүүлэх зорилготой «Говийн бүс-2026» шатрын аварга шалгаруулах тэмцээний нээлт Өмнөговь аймагт боллоо.\n\nТэмцээнд Өмнөговь, Дундговь, Дорноговь, Говьсүмбэр аймгийн 240 гаруй тамирчин оролцож, аваргуудаа тодруулахаар өрсөлдөж байна.\n\n«Говийн бүс-2026» тэмцээнийг Өмнөговь аймгийн Нутгийн зөвлөлийн дарга Д.Бат-Эрдэнэ ерөнхий ивээн тэтгэгчээр, Улсын Их Хурлын гишүүн Р.Сэддорж, аймгийн Иргэдийн Төлөөлөгчдийн Хурлын дарга О.Эрдэнэ-Өрнөх ивээн тэтгэгчээр дэмжин ажиллаж байна. Говийн бүсийн тамирчид нэгэн дор цугларч өрсөлдөх нь шатрын спортыг орон нутагт хөгжүүлэхэд чухал ач холбогдолтой гэж зохион байгуулагчид үзэж байна.", textEn:"The \"Gobi Region-2026\" chess championship has opened in Umnugovi aimag, aiming to spread chess in rural areas, raise the skills of players from the Gobi region, and create opportunities to exchange experience.\n\nMore than 240 players from Umnugovi, Dundgovi, Dornogovi and Govisumber aimags are competing to determine the champions.\n\nThe championship is supported by D. Bat-Erdene, chair of the Umnugovi Local Council, as general sponsor, and by Member of Parliament R. Seddorj and O. Erdene-Urnukh, chair of the aimag Citizens' Representatives Khural, as sponsors. The organisers say bringing together players from the Gobi region to compete is important for developing chess in rural areas."},
];
function aTitle(a){ return LANG === "en" ? (a.titleEn || a.title) : a.title; }
function aTime(a){ return LANG === "en" ? (a.timeEn || a.time) : a.time; }
function aText(a){ if(a.text) return LANG === "en" ? (a.textEn || a.text) : a.text; return SAMPLE_TEXT[LANG][a.id === 1 ? "long" : "short"]; }
function aRegion(a){ return a.region ? ((REGIONS[LANG] && REGIONS[LANG][a.region]) || a.region) : ""; }

// ===== Ханш · Цаг агаар (өдөр бүр шинэчлэгдэнэ; цаг агаарыг Open-Meteo-гоос шууд татна) =====
const RATES = {date:"2026-11-07", items:[
  {code:"USD", mnt:3600.44, chg:1}, {code:"EUR", mnt:4024.21, chg:-1}, {code:"JPY", mnt:22.8, chg:1},
  {code:"CNY", mnt:539.8, chg:1}, {code:"KRW", mnt:2.66, chg:-1}, {code:"RUB", mnt:43.96, chg:1}, {code:"GBP", mnt:4825.13, chg:-1}
]};
let WEATHER = [
  {city:"Улаанбаатар", cityEn:"Ulaanbaatar", lat:47.9212, lon:106.9186, tz:"Asia/Ulaanbaatar", temp:-11, code:2},
  {city:"Токио", cityEn:"Tokyo", lat:35.6762, lon:139.6503, tz:"Asia/Tokyo", temp:14, code:3},
  {city:"Сөүл", cityEn:"Seoul", lat:37.5665, lon:126.978, tz:"Asia/Seoul", temp:5, code:0},
  {city:"Бээжин", cityEn:"Beijing", lat:39.9042, lon:116.4074, tz:"Asia/Shanghai", temp:5, code:0},
  {city:"Москва", cityEn:"Moscow", lat:55.7558, lon:37.6173, tz:"Europe/Moscow", temp:3, code:3}
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
  {yt:"wztrr-LKx0U", title:"Асуудлын мөрөөр... /Сурвалжилга/ Нийтийн эзэмшлийн авто зогсоол", titleEn:"Following the issue... /Report/ Public parking lots", src:"МҮОНТ", srcEn:"MNB", srcFull:"МҮОНТ (Монголын үндэсний олон нийтийн телевиз)", srcFullEn:"MNB (Mongolian National Broadcaster)"},
  {yt:"b5MGTsoHrCY", title:"Эргэх дөрвөн цаг / Төв аймгийн Сүмбэр сумаас бэлтгэв/", titleEn:"Four seasons / Report from Sümber soum, Töv aimag/", src:"МҮОНТ", srcEn:"MNB", srcFull:"МҮОНТ (Монголын үндэсний олон нийтийн телевиз)", srcFullEn:"MNB (Mongolian National Broadcaster)"},
  {yt:"in8zj4A9dKE", title:"ТООН ТОЙМ", titleEn:"By the Numbers", src:"Eagle TV", srcEn:"Eagle TV", srcFull:"Eagle TV (Ийгл телевиз)", srcFullEn:"Eagle TV"},
  {yt:"M_oArVRRA7o", title:"Шинжээчийн цаг: АНУ-ын хөрөнгийн зах зээлийг юу хөдөлгөж байна вэ?", titleEn:"Expert's hour: What is driving the US stock market?", src:"Eagle TV", srcEn:"Eagle TV", srcFull:"Eagle TV (Ийгл телевиз)", srcFullEn:"Eagle TV"},
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
