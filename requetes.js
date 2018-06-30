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
    // définit les modalités d'envoi
    xhr.open("GET", "questions.json", true);
    // change le type MIME de la requête obligatoire pour POST
    // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(null);
}   

function readData(sData) {
    if (sData) {  
        for (i = 0; i < sData.sections.length; i++) {
            createHeader(sData);
            for (j = 0; j < sData.sections[i].quotes.length; j++) {
                createQuotes(sData);
            };
        };
    } else {
        alert("Y'a eu un problème");
    }
}





$.fn.serializeFormJSON = function () {
    let json = {},
        a = this.serializeArray();

    $.each(a, function () {
        if (json[this.name]) {
            if (!json[this.name].push) {
                json[this.name] = [json[this.name]];
            }
            json[this.name].push(this.value || ' ');
        } else {
            json[this.name] = this.value || ' ';
        }
    });

    return json;
};

function postRequest(datas) {
    // Sending and receiving data in JSON format using POST method
    //
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "reponses.html", true);
    xhr.setRequestHeader("Content-Type", "text/html");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {          
        }
    };
    xhr.send(datas);
}