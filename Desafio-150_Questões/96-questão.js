let numeros = [3, 7, 12, 25, 8, 15, 42, 5, 19, 30, 27];


console.log(maioresQueVinteCinto(numeros));

function maioresQueVinteCinto(arr){
    return arr.filter(num => num % 9 == 0)
}
