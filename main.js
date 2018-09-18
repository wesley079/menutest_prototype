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
            "Locatie & locatiegegevens":
                {
                    "Deurbewegingen": {
                        "Deurbewegingen totaal": ["1"],
                        "Deurbewegingen per uur": ["1"],
                    },
                    "Operatiekamer": ["kamer1", "kamer2", "kamer3"]

                },
            "Operatie eigenschappen": {
                "Binnen/buiten bedrijfstijd": ["Ja", "Nee"],
                "Case admit status": ["Ingevuld", "Niet ingevuld"]
            }
        }
    ];

var AllFilters =
    [
        {
            "Antibiotica gegevens": {
                "1.Veel gebruikt": {
                    "AB gegeven": ["Ja", "Nee"],
                    "AB proxylaxe": ["Nee, geen indicatie", "Onbekend", "Wel geidiceerd"],
                    "AB Tijd": ["Te vroeg (>59m59s vóór incisie/bloedleegte)", "Op tijd (tussen 15m00s - 59m59s vóór incisie/bloedleegte)", " Te laat (<14m59s vóór incisie/bloedleegte)", "Geen AB toegediend", "Geen AB rond incisie", "Na incisie"]
                },
                "1.Overig": {}
            },
            "Compliancecijfer": {
                "2.Veel gebruikt": {
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
                "2.Overig": {}
            },
            "Locatie & locatiegegevens":
                {
                    "3. Veel gebruikt": {
                        "Deurbewegingen": {
                            "Deurbewegingen totaal": ["1"],
                            "Deurbewegingen per uur": ["1"],
                        },
                        "Operatiekamer": ["kamer1", "kamer2", "kamer3"]

                    },
                    "3. Overig": {

                    }
                },
            "Operatie eigenschappen": {
                "4. Veel gebruikt": {
                    "Binnen/buiten bedrijfstijd": ["Ja", "Nee"],
                    "Case admit status": ["Ingevuld", "Niet ingevuld"]
                },
                "4. overig": {

                }
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

$('input[type=radio][name=filtertype]').change(function() {
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
    var returnDiv = '<div id="' + trimmedtitle + '" class="' + trimmedtitle + '-filtertitle object-items closed' + '">';

    $.each(data, function (title2, data2) {
        var uniqueID = Math.random().toString(36).substr(2, 9);
        var possib = "";
        if(data2.length !== undefined){
           possib = ' <span class="small">(' + data2.length + ')</span>';
        }
        returnDiv += '<div class="option-header">' + '<span class="opener-big opener" data-unique="'+ uniqueID + '" data-openTitle="' + removeWhitespace(title2) + '">+</span>' + title2 + possib + "</div>";
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
    var returnDiv = '<div data-id="'+ dataunique +'" id="' + trimmedtitle + '" class="' + trimmedtitle + '-optiontitle array-items closed' + '">';
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