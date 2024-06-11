import Button from '../components/Button/Button';
import { Row } from '@lightningjs/solid-primitives';

const ButtonsPage = () => {
  function onEnter(event, elm) {
    this.states.toggle('disabled');
  }

  const RowStyles = {
    display: 'flex',
    justifyContent: 'flexStart',
    width: 1500,
    height: 300,
    color: '00000000',
    gap: 26,
    y: 400,
    x: 100
  }

  return (
    <Row style={RowStyles}>
      <Button autofocus onEnter={onEnter} announceContext={'press right or left arrow to review'} announce={'Focused'}>Focused</Button>
      <Button states={{ active: true, disabled: false }} announce={'Normal'}>Normal</Button>
      <Button states='disabled' announce={'Disabled'}>Disabled</Button>
    </Row>
  );
};

export default ButtonsPage;
