import { Text } from '@lightningjs/solid'; // because only using <Text>
import { Column, Row } from '@lightningjs/solid-primitives' // in solid primatives to make rows and columns
//import styles from '../styles';  // for this project no need to pull in master styles.  We will usse only styles in Box.jsx
import { default as Box} from '../components/Box/Box'; // default is best practice.  because we are exporting default

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    gap: 10, // always pixels in lightning
    width: 1300,
    height: 220,
    x: 960,  //assuming always 1920 x 1080 and then scaling
    y: 540,
    mount: 0.5 // default 0 is top left, 0.5 is middle, 1 is bot right
    // also can use mountX, mountY
    // top right would only be mountX: 1 (mount: 0)
  }
}

const HelloWorld = () => {
  // return <> ... </> may need to return a shard -- can only return a single el, kind of like a domFragment in js
  // Row &k Col implement left, right & up down arrow functionality
  return <Row style={styles.container}>
    <Box color={0xff0000ff}>Box1</Box>
    <Box color={0x00ff00ff}>Box2</Box>
    <Box color={0x0000ffff}>Box3</Box>
  </Row>
};

export default HelloWorld;
