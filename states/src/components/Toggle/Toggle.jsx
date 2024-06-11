import { View } from "@lightningjs/solid";

const styles = {
    container: {
        width: 100,
        height: 50,
        borderRadius: 20,
        color: 0x440379ff,
        x: 1800,
        y: 10,
    },
    circle: {
        // ---------- initial --------
        width: 42,
        height: 42,
        color: 0xffffffdd,
        y: 4, // relative to its parent (since there will be a View in a View)
        x: 50,
        transition: {
            x: {duration: 200, easing: 'ease-out'}
        },
        // -------- dark ----------
        dark: { // can create a new theme property that doesn't match a style property
            x: 4,
            transition: {
                x: {duration: 200, easing: 'ease-in'}
            },
        }
    }
}

// shader (look in Lightning 2 documentation)
// shaders are like shaders in 3d animation: much cheaper to run using GPU rather than the CPU actually modifying the element itself
const roundedRectangle = ["RoundedRectangle", {radius: 21}]
                        // [name of shader, properties]

export default function Toggle(props) {
    return <View {...props} forwardStates style={styles.container}>
        {/* forwardStates: pass any states in Toggle states=... into next View */}
        <View style={styles.circle} shader={roundedRectangle}>
        </View>
    </View>
}