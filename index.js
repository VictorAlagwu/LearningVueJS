new Vue({
    el: '#app',
    data: {
        attachRed: false,
        attachBlue: false,
        attachGreen: false,
        color: 'black'
    },
    computed: {
        redBlueClass: function(){
            return{
                red: this.attachRed,
                blue: !this.attachRed
            }
        }
    }
});

