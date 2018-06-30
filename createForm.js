let i,
    j,
    backgrounds = ["primary", "secondary", "success", "danger", "warning", "info", "dark"];

    function createHeader(sData) {
    $('#form_content').append(
        '<section id="' + sData.sections[i].id + '" class="form-header">' +
            '<header class="bg-secondary p-4 my-5 text-center text-white">' +
                '<h3>' + sData.sections[i].title + '</h3>' +
                '<p>' + sData.sections[i].subtitle + '</p>' +
            '</header>' +
        '</section>'
    );
};

function createQuotes(sData) {
    $('#form_content').append(
        '<div id="accordion' + sData.sections[i].id + j +'" class="question container my-5">' +
            '<header class="row">' +
                '<h5 class="col-11" contenteditable>' + sData.sections[i].quotes[j].q + '</h5>' +
                '<button type="button" class="btn btn-link" data-target="#collapse' + sData.sections[i].id + j +'"  data-toggle="collapse" aria-expanded="true" aria-controls="collapseOne">↕</button>' +
           '</header>' +
            '<div id="collapse' + sData.sections[i].id + j + '" class="collapse show"  data-parent="#accordion' + sData.sections[i].id + j +'">' +
                '<label for="Q' + i + '">Votre réponse</label>' +
                '<textarea class="form-control" id="Q' + i + '" name="reponses' + '" rows="5" placeholder="..."></textarea>' +
            '</div>' +
        '</div>'
    );
};

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

        