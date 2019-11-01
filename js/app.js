var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
var legal = yyyy - 18;

today = mm + '/' + dd + '/' + yyyy;
document.write(today);


function minDate() {
    var allowed = document.getElementById('allowed')
    var month = document.getElementById('month');
    var day = document.getElementById('day');
    var year = document.getElementById('year');
    if(year < legal) {
        console.log('oh')
    }

}