function turnToLowerCase(textareaId) {
    document.getElementById(textareaId).value = document.getElementById(textareaId).value.toLowerCase();
}
function turnToUpperCase(textareaId) {
    document.getElementById(textareaId).value = document.getElementById(textareaId).value.toUpperCase();
}
function turnToProperCase(textareaId) {
    let text = document.getElementById(textareaId).value.toLowerCase();
    let words = text.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    document.getElementById(textareaId).value = words.join(" ");
}
function turnToSentenceCase(textareaId) {
    let text = document.getElementById(textareaId).value.toLowerCase();
    let wordsArr = text.split(". ");
    for (let j = 0; j < wordsArr.length; j++) {
        wordsArr[j] = wordsArr[j][0].toUpperCase() + wordsArr[j].substr(1);
    }
    document.getElementById(textareaId).value =  wordsArr.join(". ");
}
function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function saveFile(textareaId) {
    let text = document.getElementById(textareaId).value;
    download("text.txt", text);
}


