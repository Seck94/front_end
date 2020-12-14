export class Profil {
    id: number;
    libelle: string;
    archivage: boolean;

 constructor(
     id: number,
     libelle: string,
     archivage: boolean
     ){
         this.id = id;
         this.libelle = libelle;
         this.archivage = archivage;
     }
}
