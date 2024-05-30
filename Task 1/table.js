function getXML() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            tabFunc(this);
        }
    };
    xhttp.open("GET", "example.xml", true);
    xhttp.send();
}

// AJAX table
function tabFunc(xml) {
    var xmlDoc = xml.responseXML;
    var table = "<tr><th rowspan=2>Squad Name</th><th rowspan=2>Home Town</th><th rowspan=2>Formed</th><th rowspan=2>Secret Base</th><th rowspan=2>Active</th><th colspan=4>Members</th></tr>";
    table += "<tr><th>Name</th><th>Age</th><th>Secret Identity</th><th>Powers</th></tr>";
    var squad = xmlDoc.getElementsByTagName("root")[0];
    table += "<tr>";
    table += "<td rowspan=8>" + squad.getElementsByTagName("squadName")[0].textContent + "</td>";
    table += "<td rowspan=8>" + squad.getElementsByTagName("homeTown")[0].textContent + "</td>";
    table += "<td rowspan=8>" + squad.getElementsByTagName("formed")[0].textContent + "</td>";
    table += "<td rowspan=8>" + squad.getElementsByTagName("secretBase")[0].textContent + "</td>";
    table += "<td rowspan=8>" + squad.getElementsByTagName("active")[0].textContent + "</td>";

    var members = squad.getElementsByTagName("members");
    
    for (var i = 1; i < members.length; i++) {
        var member = members[i];
        table += "<tr>";
        table += "<td>" + member.getElementsByTagName("name")[0].textContent + "</td>";
        table += "<td>" + member.getElementsByTagName("age")[0].textContent + "</td>";
        table += "<td>" + member.getElementsByTagName("secretIdentity")[0].textContent + "</td>";
        table += "<td>";
        table += "<div>";
        var powers = member.getElementsByTagName("powers");
        for (var j = 0; j < powers.length; j++) {
            table += j+1 + "." + powers[j].textContent + "<br>";
        }
        table += "</div></td></tr>";
    }

    table += "</tr>";
    document.getElementById("table").innerHTML = table;

    //to hide button
    document.getElementById("btn").style.visibility = 'hidden';
}