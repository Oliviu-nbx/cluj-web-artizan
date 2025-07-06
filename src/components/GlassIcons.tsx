import "./GlassIcons.css";
const gradientMapping = {
  blue: "linear-gradient(hsl(223, 90%, 50%), hsl(208, 90%, 50%))",
  purple: "linear-gradient(hsl(283, 90%, 50%), hsl(268, 90%, 50%))",
  red: "linear-gradient(hsl(3, 90%, 50%), hsl(348, 90%, 50%))",
  indigo: "linear-gradient(hsl(253, 90%, 50%), hsl(238, 90%, 50%))",
  orange: "linear-gradient(hsl(43, 90%, 50%), hsl(28, 90%, 50%))",
  green: "linear-gradient(hsl(123, 90%, 40%), hsl(108, 90%, 40%))"
};
interface GlassIconItem {
  icon: React.ReactNode;
  color: string;
  label: string;
  customClass?: string;
}
interface GlassIconsProps {
  items: GlassIconItem[];
  className?: string;
}
const GlassIcons = ({
  items,
  className
}: GlassIconsProps) => {
  const getBackgroundStyle = (color: string) => {
    if (gradientMapping[color as keyof typeof gradientMapping]) {
      return {
        background: gradientMapping[color as keyof typeof gradientMapping]
      };
    }
    return {
      background: color
    };
  };
  return;
};
export default GlassIcons;