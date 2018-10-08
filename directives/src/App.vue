<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives</h1>
                <p v-text="'Your Boy is Learning How to Use Directives'"></p>
                <!-- <p v-highlight="'<i>Hello Wo\'rld</i>'"></p> -->
                <p v-local-highlight:background.delayed.blink = "{mainColor: 'red', secondColor: 'green', delay: 500}">This TEXT IS supposed to be Green in color</p>
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
                    if(binding.modifiers['delayed']) {
                        delay = 3000;
                    } 
                    if(binding.modifiers['blink']) {
                        let mainColor = binding.value.mainColor;
                        let secondColor = binding.value.secondColor;
                        let currectColor = mainColor;    
                        setTimeout(() => {
                            setInterval(() => {
                                currectColor == secondColor ? currectColor = mainColor : currectColor = secondColor;
                                if (binding.arg == 'background') {
                                    el.style.backgroundColor = currectColor;
                                } else {
                                    el.style.color = currectColor;
                                }

                            }, binding.value.delay);
                        }, delay);
                    } else {
                        setTimeout(() => {
                            if (binding.arg == 'background') {
                                el.style.backgroundColor = binding.value.mainColor;
                            } else {
                                el.style.color = binding.value.mainColor;
                            }
                        }, delay);
                    }
                    
                }
            }
        }
    }
</script>

<style>

</style>
