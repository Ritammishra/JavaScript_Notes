const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach((e)=>console.log(e))

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// } )

const mycoding = [
    {
        languageNmae: "Javascript",
        languageFile: "js"
    },
    {
        languageNmae: "Java",
        languageFile: "js"
    },
    {
        languageNmae: "python",
        languageFile: "py"
    },
]

mycoding.forEach( (item) => {
    console.log(item.languageNmae);
})