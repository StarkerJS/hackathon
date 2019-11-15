'use strict';

module.exports = function (socket) {
    // 退室メッセージをクライアントに送信する
    socket.on('outuserName', function (data) {
      socket.broadcast.emit('outuserName', data);
    });
};
