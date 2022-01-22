function buildCitiesList() {
  const cityListJSON = {
     cities: [
       {
         name: "Hyderabad",
         state: "Telangana",
       },
       {
         name: "Delhi",
         state: "Delhi",
       },
       {
         name: "Bangalore",
         state: "Karnataka",
       },
       {
         name: "Mumbai",
         state: "Maharashtra",
       },
       {
         name: "Chennai",
         state: "Tamil Nadu",
       },
       {
         name: "Thiruvananthapuram",
         state: "Kerala",
       }
     ],
   };
    const cities = cityListJSON.cities
   
  
    mytable =
    "<table class='table'>" +
    "<tr><th>#</th><th>City</th><th>State</th></tr>";

  for (i = 0; i < 6; i++) {
    mytable +=
      "<tr><td>" +
      i +
      "</td><td>" +
        cities[i].name +
      "</td><td>" +
      cities[i].state +
      "</td><td></tr>";
  }
  mytable += "</table>";
  document.getElementById("table").outerHTML = mytable;
}