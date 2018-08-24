new Vue({
    el: "#app",
    data: {
        myHealth: 100,
        monsterHealth: 100,
        gameRunning: false,
        turns: []
    },
    methods: {
        startGame: function(){
            this.gameRunning = true;
            this.myHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack: function(){
            var damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hit monster resulting to ' + damage
            });

            if(this.checkwin()){
                return;
            }
            this.monsterAttack();
        },
        specAttack: function(){
            var damage = this.calculateDamage(10, 20);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hit monster with extra punch resulting to ' + damage
            });
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
            this.turns.unshift({
                isPlayer: true,
                text: 'Player receives healing of 10'
            });
            this.monsterAttack();
        },
        giveUp: function(){
            this.gameRunning = false;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player gives up '
            });
        },
        monsterAttack: function(){
            var damage = this.calculateDamage(3, 10);
            this.myHealth -= damage;
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hit player resulting to ' + damage
            });
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