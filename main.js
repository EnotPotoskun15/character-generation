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
        }
    }
})

// Дописать, что бы сумма элементов массива была больше и равна 72. Если сумма меньше 72, то самый минимальный элемент массива перегенерируется.