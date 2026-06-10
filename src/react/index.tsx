import {
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type InputHTMLAttributes,
  type LabelHTMLAttributes,
  type ReactNode,
  type SelectHTMLAttributes,
  type TextareaHTMLAttributes,
  forwardRef,
} from 'react';

type ClassValue = false | null | undefined | string;

function cx(...classes: ClassValue[]) {
  return classes.filter(Boolean).join(' ');
}

export type AWMSize = 'sm' | 'md' | 'lg';
export type AWMIntent = 'accent' | 'success' | 'warning' | 'danger';

export type ButtonVariant = 'primary' | 'secondary' | 'ink' | 'ghost' | 'danger';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: AWMSize;
  block?: boolean;
  iconOnly?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'secondary', size = 'md', block = false, iconOnly = false, className, ...props }, ref) => (
    <button
      ref={ref}
      className={cx(
        'awm-btn',
        `awm-btn--${variant}`,
        size !== 'md' && `awm-btn--${size}`,
        block && 'awm-btn--block',
        iconOnly && 'awm-icon-btn',
        className,
      )}
      {...props}
    />
  ),
);
Button.displayName = 'Button';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  muted?: boolean;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(({ muted = false, className, ...props }, ref) => (
  <a ref={ref} className={cx('awm-link', muted && 'awm-link--muted', className)} {...props} />
));
Link.displayName = 'Link';

export interface FieldProps extends HTMLAttributes<HTMLDivElement> {
  label?: ReactNode;
  htmlFor?: string;
  hint?: ReactNode;
  error?: ReactNode;
  required?: boolean;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
}

export function Field({
  label,
  htmlFor,
  hint,
  error,
  required = false,
  labelProps,
  className,
  children,
  ...props
}: FieldProps) {
  return (
    <div className={cx('awm-field', className)} {...props}>
      {label ? (
        <label {...labelProps} className={cx('awm-label', labelProps?.className)} htmlFor={htmlFor}>
          {label}
          {required ? <span className="awm-req">*</span> : null}
        </label>
      ) : null}
      {children}
      {hint ? <span className="awm-hint">{hint}</span> : null}
      {error ? <span className="awm-error-text">{error}</span> : null}
    </div>
  );
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ error = false, className, ...props }, ref) => (
  <input ref={ref} className={cx('awm-input', error && 'is-error', className)} {...props} />
));
Input.displayName = 'Input';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ error = false, className, ...props }, ref) => (
    <textarea ref={ref} className={cx('awm-textarea', error && 'is-error', className)} {...props} />
  ),
);
Textarea.displayName = 'Textarea';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(({ error = false, className, ...props }, ref) => (
  <select ref={ref} className={cx('awm-select', error && 'is-error', className)} {...props} />
));
Select.displayName = 'Select';

export interface InputGroupProps extends HTMLAttributes<HTMLDivElement> {
  affix?: ReactNode;
}

export function InputGroup({ affix, className, children, ...props }: InputGroupProps) {
  return (
    <div className={cx('awm-input-group', className)} {...props}>
      {affix ? <span className="awm-affix">{affix}</span> : null}
      {children}
    </div>
  );
}

export interface CheckProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: ReactNode;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckProps>(({ label, className, children, ...props }, ref) => (
  <label className={cx('awm-check', className)}>
    <input ref={ref} type="checkbox" {...props} />
    <span className="awm-box">
      <svg viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <path d="M2.5 6.5 5 9l4.5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
    {label ?? children}
  </label>
));
Checkbox.displayName = 'Checkbox';

export const Radio = forwardRef<HTMLInputElement, CheckProps>(({ label, className, children, ...props }, ref) => (
  <label className={cx('awm-check', 'awm-check--radio', className)}>
    <input ref={ref} type="radio" {...props} />
    <span className="awm-box">
      <span className="awm-dot" />
    </span>
    {label ?? children}
  </label>
));
Radio.displayName = 'Radio';

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: ReactNode;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(({ label, className, children, ...props }, ref) => (
  <label className={cx('awm-switch', className)}>
    <input ref={ref} type="checkbox" {...props} />
    <span className="awm-track">
      <span className="awm-thumb" />
    </span>
    {label ?? children}
  </label>
));
Switch.displayName = 'Switch';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  flush?: boolean;
  hover?: boolean;
}

export function Card({ flush = false, hover = false, className, ...props }: CardProps) {
  return <div className={cx('awm-card', flush && 'awm-card--flush', hover && 'awm-card--hover', className)} {...props} />;
}

export function CardEyebrow({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cx('awm-card__eyebrow', className)} {...props} />;
}

export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  serif?: boolean;
}

export function CardTitle({ serif = false, className, ...props }: CardTitleProps) {
  return <h3 className={cx('awm-card__title', serif && 'awm-card__title--serif', className)} {...props} />;
}

export function CardBody({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cx('awm-card__body', className)} {...props} />;
}

export type BadgeVariant = 'default' | AWMIntent | 'ink';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  dot?: boolean;
}

export function Badge({ variant = 'default', dot = false, className, children, ...props }: BadgeProps) {
  return (
    <span className={cx('awm-badge', variant !== 'default' && `awm-badge--${variant}`, className)} {...props}>
      {dot ? <span className="awm-badge__dot" /> : null}
      {children}
    </span>
  );
}

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  accent?: boolean;
  onRemove?: () => void;
  removeLabel?: string;
}

export function Tag({ accent = false, onRemove, removeLabel = 'Remove tag', className, children, ...props }: TagProps) {
  return (
    <span className={cx('awm-tag', accent && 'awm-tag--accent', className)} {...props}>
      {children}
      {onRemove ? (
        <button type="button" className="awm-tag__x" aria-label={removeLabel} onClick={onRemove}>
          <svg width="9" height="9" viewBox="0 0 10 10" fill="none" aria-hidden="true">
            <path d="M2 2l6 6M8 2l-6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </button>
      ) : null}
    </span>
  );
}

export function Tabs({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cx('awm-tabs', className)} {...props} />;
}

export function TabList({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cx('awm-tabs__list', className)} role="tablist" {...props} />;
}

export interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export const Tab = forwardRef<HTMLButtonElement, TabProps>(({ active = false, className, ...props }, ref) => (
  <button
    ref={ref}
    type="button"
    role="tab"
    aria-selected={active}
    className={cx('awm-tab', active && 'is-active', className)}
    {...props}
  />
));
Tab.displayName = 'Tab';

export function Segmented({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cx('awm-segmented', className)} role="group" {...props} />;
}

export interface SegmentedItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export const SegmentedItem = forwardRef<HTMLButtonElement, SegmentedItemProps>(
  ({ active = false, className, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      aria-pressed={active}
      className={cx('awm-segmented__item', active && 'is-active', className)}
      {...props}
    />
  ),
);
SegmentedItem.displayName = 'SegmentedItem';

export function Breadcrumbs({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return <nav className={cx('awm-breadcrumbs', className)} aria-label="Breadcrumb" {...props} />;
}

export function BreadcrumbSeparator({ className, children = '/', ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={cx('awm-breadcrumbs__sep', className)} {...props}>
      {children}
    </span>
  );
}

export function Menu({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cx('awm-menu', className)} {...props} />;
}

export interface MenuItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  danger?: boolean;
  meta?: ReactNode;
  icon?: ReactNode;
}

export const MenuItem = forwardRef<HTMLButtonElement, MenuItemProps>(
  ({ active = false, danger = false, meta, icon, className, children, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      className={cx('awm-menu__item', active && 'is-active', danger && 'is-danger', className)}
      {...props}
    >
      {icon ? <span className="awm-menu__icon">{icon}</span> : null}
      {children}
      {meta ? <span className="awm-menu__meta">{meta}</span> : null}
    </button>
  ),
);
MenuItem.displayName = 'MenuItem';

export function MenuSeparator({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cx('awm-menu__sep', className)} {...props} />;
}

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  placement?: TooltipPlacement;
}

export function Tooltip({ placement = 'top', className, ...props }: TooltipProps) {
  return <div className={cx('awm-tooltip', `awm-tooltip--${placement}`, className)} role="tooltip" {...props} />;
}

export type AlertVariant = 'default' | AWMIntent;

export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  variant?: AlertVariant;
  icon?: ReactNode;
  title?: ReactNode;
}

export function Alert({ variant = 'default', icon, title, className, children, ...props }: AlertProps) {
  return (
    <div className={cx('awm-alert', variant !== 'default' && `awm-alert--${variant}`, className)} role="status" {...props}>
      {icon ? <span className="awm-alert__icon">{icon}</span> : null}
      <div>
        {title ? <strong className="awm-alert__title">{title}</strong> : null}
        {children ? <p className="awm-alert__body">{children}</p> : null}
      </div>
    </div>
  );
}

export function ModalScrim({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cx('awm-modal-scrim', className)} {...props} />;
}

export function Modal({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cx('awm-modal', className)} role="dialog" aria-modal="true" {...props} />;
}

export function ModalHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cx('awm-modal__header', className)} {...props} />;
}

export function ModalTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return <h2 className={cx('awm-modal__title', className)} {...props} />;
}

export function ModalBody({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cx('awm-modal__body', className)} {...props} />;
}

export function ModalFooter({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cx('awm-modal__footer', className)} {...props} />;
}

export interface ToastProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  icon?: ReactNode;
  title?: ReactNode;
}

export function Toast({ icon, title, className, children, ...props }: ToastProps) {
  return (
    <div className={cx('awm-toast', className)} role="status" {...props}>
      {icon ? <span className="awm-toast__icon">{icon}</span> : null}
      <div className="awm-toast__body">
        {title ? <strong className="awm-toast__title">{title}</strong> : null}
        {children ? <span className="awm-toast__msg">{children}</span> : null}
      </div>
    </div>
  );
}

export function TableWrap({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cx('awm-table-wrap', className)} {...props} />;
}

export function Table({ className, ...props }: HTMLAttributes<HTMLTableElement>) {
  return <table className={cx('awm-table', className)} {...props} />;
}

export function Empty({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cx('awm-empty', className)} {...props} />;
}

export function EmptyIcon({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cx('awm-empty__icon', className)} {...props} />;
}

export function EmptyTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cx('awm-empty__title', className)} {...props} />;
}

export function EmptyBody({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cx('awm-empty__body', className)} {...props} />;
}

export function EmptyActions({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cx('awm-empty__actions', className)} {...props} />;
}
