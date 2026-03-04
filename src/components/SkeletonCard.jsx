export default function SkeletonCard() {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] animate-pulse">
      {/* Image placeholder */}
      <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-700" />

      {/* Content skeleton */}
      <div className="flex flex-col gap-3 p-5">
        <div className="flex justify-between">
          <div className="h-5 w-16 rounded-md bg-gray-700/60" />
          <div className="h-5 w-10 rounded-md bg-gray-700/60" />
        </div>
        <div className="h-5 w-3/4 rounded-md bg-gray-700/60" />
        <div className="h-4 w-full rounded-md bg-gray-700/40" />
        <div className="h-4 w-2/3 rounded-md bg-gray-700/40" />
        <div className="mt-auto flex items-end justify-between pt-2">
          <div className="h-8 w-24 rounded-md bg-gray-700/60" />
          <div className="h-10 w-20 rounded-xl bg-gray-700/60" />
        </div>
      </div>
    </div>
  );
}
