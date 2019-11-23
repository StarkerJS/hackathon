'use strict';

//ランダムに16進数IDとカラーコードを作成
const sendidCode = (Math.random() * 0xFFFFFF | 0).toString(16);
const sendidColor = "#" + ("000000" + sendidCode).slice(-6);
document.getElementById('idCode').innerHTML = sendidCode;
document.getElementById('idColor').innerHTML = sendidColor;
console.log('ID：' + sendidCode);

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
    //現在時刻を取得
    const send_time = date.getMonth()+1 +'/' + date.getDate() + ' '+date.getHours() +':'+ date.getMinutes();
    // 投稿内容を送信
    if(message){
      const nameMessage = [userName,message,send_time,sendidCode,sendidColor];
      console.log(nameMessage);
      socket.emit('sendMessageEvent', nameMessage);
      return false;
    }
}
// サーバから受信した投稿メッセージを画面上に表示する
socket.on('receiveMessageEvent', function (data) {
  //data分解
  const userName = data[0];
  const message = data[1];
  const send_time = data[2];
  const idCode = data[3];
  const idColor = data[4];
  console.log(userName,message,send_time,idCode,idColor);
  //id照合
  if(idCode == sendidCode){
    //自分の投稿
    $('#thread').prepend(' <div class="room_message message_right">'+ userName +'＠'+ send_time +'<div class="message_box" style="border: 2px solid '+ idColor +';"><div class="message_content">'+ message +'</div></div></div><div class="message_clear"></div>');
  }else{
    //他人の投稿
    $('#thread').prepend(' <div class="room_message message_left">'+ userName +'＠'+ send_time +'<div class="message_box" style="border: 2px solid '+ idColor +';"><div class="message_content">'+ message +'</div></div></div><div class="message_clear"></div>');
  }
});
