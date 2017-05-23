<template>
    <div>
        <div class="columns">
            <sidebar></sidebar>
            <div class="column">
                <div class="column">
                    <div class="hero is-danger">
                        <div class="hero-body">
                            <div class="container">
                                <h1 class="title is-4">Array Element Finding</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="content">
                        Novas funções <b>find() e findIndex()</b> para encontrar respectivamente um 
                        elemento em um array e o indice do elemento encontrado.
                    </div>
                    <div class="content">
                        <button @click="arrElFind" class="button is-small is-danger">Executar</button>
                    </div>
                    <div class="content">
                        <pre>
           /**
            * ES5
            */

            let names1 = ["angelo", "helton", "michel"]
            
            // console.log(names1.filter(name => name.length > 4))

           /**
            * ES6 - find
            */

            let names2 = ["paulo", "angelo", "helton", "michel"]

            console.log(names2.find(v => v.length > 5))

           /**
            * ES6 - findIndex
            */

            console.log(names2.findIndex(i => i.length > 5))
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Sidebar from '../shared-comps/Sidebar.vue'
    export default {
        name : '',
        data() {
            return {
                title : 'Title'
            }
        },
        mounted() {
            setTimeout( () => {
                console.clear()
            })
        },
        methods : {
            arrElFind() {
                
                console.clear()

                /**
                 * ES5
                 */

                 let names1 = ["angelo", "helton", "michel", "facebookson"]
                 
                 // console.log(names1.filter(name => name.length > 6))



                 /**
                  * ES6 - find
                  */

                 let names2 = ["angelo", "facebookson", "helton", "michel"]
                 // console.log(names2.find(v => v.length > 5))




                /**
                 * ES6 - findIndex
                 */

                 console.log(names2.findIndex(i => i.length > 6))

            }
        },
        components: {
            Sidebar
        }
    }
</script>