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
    $('#thread').prepend('<p>' + data + 'さんが入室しました。</p>');
    $('#thread').prepend('<div class="room_message bms_center"><div class="bms_message_box"><div class="bms_message_content"><div class="bms_message_text">'+ data +'さんが入室しました。</div></div></div></div><div class="bms_clear"></div>');
});
