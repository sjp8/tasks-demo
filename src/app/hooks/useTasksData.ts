import { useState } from 'react';
import type { Task } from '../types/Task';
import uuid from '../helpers/uuid';

/** Returns the tasks state, and functions to update the tasks state. */
export function useTasksData() {
    const [tasks, setTasks] = useState<Task[]>([]);

    /**
     * Creates a new task from a title and description, with completed as false.
     * Returns the created task object.
     */
    const createTask = (title: string, description: string) => {
        const task: Task = { title, description, completed: false, id: uuid() };
        addTask(task);
        return task;
    }

    /** Adds the given task object to the list of tasks. */
    const addTask = (task: Task) => setTasks([...tasks, task]);

    /** Deletes the given task using the id field. */
    const deleteTask = (task: Task) => setTasks(tasks.filter(t => t.id !== task.id));

    /** Updates the task with `task.id` with the other information in the `task` param. */
    const updateTask = (task: Task) => {
        const taskIndex = tasks.findIndex(t => t.id === task.id);
        const updatedTask = { ...task };
        const updatedTasks = [...tasks];
        updatedTasks[taskIndex] = updatedTask;
        setTasks(updatedTasks);
    };

    return {
        tasks,
        createTask,
        addTask,
        deleteTask,
        updateTask
    };
}