interface HabitProps {
  completed: number;
}

export function Habits(props: HabitProps) {
  return <div>{props.completed}</div>;
}
