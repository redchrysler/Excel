import {DomListener} from '@core/DomListener'

export class ExcelComponent extends DomListener {
  // Возвращает шаблон компонента
    constructor($root, options = {}) {
        super($root, options.listeners )
        this.name = options.name || ""
        this.emitter = options.emitter
        this.unsubscribers = []

        this.prepare()
    }
    // Настраиваем компонент до init
    prepare() {}

    // Возвращаем пустой шаблон компонента
    toHTML() {
        return ''
  }
    // Уведомляем слушателей про событие event
    $emit(event, ...args) {
        this.emitter.emit(event, ...args)
    }

    // Подписываемся на событие event
    $on(event, func) {
        const unsub = this.emitter.subscribe(event, func)
        this.unsubscribers.push(unsub)
    }

    // Инициализируем компонент
    // Добавляем DOM слушателей
    init() {
        this.initDOMListeners()
    }

    // Удаляем компонент, чистим слушателей
    destroy() {
        this.removeDOMListeners()
        this.unsubscribers.forEach( (unsub) => unsub())
    }
}
