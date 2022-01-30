import {exerciseFive, tocFive} from "../db/exerciseFive.js";
import {renderComponentExercise} from "../ui/Exercise/Exercise.js";

renderComponentExercise(
    {
        query: "cFive",
        givenId: "exFive",
        givenClass: "exerciseFive"
    },
    exerciseFive,
    {
        exerciseWrapperClass: "fiveExerciseWrapperClass",
        exerciseClass: "fiveExerciseTitle",
        taskWrapperClass: "fiveTaskWrapperClass",
        titleClass: "fiveTaskTitle",
        requestClass: "fiveTaskRequest",
        replyClass: "fiveTaskReply",
        tocWrapperClass: "fiveTocWrapperClass",
        tocListWrapper: "fiveTocListWrapper",
        tocDescription: "fiveTocDescription",
        tocContentWrapper: "fiveTocContentWrapper",
        tocTitle: "fiveTocTitle",
        goToToWrapper: "fiveGoToToWrapper",
        goToTopArrow: "fiveGoToTopArrow"
    },
    tocFive,
)