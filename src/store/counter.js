export default {

  // Состояние приложения
  state: {
    counter: 0
  },

  // Изменение state, с помощию какихто данных Нельзя использовать асинхронность,
  // типа сетТимеаутов
  mutations: {
    changeCounter(state, payload) {
        state.counter += payload
    }
  },

  // Действия над default state и отрисовка
  getters: {
    computedCounter(state) {
        return state.counter * 1
    }
  },

  // Основная логика(работа с бд, сервером и тд), ассинхронность
  actions: {
    // Первый параметр context
    asyncChangeCounter({
        commit
    }, payload) {
        setTimeout(() => {
            // Вызываем мутацию
            commit('changeCounter', payload.counterValue)
        }, payload.timer)
    }
  }

}
