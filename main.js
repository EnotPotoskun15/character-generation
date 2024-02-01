/* После выбора доспеха не работает генерация. Если обнулить selectArmor, то генерация снова работает */

var dataJson = "/data.json"

var app = new Vue ({
    el: '#app',
    data: {
        generation: false,
        infoChar: true,
        nameAttributes: [],
        selectArmor: null,
        armors: []
    },
    mounted() {
        var self = this
        $.getJSON(dataJson, function(data) {
            self.armors = data.armors;
            self.nameAttributes = data.nameAttributes;
        });
    },
    methods: {
        gen() {
            return this.generation = true;
        },
        generateKD() {
            this.selectArmor = selectArmor;
        }
    },
    computed: {
        randomAtributes () {
            if (this.generation) {

                this.infoChar = false;

                do {
                    this.attributes = [];

                    for (i = null; this.attributes.length < 6; this.attributes.push(this.i)) {
                        this.i = Math.floor(Math.random()*12 + 6);
                    }
            
                    sum = this.attributes.reduce(function(a, b){
                        return a + b
                        }, 0);
                } while (sum < 72);
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
        kd() {
            // if (this.modifiersAttributes) {
            //     if (this.selectArmor) {
            //         return this.newKd = this.selectArmor + this.modifiersAttributes[1];
            //     }else {
            //         return this.newKd = 10 + this.modifiersAttributes[1];
            //     }
            // }else {
            //     return this.kd = '';
            // };
        },
        endComputed() {
            if (this.generation) {
                this.generation = false;
            }
        }
    }
})