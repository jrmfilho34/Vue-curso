<template>
<div class="contador">
	<span>{{contador}}</span>
	<button @click="adicionar">+</button>
	<button @click="subtrair">-</button>
</div>
</template>
<script >
export default{
    data(){
      return{
        contador:0,
      }
    },
    methods:{
    	adicionar(){
    		this.contador++
    	},
    	subtrair(){
    		this.contador--
    	}
    }
}
</script>
<style scoped>
.contador sapn{
	border-bottom: 1px solid #ccc;
	height: 30px;
	padding: 5px 25px;
	outline: 2px solid #c3c3c3;
}
button{
	height: 30px;
	width:30px;
	background-color: #FFF07D;
	border-radius: 20px;
	margin: 5px 5px;
}
</style>