// var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0');
// var yyyy = today.getFullYear();

// today = mm + '/' + dd + '/' + yyyy;
// document.write(today);
/*
Make a Age verification. 


Set the minimum Age to 18.
Set a input date to enter the person's birthday. //
Set a function to check today's day. //
Go through each date input.//
Pass through input Year and subtract it from Today's Date
If INPUT Year is > 18 Allow entry.
If INPUT Year is = 18 Run through Month conditionals.
    if INPUT month < current Month Allow Entry.
    if INPUT month = current Month Run through Day condtionals.
        If INPUT Day <= current day Allow entry.
        If INPUT day > currenty Day Allow Entry. 
    if INPUT month > current Month Deny Entry.
If INPUT Year isn't > 18 Deny Entry.
*/



function minDate() {
    // var allowed = document.getElementById('allowed')
    // let date = new Date();
    // let day = date.getDay('calender');
    // console.log(day)
    // return day;
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    
    today = mm + '/' + dd + '/' + yyyy;
    //SPLIT -- Look Up.
    // SLICE -- seperates 1999-11-11 
    //        let variable = obj.slice(0,4); //1999
    //        let variable2 = obj.slice(5,7); // 11
    //        let variable3 = obj.slice(8,10); //11
    //Substring similar to SLICE  index=>(0,0)<= how many character to move from there
    let inputDate = document.getElementById('input2').value;
    let d = new Date(inputDate)
    let day = d.getUTCDate();
    let month = d.getUTCMonth() + 1;
    let year = d.getUTCFullYear();

    let allow = document.getElementById('allowed');

    if (yyyy - year > 18) {

        allow.innerHTML = "Welcome to Here."
    } else if (yyyy - year < 18) {

        allow.innerHTML = "Leave my Website."
    } else  {89
        if (month < mm) {

            allow.innerHTML = "Welcome to Here."
        } else if (month > mm) {

            allow.innerHTML = "Leave my Website."
        } else {
            if (day <= dd) {
                allow.innerHTML = "Welcome to Here."
            } else {
    
            allow.innerHTML = "Leave my Website."
            }
        }
    }
    
}