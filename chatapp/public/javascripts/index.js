'use strict';
Push.Permission.request();
// チャットルームに入室する
function enter() {
    // 入力されたユーザ名を取得する
    const userName = $('#userName').val();
    // ユーザ名が未入力でないかチェックする
    if (userName !==''){
      console.log('[Name Check] <Success> UserName:'+userName);
      $('form').submit();
    }else{
      console.log('[Name Check] <Failure> UserName:Null');
      alert('ユーザ名を入力してください。');
    }
}
