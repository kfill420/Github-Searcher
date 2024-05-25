import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Icon,
  Image,
} from 'semantic-ui-react';
import './repo.scss';
import IListRepos from '../../@types/IListRepos.d';

interface RepoProps {
  repo: IListRepos;
}

function Repo({ repo }: RepoProps) {
  return (
    <div className="Repo">
      <Card className="h-100">
        <Image src={repo.avatar} wrapped ui={false} />
        <CardContent>
          <CardHeader>{repo.title}</CardHeader>
          <CardMeta>{repo.subtitle}</CardMeta>
          <CardDescription>{repo.description}</CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}

export default Repo;
