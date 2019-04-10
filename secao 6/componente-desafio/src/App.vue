<template>
	<v-app>
	  <!-- inicio menu -->
       <app-menu></app-menu>
       <!--  fim menu -->
       <!-- inicio toolbar -->
       <app-toolbar></app-toolbar>
     <!--   inicio carrosel -->
      <!-- fim carrosel -->
      <v-content>
       <app-carrosel></app-carrosel>
      </v-content>
      <!-- inicio footer -->
       <app-footer></app-footer>
		<!-- fim footer -->
	</v-app>
</template>

<script>
import Toolbar from './components/template/Toolbar.vue'

export default {
	components:{'app-toolbar':Toolbar},
	data() {
		return {

		}
	}
}
</script>
