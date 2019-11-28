'use strict';
Push.Permission.request();
// チャットルームに入室する
function enter() {
    // 入力されたユーザ名を取得する
    const userName = $('#userName').val();
    // ユーザ名が未入力でないかチェックする
    if (userName !==''){
      console.log('[Name Check] <Success> UserName:'+userName);
      //パスワードが合っているかチェックする
      if(check_pass()){
        $('form').submit();
      }
    }else{
      console.log('[Name Check] <Failure> UserName:Null');
      alert('ユーザ名を入力してください。');
    }
}
///a
function check_pass(){
  //Passwordの設定
  const roomPass = 'rks';
  //Passwordの取得
  const insertPass = $('#inputPassword').val();
  //console.log('GET_insertPass:'+insertPass);
  //Password_check
  if(insertPass === roomPass){
    console.log('[Password Check] <Success>');
    return true;
  }else{
    console.log('[Password Check] <Failure>');
    alert('正しいパスワードを入力してください。');
    //パスワードの入力フォームを空にする
    $('#inputPassword').val("");
    return false;
  }
}
