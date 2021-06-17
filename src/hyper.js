var newBlock = 0;
var socket;
var ignoreScrollEvents = false;

$(document).ready(function () {
  //hy_ws_url https://sws.suworld.net
  socket = io(
    hy_ws_url,
    { transports: ["websocket"] },
    { "force new connection": true, "max reconnection attempts": 1000 }
  );

  socket.on("connect", function (data) {
    socket.emit("main-init", {});
  });

  socket.on("reconnect", function (data) {
    socket.emit("main-init", {});
  });

  socket.on("node", function (data) {
    var json = JSON.parse(data);
    $("#online_node").text(number_format(json.node_count));
  });

  socket.on("block", function (data) {
    var json = JSON.parse(data);
    $("#block_height").text(number_format(json.block));

    $main_parent = $("#blist");
    $child = $main_parent.find(".lists-list-box");
    var child_count = $child.length;
    if (child_count > 14) {
      $child.each(function (index, item) {
        if (index > 13) {
          $(item).remove();
        }
      });
    }

    sub = "";
    $time_child = $main_parent.find(".block-time");
    var sysdate = new Date();
    $time_child.each(function (index, item) {
      var altime = $(item).attr("data");
      var dif_time = sysdate - altime;
      var differ = Math.ceil(dif_time / 1000);
      $(item).text("(" + differ + " secs ago)");
    });

    sub =
      "<div class='lists-list-box aalist' style='opacity:0.1;'>" +
      "<a href='" +
      hy_url +
      "/block/" +
      json.block +
      "'>" +
      "<div class='lists-text-list'>" +
      "<b><i class='fas fa-cube'></i></b><span>#" +
      json.block +
      "<span class='block-time' data='" +
      json.timestamp +
      "'>(" +
      json.passtime +
      ")</span></span><span class='lists-re'>Block Reward:" +
      json.reward +
      " SUC</span>" +
      "</div><div class='lists-text-history'>" +
      "<b><i class='fas fa-exchange-alt'></i></b><span>" +
      json.trx_count +
      " Transactions</span><span class='lists-re'>Tax Reward:" +
      json.trx_fee +
      " SUC</span>" +
      "</div></a></div>";

    $main_parent.prepend(sub);
    $main_parent.find(".lists-list-box:first").hide().show(180);
    $main_parent.find(".lists-list-box:first").animate({ opacity: "1" }, 500);
  });

  socket.on("trx", function (data) {
    var json = JSON.parse(data);
    $("#trx_todaycount").text(number_format(json.total_trx));

    $main_parent = $("#tlist");
    sub = "";
    $time_child = $main_parent.find(".text-day");
    var sysdate = new Date();
    $time_child.each(function (index, item) {
      var altime = $(item).attr("data");
      var dif_time = sysdate - altime;
      var differ = Math.ceil(dif_time / 1000);
      $(item).text("" + differ + " secs ago");
    });

    sub =
      "<div class='lists-list-box-next'>" +
      "<a href='" +
      hy_url +
      "/tx/" +
      json.hash +
      "'>" +
      "<div class='lists-text-tran'><i class='fas fa-exchange-alt'></i><span class='text-over col-sm-8 col-md-8 col-xs-8' style='padding:0'>" +
      json.hash +
      "</span>" +
      "<span class='text-day col-sm-3 col-md-3 col-xs-3' style='padding:0;' data='" +
      json.timestamp +
      "'>" +
      json.passtime +
      "</span>" +
      //"<span class='lists-re-next col-sm-3 col-md-3 col-xs-12' style='padding:0'>Trx Tax : "+json.trx_fee+" SUC</span>"+
      "</div></a></div>";

    $main_parent.prepend(sub);
    //$main_parent.find('.lists-list-box-next:first').hide().show('slow');
    //$main_parent.find('.lists-list-box-next:first').hide().show(1000);
    //$main_parent.find('.lists-list-box-next:first').animate({opacity:"1"}, 700);

    $child = $main_parent.find(".lists-list-box-next");
    var child_count = $child.length;
    if (child_count > 17) {
      $child.each(function (index, item) {
        if (index > 16) {
          $(item).remove();
        }
      });
    }
  });
});
