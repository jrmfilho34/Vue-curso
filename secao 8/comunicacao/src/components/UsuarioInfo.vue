<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuário: {{ inverterNome() }}</p>
        <p> idade é :{{ idade }}</p>
        <button @click="ReiniciarNome"> Reiniciar Nome</button>
        <button @click="reiniciarFn">Reiniciar 2</button>
    </div>
</template>

<script>
import barramento from '@/barramento'

export default {
    props:{
    	nome:{
    		type: String,
    		//required: true,
    		//default:'Anônimo'
    		default: function(){
    			return Array(10).fill(0).join(',')
    		}
    	},
    	reiniciarFn: Function,
    	idade: Number
    },
    methods:{
    	inverterNome(){
    		return this.nome.split('').reverse().join('')
    	},
    	ReiniciarNome(){
    		this.nome = 'Leonardo'
    		this.$emit('nomeMudou',this.nome)
    	}
    },
    created(){
    	barramento.quandoIdadeMudar(idade =>{
    		this.idade = idade
    	})
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
