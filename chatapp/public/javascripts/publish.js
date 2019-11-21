'use strict';

// socket.ioの処理開始
//const socket = io.connect();

function getValueN() {
    const textNValue = $('#userName').val();
    return textNValue;
}

function getValueM() {
    const textMValue = $('#message').val();
    console.log('クライアントの入力値：' + textMValue);
    if(textMValue !== ""){
      //textareaを空にする
      $('#message').val("");
      return textMValue;
    }else{
      alert("文字を入力してください。")
      return false;
    }
}

// 投稿メッセージをサーバに送信する
function publish() {
    // ユーザ名を取得
    const userName = getValueN();
    // 入力されたメッセージを取得
    const message = getValueM()
    if(message){
      // 投稿内容を送信
      //socket.emit('sendNameEvent', userName);
      const nameMessage = [userName,message];
      console.log(nameMessage);
      socket.emit('sendMessageEvent', nameMessage);
      return false;
    }
}

// サーバから受信した投稿メッセージを画面上に表示する
socket.on('receiveMessageEvent', function (data) {
    $('#thread').prepend('<p>' + data +'</p>');
});
