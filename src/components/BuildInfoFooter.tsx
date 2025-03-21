import build_info from "@/build-info.json";

export const BuildInfoFooter = () => {
  const utcDate = new Date(build_info.BUILD_TIMESTAMP);
  const localDayMonthStr = new Intl.DateTimeFormat("sv-SE", {
    day: "numeric",
    month: "numeric",
    timeZone: "Europe/Stockholm",
  }).format(utcDate);

  return (
    <footer className="items-center justify-center flex bg-wedding-background p-4">
      <span className="font-merriweather text-gray-300 text-center">
        Rev.{" "}
        <a className="underline" href={build_info.COMMIT_URL} target="_blank" rel="noreferrer noopener">
          {build_info.GITHUB_SHA_SHORT}
        </a>
        , built on {localDayMonthStr} by{" "}
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
