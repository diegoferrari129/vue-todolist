const { createApp } = Vue;

createApp({
    data() {
        return{
            todolist: [
                {
                    text: 'scrivere una poesia',
                    done: '',
                }, {
                    text: 'accomodarsi sull\'amaca',
                    done: '',
                }, {
                    text: 'leggere un libro',
                    done: '',
                }, {
                    text: 'rinfrescarmi con 7 calici di vino',
                    done: '',
                }
            ]
        }
    },
    methods: {

    }
}).mount('#app');