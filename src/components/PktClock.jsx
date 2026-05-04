import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

const formatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Karachi",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false
});

const PktClock = () => {
  const [time, setTime] = useState(() => formatter.format(new Date()));

  useEffect(() => {
    const id = setInterval(() => setTime(formatter.format(new Date())), 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-border/60 bg-secondary/50 text-base md:text-lg text-foreground font-mono tabular-nums shadow-glow">
      <Clock className="w-5 h-5 md:w-6 md:h-6 text-primary" />
      {time} <span className="text-muted-foreground text-sm md:text-base">PKT</span>
    </span>);

};

export default PktClock;