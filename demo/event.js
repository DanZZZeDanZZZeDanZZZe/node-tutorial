const EventEmmitter = require('events')

// const emitter = new EventEmmitter()

// emitter.on('anything', data => {
//     console.log('ON: anything', data)
// })

// emitter.emit('anything', {a: 1})
// emitter.emit('anything', {b: 2})

class Dispatcher extends EventEmmitter {
    subscribe(eventName, cd) {
        console.log('[Subscribe...]')
        this.on(eventName, cd)
    }

    dispatch(eventName, data) {
        console.log('[Dispatching...]')
        this.emit(eventName, data)
    }
}

const dis = new Dispatcher()

dis.subscribe('aa', data => {
    console.log('aa', data)
})

dis.dispatch('aa', {aa: 22})