export class User {
    id: number;
    username: string;
    Nom: string;
    Prenom: string;
    email: string;
    profil: string;
    avatar: Blob;
    statut: string;

    constructor(
        id: number,
        username: string,
        nom: string,
        prenom: string,
        email: string,
        profil: string,
        avatar: Blob,
        statut: string
    ) {
        this.id = id;
        this.username = username;
        this.Prenom = prenom;
        this.Nom = nom;
        this.email = email;
        this.profil = profil;
        this.avatar = avatar;
        this.statut = statut;
    }
}
