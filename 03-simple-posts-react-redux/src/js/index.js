import { addArticle } from '../actions/index'
import store from '../store/index'

window.store = store;
window.addArticle = addArticle;