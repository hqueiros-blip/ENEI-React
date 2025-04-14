import "./LoadingPage.scss";

export const LoadingPage = () => {
  return (
    <div className="loading">
      <div className="spinner-border" aria-label="Loading..." />
      <div>Loading...</div>
    </div>
  );
};
