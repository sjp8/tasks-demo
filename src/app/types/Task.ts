
/** A task object. */
export interface Task {
    /** A random UUID id. */
    id: string;
    /** The task title. */
    title: string;
    /** A task description. */
    description: string;
    /** Whether the task is completed. */
    completed: boolean;
}
