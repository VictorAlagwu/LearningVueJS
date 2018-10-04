<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives</h1>
                <p v-text="'Your Boy is Learning How to Use Directives'"></p>
                <p v-html="'<i>Hello Wo\'rld</i>'"></p>
                <p v-local-highlight:background.delayed = "'red'">This TEXT IS supposed to be Green in color</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'local-highlight': {
                bind(el, binding, vnode) {
                     var delay = 0;
                    if(binding.modifiers['delayed']){
                        delay = 3000;
                    }   
                    setTimeout(() => {
                    if (binding.arg == 'background') {
                        el.style.backgroundColor = binding.value;
                    } else {
                        el.style.color = binding.value;
                    }
                    }, delay);
                }
            }
        }
    }
</script>

<style>

</style>
