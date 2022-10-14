var point = 0;
$(function(){
  $(".result").hide();
  $(".buttons").hide();
});
  //ボタンがクリックされた時
  function ans_1(){
    var qNum = $(".question_1 ul li").length;
    $(".result").hide();
    $(".buttons").hide();
      var q1typeANum = $(".q1typeA:checked").length;
      var q1typeBNum = $(".q1typeB:checked").length;
      var q1typeCNum = $(".q1typeC:checked").length;
      var q1typeDNum = $(".q1typeD:checked").length;

      if(q1typeBNum == false && q1typeANum == false && q1typeCNum == false && q1typeDNum ==false){
        alert("Q1に未回答の問題があります");
        return;
      }

      if(q1typeBNum == false && q1typeANum == false && q1typeCNum == false && q1typeDNum ==true) {
        $(".result1_A").fadeIn();
        $(".button_resultA").fadeIn();
        point++;
      }else{
        $(".result1_B").fadeIn();
        $(".button_resultB").fadeIn();
      }
      $(".button_ToMain").fadeIn();
  };
//

function ans_2(){
  var qNum = $(".question_2 ul li").length;
  $(".result").hide();
  $(".buttons").hide();
    var q1typeANum = $(".q2typeA:checked").length;
    var q1typeBNum = $(".q2typeB:checked").length;
    var q1typeCNum = $(".q2typeC:checked").length;
    var q1typeDNum = $(".q2typeD:checked").length;

    if(q1typeBNum == false && q1typeANum == false && q1typeCNum == false && q1typeDNum ==false){
      alert("Q2に未回答の問題があります");
      return;
    }

    if(q1typeBNum == true && q1typeANum == true && q1typeCNum == true && q1typeDNum ==true) {
      $(".result2_A").fadeIn();
      $(".button_resultA").fadeIn();
      point++;
    }else{
      $(".result2_B").fadeIn();
      $(".button_resultB").fadeIn();
    }
    $(".button_ToMain").fadeIn();
};

function ans_3(){
  var qNum = $(".question_3 ul li").length;
  $(".result").hide();
  $(".buttons").hide();
    var q1typeANum = $(".q3typeA:checked").length;
    var q1typeBNum = $(".q3typeB:checked").length;
    var q1typeCNum = $(".q3typeC:checked").length;
    var q1typeDNum = $(".q3typeD:checked").length;

    if(q1typeBNum == false && q1typeANum == false && q1typeCNum == false && q1typeDNum ==false){
      alert("Q3に未回答の問題があります");
      return;
    }

    if(q1typeBNum == false && q1typeANum == false && q1typeCNum == true && q1typeDNum ==false) {
      $(".result3_A").fadeIn();
      $(".button_resultA").fadeIn();
      point++;
    }else{
      $(".result3_B").fadeIn();
      $(".button_resultB").fadeIn();
    }
    $(".button_ToMain").fadeIn();
};

function ans_4(){
  var qNum = $(".question_4 ul li").length;
  $(".result").hide();
  $(".buttons").hide();
    var q1typeANum = $(".q4typeA:checked").length;
    var q1typeBNum = $(".q4typeB:checked").length;
    var q1typeCNum = $(".q4typeC:checked").length;
    var q1typeDNum = $(".q4typeD:checked").length;

    if(q1typeBNum == false && q1typeANum == false && q1typeCNum == false && q1typeDNum ==false){
      alert("Q4に未回答の問題があります");
      return;
    }

    if(q1typeBNum == false && q1typeANum == false && q1typeCNum == false && q1typeDNum ==true) {
      $(".result4_A").fadeIn();
      $(".button_resultA").fadeIn();
      point++;
    }else{
      $(".result4_B").fadeIn();
      $(".button_resultB").fadeIn();
    }
    $(".button_ToMain").fadeIn();
};

function ans_5(){
  var qNum = $(".question_5 ul li").length;
  $(".result").hide();
  $(".buttons").hide();
    var q1typeANum = $(".q5typeA:checked").length;
    var q1typeBNum = $(".q5typeB:checked").length;
    var q1typeCNum = $(".q5typeC:checked").length;
    var q1typeDNum = $(".q5typeD:checked").length;

    if(q1typeBNum == false && q1typeANum == false && q1typeCNum == false && q1typeDNum ==false){
      alert("Q5に未回答の問題があります");
      return;
    }

    if(q1typeBNum == true && q1typeANum == false && q1typeCNum == true && q1typeDNum ==false) {
      $(".result5_A").fadeIn();
      $(".button_resultA").fadeIn();
      point++;
    }else{
      $(".result5_B").fadeIn();
      $(".button_resultB").fadeIn();
    }
    $(".button_ToMain").fadeIn();
};

function ans_6(){
  var qNum = $(".question_6 ul li").length;
  $(".result").hide();
  $(".buttons").hide();
    var q1typeANum = $(".q6typeA:checked").length;
    var q1typeBNum = $(".q6typeB:checked").length;
    var q1typeCNum = $(".q6typeC:checked").length;
    var q1typeDNum = $(".q6typeD:checked").length;

    if(q1typeBNum == false && q1typeANum == false && q1typeCNum == false && q1typeDNum ==false){
      alert("Q6に未回答の問題があります");
      return;
    }

    if(q1typeBNum == true && q1typeANum == false && q1typeCNum == false && q1typeDNum ==false) {
      $(".result6_A").fadeIn();
      $(".button_resultA").fadeIn();
      point++;
    }else{
      $(".result6_B").fadeIn();
      $(".button_resultB").fadeIn();
    }
    $(".button_ToMain").fadeIn();
};

function ans_7(){
  var qNum = $(".question_7 ul li").length;
  $(".result").hide();
  $(".buttons").hide();
    var q1typeANum = $(".q7typeA:checked").length;
    var q1typeBNum = $(".q7typeB:checked").length;
    var q1typeCNum = $(".q7typeC:checked").length;
    var q1typeDNum = $(".q7typeD:checked").length;

    if(q1typeBNum == false && q1typeANum == false && q1typeCNum == false && q1typeDNum ==false){
      alert("Q7に未回答の問題があります");
      return;
    }

    if(q1typeBNum == true && q1typeANum == true && q1typeCNum == true && q1typeDNum ==true) {
      $(".result7_A").fadeIn();
      $(".button_resultA").fadeIn();
      point++;
    }else{
      $(".result7_B").fadeIn();
      $(".button_resultB").fadeIn();
    }
    $(".button_ToMain").fadeIn();
};

function ans_8(){
  var qNum = $(".question_8 ul li").length;
  $(".result").hide();
  $(".buttons").hide();
    var q1typeANum = $(".q8typeA:checked").length;
    var q1typeBNum = $(".q8typeB:checked").length;
    var q1typeCNum = $(".q8typeC:checked").length;
    var q1typeDNum = $(".q8typeD:checked").length;

    if(q1typeBNum == false && q1typeANum == false && q1typeCNum == false && q1typeDNum ==false){
      alert("Q8に未回答の問題があります");
      return;
    }

    if(q1typeBNum == false && q1typeANum == false && q1typeCNum == true && q1typeDNum ==false) {
      $(".result8_A").fadeIn();
      $(".button_resultA").fadeIn();
      point++;
    }else{
      $(".result8_B").fadeIn();
      $(".button_resultB").fadeIn();
    }
    $(".button_ToMain").fadeIn();
};

function ans_9(){
  var qNum = $(".question_9 ul li").length;
  $(".result").hide();
  $(".buttons").hide();
    var q1typeANum = $(".q9typeA:checked").length;
    var q1typeBNum = $(".q9typeB:checked").length;
    var q1typeCNum = $(".q9typeC:checked").length;
    var q1typeDNum = $(".q9typeD:checked").length;

    if(q1typeBNum == false && q1typeANum == false && q1typeCNum == false && q1typeDNum ==false){
      alert("Q9に未回答の問題があります");
      return;
    }

    if(q1typeBNum == true && q1typeANum == false && q1typeCNum == false && q1typeDNum ==false) {
      $(".result9_A").fadeIn();
      $(".button_resultA").fadeIn();
      point++;
    }else{
      $(".result9_B").fadeIn();
      $(".button_resultB").fadeIn();
    }
    $(".button_ToMain").fadeIn();
};

function ans_10(){
  var qNum = $(".question_10 ul li").length;
  $(".result").hide();
  $(".buttons").hide();
    var q1typeANum = $(".q10typeA:checked").length;
    var q1typeBNum = $(".q10typeB:checked").length;
    var q1typeCNum = $(".q10typeC:checked").length;
    var q1typeDNum = $(".q10typeD:checked").length;

    if(q1typeBNum == false && q1typeANum == false && q1typeCNum == false && q1typeDNum ==false){
      alert("Q10に未回答の問題があります");
      return;
    }

    if(q1typeBNum == false && q1typeANum == true && q1typeCNum == true && q1typeDNum ==false) {
      $(".result10_A").fadeIn();
      $(".button_resultA").fadeIn();
      point++;
    }else{
      $(".result10_B").fadeIn();
      $(".button_resultB").fadeIn();
    }
    $(".button_ToMain").fadeIn();
};
