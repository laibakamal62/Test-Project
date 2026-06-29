export default function Loading() {
    return (
        <div className="flex items-center justify-center min-h-[70vh]">
            <div className="flex flex-col items-center gap-4">
                <span className="w-12 h-12 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin" />
                <p className="text-muted-foreground text-sm font-semibold animate-pulse">Loading portfolio resources...</p>
            </div>
        </div>
    );
}
