import Vue from 'vue'
export default new Vue({
	methods:{
		usuario(usuario){
           this.$emit('mudou',usuario)
		},
		escolhaUsuario(callback){
			this.$on('mudou',callback)
		}
	}
})