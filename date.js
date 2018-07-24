Write a function that converts user entered date formatted as M/D/YYYY to a format required by an API (YYYYMMDD). The parameter "userDate" and the return value are strings.

For example, it should convert user entered date "12/31/2014" to "20141231" suitable for the API.

function formatDate(userDate) {
  // format from M/D/YYYY to YYYYMMDD
   userDate = new Date(userDate);
   let year = userDate.getFullYear().toString();
   let month = (userDate.getMonth() + 1).toString();
   let date = userDate.getDate().toString();
   if(month.length<2) {
     month = "0" + month; 
   }
   if(date.length<2) {
     date = "0" + date;
   }
  return year + month + date;
 }

console.log(formatDate("12/31/2014"));
