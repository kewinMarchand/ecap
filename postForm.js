
let form = $("#form"),
    display = $('#display');

function alertMessage(datas) {
    display.append(
        '<p class="alert alert-success mt-5" role="alert">Merci' + datas.name + ', votre formulaire est bien enregistré</p>'
    );
}
function writeDatas(datas) {
    i = 0;
    display.append(
        '<p>Votre nom: ' + datas.name + '</p>' +
        '<p>Votre email: ' + datas.email + '</p>' +
        '<h6>Vos réponses :</h6>'
    );
    for (i = 0; i < datas.reponses.length; i++) {
        display.append(
            '<p>Question n° ' + (i + 1) + ' : ' + datas.reponses[i] + '</p>'
        );
    };
}

function saveFile(datas) {  
    let url = 'reponse_' + datas.name + '.json'
    let file = new File([datas], url , {type: "application/json;charset=utf-8"});
    saveAs(file); 
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

form.submit(function(e) {
    e.preventDefault(); 
    let datas = $(this).serializeFormJSON();
    console.log(datas);
    alertMessage(datas);
    writeDatas(datas);  

    // document.location.href="reponses.html"
        
});
