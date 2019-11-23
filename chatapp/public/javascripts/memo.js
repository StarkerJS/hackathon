'use strict';
var date = new Date();

// メモを画面上に表示する
function memo() {
    // ユーザ名を取得
    const userName = $('#userName').val();
    const send_time = date.getMonth()+1 +'/' + date.getDate() + ' '+date.getHours() +':'+ date.getMinutes();
    // 入力されたメッセージを取得
    //const message = $('#message').val();

    // 入力されたメッセージを取得
    const message = getValueM()
    // メモの内容を表示
    if(message){
      $('#thread').prepend(' <div class="room_message message_right">'+ userName +'＠'+ send_time +'<div class="memo_box"><div class="message_content">'+ message +'</div></div></div><div class="message_clear"></div>');
      return false;
   }
}
