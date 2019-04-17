<template>
	<v-app>
		<v-container>
			<v-layout/>
				 <Barra></Barra>
				 <Input></Input>
				 <Cartao></Cartao>
			</v-layout>
		</v-container>
  	</v-app>
</template>

<script>
import Barra from './componentes/Barra'
import Input from './componentes/Input'
import Cartao from './componentes/Cartao'

export default {
  name: 'App',
  components: {
     Barra,
     Input,
     Cartao,
  },
  data () {
    return {
      //
    }
  }
}
</script>
