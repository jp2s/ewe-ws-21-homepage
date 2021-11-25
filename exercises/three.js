import {exerciseThree, tocThree} from "../db/exerciseThree.js";
import {renderComponentExercise} from "../ui/Exercise/Exercise.js";

renderComponentExercise(
    {
        query: "cThree",
        givenId: "exThree",
        givenClass: "exerciseThree"
    },
    exerciseThree,
    {
        exerciseWrapperClass: "threeExerciseWrapperClass",
        exerciseClass: "threeExerciseTitle",
        taskWrapperClass: "threeTaskWrapperClass",
        titleClass: "threeTaskTitle",
        requestClass: "threeTaskRequest",
        replyClass: "threeTaskReply",
        tocWrapperClass: "threeTocWrapperClass",
        tocListWrapper: "threeTocListWrapper",
        tocDescription: "threeTocDescription",
        tocContentWrapper: "threeTocContentWrapper",
        tocTitle: "threeTocTitle",
        goToToWrapper: "threeGoToToWrapper",
        goToTopArrow: "threeGoToTopArrow"
    },
    tocThree,
)