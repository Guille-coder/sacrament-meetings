export default function Loading() {
  return (
    <div
      className="flex min-h-[300px] items-center justify-center"
      aria-label="Loading meetings"
    >
      <div className="text-center">
        <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-slate-300 border-t-blue-600" />

        <p className="text-slate-600">
          Loading meetings...
        </p>
      </div>
    </div>
  );
}