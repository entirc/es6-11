<template>
    <div>
        <div class="columns">
            <sidebar></sidebar>
            <div class="column">
                <div class="column">
                    <div class="hero is-warning">
                        <div class="hero-body">
                            <div class="container">
                                <h1 class="title is-4"> {{ title }}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="content">
                        <p>Uma vantagem é que podemos utilizar generator function com as várias construções 
                        da linguagem, tais como:</p>
                        <ol>
                            <li>For ... Of</li>
                            <li>Destructuring</li>
                            <li>Spread Operator</li>
                        </ol>
                    </div>
                    <div class="content">
                        <button @click="genMatch" class="button is-small is-warning">Executar</button>
                    </div>
                    <pre>
        let fibonacci = function * (number) {

            let pre = 0, cur = 1

            while (number-- > 0) {
                [ pre, cur ] = [ cur, pre + cur ]
                yield cur
            }

        }

        for (let n of fibonacci(10))

        let numbers = [ ...fibonacci(10) ]

        let [ n1, n2, n3, ...others ] = fibonacci(10)
                        </pre>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Sidebar from '../shared-comps/Sidebar.vue'
    export default {
        name: 'Generator',
        data() {
            return {
                title: 'Generator Matching'
            }
        },
        mounted() {
            setTimeout( () => { console.clear() })
        },
        methods: {

            genMatch() {

                console.clear()

                let fibonacci = function * (n) {

                    let pre = 0,
                        cur = 1

                    while (n-- > 0) {

                        [pre, cur] = [cur, pre + cur]

                        yield cur

                    }

                }



                /*****************************
                    Exemplo 1
                 */

                let objGen = fibonacci(3)

                
                // console.log(objGen.next().value)
                // console.log(objGen.next().value)
                // console.log(objGen.next().value)
                // console.log(objGen.next().value)
                










                /*****************************
                    Exemplo 2
                 */


                let obj2 = { }

                Object.defineProperties(obj2, {
                    'c' : {
                        value: 1,
                        enumerable: false
                    },
                    'd' : {
                        value: 2,
                        enumerable: true
                    }
                })

                for(let index in fibonacci(5).next().value) {

                  // console.log(index)
                
                }

















                /*****************************
                    Exemplo 3
                 */

                for (let n of fibonacci(7)) {

                  // console.log(n)

                }
































                /*****************************
                    Exemplo 4
                 */

                let objGen2 = fibonacci(10)

                let [ n1, n2, n3, ...others ] = objGen2

                console.log(n1)
                console.log(n2)
                console.log(n3)
                console.log(others)

            }

        },
        components: {
            Sidebar
        }
    }
</script>
