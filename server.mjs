import { createServer } from 'node:http';
import querystring from 'node:querystring';
import url from 'node:url';

async function getPlayer(playerName) {
  const response = await fetch(`https://secure.runescape.com/m=hiscore_oldschool/index_lite.json?player=${playerName}`);
  if(response.ok){
  const data = await response.json();
  console.log(data);
  return data
  }
  let error = new Error();
  error = `${playerName} not found`
  throw(error);
}

const port = 8080;

const server = createServer(async (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Access-Control-Allow-Origin', '*')
    if (req.method === 'GET' && req.url.includes('/api/player')) {
      try{
    let queryString = url.parse(req.url).query;
    let parsedQuery = querystring.parse(queryString);
    let playername = parsedQuery.name
    let osrsData = await getPlayer(playername);
    res.statusCode = 200
    res.end(JSON.stringify({
    "Name": osrsData.name,
    "TotalLevel": osrsData.skills[0].level,
    "Attack": osrsData.skills[1].level,
    "Defence": osrsData.skills[2].level,
    "Strength": osrsData.skills[3].level,
    "Hitpoints": osrsData.skills[4].level,
    "Ranged": osrsData.skills[5].level,
    "Prayer": osrsData.skills[6].level,
    "Magic": osrsData.skills[7].level,
    "Cooking": osrsData.skills[8].level,
    "Woodcutting": osrsData.skills[9].level,
    "Fletching": osrsData.skills[10].level,
    "Fishing": osrsData.skills[11].level,
    "Firemaking": osrsData.skills[12].level,
    "Crafting": osrsData.skills[13].level,
    "Smithing": osrsData.skills[14].level,
    "Mining": osrsData.skills[15].level,
    "Herblore": osrsData.skills[16].level,
    "Agility": osrsData.skills[17].level,
    "Thieving": osrsData.skills[18].level,
    "Slayer": osrsData.skills[19].level,
    "Farming": osrsData.skills[20].level,
    "Runecraft": osrsData.skills[21].level,
    "Hunter": osrsData.skills[22].level,
    "Construction": osrsData.skills[23].level,
    "Sailing": osrsData.skills[24].level,
    "Grid Points": osrsData.activities[0].score,
    "League Points": osrsData.activities[1].score,
    "Deadman Points": osrsData.activities[2].score,
    "Bounty Hunter - Hunter": osrsData.activities[3].score,
    "Bounty Hunter - Rogue": osrsData.activities[4].score,
    "Bounty Hunter (Legacy) - Hunter": osrsData.activities[5].score,
    "Bounty Hunter (Legacy) - Rogue": osrsData.activities[6].score,
    "Clue Scrolls (all)": osrsData.activities[7].score,
    "Clue Scrolls (beginner)": osrsData.activities[8].score,
    "Clue Scrolls (easy)": osrsData.activities[9].score,
    "Clue Scrolls (medium)": osrsData.activities[10].score,
    "Clue Scrolls (hard)": osrsData.activities[11].score,
    "Clue Scrolls (elite)": osrsData.activities[12].score,
    "Clue Scrolls (master)": osrsData.activities[13].score,
    "LMS - Rank": osrsData.activities[14].score,
    "PvP Arena - Rank": osrsData.activities[15].score,
    "Soul Wars Zeal": osrsData.activities[16].score,
    "Rifts closed": osrsData.activities[17].score,
    "Colosseum Glory": osrsData.activities[18].score,
    "Collections Logged": osrsData.activities[19].score,
    "Abyssal Sire": osrsData.activities[20].score,
    "Alchemical Hydra": osrsData.activities[21].score,
    "Amoxliatl": osrsData.activities[22].score,
    "Araxxor": osrsData.activities[23].score,
    "Artio": osrsData.activities[24].score,
    "Barrows Chests": osrsData.activities[25].score,
    "Bryophyta": osrsData.activities[26].score,
    "Callisto": osrsData.activities[27].score,
    "Calvarion": osrsData.activities[28].score,
    "Cerberus": osrsData.activities[29].score,
    "Chambers of Xeric": osrsData.activities[30].score,
    "Chambers of Xeric: Challenge Mode": osrsData.activities[31].score,
    "Chaos Elemental": osrsData.activities[32].score,
    "Chaos Fanatic": osrsData.activities[33].score,
    "Commander Zilyana": osrsData.activities[34].score,
    "Corporeal Beast": osrsData.activities[35].score,
    "Crazy Archaeologist": osrsData.activities[36].score,
    "Dagannoth Prime": osrsData.activities[37].score,
    "Dagannoth Rex": osrsData.activities[38].score,
    "Dagannoth Supreme": osrsData.activities[39].score,
    "Deranged Archaeologist": osrsData.activities[40].score,
    "Doom of Mokhaiotl": osrsData.activities[41].score,
    "Duke Sucellus": osrsData.activities[42].score,
    "General Graardor": osrsData.activities[43].score,
    "Giant Mole": osrsData.activities[44].score,
    "Grotesque Guardians": osrsData.activities[45].score,
    "Hespori": osrsData.activities[46].score,
    "Kalphite Queen": osrsData.activities[47].score,
    "King Black Dragon": osrsData.activities[48].score,
    "Kraken": osrsData.activities[49].score,
    "KreeArra": osrsData.activities[50].score,
    "Kril Tsutsaroth": osrsData.activities[51].score,
    "Lunar Chests": osrsData.activities[52].score,
    "Mimic": osrsData.activities[53].score,
    "Nex": osrsData.activities[54].score,
    "Nightmare": osrsData.activities[55].score,
    "Phosanis Nightmare": osrsData.activities[56].score,
    "Obor": osrsData.activities[57].score,
    "Phantom Muspah": osrsData.activities[58].score,
    "Sarachnis": osrsData.activities[59].score,
    "Scorpia": osrsData.activities[60].score,
    "Scurrius": osrsData.activities[61].score,
    "Shellbane Gryphon": osrsData.activities[62].score,
    "Skotizo": osrsData.activities[63].score,
    "Sol Heredit": osrsData.activities[64].score,
    "Spindel": osrsData.activities[65].score,
    "Tempoross": osrsData.activities[66].score,
    "The Gauntlet": osrsData.activities[67].score,
    "The Corrupted Gauntlet": osrsData.activities[68].score,
    "The Hueycoatl": osrsData.activities[69].score,
    "The Leviathan": osrsData.activities[70].score,
    "The Royal Titans": osrsData.activities[71].score,
    "The Whisperer": osrsData.activities[72].score,
    "Theatre of Blood": osrsData.activities[73].score,
    "Theatre of Blood: Hard Mode": osrsData.activities[74].score,
    "Thermonuclear Smoke Devil": osrsData.activities[75].score,
    "Tombs of Amascut": osrsData.activities[76].score,
    "Tombs of Amascut: Expert Mode": osrsData.activities[77].score,
    "TzKal-Zuk": osrsData.activities[78].score,
    "TzTok-Jad": osrsData.activities[79].score,
    "Vardorvis": osrsData.activities[80].score,
    "Venenatis": osrsData.activities[81].score,
    "Vetion": osrsData.activities[82].score,
    "Vorkath": osrsData.activities[83].score,
    "Wintertodt": osrsData.activities[84].score,
    "Yama": osrsData.activities[85].score,
    "Zalcano": osrsData.activities[86].score,
    "Zulrah": osrsData.activities[87].score
    }))
      } 
      catch(e){
        console.log(e);
        res.statusCode = 404
        res.end(JSON.stringify({ 
        "error": e,

    }))
      }

  }
});

server.listen(port, () => {
  console.log(`Server running at ${port}/`);
});



