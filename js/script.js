const { createApp } = Vue;

createApp({
    data() {
        return{
            flag: false,
            todolist: [
                {
                    text: 'scrivere una poesia',
                    done: false
                }, {
                    text: 'accomodarsi sull\'amaca',
                    done: true
                }, {
                    text: 'leggere un libro',
                    done: true
                }, {
                    text: 'rinfrescarmi con 7 calici di vino',
                    done: false
                }
            ]
        }
    },
    methods: {
        deleteTask(index) {
            this.todolist.splice(index, 1);
        }
    }
}).mount('#app');