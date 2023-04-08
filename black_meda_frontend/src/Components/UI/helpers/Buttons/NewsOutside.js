import styles from "./styles/NewsOutside.module.css";

const NewsOutside = (props) => {
  const getTopLevelDomain = (url) => {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname;
    const parts = hostname.split(".");
    if (parts.length > 2) {
      // Remove subdomains and return top-level domain
      return parts.slice(-2).join(".");
    } else {
      // Only top-level domain exists
      return hostname;
    }
  };

  const linkname = getTopLevelDomain(props.url);
  return (
    <div className={styles.uiverse}>
      <span className={styles.tooltip}>{linkname}</span>
      <span>{props.name}</span>
    </div>
  );
};

export default NewsOutside;
