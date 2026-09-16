import {
  siSpringboot,
  siSpringsecurity,
  siJsonwebtokens,
  siReact,
  siNextdotjs,
  siTypescript,
  siTailwindcss,
  siFramer,
  siGreensock,
  siMysql,
  siFlyway,
  siJunit5,
  siPostman,
  siGit,
  siCursor,
  siCloudinary,
  siGithubcopilot,
  siClaude,
  siJavascript,
  siNodedotjs,
  siExpress,
  siFlutter,
  siKotlin,
  siSwift,
  siAndroid,
  siExpo,
  siPostgresql,
  siMongodb,
  siFirebase,
  siJest,
  siCypress,
  siDocker,
  siFigma,
  siGithub,
  siVercel,
} from "simple-icons";
import type { TechIcon as TechIconType } from "@/types/profile";

const SIMPLE_ICONS: Record<string, { path: string; hex: string }> = {
  siSpringboot,
  siSpringsecurity,
  siJsonwebtokens,
  siReact,
  siNextdotjs,
  siTypescript,
  siTailwindcss,
  siFramer,
  siGreensock,
  siMysql,
  siFlyway,
  siJunit5,
  siPostman,
  siGit,
  siCursor,
  siCloudinary,
  siGithubcopilot,
  siClaude,
  siJavascript,
  siNodedotjs,
  siExpress,
  siFlutter,
  siKotlin,
  siSwift,
  siAndroid,
  siExpo,
  siPostgresql,
  siMongodb,
  siFirebase,
  siJest,
  siCypress,
  siDocker,
  siFigma,
  siGithub,
  siVercel,
};

interface TechIconProps {
  icon: TechIconType;
  size?: number;
}

export function TechIcon({ icon, size = 22 }: TechIconProps) {
  if (icon.source === "local") {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={icon.src} alt="" width={size} height={size} className="shrink-0" aria-hidden />;
  }

  const data = SIMPLE_ICONS[icon.slug];
  if (!data) return null;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className="shrink-0"
      aria-hidden
      style={{ fill: `#${data.hex}` }}
    >
      <path d={data.path} />
    </svg>
  );
}
