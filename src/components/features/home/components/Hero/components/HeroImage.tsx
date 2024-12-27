import Image from "next/image";
import { memo } from "react";

import { siteConfig } from "@/config/site";

export const HeroImage = memo(function HeroImage() {
	return (
		<Image
			alt="Picture of the author"
			className="m-auto mb-0 h-auto w-full max-w-md justify-center object-cover object-center lg:m-auto lg:max-w-xl"
			src={siteConfig.assets.avatar}
			sizes="(max-width: 768px) 100vw, 50vw"
			quality={90}
			placeholder="blur"
			blurDataURL="data:image/svg+xml;base64,..."
			width={800}
			height={800}
		/>
	);
});
