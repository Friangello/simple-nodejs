// Créer l'objet student
let student = {
    name: "Marie",
    age: 20,
    courses: []
};

// Modifier la propriété age
student.age = 21;

// Ajouter une nouvelle propriété grade
student.grade = "A";

// Ajouter des cours au tableau courses en utilisant la méthode push
student.courses.push("Math", "Physics", "Chemistry");

// Trouver l'index de "Physics" dans le tableau courses
let physicsIndex = student.courses.indexOf("Physics");

// Utiliser la méthode slice pour créer un nouveau tableau contenant les deux premiers éléments de courses
let firstTwoCourses = student.courses.slice(0, 2);

// Afficher les résultats
console.log("Objet student complet avec les modifications : ", student);
console.log("Index de 'Physics' dans le tableau courses : ", physicsIndex);
console.log("Nouveau tableau créé avec slice : ", firstTwoCourses);
