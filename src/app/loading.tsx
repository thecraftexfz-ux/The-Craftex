export default function Loading() {
  return (
    <div className="grid min-h-[60vh] place-items-center bg-surface-container-low">
      <div className="text-center">
        <p className="label-caps mb-4 text-secondary">Preparing Cinematic Experience</p>
        <div className="mx-auto h-px w-24 overflow-hidden bg-outline-variant/40">
          <div className="h-full w-1/3 animate-[shimmer_1.8s_infinite] bg-secondary" />
        </div>
      </div>
    </div>
  );
}

