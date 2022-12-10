var url = "https://api.dictionaryapi.dev/api/v2/entries/en/hello"
const audioElement = document.getElementById("audio");
const levels = document.getElementById("levels");
const level1Page = document.getElementById("level1Page");
const container = document.getElementById("container");
const footer = document.getElementById("footer");
const header = document.getElementById("header");
 

fetch(url)
    .then((response) => response.json())
    .then((data) =>givenData(data[0]) );

function givenData(json) {
    var audio =json.phonetics[0].audio;
    audioElement.src=audio
    console.log(audio)
}

function level1(){
    levels.classList.add("hide")
    level1Page.classList.remove("hide")
}

function clear(document){
    document.innerHTML="";
}

function Exercise1(){
    clear(container)
    clear(header)
    clear(footer)
    header.innerHTML="लेवल १ ची परीक्षा सोडवा :- "
    container.style.textAlign="center"
    container.innerHTML=`<a href="https://forms.gle/YVGmeLpx3CdCJzVCA">परीक्षा सोडवा</a>  `
}
