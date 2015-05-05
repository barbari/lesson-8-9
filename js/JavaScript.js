/*  jQuery ready function. Specify a function to execute when the DOM is fully loaded.  */
$(document).ready(function() {
  var currentdate = new Date();
	var l=0;
	function callme()
	{
		currentdate = new Date();
		$('.hour').html(currentdate.getHours()+12);
		$('.min').html(currentdate.getMinutes());
		$('.second').html(currentdate.getSeconds());
		$('.data').css({'padding-left':l+'px'}); 
		l=l+5;
	}
window.setInterval(callme,1000);

});

// User data
function detectOs() {
    document.getElementById("detectOsResult").innerHTML = 
    "OS Name is " + navigator.appName 
    
}

function detectBrowser(){
  document.getElementById("detectBrowserResult").innerHTML=
  "Browser name is" +navigator.appVersion

}
function detectWindowSize(){
  document.getElementById("detectWindowSizeResult").innerHTML=
  "Browser name is" +window.outerWidth

}

// Light Box
$(document).ready(function name(){
    $(".flip").click(function(){
        $(".modal").fadeIn(400);
    });
});
$(document).ready(function(){
    $("#close").click(function(){
        $(".modal").fadeOut(400);
    });
});

// Form validation
function validate(form){
    if (form.User.value=="qq"){ 
        if(form.Passw.value=="ww"){location="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQtaLW97e0G9aOw979o1rmtHpRDcdem8hxk4w6VdopfnjX6js5-Vw"}
        else { alert("wrong password")}
} else { alert("Wrong username")
}
}



// Clock

function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    var ms=today.getMilliseconds();
    m = checkTime(m);
    s = checkTime(s);
    if (m%2 == 0){ $("#clock").css({"background-color":"black", "font-size":"100px"})}
     
    else { 
    $("#clock").css({"background-color":"red"});
  }
    

    document.getElementById('clock').innerHTML = h+":"+m+":"+s+":"+ms;
    var t = setTimeout(function(){startTime()},100);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

 
  function imgshow(){
  $(document).ready(function(){
    $(".modal").fadeIn(400);
    });

  }



//   function changeBg(value)
// if (value.clock.value==true){
//   $("#clock").css("background-color:black")
// }
   
//   else(value.clock.value==false){
//     $("#clock").css("background-color:red")
//   }
    

// function pasuser(form) {
// if () { if () {}  else {} } else {} }

