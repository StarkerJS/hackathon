'use strict';

// socket.ioの処理開始
//const socket = io.connect();
var date = new Date();

function getValueN() {
    const textNValue = $('#userName').val();
    return textNValue;
}

function getValueM() {
    const message = $('#message').val();
    console.log('クライアントの入力値：' + message);
    if(message !== ""){
      //replace 改行コード⇒＜br＞
      const replace_message = message.replace(/\r\n|\r|\n/g, '<br>');
      console.log('改行⇒〈br〉：'+ replace_message);
      //textareaを空にする
      $('#message').val("");
      return replace_message;
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
    const message = getValueM();
    const send_time = date.getMonth()+1 +'/' + date.getDate() + ' '+date.getHours() +':'+ date.getMinutes();
    console.log(send_time);
    if(message){
      // 投稿内容を送信
      //socket.emit('sendNameEvent', userName);

      const nameMessage = [userName,message,send_time];
      console.log(nameMessage);
      socket.emit('sendMessageEvent', nameMessage);
      return false;
    }
}
/////aoaajfaeijfia
// サーバから受信した投稿メッセージを画面上に表示する
socket.on('receiveMessageEvent', function (data) {
  const userName = data[0];
  const message = data[1];
  const send_time = data[2];

  if(userName == getValueN()){
    $('#thread').prepend(' <div class="room_message message_right">'+ userName +'＠'+ send_time +'<div class="message_box"><div class="message_content">'+ message +'</div></div></div><div class="message_clear"></div>');
  }else{
    $('#thread').prepend(' <div class="room_message message_left">'+ userName +'＠'+ send_time +'<div class="message_box"><div class="message_content">'+ message +'</div></div></div><div class="message_clear"></div>');
  }
});
