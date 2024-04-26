import { persistStore } from 'redux-persist'
import store from './Store'

const persistor = persistStore(store)

export default persistor