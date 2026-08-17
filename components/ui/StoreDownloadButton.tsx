import type { PlatformStoreId } from "@/lib/types";

const STORE_META: Record<
  PlatformStoreId,
  { label: string; iconSrc: string }
> = {
  mac: { label: "For MacOS", iconSrc: "/brand/stores/apple.svg" },
  windows: { label: "For Windows", iconSrc: "/brand/stores/windows.svg" },
  linux: { label: "For Linux", iconSrc: "/brand/stores/linux.svg" },
};

type StoreDownloadButtonProps = {
  store: PlatformStoreId;
  href: string;
};

/** Store download button — Figma 28610:429962 (144×48 desktop / 343×40 mobile). */
export function StoreDownloadButton({ store, href }: StoreDownloadButtonProps) {
  const meta = STORE_META[store];
  return (
    <a
      className={`ui-store-btn ui-store-btn--${store}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="ui-store-btn__copy">
        <span className="ui-store-btn__eyebrow">Download</span>
        <span className="ui-store-btn__label">{meta.label}</span>
      </span>
      <span className="ui-store-btn__icon">
        <img src={meta.iconSrc} alt="" width={24} height={24} />
      </span>
    </a>
  );
}
