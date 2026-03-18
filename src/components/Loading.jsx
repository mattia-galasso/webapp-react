export default function Loading() {
  return (
    <>
      <div class="alert alert-primary loading-alert" role="alert">
        <div class="spinner-border text-primary" role="status"></div>
        <span className="loading-text">LOADING...</span>
      </div>
    </>
  );
}
