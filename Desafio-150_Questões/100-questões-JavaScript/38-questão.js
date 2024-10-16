let nomes = [
    "Ana", "Lucas", "Julia", "Pedro", "Fernanda", "Clara", 
    "Gabriel", "Letícia", "Marcos", "Camila", "Daniel", 
    "Paula", "Carlos", "Bruna", "Felipe", "Helena", 
    "Rafaela", "Gustavo", "Sofia", "Leonardo", "Marina", 
    "Tiago", "Larissa", "Henrique", "Isabela", "Vitor", 
    "Amanda", "Ricardo", "Bianca", "Rodrigo"];

console.log(nomesTerminadosEmA(nomes))

function nomesTerminadosEmA(arr){
    return arr.filter(name => name.charAt(name.length - 1 ) == 'a');
}