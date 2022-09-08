const jimDayWednesday  = {
   chest: {
       1: "Bench press",
       2: "Incline bench press",
       3: "Dumbbell laying",
    } ,
    triceps: {
        4: "Skull crushers",
        5: "Triceps Kickbacks",
        6: "Rope Pushdowns"
    }
}
function slogan() {
    console.log ('Lets go')
}
setTimeout (slogan, 3000)

const personeOne = {
    name: "Bob"
}
function increaseName(person) {
person.name += 1
return person
}