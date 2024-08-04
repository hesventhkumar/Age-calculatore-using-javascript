function calenderage(){

    const dob = new Date(document.getElementById("dob").value);
    const ageinms = Date.now() - dob.getTime();
    const agedate = new Date(ageinms);
    const age = Math.abs(agedate.getUTCFullYear() - 1970);
    const months =agedate.getUTCMonth();
    const days = agedate.getUTCDate() - 1;

    document.getElementById("year").innerHTML=age;
    document.getElementById("month").innerHTML=months;
    document.getElementById("day").innerHTML=days;

} 