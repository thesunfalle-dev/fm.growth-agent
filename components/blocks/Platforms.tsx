"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { StoreDownloadButton } from "@/components/ui/StoreDownloadButton";
import { Tabs } from "@/components/ui/Tabs";
import { Text } from "@/components/ui/Text";
import { blockDefaults } from "@/lib/block-defaults";
import { isMaterialIcon } from "@/lib/icons";
import type { LandingCta, PlatformStore } from "@/lib/types";

export type PlatformItem = {
  id: string;
  label: string;
  icon?: string;
  title: string;
  body?: string;
  bullets?: string[];
  imageSrc?: string;
  primaryCta?: LandingCta;
  stores?: PlatformStore[];
};

type PlatformsProps = {
  title?: string;
  subtitle?: string;
  items: PlatformItem[];
};

/**
 * Choose Your Platform — Figma desktop `28610:429747` /
 * mobile `28610:431359`. Tabs_Icon + device mock + panel.
 */
export function Platforms({
  title = blockDefaults.platforms.title,
  subtitle,
  items,
}: PlatformsProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const active = items.find((item) => item.id === activeId) ?? items[0];
  if (!active) return null;

  const tabs = items.map((item) => ({
    id: item.id,
    label: item.label,
    icon: item.icon && isMaterialIcon(item.icon) ? item.icon : undefined,
  }));

  return (
    <Section id="platforms" className="ui-section--platforms">
      <Container>
        <div className="ui-platforms">
          <div className="ui-platforms__intro">
            {title ? <Heading variant="section">{title}</Heading> : null}
            {subtitle ? <Text variant="lead">{subtitle}</Text> : null}
          </div>
          <div className="ui-platforms__media">
            <img
              className="ui-platforms__device"
              src={active.imageSrc ?? blockDefaults.platforms.imageSrc}
              alt=""
              width={500}
              height={375}
            />
          </div>
          <Tabs
            items={tabs}
            value={active.id}
            onChange={setActiveId}
            variant="icon"
            className="ui-platforms__tabs"
          />
          <div className="ui-platforms__copy">
            {items.map((item) => {
              const isActive = item.id === active.id;
              return (
                <div
                  key={item.id}
                  className={
                    isActive
                      ? "ui-platforms__panel is-active"
                      : "ui-platforms__panel"
                  }
                  role="tabpanel"
                  aria-hidden={!isActive}
                  inert={!isActive ? true : undefined}
                >
                  <h3 className="ui-platforms__name">{item.title}</h3>
                  {item.body ? (
                    <Text variant="lead" className="ui-platforms__body">
                      {item.body}
                    </Text>
                  ) : null}
                  {item.bullets?.length ? (
                    <ul className="ui-platforms__list">
                      {item.bullets.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  ) : null}
                  {item.stores?.length ? (
                    <div className="ui-platforms__stores">
                      {item.stores.map((store) => (
                        <StoreDownloadButton
                          key={store.id}
                          store={store.store}
                          href={store.href}
                        />
                      ))}
                    </div>
                  ) : item.primaryCta ? (
                    <Button href={item.primaryCta.href} variant="primary" size="lg">
                      {item.primaryCta.label}
                    </Button>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
