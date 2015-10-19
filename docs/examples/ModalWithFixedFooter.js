import React from 'react';
import OverlayTrigger from '../../src/OverlayTrigger';
import Modal from '../../src/Modal';
import Button from '../../src/Button';

export default
<OverlayTrigger overlay={
  <Modal header='Modal Header' fixedFooter>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
  </Modal>
}>
  <Button waves='light'>MODAL WITH FIXED FOOTER</Button>
</OverlayTrigger>;