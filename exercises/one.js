import {exerciseOne} from "../db/exerciseOne.js";
import {renderComponent} from "../ui/RequestReply/RequestReply.js";

renderComponent(
    "cOne",
    "exOne",
    "exercise",
    exerciseOne.task[0],
    "wrapperClass",
    "titleClass",
    "requestClass",
    "replyClass"
)