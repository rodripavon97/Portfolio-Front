import { Icon } from "@iconify/react";
import React from "react";
import { ISocialMedia } from "../../interfaces/ISocialMedia";
import { Link } from "react-router-dom";

export interface SocialMediaProps {
  media: ISocialMedia[];
}

const SocialMedia: React.FunctionComponent<SocialMediaProps> = ({
  media,
}: SocialMediaProps) => {
  return (
    <main className="container">
      {media.map((socialmedia, index) => (
        <>
          <Link  to={socialmedia.link} key={index}>
            <Icon
              icon={socialmedia.icon}
              color="#A3333D"
              style={{ fontSize: 30 }}
              className="icon-efect m-2"
            />
          </Link>
        </>
      ))}
    </main>
  );
};
export default SocialMedia;
