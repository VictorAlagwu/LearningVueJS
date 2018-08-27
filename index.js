var data = {
    title: 'The VueJS Instance',
    showParagraph: false
};

Vue.component('name', {
    template: '<marquee>Victor</marquee>'
})
var vm1 = new Vue({
    el: '#app1',
    data: data,
    methods: {
      show: function() {
        this.showParagraph = true;
        this.updateTitle('The VueJS Instance (Updated)');
      },
      updateTitle: function(title) {
        this.title = title;
      }
    },
    computed: {
      lowercaseTitle: function() {
        return this.title.toLowerCase();
      }
    },
    watch: {
      title: function(value) {
        alert('Title changed, new value: ' + value);
      }
    }
  });
setTimeout(function(){
    vm1.title = "Changed by timer";
    vm2.onChange();
    vm1.show();
    vm2.changeTitle();

}, 2000);
var vm2 = new Vue({
    el:"#app2",
    data: {
        title: ' VueJS Instance(2)'
      },
      methods: {
        onChange: function(){
            vm1.title = "Oga Change is not good sometimes";
        },
        changeTitle: function(){
            this.title = "Second Instance"
        }
      }
});

var vm3 = new Vue({
    el: "#app3",
    data: {
        title: "Checking DOM migrations"
    },
    beforeCreate() {
        console.log('beforeCreate()');
    },
    created() {
        console.log('created()');
    },
    beforeMount() {
        console.log('befoeMount()');
    },
    mounted() {
        console.log('mounted()');
    },
    beforeUpdate() {
        console.log('beforeUpdate()');
    },
    updated() {
        console.log('updated()');
    },
    beforeDestroy() {
        console.log('beforeDestroy()');    
    },
    destroyed() {
        console.log('destroyed()');
    },
    methods: {
        destroy(){
            this.$destroy();
        }
    }

})