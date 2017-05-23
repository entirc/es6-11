<template>
    <div>
        <div class="columns">
            <sidebar></sidebar>
            <div class="column">
                <div class="column">
                    <div class="hero is-warning">
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
                            Novos métodos de string específicos para procurar por uma substring.
                        </p>
                        <button @click="strSearch" class="button is-small is-warning">Executar</button>
                        </div>
                        <div class="content">
                        <pre>
        let str = "ECMAScript is awesome !"

        str.startsWith("ECMAScript")

        str.includes("is")
        
        str.startsWith("awesome", 14)
        
        str.endsWith("!")
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
        name: '',
        data() {
            return {
                title : 'String Searching'
            }
        },
        components: {
            Sidebar
        },
        methods: {
            
            strSearch() {
                
                console.clear()

                let str = "ECMAScript is awesome !"

                console.log(str.startsWith("ECMAScript") )
                console.log(str.includes("is"))
                console.log(str.startsWith("awesome", 14))
                console.log(str.endsWith("!") )
                
            }
        }
    }
</script>
