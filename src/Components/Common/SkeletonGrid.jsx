const SkeletonCard = () => (
  <div className="bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-sm">
    <div className="relative h-[320px] overflow-hidden bg-gray-100">
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite] bg-gradient-to-r from-transparent via-white/70 to-transparent" />
    </div>
    <div className="p-7 space-y-4">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-3 flex-1">
          <div className="h-6 w-2/3 rounded-full bg-gray-100 relative overflow-hidden">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite] bg-gradient-to-r from-transparent via-white/70 to-transparent" />
          </div>
          <div className="h-4 w-full rounded-full bg-gray-100 relative overflow-hidden">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite] bg-gradient-to-r from-transparent via-white/70 to-transparent" />
          </div>
          <div className="h-4 w-3/4 rounded-full bg-gray-100 relative overflow-hidden">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite] bg-gradient-to-r from-transparent via-white/70 to-transparent" />
          </div>
        </div>
        <div className="h-9 w-16 rounded-full bg-gray-100 shrink-0" />
      </div>
      <div className="mt-8 flex gap-3">
        <div className="flex-1 h-12 rounded-2xl bg-gray-100" />
        <div className="flex-1 h-12 rounded-2xl bg-gray-100" />
      </div>
    </div>
  </div>
)

const SkeletonGrid = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  )
}

export default SkeletonGrid
