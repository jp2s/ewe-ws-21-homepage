import {exerciseFour, tocFour} from "../db/exerciseFour.js";
import {renderComponentExercise} from "../ui/Exercise/Exercise.js";

renderComponentExercise(
    {
        query: "cFour",
        givenId: "exFour",
        givenClass: "exerciseFour"
    },
    exerciseFour,
    {
        exerciseWrapperClass: "fourExerciseWrapperClass",
        exerciseClass: "fourExerciseTitle",
        taskWrapperClass: "fourTaskWrapperClass",
        titleClass: "fourTaskTitle",
        requestClass: "fourTaskRequest",
        replyClass: "fourTaskReply",
        tocWrapperClass: "fourTocWrapperClass",
        tocListWrapper: "fourTocListWrapper",
        tocDescription: "fourTocDescription",
        tocContentWrapper: "fourTocContentWrapper",
        tocTitle: "fourTocTitle",
        goToToWrapper: "fourGoToToWrapper",
        goToTopArrow: "fourGoToTopArrow"
    },
    tocFour,
)