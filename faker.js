var faker = require('faker');

var database = { users: [], profils: []};
for (var i = 1; i<= 4; i++) {
  tab=['ADMIN','FORMATER','APPRENANT','CM']
  database.profils.push({
    id: i,
    libelle: tab[i-1],
    archivage: true
  });

for (var j = 1; j<= 5; j++) {
  database.users.push({
    id: j,
    username: 'user'+j,
    prenom: faker.name.firstName(),
    nom: faker.name.lastName(),
    email: faker.internet.email(),
    password: 'passe',
    profil: tab[i-1],
    avatar: "https://source.unsplash.com/1600x900/?avatar",
    statut: faker.random.arrayElement(['actif','renvoyé','en attente'])
  });
}
}

console.log(JSON.stringify(database));