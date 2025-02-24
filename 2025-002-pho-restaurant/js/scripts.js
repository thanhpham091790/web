// Load menu category when click 
function showActive(element) {
    document.getElementById("menu-active").innerHTML = element.innerHTML;
}

// Load content of website via AJAX
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var resta = JSON.parse(this.responseText);
        var i;
        // Load notification from json file
        var note_info = '<p>' + resta.note + '</p>';
        document.getElementById("note-info").innerHTML = note_info;
        var note_hours = "";
        for (i = 0; i < resta.hours.length; i++) {
            note_hours += '<p>' + resta.hours[i] + '</p>';
        }
        document.getElementById("note-hours").innerHTML = note_hours;

        // Load about information from json file
        var about_info = "";
        for (i = 0; i < resta.about.length; i++) {
            about_info += '<p>' + resta.about[i] + '</p>';
        }
        document.getElementById("about-info").innerHTML = about_info;

        // Load menu category from json file
        var cats = resta.categories;
        var menu_nav = "", is_first;
        for (i = 0; i < cats.length; i++) {
            if (cats[i].cposition == "0") {
                is_first = 'id="first-cat"';
            } else {
                is_first = "";
            }
            menu_nav += '<a onclick="showActive(this)" ' + is_first + ' class="dropdown-item text-dark m-0 py-3 border-bottom" data-toggle="tab" \
            href = "#'+ cats[i].cid + '">' + cats[i].cename + '<span class="d-block">' + cats[i].cvname + '</span></a>';
        }
        document.getElementById("menu-nav").innerHTML = menu_nav;

        // Load menu items from json file
        var menu = "", active;
        for (i = 0; i < cats.length; i++) {
            // Load the first tab content
            if (cats[i].cposition == "0") {
                active = " active";
            } else {
                active = "";
            }

            menu += '\
            <div id="'+ cats[i].cid + '" class="container-fluid  px-0 tab-pane ' + active + '">\
                <div class="row pb-3"> \
                    <div class="col-12 text-center"> \
                        <h3 class="c-name text-success">'+ cats[i].cename + '</h3> \
                    </div> \
                    <div class="col-12"> \
                        <img onerror="this.style.display=\'none\';" class="c-img img-fluid w-100" src="'+ cats[i].cimage + '" \
                            alt="'+ cats[i].cname + '"> \
                    </div> \
                    <div class="col-12"> \
                        <p class="c-desc text-success">'+ cats[i].cdesc + '</p> \
                        <p class="c-desc text-success text-center">'+ cats[i].cnote + '</p> \
                    </div> \
                </div>';
            var j;
            var pros = cats[i].cproducts;
            for (j = 0; j < pros.length; j++) {
                var pvname = "", ppieces = "", pimage = "";
                if (pros[j].pvname != "") { pvname = pros[j].pvname + ' - '; }
                if (pros[j].ppieces != "") { ppieces = ' (' + pros[j].ppieces + ')'; }
                var url = pros[j].pimage;
                var isImgExist = imageExists(url);
                if (isImgExist) {
                    pimage = '\
                    <span class="p-img"> \
                            <i class="fas fa-camera text-success" data-toggle="modal" data-target="#'+ pros[j].pid + '"></i> \
                    </span> \
                    <div class="modal fade" id="'+ pros[j].pid + '"> \
                        <div class="modal-dialog modal-dialog-centered"> \
                            <div class="modal-content"> \
                                <img class="img-fluid" src="'+ pros[j].pimage + '" alt="' + pros[j].pename + '"> \
                            </div> \
                        </div> \
                    </div> \
                    ';
                } else {
                    pimage = '';
                }
                menu += '\
                    <div class="row"> \
                        <div class="col-8"> \
                            <p class="p-name">'+ pros[j].pid + '. ' + pvname + pros[j].pename + ppieces + pimage + '</p> \
                            <p class="p-desc">'+ pros[j].pdesc + '</p> \
                        </div> \
                        <div class="col-4"> \
                            <div class="p-price">';
                var z;
                var opts = pros[j].prices;
                if (opts.length == 1) {
                    menu += '<p>' + opts[0].price + '</p>';
                } 
                menu += '\
                            </div> \
                        </div> \
                    </div>';
            }
            menu += '\
            </div>';
        }
        document.getElementById("menu-items").innerHTML = menu;

        // Auto click to active the first category
        document.getElementById("first-cat").click();

        // Load address and phone from json file
        var address_info = "";
        address_info = '<a class="text-dark text-decoration-none" \
        href="'+ resta.address[0] + '">' + resta.address[1] + '</a>';
        document.getElementById("address-info").innerHTML = address_info;

        var phone_info = "";
        phone_info = '<a class="text-dark text-decoration-none" \
        href="tel:'+ resta.phone[0] + '">' + resta.phone[1] + '</a>';
        document.getElementById("phone-info").innerHTML = phone_info;
    }
};
xmlhttp.open("GET", "menu.json", true);
xmlhttp.send();

// Check image exists
function imageExists(src) {
    var isExist;
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', src, false);
    xhr.send();

    if (xhr.status == "404") {
        isExist = false;
    } else {
        isExist = true;
    }
    return isExist;
}


// Load Google Map section
function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(39.66743209145535, -104.86360942372228),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        panControl: true,

        zoom: 15,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.DEFAULT
        },
        mapTypeControl: true,
        scaleControl: true,
        streetViewControl: true,
        overviewMapControl: true,
        rotateControl: true,
        fullscreenControl: true,
        disableDefaultUI: true
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(39.66746512578677, -104.86358796488952)
    });
    marker.setMap(map);

    var infoWindow = new google.maps.InfoWindow({
        content: "2719 S Parker Rd, Aurora, CO 80014"
    });
    google.maps.event.addListener(marker, 'click', function () {
        var pos = map.getZoom();

        map.setZoom(17);
        map.setCenter(marker.getPosition());

        window.setTimeout(function () {
            map.setZoom(pos);
        }, 3000);

        infoWindow.open(map, marker);
    });
}

