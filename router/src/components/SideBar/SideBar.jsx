import { Text } from '@lightningjs/solid'
import { Column } from "@lightningjs/solid-primitives";
import { useNavigate } from "@solidjs/router";
 
const styles = {
  background: {
    width: 400,
    height: 1080,
    x: -400,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 20,
    color: 0x66376Eff,
    zIndex: 99,
    focus: {
      x: 0,
      transition: {
        x: {duration: 250, easing: 'ease-out'}
      }
    },
    transition: {
      x: {duration: 250, easing: 'ease-in'}
    }
  },
  links: {
    width: 400,
    fontSize: 38,
    x: 20,
    color: 0xffffffaa,
    focus: {
      color: 0xffffffff
    },
    zIndex: 100
  }
}

//focus
//blur

export default function SideBar(props) {
  let navigate = useNavigate();

  function onFocus() {
    this.children.selected.setFocus();
  }

  return <Column {...props} style={styles.background} onFocus={onFocus}>
    <Text onEnter={() => navigate('/')} style={styles.links}>Home</Text>
    <Text onEnter={() => navigate('/films')} style={styles.links}>Films</Text>
    <Text onEnter={() => navigate('/films/1')} style={styles.links}>Film 1</Text>
    <Text onEnter={() => navigate('/films/2')} style={styles.links}>Film 2</Text>
    <Text onEnter={() => navigate('/films/3')} style={styles.links}>Film 3</Text>
  </Column>
}