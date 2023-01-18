interface HabitDrop {
    completed:number
}

export function Habit(props: HabitDrop){
    return (
        <p>{props.completed}</p>
    )
}