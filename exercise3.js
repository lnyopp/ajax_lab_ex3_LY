let capsArray = ["hello","i","am","an","array"]


function allCaps(array){
    return new Promise((resolve, reject) => {
        let capsArray = array.map(word => {
            if(typeof word === 'string'){
                return word.toUpperCase()
            }else {
                reject('Error: Not all items in the array are strings!')
            
            }
        })
       resolve(array)
    }
    

function sortWords(array){
    return new Promise((resolve, reject) =>
    return new Promise()
}

makeAllCaps(arrayOfWords)
.then(sortWords)
.then((result) => console.log(result))
.catch(error => console.log(error))

.makeAllCaps(complicatedArray)
.then(sortWords)
.then((result) => console.log(result))
.catch(error => console.log(error))
