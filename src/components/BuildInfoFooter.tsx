import build_info from "../../public/build-info.json";

export const BuildInfoFooter = () => {
  return (
    <footer className="items-center justify-center flex bg-wedding-background p-4">
      <span className="font-merriweather text-gray-300 text-center">
        Revision{" "}
        <a className="underline" href={build_info.COMMIT_URL} target="_blank" rel="noreferrer noopener">
          {build_info.GITHUB_SHA_SHORT}
        </a>
        , built at {build_info.BUILD_TIMESTAMP} by{" "}
        <a
          className="underline"
          href={"https://github.com/" + build_info.GITHUB_ACTOR}
          target="_blank"
          rel="noreferrer noopener"
        >
          {build_info.GITHUB_ACTOR}
        </a>
      </span>
    </footer>
  );
};
