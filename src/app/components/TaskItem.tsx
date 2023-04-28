import { Task } from "../types/Task";
import styled from "styled-components";
import { TaskButton } from "./TaskButton";
import { BiTrashAlt, BiPencil, BiCheckCircle, BiCircle } from "react-icons/bi";

const TaskItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    width: 100%;
    position: relative;
    align-items: center;
    background: white;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    box-shadow: 2px 2px 8px 1px rgba(0, 0, 0, 0.2);

    .completed {
        display: flex;
        align-items: center;
        font-size: 30px;
        cursor: pointer;
        padding: 4px;
    }

    .data {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        padding: 4px;

        .title {
            font-size: 18px;
        }
        .description {
            font-size: 14px;
            color: grey;
        }
    }

    .actions {
        position: absolute;
        right: 4px;
        padding: 2px;
        z-index: 1;
        display: none;
        gap: 4px;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
    }

    &:hover .actions {
        display: flex;
    }
`;

export function TaskItem({ task, ...props }: {
    /** The task to display. */
    task: Task;
    /** Handler for when delete is clicked. */
    onDelete: (task: Task) => void;
    /**
     * Handler for a request to update the task. Task editing
     * is not done in TaskItem, but rather in TaskForm, which is shown
     * instead of TaskItem within TaskList when the given task is in edit mode.
     */
    onUpdate: (task: Task) => void;
    /** Handler for when the completion status is toggled. */
    onComplete: (value: boolean) => void;
}) {

    return (
        <TaskItemContainer>
            <div
                className="completed"
                onClick={() => props.onComplete(!task.completed)}
                title={task.completed ? 'Completed' : "Mark Completed"}
            >
                {task.completed ? <BiCheckCircle /> : <BiCircle />}
            </div>
            <div className="data">
                <div className="title">{task.title}</div>
                <div className="description">{task.description}</div>
            </div>
            <div className="actions">
                <TaskButton
                    icon={<BiTrashAlt />}
                    disabled={false}
                    onClick={() => props.onDelete(task)}
                    color="white"
                    backgroundColor="red"
                />
                {!task.completed && <TaskButton
                    icon={<BiPencil />}
                    disabled={false}
                    onClick={() => props.onUpdate(task)}
                    color="white"
                    backgroundColor="blue"
                />}
            </div>
        </TaskItemContainer>
    );
}
