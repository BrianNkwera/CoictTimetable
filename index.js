var changedToCEIT = false;
var defaultTable = $('.table-container').clone(true);
//var ceit = ceitTable.clone(true);
$(".table-container").hide();//we start out by hiding the table

$("a").click(function(){
    callTable(this.innerHTML);
   
    
});

function callTable(selectedOption){
    switch (selectedOption) {
        case "CS":
        ogTable();
        break;

        case "CEIT":
        ceitTable();
        
        break;
        
        case "TE":
        teTimetable();
        
        break;

        case "EE":
        teTimetable();
        break;
        
    
        default: $(".table-container").fadeOut(1000);
        break;
    }
}

function ogTable(){
    $(".table-container").replaceWith(defaultTable.clone(true));
    
}

function ceitTable(){
    //$(".table-container").fadeIn(1000);
    ogTable();
    $(".mt171").html("<h3>LECTURE</h3><p>MT 171</p><h3>Venue</h3><p>YOMBO 05</p><h3>TIME</h3><p>0800-0855hrs</p>");
    $(".tuesday3 .mt171").html("<h3>LECTURE</h3><p>MT 171</p><h3>Venue</h3><p>YOMBO 05</p><h3>TIME</h3><p>1400-1455hrs</p>");
    $(".tuesday5 .mt171").html("<h3>TUTORIAL</h3><p>MT 171</p><h3>Venue</h3><p>A108 & R217</p><h3>TIME</h3><p>1900-1955hrs</p>");
    $(".monday2 .es171").html("<h3>PRACTICAL</h3><p>ES 171</p><h3>Venue</h3><p>B106 COMPLAB</p><h3>TIME</h3><p>0900-1255hrs</p>");
    $(".tuesday1 .es171").html("<h3>LECTURE</h3><p>ES 171</p><h3>Venue</h3><p>B106 COMPLAB</p><h3>TIME</h3><p>0700-1055hrs</p>");
    $(".es110").html("<h3>LECTURE</h3><p>ES 110</p><h3>Venue</h3><p>D01 LUHANGA</p><h3>TIME</h3><p>1600-1755hrs</p>");
    $(".tuesday2 div").remove();
    $(".wednesday5 div").remove();
    $(".thursday3 div").remove();
    $(".thursday5 .mt171").html("<h3>LECTURE</h3><p>MT 171</p><h3>Venue</h3><p>YOMBO 05</p><h3>TIME</h3><p>1700-1755hrs</p>");
    $(".is158-ceit").html("<h3>TUTORIAL</h3><p>IS 158</p></p><h3>Venue</h3><p>B307 COICT</p><h3>TIME</h3><p>1100-1155hrs</p>");
    $(".es120").html("<h3>LECTURE</h3><p>ES 120</p><h3>Venue</h3><p>D01 LUHANGA</p><h3>TIME</h3><p>1400-1555hrs</p>");
    $(".monday4 .is171").html("<h3>PRACTICAL</h3><p>IS 171</p><h3>Venue</h3><p>B106 COMPLAB</p><h3>TIME</h3><p>1600-1755hrs</p>");
    $(".friday4 .mt171").html("<h3>TUTORIAL</h3><p>MT 171</p><h3>Venue</h3><p>A108</p><h3>TIME</h3><p>1300-1355hrs</p>");
    $(".friday2 .es110").html("<h3>TUTORIAL</h3><p>ES 110</p><h3>Venue</h3><p>D01 LUHANGA</p><h3>TIME</h3><p>1100-1155hrs</p>");
    $(".friday3 .es120").html("<h3>TUTORIAL</h3><p>ES 120</p><h3>Venue</h3><p>D01 LUHANGA</p><h3>TIME</h3><p>1200-1255hrs</p>");
   // $(".thursday3 div").html("<h3>PRACTICAL</h3><p>CS 175</p><h3>Venue</h3><p>B106 COMPLAB</p><h3>TIME</h3><p>1400-1455hrs</p>");
    //ceitTable.replaceWith(ceit.clone(true));
}

function teTimetable(){
    ceitTable();
    $(".monday2 div").html("<h3>LECTURE</h3><p>CS 175</p><h3>Venue</h3><p>B106 COMPLAB</p><h3>TIME</h3><p>1000-1255hrs</p>");
    
    for (x =1; x <=5; x++){
        if($(".tuesday" + x + " div").hasClass("mt171")===false){
            $(".tuesday"+x+" div").remove();
        }
    }
    $(".tuesday5 div").remove();
    $(".wednesday1 div").html("<h3>WORKSHOP</h3><p>TE 172</p><h3>Venue</h3><p>D 19</p><h3>TIME</h3><p>0800-0955hrs</p>");
    $(".wednesday2 div").html("<h3>LECTURE</h3><p>TE 101</p><h3>Venue</h3><p>B305</p><h3>TIME</h3><p>1200-1300hrs</p>");
    $(".wednesday2 div").html("<h3>LECTURE</h3><p>TE 101</p><h3>Venue</h3><p>B305</p><h3>TIME</h3><p>1200-1300hrs</p>");
    $(".thursday2 div").html("<h3>LECTURE</h3><p>TE 101</p><h3>Venue</h3><p>B106</p><h3>TIME</h3><p>0900-1200hrs</p>");
    
}
    
        

    

   
   