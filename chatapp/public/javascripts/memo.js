'use strict';

//休止機能
function pause(){
  //休止
  if ($('#pause_btn').attr('aria-pressed') === 'false'){
    document.getElementById('room_thread').style.visibility = 'hidden';
    document.getElementById('message').style.visibility = 'hidden';
    document.getElementById('submit_btn').style.visibility = 'hidden';
    document.getElementById('pause_btn').value = '再開する';
  } else {
    //再開
    document.getElementById('room_thread').style.visibility = 'visible';
    document.getElementById('message').style.visibility = 'visible';
    document.getElementById('submit_btn').style.visibility = 'visible';
    document.getElementById('pause_btn').value = '休止する';
  }
}

// メモを画面上に表示する
var date = new Date();
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
