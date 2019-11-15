'use strict';

module.exports = function (socket) {
    // 入室メッセージをクライアントに送信する
    socket.on('inuserName', function (data) {
      socket.broadcast.emit('inuserName', data);
      console.log('socket.on inuserName');
    });
};
