<template>
<div class="text-xs-center">
    <v-progress-circular
      :rotate="360"
      :size="100"
      :width="15"
      :value="value"
      color="teal"
    >
      {{ value }}
    </v-progress-circular>
</div>
</template>
<script >
import barramento from '@/barramento'
export default{
    data () {
      return {
        interval: {},
        value: 0,
        quantidade:0,
        realizadas:0,
      }
    },
	created(){
		barramento.recebeTamanho(tarefa=>{
			 this.percore(tarefa)
		}),
		barramento.recebeTarefasRealizadas(tarefarealizada=>{
           this.realizadas = tarefarealizada
		})
    },
    methods:{
       
       percore(tarefa){
       	  this.realizadas= 0;
       	  for(var i = 0; i< tarefa.length; i++){
       	  	 if(!tarefa[i].ativo){
       	  	 	this.realizadas +=1
       	  	 }
       	  if(this.realizadas == 0)
       	  {
       	  	this.value = 0 ;
       	  }else{
       	  	this.value = Math.round(this.realizadas * 100/tarefa.length)
       	  }
       	  	 
       	  }
       }

    }
}
</script>
<style lang="stylus" scoped>
  .v-progress-circular
    margin: 1rem
</style>

5 100
2 x  
ex 1:

1 100
0 x
x = 0 * 100/1


