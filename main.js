var mostUsedFilters =
    [
        {
            "Antibiotica gegevens": {
                "AB gegeven": ["Ja", "Nee"],
                "AB proxylaxe": ["Nee, geen indicatie", "Onbekend", "Wel geidiceerd"],
                "AB Tijd": ["Te vroeg (>59m59s vóór incisie/bloedleegte)", "Op tijd (tussen 15m00s - 59m59s vóór incisie/bloedleegte)", " Te laat (<14m59s vóór incisie/bloedleegte)", "Geen AB toegediend", "Geen AB rond incisie", "Na incisie"]
            },
            "Compliancecijfer": {
                "Cijfer voldoende": ["onvoldoende", "voldoende"],
                "Cijfer": [
                    "Onbekend",
                    "Cijfer: 0 - ontluisterend",
                    "Cijfer: 1 - zeer slecht",
                    "Cijfer: 2 - slecht",
                    "Cijfer: 3 - ruim onvoldoende",
                    "Cijfer: 4 - onvoldoende",
                    "Cijfer: 5 - zwak",
                    "Cijfer: 6 - voldoende",
                    "Cijfer: 7 - ruim voldoende",
                    "Cijfer: 8 - goed",
                    "Cijfer: 9 - zeer goed",
                    "Cijfer: 10 - uitstekend"
                ]
            },
            "Locatie en locatiegegevens":
                {
                    "Deurbewegingen": {
                        "Deurbewegingen totaal": ["1"],
                        "Deurbewegingen per uur": ["1"],
                    },
                    "Operatiekamer": ["kamer1", "kamer2", "kamer3"]

                },
            "Operatie eigenschappen": {
                "Binnen/buiten bedrijfstijd": ["Ja", "Nee"],
                "Case admit status": ["Ingevuld", "Niet ingevuld"],
                "Implantaat": ["Ja", "Nee"],
                "POWI": ["Onbekend"],
                "Specialisme": ["Onbekend", "Algemene chirurgie", "Cardio- Thorcale chirguei", "Keel-neus-oor", "Neuro chirurgie", "Anders"],
                "Time-out status": ["Niet ingevuld", "Wel ingevuld"],
                "Urgentie niveau": ["Acuut <30 minuten", "Spoed < 5 uur", "Spoed < 24 uur", "Electief", "Onbekend"],
                "Verrichtingen": ["Onbekend", "A. carotis desobstructie", "Cerebri contusio", "Debulking operatie", "Enkel fractuur weber B", "Fistula ani", "Anders"],
            },
            "Personen": {
                "Anesthesioloog": [],
                "OK personeel": [],
                "Operateurs": [],
                "Patient": {
                    "Temperatuur patiënt (3)": {
                        "Temperatuur holding": ["< 35.4c", "35.5c - 37.5c", ">37.6c"],
                        "Temperatuur na Operatie": ["< 35.4c", "35.5c - 37.5c", ">37.6c"],
                        "Temperatuurverschil": ["< 35.4c", "35.5c - 37.5c", ">37.6c"]
                    }
                }
            },
            "Protocol gehaald/niet gehaald": {
                "Antibiotica protocol": ["Gehaald", "Niet gehaald"],
                "Deurbewegingen protocol": ["Gehaald", "Niet gehaald"],
                "Normothermie protocol": ["Gehaald", "Niet gehaald"],
                "Ontharen protocol": ["Gehaald", "Niet gehaald"],
                "POWI-bundel protocol": ["Gehaald", "Niet gehaald"],
            }
        }
    ];

var AllFilters =
    [
        {
            "Antibiotica gegevens": {
                "Veel gebruikt (3)": {
                    "AB gegeven": ["Ja", "Nee"],
                    "AB proxylaxe": ["Nee, geen indicatie", "Onbekend", "Wel geidiceerd"],
                    "AB Tijd": ["Te vroeg (>59m59s vóór incisie/bloedleegte)", "Op tijd (tussen 15m00s - 59m59s vóór incisie/bloedleegte)", " Te laat (<14m59s vóór incisie/bloedleegte)", "Geen AB toegediend", "Geen AB rond incisie", "Na incisie"]
                },
                "Overig (0)": {}
            },
            "Compliancecijfer": {
                "Veel gebruikt (2)": {
                    "Cijfer voldoende": ["onvoldoende", "voldoende"],
                    "Cijfer": [
                        "Onbekend",
                        "Cijfer: 0 - ontluisterend",
                        "Cijfer: 1 - zeer slecht",
                        "Cijfer: 2 - slecht",
                        "Cijfer: 3 - ruim onvoldoende",
                        "Cijfer: 4 - onvoldoende",
                        "Cijfer: 5 - zwak",
                        "Cijfer: 6 - voldoende",
                        "Cijfer: 7 - ruim voldoende",
                        "Cijfer: 8 - goed",
                        "Cijfer: 9 - zeer goed",
                        "Cijfer: 10 - uitstekend"
                    ]
                },
                "Overig (0)": {}
            },
            "Locatie en locatiegegevens":
                {
                    "Veel gebruikt (2)": {
                        "Deurbewegingen (2)": {
                            "Deurbewegingen totaal": ["1"],
                            "Deurbewegingen per uur": ["1"],
                        },
                        "Operatiekamer": ["kamer1", "kamer2", "kamer3"],

                    },
                    "Overig (3)": {
                        "Kamer type": ["Algemene OK", "Algemene OK (laser)", "Hybride OK", "Thorax OK"],
                        "Luchtdruk binnen norm": ["Niet gemeten", "0% t/m 10%", "11% t/m 20%", "21% t/m 30%", "31% t/m 40%", "31% t/m 40%", "41% t/m 50%", "51% t/m 60%", "61% t/m 70%", "71% t/m 80%", "81% t/m 90%", "91% t/m 100%"],
                        "Poliklinische OK": ["Klinisch", "Poliklinisch", "Niet bekend"]

                    }
                },
            "Operatie eigenschappen": {
                "Veel gebruikt (8)": {
                    "Binnen/buiten bedrijfstijd": ["Ja", "Nee"],
                    "Case admit status": ["Ingevuld", "Niet ingevuld"],
                    "Implantaat": ["Ja", "Nee"],
                    "POWI": ["Onbekend"],
                    "Specialisme": ["Onbekend", "Algemene chirurgie", "Cardio- Thorcale chirguei", "Keel-neus-oor", "Neuro chirurgie", "Anders"],
                    "Time-out status": ["Niet ingevuld", "Wel ingevuld"],
                    "Urgentie niveau": ["Acuut <30 minuten", "Spoed < 5 uur", "Spoed < 24 uur", "Electief", "Onbekend"],
                    "Verrichtingen": ["Onbekend", "A. carotis desobstructie", "Cerebri contusio", "Debulking operatie", "Enkel fractuur weber B", "Fistula ani", "Anders"],

                },
                "Overig (2)": {
                    "Anestesietechniek": ["Onbekend", "Algehele anesthesie", "Algehele anesthesie + loco-regionaal", "Loco-regionaal + sedatie", "Loco-regionaal", "Sedatie"],
                    "ASA Score": ["Niet bekend", 1, 2, 3, 4],
                    "Tijdsduur": ["Korter dan 1 uur", "Langer dan 1 uur, Korter dan 2 uur", "Langer dan 2 uur, korter dan 3 uur", "Langer dan 3 uur, korter dan 4 uur", "Langer dan 4 uur"]
                }
            },
            "Personen": {
                "Veel gebruikt (4)": {
                    "Anesthesioloog": [],
                    "OK personeel": [],
                    "Operateurs": [],
                    "Patient": {
                        "Veel gebruikt (1)": {
                            "Temperatuur patiënt (3)": {
                                "Temperatuur holding": ["< 35.4c", "35.5c - 37.5c", ">37.6c"],
                                "Temperatuur na Operatie": ["< 35.4c", "35.5c - 37.5c", ">37.6c"],
                                "Temperatuurverschil": ["< 35.4c", "35.5c - 37.5c", ">37.6c"]
                            }
                        },
                        "Overige (2)": {
                            "Leeftijd patiënt": [35, 36, 37, 38, 50],
                            "Geslacht patiënt": ["Man", "Vrouw"]
                        },
                    }
                },
                "Overige (0)": {}
            },
            "Protocol gehaald/niet gehaald": {
                "Veel gebruikt (5)": {
                    "Antibiotica protocol": ["Gehaald", "Niet gehaald"],
                    "Deurbewegingen protocol": ["Gehaald", "Niet gehaald"],
                    "Normothermie protocol": ["Gehaald", "Niet gehaald"],
                    "Ontharen protocol": ["Gehaald", "Niet gehaald"],
                    "POWI-bundel protocol": ["Gehaald", "Niet gehaald"],
                },
                "Overige (0)": {}
            }
        }
    ];

var filterList = document.getElementById("filterList");
var popup = document.getElementById("filterPopup");
var openPopup = document.getElementById("filterBtn");
var updateFilter = document.getElementById("applyFilter");
var close = document.getElementById("escape");
var filtersSelected = document.getElementById("filterSelected");
var checkedFilterArray = {};
var removeTrigger = [];
var currentSelection = true;

$(updateFilter).on("click", function () {
    var checkedFilters = $("#filterList input:checked");
    checkedFilterArray = {};
    $.each(checkedFilters, function () {
        if (!checkedFilterArray[this.getAttribute("data-head")]) {
            checkedFilterArray[this.getAttribute("data-head")] = [];
        }
        checkedFilterArray[this.getAttribute("data-head")].push(this.id);
        checkedFilterArray[this.getAttribute("data-head")]["id"] = (this.getAttribute("data-unique"));
    });

    $("#filterSelected")[0].innerHTML = "";
    $.each(checkedFilterArray, function (title, data) {
        $(filtersSelected).append(
            '<div class="filterList">'
            + '<span class="title">' + title + '</span>'
            + getList(data, title)
            + '</div>'
        )
    });
    document.getElementById('percentage').innerHTML = Math.floor(Math.random(100) * 100) + "%";
    removeTrigger = document.getElementsByClassName("remove");
    $(removeTrigger).each(function () {
        let trigger = this;
        $(this).on("click", function () {
            removeItem(this.getAttribute("data-unique"), trigger);
        });
    });
    $(popup).fadeOut(500);

});
$(close).on("click", function () {
    $(popup).fadeOut(500);
});

$('input[type=radio][name=filtertype]').change(function () {
    console.log(this.id);
    if (this.id === 'mostUsed') {
        currentSelection = true;
        console.log(this.id);

    }
    else if (this.id === 'all') {
        currentSelection = false;
    }
    filterList.innerHTML = "";
    console.log(currentSelection);
    applyFilterinList();

    listeners = document.getElementsByClassName("opener");
    listenersSelect = document.getElementsByClassName("selectall");
    console.log(listeners);
    $.each(listeners, function () {
        this.addEventListener("click", openElement);
    });
    $.each(listenersSelect, function () {
        this.addEventListener("click", function () {
            console.log(this);
            deOrSelectAll(this.getAttribute("data-id"));
        });
    });

});

function removeItem(id, filteritem) {
    $('input[data-unique="' + id + '"]')[0].checked = false;
    //remove parent
    $(filteritem).parent("div")[0].innerHTML = "";
    document.getElementById('percentage').innerHTML = Math.floor(Math.random(100) * 100) + "%";

}

function getList(data, head) {

    if (data.length > 1) {
        let liList = "";
        $.each(data, function () {
            var remove = this.replace(/\s+/g, '');
            liList += '<div class="row"><span class="col-9">' + this + '</span><span data-unique="' + data["id"] + '" data-id="' + head + '" data-remove="' + remove + '" class="remove col-3">Verwijder</span></div>'
        });
        let list = '<ul class="row filteroption">' + liList + '</ul>';
        return list;
    }
    else {
        var remove = data[0].replace(/\s+/g, '');
        return '<ul class="row filteroption">' + '<div class="row"><span class="col-9">' + data + '</span><span data-unique="' + data["id"] + '" data-remove="' + remove + '" data-id="' + head + '" class="remove col-3">Verwijder</span></div>' + '</ul>';
    }
}

$(openPopup).on("click", function () {
    $(popup).fadeIn(500);
});

applyFilterinList();

var listeners = document.getElementsByClassName("opener");
var listenersSelect = document.getElementsByClassName("selectall");

$.each(listeners, function () {
    this.addEventListener("click", openElement);
});
$.each(listenersSelect, function () {
    this.addEventListener("click", function () {
        console.log(this);
        deOrSelectAll(this.getAttribute("data-id"));
    });
});

function applyFilterinList() {
    if (currentSelection) {
        $.each(mostUsedFilters[0], function (title, data) {
            var list = OpenedFilterList(title, data);
            $(filterList).append(
                '<div class="category-item">' + '<span class="opener" data-openTitle="' + removeWhitespace(title) + '">+</span>' + title + '</div>',
                list,
                '</div>'
            );
        })
    }
    else {
        $.each(AllFilters[0], function (title, data) {
            var list = OpenedFilterList(title, data);
            $(filterList).append(
                '<div class="category-item">' + '<span class="opener" data-openTitle="' + removeWhitespace(title) + '">+</span>' + title + '</div>',
                list,
                '</div>'
            );
        })
    }

}

function OpenedFilterList(title, data) {
    var trimmedtitle = removeWhitespace(title);
    var closedOrOpen = 'closed';
    var returnDiv = "";
    if(trimmedtitle.includes("Veelgebruikt") || trimmedtitle.includes("Overig")){
        returnDiv = '<div id="' + trimmedtitle + '" class="' + trimmedtitle + '-filtertitle object-items extra-all open">';
    }
    else{
        returnDiv = '<div id="' + trimmedtitle + '" class="' + trimmedtitle + '-filtertitle object-items closed">';
    }


    $.each(data, function (title2, data2) {
        var uniqueID = Math.random().toString(36).substr(2, 9);
        var possib = "";
        if (data2.length !== undefined) {
            possib = ' <span class="small">(' + data2.length + ')</span>';
        }

        if(removeWhitespace((title2)).includes("Veelgebruikt") || (removeWhitespace((title2))).includes("Overig")) {
            returnDiv += '<div class="option-header-advice">' + title2 + possib + "</div>";
        }
        else {
            returnDiv += '<div class="option-header">' + '<span class="opener-big opener" data-unique="' + uniqueID + '" data-openTitle="' + removeWhitespace(title2) + '">+</span>' + title2 + possib + "</div>";
        }

        if (Array.isArray(data2)) {
            returnDiv += optionPossibilities(title2, data2, uniqueID);
        }
        else {
            returnDiv += OpenedFilterList(title2, data2);
        }
    });

    returnDiv += "</div>";

    return returnDiv;
}

function optionPossibilities(title2, data2, dataunique) {
    var trimmedtitle = removeWhitespace(title2);
    var returnDiv = '<div data-id="' + dataunique + '" id="' + trimmedtitle + '" class="' + trimmedtitle + '-optiontitle array-items closed' + '">';
    returnDiv += '<div><span class="selectall" data-id="' + dataunique + '">(De)selecteer alles in deze categorie</span></div>';
    $.each(data2, function (title3, data3) {
        returnDiv += '<div class="option">' + '<input data-unique="' + Math.random().toString(36).substr(2, 9) + '" data-head="' + title2 + '" id="' + data3 + '" type="checkbox"/> <label for="' + data3 + '">' + data3 + "</label></div>";
    });

    returnDiv += "</div>";

    return returnDiv;
}

function removeWhitespace(title) {
    return title.replace(/\s+/g, '');
}


function deOrSelectAll(div) {
    var checkboxes = "div[data-id='" + div + "'] " + "input:checked";
    console.log(checkboxes, $(checkboxes), "ch");
    if ($(checkboxes).length < 1) {
        var selector = "div[data-id='" + div + "'] " + "input:not(:checked)";
        $(selector).each(function () {
            this.checked = true;
        });
    }
    else if ($(checkboxes).length > 0) {
        $(checkboxes).each(function () {
            this.checked = false;
        })
    }
}

function openElement() {
    var inner = this.innerHTML;
    if (inner === "+") {
        var itemToOpen = this.getAttribute("data-openTitle");
        this.innerHTML = "-";
        document.getElementById(itemToOpen).classList.remove("closed");
        document.getElementById(itemToOpen).classList.add("open");
    }
    else if (inner === "-") {
        var itemToOpen = this.getAttribute("data-openTitle");
        this.innerHTML = "+";
        document.getElementById(itemToOpen).classList.add("closed");
        document.getElementById(itemToOpen).classList.remove("open");
    }

}