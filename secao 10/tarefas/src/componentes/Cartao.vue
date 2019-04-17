<template>
  <v-item-group>
    <v-container grid-list-md>
      <v-layout wrap >
    <template v-if="tarefa.length">
        <v-flex
          v-for="(n,i) in tarefa"
          :key="n.id"
          xs12
          md2
        >
		<v-card
		    class="mx-auto"
		    :color=" n.ativo ?'primary':'red lighten-1' "
		    dark
		    max-width="400"
		    @click.prevent.stop="terminaTarefa(i)"
		  >
		<v-card-title
		   @click.prevent.stop="deletar(i)"
		 >
		  <v-icon
		    small
		    right
		  >
		    delete
		  </v-icon>
		</v-card-title>
		<v-card-text class="headline font-weight-bold">
		 {{n.descricao}} {{i}}
		</v-card-text>
		</v-card>
        </v-flex>
   </template>
   <p v-else> Sua vida está em dia :)</p>
      </v-layout>
    </v-container>
  </v-item-group>
</template>
<script >
import barramento from '@/barramento'
export default{
    data(){
      return{
        message:"Cartao",
        i:0,
        tarefa:[],
      }
    },
    watch:{
    	tarefa: {
    		deep:true,
    		handler(){
    			 localStorage.setItem('tarefas', JSON.stringify(this.tarefa))
    		}
    	},
    	tarefa(antigo,novo){
    		  barramento.enviaTamanho(this.tarefa)
    	}
    },
	created(){
		const json = localStorage.getItem('tarefas')
		this.tarefa = JSON.parse(json) || []

		barramento.recebeInput(tarefa =>{
			this.adiciona(tarefa)
		})
		
    },
    methods:{
    	adiciona(tarefaA){
    		this.i += 1
    		this.tarefa.unshift({
				id: this.i,
				descricao: tarefaA,
				ativo: true,
			})
    	},
    	terminaTarefa(n){
    	 this.tarefa[n].ativo = !this.tarefa[n].ativo
    	 barramento.enviaTamanho(this.tarefa)

    	},
    	deletar(i){
    		console.log('deletar')
    		this.tarefa.splice(i,1)
    	}

    }
}
</script>