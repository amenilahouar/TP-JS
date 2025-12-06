// --- Partie 1 : Variables de base et fonction simple ---
let nom: string = "Mohamed";
let age: number = 21;
let isEtudiant: boolean = true;
let note: number | null = null; // union type
let tableau: number[] = [10, 20, 30];
let anything: any = "Peut être n'importe quoi";

// Fonction typée pour addition
function addition(a: number, b: number): number {
    return a + b;
}

console.log(`La somme de 5 et 8 est : ${addition(5, 8)}`);

// --- Interface et classe Etudiant ---
interface IEtudiant {
    id: number;
    nom: string;
    prenom: string;
    age: number;
}

class Etudiant implements IEtudiant {
    id: number;
    nom: string;
    prenom: string;
    age: number;

    constructor(id: number, nom: string, prenom: string, age: number) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }

    afficherInfo(): void {
        console.log(`Etudiant [ID: ${this.id}] - ${this.prenom} ${this.nom}, Age: ${this.age}`);
    }
}

const etudiant1 = new Etudiant(1, "Lassoued", "Mohamed", 21);
etudiant1.afficherInfo();

const etudiant2 = new Etudiant(2, "Ben Salah", "Sara", 22);
etudiant2.afficherInfo();
// --- Partie 5 : Concepts avancés ---

// 1️⃣ Types génériques : fonction qui retourne un tableau de valeurs du même type
function creerTableau<T>(...elements: T[]): T[] {
    return [...elements];
}
const nombres = creerTableau<number>(1, 2, 3, 4);
const chaines = creerTableau<string>("a", "b", "c");
console.log("Tableau nombres :", nombres);
console.log("Tableau chaines :", chaines);

// 2️⃣ Unions de types et types optionnels
function afficherValeur(valeur: string | number, prefix?: string): void {
    // prefix est optionnel, peut être undefined
    if(prefix) {
        console.log(`${prefix}: ${valeur}`);
    } else {
        console.log(valeur);
    }
}

afficherValeur("Bonjour");
afficherValeur(42, "Réponse");

// 3️⃣ Enumérations (enum) pour représenter des valeurs constantes
enum Niveau {
    Debutant = 1,
    Intermediaire,
    Avance
}

let niveauEtudiant: Niveau = Niveau.Intermediaire;

console.log("Niveau de l'étudiant :", niveauEtudiant); // Affiche 2 (valeur de Intermediaire)

// --- Commentaires : ---
// - Les types génériques permettent de créer des fonctions ou classes réutilisables pour plusieurs types.
// - Les unions de types (ex: string | number) permettent d’accepter plusieurs types pour un paramètre.
// - Les types optionnels (ex: prefix?) permettent de rendre certains paramètres facultatifs.
// - Les enums permettent de définir des constantes nommées, plus lisibles que des valeurs numériques brutes.
