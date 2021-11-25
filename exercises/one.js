import {exerciseOne, tocOne} from "../db/exerciseOne.js";
import {renderComponentExercise} from "../ui/Exercise/Exercise.js";

renderComponentExercise(
    {
        query: "cOne",
        givenId: "exOne",
        givenClass: "exerciseOne"
    },
    exerciseOne,
    {
        exerciseWrapperClass: "oneExerciseWrapperClass",
        exerciseClass: "oneExerciseTitle",
        taskWrapperClass: "oneTaskWrapperClass",
        titleClass: "oneTaskTitle",
        requestClass: "oneTaskRequest",
        replyClass: "oneTaskReply",
        tocWrapperClass: "oneTocWrapperClass",
        tocListWrapper: "oneTocListWrapper",
        tocDescription: "oneTocDescription",
        tocContentWrapper: "oneTocContentWrapper",
        tocTitle: "oneTocTitle",
        goToToWrapper: "oneGoToToWrapper",
        goToTopArrow: "oneGoToTopArrow"
    },
    tocOne,
)