import Image from "next/image";
import { Title } from "@components/parts/Title";
import portfolioListStyles from "@styles/portfolio/portfolioList.module.scss";
import { portfolioItems } from "./portfolioData";

export const PortfolioList = () => {
  return (
    <div className={portfolioListStyles.box}>
      {portfolioItems.map((item) => (
        <div key={item.title} className={portfolioListStyles.content}>
          <figure>
            <Image
              src={item.imageSrc}
              alt={item.imageAlt}
              className={portfolioListStyles.image}
              width={412}
              height={260}
            />
          </figure>
          <div className={portfolioListStyles.textbox}>
            <Title level="h3">{item.title}</Title>
            {item.descriptions.map((description) => (
              <p key={description} className={portfolioListStyles.text}>
                {description}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
