<template>
    <div class="usuario-lista">
        <table>
            <thead>
                <tr>
                    <th>#ID</th>
                    <th>Nome</th>
                    <th>Idade</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(usuario,i) in usuarios" :key="usuario.id" @click="selecionar(i)">
                    <td>{{ usuario.id }}</td>
                    <td>{{ usuario.nome }}</td>
                    <td>{{ usuario.idade }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import barramento from '@/barramento'
export default {
    props: { usuarios: Array },
    methods:{
       selecionar(i){
           this.usuarios[i]
           barramento.usuario(this.usuarios[i])
       }
    }
}
</script>

<style scoped>
    .usuario-lista {
        flex: 1;
        display: flex;
    }

    table {
        flex: 1;
        border-spacing: 0px;
        border-collapse: separate;
        border-top: 1px solid #CCC;
    }


    th, td {
        padding: 15px;
        border-bottom: 1px solid #CCC;
    }

    tbody tr:hover {
        background: rgba(0, 0, 0, 0.1);
    }
</style>
