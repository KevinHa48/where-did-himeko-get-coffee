import GitHubIcon from "./GitHubIcon";
import ExclamationIcon from "./ExclamationIcon";

const RepositoryURL =
  "https://github.com/KevinHa48/where-did-himeko-get-coffee";

const RepoButton = ({ className = "", ...props }) => {
  return (
    <a
      href={RepositoryURL}
      rel="noopener noreferrer"
      className="className=
      relative
      self-end
      w-16
      mr-8"
    >
      <GitHubIcon />
      <ExclamationIcon className="absolute top-[-10px] right-[-5px] w-6" />
    </a>
  );
};

export default RepoButton;
