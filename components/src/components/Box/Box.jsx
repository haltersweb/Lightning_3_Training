import {View, Text} from '@lightningjs/solid';

// make styles object
// with style component key/value pairs
const styles = {
    container: {
        width: 400, // default 0
        height: 200, //default 0
        color: 'ff0000ff', //'ffffffff'
        y: 10, // default 0, etc.
    }
}

// just a nice way to keep text separate
// PLUS you can reference styles from above
styles.text = {
    width: styles.container.width,
    height: styles.container.height,
    lineHeight: styles.container.height,
    contain: 'width', // method that TRIES to keep text contained inside container
    // could also be 'height', or 'both'
    fontSize: 32,
    textAlign: 'center',
    //flexbox takes up extra computing, so don't use when can use somethign else
    // so instead, center vertically with y
    y: (styles.container.height / 2) - 32,
}

export default function Box(props) {
    return (
        <View {...props} style={styles.container}>
            <Text style={styles.text}>{props.children}</Text>
        </View>
    )
}

