import Image from "next/image";

type LogoProps = {
    size?: number;
    className?: string;
    priority?: boolean;
};

export function Logo({ size = 36, className = "", priority = false }: LogoProps) {
    return (
        <Image
            src="/logo.svg"
            alt="LookOver logo"
            width={size}
            height={size}
            className={`drop-shadow-glow ${className}`.trim()}
            style={{ filter: "brightness(0) invert(1)" }}
            priority={priority}
        />
    );
}
