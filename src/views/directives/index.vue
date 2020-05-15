<template>
    <div>
        <h2>directives 指令</h2>

        <input type="text" v-focus value="一进入页面focus 如果有多个input 最后一个fucus" />

        <div v-demo:foo.a.b="message"></div>
        <div v-demo2:foo.a.b="message2"></div>

        <div class="fix" v-fixed:[direction]="400">fixed 动态参数</div>

        <div v-demo3="{name:'张三',age:12}"></div>

        <div v-permission-click>button</div>

        <div v-loading="loading"></div>
        <div @click="showLoading">change loading status</div>
    </div>
</template>

<script>
import store from '@/store'
export default {
    data () {
        return {
            message: '通过{bind(el,binding,vnode)}方法',
            message2: '通过(el,binding,vnode){}方法  [bind 和  update 触发相同行为]',
            direction: 'left',
            loading: false
        }
    },
    methods: {
        showLoading () {
            this.loading = true
            let timer = setTimeout(() => {
                this.loading = false
                // clearTimeout(timer)
            }, 1000)
        }
    },
    directives: {
        focus: {
            inserted (el) {
                el.focus()
            }
        },
        demo: {
            bind (el, binding, vnode) {
                let s = JSON.stringify
                el.innerHTML = `
                name: ${s(binding.name)},
                value: ${s(binding.value)},
                expression: ${s(binding.expression)},
                modifiers: ${s(binding.modifiers)},
                argument: ${s(binding.arg)}
                `
            }
        },
        demo2 (el, binding, vnode) {
            let s = JSON.stringify
            el.innerHTML = `
                name: ${s(binding.name)},
                value: ${s(binding.value)},
                expression: ${s(binding.expression)},
                modifiers: ${s(binding.modifiers)},
                argument: ${s(binding.arg)}
                `
        },
        fixed: {
            bind (el, binding, vnode) {
                el.style.position = 'fixed'
                // console.log(binding.arg)
                let s = binding.arg == 'left' ? 'left' : 'top'
                el.style[s] = binding.value + 'px'
            }
        },
        demo3 (el, binding, vnode) {
            el.innerHTML = `
                value: ${JSON.stringify(binding.value)},
                value.name: ${binding.value.name},
                value.age: ${binding.value.age}
            `
        },
        permissionClick: {
            bind (el, binding, vnode) {
                el.addEventListener('click', (e) => {
                    if (!store.getters.isLogin) {
                        store.dispatch('user/showLogin')
                    } else {
                        typeof binding.value === 'function' && binding.value()
                    }
                })
            }
        },
        loading: {
            update (el, binding, vnode) {
                if (binding.value) {
                    const div = document.createElement('div')
                    div.innerText = '加载中...'
                    div.setAttribute('id', 'loading')
                    div.style.position = 'absolute'
                    div.style.left = 0
                    div.style.top = 0
                    div.style.width = '100%'
                    div.style.height = '100%'
                    div.style.display = 'flex'
                    div.style.justifyContent = 'center'
                    div.style.alignItems = 'center'
                    div.style.color = 'white'
                    div.style.background = 'rgba(0, 0, 0, .7)'
                    document.body.append(div)
                } else {
                    document.body.removeChild(document.getElementById('loading'))
                }
            }
        }
    }
}
</script>

<style>
</style>
