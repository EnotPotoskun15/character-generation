var app = new Vue ({
    el: '#app',
    data: {
        attribute: null
    },
    methods: {
        randomAtribute () {
            this.attribute = Math.floor(Math.random()*12 + 6)
        }
    }
})