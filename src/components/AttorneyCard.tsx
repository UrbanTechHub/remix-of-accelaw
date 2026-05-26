import { Link } from "react-router-dom";
import { Mail, ArrowUpRight } from "lucide-react";
import { Attorney } from "@/data/attorneys";
import { cn } from "@/lib/utils";

interface AttorneyCardProps {
  attorney: Attorney;
  className?: string;
}

export function AttorneyCard({ attorney, className }: AttorneyCardProps) {
  return (
    <Link
      to={`/attorneys/${attorney.id}`}
      className={cn("group block", className)}
    >
      <div className="card-elegant overflow-hidden h-full">
        <div className="aspect-[4/5] overflow-hidden bg-secondary relative">
          <img
            src={attorney.image}
            alt={attorney.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
              <ArrowUpRight className="h-5 w-5 text-accent-foreground" />
            </div>
          </div>
        </div>
        <div className="p-5 sm:p-6">
          <h3 className="heading-card text-foreground">
            {attorney.name}
          </h3>
          <p className="text-xs sm:text-sm text-accent font-medium mt-1 tracking-wide uppercase">
            {attorney.title}
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4 line-clamp-2">
            {attorney.practiceAreas.join(" · ")}
          </p>
          <div className="mt-4 sm:mt-5 pt-4 sm:pt-5 border-t border-border space-y-2 sm:space-y-3">
            <a
              href={`mailto:${attorney.email}`}
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground"
            >
              <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
              <span className="truncate">{attorney.email}</span>
            </a>
          </div>
        </div>
      </div>
    </Link>
  );
}
