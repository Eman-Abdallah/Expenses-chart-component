function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("data/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:
readTextFile("./data.json", function(text) {
    var data = JSON.parse(text);
    console.log(data[0]);
    document.querySelector('.monday').innerHTML = data[0].day;
    document.querySelector('.coast1').innerHTML = `$${data[0].amount}`;
    document.querySelector('.tuesday').innerHTML = data[1].day;
    document.querySelector('.coast2').innerHTML = `$${data[1].amount}`;
    document.querySelector('.wednesday').innerHTML = data[2].day;
    document.querySelector('.coast3').innerHTML = `$${data[2].amount}`;
    document.querySelector('.thursday').innerHTML = data[3].day;
    document.querySelector('.coast4').innerHTML = `$${data[3].amount}`;
    document.querySelector('.friday').innerHTML = data[4].day;
    document.querySelector('.coast5').innerHTML = `$${data[4].amount}`;
    document.querySelector('.saturday').innerHTML = data[5].day;
    document.querySelector('.coast6').innerHTML = `$${data[5].amount}`;
    document.querySelector('.sunday').innerHTML = data[6].day;
    document.querySelector('.coast7').innerHTML = `$${data[6].amount}`;
});