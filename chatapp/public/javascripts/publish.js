'use strict';

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
    console.log('クライアントの入力値：' + message);
    //textareaを空にする
    $('#message').val("");
    // 投稿内容を送信
    //socket.emit('sendNameEvent', userName);
    socket.emit('sendMessageEvent', userName+'さん：'+message);
    return false;
}

// サーバから受信した投稿メッセージを画面上に表示する
socket.on('receiveMessageEvent', function (data) {
    $('#thread_others').prepend('<div class="bms_message bms_left"><div class="bms_message_box"><div class="bms_message_content"><div class="bms_message_text">' + data +'</div></div></div></div><div class="bms_clear"></div>');
});
