
let form = $("#form");

function writeDatas(datas) {
    i = 0;
    $('#footer').append(
        '<p>Votre nom: ' + datas.name + '</p>' +
        '<p>Votre email: ' + datas.email + '</p>' +
        '<h6>Vos réponses :</h6>'
    );
    for (i = 0; i < datas.reponses.length; i++) {
        $('#footer').append(
            '<p>Q' + (i + 1) + ' : ' + datas.reponses[i] + '</p>'
        );
    };
}

function alertMessage() {
    $('#footer').append('<p class="alert alert-success mt-5" role="alert">Votre formulaire est bien enregistré</p>');
}

function saveFile(datas) {  
    let url = 'reponse_' + datas.name + '.json'
    let file = new File([datas], url , {type: "application/json;charset=utf-8"});
    saveAs(file); 
}


form.submit(function(e) {
    e.preventDefault(); 
    var formData = new FormData(form);
    let datas = $(this).serializeFormJSON();


    console.log(datas);
    postRequest(datas);

    alertMessage();
    writeDatas(datas);  
    postRequest(datas);
    document.location.href="reponses.html"
        
});
