import './MoreResultButton.scss';
import { Button } from 'semantic-ui-react';

interface MoreResultButtonProps {
  displayCount: number;
  setDisplayCount: React.Dispatch<React.SetStateAction<number>>;
}

function MoreResultButton({
  setDisplayCount,
  displayCount,
}: MoreResultButtonProps) {
  return (
    <div className={displayCount > 0 ? '' : 'hidden'}>
      <Button
        color="blue"
        fluid
        onClick={() => {
          setDisplayCount(displayCount + 9);
        }}
      >
        Plus de résultats
      </Button>
    </div>
  );
}

export default MoreResultButton;
