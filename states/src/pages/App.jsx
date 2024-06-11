import { useNavigate } from "@solidjs/router";
import { View } from "@lightningjs/solid";
import { useFocusManager, useAnnouncer } from "@lightningjs/solid-primitives";
import { default as ct } from '../lib/GlobalState';


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

  const { color } = ct;

  return (
    <View ref={window.APP}
      onAnnouncer={() => announcer.enabled = !announcer.enabled}
      onLast={() => history.back()}
      onText={() => navigate('/text')}
      onButtons={() => navigate('/buttons')}
      onMenu={() => navigate('/')}>
        <View color={color()} />
        {props.children}
    </View>
  )
};

export default App;
