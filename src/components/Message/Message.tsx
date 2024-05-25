import './Message.scss';

interface ReposCountProps {
  reposCount: number;
}

function Message({ reposCount }: ReposCountProps) {
  return (
    <div className="Message">
      <p>
        La recherche a donné {reposCount} résultat{reposCount > 1 && 's'}
      </p>
    </div>
  );
}

export default Message;
