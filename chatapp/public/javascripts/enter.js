'use strict';
/*
function getValueN() {
    const textNValue = $('#userName').val();
    return textNValue;
}
http.createServer(function(req, res) {
    var userName = '';
      //namedata変数に入れ込み
      req.on('userName', function(chunk) {
        userName += chunk
      });
      //endイベント
      req.on('end', function() {
        console.log(userName);
        res.end();
      });
});
const userName = createServer();
*/

// 入室メッセージをサーバに送信する
// ユーザ名取得
console.log('[Fn Enter] Will be posted.');
const inuserName = $('#userName').val();
// 入室メッセージイベントを送信する
socket.emit('inuserName', inuserName);
// サーバから受信した入室メッセージを画面上に表示する
socket.on('inuserName', function (data) {
    $('#thread').prepend('<div class="message_center"><div class="inmessage_box">'+ data +'さんが入室しました。</div></div><div class="message_clear"></div>');
});
