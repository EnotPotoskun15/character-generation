var app = new Vue ({
    el: '#app',
    data: {
        attributes: [],
        infoChar: true
    },
    methods: {
        randomAtribute () {
            this.attributes = [];
            this.infoChar = false;

            for (let i = null; this.attributes.length < 6; this.attributes.push(this.i)) {
            this.i = Math.floor(Math.random()*12 + 6);
            }

            let sum = this.attributes.reduce(function(a, b){
                return a + b
                }, 0);

            if (sum < 72) {
                do {
                    var min = 18;
                    for (let i = 0; this.attributes.length > i-1; i++) {
                        var next = this.attributes[i];

                        if (min > next) {
                            min = next;
                        }
                    }

                    var indexMinChar = this.attributes.indexOf(min);
                    var newAttribute = Math.floor(Math.random()*12 + 6);

                    this.attributes[indexMinChar] = newAttribute

                    newSum = this.attributes.reduce(function(a, b){
                        return a + b
                        }, 0);
                } while (newSum < 72);
            }
        }
    }
})