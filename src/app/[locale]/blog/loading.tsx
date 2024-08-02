export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div
      className={'d-flex justify-content-center align-items-center'}
      style={{ height: '500px' }}>
      <div className="centrize full-width">
        <div className="vertical-center">
          <img
            src={'/assets/imgs/template/loading-aircraft.gif'}
            width={250}
            alt="loading"
          />
        </div>
      </div>
    </div>
  );
}
