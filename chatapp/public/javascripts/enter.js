'use strict';

// 入室メッセージをサーバに送信する
// 入力されたユーザ名を取得する
const userName = 'userName';
// 入室メッセージイベントを送信する
  socket.emit('userName', message);

// サーバから受信した入室メッセージを画面上に表示する
socket.on('userName', function (data) {
    $('#thread').prepend('<p>' + data + '</p>');
});
