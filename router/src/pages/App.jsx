import { useNavigate } from "@solidjs/router";
import { View, activeElement } from "@lightningjs/solid"; //adding activeElement will store a reference to the current element on each page
import { useFocusManager, useAnnouncer } from "@lightningjs/solid-primitives";
import { default as SideBar } from "../components/SideBar/SideBar";

const App = (props) => {
  useFocusManager({
    Announcer: 'a',
    Menu: 'm',
    Text: 't',
    Buttons: 'b',
  });
  
  const navigate = useNavigate();
  const announcer = useAnnouncer();
  announcer.debug = false;
  announcer.enabled = false;

  let sideBar, lastFocused;  // references the SideBar, lastFocused references the last focused el on the page when sidebar closes (rather than body)

  return (
    <View ref={window.APP}
      onAnnouncer={() => announcer.enabled = !announcer.enabled}
      onLast={() => history.back()}
      onText={() => navigate('/text')}
      onButtons={() => navigate('/buttons')}
      onMenu={() => navigate('/')}
      onLeft={() => {
        if (sideBar.states.has('focus')) {
          return false;
        }
        lastFocused = activeElement();
        sideBar.setFocus();
      }}
      // onRight={() => sideBar.states.has('focus') && lastFocused.setFocus()};
      onRight={() => {
        if(sideBar.states.has('focus')) {
          lastFocused.setFocus();
        }
      }}
      >
        <View color={0x071423ff} />
        {props.children}

      {/* add sidebar */}
      <SideBar ref={sideBar}></SideBar>
      {/* the ref assigns the SideBar as a variable to act on it for opening and closing, etc. */}
    </View>
  )
};

export default App;
