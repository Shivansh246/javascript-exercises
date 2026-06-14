const findTheOldest = function(people) {
    return people.reduce((old,person)=>{
        let o_from = old.yearOfBirth;
        let o_till = old.yearOfDeath ?? new Date().getFullYear();

        let p_from = person.yearOfBirth;
        let p_till = person.yearOfDeath ?? new Date().getFullYear();
        return (o_till-o_from) > (p_till-p_from)? old:person;
    },{})
};

// Do not edit below this line
module.exports = findTheOldest;
