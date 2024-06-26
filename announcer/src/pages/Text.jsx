import { Text, View } from '@lightningjs/solid';
// import { useAnnouncer } from "@lightningjs/solid-primitives"; // not needed since App.jsx unless you wanted to use announcer.speak (example of that is currently commented out below)

const TextPage = () => {
  const OverviewContainer = {
    width: 900,
    height: 500,
    y: 350,
    x: 20,
    gap: 25,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flexStart',
  }

  const SublineContainer = {
    width: 900,
    height: 36,
    gap: 6,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flexStart',
  }

  const Title = {
    fontSize: 42,
  };

  const Overview = {
    width: OverviewContainer.width,
    fontSize: 26,
    contain: 'width'
  };

  const Subline = {
    fontSize: 26,
  };

  // Use the below when you want to announce on rendering page
  // will need import above to do this (see line 2)
  // const announcer = useAnnouncer();
  // announcer.speak('Hello World')



  return (
    <View autofocus style={OverviewContainer}
      
    // extra hint (reads after announce)
      announceContext={'Press left and right arrow keys to navigate'}
      
    // announces on refresh
      announce={[
      //  'Title page',
        Promise.resolve([
          ['2024', 'PAUSE-1', 'March 20'] // PAUSE-S where S seconds
        ]),
      //  () => 'more information'
      ]}

      >
      <Text style={Title}>Title of the Page</Text>
      <Text style={Overview}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel tempor tellus. Sed eu leo purus. Vestibulum sollicitudin eget tellus a varius. Phasellus est turpis, volutpat sed blandit sit amet, rutrum sit amet mauris. In dignissim elit orci, a sollicitudin ipsum faucibus et. Quisque vel quam rutrum, faucibus augue sed, scelerisque nunc.</Text>
      <View style={SublineContainer}>
        <Text style={Subline}>Subline Text</Text>
        <View width={28} height={28} src={'/assets/rt-popcorn.png'}></View>
        <Text style={Subline}>More Text</Text>
      </View>
    </View>
  );
};

export default TextPage;
