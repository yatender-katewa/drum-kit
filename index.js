var a = "wasdjkl";

var audios = ["snare.mp3", "crash.mp3", "tom-1.mp3", "tom-2.mp3", "tom-3.mp3", "tom-4.mp3", "kick-bass.mp3"];


for (let index = 0; index < 7; index++) {
    // var x = "audio" + [index];

    document.querySelector("." + a[index]).addEventListener("click", function () {
        var audio = new Audio(audios[index]);
        audio.play();
    });
    document.addEventListener("keypress", function (e) {
        var q1 = e.key;
        if (q1 == a[index]) {
            var audio1 = new Audio(audios[index]);
            audio1.play();
        }
        console.log(e.key + "presses")
    });
}


// function HouseKeeper (yearOfExperience, name, work)  {
//     this.yearOfExperience = yearOfExperience;
//     this.name = name;
//     this.work = work;
//     this.clean = function () {
//     alert("cleaning is in process");
//     }
// }      






