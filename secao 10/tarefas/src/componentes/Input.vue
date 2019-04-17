<template>
<v-layout>
	<v-flex xs10 sm5 offset-sm4>
		<v-text-field
		v-model="tarefa"
		@keydown.enter="newTask"
		label="Digite uma nova tarefa"
		clear-icon="mdi-close-circle"
		>
		</v-text-field>
       	</v-flex>
	<v-flex xs2>
	   <v-btn small color="primary" class="text-xs-center" @click="newTask()">Nova tarefa</v-btn>
	</v-flex>
</v-layout>
</template>
<script>
import barramento from '@/barramento'
 export default{
    data(){
      return{
          tarefa:'',
      }
    },
    methods:{
    	newTask(){
    		barramento.escutaInput(this.tarefa)
    		this.tarefa = ''
    	}
    }
}
  
</script>