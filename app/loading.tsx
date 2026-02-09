import { Skeleton } from "@/components/Skeleton";

export default function Loading() {
    return (
        <div className="container px-4 md:px-6 py-6 mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-6 justify-between items-center bg-muted/30 p-4 rounded-lg">
                <Skeleton className="h-8 w-48" />
                <Skeleton className="h-10 w-full md:w-64" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="flex flex-col gap-3">
                        <Skeleton className="aspect-[4/3] w-full rounded-lg" />
                        <div className="space-y-2">
                            <Skeleton className="h-6 w-3/4" />
                            <Skeleton className="h-4 w-full" />
                            <div className="flex justify-between items-center pt-2">
                                <Skeleton className="h-6 w-20" />
                                <Skeleton className="h-6 w-12" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
