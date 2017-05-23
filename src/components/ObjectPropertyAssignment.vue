<template>
    <div>
        <div class="columns">
            <sidebar></sidebar>
            <div class="column">
                <div class="column">
                    <div class="hero is-success">
                        <div class="hero-body">
                            <div class="container">
                                <h1 class="title is-4">Object Property Assignment</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="content">
                        <button @click="objPropAssign" class="button is-small is-success">Executar</button>
                    </div>
                    <div class="content">
                        <pre>
        let dst  = { quux: 0 }
        
        let src1 = { foo: 1, bar: 2 }
        
        let src2 = { foo: 3, baz: 4 }
        
        Object.assign(dst, src1, src2)
        
        console.log(dst.quux === 0) // true
        
        console.log(dst.foo  === 3) // true
        
        console.log(dst.bar  === 2) // true
        
        console.log(dst.baz  === 4) // true
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
        name: 'ObjPropAssign',
        data() {
            return {
                title : 'Title'
            }
        },
        components: {
            Sidebar
        },
        mounted() {
            setTimeout( () => { console.clear() })
        },
        methods: {
            objPropAssign(){

                console.clear()

                
                
                
                /**
                 * ES5
                 * Modo Sofrência
                 **/

                /*
                let nomeCompleto  = {}
                
                let n = { nome: 'angelo rogério' }
                
                let s = { sobrenome: 'rubin' }

                Object.keys(n).forEach( function(k) { 
                    nomeCompleto[k] = n[k] 
                })

                Object.keys(s).forEach( k => nomeCompleto[k] = s[k] )

                console.log(nomeCompleto)
                */






                /**
                 * ES6
                 * Modo Mágico
                 **/
                
                
                let nomeCompleto  = {}
                
                let n = { nome: 'angelo rogério' }
                
                let s = { sobrenome: 'rubin' }

                let i = { idade: 40 }
                
                Object.assign(nomeCompleto, n, s, i)
                
                console.log(nomeCompleto)
            
                
                
            }
        }
    }
</script>