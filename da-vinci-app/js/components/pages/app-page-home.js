export default {
   template: `
    <app-page title="Home">
      <template slot="actions">
        <app-nav-action icon="md-menu" v-on:action="alert('ciao')"></app-nav-action>
      </template>

      <p style="text-align: center; opacity: 0.6; padding-top: 20px;">
        Swipe right to open the menu!
      </p>
      <a href="./res/pdfjs/web/viewer.html">pdf</a>

    </app-page>`
}