var magicians = [
    { name: "Usman" },
    { name: "Zakir" },
    { name: "Shahid" }
];
function makeGreat(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        magician.name = "the Great ".concat(magician.name);
    }
}
function showMagicians(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician.name);
    }
}
makeGreat(magicians);
showMagicians(magicians);
