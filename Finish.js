$(function() {
  $('.btn-gNav').on("click", function() {

    $(this).toggleClass('open');
    $('#gNav').toggleClass('open');
  });

});

// メニューをクリックされたら、非表示にする
$(function() {
  $('.gNav-menu li a').on("click", function() {
    $('#gNav').removeClass('open');
  });
});

$(function() {
  $('#gNav .gNav-menu li a').on("click", function() {
    $(this).toggleClass('open');
    $('#gNav').toggleClass('open');
    $('#hamburger .btn-gNav.open').toggleClass('open');
  });
});

$(function() {
  $('.gNav-menu').on("click", function() {
    $('#gNav').removeClass('open');
  });
});

/*2022 */
var point = 0;
$(function(){
  $(".result").hide();
  $(".buttons").hide();

  //ボタンがクリックされた時
  $("button").click(function(){
    var qNum = $(".question_1 ul li").length;
    $(".result").hide();
    $(".buttons").hide();
    if( $("ul li input:checked").length < qNum ){
      alert("未回答の問題があります");

    } else {
      var q1typeANum = $(".q1typeA:checked").length;
      var q1typeBNum = $(".q1typeB:checked").length;
      var q1typeCNum = $(".q1typeC:checked").length;
      var q1typeDNum = $(".q1typeD:checked").length;

      if(q1typeBNum == true && q1typeANum == true && q1typeCNum == false && q1typeDNum ==false) {
        $(".resultA").fadeIn();
        $(".button_resultA").fadeIn();
        point++;
      }else{
        $(".resultB").fadeIn();
        $(".button_resultB").fadeIn();
      }
      $(".button_ToMain").fadeIn();
    }
  });
});

