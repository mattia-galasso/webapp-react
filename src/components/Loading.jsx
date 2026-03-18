export default function Loading() {
  return (
    <>
      <div className="alert alert-primary loading-alert" role="alert">
        <div className="spinner-border text-primary" role="status"></div>
        <span className="loading-text">LOADING...</span>
      </div>
    </>
  );
}
