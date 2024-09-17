import { useDisclosure } from '@mantine/hooks';
import {  Modal, useMantineTheme } from '@mantine/core';
import PostShare from '../PostShare/PostShare';

function ShareModal({modalOpened, setModalOpened}) {
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();

  return (
    <>
      <Modal
        overlayOpacity={0.55}
        overlayBlur={4}
        size='50%'
        opened={modalOpened}
        onClose={()=> setModalOpened(false)}
      >
        <PostShare/>

      </Modal>
    </>
  );
}

export default ShareModal