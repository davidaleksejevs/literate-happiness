const workouts = [
  {
    day: 'Monday',
    exercises: [
      { title: 'Squats', sets: '1 to 3 heavy sets', reps: '4 to 8 reps' },
      { title: 'Deadlift variation / pull-ups', sets: '4 sets', reps: '6 to 10 reps/AMRAP' },
      { title: 'Skullcrushers / hammer curls', sets: '4 sets', reps: '8 to 12 reps' },
      { title: 'Push ups / abs', sets: 'AMRAP', reps: '' },
    ],
  },
  {
    day: 'Wednesday',
    exercises: [
      { title: 'Bench', sets: '1 to 3 heavy sets', reps: '4 to 8 reps' },
      { title: 'Bench', sets: '3 sets +', reps: '6 to 10 reps' },
      { title: 'OHP / chin-ups', sets: '4 sets', reps: '6 to 10 reps/AMRAP' },
      { title: 'Hyperextensions / cable rows', sets: '4 sets', reps: '8 to 12 reps' },
      { title: 'Abs', sets: 'AMRAP', reps: '' },
    ],
  },
  {
    day: 'Friday',
    exercises: [
      { title: 'Deadlifts', sets: '1 to 3 heavy sets', reps: '2 to 5 reps' },
      { title: 'Squat variation / pull-ups', sets: '4 sets', reps: '6 to 10 reps' },
      { title: 'EZ bar curls / pull-ups', sets: '4 sets', reps: '8 to 12 reps/AMRAP' },
      { title: 'Push ups / abs', sets: 'AMRAP', reps: '' },
    ],
  },
];

const workoutList = document.getElementById('workout-list');

workouts.forEach((workout, workoutIndex) => {
  const workoutDiv = document.createElement('div');
  workoutDiv.classList.add('workout');

  const workoutTitle = document.createElement('h2');
  workoutTitle.classList.add('workout-title');
  workoutTitle.textContent = workout.day;
  workoutDiv.appendChild(workoutTitle);

  const exerciseList = document.createElement('ul');
  
  workout.exercises.forEach((exercise, exerciseIndex) => {
    const exerciseItem = document.createElement('li');
    exerciseItem.classList.add('workout-item');

    const exerciseTitle = document.createElement('span');
    exerciseTitle.textContent = exercise.title;
    exerciseItem.appendChild(exerciseTitle);

    exercise.sets.forEach((set, setIndex) => {
      const setInput = document.createElement('input');
      setInput.type = 'number';
      setInput.placeholder = `Set ${setIndex + 1}`;
      setInput.value = localStorage.getItem(`set-${workoutIndex}-${exerciseIndex}-${setIndex}`) || '';
      setInput.addEventListener('input', () => {
        localStorage.setItem(`set-${workoutIndex}-${exerciseIndex}-${setIndex}`, setInput.value);
      });
      exerciseItem.appendChild(setInput);
    });

    const weightInput = document.createElement('input');
    weightInput.type = 'number';
    weightInput.placeholder = 'Weight';
    weightInput.value = localStorage.getItem(`weight-${workoutIndex}-${exerciseIndex}`) || '';
    weightInput.addEventListener('input', () => {
      localStorage.setItem(`weight-${workoutIndex}-${exerciseIndex}`, weightInput.value);
    });
    exerciseItem.appendChild(weightInput);

    exerciseList.appendChild(exerciseItem);
  });

  workoutDiv.appendChild(exerciseList);
  workoutList.appendChild(workoutDiv);
});