import './ReposResults.scss';
import { memo } from 'react';
import { GridRow, GridColumn, Grid, CardGroup } from 'semantic-ui-react';
import Repo from './Repo';
import IListRepos from '../../@types/IListRepos.d';

interface ListReposProps {
  listRepos: IListRepos[];
}

const ReposResults = memo(function ReposResults({ listRepos }: ListReposProps) {
  return (
    <div className="ReposResults">
      <CardGroup className="jc-space-between" itemsPerRow={3}>
        {listRepos.map((repo) => (
          <Repo repo={repo} key={repo.id} />
        ))}
      </CardGroup>
    </div>
  );
});

export default ReposResults;
