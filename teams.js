const ESPN = (abbr) => `https://a.espncdn.com/i/teamlogos/mlb/500/${abbr}.png`;
const CPBL = (slug) => `https://stats.cpbl.com.tw/logo/team-logo/${slug}-logo.png`;
const PLG = (file) => `https://d36fypkbmmogz6.cloudfront.net/upload/p_team/${file}`;
const TPBL = (file) => `https://assets.tpbl.basketball/frontend/_nuxt/${file}`;
const KBO = (year, code) => `https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/KBOHome/resources/images/emblem/regular/${year}/${code}.png`;
const NPB = (code) => `https://p.npb.jp/img/common/logo/2026/logo_${code}_m.png`;
const BLEAGUE = (year, code) => `https://bleague.bl.kuroco-img.app/files/user/common/img/logo/${year}/m/${code}.png`;

export const TEAMS = {
  cpbl:          { name:'主場球隊', abbr:'中職', color:'#c8102e', logo:'https://stats.cpbl.com.tw/logo/cpbl_logo.webp' },
  'cpbl-dragons':   { name:'味全龍', abbr:'龍', color:'#c8102e', logo: CPBL('WEICHUAN') },
  'cpbl-guardians': { name:'富邦悍將', abbr:'悍', color:'#0b2e5b', logo: CPBL('FUBON') },
  'cpbl-monkeys':   { name:'樂天桃猿', abbr:'猿', color:'#6f1d49', logo: CPBL('RAKUTEN') },
  'cpbl-brothers':  { name:'中信兄弟', abbr:'兄', color:'#e0b333', logo: CPBL('BROTHERS') },
  'cpbl-lions':     { name:'統一7-ELEVEn獅', abbr:'獅', color:'#e87722', logo: CPBL('UNI_LIONS') },
  'cpbl-hawks':     { name:'台鋼雄鷹', abbr:'鷹', color:'#173f63', logo: CPBL('TSG_HAWKS') },

  'plg-braves':  { name:'臺北富邦勇士', abbr:'勇', color:'#1a3c8b', logo: PLG('logo_1_1730454157.png') },
  'plg-pilots':  { name:'桃園璞園領航猿', abbr:'猿', color:'#2e6b3a', logo: PLG('logo_2_1730454167.png') },
  'plg-yankey':  { name:'洋基工程', abbr:'洋', color:'#1c3f8a', logo: PLG('logo_8_1760078581.png') },
  'plg-hawks':   { name:'台鋼獵鷹', abbr:'鷹', color:'#123a5c', logo: PLG('logo_7_1760078282.png') },

  'tpbl-kings':    { name:'新北國王', abbr:'王', color:'#1d4e9a', logo: TPBL('kings.DsunMN-K.webp') },
  'tpbl-dea':      { name:'新北中信特攻', abbr:'攻', color:'#c5a035', logo: TPBL('dea.BEfNfG39.webp') },
  'tpbl-mars':     { name:'臺北台新戰神', abbr:'戰', color:'#7a1f2b', logo: TPBL('mars.BbDWfkG6.webp') },
  'tpbl-leopards': { name:'桃園台啤永豐雲豹', abbr:'豹', color:'#2a2a2a', logo: TPBL('leopards.BGzlSG8M.webp') },
  'tpbl-lioneers': { name:'新竹御嵿攻城獅', abbr:'獅', color:'#c45c12', logo: TPBL('lioneers.DTfkuEJZ.webp') },
  'tpbl-dreamers': { name:'福爾摩沙夢想家', abbr:'夢', color:'#1f6f4a', logo: TPBL('dreamers.8uP5AliT.webp') },
  'tpbl-aquas':    { name:'高雄全家海神', abbr:'海', color:'#0b6e99', logo: TPBL('aquas.CB-Rq9NB.webp') },

  'kbo-doosan':  { name:'Doosan Bears', abbr:'OB', color:'#131230', logo: KBO(2026, 'OB') },
  'kbo-lg':      { name:'LG Twins', abbr:'LG', color:'#c30452', logo: KBO(2022, 'LG') },
  'kbo-kiwoom':  { name:'Kiwoom Heroes', abbr:'키', color:'#570514', logo: KBO(2022, 'WO') },
  'kbo-ssg':     { name:'SSG Landers', abbr:'SSG', color:'#ce0e2d', logo: KBO(2026, 'SK') },
  'kbo-kt':      { name:'KT Wiz', abbr:'KT', color:'#000000', logo: KBO(2022, 'KT') },
  'kbo-hanwha':  { name:'Hanwha Eagles', abbr:'한', color:'#f37321', logo: KBO(2026, 'HH') },
  'kbo-samsung': { name:'Samsung Lions', abbr:'삼', color:'#074ca1', logo: KBO(2022, 'SS') },
  'kbo-nc':      { name:'NC Dinos', abbr:'NC', color:'#315288', logo: KBO(2022, 'NC') },
  'kbo-lotte':   { name:'Lotte Giants', abbr:'롯', color:'#041e42', logo: KBO(2022, 'LT') },
  'kbo-kia':     { name:'Kia Tigers', abbr:'KIA', color:'#ea0029', logo: KBO(2022, 'HT') },

  'npb-giants':    { name:'讀賣巨人', abbr:'巨', color:'#f8771e', logo: NPB('g') },
  'npb-swallows':  { name:'東京養樂多燕子', abbr:'燕', color:'#00a040', logo: NPB('s') },
  'npb-baystars':  { name:'橫濱 DeNA 灣星', abbr:'De', color:'#00a0e9', logo: NPB('db') },
  'npb-dragons':   { name:'中日龍', abbr:'龍', color:'#004ea2', logo: NPB('d') },
  'npb-tigers':    { name:'阪神虎', abbr:'虎', color:'#fde101', logo: NPB('t') },
  'npb-carp':      { name:'廣島東洋鯉魚', abbr:'鯉', color:'#e50012', logo: NPB('c') },
  'npb-fighters':  { name:'北海道日本火腿鬥士', abbr:'日', color:'#0067b2', logo: NPB('f') },
  'npb-eagles':    { name:'東北樂天金鷲', abbr:'樂', color:'#7c0048', logo: NPB('e') },
  'npb-lions':     { name:'埼玉西武獅', abbr:'西', color:'#071f4a', logo: NPB('l') },
  'npb-marines':   { name:'千葉羅德海洋', abbr:'羅', color:'#231815', logo: NPB('m') },
  'npb-hawks':     { name:'福岡軟銀鷹', abbr:'鷹', color:'#ffc520', logo: NPB('h') },
  'npb-buffaloes': { name:'歐力士猛牛', abbr:'牛', color:'#b08d3c', logo: NPB('b') },

  'b1-hokkaido':  { name:'北海道', abbr:'北', color:'#e60012', logo: BLEAGUE(2026, 'lh') },
  'b1-sendai':    { name:'仙台 89ERS', abbr:'仙', color:'#f08a00', logo: BLEAGUE(2026, 'se') },
  'b1-akita':     { name:'秋田北方喜悅', abbr:'秋', color:'#cf0a2c', logo: BLEAGUE(2026, 'an') },
  'b1-ibaraki':   { name:'茨城機器人', abbr:'茨', color:'#e60012', logo: BLEAGUE(2026, 'ir') },
  'b1-utsunomiya':{ name:'宇都宮皇者', abbr:'宇', color:'#c8102e', logo: BLEAGUE(2026, 'ub') },
  'b1-gunma':     { name:'群馬 Crane Thunders', abbr:'群', color:'#f6c100', logo: BLEAGUE(2026, 'gc') },
  'b1-koshigaya': { name:'越谷 Alphas', abbr:'越', color:'#1d4e9a', logo: BLEAGUE(2025, 'ka') },
  'b1-altiri':    { name:'Altiri 千葉', abbr:'A千', color:'#6b2d8a', logo: BLEAGUE(2026, 'ac') },
  'b1-jets':      { name:'千葉 Jets', abbr:'千', color:'#1a1a1a', logo: BLEAGUE(2026, 'cj') },
  'b1-alvark':    { name:'Alvark 東京', abbr:'東', color:'#c8102e', logo: BLEAGUE(2026, 'at') },
  'b1-sunrockers':{ name:'Sunrockers 澀谷', abbr:'澀', color:'#e87722', logo: BLEAGUE(2026, 'sr') },
  'b1-kawasaki':  { name:'川崎 Brave Thunders', abbr:'川', color:'#1c3f8a', logo: BLEAGUE(2026, 'kb') },
  'b1-yokohama':  { name:'橫濱 B-Corsairs', abbr:'橫', color:'#c41e3a', logo: BLEAGUE(2026, 'yb') },
  'b1-toyama':    { name:'富山 Grouses', abbr:'富', color:'#1f4e3a', logo: BLEAGUE(2026, 'tg') },
  'b1-sanen':     { name:'三遠 NeoPhoenix', abbr:'三', color:'#e31c23', logo: BLEAGUE(2026, 'sn') },
  'b1-mikawa':    { name:'SeaHorses 三河', abbr:'河', color:'#0033a0', logo: BLEAGUE(2026, 'sm') },
  'b1-fe-nagoya': { name:'Fighting Eagles 名古屋', abbr:'FE', color:'#1a1a1a', logo: BLEAGUE(2025, 'fe') },
  'b1-nagoya-d':  { name:'名古屋 Diamond Dolphins', abbr:'名', color:'#00a0e9', logo: BLEAGUE(2026, 'dd') },
  'b1-shiga':     { name:'滋賀 Lakes', abbr:'滋', color:'#0077c8', logo: BLEAGUE(2026, 'ls') },
  'b1-kyoto':     { name:'京都 Hannaryz', abbr:'京', color:'#6b2d8a', logo: BLEAGUE(2026, 'kh') },
  'b1-osaka':     { name:'大阪 Evessa', abbr:'阪', color:'#e60012', logo: BLEAGUE(2026, 'oe') },
  'b1-shimane':   { name:'島根 Susanoo Magic', abbr:'島', color:'#1d4e9a', logo: BLEAGUE(2026, 'ss') },
  'b1-hiroshima': { name:'廣島 Dragonflies', abbr:'廣', color:'#e31c23', logo: BLEAGUE(2026, 'hd') },
  'b1-saga':      { name:'佐賀 Ballooners', abbr:'佐', color:'#e87722', logo: BLEAGUE(2026, 'sg') },
  'b1-nagasaki':  { name:'長崎 Velca', abbr:'長', color:'#00a0e9', logo: BLEAGUE(2026, 'nv') },
  'b1-ryukyu':    { name:'琉球 Golden Kings', abbr:'琉', color:'#c5a035', logo: BLEAGUE(2026, 'rg') },

  'mlb-nyy': { name:'New York Yankees', abbr:'NYY', color:'#132448', logo: ESPN('nyy') },
  'mlb-bos': { name:'Boston Red Sox', abbr:'BOS', color:'#bd3039', logo: ESPN('bos') },
  'mlb-tor': { name:'Toronto Blue Jays', abbr:'TOR', color:'#134a8e', logo: ESPN('tor') },
  'mlb-bal': { name:'Baltimore Orioles', abbr:'BAL', color:'#df4601', logo: ESPN('bal') },
  'mlb-tb':  { name:'Tampa Bay Rays', abbr:'TB', color:'#092c5c', logo: ESPN('tb') },
  'mlb-nym': { name:'New York Mets', abbr:'NYM', color:'#002d72', logo: ESPN('nym') },
  'mlb-atl': { name:'Atlanta Braves', abbr:'ATL', color:'#ce1141', logo: ESPN('atl') },
  'mlb-mia': { name:'Miami Marlins', abbr:'MIA', color:'#00a3e0', logo: ESPN('mia') },
  'mlb-wsh': { name:'Washington Nationals', abbr:'WSH', color:'#ab0003', logo: ESPN('wsh') },
  'mlb-phi': { name:'Philadelphia Phillies', abbr:'PHI', color:'#e81828', logo: ESPN('phi') },
  'mlb-chc': { name:'Chicago Cubs', abbr:'CHC', color:'#0e3386', logo: ESPN('chc') },
  'mlb-cws': { name:'Chicago White Sox', abbr:'CWS', color:'#27251f', logo: ESPN('chw') },
  'mlb-det': { name:'Detroit Tigers', abbr:'DET', color:'#0c2340', logo: ESPN('det') },
  'mlb-cle': { name:'Cleveland Guardians', abbr:'CLE', color:'#00385d', logo: ESPN('cle') },
  'mlb-min': { name:'Minnesota Twins', abbr:'MIN', color:'#002b5c', logo: ESPN('min') },
  'mlb-mil': { name:'Milwaukee Brewers', abbr:'MIL', color:'#12284b', logo: ESPN('mil') },
  'mlb-stl': { name:'St. Louis Cardinals', abbr:'STL', color:'#c41e3a', logo: ESPN('stl') },
  'mlb-cin': { name:'Cincinnati Reds', abbr:'CIN', color:'#c6011f', logo: ESPN('cin') },
  'mlb-pit': { name:'Pittsburgh Pirates', abbr:'PIT', color:'#27251f', logo: ESPN('pit') },
  'mlb-col': { name:'Colorado Rockies', abbr:'COL', color:'#33006f', logo: ESPN('col') },
  'mlb-ari': { name:'Arizona Diamondbacks', abbr:'AZ', color:'#a71930', logo: ESPN('ari') },
  'mlb-sd':  { name:'San Diego Padres', abbr:'SD', color:'#2f241d', logo: ESPN('sd') },
  'mlb-lad': { name:'Los Angeles Dodgers', abbr:'LAD', color:'#005a9c', logo: ESPN('lad') },
  'mlb-laa': { name:'Los Angeles Angels', abbr:'LAA', color:'#ba0021', logo: ESPN('laa') },
  'mlb-sf':  { name:'San Francisco Giants', abbr:'SF', color:'#fd5a1e', logo: ESPN('sf') },
  'mlb-sea': { name:'Seattle Mariners', abbr:'SEA', color:'#0c2c56', logo: ESPN('sea') },
  'mlb-hou': { name:'Houston Astros', abbr:'HOU', color:'#002d62', logo: ESPN('hou') },
  'mlb-tex': { name:'Texas Rangers', abbr:'TEX', color:'#003278', logo: ESPN('tex') },
  'mlb-kc':  { name:'Kansas City Royals', abbr:'KC', color:'#004687', logo: ESPN('kc') },
  'mlb-ath': { name:'Athletics', abbr:'ATH', color:'#003831', logo: ESPN('oak') }
};

function escapeXml(str){
  return String(str)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;');
}

export function badgeDataUri(team){
  const color = team?.color || '#5d7c6d';
  const abbr = escapeXml(team?.abbr || '?');
  const size = abbr.length > 2 ? 15 : 20;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <circle cx="32" cy="32" r="31" fill="#f7f4ec"/>
    <circle cx="32" cy="32" r="27" fill="${color}"/>
    <text x="32" y="39" text-anchor="middle" font-size="${size}" font-weight="700"
      fill="#fff" font-family="Arial, Noto Sans TC, sans-serif">${abbr}</text>
  </svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

export function getTeam(id){
  return TEAMS[id] || null;
}

export function stadiumTeamId(stad, leagueId){
  if(leagueId && leagueId !== 'all' && stad.teamByLeague && stad.teamByLeague[leagueId]){
    return stad.teamByLeague[leagueId];
  }
  return stad.team;
}

export function stadiumTeam(stad, leagueId){
  return getTeam(stadiumTeamId(stad, leagueId));
}

export function teamLogoSrc(team){
  if(!team) return badgeDataUri({ abbr:'?', color:'#5d7c6d' });
  return team.logo || badgeDataUri(team);
}

export function stadiumHomeName(stad, leagueId){
  const t = stadiumTeam(stad, leagueId);
  return t?.name || stad.teams || '主場球隊';
}
