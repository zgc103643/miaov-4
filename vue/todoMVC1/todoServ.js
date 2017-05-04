/*模仿后端更新*/
(function () {
    let STORE_KEY = 'TODO_MVC_0.1';
    let _uid = 'todos_'+Date.now();

    function getUid() {
        return 'todo_' + _uid++;
    }

    function storeGet() {
        return JSON.parse(localStorage.getItem(STORE_KEY) || '[]');
    }

    function storeSet(todos) {
        localStorage.setItem(STORE_KEY, JSON.stringify(todos));
    }


    window.todoServ = {
        getAll(){
            return storeGet();
        },
        update(newTodos){
            let todos = storeGet();
            newTodos.forEach(function (todo) {
                let oldOne = todos.find(e=>e.di = todo.id);
                if (oldOne) Object.assign(oldOne, todo);
            });
            storeSet(todos);
        },
        del(ids){

        },
        add(todo){
            let todos = storeGet();
            todos.push({
                id: getUid(),
                content: todo.content,
                status: 0         /* 0:待做 1:完成 2:放弃 */
            });
            storeSet(todos);
        }
    };


})();