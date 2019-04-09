new Vue({
	el:'#desafio',
	data:{
		nome:'Miliano',
		idade: 35,
		link: 'https://marketingcomcafe.com.br/wp-content/uploads/2017/12/banco-imagens-gratis.png'
	},
	methods:{
		Midade(){
			return this.idade*3;
		},
		rondomico(){
			return Math.random();
		}
	}
})
