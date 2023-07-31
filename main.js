var app = new Vue ({
    el: '#app',
    data: {
        generation: false,
        infoChar: true,
        nameAttributes: ["СИЛ", "ЛОВ", "ТЕЛ", "ИНТ", "МДР", "ХАР"]
    },
    methods: {
        gen() {
            return this.generation = true;
        }
    },
    computed: {
        randomAtributes () {
            if (this.generation) {

                this.attributes = [];
                this.infoChar = false;

                for (i = null; this.attributes.length < 6; this.attributes.push(this.i)) {
                    this.i = Math.floor(Math.random()*12 + 6);
                }

                let sum = this.attributes.reduce(function(a, b){
                    return a + b
                    }, 0);

                if (sum < 72) {
                    do {
                        let min = 18;
                        for (let i = 0; this.attributes.length > i-1; i++) {
                            next = this.attributes[i];

                            if (min > next) {
                                min = next;
                            }
                        }

                        let indexMinChar = this.attributes.indexOf(min);
                        let newAttribute = Math.floor(Math.random()*12 + 6);

                        this.attributes[indexMinChar] = newAttribute

                        newSum = this.attributes.reduce(function(a, b){
                            return a + b
                            }, 0);
                    } while (newSum < 72);
                }
            }
            return this.attributes;
        },
        modifiersAttributes() {
            if(this.generation && !this.endComputed) {

                this.modifiers = [];
                this.modifier = 0

                for (i = 0; i < 6; i++) {
                    this.modifier = Math.floor((this.attributes[i]-10) / 2);
                    this.modifiers.push(this.modifier);
                }
            }
            return this.modifiers;            
        },
        endComputed() {
            if (this.generation) {
                this.generation = false;
            }
        }
    }
})