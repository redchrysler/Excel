export class Emitter {
    constructor() {
    this.listeners = {}
    }
    // or dispatch, fire, trigger
    // Уведомляем слушателей если они есть
    // 'formula:done'
    // table.emit('table:select', {a: 1}
    emit(event, ...args) {
        if (!Array.isArray(this.listeners[event])) {
            return false
        }
        this.listeners[event].forEach( (listener) => {
            listener(...args)
        })
        }


    // or on, listen - подписываемся на уведомления
    // или добавляем нового слушателя
    // formula.subscribe('table:select', () => {})
    subscribe(event, func) {
        this.listeners[event] = this.listeners[event] || [];
        this.listeners[event].push(func);
        return () => {
            this.listeners[event] = this.listeners[event].filter(
                (listener) => {
                    listener !== func
                }
            )
        }
    }
}

// const emitter = new Emitter();
// emitter.subscribe('word', (data) => {
//     console.log('Sub:', data)
// })
