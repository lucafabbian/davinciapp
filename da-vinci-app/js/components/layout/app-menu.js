import AppMenuData from './app-menu-data.js'
console.log(AppMenuData)
export default {
  template: `<ons-page>
    <div class="profile-pic">
      <img :src="image" style="display: block; max-width: 100%;">
    </div>      
    <ons-list>
      <span v-for="category in categories">
        <span v-if=" category.name != ''">
          <br><ons-list-title>{{ category.name }}</ons-list-title>
        </span>
        <ons-list-item v-for="element in category.elements" v-on:click="changePage(element)" tappable>
          <div class="left">
            <ons-icon fixed-width class="list-item__icon" :icon="element.icon"></ons-icon>
          </div>
          <div class="center">{{ element.name }}</div>
        </ons-list-item>
      </span>
    </ons-list>
  </ons-page>`,
  data: function(){
    return AppMenuData
  },
  methods: {
    changePage: function (page) {
      this.$root.page = page
      document.getElementById('menu').close()
    }
  }
}