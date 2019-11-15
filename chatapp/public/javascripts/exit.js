'use strict';

// 退室メッセージをサーバに送信する
function exit() {
    console.log('[Fn Exit] Will be posted.');
    // ユーザ名取得
    const outuserName = $('#userName').val();
    // 退室メッセージイベントを送信する
    socket.emit('outuserName', outuserName);
    // 150ms遅延
    window.setTimeout(exitRoom,150);
}

//退室
function exitRoom() {
    console.log('[Exit]');
    location.href = '/';
}

// サーバから受信した退室メッセージを画面上に表示する
socket.on('outuserName', function (data) {
    $('#thread').prepend('<p>' + data + 'さんが退室しました。</p>');
});
