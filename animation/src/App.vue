<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <button class="btn btn-lg btn-primary" @click="show = !show">
                    Show Alert
                </button>
                <br><br>
                <transition name="fade">
                    <p class="alert alert-info" v-if="show">This is an alert</p>
                </transition>
                <transition name="slide">
                    <p class="alert alert-info" v-if="show">Slide Show</p>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: false,
            }
        }
    }
</script>

<style>
    .fade-enter {
        opacity: 0;
    }
    .fade-enter-active {
        transition: opacity 1s;
    }
    .fade-leave {
        /* opacity: 1; */
    }
    .fade-leave-active {
        transition: opacity 1s;
        opacity: 0;
    }

    .slide-enter {
        /* transform: translateY(20px); */
    }
    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
        transition: opacity .5s;
    }
    .slide-leave {

    }
    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
        transition: opacity 1s;
    }

    @keyframes slide-in {
        from {
            transform: translateY(20px);
        }
        to {
            transform: translateY(0);
        }
    }

    @keyframes slide-out {
        to {
            transform: translateY(0);
        }
        from {
            transform: translateY(20px);
        }
        
    }
</style>
