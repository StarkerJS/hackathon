'use strict';

module.exports = function (socket) {
    // 入室メッセージをクライアントに送信する
    socket.on('userName', function (data) {
      io.socket.emit('userName', data);
    });
};
