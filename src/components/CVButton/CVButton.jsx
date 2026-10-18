import { FiDownload } from 'react-icons/fi';
import Button from '../Button/Button';

const CVButton = () => (
  <Button
    variant="primary"
    size="md"
    href="/CV_MOUSSI_SID_AHMED.pdf"
    download="CV_MOUSSI_SID_AHMED.pdf"
    icon={<FiDownload />}
  >
    Télécharger mon CV
  </Button>
);

export default CVButton;
