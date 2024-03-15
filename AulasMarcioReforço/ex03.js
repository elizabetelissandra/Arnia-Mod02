const calcularMedia = (v, temZero) => {
    
   let soma = 0
   numZero = 0
   temZero = false
   for (let i = 0; i < v.length; i++) {
       soma += v[i]
       if(v[i] == 0){
           numZero++
           temZero = true
       }
}
console.log('O numero de numZero é', numZero)
return  soma/v.length
    }

let numeros = []
numeros[0] = 10
numeros[1] = 5
numeros[2] = 0
numeros[3] = 8
numeros[4] = 7
const nz = 0
console.log(calcularMedia(numeros, nz)) //Resultado: 7.8</s
console.log("O numero de zero é ", nz)



