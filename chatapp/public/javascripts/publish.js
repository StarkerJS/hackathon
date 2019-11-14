'use strict';

// socket.ioの処理開始
const socket = io.connect();

function getValueN() {
    const textNValue = $('#userName').val();
    return textNValue;
}

function getValueM() {
    const textMValue = $('#message').val();
    return textMValue;
}

// 投稿メッセージをサーバに送信する
function publish() {
    // ユーザ名を取得
    const userName = getValueN();
    // 入力されたメッセージを取得
    const message = getValueM();
    // 投稿内容を送信
    socket.emit('sendNameEvent', userName);
    socket.emit('sendMessageEvent', message);
    return false;
}

// サーバから受信した投稿メッセージを画面上に表示する
socket.on('receiveMessageEvent', function (data) {
    $('#message').prepend('<p>' + data +'</p>');
});
