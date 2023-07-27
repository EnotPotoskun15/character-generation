var app = new Vue ({
    el: '#app',
    data: {
        attributes: []
    },
    methods: {
        randomAtribute () {
            this.attributes = [];

            for (let i = null; this.attributes.length < 6; this.attributes.push(this.i)) {
            this.i = Math.floor(Math.random()*12 + 6);
            }
        }
    }
})