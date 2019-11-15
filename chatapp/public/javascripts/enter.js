'use strict';

//function getValueN() {
//    const textNValue = $('#userName').val();
//    return textNValue;
//}

// 入室メッセージをサーバに送信する


//http.createServer(function(req, res) {
//    var userName = '';
      //namedata変数に入れ込み
//      req.on('userName', function(chunk) {
//        userName += chunk
//      });
      //endイベント発生
//      req.on('end', function() {
//        console.log(userName);
//        res.end();
//      });
//});

//const userName = createServer();
const userName = $('#userName').val();

// 入室メッセージイベントを送信する
  socket.emit('userName', userName);
// サーバから受信した入室メッセージを画面上に表示する
socket.on('userName', function (data) {
    $('#thread').prepend('<p>' + data + 'さんが入室しました。</p>');
});
