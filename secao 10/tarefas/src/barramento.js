import Vue from 'vue'
export default new Vue({
	methods:{
		escutaInput(tarefa){
           this.$emit('mudou',tarefa)
		},
		recebeInput(callback){
			this.$on('mudou',callback)
		},
		enviaTamanho(tarefa){
           this.$emit('tamanho',tarefa)
		},
		recebeTamanho(callback){
			this.$on('tamanho',callback)
		},
		enviaTarefaRealizada(realizada){
			this.$emit('realiza',realizada)
		},
		recebeTarefasRealizadas(callback){
			this.$emit('realiza',callback)
		}
	}
})