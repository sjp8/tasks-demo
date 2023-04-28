"use client";

import React, { useState } from 'react';
import styled from 'styled-components';
import { useTasksData } from '../hooks/useTasksData';
import { TaskItem } from './TaskItem';
import { TaskForm } from './TaskForm';
import { TaskButton } from './TaskButton';
import { BiPlusCircle } from 'react-icons/bi';

/** A container for a list of tasks and other actions. */
const TaskListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    max-width: 460px;
    gap: 8px;

    .add-task {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        padding: 8px;
        font-size: 40px;
        cursor: pointer;
    }
`;

/** Displays a list of tasks with editing capabilities. */
export function TaskList() {
    const { tasks, deleteTask, updateTask, createTask } = useTasksData();
    const [editingTask, setEditingTask] = useState<string | null>(null);

    return (
        <TaskListContainer>
            <div className="add-task">
                <BiPlusCircle
                    onClick={() => {
                        const task = createTask('', '');
                        setEditingTask(task.id);
                    }}
                    title="Create Task"
                />
            </div>
            {tasks.filter(t => !t.completed).map(task => (
                editingTask === task.id ? (
                    <TaskForm
                        key={task.id}
                        task={task}
                        onUpdate={updateTask}
                        onComplete={() => setEditingTask(null)}
                    />
                ) : (
                    <TaskItem
                        key={task.id}
                        task={task}
                        onDelete={deleteTask}
                        onUpdate={() => setEditingTask(task.id)}
                        onComplete={value => updateTask({ ...task, completed: value })}
                    />
                )
            ))}
            {tasks.filter(t => t.completed).map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onDelete={deleteTask}
                    onUpdate={() => {}}
                    onComplete={() => updateTask({ ...task, completed: false })}
                />
            ))}
        </TaskListContainer>
    )
}
