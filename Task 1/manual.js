function jsonToXml(json) {
    let xml = `<squad>
    <squadName>${json.squadName}</squadName>
    <homeTown>${json.homeTown}</homeTown>
    <formed>${json.formed}</formed>
    <secretBase>${json.secretBase}</secretBase>
    <active>${json.active}</active>
    <members>`;
    json.members.forEach(member => {
        xml += `
        <member>
            <name>${member.name}</name>
            <age>${member.age}</age>
            <secretIdentity>${member.secretIdentity}</secretIdentity>
            <powers>`;
        member.powers.forEach(power => {
            xml += `
                <power>${power}</power>`;
        });
        xml += `
            </powers>
        </member>`;
    });
    xml += `
    </members>
</squad>`;
    return xml;
}

const jsonData = {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
      {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": ["Radiation resistance", 
          "Turning tiny", 
          "Radiation blast"
        ]
      },
      {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      },
      {
        "name": "Shadow Stalker",
        "age": 34,
        "secretIdentity": "Alex Turner",
        "powers": [
          "Invisibility",
          "Shadow manipulation",
          "Stealth"
        ]
      },
      {
        "name": "Thunder Strike",
        "age": 28,
        "secretIdentity": "Mike Ross",
        "powers": [
          "Weather control",
          "Flight",
          "Electric manipulation"
        ]
      },
      {
        "name": "Aqua Master",
        "age": 42,
        "secretIdentity": "Liam Waters",
        "powers": [
          "Water control",
          "Underwater breathing",
          "Aquatic communication"
        ]
      },
      {
        "name": "Mystic Mage",
        "age": 500,
        "secretIdentity": "Sophia Sage",
        "powers": [
          "Magic",
          "Telekinesis",
          "Teleportation"
        ]
      },
      {
        "name": "Iron Clad",
        "age": 35,
        "secretIdentity": "Mason Steele",
        "powers": [
          "Super strength",
          "Invulnerability",
          "Metal manipulation"
        ]
      }
    ]
  };

const xmlData = jsonToXml(jsonData);
console.log(xmlData);


function stringToXml(str) {
    const parser = new DOMParser();
    return parser.parseFromString(str, 'application/xml');
}

const xmlDoc = stringToXml(xmlData);
console.log(xmlDoc);