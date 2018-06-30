function getXMLHttpRequest() {
    let xhr = null;
    
    if (window.XMLHttpRequest || window.ActiveXObject) {
        if (window.ActiveXObject) {
            try {
                xhr = new ActiveXObject("Msxml2.XMLHTTP");
            } catch(e) {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
        } else {
            xhr = new XMLHttpRequest(); 
        }
    } else {
        alert("Votre navigateur ne supporte pas l'objet XMLHTTPRequest...");
        return null;
    }
    
    return xhr;
}

function request(callback) {
    // Instancie l'objet XHR
    let xhr = getXMLHttpRequest();    
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
            // Données textuelles récupérées
            let formGroups = JSON.parse(xhr.responseText);
            callback(formGroups);   
        };           
    };    
    xhr.open("GET", "questions.json", true);
    xhr.send(null);
}   

function readData(datas) {
    if (datas) {  
        for (i = 0; i < datas.sections.length; i++) {
            createHeader(datas);
            for (j = 0; j < datas.sections[i].quotes.length; j++) {
                createQuotes(datas);
            };
        };
    } else {
        alert("Il y a eu un problème");
    }
}