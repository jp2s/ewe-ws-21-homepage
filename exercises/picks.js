import {exercisePicks, tocPicks} from "../db/exercisePicks.js";
import {defaultExerciseClasses} from "../util/classes.js";
import {renderComponentExercise} from "../ui/Exercise/Exercise.js";

renderComponentExercise(
    {
        query: "cPicks",
        givenId: "exPicks",
        givenClass: "exercisePicks"
    },
    exercisePicks,
    defaultExerciseClasses,
    tocPicks,
)