<template>
    <div class="layout">
        <header class="g-hd">
            <router-link to="/test/tab">tab</router-link>
            <router-link to="/test/qqFriends">qqFriends</router-link>
            <router-link to="/directives">driective</router-link>
            <router-link to="/imgLazy">vue-图片懒加载</router-link>
        </header>
        <div class="g-container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

export default {
    name: 'layout',
    data () {
        return {}
    },
    created: function () {
    },
    computed: {
    },
    methods: {
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.g-hd {
    height: 70px;
    background: #324057;
    min-width: 875px;
}
.g-hd a {
    color: #fff;
}
.logo {
    height: 60px;
}

.login {
    line-height: 40px;
}
</style>