<template>
    <div>
        <div class="columns">
            <sidebar></sidebar>
            <div class="column">
                <div class="column">
                    <div class="hero is-primary">
                        <div class="hero-body">
                            <div class="container">
                                <h1 class="title is-4">{{ title }}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="content">
                        <p>
                            Nova funcionalidade de repetição de strings.
                        </p>
                        <button @click="strRepeat" class="button is-small is-primary">Executar</button>
                    </div>
                    <div class="content">
                        <pre>
        let depth = 4
        console.log("foo".repeat(4 * depth))

        console.log("bar ".repeat(3))
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
        name: 'StringRepeating',
        data() {
            return {
                title : 'String Repeating'
            }
        },
        components: {
            Sidebar
        },mounted() {
            setTimeout( () => { console.clear() })
        },
        methods: {
            strRepeat(){

                console.clear()
                
                console.log("bar ".repeat(3))

                let depth = 4

                console.log("foo ".repeat(4 * depth))              

            }
        }
    }
</script>
