//what can the user do?
// what does the user expect?
// What can the user see?

//Pull api for list of facilities to dom/console for nasa
//Facilities have to include location addresses
//Append list to dom/console

let apiUrl = "https://data.nasa.gov/resource/9g7e-7hzz.json"

$.ajax({
  url: apiUrl,

  success: function(res){
    res.forEach(function(el){
      $("ul").append("<li>"+"The " + el.center + " is located at the following coordinates: " + el.location.coordinates+"</li>")
      console.log("The " + el.center + " is located at the following coordinates: " + el.location.coordinates)
    })
  },

  error: function(r){
    console.log('error')
  }
  
})
