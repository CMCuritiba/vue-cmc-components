<template>
    <div class="page-header">
        <img :src="brasao" width="70px" style="float:left; margin-right:10px;margin-top:-20px;margin-left:10px;"/>
        <h1 style="margin-top:-10px;">{{ titulo }}</h1>
    </div>
</template>

<script>
    import brasao from "../img/brasao_transparente.png";

    export default {
        name: 'cabecalho',
        props: {
            titulo: String
        },
        data: function() {
            return {
                brasao: brasao
            }
        },
    }
</script>

<style>
    .cabecalho {
        margin: 0 auto;
        padding: 10px;
        max-width: 100%;
    }
</style>

