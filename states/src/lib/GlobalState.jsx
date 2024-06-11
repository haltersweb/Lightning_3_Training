import { createSignal, createRoot } from "solid-js";
//createRoot allows it to be persistent
//otherwise it would disappear even though it's from this lib folder

function colors() {
    const [color, setColor] = createSignal(0x03a4ecff); // light theme color
    // color is getter
    // setColor is setter

    const colorToggle = () => {
        if (color() == 0x03a4ecff) { // light
            setColor(0x071423ff) // dark
        } else {
            setColor(0x03a4ecff) // light
        }
    }
    return {color, colorToggle}
}
export default createRoot(colors); // colors function is the argument
