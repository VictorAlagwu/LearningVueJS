export const fruitMix = {
    data() {
        return {
             fruits: ['Apple', 'Banana', 'Mango', 'Orange'],
             filterText: '',
        }
     },
    computed: {
        filteredFruits() {
            return this.fruits.filter((value) => {
                return value.match(this.filterText);
            });
        }
    }
};