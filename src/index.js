/**
 * Tag items data types
 * @typedef {Object} Tag
 * @property {string} id tag id
 * @property {string} name tag name
 */

/**
 * Todo items data types
 * @typedef {Object} Todo
 * @property {string} id todo id
 * @property {string} content todo content
 * @property {string} category todo category
 * @property {boolean} status todo status
 * @property {Tag[]} tags todo tags
 */

/**
 * createTodo function parameters type
 * @typedef {Object} CreateTodo
 * @property {string} content todo content - optional
 * @property {string} category todo category - optional
 * @property {boolean} status todo status - optional
 * @property {Tag[]} tags todo tags - optional
 */

/**
 * @description function create todolist item
 * @param {CreateTodo} CreateTodo CreateTodoItem {content, category, status, tags}
 * @return {Todo} TodoItem {id, content, category, status, tags}
 */
function createTodo() {}

/**
 * @description function read todolists
 * @return {Todo[]} TodoItem {id, content, category, status, tags}
 *
 */
function readTodo() {}

/**
 * @description function read todolist item
 * @param {string} id todo id
 * @return {Todo} TodoItem {id, content, category, status, tags}
 *
 */
function readDetailTodo() {}

/**
 * updateTodo function parameters type
 * @typedef {Object} UpdateTodo
 * @property {string/} id todo content - required
 * @property {string=} content todo content - optional
 * @property {string=} category todo category - optional
 * @property {boolean=} status todo status - optional
 * @property {Tag[]} tags todo tags - optional
 */

/**
 * @description function update todolist item
 * @param {UpdateTodo} UpdateTodo UpdateTodoItem {*id, content, category, status, tags}
 * @return {Todo} TodoItem {id, content, category, status, tags}
 */
function updateTodo() {}

/**
 * @description function delete todolist item
 * @param {string} id *todo id
 * @return {boolean} return success status
 */
function deleteTodo() {}
