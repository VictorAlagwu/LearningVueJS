var app = new Vue({
    el: '#app',
    data: {
        title: 'Hellow World',
        name: 'Victor Alagwu',
        position: 'Junior Software Developer',
        github: 'https://github.com/victoralagwu',
        medium: 'https://medium.com/@VictorAlagwu',
        stackoverflow: 'https://stackoverflow.com/users/4182278/victor-alagwu',
        linkedin: 'https://www.linkedin.com/in/victoralagwu/',
        school: '<h2>University of Nigeria, Nsukka</h2>',
        num: 0,
        x: 0,
        y: 0,
        enterName: 'Visitor',
        secNum: 0
    },
    computed: {
        output: function(){
            console.log('Computed');
            return this.num > 10 ? "The Number is greater than 10" :"The Number is less than 10";
        }
    },
    watch: {
       num: function(value){
            var vm = this;
            setTimeout(function(){
                vm.num = 0;
            }, 2000);
        }
    },
    methods: {
        result(){
            return this.num > 10 ? "The Number is greater than 10" :"The Number is less than 10";
        },
        navigator: function(event){
            this.x = event.clientX;
            this.y = event.clientY;
        },
        alertMe: function(){
            alert('Hello Oga');
        }
    }
});

