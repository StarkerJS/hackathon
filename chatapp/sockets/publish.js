'use strict';

module.exports = function (socket, io) {
    // 投稿メッセージを送信する
    socket.on('sendMessageEvent', function (data) {
      // 全クライアントが受信するメッセージ表示イベント（receiveMessageEvent）を送信する
      io.sockets.emit('receiveMessageEvent', data);
    });
/*
    // 入力開始
    let nowTyping = 0;
	  socket.on('typingMessageEvent', function(){
		if (nowTyping <= 0) {
			io.socket.emit('typingMessageEvent', data);
		}
		nowTyping++;
		setTimeout(function(){
		nowTyping--;
		if (nowTyping <= 0) {
			io.socket.emit('typedMessageEvent');
		}
		}, 3000);
	});
  
	   // 入力完了
	   socket.on('typedMessageEvent', function(){
		 nowTyping = 0;
		 io.socket.emit('typedMessageEvent');
	});
*/
};
