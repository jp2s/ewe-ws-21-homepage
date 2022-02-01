import {exerciseThirteen, tocThirteen} from "../db/exerciseThirteen.js";
import {defaultExerciseClasses} from "../util/classes.js";
import {renderComponentExercise} from "../ui/Exercise/Exercise.js";

renderComponentExercise(
    {
        query: "cThirteen",
        givenId: "exThirteen",
        givenClass: "exerciseThirteen"
    },
    exerciseThirteen,
    defaultExerciseClasses,
    tocThirteen,
)