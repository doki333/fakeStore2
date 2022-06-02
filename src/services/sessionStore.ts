import engine from 'store/src/store-engine'
import storage from 'store/storages/sessionStorage'

export const newStore = engine.createStore([storage])
