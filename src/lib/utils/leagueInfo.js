/*   STEP 1   */
export const leagueID = "1100895738353061888"; // your league ID
export const leagueName = "GOA Constrictors"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = false; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Welcome to the GOA Constrictors League Page!</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
      {
        "roster": 7,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
        "name": "Logan",
        "location": "Murray Hill, NYC", // (optional)
        "bio": "Logan is one of the fiercest competitors in league history. Boasting one chip and a mean attitude, this guy has the drive and the pedigree to win it all again.",
        "photo": "managers/Logan.jpg", // square ratio recommended (no larger than 500x500)
        "fantasyStart": 2015, // (optional) when did the manager start playing fantasy football
        "favoriteTeam": "nyg", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        "rival": {
          name: "Bieber", // Can be anything (usually your rival's name)
          link: 5, // manager array number within this array, or null to link back to all managers page
          image: "managers/Bieber.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        //"favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        "philosophy": "Hope the other team gets hurt.",
        "tradingScale": 5, // 1 - 10
        "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
      },
      {
        "roster": 10,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
        "name": "Ethan",
        "location": "Murray Hill, NYC", // (optional)
        "bio": "Eth",
        "photo": "managers/Ethan.jpg", // square ratio recommended (no larger than 500x500)
        "fantasyStart": 2015, // (optional) when did the manager start playing fantasy football
        "favoriteTeam": "nyg", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        "rival": {
          name: "Josh", // Can be anything (usually your rival's name)
          link: 9, // manager array number within this array, or null to link back to all managers page
          image: "/managers/Josh.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        //"favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        "philosophy": "I am Eth, The Hunted",
        "tradingScale": 10, // 1 - 10
        "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
      },
      {
        "roster": 9,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
        "name": "Josh",
        "location": "West Orange, NJ", // (optional)
        "bio": "2x Champ",
        "photo": "/managers/Josh.jpg", // square ratio recommended (no larger than 500x500)
        "fantasyStart": 2015, // (optional) when did the manager start playing fantasy football
        "favoriteTeam": "josh's team", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        "rival": {
          name: "Everyone", // Can be anything (usually your rival's name)
          link: null, // manager array number within this array, or null to link back to all managers page
          image: "/managers/Josh.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        //"favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        "philosophy": "Win or Go Home",
        "tradingScale": 8, // 1 - 10
       "preferredContact": "Carrier Pigeon", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
  {
        "roster": 4,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
        "name": "Hirsh",
        "location": "Murray Hill, NYC", // (optional)
        "bio": "2x Champ (did not draft his first championship team",
        "photo": "/managers/Hirsh.jpg", // square ratio recommended (no larger than 500x500)
        "fantasyStart": 2017, // (optional) when did the manager start playing fantasy football
        "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        "rival": {
          name: "Kamens", // Can be anything (usually your rival's name)
          link: 3, // manager array number within this array, or null to link back to all managers page
          image: "/managers/Kamens.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
        //"favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        "philosophy": "Fast trades",
        "tradingScale": 5, // 1 - 10
        "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
      },
  {
        "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
        "name": "Assaf",
        "location": "Boston, MA", // (optional)
        "bio": "Heart.",
        "photo": "/managers/Assaf.jpg", // square ratio recommended (no larger than 500x500)
        "fantasyStart": 2015, // (optional) when did the manager start playing fantasy football
        "favoriteTeam": "ne", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        "rival": {
          name: "XI JINGZECE", // Can be anything (usually your rival's name)
          link: 1, // manager array number within this array, or null to link back to all managers page
          image: "/managers/Zece.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        }, 
       // "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        "philosophy": "Never Give Up.",
        "tradingScale": 6, // 1 - 10
        "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
      },
  {
        "roster": 5,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
        "name": "Bieber",
        "location": "Cleveland, OH", // (optional)
        "bio": "Jets Fan.",
        "photo": "/managers/Bieber.jpg", // square ratio recommended (no larger than 500x500)
        "fantasyStart": 2016, // (optional) when did the manager start playing fantasy football
        "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        "rival": {
          name: "Logan", // Can be anything (usually your rival's name)
          link: 7, // manager array number within this array, or null to link back to all managers page
          image: "/managers/Logan.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
       // "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        "philosophy": "Fireman Ed will lead me to victory",
        "tradingScale": 2, // 1 - 10
        "preferredContact": "Carrier Pigeon", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
      },
  {
        "roster": 6,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
        "name": "Gutstein",
        "location": "Chicago, IL", // (optional)
        "bio": "Da Bears💅",
        "photo": "/managers/Gutstein.jpg", // square ratio recommended (no larger than 500x500)
        "fantasyStart": 2015, // (optional) when did the manager start playing fantasy football
        "favoriteTeam": "chi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        "rival": {
          name: "Nadav", // Can be anything (usually your rival's name)
          link: 8, // manager array number within this array, or null to link back to all managers page
          image: "/managers/Nadav.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
       // "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        "philosophy": "Truth Social is the Truth",
        "tradingScale": 5, // 1 - 10
        "preferredContact": "WhatsApp", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
      },
  {
        "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
        "name": "Commissioner Zece",
        "location": "Bloomfield, NJ", // (optional)
        "bio": "A staple of the league. Can will himself to victory every year.",
        "photo": "/managers/Zece.jpg", // square ratio recommended (no larger than 500x500)
        "fantasyStart": 2015, // (optional) when did the manager start playing fantasy football
        "favoriteTeam": "ne", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        "rival": {
          name: "Assaf", // Can be anything (usually your rival's name)
          link: 2, // manager array number within this array, or null to link back to all managers page
          image: "/managers/Assaf.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
       // "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        "philosophy": "I will not just ask Rabbis for help, I will take action to help myself.",
        "tradingScale": 2, // 1 - 10
        "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
      },
  {
        "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
        "name": "Kamens",
        "location": "Orlando, Florida", // (optional)
        "bio": "Stat Guy, League Hero.",
        "photo": "/managers/Kamens.jpg", // square ratio recommended (no larger than 500x500)
        "fantasyStart": 2016, // (optional) when did the manager start playing fantasy football
        "favoriteTeam": "nyg", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        "rival": {
          name: "Logan", // Can be anything (usually your rival's name)
          link: 7, // manager array number within this array, or null to link back to all managers page
          image: "/managers/Hirsh.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
       // "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        "philosophy": "Hard work pays off. Unless Logan is working hard, fuck Logan.",
        "tradingScale": 9, // 1 - 10
        "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
      },
  {
        "roster": 8,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
        "name": "Nadav",
        "location": "Arlington, VA", // (optional)
        "bio": "2x runner up, this year's potential runner",
        "photo": "/managers/Nadav.jpg", // square ratio recommended (no larger than 500x500)
        "fantasyStart": 2016, // (optional) when did the manager start playing fantasy football
        "favoriteTeam": "was", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
        "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
        "rival": {
          name: "Gutstein", // Can be anything (usually your rival's name)
          link: 6, // manager array number within this array, or null to link back to all managers page
          image: "/managers/Gutstein.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
        },
      //  "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
        "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
        "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
        "philosophy": "NO TWO FOR ONES",
        "tradingScale": 3, // 1 - 10
        "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
      },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
