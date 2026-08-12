import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Illustration } from "@/components/ui/Illustration";
import {
  isIllustration,
  type IllustrationName,
} from "@/lib/illustrations";
import type { LandingCta } from "@/lib/types";

type UspCardProps = {
  title: string;
  description: string;
  /** Images-frame illustration name (preferred over freeform image). */
  illustration?: string;
  /** Optional image URL when not using catalog illustration. */
  imageSrc?: string;
  imageAlt?: string;
  /** Learn more link — maps to Figma Learn more=on. */
  learnMore?: LandingCta;
};

/**
 * “Why Fusion…” USP card — Cards frame 15166:10610.
 * Do not use for generic benefits; only USP selling points.
 */
export function UspCard({
  title,
  description,
  illustration,
  imageSrc,
  imageAlt = "",
  learnMore,
}: UspCardProps) {
  const illo =
    illustration && isIllustration(illustration)
      ? (illustration as IllustrationName)
      : null;

  return (
    <Card variant="usp">
      <div className="ui-card__media ui-card__media--usp">
        {illo ? (
          <Illustration name={illo} size="lg" framed={false} />
        ) : imageSrc ? (
          <img
            className="ui-card__media-img"
            src={imageSrc}
            alt={imageAlt}
            width={180}
            height={180}
            loading="lazy"
            decoding="async"
          />
        ) : null}
      </div>
      <div className="ui-card__body">
        <div className="ui-card__copy">
          <h3 className="ui-card__title ui-card__title--usp">{title}</h3>
          <p className="ui-card__desc">
            {description.split("\n\n").map((para, i, arr) => (
              <span key={para.slice(0, 24)} className="ui-card__desc-p">
                {para}
                {i < arr.length - 1 ? (
                  <>
                    <br />
                    <br />
                  </>
                ) : null}
              </span>
            ))}
          </p>
        </div>
        {learnMore ? (
          <div className="ui-card__footer">
            <Button
              href={learnMore.href}
              variant="text"
              size="md"
              arrow
              className="ui-card__learn-more"
            >
              {learnMore.label || "Learn more"}
            </Button>
          </div>
        ) : null}
      </div>
    </Card>
  );
}
