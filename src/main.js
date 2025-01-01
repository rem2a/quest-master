//Point d'entrée de l'application
//Exécuter au lancement du server
//Taper npm run serve pour lancer
import { createApp } from 'vue'
//App.Vue est le fichier racine de l'application
import App from './App.vue'

//#app fait reference à l'element <div id="app"></div> dans le fichier index.html
createApp(App).mount('#app')
