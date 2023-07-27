var app = new Vue ({
    el: '#app',
    data: {
        num: null
    },
    methods: {
        randomCharacteristic () {
            this.num = Math.floor(Math.random()*12 + 6)
        }
    }
})