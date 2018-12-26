

var vm = new Vue({  
  el: '#app', 
  data: {
    davinciApi : window.davinciApi.data,
    page: (localStorage.page || 'app-page-home'),
    comunicatiLetti     : JSON.parse(localStorage.comunicatiLetti     || '[]'),
    comunicatiPreferiti : JSON.parse(localStorage.comunicatiPreferiti || '[]'),
    menu: {
      image: 'https://monaca.io/img/logos/download_image_onsenui_01.png', 
      categories: [ {
          name: "",
          elements:[
            {name: "Home",   icon:"md-home",     page:"app-page-home"},    
            {name: "Agenda", icon:"md-calendar", page:"app-page-agenda"},    
            {name: "Orari",  icon:"md-time"},      
          ]
        }, {
          name: "comunicati",
          elements:[
            {name: "Studenti",  icon:"md-graduation-cap", page:"app-page-comunicati-studenti"},      
            {name: "Genitori",  icon:"md-accounts",       page:"app-page-comunicati-genitori"},      
            {name: "Docenti",   icon:"md-case",           page:"app-page-comunicati-docenti"}, 
            {name: "Preferiti",   icon:"md-star"},                 
          ]
        }, {
          name: "utilità",
          elements:[
            {name: "Impostazioni", icon:"md-settings", page:"app-page-impostazioni"}
          ]
        }, ],
    } 
    
  },
  watch: {
    comunicatiLetti    () { localStorage.comunicatiLetti     = JSON.stringify(this.comunicatiLetti    )  },
    comunicatiPreferiti() { localStorage.comunicatiPreferiti = JSON.stringify(this.comunicatiPreferiti)  },
    page               () { localStorage.page                = this.page                          },

  },
})

davinciApi.refresh()


