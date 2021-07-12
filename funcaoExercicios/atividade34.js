/* 34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras. */

function string(string1, string2) {
    let contido = true
    for(let i = 0; i < string1.length; i++) {
        let caracString1 = string1.charAt(i).toLowerCase()
        for(let x = 0; x < string2.length; x++) {
            let caracString2 = string2.charAt(x).toLowerCase()
            if(caracString1 == caracString2) {
                contido = true
                break
            } else {
                contido = false
            }
        }
        if(!contido) {
            return contido
        }
    }
    return contido
}

console.log(string('abc','cba'))