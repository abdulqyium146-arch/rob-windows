import { Shield, Award, Clock, ThumbsUp, Star, MapPin } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "£5m Insured",
    description: "Fully covered public liability",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Star,
    title: "4.9★ Rated",
    description: "127+ verified customer reviews",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: Award,
    title: "10+ Years",
    description: "Experienced local professionals",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: Clock,
    title: "Reliable",
    description: "We text you before every visit",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: ThumbsUp,
    title: "No Contract",
    description: "Cancel anytime, no lock-in",
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
  {
    icon: MapPin,
    title: "Local",
    description: "Based in Newquay, Cornwall",
    color: "text-brand-600",
    bg: "bg-brand-50",
  },
];

interface TrustBadgesProps {
  className?: string;
  variant?: "grid" | "row";
}

export default function TrustBadges({ className, variant = "grid" }: TrustBadgesProps) {
  if (variant === "row") {
    return (
      <div className={`flex flex-wrap justify-center gap-6 ${className ?? ""}`}>
        {badges.map((badge) => (
          <div key={badge.title} className="flex items-center gap-2.5">
            <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${badge.bg}`}>
              <badge.icon className={`h-4 w-4 ${badge.color}`} />
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-900">{badge.title}</div>
              <div className="text-xs text-slate-500">{badge.description}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-2 sm:grid-cols-3 gap-4 ${className ?? ""}`}>
      {badges.map((badge) => (
        <div
          key={badge.title}
          className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-soft"
        >
          <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${badge.bg}`}>
            <badge.icon className={`h-5 w-5 ${badge.color}`} />
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-900">{badge.title}</div>
            <div className="text-xs text-slate-500 leading-relaxed mt-0.5">{badge.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
