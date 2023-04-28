import styled from 'styled-components';
import { BiCheck } from "react-icons/bi";
import { Task } from "../types/Task";

const TaskFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 12px 4px;
    margin: 12px 0;

    border-top: 2px solid rgba(0, 0, 0, 0.3);
    border-bottom: 2px solid rgba(0, 0, 0, 0.7);

    input, textarea {
        display: block;
        padding: 4px;
        font-family: Helvetiva Neue, Arial, sans-serif;
        font-size: 22px;
    }

    textarea {
        font-size: 18px;
        color: rgb(30, 30, 30);
    }

    .done {
        padding: 4px;
        font-size: 40px;
        color: darkgreen;
        cursor: pointer;
        display: flex;
        justify-content: center;
    }
`;

export function TaskForm({ task, onUpdate, onComplete }: {
    task: Task;
    onUpdate: (task: Task) => void;
    onComplete: () => void;
}) {
    return (
        <TaskFormContainer>
            <input
                autoFocus
                type="text"
                placeholder="Task Title"
                value={task.title}
                onChange={event => onUpdate({ ...task, title: event.target.value})}
                tabIndex={1}
            />
            <textarea
                placeholder="Description"
                value={task.description}
                onChange={event => onUpdate({ ...task, description: event.target.value})}
                tabIndex={2}
            />
            <div
                className="done"
                onClick={() => onComplete()}
                tabIndex={3}
                onKeyDown={event => {
                    console.log(event);
                    event.key === "Enter" && onComplete();
                }}
            >
                <BiCheck />
            </div>
        </TaskFormContainer>
    )
}
