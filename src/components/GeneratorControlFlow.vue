<template>
    <div>
        <div class="columns">
            <sidebar></sidebar>
            <div class="column">
                <div class="column">
                    <div class="hero is-info">
                        <div class="hero-body">
                            <div class="container">
                                <h1 class="title is-4"> {{ title }}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="content">
                        <p>
                           Controlando o fluxo com generators.
                        </p>
                        
                        <p>Biblioteca com fluxo de controle baseado em Generator:
                            <ul>
                                <li>
                                    <a target="_blank" href="https://github.com/tj/co">co</a>
                                </li>
                                <!--
                                <li>
                                    <a target="_blank" href="http://bluebirdjs.com/docs/getting-started.html">bluebird</a>
                                </li>
                                -->
                            </ul>
                        </p>
                        
                        <button @click="genContFlow" class="button is-small is-info">Executar</button>
                        <hr>
                        <table v-if="isActive" class="table">
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Email</th>
                            <tr v-for="data in datas">
                                <td>{{ data.id }}</td>
                                <td>{{ data.name }}</td>
                                <td>{{ data.phone }}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Sidebar from '../shared-comps/Sidebar.vue'
    import axios from 'axios'
    export default {
        name: 'GeneratorControlFlow',
        data() {
            return {
                title: 'Generator Control-Flow',
                datas: [],
                isActive: false
            }
        },
        mounted() {
            setTimeout(() => {
                // console.clear()
            })
        },
        methods: {
            genContFlow() {

                console.clear()

                 /****************************************************
                 * Exemplo 1
                 */
                let x = 1

                function * foo() {
                    x++
                    yield
                    console.log(`x: ${x}`)
                }
                
                function bar() {
                    return x++
                }
                
                let it = foo()
                // it.next()
                // console.log(x) // 2
                // bar()
                // console.log(x) // 3
                // it.next()








                /****************************************************
                 * Exemplo 2 - Controlando fluxo de requisições assíncronas 
                 * com generator function 
                 * Axios  - Biblioteca baseada em promises para requisições HTTP ( Node e Browser ) 
                 */

                function * getData () {
  
                    yield axios.get('https://jsonplaceholder.typicode.com/users/1')

                    yield axios.get('https://jsonplaceholder.typicode.com/posts/1')
                
                }

                let data = getData()

                // data.next().value.then( result => console.log( `USER : ${ result.data.name }` ))

               //  data.next().value.then( result => console.log( result.data.title ))











                /****************************************************
                 * Exemplo 3 - Promises
                 */
                
                let url = "https://jsonplaceholder.typicode.com/users"
                
                function asyncFunc() {
                    return new Promise((resolve, reject) => {
                        axios
                            .get(url)
                            .then((result) => {
                                resolve(result.data)
                            })
                            .catch((err) => {
                                reject(err)
                            })
                    })
                }
                
                asyncFunc()
                .then((data) => {
                    // this.datas = data
                    // this.isActive = true
                })

            }
        },
        components: {
            Sidebar
        }
    }
</script>
