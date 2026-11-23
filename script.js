// ===== Хэл (MN / EN) =====
let LANG = localStorage.getItem("tana-lang") || "mn";

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
    copyright: "© 2026 TANA.mn (ТАНА). Бүх эрх хуулиар хамгаалагдсан.", img_credit: "Мэдээний зургууд: Wikimedia Commons — чөлөөт лицензтэй зургууд.",
    no_news: "Мэдээ алга.", no_cat: "Энэ ангилалд одоогоор мэдээ алга.", no_result: "Илэрц олдсонгүй.",
    author_prefix: "Нийтлэлч · ", doc_title: "TANA.mn — ТАНА | Таны мэдээ"
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
    copyright: "© 2026 TANA.mn. All rights reserved.", img_credit: "News photos: Wikimedia Commons — freely licensed images.",
    no_news: "No news yet.", no_cat: "No news in this category yet.", no_result: "No results found.",
    author_prefix: "Columnist · ", doc_title: "TANA.mn — News from Mongolia"
  }
};
function t(key){ return (UI[LANG] && UI[LANG][key]) || UI.mn[key] || key; }

const CATS = {
  mn: { "uls-tor": "Улс төр", "niigem": "Нийгэм", "ediin-zasag": "Эдийн засаг", "delhii": "Дэлхий", "sport": "Спорт", "soyol": "Соёл урлаг", "tech": "Технологи", "oron-nutag": "Орон нутаг" },
  en: { "uls-tor": "Politics", "niigem": "Society", "ediin-zasag": "Economy", "delhii": "World", "sport": "Sports", "soyol": "Culture", "tech": "Technology", "oron-nutag": "Regions" }
};
function catName(cat){ return (CATS[LANG] && CATS[LANG][cat]) || CATS.mn[cat] || cat; }

const REGIONS = {
  mn: { "arkhangai": "Архангай", "khuvsgul": "Хөвсгөл", "dornogovi": "Дорноговь", "uvurkhangai": "Өвөрхангай", "dornod": "Дорнод", "selenge": "Сэлэнгэ", "zavkhan": "Завхан", "khovd": "Ховд" },
  en: { "arkhangai": "Arkhangai", "khuvsgul": "Khuvsgul", "dornogovi": "Dornogovi", "uvurkhangai": "Uvurkhangai", "dornod": "Dornod", "selenge": "Selenge", "zavkhan": "Zavkhan", "khovd": "Khovd" }
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

// ===== Бодит мэдээнүүд (2026-11-24) — өдөр бүр шинэчлэгдэнэ =====
const ARTICLES = [
  {"id":1, "cat":"ulstur", "title":"Ерөнхийлөгчийн сонгууль дөрвөн сарын дотор болно: намууд нэр дэвшигчдээ тодруулж эхэллээ", "titleEn":"Presidential election to be held within four months as parties line up candidates", "time":"15 мин", "timeEn":"15 min", "img":"https://commons.wikimedia.org/wiki/Special:FilePath/2024-10-18%20Ulaanbaatar%2C%20Government%20Palace.jpg?width=1000", "text":"Ухнаагийн Хүрэлсүх Ерөнхийлөгчийн албан тушаалаас энэ сарын 19-ний өдөр чөлөөлөгдсөнөөс хойш Монгол Улс шинэ Ерөнхийлөгчөө дөрвөн сарын дотор сонгох хуулийн хугацаатай туллаа. Энэ нь 2027 оны гуравдугаар сарын 19-ний дотор шинэ Ерөнхийлөгчтэй болох ёстой гэсэн үг бөгөөд Монгол Улс түүхэндээ анх удаа Ерөнхийлөгчийн сонгуулиа өвлийн цагаар явуулах нь нэгэнт тодорхой болоод байна.\nУлс төрийн намууд хэнийг нэр дэвшүүлэх вэ гэсэн асуудлаарх яриа эрчимжиж байна. МАН-ын Удирдах зөвлөл өнгөрсөн амралтын өдөр сонгуулийн штаб байгуулах зорилгоор хуралдсан бөгөөд тус намаас УИХ-ын дарга Г.Занданшатар болон Сангийн сайд Б.Жавхлан нарын нэр яригдаж байна. Ардчилсан намаас Л.Гантөмөр, С.Баярцогт, Д.Ганбат нарын нэр дурдагдаж байгаа бол ХҮН намаас дарга Т.Доржханд өөрөө нэр дэвших магадлалтай, ИЗНН-аас философич С.Молор-Эрдэнийг нэр дэвшүүлэхээр тохирсон тухай тус намын дарга Б.Батбаатар мэдэгдээд байна.\nХүрэлсүхийн хувьд сонирхолтой хоёр байр суурь хэлээд буусан. Нэгт, албан тушаалд эргэж очиж магадгүйгээ тодорхой хэлсэн. Хоёрдугаарт, энэ сонгуулийг тохиолдуулж Ерөнхийлөгчийн засаглал, эсвэл Ерөнхийлөгчийг парламентаас сонгодог болохын аль нэгийг шийдэх ёстой гэсэн байр суурь илэрхийлсэн. Зарим эх сурвалжийн мэдээллээр Үндсэн хуулийг өөрчилж, Ерөнхийлөгчийг парламентаас сонгодог болгох хувилбар яригдаж байгаа ч дөрвөн сарын дотор үүнийг амжуулах боломжгүй гэж шинжээчид үзэж байна.\nҮүний зэрэгцээ Ерөнхийлөгчийн үүргийг түр хэрэгжүүлж буй С.Бямбацогт 2027 оны Ерөнхийлөгчийн сонгуульд нэр дэвшихгүй гэдгээ мэдэгдсэн. Тэрбээр Төрийн тамгыг гардаж авсан өдрөөсөө хойш төрийн ажлын тасралтгүй байдлыг хангах нь өөрийн гол үүрэг гэж онцолсон юм. Энэ долоо хоногт сонгуулийн тов тогтоох асуудал илүү тодорхой мэдээллүүдээр хангагдах төлөвтэй байна.", "textEn":"After Ukhnaagiin Khurelsukh was relieved of the presidency on November 19, Mongolia faces a legal deadline to elect a new president within four months. That means the country must have a new president by March 19, 2027, and for the first time in its history Mongolia will hold a presidential election in winter.\nDebate over whom the parties will nominate is intensifying. The ruling Mongolian People's Party's leadership council met over the weekend to set up an election headquarters, with Parliament Speaker G. Zandanshatar and Finance Minister B. Javkhlan mentioned as possible candidates. The Democratic Party is weighing L. Gantumur, S. Bayartsogt and D. Ganbat, the HUN Party's chairman T. Dorjkhand may run himself, and the IZNN has already agreed to nominate philosopher S. Molor-Erdene, according to its chairman B. Batbaatar.\nKhurelsukh left office with two notable positions. First, he said clearly that he might return to the post. Second, he argued that this election should settle whether Mongolia keeps a presidential system or moves to electing the president from parliament. Some sources say a constitutional change to a parliamentary-elected presidency is being discussed, but analysts say it cannot be completed within four months.\nMeanwhile, S. Byambatsogt, who is acting as president, has said he will not run in the 2027 presidential election. He has stressed that his main duty since receiving the state seal is to ensure the continuity of state affairs. The date of the election is expected to become clearer this week."},
  {"id":2, "cat":"ulstur", "title":"АН: Увс, Булганы Засаг даргыг огцруулахгүй бол Цэцэд хандана", "titleEn":"Democratic Party: will appeal to Constitutional Court if Uvs and Bulgan governors are not dismissed", "time":"30 мин", "timeEn":"30 min", "img":"https://commons.wikimedia.org/wiki/Special:FilePath/2025%20protests%20at%20Sukhbaatar%20Square.jpg?width=760", "text":"УИХ дахь Ардчилсан намын бүлэг өнөөдөр ээлжит хуралдаанаасаа гаргасан шийдвэрээ танилцуулж, Увс болон Булган аймгийн Засаг дарга нарыг огцруулах асуудлыг хэлэлцлээ. Бүлгийн дарга Б.Түвшин Ерөнхий сайд Н.Учралд шаардлага хүргүүлэхээр болсон бөгөөд уг шаардлагыг биелүүлэхгүй бол Үндсэн хуулийн цэцэд хандахаа мэдэгдэв.\nУвс аймгийн ИТХ хуралдаж, Засаг дарга Э.Насанбатыг огцруулах шийдвэрийг төлөөлөгчдийн 62.8 хувийн саналаар гаргасан байна. Төлөөлөгч Д.Цэндсүрэнгийн мэдээлснээр Засаг дарга нь Төсвийн тухай хууль зөрчиж, ашиг сонирхлын зөрчил гаргасан нь баримтаар тогтоогдсон аж. Мөн Булган аймгийн Засаг дарга Д.Пүрэв-Очирыг огцруулах саналыг хуульд нийцүүлэн шийдвэрлэж, ажлын долоо хоногт албан бичгээр хариу ирүүлэхийг шаардаж байна.\nАН-ын бүлэг үүнээс гадна нийгэмд өндөр хүлээлттэй байгаа хуулийн төслүүдийг хэлэлцлээ. Тухайлбал, УИХ-ын гишүүн Ж.Баярмаагийн санаачилсан Сонгуулийн санал худалдан авалтын эсрэг хуулийг хэлэлцүүлэх нь зүйтэй гэж дэмжсэн бөгөөд Засгийн газраас Шүгэл үлээгчийн тухай хуулийг оруулж ирэхээр болсон ч одоог хүртэл оруулаагүй байгааг шүүмжиллээ.\nБүлгийн мэдэгдлээр шаардлагыг биелүүлэхгүй бол Төрийн албаны зөвлөлийн дарга Л.Цэдэвсүрэнг АТГ-т шалгуулах асуудлыг ч хөндөх аж. Мөн байгаль орчны нөхөн төлбөрийг нөхөн төлүүлэх, үнэлэх тухай асуудлыг хэлэлцэж, Монголд гарсан гал түймрийн улмаас байгаль их хэмжээгээр сүйдэж, хохирсон асуудалд анхаарал хандууллаа.", "textEn":"The Democratic Party caucus in parliament presented the decisions from its regular meeting today, discussing the dismissal of the governors of Uvs and Bulgan provinces. Caucus leader B. Tuvshin said a formal demand will be sent to Prime Minister N. Uchral, and if it is not met, the party will appeal to the Constitutional Court.\nThe Uvs provincial council voted to dismiss Governor E. Nasambat with 62.8 percent of its members in favour. According to council member D. Tsenduren, evidence showed the governor violated the Budget Law and had a conflict of interest. The party also demands that the proposal to dismiss Bulgan Governor D. Purev-Ochir be resolved in line with the law, with a written reply within the working week.\nThe caucus also discussed bills that the public is watching closely. It backed debating MP J. Bayarmaa's bill against vote buying, and criticised the government for not yet submitting the Whistleblower Protection Bill, even though it had promised to do so.\nIf the demands are not met, the party said it will also ask the Anti-Corruption Agency to investigate Civil Service Council Chairman L. Tsedevsuren. The caucus also raised environmental compensation, noting the extensive damage caused by wildfires in Mongolia."},
  {"id":3, "cat":"niigem", "title":"Томуутай хүүхдийн эмчилгээг ЭМД 100 мянган төгрөгийн багцаар санхүүжүүлнэ", "titleEn":"Health insurance to cover flu treatment for children with 100,000-tugrik package", "time":"45 мин", "timeEn":"45 min", "img":"https://commons.wikimedia.org/wiki/Special:FilePath/Flumist%20Home%20Vaccine%20Kit.jpg?width=760", "text":"Томуутай хүүхдийн эмчилгээг Эрүүл мэндийн даатгалын сан 100 мянган төгрөгийн багцаар санхүүжүүлэхээр боллоо. Эцэг эхчүүд хүүхдээ өрхийн эрүүл мэндийн төвд хандуулж, өдрийн эмчилгээний зардлыг даатгалаар шийдвэрлүүлэх боломжтой бөгөөд энэ нь бэлэн мөнгө олгох хэлбэр биш юм.\nТомуугийн улирал эхэлж, хүүхдийн өвчлөл нэмэгдэж байгаа энэ үед уг шийдвэр эцэг эхчүүдэд бодит дэмжлэг болно гэж Эрүүл мэндийн яам үзэж байна. Өрхийн эрүүл мэндийн төвүүд хүүхдийг хүлээн авч, шаардлагатай эмчилгээг газар дээр нь үзүүлэх бөгөөд даатгалын сангаас зардлыг нь шууд шийдвэрлэнэ.\nШинжээчдийн үзэж буйгаар хүүхдийн томууг эрт үед нь илрүүлж, эмчлэх нь хүндрэлээс сэргийлэх хамгийн үр дүнтэй арга юм. Эцэг эхчүүд хүүхдийн биеийн байдалд анхаарч, халуурах, ханиах зэрэг шинж тэмдэг илэрвэл өрхийн эмчдээ цаг алдалгүй хандахыг зөвлөж байна.\nЭнэ оны томуугийн улиралд хүүхдийн өвчлөл нэмэгдэж байгаа бөгөөд эрүүл мэндийн байгууллагууд бэлтгэлээ хангаж ажиллаж байна. Даатгалын багцын дэлгэрэнгүй нөхцөл, хамрах хүрээний талаар Эрүүл мэндийн даатгалын ерөнхий газар ойрын өдрүүдэд нэмэлт мэдээлэл өгөх юм.", "textEn":"The Health Insurance Fund will finance flu treatment for children with a 100,000-tugrik package. Parents can take their child to their local family health centre, where the cost of day treatment will be covered by insurance. The support is not paid out in cash.\nWith the flu season under way and child illness on the rise, the Health Ministry says the decision is real support for parents. Family health centres will receive children and provide the necessary treatment on site, with the insurance fund settling the cost directly.\nExperts say detecting and treating children's flu early is the most effective way to prevent complications. Parents are advised to watch their children's condition and contact their family doctor without delay if symptoms such as fever or coughing appear.\nChild flu cases are rising this season, and health facilities are preparing accordingly. The Health Insurance General Office will provide further details on the package's terms and coverage in the coming days."},
  {"id":4, "cat":"edzasag", "title":"Нийслэлийн 2027 оны төсвийн төслийг өргөн барилаа", "titleEn":"Capital's 2027 draft budget submitted", "time":"1 цаг", "timeEn":"1 hour", "img":"https://commons.wikimedia.org/wiki/Special:FilePath/2024-10-18%20View%20of%20Ulaanbaatar.jpg?width=760", "text":"Нийслэлийн Засаг дарга бөгөөд Улаанбаатар хотын Захирагч Б.Пүрэвдагва нийслэлийн 2027 оны төсвийн төслийг НИТХ-ын дарга Д.Ихбаярт өргөн барилаа. Төсвийн төсөлд нийт орлогыг 4.6 их наяд төгрөг байхаар тооцсон нь өмнөх оныхоос 600 орчим тэрбум төгрөгөөр буурсан үзүүлэлт юм.\nХотын дарга Б.Пүрэвдагва төсвийг боловсруулахдаа иргэн төвтэй байх зарчмыг баримталж, иргэдээс авсан санал асуулга, судалгаанд үндэслэсэн гэдгээ онцоллоо. Тэрбээр нийслэлийн өмнө тулгамдаж буй агаар, орчны бохирдол, авто замын түгжрэл, дэд бүтцийн хүртээмж, засаглалын асуудал гэсэн дөрвөн чиглэлд хуваан төсвийг боловсруулсан гэж мэдэгдэв.\nТөсвийн тухай хуульд нийслэлийн төсвийг жил бүрийн 11 дүгээр сарын 25-ны дотор НИТХ-д өргөн мэдүүлж, 12 дугаар сарын 5-ны дотор батлахаар заасан байдаг. Төсвийн төслийг НИТХ-ын холбогдох хороод болон төлөөлөгчдийн бүлгүүдээр хэлэлцүүлж, улмаар НИТХ-ын хуралдаанаар хэлэлцэн шийдвэрлэх юм.\nТөсөв буурсан нь хотын санхүүгийн хувьд хүнд жил болохыг харуулж байна. Хотын удирдлагууд зардлыг оновчтой болгож, иргэдэд шууд хүрдэг үйлчилгээний чанарыг хадгалахыг зорьж байгаа бөгөөд төсвийн хэлэлцүүлгийн явцад иргэдийн санал, байр суурийг сонсох аж.", "textEn":"Ulaanbaatar Mayor B. Purevdagva has submitted the capital's draft 2027 budget to City Council Chairman D. Ikhbayar. Total revenue is projected at 4.6 trillion tugrik, about 600 billion tugrik less than the previous year.\nThe mayor said the budget was prepared on a citizen-centred principle, based on surveys and feedback from residents. He said it focuses on four pressing areas: air and environmental pollution, traffic congestion, infrastructure access and governance.\nUnder the Budget Law, the capital's budget must be submitted to the City Council by November 25 each year and approved by December 5. The draft will be discussed by the council's relevant committees and party groups before a plenary decision.\nThe smaller budget points to a difficult financial year for the city. Officials aim to streamline spending while maintaining the quality of services that reach residents directly, and public views will be heard during the deliberations."},
  {"id":5, "cat":"ulstur", "title":"Ерөнхий сайд Булганы Засаг дарга Д.Пүрэв-Очирыг огцруулах саналыг буцаалаа", "titleEn":"Prime Minister returns proposal to dismiss Bulgan governor", "time":"1 цаг", "timeEn":"1 hour", "img":"https://commons.wikimedia.org/wiki/Special:FilePath/2017.%20Sheep%20shearing.%20Bulgan%20Province%2C%20Mongolia.%20%2838686080355%29.jpg?width=760", "text":"Ерөнхий сайд Н.Учрал Булган аймгийн Засаг дарга Д.Пүрэв-Очирыг огцруулах саналыг буцаасан байна. Энэ талаарх мэдээллийг өнөө өглөөний мэдээний тоймд дурдсан бөгөөд санал ямар үндэслэлээр буцаагдсан нь одоогоор тодорхойгүй байна.\nБулган аймгийн Засаг даргыг огцруулах асуудал сүүлийн өдрүүдэд улс төрийн маргааны гол сэдэв болоод байна. Ардчилсан намын бүлэг энэ асуудлыг хэлэлцэж, Засаг даргыг огцруулах саналыг хуульд нийцүүлэн шийдвэрлэхийг шаардаж, биелүүлэхгүй бол Үндсэн хуулийн цэцэд хандахаа мэдэгдсэн юм.\nУвс аймгийн хувьд ч мөн адил нөхцөл байдал үүсээд байна. Тус аймгийн ИТХ Засаг дарга Э.Насанбатыг огцруулах шийдвэрийг гаргасан бөгөөд Ардчилсан нам энэ шийдвэрийг хэрэгжүүлэхийг Ерөнхий сайдаас шаардаж байна. Хоёр аймгийн Засаг даргын асуудал Засгийн газар болон УИХ дахь намуудын хоорондын маргааныг улам хурцатгаж байна.\nОрон нутгийн Засаг дарга нарыг огцруулах асуудал нь төв болон орон нутгийн эрх мэдлийн хуваарилалт, хуулийн хэрэгжилтийн талаарх өргөн маргааны нэг хэсэг болжээ. Ерөнхий сайдын шийдвэрийг дараагийн өдрүүдэд УИХ дахь намууд хэрхэн хүлээж авах нь анхаарал татаж байна.", "textEn":"Prime Minister N. Uchral has returned the proposal to dismiss Bulgan Province Governor D. Purev-Ochir. The move was noted in this morning's news roundup, though the grounds for returning it are not yet clear.\nThe dismissal of the Bulgan governor has become a central political dispute in recent days. The Democratic Party caucus discussed the matter and demanded that the proposal be resolved in line with the law, warning that it will appeal to the Constitutional Court if it is not.\nA similar situation has arisen in Uvs Province, where the provincial council voted to dismiss Governor E. Nasambat, and the Democratic Party is pressing the Prime Minister to implement that decision. The two governors' cases are sharpening the dispute between the government and the parliamentary parties.\nThe dismissals have become part of a wider debate about the division of powers between central and local government and the enforcement of the law. How the parliamentary parties respond to the Prime Minister's decision in the coming days will be closely watched."},
  {"id":6, "cat":"edzasag", "title":"Монгол–АНУ шууд нислэг 2028 онд эхэлнэ", "titleEn":"Direct Mongolia–US flights to start in 2028", "time":"1 цаг", "timeEn":"1 hour", "img":"https://commons.wikimedia.org/wiki/Special:FilePath/American%20Airlines%20Boeing%20787%20Wing.jpg?width=760", "text":"Монгол Улс болон АНУ-ын хооронд шууд нислэг 2028 онд эхлэх төлөвтэй байна. Түүнээс өмнө 2027 оны сүүлээр АНУ-ын Холбооны нисэхийн удирдлага буюу FAA-ийн үнэлгээнд орох бөгөөд энэ нь шууд нислэг эхлүүлэхэд шаардлагатай гол алхам юм.\nШууд нислэг эхэлбэл хоёр орны хоорондын зорчих хугацаа эрс богиносч, бизнес, аялал жуулчлал, боловсролын солилцоонд томоохон дэвшил болно гэж салбарынхан үзэж байна. Одоогоор Монголоос АНУ руу зорчигчид ихэвчлэн гуравдагч орноор дамжин нисдэг бөгөөд энэ нь цаг хугацаа, зардал ихтэй байдаг.\nМонголын иргэн агаарын тээврийн салбар сүүлийн жилүүдэд олон улсын стандартыг хангах чиглэлд ажиллаж ирсэн. FAA-ийн үнэлгээнд тэнцэх нь Монголын нисэхийн аюулгүй байдлын тогтолцоо олон улсын шаардлагад нийцэж буйг батлах чухал үзүүлэлт болно.\nШууд нислэгийн чиглэл, давтамж, ямар агаарын тээврийн компани гүйцэтгэх зэрэг дэлгэрэнгүй асуудал дараагийн шатанд тодорхой болох юм. Засгийн газар болон холбогдох байгууллагууд бэлтгэл ажлыг үргэлжлүүлж байна.", "textEn":"Direct flights between Mongolia and the United States are expected to begin in 2028. Before that, Mongolia will undergo an assessment by the US Federal Aviation Administration (FAA) in late 2027, a key step required to launch direct services.\nIndustry experts say direct flights would sharply cut travel time between the two countries and give a major boost to business, tourism and educational exchanges. Passengers from Mongolia to the US currently usually travel via a third country, which costs time and money.\nMongolia's civil aviation sector has worked in recent years to meet international standards. Passing the FAA assessment would confirm that Mongolia's aviation safety system complies with international requirements.\nDetails such as the route, frequency and which airline will operate the service will be decided at a later stage. The government and relevant agencies are continuing preparations."},
  {"id":7, "cat":"ulstur", "title":"Гадаад харилцааны сайд Б.Батцэцэг Солонгост албан ёсны айлчлал хийж байна", "titleEn":"Foreign Minister B. Battsetseg on official visit to South Korea", "time":"2 цаг", "timeEn":"2 hours", "img":"https://commons.wikimedia.org/wiki/Special:FilePath/Finely%20painted%20wooden%20ceiling%20of%20Jibokjae%20Hall%20seen%20from%20below%20at%20Gyeongbokgung%20Palace%20in%20Seoul.jpg?width=760", "text":"Гадаад харилцааны сайд Б.Батцэцэг Бүгд Найрамдах Солонгос Улсын Гадаад хэргийн сайдын урилгаар энэ сарын 22-25-нд тус улсад албан ёсны айлчлал хийж байна. Айлчлалын үеэр хоёр улсын гадаад хэргийн сайд нар уулзаж, хамтын ажиллагааны асуудлаар ярилцлаа.\nАйлчлалын гол үр дүнгийн нэг нь Монгол, Солонгосын хооронд консулын гэрээ байгуулсан явдал юм. Энэхүү гэрээ нь хоёр улсын иргэдийг хамгаалах тогтолцоог бэхжүүлэх зорилготой бөгөөд иргэдэд үзүүлэх консулын үйлчилгээний чанарыг дээшлүүлэхэд чиглэж байна.\nСайд нар мөн зорчих болон визний асуудлаар хөнгөлөлт үзүүлэх талаар ярилцаж, хоёр талын худалдааг 2030 он гэхэд 1 тэрбум долларт хүргэх зорилт тавилаа. Солонгост ажиллаж, амьдарч буй монгол иргэдийн тоо олон байдаг тул консулын хамтын ажиллагаа онцгой ач холбогдолтой юм.\nМонгол, Солонгосын харилцаа сүүлийн жилүүдэд эдийн засаг, боловсрол, соёлын салбарт идэвхтэй хөгжиж байна. Энэхүү айлчлал нь хоёр улсын стратегийн түншлэлийг улам гүнзгийрүүлэх алхам болно гэж Гадаад харилцааны яам үзэж байна.", "textEn":"Foreign Minister B. Battsetseg is on an official visit to South Korea from November 22 to 25 at the invitation of her South Korean counterpart. During the visit the two foreign ministers met to discuss bilateral cooperation.\nOne of the main outcomes of the visit is a consular agreement between Mongolia and South Korea. The agreement aims to strengthen the system for protecting each country's citizens and to improve the quality of consular services.\nThe ministers also discussed easing travel and visa arrangements and set a goal of raising bilateral trade to 1 billion US dollars by 2030. Consular cooperation is especially important given the large number of Mongolian citizens living and working in South Korea.\nMongolia–South Korea relations have developed actively in recent years in the economy, education and culture. The Foreign Ministry says the visit is a step toward deepening the two countries' strategic partnership."},
  {"id":8, "cat":"soyl", "title":"«Монголчуудын ертөнц: Ил хаант улс ба Персийн урлаг» үзэсгэлэн нээгдлээ", "titleEn":"Exhibition 'The World of the Mongols: The Ilkhanate and Persian Art' opens", "time":"2 цаг", "timeEn":"2 hours", "img":"https://commons.wikimedia.org/wiki/Special:FilePath/Ibn%20Bukhtishu%20-%20Manafi%27%20al-Hayawan%20-%20Folio%20II%20Recto.png?width=760", "text":"«Монголчуудын ертөнц: Ил хаант улс ба Персийн урлаг» олон улсын тусгай үзэсгэлэнг өнөөдөр «Чингис хаан» үндэсний музейд нээлээ. Үзэсгэлэн нь Монголын эзэнт гүрний үед Персийн соёл урлагтай холбогдсон түүхэн холбоог харуулсан үзмэрүүдийг дэлгэж байна.\nИл хаант улс нь Монголын эзэнт гүрний баруун хэсэгт оршиж, Персийн соёл иргэншилтэй гүнзгий холбогдсон түүхтэй. Үзэсгэлэнд тухайн үеийн гар бичмэл, уран зураг, гоёл чимэглэл, ахуйн эд зүйлс зэрэг үзмэрүүдийг танилцуулж байгаа бөгөөд эдгээр нь хоёр соёлын харилцан нөлөөллийг гэрчилж байна.\nМузейн удирдлагуудын мэдээлснээр үзэсгэлэн нь Монголын түүх, соёлыг олон улсад таниулах, мөн Монгол судлалыг хөгжүүлэхэд чухал ач холбогдолтой юм. Үзэсгэлэнгийн нээлтийн ажиллагаанд соёл, урлагийн салбарын төлөөлөгчид болон гадаадын зочид оролцлоо.\n«Чингис хаан» үндэсний музей сүүлийн жилүүдэд олон улсын тусгай үзэсгэлэнгүүд зохион байгуулж, Монголын түүхийг дэлхийд таниулах төв болж байна. Тус үзэсгэлэн ойрын хугацаанд нээлттэй байх бөгөөд иргэд, жуулчид үзэж сонирхох боломжтой.", "textEn":"The international special exhibition 'The World of the Mongols: The Ilkhanate and Persian Art' opened today at the Chinggis Khaan National Museum. It presents artefacts showing the historical links between the Mongol Empire and Persian art and culture.\nThe Ilkhanate ruled the western part of the Mongol Empire and developed deep ties with Persian civilisation. The exhibition features manuscripts, paintings, ornaments and everyday objects from the period, bearing witness to the mutual influence of the two cultures.\nAccording to the museum, the exhibition is important for promoting Mongolian history and culture internationally and for advancing Mongolian studies. Representatives of the cultural sector and foreign guests attended the opening ceremony.\nIn recent years the Chinggis Khaan National Museum has hosted a series of international special exhibitions, becoming a centre for presenting Mongolian history to the world. The exhibition will remain open in the coming period for residents and visitors."},
  {"id":9, "cat":"sport", "title":"FIBA Азийн цом-2029: Монголын шигшээ багийн бүрэлдэхүүнийг танилцуулна", "titleEn":"Mongolia to name squad for FIBA Asia Cup 2029 qualifiers", "time":"2 цаг", "timeEn":"2 hours", "img":"https://commons.wikimedia.org/wiki/Special:FilePath/Basketball%20arena%20-%20Olympic%20Park%20%28geograph%203118976%29.jpg?width=760", "text":"FIBA-гийн Азийн цом-2029 тэмцээний урьдчилсан 2-р шатанд оролцох Монгол Улсын шигшээ багийн 12 тоглогчийн эцсийн бүрэлдэхүүнийг өнөөдөр «М Банк Арена»-д албан ёсоор танилцуулна. Энэ нь Монголын сагсан бөмбөгийн хувьд чухал үйл явдал юм.\nМонголын шигшээ баг сүүлийн жилүүдэд Азийн тавцанд амжилттай тоглож, олон улсын тэмцээнүүдэд байр сууриа бэхжүүлж байна. Шигшээ багийн дасгалжуулагчид болон тоглогчид урьдчилсан шатны тоглолтуудад бэлтгэлээ хангаж, өрсөлдөгчдийнхөө эсрэг сайн үр дүн гаргахыг зорьж байна.\nАзийн цом нь тив дэх сагсан бөмбөгийн хамгийн нэр хүндтэй тэмцээнүүдийн нэг бөгөөд урьдчилсан шатанд амжилттай тоглох нь Монголын багийг үндсэн шатанд шалгаруулах гол зам юм. Тоглогчдын бүрэлдэхүүнд туршлагатай ахмад тоглогчид болон залуу авьяастнууд багтсан гэж спортын хүрээнд яригдаж байна.\nСагсан бөмбөг Монголд хамгийн алдартай спортын төрлүүдийн нэг бөгөөд шигшээ багийн тоглолтуудыг олон мянган хөгжөөн дэмжигч хүлээж байдаг. Бүрэлдэхүүнийг танилцуулах ёслолын дараа баг бэлтгэлээ үргэлжлүүлэн, урьдчилсан шатны тоглолтуудад оролцох юм.", "textEn":"The final 12-player roster of Mongolia's national basketball team for the second round of the FIBA Asia Cup 2029 qualifiers will be officially announced today at the M Bank Arena. It is an important event for Mongolian basketball.\nMongolia's national team has performed well on the Asian stage in recent years, strengthening its position in international competitions. The coaches and players have been preparing for the qualifying games and aim to achieve good results against their opponents.\nThe Asia Cup is one of the most prestigious basketball tournaments on the continent, and success in the qualifiers is the main path to the main tournament. The squad is said to combine experienced veterans with young talent.\nBasketball is one of the most popular sports in Mongolia, and thousands of fans follow the national team's games. After the roster announcement, the team will continue its preparations for the qualifiers."},
  {"id":10, "cat":"sport", "title":"«Засгийн газрын цом–2026» спортын тэмцээн өндөрлөлөө", "titleEn":"'Government Cup 2026' sports tournament concludes", "time":"3 цаг", "timeEn":"3 hours", "img":"https://commons.wikimedia.org/wiki/Special:FilePath/Maccabi%20Tel%20Aviv%20basketball%20team%20playing%20against%20the%20Phoenix%20Suns%20%28FL63617771%29.jpg?width=760", "text":"Төрийн захиргааны төв байгууллагуудын албан хаагчдын дунд жил бүр уламжлал болгон зохион байгуулдаг «Засгийн газрын цом–2026» спортын тэмцээн 2026 оны 11 дүгээр сарын 18–22-ны өдрүүдэд 21 дэх удаагаа зохион байгуулагдаж, өндөрлөлөө.\nТэмцээн дартс, ширээний теннис, шатар, волейбол, сагсан бөмбөг гэсэн спортын таван төрлөөр явагдсан бөгөөд Соёл, спорт, аялал жуулчлал, залуучуудын яамны баг тамирчид бүх төрөлд оролцлоо. Сагсан бөмбөгийн эмэгтэйчүүдийн төрөлд тус яамны баг тэргүүн байр эзэлж, алтан медаль хүртсэн байна.\nТэмцээний зорилго нь төрийн албан хаагчдын бие бялдрыг чийрэгжүүлэх, нийтийн биеийн тамир, спортыг дэмжих, байгууллага хоорондын хамтын ажиллагаа, уялдаа холбоог бэхжүүлэх явдал юм. Энэ удаагийн тэмцээнийг Гадаад харилцааны яам зохион байгуулсан бөгөөд 2027 оны «Засгийн газрын цом» тэмцээнийг Эдийн засаг, хөгжлийн яам зохион байгуулахаар боллоо.\nТөрийн байгууллагуудын спортын тэмцээн нь албан хаагчдын дунд эв нэгдэл, нөхөрсөг харилцааг бэхжүүлэхээс гадна эрүүл амьдралын хэв маягийг сурталчлах чухал арга хэмжээ болж байна.", "textEn":"The 'Government Cup 2026' sports tournament for civil servants of central government bodies was held for the 21st time from November 18 to 22, 2026, and has now concluded.\nThe tournament featured five sports — darts, table tennis, chess, volleyball and basketball — with athletes from the Ministry of Culture, Sports, Tourism and Youth competing in all events. The ministry's women's basketball team took first place and won the gold medal.\nThe tournament aims to promote physical fitness among civil servants, support mass sport, and strengthen cooperation between government bodies. This year's event was organised by the Foreign Ministry, and the 2027 edition will be hosted by the Ministry of Economy and Development.\nThe tournament strengthens unity and friendly relations among civil servants and promotes a healthy lifestyle."},
  {"id":11, "cat":"tech", "title":"Сургуулиудын 98 хувь нь интернетэд холбогдсон; MEDLE 2.0 дахин нээгдлээ", "titleEn":"98 percent of schools now online as MEDLE 2.0 learning library relaunches", "time":"3 цаг", "timeEn":"3 hours", "img":"https://commons.wikimedia.org/wiki/Special:FilePath/A%20group%20of%20female%20students%20looking%20on%20a%20laptop.jpg?width=760", "text":"Монгол Улсын ерөнхий боловсролын сургуулиудын 98 хувь нь интернетэд холбогдсон бөгөөд Боловсролын яам харилцаа холбооны операторууд болон банкуудтай гэрээ байгуулж, MEDLE цахим номын санг MEDLE 2.0 хэлбэрээр дахин нээлээ.\nЦахим боловсролын хүртээмжийг нэмэгдүүлэх нь Боловсролын яамны тэргүүлэх чиглэлүүдийн нэг юм. MEDLE 2.0 платформ нь сурагч, багш нарт сурах бичиг, нэмэлт материал, цахим хичээлийг нээлттэй хүргэх бөгөөд алслагдсан бүс нутгийн сурагчдад ч чанартай боловсрол авах боломж олгоно.\nИнтернетэд холбогдоогүй үлдсэн 2 хувийн сургуулиудыг холбох ажил үргэлжилж байгаа бөгөөд яам холбогдох байгууллагуудтай хамтран ажиллаж байна. Цахим дэд бүтцийн хөгжил нь боловсролын чанар, хүртээмжийг сайжруулах гол суурь болж байна.\nМэргэжилтнүүдийн үзэж буйгаар цахим номын сан, онлайн сургалтын хэрэгсэл нь сурагчдын бие даан суралцах чадварыг дэмжиж, багш нарын ажлыг хөнгөвчлөх юм. MEDLE 2.0-ийн нээлт нь Монголын боловсролын салбарын цахимжилтийн шинэ шат болно гэж яам үзэж байна.", "textEn":"Ninety-eight percent of Mongolia's general education schools are now connected to the internet, and the Education Ministry has signed agreements with telecom operators and banks and relaunched the MEDLE online library as MEDLE 2.0.\nExpanding access to digital education is one of the ministry's priorities. The MEDLE 2.0 platform gives pupils and teachers open access to textbooks, supplementary materials and online lessons, including for students in remote areas.\nWork continues to connect the remaining 2 percent of schools, with the ministry cooperating with relevant organisations. Digital infrastructure is a key foundation for improving the quality and accessibility of education.\nExperts say digital libraries and online learning tools support students' independent learning and ease teachers' work. The ministry says the launch of MEDLE 2.0 marks a new stage in the digitalisation of Mongolia's education sector."},
  {"id":12, "cat":"ulstur", "title":"Ногоон автобусны хэрэгт таван хүнийг залилангийн хэргээр шийтгэлээ", "titleEn":"Five convicted of fraud in green-bus case", "time":"3 цаг", "timeEn":"3 hours", "img":"https://commons.wikimedia.org/wiki/Special:FilePath/Buses%20at%20Sansar%2C%20Ulaanbaatar.jpg?width=760", "text":"Улаанбаатар хотын шүүх ногоон автобус худалдан авахтай холбоотой хэрэгт таван шүүгдэгчийг залилангийн хэргээр гэм буруутайд тоолж, шийтгэл оногдууллаа. Автобусны компанийн захирал А.Ганхуягт 40 сая төгрөгийн торгууль ногдуулсан бөгөөд тэрбээр өмнөх шийдвэрүүдийн дагуу шоронд хэвээр үлдэх юм.\nНогоон автобусны хэрэг нь нийслэлийн нийтийн тээврийн салбарт гарсан хамгийн дуулиантай хэргүүдийн нэг бөгөөд олон нийтийн анхаарлыг удаан хугацаанд татсаар ирсэн. Шүүхийн шийдвэр нь төрийн худалдан авалтын ил тод байдал, хариуцлагын талаарх маргааныг дахин сөхөж байна.\nШүүх бусад дөрвөн шүүгдэгчид ч торгууль ногдуулсан байна. Хэргийн талаарх дэлгэрэнгүй мэдээллийг шүүхийн шийдвэрийн бүрэн эхэд тусгасан бөгөөд талууд давж заалдах эрхтэй юм.\nЭнэхүү шийдвэр нь төрийн худалдан авалтад хяналт тавих, авлига, залилангаас урьдчилан сэргийлэх тогтолцоог бэхжүүлэх шаардлагатайг дахин харууллаа гэж шинжээчид үзэж байна. Нийслэлийн нийтийн тээврийн парк шинэчлэх ажил цаашид үргэлжлэх юм.", "textEn":"An Ulaanbaatar court has found five defendants guilty of fraud in the case involving the purchase of green buses and handed down sentences. Bus company director A. Gankhuyag was fined 40 million tugrik and remains in prison under earlier judgments.\nThe green-bus case is one of the most high-profile cases in the capital's public transport sector and has drawn public attention for a long time. The verdict has renewed debate about transparency and accountability in public procurement.\nThe court also fined the other four defendants. Full details are set out in the court's decision, and the parties have the right to appeal.\nAnalysts say the verdict again shows the need to strengthen oversight of public procurement and systems to prevent corruption and fraud. Work to renew the capital's public transport fleet will continue."},
  {"id":13, "cat":"oronnutag", "title":"Баян-Өлгийд 350 орчим өсвөр үеийнхэн иргэний андгай өргөв", "titleEn":"Around 350 teenagers take citizenship oath in Bayan-Olgii", "time":"4 цаг", "timeEn":"4 hours", "img":"https://commons.wikimedia.org/wiki/Special:FilePath/A%20Kazakh%20man%20in%20Altai%20Mountains%2C%20Mongolia%202014.jpg?width=760", "text":"Баян-Өлгий аймагт 16 нас хүрсэн 350 орчим өсвөр үеийнхэн иргэний андгай өргөх ёслолд оролцлоо. Ёслол нь залуусын иргэний үүрэг, хариуцлагыг ухамсарлах, эх оронч сэтгэлгээг төлөвшүүлэх зорилготой юм.\nМонгол Улсын иргэний андгай өргөх ёслол нь 16 нас хүрсэн иргэн бүрийн хувьд чухал үйл явдал бөгөөд энэ нь тэднийг насанд хүрсэн иргэн болсныг бэлгэддэг. Ёслолд аймгийн удирдлагууд, эцэг эхчүүд, багш нар оролцож, залууст амжилт хүслээ.\nБаян-Өлгий аймаг нь Монгол Улсын баруун хязгаарт орших бөгөөд казак, урианхай зэрэг олон ястны өлгий нутаг юм. Аймгийн залуус иргэний андгай өргөхдөө эх орондоо үнэнч байх, хуулиа дээдлэх, нийгэмдээ хувь нэмэр оруулах тангараг өргөдөг.\nИргэний андгай өргөх ёслолыг улс орон даяар зохион байгуулж байгаа бөгөөд энэ оны 11 дүгээр сарын 26-нд Улс тунхагласны өдрийг тохиолдуулан Төрийн ордонд ч мөн ёслол болох юм.", "textEn":"Around 350 teenagers who have turned 16 took part in a citizenship oath ceremony in Bayan-Olgii Province. The ceremony aims to foster civic duty and patriotism among young people.\nTaking the citizenship oath is an important milestone for every citizen reaching 16, symbolising their coming of age as citizens. Provincial leaders, parents and teachers attended the ceremony and wished the young people success.\nBayan-Olgii, in Mongolia's far west, is home to many ethnic groups, including Kazakhs and Uriankhai. In taking the oath, young people pledge loyalty to their homeland, respect for the law and contribution to society.\nOath ceremonies are held across the country, and another ceremony will take place at the Government Palace on November 26 to mark the anniversary of the proclamation of the republic.", "region":"bayanolgii"},
  {"id":14, "cat":"oronnutag", "title":"Сэлэнгэд уран бүтээлчдийн түвшин тогтоох шалгалт, уралдаан болж байна", "titleEn":"Artists' grading exams and competition under way in Selenge", "time":"4 цаг", "timeEn":"4 hours", "img":"https://commons.wikimedia.org/wiki/Special:FilePath/Orkhon%20sum%2C%20Selenge%20province%2C%20Mongolia.JPG?width=760", "text":"Уран бүтээлчдийн түвшин тогтоох шалгалт, мэргэжлийн уралдаан 11 дүгээр сарын 23-24-нд Сэлэнгэ аймгийн Ардын дуу бүжгийн «Сэлэнгийн долгио» чуулганд болж байна. Тус арга хэмжээ нь орон нутгийн уран бүтээлчдийн ур чадварыг үнэлж, мэргэжлийн түвшинг тогтоох зорилготой юм.\nСэлэнгэ аймаг нь Монголын соёл, урлагийн уламжлал баялаг нутаг бөгөөд дуу, бүжиг, хөгжмийн авьяастнуудаараа алдартай. Түвшин тогтоох шалгалт нь уран бүтээлчдийн мэргэжлийн өсөлтийг дэмжиж, тэднийг цаашид хөгжихөд нь түлхэц болдог.\nУралдаанд аймгийн сумдаас ирсэн уран бүтээлчид оролцож, дуу, бүжиг, хөгжим зэрэг төрлөөр өрсөлдөж байна. Шүүгчид оролцогчдын ур чадвар, тайзны соёл, бүтээлийн сонголтыг үнэлж, шилдгүүдийг тодруулна.\nОрон нутагт соёл, урлагийг дэмжих арга хэмжээ нь залуу авьяастнуудыг илрүүлж, үндэсний соёлыг хадгалж, хөгжүүлэхэд чухал ач холбогдолтой гэж Соёл, спорт, аялал жуулчлал, залуучуудын яам үзэж байна.", "textEn":"Artists' grading examinations and a professional competition are being held on November 23-24 at the Selenge Waves folk song and dance ensemble in Selenge Province. The event assesses local artists' skills and determines their professional grade.\nSelenge is known for its rich cultural traditions and talented singers, dancers and musicians. The grading exams support artists' professional growth and encourage their further development.\nArtists from the province's districts are competing in song, dance and music. Judges will assess their skill, stage presence and choice of repertoire to select the best performers.\nSupporting culture and art in the regions is important for discovering young talent and preserving and developing national culture, according to the Ministry of Culture, Sports, Tourism and Youth.", "region":"selenge"},
  {"id":15, "cat":"delhii", "title":"COP31-ын дараа: чулуужсан түлш, санхүүжилтийн маргаан шийдэгдээгүй хэвээр", "titleEn":"After COP31: fossil-fuel and finance disputes remain unresolved", "time":"5 цаг", "timeEn":"5 hours", "img":"https://commons.wikimedia.org/wiki/Special:FilePath/Austrian%20World%20Summit%20Climate%20Kirtag%20%2847958591021%29.jpg?width=760", "text":"Туркийн Анталья хотноо болсон COP31 уур амьсгалын бага хурал нэгдсэн гэрээнд хүрч чадалгүй өндөрлөсний дараа оролцогч орнууд болон шинжээчид хэлэлцээ яагаад нурсан, цаашид юу болох талаар дүгнэлт хийж байна. Хэлэлцээний гол саад нь чулуужсан түлшнээс татгалзах заалт болон санхүүжилтийн асуудал байв.\nЕвропын Холбоо болон бусад орнууд чулуужсан түлшнээс татгалзах тухай ямар ч дурдалгагүй эцсийн текстийг эсэргүүцсэн бөгөөд энэ нь хэлэлцээг гацаасан гол шалтгаан болсон гэж мэдээлж байна. Хөгжиж буй орнууд уур амьсгалын өөрчлөлттэй тэмцэхэд шаардлагатай санхүүжилтийг нэмэгдүүлэхийг шаардаж байгаа бол хөгжингүй орнууд үүрэг амлалтаа өргөжүүлэхэд болгоомжтой хандаж байна.\nБага хурлын дүгнэлтэд санхүү, чулуужсан түлш, зорилтоо хэтрүүлэх эрсдэл зэрэг зургаан гол асуудал үлдсэн гэж The Guardian онцолжээ. Уур амьсгалын өөрчлөлтийн эсрэг дэлхийн хамтын ажиллагаа цаашид хэрхэн үргэлжлэх нь тодорхойгүй болсон нь олон улсын анхаарлыг татаж байна.\nХэдийгээр COP31 гэрээнд хүрч чадаагүй ч уур амьсгалын асуудлаарх яриа хэлэлцээ үргэлжлэх бөгөөд дараагийн бага хурлаар шийдвэрлэгдээгүй асуудлуудыг дахин хэлэлцэх юм. Байгаль орчны байгууллагууд орнуудыг илүү эрс шийдвэр гаргахыг уриалж байна.", "textEn":"After the COP31 climate summit in Antalya, Türkiye, ended without an agreed deal, participating countries and analysts are assessing why the talks collapsed and what comes next. The main obstacles were a clause on moving away from fossil fuels and the question of finance.\nThe European Union and other countries rejected a final text that made no mention of transitioning away from fossil fuels, a key reason the talks stalled. Developing countries are demanding more finance to fight climate change, while developed countries are cautious about expanding their commitments.\nThe Guardian highlighted six unresolved issues from the summit, including finance, fossil fuels and the risk of overshooting climate targets. The uncertainty over the future of global climate cooperation is drawing international attention.\nAlthough COP31 failed to reach a deal, climate talks will continue, with unresolved issues to be taken up again at the next summit. Environmental groups are urging countries to take bolder decisions."},
  {"id":16, "cat":"delhii", "title":"Оросын цэргийн хөлөг Ливийн Бенгази боомтод дроны цохилтод өртлөө", "titleEn":"Russian warship hit by drone attack at Libya's Benghazi port", "time":"5 цаг", "timeEn":"5 hours", "img":"https://commons.wikimedia.org/wiki/Special:FilePath/602%20Apartment%20Complex%20-%20Benghazi%20Libya.jpg?width=760", "text":"Оросын цэргийн хөлөг Ливийн Бенгази боомтын ойролцоо далайн дроны цохилтод өртөж, живсэн тухай мэдээлэл гарлаа. Цохилтын дараа хөлгийг чирч эхэлсэн бөгөөд НҮБ халдлагыг буруушааж, мөрдөн шалгахыг уриалсан байна.\nХалдлага нь Украины дайнтай холбоотой эсэх нь тодорхойгүй байгаа ч зарим эх сурвалж Украины талтай холбож тайлбарлаж байна. Оросын хөлөг онгоц Ливийн эргийн ойролцоо ямар зорилгоор байсан нь ч асуулт дагуулж байгаа бөгөөд Ливийн арми боомт аюулгүй болсон гэж мэдэгдлээ.\nЭнэ явдал нь Украины дайн Газар дундын тэнгис болон Хойд Африк хүртэл тэлж болзошгүйг харуулж байгаа бөгөөд бүс нутгийн аюулгүй байдлын талаарх санаа зовнил нэмэгдэж байна. Ливийн эрх баригчид гадаадын мөргөлдөөн тус улсын нутагт тархах ёсгүй гэж мэдэгдлээ.\nНҮБ-ын Ливи дэх төлөөлөгчийн газар халдлагыг буруушааж, талуудад тэвчээртэй байхыг уриалсан байна. Халдлагын хариуцлагыг хэн хүлээх нь одоогоор тодорхойгүй байна.", "textEn":"A Russian warship was hit by a sea drone attack near the Libyan port of Benghazi and reportedly sank. The vessel was later towed away, and the United Nations condemned the attack and called for an investigation.\nIt is unclear whether the attack is linked to the war in Ukraine, though some sources connect it to Kyiv. Questions also remain about why the Russian vessel was off the Libyan coast, and Libya's army said the port is secure.\nThe incident suggests the Ukraine war could spill over into the Mediterranean and North Africa, raising concerns about regional security. Libyan authorities said foreign conflicts must not spread onto Libyan soil.\nThe UN mission in Libya condemned the attack and urged restraint. It is not yet clear who was responsible for the strike."},
  {"id":17, "cat":"delhii", "title":"АНУ-ын Ардчилсан нам Төлөөлөгчдийн танхимд хэдэн арван жилийн хамгийн их олонхыг авлаа", "titleEn":"US Democrats win biggest House majority in decades", "time":"6 цаг", "timeEn":"6 hours", "img":"https://commons.wikimedia.org/wiki/Special:FilePath/Capitol%20Building%20Full%20View.jpg?width=760", "text":"АНУ-ын Ардчилсан нам Төлөөлөгчдийн танхимын сонгуульд ялалт байгуулж, хэдэн арван жилийн хамгийн их олонхыг авлаа. Энэ нь тус намын хувьд томоохон улс төрийн ялалт бөгөөд Ерөнхийлөгч Дональд Трампын засаг захиргааны бодлогыг хянах чадварыг нь эрс нэмэгдүүлж байна.\nСонгуулийн дүн нь америкчуудын улс төрийн сэтгэлгээнд өөрчлөлт гарч буйг харуулж байгаа гэж шинжээчид үзэж байна. Ардчилсан нам эдийн засаг, эрүүл мэнд, нийгмийн бодлогын асуудлаар сонгогчдын дэмжлэгийг авсан бөгөөд олон муж улсад ялалт байгууллаа.\nТөлөөлөгчдийн танхимд олонх болсон нь Ардчилсан намд хууль тогтоох санаачилгыг гартаа авч, Засгийн газрын үйл ажиллагаанд хяналт тавих боломж олгоно. Ерөнхийлөгч Трамп Сенатад хамтран ажиллах нь «маш хэцүү» болно гэж мэдэгдсэн бөгөөд хоёр намын харилцаа хурцадмал хэвээр байна.\nСонгуулийн үр дүн нь 2028 оны Ерөнхийлөгчийн сонгуулийн өмнөх улс төрийн хүчний тэнцвэрийг өөрчлөх чухал үйл явдал болно гэж ажиглагчид үзэж байна. Ардчилсан нам одоо олонхоо ашиглан бодлогын тэргүүлэх чиглэлүүдээ хэрэгжүүлэхээр төлөвлөж байна.", "textEn":"The US Democratic Party has won the House of Representatives elections, securing its biggest majority in decades. It is a major political victory for the party, greatly increasing its ability to check the policies of President Donald Trump's administration.\nAnalysts say the result shows a shift in American voters' thinking. The Democrats won support on economic, health and social policy issues and triumphed in many states.\nWinning the House gives the Democrats the power to set the legislative agenda and oversee the government's work. President Trump has said it will be 'very hard' to work with the Senate, and relations between the two parties remain tense.\nObservers say the result will reshape the political balance ahead of the 2028 presidential election. The Democrats now plan to use their majority to advance their policy priorities."},
  {"id":18, "cat":"delhii", "title":"Оросын цохилтоор Киевийн бүсэд 15 хүн амиа алдлаа", "titleEn":"Russian strikes kill at least 15 in Kyiv region", "time":"6 цаг", "timeEn":"6 hours", "img":"https://commons.wikimedia.org/wiki/Special:FilePath/2017%20-%20%D0%9A%D0%B8%D1%97%D0%B2%20-%20%D0%9C%D1%96%D1%81%D1%8F%D1%87%D0%BD%D0%B8%D0%B9%20%D0%B2%D0%B5%D1%87%D1%96%D1%80%20%D0%BD%D0%B0%20%D0%97%D0%B0%D0%BC%D0%BA%D0%BE%D0%B2%D1%96%D0%B9%20%D0%B3%D0%BE%D1%80%D1%96.jpg?width=760", "text":"Оросын цэргийн цохилтын улмаас Украины Киевийн бүсэд 15 хүн амиа алдсан гэж Украины эрх баригчид мэдэгдлээ. Цохилт нь орон сууцны барилга, дэд бүтцийн байгууламжид оносон бөгөөд аврах ажиллагаа үргэлжилж байна.\nУкраины Ерөнхийлөгч Володимир Зеленский цохилтын дараа олон хүн сураггүй болсон талаар мэдээлж, олон улсын хамтын нийгэмлэгээс Оросын түрэмгийллийг зогсоохыг уриаллаа. Өвлийн улирал эхэлж байгаа энэ үед эрчим хүчний дэд бүтцэд чиглэсэн цохилт нь иргэдийн амьдралд хүнд цохилт болж байна.\nОросын тал цохилтыг үргэлжлүүлж байгаа бөгөөд сүүлийн өдрүүдэд Украины олон бүс нутагт дроноор довтолж байна. Украины агаарын довтолгооноос хамгаалах систем цохилтын ихэнх хэсгийг няцааж байгаа ч зарим нь зорилгодоо хүрч байна.\nЕвропын холбооны удирдагчид Украиныг дэмжихээ дахин нотолж, Орост нэмэлт хориг арга хэмжээ авах талаар хэлэлцэж байна. Дайны улмаас үүссэн хүмүүнлэгийн хямрал улам гүнзгийрч байгаа бөгөөд олон улсын байгууллагууд тусламж үзүүлж байна.", "textEn":"Russian strikes have killed at least 15 people in Ukraine's Kyiv region, Ukrainian authorities said. The strikes hit residential buildings and infrastructure, and rescue operations are continuing.\nUkrainian President Volodymyr Zelenskyy said several people were missing after the strikes and called on the international community to stop Russian aggression. With winter beginning, attacks on energy infrastructure are hitting civilians hard.\nRussia has continued its strikes, launching drone attacks on many Ukrainian regions in recent days. Ukraine's air defences intercept most of them, but some get through.\nEuropean Union leaders have reaffirmed their support for Ukraine and are discussing additional sanctions on Russia. The humanitarian crisis caused by the war is deepening, and international organisations are providing assistance."},
  {"id":19, "cat":"delhii", "title":"Nvidia-г АНУ-ын үнэт цаасны хороо шалгаж байна; Женсен Хуан гүйцэтгэх захирлаар эргэн ирлээ", "titleEn":"Nvidia under US securities probe as Jensen Huang returns as CEO", "time":"7 цаг", "timeEn":"7 hours", "img":"https://commons.wikimedia.org/wiki/Special:FilePath/HP%201820-0250.jpg?width=760", "text":"Хиймэл оюуны чипийн зах зээлд тэргүүлдэг Nvidia компанийг АНУ-ын Үнэт цаас, биржийн хороо буюу SEC шалгаж эхэлсэн тухай мэдээлэл гарлаа. Шалгалт нь компанийн Хятад руу хийсэн чипний борлуулалттай холбоотой бөгөөд АНУ-ын Сангийн сайд Скотт Бессент энэ асуудлаар хариулт нэхэж байна.\nҮүний зэрэгцээ Nvidia-ийн үүсгэн байгуулагч Женсен Хуан гүйцэтгэх захирлын албан тушаалдаа эргэн ирсэн тухай мэдээлэл гарлаа. Хуаныг эргэн ирэхэд Ерөнхийлөгч Трампын дэмжлэгтэйгээр дарамт шахалт үзүүлсэн кампанит ажил нөлөөлсөн гэж мэдээлж байна.\nNvidia нь хиймэл оюуны системийг тэжээх чип үйлдвэрлэдэг дэлхийн хамгийн том компани бөгөөд түүний зах зээлийн үнэлгээ, бизнесийн шийдвэр нь технологийн салбар даяар анхаарал татаж байна. Хятад руу чип борлуулах асуудал нь АНУ-ын экспортын хяналтын бодлогын гол маргаантай сэдэв болоод байна.\nШалгалтын үр дүн, компанийн цаашдын алхам нь хөрөнгө оруулагчид болон технологийн салбарын хувьд чухал ач холбогдолтой. Nvidia одоогоор шалгалтын талаар албан ёсны тайлбар хийгээгүй байна.", "textEn":"Nvidia, the world's leading maker of chips powering artificial intelligence systems, has come under investigation by the US Securities and Exchange Commission (SEC), according to reports. The probe relates to the company's chip sales to China, and US Treasury Secretary Scott Bessent is seeking answers on the matter.\nAt the same time, Nvidia founder Jensen Huang has returned as chief executive, reportedly after a pressure campaign backed by President Trump.\nNvidia is the world's largest producer of AI chips, and its market value and business decisions draw attention across the technology sector. Chip sales to China have become a central dispute in US export-control policy.\nThe outcome of the investigation and the company's next steps matter greatly for investors and the tech industry. Nvidia has not yet commented officially on the probe."},
];



function aTitle(a){ return LANG === "en" ? (a.titleEn || a.title) : a.title; }
function aTime(a){ return LANG === "en" ? (a.timeEn || a.time) : a.time; }
function aText(a){ if(a.text) return LANG === "en" ? (a.textEn || a.text) : a.text; return SAMPLE_TEXT[LANG][a.id === 1 ? "long" : "short"]; }
function aRegion(a){ return a.region ? ((REGIONS[LANG] && REGIONS[LANG][a.region]) || a.region) : ""; }

// ===== Ханш · Цаг агаар (өдөр бүр шинэчлэгдэнэ; цаг агаарыг Open-Meteo-гоос шууд татна) =====
const RATES = {date:"2026-11-24", items:[{code:"USD", mnt:3607.57, chg:1}, {code:"EUR", mnt:3967.43, chg:1}, {code:"JPY", mnt:22.66, chg:0}, {code:"CNY", mnt:541.23, chg:1}, {code:"KRW", mnt:2.70, chg:0}, {code:"RUB", mnt:44.04, chg:0}, {code:"GBP", mnt:4730.40, chg:0}]};
let WEATHER = [
  {city:"Улаанбаатар", cityEn:"Ulaanbaatar", lat:47.9212, lon:106.9186, tz:"Asia/Ulaanbaatar", temp:-20, code:1},
  {city:"Токио", cityEn:"Tokyo", lat:35.6762, lon:139.6503, tz:"Asia/Tokyo", temp:12, code:1},
  {city:"Сөүл", cityEn:"Seoul", lat:37.5665, lon:126.978, tz:"Asia/Seoul", temp:0, code:1},
  {city:"Бээжин", cityEn:"Beijing", lat:39.9042, lon:116.4074, tz:"Asia/Shanghai", temp:-1, code:0},
  {city:"Москва", cityEn:"Moscow", lat:55.7558, lon:37.6173, tz:"Europe/Moscow", temp:0, code:3},
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
  {yt:"KEHIOixwcO4", title:"Нийслэлийн 2027 оны төсвийн төслийг өргөн барилаа", titleEn:"Capital's 2027 draft budget submitted", src:"МҮОНТ", srcEn:"MNB", srcFull:"МҮОНТ (Монголын үндэсний олон нийтийн телевиз)", srcFullEn:"MNB (Mongolian National Broadcaster)"},
  {yt:"mI18gRdstew", title:"Н.Учрал: Оффтейк гэрээг дахин шалгана", titleEn:"N. Uchral: Offtake agreement to be re-examined", src:"МҮОНТ", srcEn:"MNB", srcFull:"МҮОНТ (Монголын үндэсний олон нийтийн телевиз)", srcFullEn:"MNB (Mongolian National Broadcaster)"},
  {yt:"Uo9uRSu8D3A", title:"Тусгай сурвалжилга: ТЕНДЕРИЙН ЦААНА", titleEn:"Special report: Behind the tenders", src:"Eagle TV", srcEn:"Eagle TV", srcFull:"Eagle TV (Ийгл телевиз)", srcFullEn:"Eagle TV"},
  {yt:"cs8FjJEXC2s", title:"Шинжээчийн цаг: Anthropic, Pbc компани Nasdaq-ын хөрөнгийн бирж дээр Ant тикертэйгээр бүртгэгдэнэ", titleEn:"Expert's Hour: Anthropic, Pbc to list on Nasdaq under ticker Ant", src:"Eagle TV", srcEn:"Eagle TV", srcFull:"Eagle TV (Ийгл телевиз)", srcFullEn:"Eagle TV"},
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
  document.querySelectorAll(".js-logo-name").forEach(el=>{ el.textContent = LANG === "en" ? "TANA" : "ТАНА"; });
  document.querySelectorAll(".js-logo-suffix").forEach(el=>{ el.textContent = LANG === "en" ? ".mn" : ".мн"; });
  const lb = document.getElementById("langBtn");
  if(lb) lb.textContent = LANG === "en" ? "MN" : "EN";
  const now = new Date();
  document.getElementById("todayDate").textContent = t("today") + (now.getMonth()+1) + "/" + now.getDate();
  renderHome();
}
function setLang(l){
  LANG = l;
  localStorage.setItem("tana-lang", l);
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
