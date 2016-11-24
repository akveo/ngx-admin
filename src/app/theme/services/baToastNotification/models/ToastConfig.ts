class ToastPosition{
    constructor(
        public top?:number,
        public right?:number,
        public bottom?:number,
        public left?:number
    ){}
}

export class ToastConfig{
    constructor(
        public text:                string | string[], // use array for bullet list 
        public heading?:            string,
        public icon?:               "info" | "error" | "success" | "warning",
        public showHideTransition?: "fade" | "slide" | "plain",
        public allowToastClose?:    boolean,
        public hideAfter?:          number | boolean, // milliseconds or false to disable auto hide
        public stack?:              number, // number of toast to show at the same time
        public position?:           "bottom-left" | "bottom-right" | "bottom-center" | "top-left" | "top-right" | "top-center" | "mid-center" | ToastPosition,
        public textAlign?:          "left" | "right" | "center",
        public loader?:             boolean,
        public loaderBg?:           string, // hex color
        public beforeShow?:         Function,
        public afterShow?:          Function,
        public beforeHide?:         Function,
        public afterHidden?:        Function
    ){}
}