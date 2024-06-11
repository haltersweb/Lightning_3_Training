import { Text, View } from '@lightningjs/solid';
import { createSignal } from 'solid-js'; // state
import { default as Toggle } from "../components/Toggle/Toggle";
import {default as ct } from '../lib/GlobalState'; //ct is color toggle

const HelloWorld = () => {
  // GlOBAL STATE
  const { colorToggle } = ct;

  // LOCAL STATE
  //creating an iterator state
  const [number, setNumber] = createSignal(100); // fn returns two functions [getter, setter]
  // number = getter
  // setNumber = setter

  // function that will be called on keypress
  const increment = () => {
    // setNumber(1) either set number directly
    setNumber((prev) => prev + 1) // or set it based on prev number
  }

  let toggleRef;

  function toggleSwitch() {  //MAYBE A BETTER NAME WOULD HAVE BEEN changeTheme()
    toggleRef.states.toggle('dark');
    colorToggle();
  }

  return <>
    <View onEnter={increment}>
    {/* autofocus: when Hello World loads, this view gets the focus */}
    {/* onEnter key event needs to be assigned a function */}
      <Text>Increment: {number()}</Text>
    </View>

    <Toggle ref={toggleRef} autofocus onEnter={toggleSwitch}></Toggle>
  </>
};

export default HelloWorld;
