'use strict';

// チャットルームに入室する
function enter() {
    // 入力されたユーザ名を取得する
    const userName = document.getElementById('userName').value;
    // ユーザ名が未入力でないかチェックする
    if (userName !=""){
      $('form').submit();
    }else{
    alart("ERR0R")
    }
}
