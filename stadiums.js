export const LEAGUES = {
  cpbl:    { id:'cpbl',    label:'中華職棒', short:'CPBL', sport:'棒球', color:'#d63a3a', view:[23.7, 121.0], zoom:7 },
  plg:     { id:'plg',     label:'P League+', short:'PLG',  sport:'籃球', color:'#2aa3d9', view:[23.8, 121.0], zoom:7 },
  tpbl:    { id:'tpbl',    label:'TPBL',     short:'TPBL', sport:'籃球', color:'#8a4ec8', view:[23.8, 121.0], zoom:7 },
  kbo:     { id:'kbo',     label:'KBO',      short:'KBO',  sport:'棒球', color:'#1d4f9c', view:[36.2, 127.8], zoom:7 },
  npb:     { id:'npb',     label:'NPB',      short:'NPB',  sport:'棒球', color:'#1a6bb5', view:[36.4, 137.8], zoom:5 },
  bleague: { id:'bleague', label:'B League', short:'B1',   sport:'籃球', color:'#e31c23', view:[36.4, 137.8], zoom:5 },
  mlb:     { id:'mlb',     label:'MLB',      short:'MLB',  sport:'棒球', color:'#041e42', view:[39.5, -98.0], zoom:4 }
};

export const STADIUMS = [
  // ---------- 中華職棒 2026 例行賽球場 ----------
  { id:'cpbl-taipei-dome', name:'臺北大巨蛋', city:'臺北', leagues:['cpbl'], teams:'各隊主場賽事', team:'cpbl', lat:25.0428, lng:121.5619 },
  { id:'cpbl-tianmu', name:'天母棒球場', city:'臺北', leagues:['cpbl'], teams:'味全龍', team:'cpbl-dragons', lat:25.1144, lng:121.5336 },
  { id:'cpbl-xinzhuang', name:'新莊棒球場', city:'新北', leagues:['cpbl'], teams:'富邦悍將', team:'cpbl-guardians', lat:25.0411, lng:121.4478 },
  { id:'cpbl-taoyuan', name:'樂天桃園棒球場', city:'桃園', leagues:['cpbl'], teams:'樂天桃猿', team:'cpbl-monkeys', lat:24.9940, lng:121.2014 },
  { id:'cpbl-intercontinental', name:'臺中洲際棒球場', city:'臺中', leagues:['cpbl'], teams:'中信兄弟', team:'cpbl-brothers', lat:24.1997, lng:120.6849 },
  { id:'cpbl-douliu', name:'斗六棒球場', city:'雲林', leagues:['cpbl'], teams:'味全龍主場賽事', team:'cpbl-dragons', lat:23.7139, lng:120.5433 },
  { id:'cpbl-chiayi', name:'嘉義市立棒球場', city:'嘉義', leagues:['cpbl'], teams:'中信、統一、台鋼主場賽事', team:'cpbl', lat:23.4725, lng:120.4589 },
  { id:'cpbl-tainan-apac', name:'亞太國際棒球訓練中心（主球場）', city:'臺南', leagues:['cpbl'], teams:'統一7-ELEVEn獅', team:'cpbl-lions', lat:23.0628, lng:120.2364 },
  { id:'cpbl-chengcing', name:'澄清湖棒球場', city:'高雄', leagues:['cpbl'], teams:'台鋼雄鷹', team:'cpbl-hawks', lat:22.6539, lng:120.3586 },
  { id:'cpbl-hualien', name:'花蓮縣立德興棒球場', city:'花蓮', leagues:['cpbl'], teams:'味全龍主場賽事', team:'cpbl-dragons', lat:23.9908, lng:121.6283 },
  { id:'cpbl-taitung', name:'臺東縣立棒球場', city:'臺東', leagues:['cpbl'], teams:'統一、台鋼主場賽事', team:'cpbl', lat:22.7558, lng:121.1481 },

  // ---------- P League+ / TPBL（共用場館會同時掛兩個聯盟） ----------
  { id:'tpe-heping', name:'臺北和平籃球館', city:'臺北', leagues:['plg','tpbl'], teams:'臺北富邦勇士、臺北台新戰神', team:'plg-braves', teamByLeague:{ plg:'plg-braves', tpbl:'tpbl-mars' }, lat:25.0235, lng:121.5485 },
  { id:'tyn-arena', name:'桃園巨蛋（市立綜合體育館）', city:'桃園', leagues:['plg','tpbl'], teams:'桃園璞園領航猿、桃園台啤永豐雲豹', team:'plg-pilots', teamByLeague:{ plg:'plg-pilots', tpbl:'tpbl-leopards' }, lat:24.9948, lng:121.3232 },
  { id:'hsc-city-gym', name:'新竹市立體育館', city:'新竹市', leagues:['plg'], teams:'洋基工程', team:'plg-yankey', lat:24.8021, lng:120.9714 },
  { id:'tnn-ncku', name:'國立成功大學中正堂', city:'臺南', leagues:['plg'], teams:'台鋼獵鷹', team:'plg-hawks', lat:22.9966, lng:120.2195 },
  { id:'ntpc-banqiao-gym', name:'板橋體育館', city:'新北', leagues:['plg'], teams:'桃園璞園領航猿（部分主場）', team:'plg-pilots', lat:25.0104, lng:121.4656 },
  { id:'ntpc-xinzhuang-gym', name:'新莊體育館', city:'新北', leagues:['tpbl'], teams:'新北國王、新北中信特攻', team:'tpbl-kings', lat:25.0407, lng:121.4460 },
  { id:'tyn-zhongli', name:'中壢國民運動中心', city:'桃園', leagues:['tpbl'], teams:'桃園台啤永豐雲豹（部分主場）', team:'tpbl-leopards', lat:24.9594, lng:121.2253 },
  { id:'hsc-county-gym', name:'新竹縣體育館', city:'新竹縣', leagues:['tpbl'], teams:'新竹御嵿攻城獅', team:'tpbl-lioneers', lat:24.8388, lng:121.0122 },
  { id:'txg-mini-dome', name:'洲際迷你蛋', city:'臺中', leagues:['tpbl'], teams:'福爾摩沙夢想家', team:'tpbl-dreamers', lat:24.2004, lng:120.6857 },
  { id:'khh-arena', name:'高雄巨蛋', city:'高雄', leagues:['tpbl'], teams:'高雄全家海神', team:'tpbl-aquas', lat:22.6695, lng:120.3021 },

  // ---------- KBO ----------
  { id:'kbo-jamsil', name:'蠶室棒球場', city:'首爾', leagues:['kbo'], teams:'Doosan Bears、LG Twins', team:'kbo-doosan', lat:37.5122, lng:127.0719 },
  { id:'kbo-gocheok', name:'高尺天空巨蛋', city:'首爾', leagues:['kbo'], teams:'Kiwoom Heroes', team:'kbo-kiwoom', lat:37.4982, lng:126.8671 },
  { id:'kbo-incheon', name:'仁川 SSG 登陸者球場', city:'仁川', leagues:['kbo'], teams:'SSG Landers', team:'kbo-ssg', lat:37.4370, lng:126.6933 },
  { id:'kbo-suwon', name:'水原 KT Wiz Park', city:'水原', leagues:['kbo'], teams:'KT Wiz', team:'kbo-kt', lat:37.2998, lng:127.0096 },
  { id:'kbo-daejeon', name:'大田韓華生命球場', city:'大田', leagues:['kbo'], teams:'Hanwha Eagles', team:'kbo-hanwha', lat:36.3171, lng:127.4291 },
  { id:'kbo-daegu', name:'大邱三星獅球場', city:'大邱', leagues:['kbo'], teams:'Samsung Lions', team:'kbo-samsung', lat:35.8411, lng:128.6817 },
  { id:'kbo-changwon', name:'昌原 NC Park', city:'昌原', leagues:['kbo'], teams:'NC Dinos', team:'kbo-nc', lat:35.2226, lng:128.5825 },
  { id:'kbo-sajik', name:'社稷棒球場', city:'釜山', leagues:['kbo'], teams:'Lotte Giants', team:'kbo-lotte', lat:35.1941, lng:129.0616 },
  { id:'kbo-gwangju', name:'光州起亞冠軍球場', city:'光州', leagues:['kbo'], teams:'Kia Tigers', team:'kbo-kia', lat:35.1682, lng:126.8891 },

  // ---------- NPB ----------
  { id:'npb-tokyo-dome', name:'東京巨蛋', city:'東京', leagues:['npb'], teams:'讀賣巨人', team:'npb-giants', lat:35.7056, lng:139.7519 },
  { id:'npb-jingu', name:'明治神宮球場', city:'東京', leagues:['npb'], teams:'東京養樂多燕子', team:'npb-swallows', lat:35.6745, lng:139.7172 },
  { id:'npb-yokohama', name:'橫濱球場', city:'橫濱', leagues:['npb'], teams:'橫濱 DeNA 灣星', team:'npb-baystars', lat:35.4433, lng:139.6401 },
  { id:'npb-nagoya-dome', name:'Vantelin 巨蛋名古屋', city:'名古屋', leagues:['npb'], teams:'中日龍', team:'npb-dragons', lat:35.1861, lng:136.9475 },
  { id:'npb-koshien', name:'阪神甲子園球場', city:'西宮', leagues:['npb'], teams:'阪神虎', team:'npb-tigers', lat:34.7213, lng:135.3616 },
  { id:'npb-mazda', name:'馬自達球場', city:'廣島', leagues:['npb'], teams:'廣島東洋鯉魚', team:'npb-carp', lat:34.3916, lng:132.4844 },
  { id:'npb-escon', name:'Es Con Field 北海道', city:'北廣島', leagues:['npb'], teams:'北海道日本火腿鬥士', team:'npb-fighters', lat:42.9894, lng:141.4506 },
  { id:'npb-miyagi', name:'樂天手機公園宮城', city:'仙台', leagues:['npb'], teams:'東北樂天金鷲', team:'npb-eagles', lat:38.2566, lng:140.9026 },
  { id:'npb-belluna', name:'Belluna Dome', city:'所澤', leagues:['npb'], teams:'埼玉西武獅', team:'npb-lions', lat:35.7685, lng:139.4205 },
  { id:'npb-zozo', name:'ZOZO 海洋球場', city:'千葉', leagues:['npb'], teams:'千葉羅德海洋', team:'npb-marines', lat:35.6453, lng:140.0311 },
  { id:'npb-paypay', name:'PayPay 巨蛋福岡', city:'福岡', leagues:['npb'], teams:'福岡軟銀鷹', team:'npb-hawks', lat:33.5953, lng:130.3621 },
  { id:'npb-kyocera', name:'京瓷巨蛋大阪', city:'大阪', leagues:['npb'], teams:'歐力士猛牛', team:'npb-buffaloes', lat:34.6694, lng:135.4761 },

  // ---------- B.League B1 主場 ----------
  { id:'b1-kitayell', name:'北海きたえーる', city:'札幌', leagues:['bleague'], teams:'北海道', team:'b1-hokkaido', lat:43.0445, lng:141.3764 },
  { id:'b1-xebio-sendai', name:'Xebio Arena 仙台', city:'仙台', leagues:['bleague'], teams:'仙台 89ERS', team:'b1-sendai', lat:38.2300, lng:140.8828 },
  { id:'b1-cna-akita', name:'CNA Arena 秋田', city:'秋田', leagues:['bleague'], teams:'秋田北方喜悅', team:'b1-akita', lat:39.7189, lng:140.1025 },
  { id:'b1-mito', name:'Adastria 水戶 Arena', city:'水戶', leagues:['bleague'], teams:'茨城機器人', team:'b1-ibaraki', lat:36.3806, lng:140.4656 },
  { id:'b1-brex-utsunomiya', name:'Brex Arena 宇都宮', city:'宇都宮', leagues:['bleague'], teams:'宇都宮皇者', team:'b1-utsunomiya', lat:36.5583, lng:139.8994 },
  { id:'b1-ota', name:'OpenHouse Arena 太田', city:'太田', leagues:['bleague'], teams:'群馬 Crane Thunders', team:'b1-gunma', lat:36.2914, lng:139.3753 },
  { id:'b1-koshigaya', name:'越谷市立綜合體育館', city:'越谷', leagues:['bleague'], teams:'越谷 Alphas', team:'b1-koshigaya', lat:35.8911, lng:139.7906 },
  { id:'b1-chiba-port', name:'千葉 Port Arena', city:'千葉', leagues:['bleague'], teams:'Altiri 千葉', team:'b1-altiri', lat:35.6097, lng:140.1075 },
  { id:'b1-lala-arena', name:'LaLa arena TOKYO-BAY', city:'船橋', leagues:['bleague'], teams:'千葉 Jets', team:'b1-jets', lat:35.6892, lng:139.9806 },
  { id:'b1-toyota-arena', name:'TOYOTA ARENA TOKYO', city:'東京', leagues:['bleague'], teams:'Alvark 東京', team:'b1-alvark', lat:35.6520, lng:139.7935 },
  { id:'b1-aogaku', name:'青山學院紀念館', city:'東京', leagues:['bleague'], teams:'Sunrockers 澀谷', team:'b1-sunrockers', lat:35.6612, lng:139.7105 },
  { id:'b1-todoroki', name:'東急 Dresser 等々力 Arena', city:'川崎', leagues:['bleague'], teams:'川崎 Brave Thunders', team:'b1-kawasaki', lat:35.5869, lng:139.6511 },
  { id:'b1-yokohama-pool', name:'橫濱國際游泳池', city:'橫濱', leagues:['bleague'], teams:'橫濱 B-Corsairs', team:'b1-yokohama', lat:35.3394, lng:139.6344 },
  { id:'b1-toyama', name:'富山縣綜合體育中心', city:'富山', leagues:['bleague'], teams:'富山 Grouses', team:'b1-toyama', lat:36.6958, lng:137.2469 },
  { id:'b1-toyohashi', name:'豐橋市綜合體育館', city:'豐橋', leagues:['bleague'], teams:'三遠 NeoPhoenix', team:'b1-sanen', lat:34.7417, lng:137.3975 },
  { id:'b1-kariya', name:'Wing Arena 刈谷', city:'刈谷', leagues:['bleague'], teams:'SeaHorses 三河', team:'b1-mikawa', lat:34.9892, lng:137.0028 },
  { id:'b1-biwajima', name:'枇杷島運動中心', city:'名古屋', leagues:['bleague'], teams:'Fighting Eagles 名古屋', team:'b1-fe-nagoya', lat:35.1989, lng:136.8692 },
  { id:'b1-ig-arena', name:'IG Arena', city:'名古屋', leagues:['bleague'], teams:'名古屋 Diamond Dolphins', team:'b1-nagoya-d', lat:35.1900, lng:136.9023 },
  { id:'b1-shiga', name:'滋賀 Daihatsu Arena', city:'大津', leagues:['bleague'], teams:'滋賀 Lakes', team:'b1-shiga', lat:35.0172, lng:135.8617 },
  { id:'b1-kyoto', name:'京都市體育館', city:'京都', leagues:['bleague'], teams:'京都 Hannaryz', team:'b1-kyoto', lat:34.9933, lng:135.7153 },
  { id:'b1-maishima', name:'Ohkini Arena 舞洲', city:'大阪', leagues:['bleague'], teams:'大阪 Evessa', team:'b1-osaka', lat:34.6681, lng:135.4119 },
  { id:'b1-kami-arena', name:'Kami Arena', city:'出雲', leagues:['bleague'], teams:'島根 Susanoo Magic', team:'b1-shimane', lat:35.3840, lng:132.7065 },
  { id:'b1-sunplaza', name:'廣島 Sun Plaza Hall', city:'廣島', leagues:['bleague'], teams:'廣島 Dragonflies', team:'b1-hiroshima', lat:34.3992, lng:132.4525 },
  { id:'b1-saga', name:'SAGA Arena', city:'佐賀', leagues:['bleague'], teams:'佐賀 Ballooners', team:'b1-saga', lat:33.2761, lng:130.2964 },
  { id:'b1-happiness', name:'Happiness Arena', city:'長崎', leagues:['bleague'], teams:'長崎 Velca', team:'b1-nagasaki', lat:32.7508, lng:129.8686 },
  { id:'b1-okinawa', name:'沖繩 Suntory Arena', city:'沖繩市', leagues:['bleague'], teams:'琉球 Golden Kings', team:'b1-ryukyu', lat:26.3344, lng:127.8053 },

  // ---------- MLB ----------
  { id:'mlb-yankee', name:'Yankee Stadium', city:'紐約', leagues:['mlb'], teams:'New York Yankees', team:'mlb-nyy', lat:40.8296, lng:-73.9262 },
  { id:'mlb-fenway', name:'Fenway Park', city:'波士頓', leagues:['mlb'], teams:'Boston Red Sox', team:'mlb-bos', lat:42.3467, lng:-71.0972 },
  { id:'mlb-rogers', name:'Rogers Centre', city:'多倫多', leagues:['mlb'], teams:'Toronto Blue Jays', team:'mlb-tor', lat:43.6414, lng:-79.3894 },
  { id:'mlb-camden', name:'Oriole Park at Camden Yards', city:'巴爾的摩', leagues:['mlb'], teams:'Baltimore Orioles', team:'mlb-bal', lat:39.2839, lng:-76.6217 },
  { id:'mlb-tropicana', name:'Tropicana Field', city:'聖彼得堡', leagues:['mlb'], teams:'Tampa Bay Rays', team:'mlb-tb', lat:27.7682, lng:-82.6534 },
  { id:'mlb-citi', name:'Citi Field', city:'紐約', leagues:['mlb'], teams:'New York Mets', team:'mlb-nym', lat:40.7571, lng:-73.8458 },
  { id:'mlb-truist', name:'Truist Park', city:'亞特蘭大', leagues:['mlb'], teams:'Atlanta Braves', team:'mlb-atl', lat:33.8907, lng:-84.4677 },
  { id:'mlb-loanDepot', name:'loanDepot park', city:'邁阿密', leagues:['mlb'], teams:'Miami Marlins', team:'mlb-mia', lat:25.7781, lng:-80.2197 },
  { id:'mlb-nationals', name:'Nationals Park', city:'華盛頓', leagues:['mlb'], teams:'Washington Nationals', team:'mlb-wsh', lat:38.8730, lng:-77.0074 },
  { id:'mlb-citizens', name:'Citizens Bank Park', city:'費城', leagues:['mlb'], teams:'Philadelphia Phillies', team:'mlb-phi', lat:39.9060, lng:-75.1665 },
  { id:'mlb-wrigley', name:'Wrigley Field', city:'芝加哥', leagues:['mlb'], teams:'Chicago Cubs', team:'mlb-chc', lat:41.9484, lng:-87.6553 },
  { id:'mlb-rate', name:'Rate Field', city:'芝加哥', leagues:['mlb'], teams:'Chicago White Sox', team:'mlb-cws', lat:41.8299, lng:-87.6338 },
  { id:'mlb-comerica', name:'Comerica Park', city:'底特律', leagues:['mlb'], teams:'Detroit Tigers', team:'mlb-det', lat:42.3392, lng:-83.0485 },
  { id:'mlb-progressive', name:'Progressive Field', city:'克里夫蘭', leagues:['mlb'], teams:'Cleveland Guardians', team:'mlb-cle', lat:41.4962, lng:-81.6852 },
  { id:'mlb-target', name:'Target Field', city:'明尼亞波利斯', leagues:['mlb'], teams:'Minnesota Twins', team:'mlb-min', lat:44.9817, lng:-93.2778 },
  { id:'mlb-amfam', name:'American Family Field', city:'密爾瓦基', leagues:['mlb'], teams:'Milwaukee Brewers', team:'mlb-mil', lat:43.0280, lng:-87.9712 },
  { id:'mlb-busch', name:'Busch Stadium', city:'聖路易', leagues:['mlb'], teams:'St. Louis Cardinals', team:'mlb-stl', lat:38.6226, lng:-90.1928 },
  { id:'mlb-gabp', name:'Great American Ball Park', city:'辛辛那提', leagues:['mlb'], teams:'Cincinnati Reds', team:'mlb-cin', lat:39.0975, lng:-84.5066 },
  { id:'mlb-pnc', name:'PNC Park', city:'匹茲堡', leagues:['mlb'], teams:'Pittsburgh Pirates', team:'mlb-pit', lat:40.4469, lng:-80.0057 },
  { id:'mlb-coors', name:'Coors Field', city:'丹佛', leagues:['mlb'], teams:'Colorado Rockies', team:'mlb-col', lat:39.7559, lng:-104.9942 },
  { id:'mlb-chase', name:'Chase Field', city:'鳳凰城', leagues:['mlb'], teams:'Arizona Diamondbacks', team:'mlb-ari', lat:33.4453, lng:-112.0667 },
  { id:'mlb-petco', name:'Petco Park', city:'聖地牙哥', leagues:['mlb'], teams:'San Diego Padres', team:'mlb-sd', lat:32.7076, lng:-117.1570 },
  { id:'mlb-dodger', name:'Dodger Stadium', city:'洛杉磯', leagues:['mlb'], teams:'Los Angeles Dodgers', team:'mlb-lad', lat:34.0739, lng:-118.2400 },
  { id:'mlb-angel', name:'Angel Stadium', city:'安那罕', leagues:['mlb'], teams:'Los Angeles Angels', team:'mlb-laa', lat:33.8003, lng:-117.8827 },
  { id:'mlb-oracle', name:'Oracle Park', city:'舊金山', leagues:['mlb'], teams:'San Francisco Giants', team:'mlb-sf', lat:37.7786, lng:-122.3893 },
  { id:'mlb-tmobile', name:'T-Mobile Park', city:'西雅圖', leagues:['mlb'], teams:'Seattle Mariners', team:'mlb-sea', lat:47.5914, lng:-122.3325 },
  { id:'mlb-daikin', name:'Daikin Park', city:'休士頓', leagues:['mlb'], teams:'Houston Astros', team:'mlb-hou', lat:29.7573, lng:-95.3555 },
  { id:'mlb-globe', name:'Globe Life Field', city:'阿靈頓', leagues:['mlb'], teams:'Texas Rangers', team:'mlb-tex', lat:32.7474, lng:-97.0816 },
  { id:'mlb-kauffman', name:'Kauffman Stadium', city:'堪薩斯城', leagues:['mlb'], teams:'Kansas City Royals', team:'mlb-kc', lat:39.0517, lng:-94.4803 },
  { id:'mlb-sutter', name:'Sutter Health Park', city:'西沙加緬度', leagues:['mlb'], teams:'Athletics', team:'mlb-ath', lat:38.5804, lng:-121.5139 }
];

export function stadiumById(id){
  return STADIUMS.find(s => s.id === id);
}

export function stadiumsForLeague(leagueId){
  if(!leagueId || leagueId === 'all') return STADIUMS;
  return STADIUMS.filter(s => s.leagues.includes(leagueId));
}

export function leagueLabel(id){
  return LEAGUES[id]?.label || id;
}

export function primaryLeague(stadium){
  return stadium.leagues[0];
}
