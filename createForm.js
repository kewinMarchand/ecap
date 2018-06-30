let i,
    j,
    backgrounds = ["primary", "secondary", "success", "danger", "warning", "info", "dark"];

function createHeader(datas) {
    $('#form_content').append(
        '<section id="' + datas.sections[i].id + '" class="form-header">' +
            '<header class="bg-secondary p-4 my-5 text-center text-white">' +
                '<h3>' + datas.sections[i].title + '</h3>' +
                '<p>' + datas.sections[i].subtitle + '</p>' +
            '</header>' +
        '</section>'
    );
};

function createQuotes(datas) {
    $('#form_content').append(
        '<div id="accordion' + datas.sections[i].id + j +'" class="question container my-5">' +
            '<header class="row">' +
                '<h5 class="col-11" contenteditable>' + datas.sections[i].quotes[j].q + '</h5>' +
                '<button type="button" class="btn btn-link" data-target="#collapse' + datas.sections[i].id + j +'"  data-toggle="collapse" aria-expanded="true" aria-controls="collapseOne">↕</button>' +
           '</header>' +
            '<div id="collapse' + datas.sections[i].id + j + '" class="collapse show"  data-parent="#accordion' + datas.sections[i].id + j +'">' +
                '<label for="Q' + i + '">Votre réponse</label>' +
                '<textarea class="form-control" id="Q' + i + '" name="reponses' + '" rows="5" placeholder="..."></textarea>' +
            '</div>' +
        '</div>'
    );
};

function readData(datas) {
    if (datas) {  
        for (i = 0; i < datas.sections.length; i++) {
            createHeader(datas);
            for (j = 0; j < datas.sections[i].quotes.length; j++) {
                createQuotes(datas);
            };
        };
    } else {
        alert("Y'a eu un problème");
    }
}

        