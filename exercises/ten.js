import {exerciseTen, tocTen} from "../db/exerciseTen.js";
import {defaultExerciseClasses} from "../util/classes.js";
import {renderComponentExercise} from "../ui/Exercise/Exercise.js";

renderComponentExercise(
    {
        query: "cTen",
        givenId: "exTen",
        givenClass: "exerciseTen"
    },
    exerciseTen,
    defaultExerciseClasses,
    tocTen,
)