<template>
    <div>
        <div class="column">
            <div class="hero">
                <h1 class="title is-2">
                    <b>ENTIRC</b>
                </h1>
                <h1 class="title is-4">
                    ES6 - Generators
                </h1>
                <h1 class="title is-5">
                    Meetup 11
                </h1>
            </div>
            <hr/>
            <aside class="menu aside">
                <p class="menu-label">
                    <strong>Generators</strong>
                </p>
                <ul class="menu-list">
                    <li>
                        <router-link to="/" class="nav-item" exact>Generator Matching</router-link>
                    </li>
                    <li>
                        <router-link to="/generator-control-flow" class="nav-item" exact>Generator Control-Flow</router-link>
                    </li>
                    <p class="menu-label">
                        <strong>New Built-In Methods</strong>
                    </p>
                    <ul class="menu-list">
                        <li>
                            <ul>
                                <router-link to="/obj-prop-assign" class="nav-item" exact>Object Property Assignment</router-link>
                                <router-link to="/arr-el-find" class="nav-item" exact>Array Element Finding</router-link>
                                <router-link to="/string-repeating" class="nav-item" exact>String Repeating</router-link>
                                <router-link to="/string-searching" class="nav-item" exact>String Searching</router-link>
                            </ul>
                        </li>
                    </ul>
                </ul>
            </aside>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Sidebar',
        data () {
            return {

            }
        }
    }
</script>

<style scoped>
    .is-active {
        background-color: black !important;
        color: white!important;
    }
    .menu, .hero {
        padding: 1rem;
    }
</style>
