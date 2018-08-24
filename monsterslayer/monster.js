new Vue({
    el: "#app",
    data: {
        myHealth: 100,
        monsterHealth: 100,
        gameRunning: true
    },
    methods: {
        startGame: function(){
            this.gameRunning = false;
            this.myHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function(){
           this.monsterHealth -= this.calculateDamage(3, 10);
            if(this.checkwin()){
                return;
            }
            this.monsterAttack();
        },
        specAttack: function(){
            this.monsterHealth -= this.calculateDamage(10, 20);
            if(this.checkwin()){
                return;
            }
            this.monsterAttack();
        },
        heal: function(){
            if (this.myHealth <= 90){
                this.myHealth += 10;
            } else {
                this.myHealth = 100;
            }
            this.monsterAttack();
        },
        giveUp: function(){
            this.gameRunning = true;
            this.myHealth = 100;
            this.monsterHealth = 100;
        },
        monsterAttack: function(){
            this.myHealth -= this.calculateDamage(3, 10);
            this.checkwin();
        },
        calculateDamage: function(min, max){
            return Math.max(Math.floor(Math.random() * max ) + 1, min);
        },
        checkwin: function(){
            if(this.monsterHealth <= 0){
                if(confirm('You won, Will you start a new Game ?')){
                    this.startGame();
                }else{
                    this.gameRunning = false;
                    return;
                }
                return true;
            }else if(this.myHealth <= 0){
                if(confirm('Sorry, You were bitten, Will you start a new Game ?')){
                    this.startGame();
                }else{
                    this.gameRunning = false;
                    return;
                }
                return true;
            }
            return false;
        }
    }
});