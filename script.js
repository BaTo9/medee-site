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

// ===== Бодит мэдээнүүд (2026-11-06) — өдөр бүр шинэчлэгдэнэ =====
const ARTICLES = [
  {id:1, cat:"uls-tor", title:"УИХ-ын чуулган: Оюутолгойн ногдол ашгийг иргэн бүрд олгох өргөдлийг 100 мянган иргэн дэмжлээ", titleEn:"Parliament session: petition to pay Oyu Tolgoi dividends to every citizen backed by 100,000 people", time:"15 мин", timeEn:"15 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Genghis%20Khan%2C%20Parliament%20Building%2C%20Ulaanbaatar%2C%20Mongolia%20(48788605616).jpg?width=1000", text:"Улсын Их Хурлын 2026 оны намрын ээлжит чуулганы арваннэгдүгээр сарын 5-ны нэгдсэн хуралдаан 68 гишүүн хүрэлцэн ирж, 54 хувийн ирцтэйгээр 10.00 цагт эхэллээ. Хуралдаанаар таван асуудал хэлэлцэхээр Улсын Их Хурлын дарга С.Бямбацогт танилцуулсан байна. Хуралдааны эхэнд дарга аравдугаар сарын 30-нд өргөн мэдүүлсэн Эрүүл мэндийн тухай хуулийн шинэчилсэн найруулгын төслийг Хүний хөгжил, нийгмийн бодлогын байнгын хороонд хуваарилсан талаар мэдээллээ.\n\nЭрүүл мэндийн ажилтны тухай хуулийн төслийг хэлэлцэх эсэх хэлэлцүүлгийн үеэр Улсын Их Хурлын дахь Ардчилсан намын бүлэг завсарлага авав. Хуулийн төсөл нь эрүүл мэндийн салбарын ажилтнуудын эрх, үүрэг, цалин хөлс, ажлын нөхцөлтэй холбоотой зохицуулалтыг шинэчлэх зорилготой бөгөөд хэлэлцүүлэг үргэлжилж байна.\n\nМөн хуралдаанаар иргэн Х.Оюунбилэгийн санаачилсан нийтийн өргөдлийг хэлэлцүүллээ. «Оюу толгойн ашиг болох 3 их наядаас иргэн бүрд 857,000 төгрөгийг хувь дансанд нь шилжүүлж өгөх хуулийн төсөл санаачлах тухай» өргөдлийг аравдугаар сарын 23-нд санаачилж, арваннэгдүгээр сарын 2 хүртэлх хугацаанд 18 насанд хүрсэн 100,094 иргэн дэмжсэн байна. Улсын Их Хурлын дарга 100 мянга гаруй иргэний дуу хоолой, хүсэл, хүлээлт гэдгийг тэмдэглэн хэлж, өргөдлийг Эдийн засгийн болон Өргөдлийн байнгын хороонд хуваарилжээ.\n\nХарин Сангийн сайд З.Мэндсайхан Оюутолгойн ногдол ашгийн орлогыг иргэдэд бэлнээр олгохын оронд Хуримтлалын санд төвлөрүүлнэ гэж мэдэгдсэн байна. Сангийн 3 их наяд төгрөгийн босго, их хэмжээний бэлэн мөнгөний олголт инфляцыг өсгөж болзошгүй гэсэн болгоомжлолыг үндэслэл болгожээ. Ийнхүү өргөдлийн асуудал парламентын байнгын хороодод хэлэлцэгдэхээр болсон бөгөөд шийдвэр нь олон нийтийн анхаарлын төвд байна.", textEn:"The plenary session of the State Great Khural's 2026 autumn session on November 5 began at 10:00 with 68 members present, a 54 percent turnout. Speaker S. Byambatsogt announced that five issues were on the agenda. At the start of the session, the Speaker said the revised draft Health Law, submitted on October 30, had been assigned to the Standing Committee on Human Development and Social Policy.\n\nDuring the discussion on whether to debate the draft law on health workers, the Democratic Party faction in parliament took a recess. The bill aims to update regulations on health workers' rights, duties, pay and working conditions, and discussion is continuing.\n\nThe session also discussed a public petition initiated by citizen Kh. Oyunbileg. The petition, calling for a bill to transfer 857,000 tugriks to each citizen's personal account from the 3 trillion tugriks of Oyu Tolgoi profit, was launched on October 23 and had been supported by 100,094 citizens aged 18 and over by November 2. The Speaker noted that this represents the voice, wishes and expectations of more than 100,000 citizens, and assigned the petition to the Standing Committees on Economy and on Petitions.\n\nFinance Minister Z. Mendsaikhan, however, has said the government will channel Oyu Tolgoi dividend revenue into the Accumulation Fund rather than pay it out in cash to citizens, citing the fund's three-trillion-tugrik threshold and concerns that large cash payouts could lift inflation. The petition will now be considered by parliamentary standing committees, and the decision is in the public spotlight."},
  {id:2, cat:"uls-tor", title:"«Чөлөөлье» санаачилгын цөм нь төрийн өмчийн реформ гэдгийг онцлов", titleEn:"\"Chuluulye\" initiative's core is state-owned enterprise reform, minister says", time:"30 мин", timeEn:"30 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/2024-10-18%20Ulaanbaatar%2C%20S%C3%BCkhbaatar%20Square.jpg?width=760", text:"Засгийн газраас төрийн өмчит компанийн талаар баримтлах өмчлөлийн бодлогын төслийн нээлттэй хэлэлцүүлгийг арваннэгдүгээр сарын 5-нд Монголын Үндэсний Худалдаа Аж Үйлдвэрийн танхимтай хамтран зохион байгууллаа. Хэлэлцүүлгийг нээж үг хэлэхдээ Монгол Улсын сайд, Засгийн газрын Хэрэг эрхлэх газрын дарга Б.Энхбаяр «Чөлөөлье» дөрвөн тулгуурт үндэсний санаачилгын цөм нь төрийн өмчийн реформд зангилагдаж байгааг онцоллоо.\n\nТэрбээр төрийн өмчит компаниудын засаглал, хяналтыг сайжруулж, оновчтой болгох нь зүйтэй гэдэгт улс төрийн намууд, аж ахуйн нэгжүүд, иргэд, олон нийт нэг зүгт харж, нэгдсэн ойлголттой байгаа нь хамгийн том давуу тал гэдгийг тодотгов. Төрийн болон орон нутгийн өмчит компанийн засаглалын тухай хуулийг 2026 оны долдугаар сарын 2-нд баталж, 2027 оны нэгдүгээр сарын 1-нээс дагаж мөрдөх юм.\n\nЗасгийн газар төрийн өмчит компанийн талаар баримтлах өмчлөлийн бодлогыг гурван үе шаттайгаар 2027-2030 он хүртэл хэрэгжүүлэхээр боловсруулсан бөгөөд төсөлд төрийн өмчит компаниудын ангиллыг нарийвчлан тодорхойлж, төлөөлөн удирдах зөвлөл, гүйцэтгэх удирдлагыг нээлттэй сонгон шалгаруулах, үйл ажиллагааг цахимжуулж, хяналт, хариуцлагыг сайжруулах олон арга хэмжээ тусгагджээ.\n\nХэлэлцүүлэгт «Төрийн өмчийн өмчлөлийн бодлогын төсөл»-ийн танилцуулгыг ТӨБЗГ-ын хэлтсийн дарга Ц.Баяр-Эрдэнэ, «Үндэсний хөрөнгө оруулалтын сан ба хөрөнгө оруулалтын бодлого» сэдвээр Сангийн дэд сайд Б.Хулан, «Төрийн өмчит компаниудын өмчлөлийн бодлого боловсруулах олон улсын туршлага» сэдвээр Европын сэргээн босголт, хөгжлийн банкны зөвлөх Бачу Сорана нар тус тус танилцуулга хийж, төр, хувийн хэвшил, олон нийтийн төлөөлөл болсон 200 гаруй төлөөлөгч оролцож, санал солилцлоо.", textEn:"The government held an open discussion on the draft ownership policy for state-owned companies on November 5, jointly with the Mongolian National Chamber of Commerce and Industry. Opening the discussion, Minister and Chief of the Cabinet Secretariat B. Enkhbayar stressed that the core of the four-pillar national \"Chuluulye\" (Let's Free) initiative lies in state-owned enterprise reform.\n\nHe noted that political parties, businesses, citizens and the public share a common understanding that the governance and oversight of state-owned companies should be improved and streamlined, and that this consensus is the greatest advantage. The Law on the Governance of State and Locally Owned Companies was adopted on July 2, 2026, and takes effect on January 1, 2027.\n\nThe government has drafted the ownership policy for state-owned companies to be implemented in three phases from 2027 to 2030. The draft defines the classification of state-owned companies in detail and includes measures to select boards of directors and executive management through open competition, digitalise operations, and improve oversight and accountability.\n\nAt the discussion, Ts. Bayar-Erdene, a department head at the State Property Agency, presented the draft ownership policy; Deputy Finance Minister B. Khulan spoke on the National Investment Fund and investment policy; and European Bank for Reconstruction and Development consultant Bachu Sorana presented international experience in developing ownership policies for state-owned companies. More than 200 representatives of government, business and the public took part and exchanged views."},
  {id:3, cat:"niigem", title:"Нийслэл: Ногоон зээлээр дулаан хураагууртай болгож, 7-10 мянган айлын янданг буулгана", titleEn:"Capital: green loans for heat accumulators to remove 7,000-10,000 household chimneys", time:"45 мин", timeEn:"45 min", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Ger%20district%20of%20Ulaanbaatar.jpg?width=760", text:"Засгийн газрын хуралдаанаар Улаанбаатар хотын 2026-2027 оны өвөлжилтийн бэлтгэл, агаарын бохирдлыг бууруулах технологийн боломжийн талаар хэлэлцжээ. Энэ тухай Нийслэлийн Засаг дарга бөгөөд Улаанбаатар хотын захирагч Б.Пүрэвдагва мэдээлэл хийлээ.\n\nНийслэлээс 2026-2027 оны өвөл НҮБ-ын Хүүхдийн сантай хамтран 7-10 мянган айлын янданг буулгах ажлыг эхлүүлнэ. Арваннэгдүгээр сарын 20-нд төв талбайд энэ өвөл ямар технологийг нэвтрүүлэх гэж байгаагаа иргэддээ танилцуулахаар төлөвлөжээ. Энэ нь цахилгаанд суурилсан дулаан хураагуур бөгөөд гэр хорооллын айл өрхүүд шөнийн цагаар цахилгаан эрчим хүчээр дулаанаа хуримтлуулж, өдөртөө ашиглах боломжтой юм.\n\nАрилжааны банктай хамтран ногоон зээл олгож, янданг буулгах арга замыг нэвтрүүлэхэд бэлэн болсон байна. Иргэдийг ногоон зээлээр цахилгаанд суурилсан дулаан хураагууртай болгосноор 7-10 мянган янданг буулгах боломжтой гэж хотын дарга мэдэгдлээ.\n\nАгаарын бохирдол нь нийслэлийн иргэдийн эрүүл мэндэд хамгийн ихээр нөлөөлж буй асуудлын нэг хэвээр байгаа бөгөөд яндангийн тоог бууруулах нь өвлийн улирлын утааг багасгах гол арга хэмжээний нэг гэж албаныхан үзэж байна. Технологийн танилцуулгын дараа иргэд ногоон зээлд хамрагдах нөхцөл, бүрдүүлэх баримт бичгийн талаар дэлгэрэнгүй мэдээлэл авах боломжтой болно.", textEn:"The Cabinet discussed Ulaanbaatar's preparations for the 2026-2027 winter and technological options for reducing air pollution. Governor of the capital and Mayor of Ulaanbaatar B. Purevdagva briefed journalists on the matter.\n\nThis winter the capital will begin work with the UN Children's Fund to remove the chimneys of 7,000 to 10,000 households. On November 20, the technology to be introduced this winter will be presented to residents at the central square. It is an electric heat accumulator: ger-district households can store heat using electricity at night and use it during the day.\n\nIn cooperation with commercial banks, green loans are ready to be offered to introduce this way of removing chimneys. The mayor said that giving residents electric heat accumulators through green loans could remove 7,000 to 10,000 chimneys.\n\nAir pollution remains one of the biggest factors affecting the health of capital residents, and officials see cutting the number of chimneys as a key measure to reduce winter smoke. After the technology presentation, residents will be able to get detailed information on the conditions for green loans and the documents required."},
  {id:4, cat:"ediin-zasag", title:"Оюутолгойн баяжмалын экспорт сэргэж, хэвийн горимдоо орлоо", titleEn:"Oyu Tolgoi concentrate exports resume and return to normal", time:"1 цаг", timeEn:"1 hour", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Oyu%20Tolgoi%2007.JPG?width=760", text:"БНХАУ-ын Ганцмод боомтын засвар үйлчилгээтэй холбоотойгоор удаашраад байсан Оюутолгой ХХК-ийн баяжмалын экспорт сэргэжээ. Хэвийн үед өдөрт 14 цуваа хилээр гаргадаг байсан бол боомтын засварын улмаас өдөрт дөрвөн цуваа хүртэл багасаад байсан юм.\n\nУурхайн албан ёсны цахим хуудас болон гүйцэтгэх захирал С.Мөнхсүхийн фэйсбүүк хуудсаар дамжуулан мэдээлснээр баяжмалын экспортын хязгаарлалт шийдвэрлэгдэж, өчигдрөөс сэргэж, 13 цувааг хилээр нэвтрүүлжээ. Ингэснээр экспорт хэвийн горимдоо ойртсон байна.\n\nОюутолгой нь Монгол Улсын экспортын орлогын гол эх үүсвэрийн нэг бөгөөд баяжмалын тээвэрлэлтийн тасалдал нь улсын валютын орлого, төсвийн орлогод шууд нөлөөлдөг. Боомтын засвар үйлчилгээ дуусч, тээвэрлэлт сэргэснээр уурхайн үйл ажиллагаа тогтворжих төлөвтэй байна.\n\nБоомтын засвар үйлчилгээний хугацаанд хуримтлагдсан ачааг ойрын өдрүүдэд үе шаттайгаар гаргах бөгөөд уурхайн зүгээс тээвэрлэлтийн хуваарийг хэвийн горимд оруулахаар ажиллаж байна.", textEn:"Oyu Tolgoi LLC's concentrate exports, which had slowed due to maintenance work at China's Gantsmod border port, have resumed. Normally 14 convoys cross the border per day, but during the port maintenance that number had fallen to as low as four convoys a day.\n\nAccording to the mine's official website and CEO S. Munkhsukh's Facebook page, the export restriction has been resolved and, starting yesterday, 13 convoys crossed the border. Exports have thus come close to their normal pace.\n\nOyu Tolgoi is one of Mongolia's main sources of export revenue, and any interruption in concentrate transport directly affects the country's foreign currency earnings and budget revenue. With the port maintenance completed and transport resumed, the mine's operations are expected to stabilise.\n\nCargo that accumulated during the maintenance period will be cleared in stages over the coming days, and the mine is working to bring the transport schedule back to its normal routine."},
  {id:5, cat:"ediin-zasag", title:"Монгол, Хятадын 9 боомтоор 94.5 сая тонн уул уурхайн бүтээгдэхүүн тээвэрлэжээ", titleEn:"94.5 million tonnes of mining products moved through nine Mongolia-China road ports", time:"1 цаг", timeEn:"1 hour", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Howo%20Sinotruk%20Mining%20Dump%20Truck%20(Mining%20Indonesia%202026).jpg?width=760", text:"Монгол, Хятадын авто замын хоёр талын есөн боомтоор 2026 оны арваннэгдүгээр сарын 3-ны байдлаар 94.5 сая тонн уул уурхайн бүтээгдэхүүн тээвэрлэжээ.\n\nБоомтуудын ачаа эргэлт нь Монгол Улсын уул уурхайн экспортын гол суваг бөгөөд нүүрс, зэсийн баяжмал зэрэг бүтээгдэхүүн Хятадын зах зээлд голчлон гардаг. Авто замын боомтоор дамжих тээвэрлэлтийн хэмжээ ийнхүү өссөн нь экспортын эрэлт өндөр хэвээр байгааг харуулж байна.\n\nХилийн боомтуудын нэвтрүүлэх чадварыг нэмэгдүүлэх, тээвэрлэлтийн саад бэрхшээлийг бууруулах нь экспортын орлогыг тогтвортой байлгах гол нөхцөл болж байна. Цаашид боомтын дэд бүтцийг сайжруулж, нэвтрүүлэх хүчин чадлыг нэмэгдүүлэхээр хоёр тал хамтран ажиллаж байгаа юм.\n\nУул уурхайн бүтээгдэхүүний экспорт нь Монгол Улсын эдийн засгийн өсөлт, валютын нөөцийн гол тулгуур хэвээр байгаа бөгөөд боомтуудын хэвийн үйл ажиллагаа нь экспортын тасралтгүй байдлыг хангахад чухал үүрэгтэй.", textEn:"A total of 94.5 million tonnes of mining products had been transported through the nine road border ports between Mongolia and China as of November 3, 2026.\n\nCargo traffic through the ports is the main channel for Mongolia's mining exports, with products such as coal and copper concentrate going mainly to the Chinese market. The growth in road-port transport volumes shows that export demand remains high.\n\nIncreasing the throughput capacity of border ports and reducing transport bottlenecks is key to keeping export revenues stable. The two sides are working together to improve port infrastructure and raise throughput capacity.\n\nMining exports remain the main pillar of Mongolia's economic growth and foreign currency reserves, and the smooth operation of the ports plays an important role in keeping exports uninterrupted."},
  {id:6, cat:"delhii", title:"АНУ-ын завсрын сонгуулийн дараа: Вэнс Трампаас зай барьж, Ардчилсан нам хяналтаа чангална гэж амлав", titleEn:"After US midterms: Vance distances himself from Trump as Democrats vow tighter oversight", time:"2 цаг", timeEn:"2 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/US%20Capitol%20east%20side.JPG?width=760", text:"АНУ-д арваннэгдүгээр сарын 3-нд болсон завсрын сонгуулиар Ардчилсан нам Конгрессын хоёр танхимын хяналтыг авсан нь Бүгд найрамдах намын доторх маргаан, байр суурийн зөрүүг ил болгож байна. Дэд ерөнхийлөгч Ж.Д.Вэнс сонгуулийн ялагдлын дараа Ерөнхийлөгч Дональд Трампаас зай барихыг оролдож байгаа гэж хэвлэлүүд мэдээлж байна.\n\nАрдчилсан намын удирдагчид шинэ Конгресс хуралдаж эхэлмэгц Трампын засаг захиргааны үйл ажиллагаанд хяналтаа чангална гэж амлав. Шинэ Конгресс 2027 оны нэгдүгээр сарын 3-нд хуралдах бөгөөд Нью-Йоркийн төлөөлөгч Хаким Жеффрис Танхимын спикер болох төлөвтэй байна.\n\nСонгуулийн үр дүнд Трампын Ирантай хийж буй дайн болон эдийн засгийн бодлогод сонгогчдын дургүйцэл нөлөөлсөн гэж ажиглагчид үзэж байна. Бүгд найрамдах намын зарим гишүүн ялагдлыг Трамптай холбон шүүмжилж байгаа бол Ерөнхийлөгч асан Барак Обама Ардчилсан намын түүхэн ялалтыг сайшааж, хүмүүсийг нэгтгэдэг улс төрийг уриалжээ.\n\nСанхүүгийн зах зээл Ардчилсан намын ялалтыг аль хэдийн үнэлж тооцсон байсан тул огцом хөдлөөгүй байна. Харин сонгуулийн дараах улс төрийн хүчний тэнцвэр өөрчлөгдсөн нь ойрын хоёр жилд АНУ-ын дотоод болон гадаад бодлогод мэдэгдэхүйц нөлөө үзүүлэх төлөвтэй байна.", textEn:"The Democratic Party's victory in both chambers of Congress in the US midterm elections on November 3 has exposed disputes and differences of position within the Republican Party. Media report that Vice President J.D. Vance is trying to distance himself from President Donald Trump after the election defeat.\n\nDemocratic leaders have promised to tighten oversight of the Trump administration once the new Congress convenes. The new Congress meets on January 3, 2027, and New York Representative Hakeem Jeffries is expected to become Speaker of the House.\n\nObservers say voter discontent with Trump's war with Iran and his economic policies influenced the result. Some Republicans have blamed Trump for the defeat, while former President Barack Obama praised the historic Democratic gains and called for politics that brings people together.\n\nFinancial markets barely moved, having already priced in the Democratic victory. But the changed political balance after the election is expected to have a noticeable effect on US domestic and foreign policy over the next two years."},
  {id:7, cat:"delhii", title:"Израильд засгийн газар байгуулах асуудлаар Ерөнхийлөгч Херцог намын удирдагчидтай зөвлөлдөж байна", titleEn:"In Israel, President Herzog consults party leaders on forming a government", time:"2 цаг", timeEn:"2 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Knesset%20Israeli%20Parliament%20Building%20(41404889170).jpg?width=760", text:"Израилын 2026 оны сонгуулийн дараа Ерөнхийлөгч Исаак Херцог дараагийн засгийн газрыг хэн байгуулахыг шийдэхээр намын удирдагчидтай зөвлөлдөж эхэллээ. Тус улсын Сонгуулийн төв хороо аравдугаар сарын 27-ны ээлжит сонгуулийн дүнг албан ёсоор баталгаажуулж, Ерөнхийлөгчид хүргүүлсэн байна.\n\nОдоогоор аль ч эвсэл олонх болоход шаардлагатай 61 суудлыг аваагүй байгаа нь засгийн газар байгуулах хэлэлцээг хүндрүүлж байна. Ерөнхийлөгчийн зөвлөлдөөнөөр намуудын байр суурийг сонсож, засгийн газар байгуулах үүргийг хэнд өгөхөө шийднэ.\n\nЭнэ нь Ерөнхий сайд Биньямин Нетаньяхугийн эвсэл парламентын олонхоо алдсанаас хэдхэн хоногийн дараа болж байгаа бөгөөд АНУ-ын Ерөнхийлөгч Дональд Трамп Израильд олгодог цэргийн тусламжийг оны эцсээр зогсооно гэж мэдэгдсэн нь нөхцөл байдлыг улам хүндрүүлж байна.\n\nЗасгийн газар байгуулах хэлэлцээний үр дүн Израилын дотоод улс төр болон Ойрхи Дорнодын аюулгүй байдалд шууд нөлөөлөх тул олон улсын анхаарлын төвд байна. Ерөнхийлөгчийн зөвлөлдөөн дууссаны дараа засгийн газар байгуулах үүргийг хэн хүлээх нь тодорхой болно.", textEn:"After Israel's 2026 elections, President Isaac Herzog has begun consulting party leaders to decide who will form the next government. The country's Central Election Committee officially certified the results of the October 27 general election and submitted them to the President.\n\nNo bloc has yet secured the 61 seats needed for a majority, complicating negotiations to form a government. In the President's consultations, the parties' positions will be heard before deciding who receives the mandate to form a government.\n\nThis comes just days after Prime Minister Benjamin Netanyahu's bloc lost its parliamentary majority, and US President Donald Trump's announcement that he will end military aid to Israel by the end of the year has added to the pressure.\n\nThe outcome of the government-formation talks will directly affect Israeli domestic politics and Middle East security, so it is in the international spotlight. Once the President's consultations conclude, it will become clear who is tasked with forming the government."},
  {id:8, cat:"delhii", title:"Нефтийн үнэ АНУ-ын завсрын сонгуулийн дараа огцом унав", titleEn:"Oil prices plunge after US midterm elections", time:"3 цаг", timeEn:"3 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Oil%20pumpjack%20in%20the%20Permian%20Basin.jpg?width=760", text:"АНУ-ын завсрын сонгуулийн дараа газрын тосны үнэ огцом унаж, Brent маркийн нефтийн үнэ 8.6 хувиар буурч, баррель нь 94.66 доллар болсон бол АНУ-ын WTI маркийн нефтийн үнэ 8.3 хувиар буурч, 88.08 доллар болжээ.\n\nЗах зээлийн шинжээчид үнийн уналтыг сонгуулийн үр дүнтэй холбон тайлбарлаж байгаа бөгөөд Ардчилсан нам Конгрессын хяналтыг авсан нь АНУ-ын эрчим хүчний бодлого өөрчлөгдөж болзошгүй гэсэн хүлээлтийг төрүүлжээ.\n\nНефтийн үнийн уналт нь нефть экспортлогч улсуудын төсвийн орлогод шууд нөлөөлдөг бөгөөд Монгол Улс нефть бүтээгдэхүүнээ голчлон импортолдог тул шатахууны үнэ буурах боломжтой гэж эдийн засагчид үзэж байна.\n\nГэсэн хэдий ч үнийн хөдөлгөөн цаашид ямар чиглэлд явах нь сонгуулийн дараах бодлогын тодорхойгүй байдал, Ойрхи Дорнодын нөхцөл байдлаас хамаарна гэж ажиглагчид анхааруулж байна. Зах зээл ойрын өдрүүдэд Конгрессын шинэ бүрэлдэхүүний эрчим хүчний бодлогын талаарх дохиог анхааралтай ажиглах болно.", textEn:"Oil prices plunged after the US midterm elections: Brent crude fell 8.6 percent to $94.66 per barrel, while US West Texas Intermediate dropped 8.3 percent to $88.08.\n\nMarket analysts link the fall to the election result, with the Democratic Party taking control of Congress raising expectations that US energy policy could change.\n\nThe drop in oil prices directly affects the budget revenues of oil-exporting countries, and economists say that because Mongolia imports most of its petroleum products, fuel prices could fall.\n\nHowever, observers warn that where prices go next will depend on post-election policy uncertainty and the situation in the Middle East. Markets will watch closely in the coming days for signals about the new Congress's energy policy."},
  {id:9, cat:"delhii", title:"Энэтхэгт агаарын бохирдол минут тутамд дөрвөн хүний аминд хүрч байна", titleEn:"Air pollution claims four lives every minute in India", time:"3 цаг", timeEn:"3 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Smog%20as%20visible%20in%20the%20Gurgaon%20area%20near%20Delhi%20on%20Nov%202016.jpg?width=760", text:"Энэтхэгт агаарын бохирдол минут тутамд дөрвөн хүний аминд хүрч байгаа нь хүний амь нас болон эдийн засагт асар их хохирол учруулж байна гэж мэдээлж байна.\n\nБохирдлын асуудал ялангуяа өвлийн улиралд улам хүндэрдэг бөгөөд томоохон хотуудад агаарын чанар эрүүл мэндэд аюултай түвшинд хүрдэг. Иргэд амьсгалын замын өвчин, зүрх судасны өвчнөөр өвчлөх эрсдэл нэмэгдэж, эмнэлгийн ачаалал өсдөг байна.\n\nЭнэтхэгийн засгийн газар бохирдлыг бууруулах арга хэмжээ авч байгаа ч хүн амын нягтрал, аж үйлдвэр, тээврийн хэрэгслийн өсөлт, газар тариалангийн үлдэгдэл шатаах зэрэг олон хүчин зүйл асуудлыг шийдвэрлэхэд хүндрэл учруулж байна.\n\nАгаарын бохирдол нь зөвхөн Энэтхэгийн бус, бүс нутгийн нийтлэг асуудал бөгөөд хөрш орнуудад ч нөлөөлдөг. Олон улсын байгууллагууд цэвэр эрчим хүч, ногоон тээвэрт шилжихэд дэмжлэг үзүүлэхийг уриалж байна.", textEn:"Air pollution in India claims four lives every minute, causing enormous harm to human life and the economy, according to reports.\n\nThe pollution problem worsens especially in winter, when air quality in major cities reaches levels dangerous to health. Residents face a higher risk of respiratory and cardiovascular disease, and the burden on hospitals grows.\n\nThe Indian government is taking measures to reduce pollution, but many factors complicate the task: population density, industry, growth in vehicle numbers, and the burning of crop residue.\n\nAir pollution is not only India's problem but a shared regional one, affecting neighbouring countries as well. International organisations are calling for support in the shift to clean energy and green transport."},
  {id:10, cat:"delhii", title:"Aer Lingus-ийн нислэг бөмбөгний аюулын улмаас Францад буужээ", titleEn:"Aer Lingus flight diverted to France after bomb threat", time:"4 цаг", timeEn:"4 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/American%20Airbus%20A320%20N126UW%20BWI%20MD1.jpg?width=760", text:"Ирландын Aer Lingus агаарын тээврийн компанийн Дублин хотоос Ром руу нисэж байсан Airbus A320 онгоц бөмбөгний аюулын улмаас Францын Эврё агаарын баазад буухаас өөр аргагүй болжээ.\n\nОнгоцонд 151 зорчигч, зургаан багийн гишүүн зорчиж байсан бөгөөд онгоц аюулгүйгээр газардсан байна. Францын тэсрэх бодис устгах багийнхан онгоцыг шалгаж эхэлжээ.\n\nСүүлийн өдрүүдэд Европт бөмбөгний аюулын улмаас хэд хэдэн нислэг чиглэлээ өөрчилсөн нь агаарын тээврийн аюулгүй байдлын талаарх болгоомжлолыг нэмэгдүүлж байна. Аюулын эх үүсвэр, үнэн эсэхийг шалгах ажиллагаа үргэлжилж байна.\n\nЗорчигчдын аюулгүй байдлыг хангах үүднээс агаарын тээврийн компаниуд болон нисэх буудлууд аюулгүй байдлын шалгалтаа чангатгаж, холбогдох байгууллагуудтай нягт хамтран ажиллаж байна.", textEn:"An Aer Lingus Airbus A320 flying from Dublin to Rome was diverted to France's Évreux airbase following a bomb threat.\n\nThe aircraft was carrying 151 passengers and six crew members, and it landed safely. French bomb disposal teams began inspecting the plane.\n\nSeveral flights in Europe have been diverted in recent days because of bomb threats, raising concern about aviation security. Work to establish the source of the threat and whether it was genuine is continuing.\n\nAirlines and airports are tightening security checks and working closely with the relevant authorities to keep passengers safe."},
  {id:11, cat:"sport", title:"Криштиану Роналду Португалын шигшээ багаасаа зодог тайллаа", titleEn:"Cristiano Ronaldo retires from Portugal national team", time:"4 цаг", timeEn:"4 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Argentine%20-%20Portugal%20-%20Cristiano%20Ronaldo.jpg?width=760", text:"Португалын шигшээ багийн ахлагч Криштиану Роналду шигшээ багаасаа зодог тайлж буйгаа албан ёсоор зарлалаа. Өдгөө 41 настай тэрбээр арваннэгдүгээр сарын 5-нд өөрийн цахим хуудсаараа дамжуулан Португалын шигшээ багийн долоо дугаартай өмсгөлөө дараагийн үедээ шилжүүлэх болсноо мэдэгдсэн байна.\n\n«Португалын ард түмэндээ хандаж хэлэхэд, шигшээ багийнхаа долоо дугаартай өмсгөлийг буцаах цаг ирлээ. Энэ өмсгөл зөвхөн минийх гэж би хэзээ ч бодож байгаагүй. Гэхдээ 23 жилийн турш өмсөж, хамгаалж, дэлхийн өнцөг булан бүрд авч явах нэр төр, хариуцлага надад оногдсон. Одоо үүнийг ирээдүй хойч үедээ шилжүүлэх цаг ирлээ» гэж тэрбээр бичжээ.\n\nРоналду 2003 оны наймдугаар сард Португалын шигшээ багийн төлөө дебютээ хийснээс хойш нийт 234 тоглолтод оролцож, 146 гоол оруулсан нь шигшээ багийн түүхэн дэх дээд амжилт бөгөөд Гиннессийн номд бичигддэг. Тэрбээр Португалын хамт 2016 онд Европын аварга, 2019 болон 2025 онд Үндэстнүүдийн лигт түрүүлсэн юм.\n\nРоналдогийн зодог тайлах шийдвэрийн өмнө шигшээ багийн шинэ дасгалжуулагч Хорхе Хесус түүнийг сэлгээнд суулгаж, маргаан үүссэн бөгөөд есдүгээр сард Роналду шигшээ багийн цугларалтаас буцаж, сахилгын шийтгэл хүлээсэн байна. Португалын хөлбөмбөгийн холбоо түүнд талархал илэрхийлж, гавьяаг нь хүндэтгэх тусгай арга хэмжээ зохион байгуулахаа мэдэгджээ.\n\nРоналду клубын түвшинд Саудын Арабын Аль-Наср багийнхаа төлөө үргэлжлүүлэн тоглоно. Тэрбээр замналынхаа 1,000 дахь гоолыг оруулах зорилготой байгаа бөгөөд одоогоор 985 гоолтой явна.", textEn:"Portugal captain Cristiano Ronaldo has officially announced his retirement from the national team. The 41-year-old said on November 5, via his social media, that he is passing on Portugal's number seven shirt to the next generation.\n\n\"To the people of Portugal, the time has come to return our national team's number seven shirt. I never felt it belonged only to me, but for 23 years I had the honour and responsibility of wearing it, defending it and carrying it to stadiums all over the world. Now the time has come to pass it on to the future,\" he wrote.\n\nSince his Portugal debut in August 2003, Ronaldo has played 234 matches and scored 146 goals, both all-time records for a national team, recognised by Guinness World Records. With Portugal he won the European Championship in 2016 and the Nations League in 2019 and 2025.\n\nBefore his decision, new Portugal coach Jorge Jesus left him on the bench, sparking a dispute, and in September Ronaldo left the national team camp and received a disciplinary sanction. The Portuguese Football Federation has thanked him and said it will hold a special ceremony to honour his achievements.\n\nRonaldo will continue playing at club level for Saudi Arabia's Al-Nassr. He is chasing his 1,000th career goal and currently has 985."},
  {id:12, cat:"sport", title:"Дакар залуучуудын олимп: Т.Төгсхүслэн хүрэл медаль хүртэж, 3х3 сагсан бөмбөг өнөөдөр эхэлнэ", titleEn:"Dakar Youth Olympics: T. Tugsukhulen wins bronze as 3x3 basketball starts today", time:"5 цаг", timeEn:"5 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/A%20judo%20competition%20(FL61746686).jpg?width=760", text:"Сенегалын Дакар хотноо залуучуудын IV олимп үргэлжилж байна. Одоогийн байдлаар Япон, ОХУ тус бүр хоёр алтан медальтай тэргүүлж байгаа бол БНХАУ-ын баг нэг алт, хоёр мөнгөн медалиар гуравдугаарт жагсжээ. 15 улс дор хаяж нэг алт аваад байгаа бол Монгол тэргүүтэй 41 улс ямар нэгэн медаль хүртжээ.\n\nМанай улсаас жүдогоор хөвгүүдийн 55 кг-ын жинд зодоглосон Т.Төгсхүслэн хүрэл медаль хүртсэн билээ. Энэ нь Монголын багийн Дакарын олимпод хүртсэн анхны медаль юм.\n\nМөн 3х3 сагсан бөмбөгийн хөвгүүдийн ангилалд Монголын баг өрсөлдөнө. Энэ сарын 6-нд эхлэх тус тэмцээнд 12 улсын баг өрсөлдөх бөгөөд Монголын баг Аргентин, Венесуэлийн хамт нэг хэсэгт багтжээ.\n\nЗалуучуудын олимп нь залуу тамирчдад олон улсын тавцанд өрсөлдөх туршлага хуримтлуулах, спортын найрамдал, соёлын солилцоог дэмжих зорилготой бөгөөд Монголын баг тэмцээний үлдсэн өдрүүдэд медалийн тоогоо нэмэгдүүлэхийг зорьж байна.", textEn:"The fourth Youth Olympic Games continue in Dakar, Senegal. Japan and Russia currently lead with two gold medals each, while China is third with one gold and two silver medals. Fifteen countries have won at least one gold, and 41 countries, including Mongolia, have won a medal of some kind.\n\nMongolia's T. Tugsukhulen won bronze in the boys' 55 kg judo category. It is the Mongolian team's first medal at the Dakar Olympics.\n\nMongolia will also compete in the boys' 3x3 basketball tournament, which starts today, November 6. Twelve national teams will compete, and Mongolia is grouped with Argentina and Venezuela.\n\nThe Youth Olympics aim to give young athletes international competition experience and to promote sporting friendship and cultural exchange. The Mongolian team hopes to add to its medal tally in the remaining days of the Games."},
  {id:13, cat:"sport", title:"Энэтхэг Пакистаныг 3:2-оор хожиж, SAFF цомыг ялалтаар эхлүүллээ", titleEn:"India beat Pakistan 3-2 to open SAFF Cup with a win", time:"5 цаг", timeEn:"5 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Championship-Soccer-Stadium-SE-Field-View-2024-08-03.jpg?width=760", text:"Энэтхэгийн шигшээ баг SAFF Championship 2026 тэмцээний нээлтийн тоглолтод Пакистаныг 3:2-оор хожлоо. Тоглолтын эхний хагаст Энэтхэг 3:0-ээр тэргүүлж байсан ч Пакистан сүүлийн мөчид хоёр гоол оруулж, тоглолтыг ширүүн болгожээ.\n\nЭнэтхэгийн довтлогч Сухайл Ахмад Бхат хоёр гоол оруулж, Манглентханг Кипген гурав дахь гоолыг оруулсан байна. Пакистаны баг сүүлийн мөчид хоёр гоол оруулж, ялагдлаас мултрахыг оролдсон ч цаг хугацаа хүрэлцсэнгүй.\n\nSAFF Championship нь Өмнөд Азийн хөлбөмбөгийн аварга шалгаруулах тэмцээн бөгөөд энэ удаагийн тэмцээн Бангладешийн Дака хотод болж байна. Энэтхэг нь тэмцээний өнөөгийн аварга бөгөөд цолоо хамгаалахыг зорьж байна.\n\nХоёр багийн тоглолт нь бүс нутгийн хөлбөмбөгийн хамгийн их хүлээлттэй тоглолтуудын нэг бөгөөд цэнгэлдэхэд олон мянган үзэгч цугларчээ. Энэтхэг дараагийн тоглолтдоо ялалтаа үргэлжлүүлэхийг зорьж байна.", textEn:"India beat Pakistan 3-2 in the opening match of the SAFF Championship 2026. India led 3-0 at half-time, but Pakistan scored twice late on to make the finish tense.\n\nIndia striker Suhail Ahmad Bhat scored twice, and Manglenthang Kipgen added the third goal. Pakistan's two late goals were an attempt to escape defeat, but time ran out.\n\nThe SAFF Championship is South Asia's football championship, and this edition is being held in Dhaka, Bangladesh. India are the defending champions and aim to retain their title.\n\nThe match between the two teams is one of the most eagerly awaited fixtures in regional football, drawing thousands of spectators to the stadium. India will look to continue their winning run in their next match."},
  {id:14, cat:"soyol", title:"«Ромео Жүлиэт» бүжгэн жүжиг өнөөдөр УДБЭТ-ийн тайзнаа толилуулагдана", titleEn:"Romeo and Juliet ballet staged today at the State Opera and Ballet Theatre", time:"6 цаг", timeEn:"6 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Juliet%20And%20Romeo%20(85011845).jpeg?width=760", text:"Улсын дуурь бүжгийн эрдмийн театр, Их эзэн хааны театрын хамтын бүтээл болох Уильям Шекспирийн зохиол, Сергей Прокофьевийн хөгжимтэй «Ромео Жүлиэт» бүжгэн жүжгийг өнөөдөр буюу арваннэгдүгээр сарын 6-нд тайзнаа толилуулна.\n\n«Ромео Жүлиэт» нь дэлхийн сонгодог балетын шилдэг бүтээлүүдийн нэг бөгөөд хоёр дайсаг гэр бүлийн залуусын эмгэнэлт хайрын тухай өгүүлдэг. Прокофьевийн хөгжим, Шекспирийн зохиолын хослол нь балетын урлагийн оргил бүтээлд тооцогддог.\n\nТоглолт нь энэ долоо хоногийн соёлын онцлох үйл явдлын нэг бөгөөд Улаанбаатар хотын үзэгчид сонгодог балетыг эх орондоо үзэх боломжтой болж байна. Улсын дуурь бүжгийн эрдмийн театр нь сонгодог болон орчин үеийн балетын бүтээлүүдийг тогтмол тайзнаа тавьж, үзэгчдэд дэлхийн сонгодог урлагийг хүргэдэг.\n\nЭнэ долоо хоногт мөн Дархан-Уул аймгийн «Darkhan United Arena»-д МУГЖ Л.Болдбаатар «Монголоо дуулна» тоглолтоо толилуулна. Ийнхүү нийслэл болон орон нутагт соёлын арга хэмжээ зэрэг явагдаж байна.", textEn:"The ballet Romeo and Juliet, a joint production of the State Academic Theatre of Opera and Ballet and the Imperial Theatre, with a libretto after William Shakespeare and music by Sergei Prokofiev, will be staged today, November 6.\n\nRomeo and Juliet is one of the finest works of classical ballet in the world, telling the tragic love story of two young people from feuding families. The combination of Prokofiev's music and Shakespeare's story is regarded as a pinnacle of ballet.\n\nThe performance is one of this week's cultural highlights, giving Ulaanbaatar audiences the chance to see a classical ballet at home. The State Academic Theatre of Opera and Ballet regularly stages classical and contemporary ballet, bringing world classics to its audiences.\n\nAlso this week, Merited Artist of Mongolia L. Boldbaatar will present her concert \"Mongoloo Duulna\" at the Darkhan United Arena in Darkhan-Uul province, so cultural events are taking place in the capital and the regions alike."},
  {id:15, cat:"soyol", title:"Их Монгол Улс байгуулагдсаны 820 жилийн ойд зориулсан хүндэтгэлийн хуралдаан болно", titleEn:"Ceremonial session to mark 820 years since founding of the Great Mongol State", time:"6 цаг", timeEn:"6 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Chinggis%20Khan%20Statue.jpg?width=760", text:"Эзэн Богд Чингис хааны мэндэлсний 864 жилийн ой, «Монгол бахархлын өдөр» энэ сарын 10-ны өдөр тохиож байна. Энэ өдрийг тохиолдуулан Монгол Улсын Их Хурлын хүндэтгэлийн хуралдаан арваннэгдүгээр сарын 10-ны Мягмар гарагийн 10.00 цагт болно.\n\nМонгол Улсын Их Хурлын дарга С.Бямбацогт арваннэгдүгээр сарын 3-ны өдөр «Хүндэтгэлийн хуралдаан зарлан хуралдуулах тухай» 431 дүгээр захирамж гаргасан байна. Хуралдаан нь Их Монгол Улс байгуулагдсаны 820 жилийн түүхэн ойд зориулагдсан юм.\n\nХүндэтгэлийн хуралдаанаар Их Эзэн Чингис хааны төрт ёсны өв уламжлалыг дээдлэн мөнхжүүлэх асуудлыг хэлэлцэх бөгөөд Улсын Их Хурлын Төрийн байгуулалтын байнгын хороо холбогдох тогтоолын төслийг дэмжээд байна. Тогтоолын төсөлд Чингис хааны хөргийг архи, тамхинд ашиглахгүй байх санал ч тусгагдсан байна.\n\n«Монгол бахархлын өдөр» нь жил бүр тэмдэглэгддэг бөгөөд Монголын түүх, үндэсний бахархал, өв соёлыг олон нийтэд таниулах зорилготой. Энэ жилийн ой нь 820 жилийн түүхэн ойтой давхцаж байгаагаараа онцлогтой юм.", textEn:"The 864th anniversary of the birth of Chinggis Khaan and Mongolia Pride Day fall on November 10. To mark the occasion, a ceremonial session of the State Great Khural will be held at 10:00 on Tuesday, November 10.\n\nSpeaker of Parliament S. Byambatsogt issued Order No. 431 on November 3, calling the ceremonial session. The session is dedicated to the 820th anniversary of the founding of the Great Mongol State.\n\nThe ceremonial session will discuss honouring and perpetuating the state heritage of Chinggis Khaan, and the State Structure Standing Committee has already backed the related draft resolution. The draft also includes a proposal not to use Chinggis Khaan's portrait on alcohol and tobacco products.\n\nMongolia Pride Day is marked every year to promote Mongolian history, national pride and heritage to the public. This year's observance is special in that it coincides with the 820th anniversary."},
  {id:16, cat:"tech", title:"Хиймэл оюун ухаан хөгжихийн хэрээр хариуцлагын асуудал хурцаар тавигдаж байна", titleEn:"As AI advances, questions of responsibility grow sharper", time:"7 цаг", timeEn:"7 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Is%20artificial%20intelligence%20our%20future.jpg?width=760", text:"Хиймэл оюун ухаан хөгжихийн хэрээр түүний хариуцлагатай хэрэглээ, засаглалын асуудал улам хурцаар тавигдаж байна. 2026 оны Дэлхийн хиймэл оюун ухааны бага хурал болон Хиймэл оюун ухааны дэлхийн засаглалын дээд түвшний уулзалтын үеэр Хятад улс хиймэл оюун ухааны засаглалын талаарх үзэл баримтлалаа танилцуулсан байна.\n\nХятадын танилцуулсан үзэл баримтлалд хүн төвтэй хөгжлийн зарчмыг баримталж, хиймэл оюун ухааныг нийтлэг сайн сайхан, хамтын хөгжил цэцэглэлт, аюулгүй байдлын төлөө хөгжүүлэхийг уриалсан байна.\n\nҮүнтэй холбоотойгоор CGTN-ээс дэлхийн хэмжээнд явуулсан цахим санал асуулгаар оролцогчдын 85.4 хувь нь хиймэл оюун ухааны хурдацтай хөгжил дэлхийн аюулгүй байдал, засаглалд шинэ сорилт учруулж байна гэж үзсэн байна. Мөн оролцогчдын 87.8 хувь нь технологийн саад хориг, «дижитал хана» нь дэлхийн шинжлэх ухаан, технологийн хамтын ажиллагааг хэсэгчлэн бутаргаж болзошгүй гэж үзжээ.\n\nХиймэл оюун ухааныг хариуцлагатай хөгжүүлэх нь зөвхөн технологийн асуудал бус, олон улсын хамтын ажиллагаа, ёс зүй, хууль эрх зүйн зохицуулалтыг шаардсан дэлхий нийтийн сорилт болж байна гэж шинжээчид дүгнэж байна.", textEn:"As artificial intelligence advances, questions about its responsible use and governance are becoming ever sharper. At the 2026 World Artificial Intelligence Conference and the high-level meeting on global AI governance, China presented its concept for AI governance.\n\nThe concept presented by China calls for adhering to the principle of people-centred development and developing artificial intelligence for the common good, shared prosperity and security.\n\nIn a global online survey conducted by CGTN on the subject, 85.4 percent of respondents said the rapid development of AI poses new challenges to global security and governance. Also, 87.8 percent said technological barriers and \"digital walls\" could fragment global scientific and technological cooperation.\n\nExperts conclude that developing AI responsibly is not only a technological issue but a global challenge requiring international cooperation, ethics and legal regulation."},
  {id:17, cat:"tech", title:"Google өрсөлдөгч Anthropic-ийн дата төвийн 19 тэрбум долларын гэрээг дэмжлээ", titleEn:"Google backs rival Anthropic's $19 billion data centre deal", time:"7 цаг", timeEn:"7 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/BalticServers%20data%20center.jpg?width=760", text:"Google компани хиймэл оюун ухааны салбарт өрсөлдөгч Anthropic-ийн төлөө баригдах дата төвийн санхүүжилтийг зээлийн баталгаагаар дэмжих болсон нь технологийн салбарт олны анхаарлыг татаж байна. АНУ-ын дата төвийн компани TeraWulf арваннэгдүгээр сарын 4-нд энэ тухай албан ёсоор мэдэгдэж, АНУ-ын Үнэт цаасны хороонд бүртгүүлжээ.\n\nКентаки мужийн Хоузвилл хотод баригдах Anthropic-ийн дата төвийн гэрээ нь 20 жилийн хугацаанд 19 тэрбум долларын орлого олох төлөвтэй байгаа бөгөөд Google тус гэрээг санхүүгийн хувьд дэмжиж байгаа юм. Хиймэл оюун ухааны загвараар өрсөлдөж буй хоёр компани дэд бүтцийн санхүүжилт дээр хамтран ажиллаж байгаа нь салбарын сонирхолтой дүр төрхийг харуулж байна.\n\nМөн өдөр OpenAI компани хөгжүүлэгчдийн хэрэгсэл бүтээдэг Pierre Computer компанийг худалдаж авахаа албан ёсоор мэдэгдсэн бол чип үйлдвэрлэгч AMD 8.5 тэрбум доллар хүртэлх баталгааны үүрэг хүлээсэн тухайгаа мэдээлжээ.\n\nШинжээчдийн үзэж буйгаар хиймэл оюун ухааны өрсөлдөөн «илүү сайн загвар бүтээх» өрсөлдөөнөөс «дата төвийн хүчин чадал, санхүүжилт, хөгжүүлэлтийн дэд бүтцийг эзэмших» өрсөлдөөн рүү бүрэн шилжиж байна.", textEn:"Google's decision to support, with a credit guarantee, the financing of a data centre being built for its artificial intelligence rival Anthropic has drawn wide attention in the technology sector. US data centre company TeraWulf officially announced the arrangement on November 4 and filed it with the US Securities and Exchange Commission.\n\nThe contract for Anthropic's data centre in Hawesville, Kentucky, is expected to generate about $19 billion in revenue over 20 years, and Google is financially backing it. The fact that two companies competing on AI models are cooperating on infrastructure financing shows an unusual side of the industry.\n\nOn the same day, OpenAI officially announced its acquisition of Pierre Computer, a maker of developer tools, while chipmaker AMD disclosed guarantee obligations of up to $8.5 billion.\n\nAccording to analysts, competition in AI has fully shifted from a race to \"build a better model\" to a race to control \"data centre capacity, financing and development infrastructure\"."},
  {id:18, cat:"oron-nutag", region:"khuvsgul", title:"Хөвсгөл: Ажлын байрны осол нэмэгдэж, хяналтыг сайжруулахыг онцлов", titleEn:"Khuvsgul: workplace accidents rising, calls to strengthen oversight", time:"8 цаг", timeEn:"8 hours", img:"https://commons.wikimedia.org/wiki/Special:FilePath/Lake%20Khovsgol%2C%20northern%20Mongolia%20(31).jpg?width=760", text:"Хөвсгөл аймгийн Хөдөлмөр, нийгмийн түншлэлийн гурван талт хороо, Хөдөлмөрийн аюулгүй байдал, эрүүл ахуйн салбар зөвлөлөөс өндөр эрсдэлтэй салбарын ажилтнуудад зориулсан хөдөлмөрийн аюулгүй байдал, эрүүл ахуйн сургалтыг арваннэгдүгээр сарын 2-нд зохион байгууллаа.\n\nСургалтаар ажилтнуудын хөдөлмөрийн аюулгүй байдал, эрүүл ахуйн мэдлэгийг нэмэгдүүлэх, ажлын байранд учирч болзошгүй эрсдэлийг таньж илрүүлэх, осол, мэргэжлээс шалтгаалах өвчлөлөөс урьдчилан сэргийлэх мэдлэг, дадал эзэмшүүлэхэд анхаарчээ.\n\nЭнэ үеэр аймгийн Засаг даргын Тамгын газрын дарга Г.Гандэлгэр 2025 онд тус аймагт үйлдвэрлэлийн 16 осол бүртгэгдсэн бол энэ онд 20 осол бүртгэгдэж, дөрвөн тохиолдлоор нэмэгдсэн гэж мэдэгдсэн байна. Ослын тоо нэмэгдэж байгаа нь хяналт, урьдчилан сэргийлэх ажлыг сайжруулах шаардлагатайг харуулж байна.\n\nСургалтаар ажлын байрны эрсдэлийг таньж илрүүлэх, галын аюулгүй байдлыг хангах, авто тээвэр болон шатахуун хангамжийн үйл ажиллагаанд мөрдөх аюулгүй ажиллагааны талаар мэргэжлийн байгууллагын төлөөлөл, улсын байцаагчид мэдээлэл, зөвлөгөө өгчээ. Мөн үйлдвэрлэлийн осол, хурц хордлогыг судлан бүртгэх журам, «Эрсдэлгүй Хөвсгөл» гар утасны аппликейшнээр ажлын байранд илэрсэн эрсдэлийг мэдээлэх, шийдвэрлэлтийн явцыг хянах боломжийг танилцуулсан байна.", textEn:"The Tripartite Committee on Labour and Social Partnership and the Occupational Safety and Health Council of Khuvsgul province organised training on occupational safety and health on November 2 for workers in high-risk sectors.\n\nThe training focused on raising workers' knowledge of occupational safety and health, recognising potential workplace risks, and acquiring the knowledge and habits needed to prevent accidents and occupational diseases.\n\nOn the occasion, G. Gandelger, head of the provincial Governor's Office, said 16 industrial accidents were recorded in the province in 2025, while 20 have been recorded this year, an increase of four cases. The rising number shows the need to improve oversight and prevention.\n\nAt the training, representatives of professional bodies and state inspectors gave information and advice on identifying workplace risks, ensuring fire safety, and safe practices in road transport and fuel supply. They also presented the procedure for investigating and registering industrial accidents and acute poisoning, and the \"Er sdelgui Khuvsgul\" (Risk-free Khuvsgul) mobile app, which lets users report workplace risks and track how they are resolved."}
];
function aTitle(a){ return LANG === "en" ? (a.titleEn || a.title) : a.title; }
function aTime(a){ return LANG === "en" ? (a.timeEn || a.time) : a.time; }
function aText(a){ if(a.text) return LANG === "en" ? (a.textEn || a.text) : a.text; return SAMPLE_TEXT[LANG][a.id === 1 ? "long" : "short"]; }
function aRegion(a){ return a.region ? ((REGIONS[LANG] && REGIONS[LANG][a.region]) || a.region) : ""; }

// ===== Ханш · Цаг агаар (өдөр бүр шинэчлэгдэнэ; цаг агаарыг Open-Meteo-гоос шууд татна) =====
const RATES = {date:"2026-11-06", items:[
  {code:"USD", mnt:3600.42, chg:1}, {code:"EUR", mnt:4047.77, chg:1}, {code:"JPY", mnt:22.76, chg:-1},
  {code:"CNY", mnt:539.76, chg:1}, {code:"KRW", mnt:2.69, chg:0}, {code:"RUB", mnt:43.93, chg:-1}, {code:"GBP", mnt:4850.31, chg:-1}
]};
let WEATHER = [
  {city:"Улаанбаатар", cityEn:"Ulaanbaatar", lat:47.9212, lon:106.9186, tz:"Asia/Ulaanbaatar", temp:-13, code:1},
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
  {yt:"8Jas4MdBMNI", title:"Асуудлын мөрөөр.../Сурвалжилга/", titleEn:"Following the issue... /Report/", src:"МҮОНТ", srcEn:"MNB", srcFull:"МҮОНТ (Монголын үндэсний олон нийтийн телевиз)", srcFullEn:"MNB (Mongolian National Broadcaster)"},
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
