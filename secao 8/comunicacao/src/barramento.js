import Vue from 'vue'
export default new Vue({
	methods:{
		alterarIdade(idade){
           this.$emit('mudou',idade)
		},
		quandoIdadeMudar(callback){
			this.$on('mudou',callback)
		}
	}
})