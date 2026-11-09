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

// ===== Бодит мэдээнүүд (2026-11-10) — өдөр бүр шинэчлэгдэнэ =====
const ARTICLES = [
  {id:1, cat:"uls-tor", title:"Монгол бахархлын өдөр: Их Монгол Улс байгуулагдсаны 820 жилийн ойд зориулсан хүндэтгэлийн хуралдаан өнөөдөр болно", titleEn:"Mongolian Pride Day: Ceremonial parliament session today marks 820 years of the Great Mongol State", time:"15 мин", timeEn:"15 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Genghis%20Khan%20Equestrian%20Statue%2C%20photo%20by%20Vaiz%20Ha.jpg?width=1000", text:"Өнөөдөр буюу 2026 оны 11 дүгээр сарын 10-нд Эзэн Богд Чингис хааны мэндэлсний 864 жилийн ой, “Монгол бахархлын өдөр” тохиож байна. Энэ өдөр Их Монгол Улс байгуулагдсаны 820 жилийн түүхэн ойд зориулсан Улсын Их Хурлын хүндэтгэлийн хуралдаан 10.00 цагт “Их хуралдай” танхимд болно.\n\nУлсын Их Хурлын дарга С.Бямбацогт 11 дүгээр сарын 3-нд 431 дүгээр захирамж гаргаж, хүндэтгэлийн хуралдааныг товлосон юм. Улсын Их Хурлын тухай хуульд Монгол Улсын түүх, тусгаар тогтнол, бүрэн эрхт байдалтай салшгүй холбоотой түүхэн ой, үйл явдлыг тэмдэглэхдээ хүндэтгэлийн хуралдаан зарлан хуралдуулж болно гэж заасан байдаг. Хуралдаан нь билгийн тооллын өвлийн тэргүүн сарын шинийн 1-ний өдөр буюу өнөөдөр тохиож байна.\n\nОйн хүрээнд өчигдөр буюу 11 дүгээр сарын 9-нд Төрийн ордонд “Их Засаг ба Хууль засаглахуй” сэдэвт эрдэм шинжилгээний хурал эхэллээ. Улсын Их Хурлын дарга хурлыг нээж үг хэлэхдээ найман зууны тэртээ өвөг дээдэс маань Их Хуралдайгаа хуралдуулж, төрийн хэргийг зөвшин хэлэлцдэг байсан бол өнөөдөр бид парламентын танхимд тэрхүү төрийн ухааны өвийг эргэн дурсаж, ардчилал, зөвшилцөл, хууль дээдлэх ёсны үнэт зүйлстэй холбон хэлэлцэж байна гэж онцолсон юм.\n\nХурлын анхны илтгэлийг Монгол Улсын 3 дахь Ерөнхийлөгч, Хархорум хотын Зөвлөлийн дарга Н.Энхбаяр “Дэг журам ба хууль: Pax Mongolica, Их Засаг, Хархорум” сэдвээр танилцуулсан байна. Хурлыг Улсын Их Хурлын Тамгын газар, Парламентын судалгаа, хөгжлийн хүрээлэн болон Хархорум хотын Зөвлөл хамтран зохион байгуулж байгаа юм.\n\nХүндэтгэлийн хуралдаан нь Монгол төрийн залгамж чанар, үндэсний бахархал, төрт ёс, түүх цадиг, өв соёлын уламжлалыг эрхэмлэн дээдэлж, эх оронч үзэл, үндэсний эв нэгдлийг бэхжүүлэх зорилготой гэж Улсын Их Хурлаас мэдээллээ.", textEn:"Today, November 10, 2026, marks the 864th anniversary of the birth of Chinggis Khaan and “Mongolian Pride Day”. A ceremonial session of the State Great Khural dedicated to the 820th anniversary of the founding of the Great Mongol State will be held at 10:00 today in the “Ikh Khuraldai” hall.\n\nSpeaker of Parliament S. Byambatsogt issued Order No. 431 on November 3, scheduling the ceremonial session. The Law on the State Great Khural allows a ceremonial session to be convened to mark historic anniversaries inseparably linked to Mongolia's history, independence and sovereignty. The session falls on the first day of the first winter month of the lunar calendar — today.\n\nAs part of the anniversary, an academic conference on “The Great Yassa and the Rule of Law” opened yesterday, November 9, at the State Palace. Opening the conference, the Speaker said that eight centuries ago our ancestors convened their Great Khuraldai to deliberate on state affairs by consensus, and that today, in the parliament chamber, that heritage of statecraft is being recalled and discussed together with the values of democracy, consensus and the rule of law.\n\nThe first paper of the conference was presented by Mongolia's third President and Chairman of the Kharkhorum City Council, N. Enkhbayar, on “Order and Law: Pax Mongolica, the Great Yassa and Kharkhorum”. The conference is jointly organised by the Secretariat of the State Great Khural, the Parliamentary Research and Development Institute and the Kharkhorum City Council.\n\nParliament said the ceremonial session aims to honour the continuity of the Mongolian state, national pride, statehood, history and cultural heritage, and to strengthen patriotism and national unity."},
  {id:2, cat:"uls-tor", title:"Ерөнхий сайдыг сүрдүүлсэн хэрэгт холбогдуулан гурван хүнийг цагдан хорьжээ", titleEn:"Three people detained over threats against the Prime Minister", time:"30 мин", timeEn:"30 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Legal%20Gavel%20%2827571702173%29.jpg?width=760", text:"Монгол Улсын Ерөнхий сайдыг сүрдүүлсэн хэрэгт холбогдуулан гурван иргэнийг шүүгчийн захирамжаар нэг сар цагдан хорьжээ. Энэ тухай LiveTV.mn мэдээлсэн байна.\n\nШүүгч Э.Оюунтунгалагийн захирамжаар Ж.Мөнхсэргэлэн, Б.Даваахүү, Ц.Лхагвазаяа нарын гурван хүнийг цагдан хорьсон бөгөөд тэднийг нийтийн албан тушаалтныг заналхийлж, сүрдүүлсэн үндэслэлээр шалгаж байгаа аж.\n\nЭнэ мэдээ даваа гарагийн өглөө Монгол хэрэглэгчдийн X сүлжээнд хамгийн их яригдсан сэдвүүдийн нэг болсон байна. Хэргийн талаарх дэлгэрэнгүй мэдээлэл, шалгалтын явцын талаар эрх баригчид нэмэлт мэдээлэл өгөх төлөвтэй байна. Ерөнхий сайдыг заналхийлсэн хэрэг нь нийтийн албан тушаалтны эсрэг гэмт хэрэгт тооцогддог бөгөөд хуулийн дагуу шалгагдаж байгаа юм.", textEn:"Three citizens have been detained for one month by court order in connection with a case of threatening the Prime Minister of Mongolia, LiveTV.mn reported.\n\nBy order of Judge E. Oyuntungalag, J. Munkhsergelen, B. Davaakhuu and Ts. Lkhagvazaya were remanded in custody and are being investigated on grounds of threatening and intimidating a public official.\n\nThe news became one of the most discussed topics among Mongolian users of the X network on Monday morning. The authorities are expected to provide further details about the case and the course of the investigation. Threatening a prime minister is treated as a crime against a public official and is being investigated under the law."},
  {id:3, cat:"uls-tor", title:"СЗХ-ны даргыг чөлөөлөх асуудлыг УИХ 11 дүгээр сарын 12-нд дахин хэлэлцэнэ", titleEn:"Parliament to revisit dismissal of Financial Regulatory Commission chair on November 12", time:"45 мин", timeEn:"45 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Mongolian%20Parliament%202.JPG?width=760", text:"Санхүүгийн зохицуулах хорооны дарга Т.Жамбаажамцыг үүрэгт ажлаас нь чөлөөлөх асуудлыг Улсын Их Хурлын чуулганы нэгдсэн хуралдааны 11 дүгээр сарын 12-ны пүрэв гарагийн хэлэлцэх асуудалд дахин оруулжээ. Энэ тухай LiveTV.mn мэдээллээ.\n\nТ.Жамбаажамцыг чөлөөлөх асуудлыг өөрийнх нь хүсэлтээр гаргасан бөгөөд Эдийн засгийн байнгын хороо дэмжсэн байна. Гэвч 11 дүгээр сарын 6-ны нууц санал хураалтад оролцсон 94 гишүүний 54 нь дэмжээгүй тул асуудал шийдэгдээгүй үлдсэн юм.\n\nИйнхүү тус асуудлыг чуулганы нэгдсэн хуралдаанаар дахин хэлэлцэхээр төлөвлөж байгаа нь энэ долоо хоногийн улс төрийн анхаарал татсан сэдвүүдийн нэг болж байна. Санал хураалтын үр дүн Санхүүгийн зохицуулах хорооны удирдлагын ирээдүйг тодорхойлох юм.", textEn:"The question of dismissing Financial Regulatory Commission Chair T. Jambaajamts from office has been put back on the agenda of the plenary session of the State Great Khural for Thursday, November 12, LiveTV.mn reported.\n\nThe dismissal was proposed at Jambaajamts' own request, and the Standing Committee on Economy supported it. But in the secret ballot of November 6, 54 of the 94 members who voted did not support it, leaving the matter unresolved.\n\nBringing the issue back before the plenary session makes it one of the political topics to watch this week. The outcome of the vote will determine the future leadership of the Financial Regulatory Commission."},
  {id:4, cat:"uls-tor", title:"О.Алтангэрэл: Хууль бус хөрөнгө хураах хуулийг танхимд хэлэлцэхгүй бол тэмцлийн гал асаана", titleEn:"O. Altangerel: If illegal-assets confiscation bill is not debated in chamber, we will light the fire of struggle", time:"1 цаг", timeEn:"1 hour", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Mongolian%20parliament%20members.jpg?width=760", text:"Улсын Их Хурлын гишүүн О.Алтангэрэл хууль бус хөрөнгийг хураах тухай хуулийн төслийг танхимд хэлэлцэхгүй бол “талбай дээр хэлэлцэж, тэмцлийн галыг асаана” гэж мэдэгдлээ. Түүний мэдэгдлийг LiveTV.mn түгээсэн байна.\n\nХууль бусаар олсон хөрөнгийг хураахыг шаардсан цахим өргөдөл 100 мянган гарын үсгийн босгыг давсан тухай өмнө нь мэдээлж байсан юм. Иргэдийн өргөдөлд Улсын Их Хурал хамгийн оновчтой шийдвэр гаргах ёстой гэсэн байр суурийг УИХ-ын дарга өмнө нь илэрхийлж байв.\n\nХууль бус хөрөнгө хураах асуудал нь сүүлийн үед олон нийтийн анхаарлын төвд байгаа бөгөөд хуулийн төслийн хэлэлцүүлэг цаашид хэрхэн өрнөх нь улс төрийн маргааны чухал сэдэв хэвээр байна.", textEn:"Member of Parliament O. Altangerel has said that if the bill on confiscating illegally obtained assets is not debated in the chamber, “we will debate it in the square and light the fire of struggle”. His statement was carried by LiveTV.mn.\n\nAn online petition demanding the confiscation of illegally obtained assets has passed the threshold of 100,000 signatures, as previously reported. The Speaker of Parliament has earlier said parliament must make the most optimal decision on the citizens' petition.\n\nConfiscation of illegal assets has been at the centre of public attention recently, and how the bill's debate unfolds remains a key subject of political dispute."},
  {id:5, cat:"ediin-zasag", title:"Монголбанк: Төлбөрийн хүндрэлд орсон иргэдийн хэрэглээний зээлийг 48 сар хүртэл бүтцийн өөрчлөлт хийх боломжтой боллоо", titleEn:"Bank of Mongolia: Consumer loans of people in payment difficulty can now be restructured for up to 48 months", time:"1 цаг", timeEn:"1 hour", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Mongolbank%20headquarters%20Ulaanbaatar.jpg?width=760", text:"Монголбанкны Мөнгөний бодлогын хороо 11 дүгээр сарын 3-нд төлбөрийн хүндрэлд орсон иргэдийн цалин, малчны, автомашины зэрэг хэрэглээний зээлийг нэмэлт зээл олгохгүйгээр нийт 48 сар хүртэл бүтцийн өөрчлөлт хийх боломжийг нээсэн тухай Монголбанкны Ерөнхийлөгч Б.Амгалан ярилцлагадаа тайлбарлав.\n\nЭнэ шийдвэр нь өрхийн өрийн дарамтыг бууруулж, иргэдэд зээлээ төлөх бодит боломж олгоход чиглэж байгаа юм. Бүтцийн өөрчлөлт нь зээлийн хугацааг сунгаж, сарын төлбөрийн дарамтыг хөнгөвчлөх замаар хийгдэх аж.\n\nМонголбанкны зүгээс эдийн засгийн хүндрэлтэй үед өрхийн санхүүгийн тогтвортой байдлыг хамгаалах нь мөнгөний бодлогын чухал хэсэг гэж үзэж байна. Шийдвэрийн хэрэгжилт, банкуудын оролцооны талаарх дэлгэрэнгүй мэдээллийг дараа нь мэдээлэх төлөвтэй байна.", textEn:"The Monetary Policy Committee of the Bank of Mongolia decided on November 3 to allow consumer loans — salary, herder and car loans — of people in payment difficulty to be restructured for up to 48 months in total without issuing additional loans, Bank of Mongolia President B. Amgalan explained in an interview.\n\nThe decision is aimed at easing household debt burdens and giving citizens a realistic chance to repay their loans. Restructuring will be done by extending the loan term and easing the monthly repayment burden.\n\nThe Bank of Mongolia sees protecting households' financial stability in difficult economic times as an important part of monetary policy. Further details on implementation and the banks' participation are expected to follow."},
  {id:6, cat:"ediin-zasag", title:"Нийслэлийн 2026 оны төсөвт өөрчлөлт оруулах тухай тогтоолын төслийг II хэлэлцүүлэгт шилжүүллээ", titleEn:"Capital city's 2026 budget amendment draft moves to second reading", time:"2 цаг", timeEn:"2 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Ulaanbaatar%20new%20buildings%20in%20Yaarmag.jpg?width=760", text:"Нийслэлийн иргэдийн Төлөөлөгчдийн Хурлын ээлжит IX хуралдаанаар Нийслэлийн 2026 оны төсөвт нэмэлт, өөрчлөлт оруулах тухай тогтоолын төслийн нэгдүгээр хэлэлцүүлгийг хийж, хоёрдугаар хэлэлцүүлэгт бэлтгүүлэхээр холбогдох хороод болон намын бүлгүүдэд шилжүүллээ.\n\nХэлэлцүүлгийн үеэр НИТХ-ын төлөөлөгчид нийслэлийн томоохон бүтээн байгуулалт, хөрөнгө оруулалтын төсөл, санхүүжилт, газар чөлөөлөлт, дулаан хангамж, нийтийн тээврийн хүртээмж болон нийгмийн дэд бүтцийн асуудлыг хөндөж, холбогдох албан тушаалтнуудаас тодруулга авсан байна.\n\nНийслэлийн Засаг даргын нэгдүгээр орлогч Б.Мөнхбат “Сэлбэ 20 минут”-ын хотын бүтээн байгуулалтын ажил үргэлжилж байгаа бөгөөд 2026 ондоо багтаж борлуулалтаа эхлүүлэхээр төлөвлөсөн гэж мэдээллээ. Дулааны станц барих асуудал нь зөвхөн Чингэлтэй, Сүхбаатар дүүргийн дулаан хангамжийг шийдвэрлэх бус, хойд бүсийн дулааны эх үүсвэр, хангамжийг нэмэгдүүлэх зорилготойг тэрбээр тайлбарлав.\n\nМөн Дулааны хоёрдугаар цахилгаан станцын үнсэн санг батлагдсан зураг төслийн дагуу булшлах ажлыг ирэх оны хоёрдугаар сард багтаан дуусгахаар төлөвлөсөн байна. Хотын дарга Б.Пүрэвдагва нийслэлд хэрэгжүүлэх мега төслүүдийн талаар мэдээлэл өгч, техник, эдийн засгийн үндэслэл, зураг төсөл, байгаль орчны нөлөөллийн үнэлгээ нь бэлэн болсон төслүүдийг эхний ээлжид хэрэгжүүлэхээр төлөвлөж, нийслэлийн төсөвт санхүүгийн хүндрэл учруулахгүй байх зарчмыг баримталж байгаа гэдгийг онцолсон юм.", textEn:"At its 9th regular session, the Citizens' Representatives' Khural of the capital held the first reading of the draft resolution on amending the capital's 2026 budget and referred it to the relevant committees and party groups for preparation for a second reading.\n\nDuring the debate, representatives raised the capital's major construction and investment projects, financing, land clearance, heating supply, public transport accessibility and social infrastructure, and sought clarification from the officials concerned.\n\nFirst Deputy Governor of the capital B. Munkhbat said construction of the “Selbe 20-minute city” is continuing, with sales planned to begin within 2026. He explained that building the heating plant is intended not only to solve heating supply in Chingeltei and Sukhbaatar districts, but to increase heat sources and supply for the whole northern region.\n\nWork to bury the ash pond of Thermal Power Plant No. 2 under the approved design is planned to finish by February next year. Mayor B. Purevdagva briefed the session on the capital's mega projects, saying projects whose feasibility studies, designs and environmental impact assessments are ready will be implemented first, following the principle of not straining the capital's budget."},
  {id:7, cat:"niigem", title:"Хүүхдийн сошиал хэрэглээг зохицуулах хуулийн төслийн нэг заалт шүүмжлэл дагуулав", titleEn:"One clause of bill regulating children's social media use draws criticism", time:"2 цаг", timeEn:"2 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Children%20Playing%20With%20Smartphone%20-%20Kolkata%202019-06-01%201460.JPG?width=760", text:"Нийгмийн сүлжээнд хүүхдийн оролцоог зохицуулах тухай хуулийн төслийн 7.7 дахь заалт Монгол Улсаас нийгмийн сүлжээнд хандахыг бүхэлд нь хаах эрсдэлтэй гэж үзэж, шүүмжлэл дагуулж байна. Энэ тухай Assa.mn мэдээллээ.\n\nХуулийн төслийг 2026 оны долдугаар сарын 22-нд Улсын Их Хуралд өргөн мэдүүлсэн бөгөөд 13-аас доош насны хүүхэд нийгмийн сүлжээнд бүртгэл үүсгэхийг хориглох, 13–16 насны хүүхдэд насанд тохирсон хамгаалалтын тохиргоотойгоор ашиглуулах зохицуулалт тусгажээ.\n\nШүүмжлэгчдийн үзэж байгаагаар тус заалтыг одоогийн хэлбэрээр нь баталбал хүүхдийг хамгаалах зорилгоосоо хальж, нийгмийн сүлжээний үйл ажиллагаанд өргөн хүрээний хязгаарлалт үүсгэж болзошгүй байна. Хуулийн төслийн хэлэлцүүлэг үргэлжилж байгаа бөгөөд заалтыг засч залруулах эсэх нь анхаарлын төвд байна.", textEn:"Clause 7.7 of the draft law on regulating children's participation in social networks is drawing criticism, with critics saying it risks blocking access to social networks from Mongolia altogether, Assa.mn reported.\n\nThe bill was submitted to the State Great Khural on July 22, 2026. It would ban children under 13 from creating social media accounts and allow children aged 13–16 to use social networks only with age-appropriate protection settings.\n\nCritics say that if the clause is adopted in its current form, it could go beyond the aim of protecting children and impose sweeping restrictions on social media operations. Debate on the bill is continuing, and whether the clause will be amended is now in focus."},
  {id:8, cat:"niigem", title:"ТЕГ: Засгийн газрын нууц тогтоол хуурамчаар үйлдэж, 300 сая ам.доллараар залилахыг завдсан бүлгийг илрүүлжээ", titleEn:"Intelligence agency uncovers group that forged secret government resolution in attempted $300 million fraud", time:"3 цаг", timeEn:"3 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Mongolian%20National%20Police%20Agency%20vehicle.jpg?width=760", text:"Засгийн газрын нууц тогтоол, “Эрдэнэт үйлдвэр” төрийн өмчит үйлдвэрийн газрын албан бичиг, тамга тэмдгийг хуурамчаар үйлдэж, Хятадын компанийг 300 сая ам.долларын ашигт малтмалын гэрээгээр хууран мэхлэхийг завдсан бүлэг этгээдийг Тагнуулын ерөнхий газар илрүүлэн шалгаж байгааг iSee.mn, iToim.mn мэдээлэв.\n\nХуурамч баримт бичгүүдийг ашиглан хөрөнгө оруулагчдыг залилахыг оролдсон этгээдүүдийг илрүүлсэн нь төрийн баримт бичгийн аюулгүй байдал, хөрөнгө оруулалтын орчны итгэлцэлд ноцтой сорилт болж байна гэж ажиглагчид үзэж байна.\n\nТагнуулын байгууллага хэргийг шалгаж байгаа бөгөөд хуурамч баримт бичгийг үйлдсэн, ашигласан этгээдүүдийн бүрэн бүрэлдэхүүн, хохирлын хэмжээг тогтоохоор ажиллаж байна. Шалгалтын явцын талаарх дэлгэрэнгүй мэдээллийг дараа нь мэдээлэх төлөвтэй байна.", textEn:"The General Intelligence Agency has uncovered and is investigating a group that forged a secret government resolution and official letters and seals of the state-owned Erdenet Mining Corporation in an attempt to defraud a Chinese company through a 300 million US dollar mineral deal, iSee.mn and iToim.mn reported.\n\nObservers say the exposure of a scheme to defraud investors using forged documents poses a serious challenge to the security of state documents and confidence in the investment environment.\n\nThe intelligence agency is investigating the case and working to establish the full composition of those who produced and used the forged documents, as well as the scale of the damage. Further details on the investigation are expected to follow."},
  {id:9, cat:"niigem", title:"Өнөөдөр ихэнх нутгаар цаг агаар тогтуун, дулаарна; Улаанбаатарт өдөртөө 10 хэм дулаан байна", titleEn:"Mostly calm and warmer today; Ulaanbaatar to reach 10 degrees in the daytime", time:"3 цаг", timeEn:"3 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/2024-10-18%20Ulaanbaatar%201.jpg?width=760", text:"2026 оны 11 дүгээр сарын 10-ны өдөр Монгол орны ихэнх нутгаар цаг агаар тогтуун, өдөртөө дулаарах төлөвтэй байгааг Цаг уур, орчны шинжилгээний газраас мэдээллээ.\n\nАрваннэгдүгээр сарын 8–11-ний өдрүүдэд ихэнх нутгаар өдөртөө дуларч, хур тунадас орохгүй байх төлөвтэй байна. Салхи ихэнх нутгаар секундэд 5–10 метрийн хурдтай салхилна. Дархадын хотгор, Алтай, Хангай, Хөвсгөл, Хэнтийн уулархаг нутаг, Завхан, Заг-Байдраг, Идэр, Тэс голын хөндийгөөр өдөртөө -3…+2 хэм, говийн бүс нутгийн өмнөд хэсгээр +10…+15 хэм, бусад нутгаар +4…+9 хэм дулаан байх төлөвтэй байна.\n\nУлаанбаатар хот орчмоор 11 дүгээр сарын 10-нд багавтар үүлтэй, цас орохгүй. Шөнөдөө -7 хэм хүйтэн, өдөртөө +10 хэм дулаан байна. Салхины хурд шөнөдөө секундэд 4 метр, өдөртөө секундэд 7 метр орчим байх төлөвтэй байна.\n\nХарин 11 дүгээр сарын 12-ноос нутгийн баруун хэсгээр, 13-наас нутгийн хойд хэсгээр цас орж, цасан шуурга шуурах төлөвтэй байгаа тул иргэд, тээвэрчдийг цаг агаарын өөрчлөлтөд анхаарал хандуулахыг Цаг уур, орчны шинжилгээний газраас зөвлөж байна.", textEn:"The weather will be mostly calm and warmer across much of Mongolia today, November 10, 2026, the National Agency for Meteorology and Environmental Monitoring said.\n\nFrom November 8 to 11, daytime temperatures are expected to rise across most of the country with no precipitation. Wind will blow at 5–10 metres per second in most areas. Daytime temperatures will be minus 3 to plus 2 degrees in the Darkhad depression, the Altai, Khangai, Khuvsgul and Khenti mountains and the valleys of the Zavkhan, Zag-Baidrag, Ider and Tes rivers, plus 10 to plus 15 degrees in the southern Gobi, and plus 4 to plus 9 degrees elsewhere.\n\nAround Ulaanbaatar on November 10 there will be little cloud and no snow. Night temperatures will fall to minus 7 degrees and daytime temperatures will reach plus 10 degrees. Wind speed will be around 4 metres per second at night and 7 metres per second in the daytime.\n\nFrom November 12, snow is expected in the western part of the country, and from November 13 in the northern part, with snowstorms, so the agency advises citizens and drivers to pay attention to the changing weather."},
  {id:10, cat:"sport", title:"“ДАКАР 2026”: Э.Анужин элсний бөхийн төрөлд хүрэл медаль хүртлээ", titleEn:"“Dakar 2026”: E. Anujin wins bronze in beach wrestling", time:"4 цаг", timeEn:"4 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/%C3%87im%C9%99rlik%20g%C3%BCl%C9%99%C5%9Fi%20%281%29.jpg?width=760", text:"Сенегалын Дакар хотноо үргэлжилж байгаа залуучуудын олимпын наадмын элсний бөхийн охидын 65 кг-ын жинд Эрхэмбаатарын Анужин хүрэл медаль хүртлээ. Энэ жинд нийт 12 бөх өрсөлдсөн байна.\n\nЭ.Анужин хүрэл медалийн төлөөх замдаа Хорватын Эмануэла Радош, Сенегалын Мэри Манга, АНУ-ын Алиеа Апостол нарыг буулган авч, хагас шигшээд Доминиканы Валерио Росадод ялагдсан байна. Ингээд хүрлийн төлөө Египетийн Малак Абделгалилийг 6:2-оор ялснаар залуучуудын олимпоос Монголын багийн хоёр дахь хүрлийн эзэн боллоо.\n\nДоминиканы Валерио Росадо энэ жинд алтан медаль хүртсэн бол Испанийн Грасила Энинго мөнгө зүүсэн юм. Өмнө нь жүдогийн хөвгүүдийн 55 кг-ын жинд Тунгалагийн Төгсхүслэн хүрэл медаль хүртсэн билээ.\n\nИнгэснээр манай улс энэ удаагийн олимпод хоёр хүрэл медаль хүртсэн амжилтаар Беларусь, Буркино Фасо, Молдав, Польшийн хамт 63 дугаарт жагсаж байна. Одоогийн байдлаар БНХАУ 11 алт, дөрвөн мөнгө, хоёр хүрэлтэй тэргүүлж байгаа бол Япон есөн алт, гурван мөнгө, дөрвөн хүрэлтэй удаалж байна.", textEn:"Erkhembaataryn Anujin has won a bronze medal in the girls' 65 kg beach wrestling at the Youth Olympic Games continuing in Dakar, Senegal. A total of 12 wrestlers competed in this weight class.\n\nOn her way to the bronze, Anujin beat Croatia's Emanuela Radosh, Senegal's Mary Manga and the USA's Aliea Apostol, before losing to the Dominican Republic's Valerio Rosado in the semi-final. She then beat Egypt's Malak Abdelgalil 6:2 in the bronze-medal match, becoming the second bronze medallist of the Mongolian team at these Youth Olympics.\n\nValerio Rosado of the Dominican Republic won gold in this weight class, while Spain's Gracila Eningo took silver. Earlier, Tungalagyn Tugskhuslen won bronze in the boys' 55 kg judo.\n\nWith two bronze medals, Mongolia now ranks 63rd together with Belarus, Burkina Faso, Moldova and Poland. China currently leads with 11 gold, four silver and two bronze medals, followed by Japan with nine gold, three silver and four bronze."},
  {id:11, cat:"sport", title:"Г.Баяндүүрэн байлдааны самбо бөхийн ДАШТ-д гурав дахиа түрүүлж, Монголын баг 1 алт, 2 мөнгө, 1 хүрэл медаль хүртлээ", titleEn:"G. Bayanduren wins third combat sambo world title as Mongolia takes 1 gold, 2 silver and 1 bronze", time:"4 цаг", timeEn:"4 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Sambo%20at%20the%202015%20European%20Games.jpg?width=760", text:"Самбо бөхийн дэлхийн аварга шалгаруулах тэмцээний байлдааны самбо бөхийн төрөлд Г.Баяндүүрэн гурав дахиа түрүүллээ. Энэ тухай МОНЦАМЭ мэдээллээ.\n\nМонголын баг тамирчид тус ДАШТ-ээс нийт 1 алт, 2 мөнгө, 1 хүрэл медаль хүртсэн байна. Г.Баяндүүрэнгийн гурав дахь түрүү нь Монголын самбо бөхийн түүхэнд онцгой амжилт болж байна.\n\nБайлдааны самбо нь бөхийн техник, цохилт, боолтыг хослуулсан спортын төрөл бөгөөд Монголын тамирчид олон улсын тавцанд тогтмол өндөр амжилт үзүүлж байгаа юм. Багийн амжилт нь тус спортын хөгжил, залуу тамирчдын бэлтгэлийн үр дүн гэж ажиглагчид үзэж байна.", textEn:"G. Bayanduren has won the combat sambo category at the Sambo World Championships for the third time, MONTSAME reported.\n\nThe Mongolian team won a total of 1 gold, 2 silver and 1 bronze medal at the championships. Bayanduren's third title is an exceptional achievement in the history of Mongolian sambo.\n\nCombat sambo is a sport combining wrestling technique, striking and submissions, and Mongolian athletes regularly achieve high results on the international stage. Observers see the team's success as the result of the sport's development and the training of young athletes."},
  {id:12, cat:"soyol", title:"“Их Засаг ба Хууль засаглахуй” эрдэм шинжилгээний хурал Төрийн ордонд эхэллээ", titleEn:"“The Great Yassa and the Rule of Law” academic conference opens at the State Palace", time:"5 цаг", timeEn:"5 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Monument%20to%20Genghis%20Khan.jpg?width=760", text:"Их Монгол Улс байгуулагдсаны 820 жилийн түүхэн ойд зориулсан “Их Засаг ба Хууль засаглахуй” сэдэвт эрдэм шинжилгээний хурал Улсын Их Хурлын даргын ивээл дор өнөөдөр буюу 2026 оны 11 дүгээр сарын 9-нд Төрийн ордонд эхэллээ.\n\nХурлыг Улсын Их Хурлын Тамгын газар, Парламентын судалгаа, хөгжлийн хүрээлэн болон Хархорум хотын Зөвлөл хамтран зохион байгуулж байгаа бөгөөд Улсын Их Хурлын дарга С.Бямбацогт нээж үг хэлсэн юм.\n\n“Найман зууны тэртээ өвөг дээдэс маань Их Хуралдайгаа хуралдуулж, төрийн хэргийг зөвшин хэлэлцдэг байсан бол өнөөдөр бид парламентын танхимд тэрхүү төрийн ухааны өвийг эргэн дурсаж, ардчилал, зөвшилцөл, хууль дээдлэх ёсны үнэт зүйлстэй холбон хэлэлцэж байна” хэмээн УИХ-ын дарга онцолсон байна.\n\nЭрдэм шинжилгээний хурлын анхны илтгэлийг Монгол Улсын 3 дахь Ерөнхийлөгч, Хархорум хотын Зөвлөлийн дарга Н.Энхбаяр “Дэг журам ба хууль: Pax Mongolica, Их Засаг, Хархорум” сэдвээр танилцуулсан юм. Түүнчлэн “Улсын Их Хурал таныг сонсож байна” цахим платформ ажиллуулж, иргэдийн дуу хоолойг цаг хугацаа алдахгүй парламентад хүргэх боломжийг нээсэн тухай хурлын үеэр мэдээллээ.", textEn:"The academic conference on “The Great Yassa and the Rule of Law”, dedicated to the 820th anniversary of the founding of the Great Mongol State, opened today, November 9, 2026, at the State Palace under the auspices of the Speaker of the State Great Khural.\n\nThe conference is jointly organised by the Secretariat of the State Great Khural, the Parliamentary Research and Development Institute and the Kharkhorum City Council, and was opened with remarks by Speaker S. Byambatsogt.\n\n“Eight centuries ago our ancestors convened their Great Khuraldai to deliberate on state affairs by consensus, and today, in the parliament chamber, we recall that heritage of statecraft and discuss it together with the values of democracy, consensus and the rule of law,” the Speaker stressed.\n\nThe first paper of the conference was presented by Mongolia's third President and Chairman of the Kharkhorum City Council, N. Enkhbayar, on “Order and Law: Pax Mongolica, the Great Yassa and Kharkhorum”."},
  {id:13, cat:"tech", title:"Хятад Nvidia-ийн гүйцэтгэх захирлыг тагнах оролдлого гэсэн мэдээллийг үгүйсгэв; компанийн хувьцаа уналаа", titleEn:"China dismisses claim of plot to spy on Nvidia CEO; company's shares fall", time:"5 цаг", timeEn:"5 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Jensen%20huang%20stanford%202026-04-30%20003.jpg?width=760", text:"Хятад улс Nvidia компанийн гүйцэтгэх захирал Женсен Хуаныг тагнах оролдлого байсан гэсэн мэдээллийг даваа гарагт үгүйсгэж, тагнуулын тухай мэдээллийг үндэслэлгүй, Бээжингийн эсрэг гүтгэлэг гэж мэдэгдлээ.\n\nNvidia компани гүйцэтгэх захирал Хуан нь гадаадын тагнуулын бай байсан эсэхийг шалгаж байгаа тухай мэдээлэл гарсан бөгөөд түүний ойрын хүн Хятадын тагнуултай холбоотой гэж үзэж байгаа тухай мэдээллүүд гарсан байна. Эдгээр мэдээллийн дараа Nvidia-ийн хувьцаа унасан юм.\n\nХуан нь хиймэл оюуны чипний зах зээлийг тэргүүлдэг Nvidia компанийг удирдаж байгаа бөгөөд АНУ, Хятадын технологийн өрсөлдөөний төвд байгаа юм. Тагнуулын тухай маргаан нь хоёр орны технологийн хурцадмал байдлыг улам нэмэгдүүлж байна гэж ажиглагчид үзэж байна.", textEn:"China on Monday dismissed reports of a plot to spy on Nvidia chief executive Jensen Huang, calling the spying allegations unsubstantiated and a smear campaign against Beijing.\n\nReports said Nvidia was probing whether Huang had been the target of foreign spying, after reports linked a close associate of his to alleged intelligence-gathering activities. Nvidia shares fell after the revelations.\n\nHuang leads Nvidia, which dominates the market for artificial intelligence chips, and sits at the centre of the technological rivalry between the United States and China. Observers say the spying controversy adds to the technological tensions between the two countries."},
  {id:14, cat:"delhii", title:"Орос, Украин, АНУ-ын энхийн хэлэлцээ өнөөдөр Абу Дабид эхэлнэ", titleEn:"Russia-Ukraine-US peace talks begin today in Abu Dhabi", time:"6 цаг", timeEn:"6 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Abu%20Dhabi%20skyline%20-%20corniche.jpg?width=760", text:"Орос, Украин, АНУ-ын төлөөлөгчид өнөөдөр буюу 11 дүгээр сарын 10-нд Арабын Нэгдсэн Эмират Улсын Абу Даби хотод хоёр өдрийн хэлэлцээ эхлүүлнэ. Энэ нь хоёрдугаар сараас хойшхи анхны ийм хэлэлцээ бөгөөд бараг таван жил үргэлжилж буй бүрэн хэмжээний дайныг зогсоох зорилготой юм.\n\nХэлэлцээний гол сэдэв нь аюулгүй байдлын баталгаа байх бөгөөд талууд энхийн гэрээний гол асуудлуудаар байр сууриасаа хол хэвээр байна. Оросын Ерөнхийлөгч Владимир Путин Украин цэргээ Москвагийн дайны эхэнд хууль бусаар өөртөө нэгтгэсэн боловч бүрэн эзэлж чадаагүй дөрвөн бүс нутгаас татахыг шаардаж байгаа юм.\n\nХэлэлцээ нь өнгөрсөн сард АНУ-ын тэргүүн хатагтай Мелания Трампын тусламжтайгаар Оросын эзэлсэн өмнөд Украины Олешки хотын орчимд байгуулсан орон нутгийн гал зогсоох тохиролцооны дараа болж байна. Тэрхүү долоо хоногийн гал зогсоох хугацаанд оршин суугчдыг нүүлгэн шилжүүлж, хүмүүнлэгийн тусламж хүргэсэн юм. Гэвч 1,200 км үргэлжилсэн фронтын шугамын дагуу ширүүн тулаан үргэлжилсээр байна.\n\nОросын төлөөлөгчдийг 2022 оны гуравдугаар сард Стамбулд болсон анхны шууд хэлэлцээ болон дараагийн хуралдаануудыг тэргүүлсэн Путины туслах Владимир Мединский тэргүүлж байна. Украины Ерөнхийлөгч Володимир Зеленский 11 дүгээр сарын 4-нд АНУ-ын хэлэлцээчид Стив Уиткофф, Жаред Кушнер нартай 90 минут ярилцаж, хэлэлцээ “дайныг аль болох хурдан дуусгахын тулд бүрэн хурдаар урагшлах ёстой” гэж мэдэгдсэн юм.", textEn:"Russian, Ukrainian and US negotiators will begin two days of talks today, November 10, in Abu Dhabi, United Arab Emirates. It is the first such meeting since February, aimed at ending the full-scale war that is nearing the five-year mark.\n\nSecurity guarantees will top the agenda, and the sides remain far apart on key elements of any prospective peace deal. Russian President Vladimir Putin wants Ukraine to pull its troops back from the four regions that Moscow illegally annexed early in the war but never fully captured.\n\nThe talks follow last month's localised truce around the Russian-occupied city of Oleshky in southern Ukraine, brokered with the help of US first lady Melania Trump. During that weeklong ceasefire, residents were evacuated and desperately needed humanitarian supplies were delivered. But fierce fighting has continued along the 1,200-kilometre front line.\n\nRussia's delegation is led by Putin aide Vladimir Medinsky, who led the Russian side in the first direct peace talks in Istanbul in March 2022 and in subsequent sessions. On November 4, Ukrainian President Volodymyr Zelenskyy held a 90-minute conversation with US negotiators Steve Witkoff and Jared Kushner, saying the talks “must move forward at full throttle to bring this war to an end as quickly as possible”."},
  {id:15, cat:"delhii", title:"Трамп Ираны дайны зуучлагч Катартай уулзана; Иран хоёр өдрийн хэлэлцээний саналаа хамгаалж байна", titleEn:"Trump to meet Qatar, mediator in Iran war; Iran defends two-day talks proposal", time:"6 цаг", timeEn:"6 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/President%20Trump%20Visits%20St.%20John%27s%20Episcopal%20Church%20%2849963649028%29.jpg?width=760", text:"АНУ-ын Ерөнхийлөгч Дональд Трамп Ираны дайны зуучлагч Катартай уулзахаар төлөвлөж байгаа бөгөөд дайныг зогсоох ойрын тохиролцоо харагдахгүй байна.\n\nИран улс АНУ-ын нөхцөлийг няцаасны дараа энхийн хэлэлцээний хоёр өдрийн саналаа хамгаалж байна. Мөргөлдөөнийг зогсоох хэлэлцээ урагшилж байгаа тохиолдолд Иранд дахин цохилт өгөх тушаал өгөх магадлал тун бага гэж Трамп ням гарагт мэдэгдсэн байна. Хэлэлцээний явц нь цаашдын цэргийн шийдвэрийг тодорхойлох гол хүчин зүйл болох нь харагдаж байна.\n\nИзраилийн тал “Ирантай холбоотой үүрэг даалгавар” дуусаагүй хэвээр байгаа бөгөөд Иран цөмийн зэвсэг олж авахыг оролдож байна гэж мэдэгдсэн юм. Хоёрдугаар сарын сүүлээр Иран дахь дайн эхэлж, Хормузын хоолой хаагдсанаас үүссэн эрчим хүчний хямрал дэлхийн эрчим хүч, хүнсний үнийг өсгөсөөр байгаа билээ.\n\nБүс нутгийн хурцадмал байдал өндөр хэвээр байгаа бөгөөд олон улсын анхаарал хэлэлцээний ширээнд чиглэж байна. Катар нь АНУ, Ираны хоорондын зуучлалд гол үүрэг гүйцэтгэж байгаа юм.", textEn:"US President Donald Trump is set to meet Qatar, the mediator in the war with Iran, with no imminent deal seen to end the war.\n\nIran is defending its two-day proposal for peace talks after the United States rejected its conditions. Trump said on Sunday that he was highly unlikely to order fresh strikes on Iran as long as talks to end the conflict keep progressing. The course of the talks looks set to determine further military decisions.\n\nIsrael has said its “Iran mission” is not yet complete and that Iran is trying to obtain nuclear weapons. The energy crisis triggered by the outbreak of war in Iran at the end of February and the closure of the Strait of Hormuz continues to push up global energy and food prices.\n\nTensions in the region remain high, and international attention is focused on the negotiating table. Qatar plays a central role in mediating between the United States and Iran."},
  {id:16, cat:"delhii", title:"Трамп: АНУ, Хятад, Оросын удирдагчид ирэх долоо хоногт уулзана", titleEn:"Trump: Leaders of the US, China and Russia to meet next week", time:"7 цаг", timeEn:"7 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/White%20House%20lawn.jpg?width=760", text:"АНУ-ын Ерөнхийлөгч Дональд Трамп АНУ, Хятад, Оросын удирдагчид ирэх долоо хоногт уулзахаар төлөвлөж байна гэж мэдэгдлээ. Бээжингийн тал санал болгож буй дээд хэмжээний уулзалтын талаар “талуудтай харилцаж байгаа” гэж мэдэгдсэн байна.\n\nТрамп 11 дүгээр сарын 4-нд Цагаан ордонд Путины элч Кирилл Дмитриевтэй уулзсаны дараа Европын аюулгүй байдлын талаар ямар нэгэн томоохон тохиролцоо бэлтгэгдэж байна гэж мэдэгдсэн юм.\n\nГурван талт дээд хэмжээний уулзалт нь дэлхийн хамгийн нөлөө бүхий гурван гүрний харилцаа, Украины дайн, худалдаа, аюулгүй байдлын асуудлаар хэлэлцэх чухал тавцан болно гэж ажиглагчид үзэж байна. Уулзалтын тов, байршил, хэлэлцэх асуудлын талаарх дэлгэрэнгүй мэдээллийг талууд хараахан албан ёсоор баталгаажуулаагүй байна.", textEn:"US President Donald Trump has said that the leaders of the United States, China and Russia are set to meet next week. Beijing said it was “in communication with parties” on the proposed summit.\n\nTrump said after meeting Putin's envoy Kirill Dmitriev at the White House on November 4 that some kind of grand deal about European security was in the works.\n\nObservers say a trilateral summit would be an important platform for discussing relations among the world's three most influential powers, the war in Ukraine, trade and security issues. The parties have not yet officially confirmed the date, location or agenda of the meeting."},
  {id:17, cat:"delhii", title:"Хятад АНУ руу чиглэсэн давхар хэрэглээний барааны экспортын хяналтын нэг хэсгийг түр зогсоов", titleEn:"China suspends part of dual-use export controls to the US", time:"7 цаг", timeEn:"7 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Port%20of%20Shanghai%2C%20Yangshan%20Deep-water%20Harbour%20Zone%2C%2002.jpg?width=760", text:"Хятад улс 2024 онд гаргасан мэдэгдлийнхээ нэг заалтын хэрэгжилтийг түдгэлзүүлж, АНУ руу чиглэсэн давхар хэрэглээний барааны экспортын хяналтын нэг хэсгийг түр зогсоов. Энэ тухай Хятадын Худалдааны яам ням гарагт мэдэгдлээ.\n\n2024 оны 46 дугаар мэдэгдлийн хоёр дахь заалтыг түдгэлзүүлэх нь ням гарагаас 2026 оны 11 дүгээр сарын 27-ныг хүртэл хүчинтэй байх аж. Давхар хэрэглээний бараа нь иргэний болон цэргийн зориулалтаар ашиглагдаж болох бүтээгдэхүүнийг хэлдэг бөгөөд тэдгээрийн экспортын хяналт нь АНУ, Хятадын худалдааны маргааны чухал хэсэг болоод байна.\n\nМөн Хятадын Худалдааны яамны хэвлэлийн төлөөлөгч Nexperia асуудлаар Европын тал нөлөөгөө ашиглан Нидерландыг буруутай үйлдлээ аль болох хурдан засахыг уриалах хүчин чармайлтыг үргэлжлүүлж байгааг сайшааж байна гэж мэдэгдлээ. Энэ нь Хятад, Европын Холбооны худалдааны харилцаанд чиглэсэн дохио болж байна.", textEn:"China will suspend the implementation of a clause in an announcement it issued in 2024, pausing part of its export controls on dual-use items to the United States, the Ministry of Commerce said on Sunday.\n\nThe suspension of the second clause of Announcement No. 46 of 2024 takes effect from Sunday until November 27, 2026. Dual-use items are products that can be used for both civilian and military purposes, and controls on their export have become an important part of the US–China trade dispute.\n\nA spokesperson for China's Ministry of Commerce also said China welcomes the European side's continued efforts to leverage its influence to urge the Netherlands to correct its wrongdoing on the Nexperia issue as soon as possible. The statement is seen as a signal towards China–European Union trade relations."},
  {id:18, cat:"delhii", title:"Болив, АНУ 17 жилийн дараа дипломат харилцаагаа бүрэн сэргээнэ", titleEn:"Bolivia and the US to restore full diplomatic ties after 17 years", time:"8 цаг", timeEn:"8 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/00%201679%20La%20Paz%2C%20Bolivia%20%28South%20America%29.jpg?width=760", text:"Болив, АНУ 17 жилийн завсарлагааны дараа элчин сайдын түвшинд дипломат харилцаагаа бүрэн сэргээнэ. Энэ тухай Боливын Ерөнхийлөгч Родриго Пас Перейра болон АНУ-ын Төрийн нарийн бичгийн даргын орлогч Кристофер Ландау бямба гарагт мэдэгдлээ.\n\nХоёр орны дипломат харилцаа 17 жилийн өмнө тасарсан бөгөөд энэ шийдвэр нь Латин Америк дахь АНУ-ын дипломат харилцаанд чухал өөрчлөлт болж байна. Харилцааг сэргээснээр худалдаа, аюулгүй байдал, цагаачлал зэрэг салбарт хамтын ажиллагаа өргөжих төлөвтэй байна.\n\nБоливын шинэ Засгийн газар АНУ-тай харилцаагаа хэвийн болгох бодлого баримталж байгаа бөгөөд элчин сайд нарыг томилох, дипломат төлөөлөгчийн газруудын үйл ажиллагааг сэргээх ажил дараагийн алхам болно гэж ажиглагчид үзэж байна.", textEn:"Bolivia and the United States will restore full diplomatic relations at the ambassadorial level after a 17-year break, Bolivian President Rodrigo Paz Pereira and US Deputy Secretary of State Christopher Landau announced on Saturday.\n\nDiplomatic relations between the two countries were severed 17 years ago, and the decision marks an important change in US diplomacy in Latin America. Restoring ties is expected to expand cooperation in areas including trade, security and migration.\n\nBolivia's new government is pursuing a policy of normalising relations with the United States, and observers say appointing ambassadors and restoring the work of diplomatic missions will be the next steps."},
  {id:19, cat:"oron-nutag", title:"11 дүгээр сарын 12–13-нд баруун аймгуудад цас орж, цасан шуурга шуурна", titleEn:"Snow and snowstorms expected in western aimags on November 12–13", time:"8 цаг", timeEn:"8 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Road%20in%20Mongolia%20aimak%20Bayan%20Ulgiy%2002.jpg?width=760", text:"Арваннэгдүгээр сарын 12-нд Баян-Өлгийн ихэнх, Увс, Завханы хойд, Хөвсгөлийн баруун сумдын нутгаар 0.0–1.0 мм цас орж, 13-нд Баян-Өлгий, Увс, Хөвсгөл, Завхан, Ховдын зарим сумд, Говь-Алтай, Баянхонгор, Өвөрхангай, Төв, Хэнтийн хойд, Архангай, Булган, Сэлэнгийн ихэнх сумдын нутгаар 0.0–5.0 мм цас орж, цасан шуурга шуурах төлөвтэй байгааг Цаг уур, орчны шинжилгээний газраас мэдээллээ.\n\nСалхи ихэнх хугацаанд секундэд 5–10 метр байх бөгөөд 12-нд Алтайн уулсаар, 13-нд зарим газраар секундэд 12–14 метр хүрч ширүүснэ. Ихэнх нутгаар дулаарч, шөнөдөө Дархадын хотгор, Завхан, Заг-Байдраг голын эх, Тэс голын хөндийгөөр 18–23 хэм хүйтэн байх бол өдөртөө Дархадын хотгор, Завхан, Заг-Байдраг голын эхээр 2–7 хэм хүйтэн байх төлөвтэй байна.\n\nХарин 13-нд нутгийн баруун хагаст хүйтэрнэ. Малчид, иргэд, тээвэрчдийг цаг агаарын өөрчлөлтөд анхаарал хандуулж, замд гарахдаа бэлтгэлтэй байхыг Цаг уур, орчны шинжилгээний газраас зөвлөж байна.", textEn:"On November 12, snow of 0.0–1.0 mm is expected in most of Bayan-Ulgii and in the northern soums of Uvs and Zavkhan and the western soums of Khuvsgul, and on November 13, snow of 0.0–5.0 mm with snowstorms is expected in parts of Bayan-Ulgii, Uvs, Khuvsgul, Zavkhan and Khovd, and in most soums of Gobi-Altai, Bayankhongor, Uvurkhangai, Tuv, northern Khenti, Arkhangai, Bulgan and Selenge, the National Agency for Meteorology and Environmental Monitoring said.\n\nWind will mostly blow at 5–10 metres per second, strengthening to 12–14 metres per second in the Altai mountains on the 12th and in some places on the 13th. Most of the country will warm up; night temperatures in the Darkhad depression, the sources of the Zavkhan and Zag-Baidrag rivers and the Tes valley will be minus 18 to minus 23 degrees, while daytime temperatures there will be minus 2 to minus 7 degrees.\n\nOn the 13th, the western half of the country will turn colder. The agency advises herders, citizens and drivers to pay attention to the changing weather and to be prepared when travelling.", region:"khovd"}
];
function aTitle(a){ return LANG === "en" ? (a.titleEn || a.title) : a.title; }
function aTime(a){ return LANG === "en" ? (a.timeEn || a.time) : a.time; }
function aText(a){ if(a.text) return LANG === "en" ? (a.textEn || a.text) : a.text; return SAMPLE_TEXT[LANG][a.id === 1 ? "long" : "short"]; }
function aRegion(a){ return a.region ? ((REGIONS[LANG] && REGIONS[LANG][a.region]) || a.region) : ""; }

// ===== Ханш · Цаг агаар (өдөр бүр шинэчлэгдэнэ; цаг агаарыг Open-Meteo-гоос шууд татна) =====
const RATES = {date:"2026-11-10", items:[
  {code:"USD", mnt:3601.78, chg:1}, {code:"EUR", mnt:4023.91, chg:-1}, {code:"JPY", mnt:22.8, chg:0},
  {code:"CNY", mnt:539.65, chg:-1}, {code:"KRW", mnt:2.67, chg:1}, {code:"RUB", mnt:43.81, chg:-1}, {code:"GBP", mnt:4823.32, chg:-1}
]};
let WEATHER = [
  {city:"Улаанбаатар", cityEn:"Ulaanbaatar", lat:47.9212, lon:106.9186, tz:"Asia/Ulaanbaatar", temp:-6, code:3},
  {city:"Токио", cityEn:"Tokyo", lat:35.6762, lon:139.6503, tz:"Asia/Tokyo", temp:9, code:61},
  {city:"Сөүл", cityEn:"Seoul", lat:37.5665, lon:126.978, tz:"Asia/Seoul", temp:2, code:0},
  {city:"Бээжин", cityEn:"Beijing", lat:39.9042, lon:116.4074, tz:"Asia/Shanghai", temp:0, code:0},
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
