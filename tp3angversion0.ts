// --- Déclaration de variables avec différents types ---
let nom: string = "Mohamed";
let age: number = 21;
let isEtudiant: boolean = true;
let note: number | null = null; // union type
let tableau: number[] = [10, 20, 30];
let anything: any = "Peut être n'importe quoi";

// --- Fonction typée pour calculer la somme de deux nombres ---
function addition(a: number, b: number): number {
    return a + b;
}

console.log(`La somme de 5 et 8 est : ${addition(5, 8)}`);

// --- Interface Etudiant ---
interface IEtudiant {
    id: number;
    nom: string;
    prenom: string;
    age: number;
}

// --- Classe Etudiant qui implémente l'interface ---
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
// --- Test de la classe ---
const etudiant1 = new Etudiant(1, "Lassoued", "Mohamed", 21);
etudiant1.afficherInfo();
const etudiant2 = new Etudiant(2, "Ben Salah", "Sara", 22);
etudiant2.afficherInfo();
