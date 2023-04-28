import styled from 'styled-components';

const TaskButtonContainer = styled.div<{ isDisabled: boolean; backgroundColor?: string; color?: string; }>`
    ${props => props.isDisabled ? 'opacity: 0.7;' : ''}
    cursor: pointer;
    user-select: none;
    padding: 8px;
    background: ${props => props.backgroundColor ?? 'white'};
    color: black;
    border-radius: 40px;
    color: ${props => props.color ?? 'black'};

    opacity: 0.7;
    &:hover {
        opacity: 1.0;
    }
`;

/** A minimal button in a Task Item actions bar. */
export function TaskButton(props: {
    label?: string;
    icon?: string | JSX.Element;
    onClick: () => void;
    disabled: boolean;
    backgroundColor?: string;
    color?: string;
}) {
    return (
        <TaskButtonContainer
            onClick={props.disabled ? undefined : props.onClick}
            isDisabled={props.disabled}
            backgroundColor={props.backgroundColor}
            color={props.color}
        >
            {props.icon ?? null}
            {props.label ?? null}
        </TaskButtonContainer>
    );
}
