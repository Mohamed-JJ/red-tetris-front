const { Server } = require('socket.io')
const io = new Server(3001, { cors: { origin: "*" } })

io.on('connection', (socket) => {
  console.log('client connected:', socket.id)

  socket.on('join', (data) => {
    console.log('---------------->>>>join:', data)
    
    socket.emit('playerList', [{ id: socket.id, name: data.name }])
    // socket.emit('joined', { success: true, room: data.room, name: data.name })
  })

  
  socket.on('boardUpdate', (data) => {
  
    io.emit('spectra', [ [0,1,2,3,4,5,6,7,8,9] ])
  })
})

console.log('Mock Socket.io server running on 3001')
